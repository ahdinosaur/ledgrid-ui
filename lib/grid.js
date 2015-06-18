var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')
var take = require('lodash.take')
var chunk = require('lodash.chunk')

var Row = require('./row')
var Item = require('./item')

var style = Stylesheet.create({
  grid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})

module.exports = React.createClass({

  render: function () {
    var data = this.props.data
    var shape = this.props.shape

    return r.div({
      className: style.grid
    },
      chunk(data, shape[0]).map(function (rows) {
        return r(Row, {},
          take(rows, shape[1]).map(function (items) {
            return r(Item, {})
          })
        )
      })
    )
  }
})
