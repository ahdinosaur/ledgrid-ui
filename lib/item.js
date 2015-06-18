var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

var style = Stylesheet.create({
  item: {
    flex: '1 1 auto'
  }
})

module.exports = React.createClass({
  render: function () {
    var size = this.props.size

    return r.div({
      className: style.item,
    }, this.props.children)
  }
})
