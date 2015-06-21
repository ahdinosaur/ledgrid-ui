var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')
var Color = require('tinycolor2')

var style = Stylesheet.create({
  item: {
    flex: '1 1 auto'
  }
})

module.exports = React.createClass({
  render: function () {
    var color = Color(this.props.color)

    return r.div({
      className: style.item,
      style: {
        backgroundColor: color.toHexString()
      }
    }, this.props.children)
  }
})
