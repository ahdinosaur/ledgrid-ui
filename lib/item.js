var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

var style = Stylesheet.create({
  item: {
    //flexGrow: '1'
  }
})

module.exports = React.createClass({
  render: function () {
    var size = this.props.size

    return r.div({
      className: style.item,
      style: {
        flexBasis: size[0],
        width: size[0],
        height: size[1]
      }
    }, this.props.children)
  }
})
