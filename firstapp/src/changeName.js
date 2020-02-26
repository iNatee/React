import React, { createElement } from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends React.Component {
    render() {
      return(
      <div>
        <p>Hello World</p>
        <br/>
        <hr/>
        <br/>
      </div>
      )}
  }

  /******************************************************************************************************************************************/

  class VisitorName extends React.Component {
    handleChange = (e) => {
      this.props.updateVisitorName(e.target.value)
    };
    render() {
      return(
        <input type="text"
        placeholder="Enter Your Name"
        value={this.props.VisitorName}
        onChange={this.handleChange} />
      )
    };
  }

  class RealTimeText extends React.Component {
    state = {
      visitorName:''
    };


    updateVisitorName = (name) => {
      this.setState({visitorName: name})
    }
    render() {
      return (
        <div>
          <VisitorName visitorName={this.state.visitorName}
                       updateVisitorName={this.updateVisitorName} />
          <button type='button' onClick={this.clearText}>Clear</button>
        <br/>
        <p>Hello, {this.state.visitorName || 'visitor'}</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <RealTimeText/>, 
    document.getElementById('root')
  )
  
