## React Moodycons
React SVG component for emoji mood icons
[See them in action](http://dhunninghake.com/react-moodycons)

## Getting Started
`npm i react-moodycons -D`
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

### Available props
- `name` - single word icon name (required)
- `fill` - color of the icon
- `width` - in the form of width={100}
- `height` - in the form of height={100}

MIT License