import React, { Component, Children } from 'react'

export default class Parent extends Component {
    state = {
        total: 0,
        current: 0
    }

    componentDidMount(){        
      const { children } = this.props
      this.setState({total: Children.count(children)})
      this.interval = setInterval(this.showNext, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    showNext = () => {
        const { current, total  } = this.state
        this.setState({
            current: current + 1 === total ? 0 : current + 1
        })
    }

  render() {
      const { children } = this.props
      const bullets = Array(this.state.total).fill('○')
      bullets[this.state.current] = '●'
    return (    
      <div>
        {Children.toArray(children)[this.state.current]}
        <div>{bullets}</div>
      </div>
    )
  }
}
