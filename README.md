## React Moodycons
React SVG component for emoji mood icons

[See them in action](http://dhunninghake.com/react-moodycons)

## Getting Started
```bash
npm i react-moodycons -D
```
```javascript
import React from 'react';
import Icon from 'react-moodycons';

module.exports = React.createClass({
  render: function() {
    return (
      <Icon name='grinning' />
    );
  }
});
```

## Available props
- `name` - single word icon name (required)
- `fill` - string, inherits from parent by default
- `width` - number, defaults to 50
- `height` - number, defaults to 50

## Accessibility
This module is fully accessible! Output looks like this:
```html
<svg role="img" aria-labelledby="grinning" "...">
  <title id="grinning">grinning icon</title>
  <path d="..."></path>
</svg>
```

<3

MIT License