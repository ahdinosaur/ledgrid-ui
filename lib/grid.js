var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

var Item = require('./item')

var style = Stylesheet.create({
  grid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContext: 'flex-start',
    alignItems: 'stretch'
  }
})

module.exports = React.createClass({

  getInitialState: function () {
    return {
      gridSize: [1, 1]
    }
  },

  componentDidMount: function () {
    var dom = React.findDOMNode(this)

    console.log("client", dom.clientWidth, dom.clientHeight)

    this.setState({
      gridSize: [
        dom.clientWidth,
        dom.clientHeight
      ]
    })
  },

  render: function () {
    var data = this.props.data
    var shape = this.props.shape
    var gridSize = this.state.gridSize

    var itemSize = [
      gridSize[0] / shape[0],
      gridSize[1] / shape[1]
    ]

    return r.div({
      className: style.grid
    }, data.map(function (datum) {
      return r(Item, {
        size: itemSize
      }, datum)
    }))
  }
})
