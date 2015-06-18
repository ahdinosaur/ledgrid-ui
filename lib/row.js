var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

var Item = require('./item')

var style = Stylesheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: '1 1 auto'
  }
})

module.exports = React.createClass({
  render: function () {
    var size = this.props.size

    return r.div({
      className: style.row,
    }, this.props.children)
  }
})
