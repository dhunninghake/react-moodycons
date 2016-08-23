import React, { Children, cloneElement, isValidElement } from 'react';
import { vStyleSheet, camelToHyphen, guid } from './utils';

const buildDeclarations = (styles) => {
  let declarations = '';
  Object.keys(styles).forEach(s => {
    const cssProperty = camelToHyphen(s);
    const declaration = `${cssProperty}: ${styles[s]};`;

    if (!s.startsWith('@')) {
      declarations = declarations.concat(declaration);
    }
  });
  return declarations;
};

const buildRuleset = (node) => {
  const styles = node.props.vStyle;
  const className = `v-${guid()}`;
  const declarations = buildDeclarations(styles);
  const rule = `.${className} { ${declarations} }`;

  vStyleSheet.insertRule(rule, vStyleSheet.rules.length);

  Object.keys(styles).forEach(s => {
    if (s.startsWith('@')) {
      const declarations = buildDeclarations(styles[s]);
      const rule = `${s} { .${className} { ${declarations} } }`;

      vStyleSheet.insertRule(rule, vStyleSheet.rules.length);
    }
  });

  return className;
};

export default function v(el) {

  const cloneChildren = (children) => {
    return Children.map(children, c => {
      if (c && c.props && c.props.vStyle) {
        const classes   = c.props.className;
        const newClass  = buildRuleset(c);
        const combined  = `${newClass} ${classes}`;
        const className = classes ? combined : newClass;

        let childProps = {};
        if (isValidElement(c)) {
          childProps = { className: className };
        }

        childProps.children = cloneChildren(c.props.children);
        return cloneElement(c, childProps);
      }
      return c;
    })
  }

  return cloneElement(el, {
    className: (() => {
      if (el.props.vStyle) {
        const classes  = el.props.className;
        const newClass = buildRuleset(el);
        const combined = `${newClass} ${classes}`;
        
        return classes ? combined : newClass;
      }
      return el;
    })(),
    children: cloneChildren(el.props.children)
  });

}