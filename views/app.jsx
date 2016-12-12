import React from 'react'
// import superagent from 'superagent'
module.exports = React.createClass({
  getInitialState(){
    return{
      stats:{}
    }
  },
  // componentDidMount(){
  //   // superagent.get(`${API_URL}/stats`).end((error,response)=>{
  //   //   this.setState({
  //   //     stats:response.body
  //   //   })
  //   // })
  // },
  render() {
    return <div className="app">
      <h1>hello</h1>
    </div>
  }
})
