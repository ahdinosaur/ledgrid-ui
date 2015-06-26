var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

var Grid = require('./lib/grid')

var style = Stylesheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

module.exports = React.createClass({
  render: function () {
    return r.div({
      className: style.container
    }, [
      r(Grid, this.props)
    ])
  }
})
