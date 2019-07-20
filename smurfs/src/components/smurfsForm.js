import React, { Component } from 'react';
import {postSmurf} from '../actions';
import { connect } from 'react-redux';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = e => {
    e.preventDefault();
    const {name, age, height} = this.state
    const newSumurf = {name, age, height}
     this.props.postSmurf(newSumurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {
    return (
      <div >
        <form onSubmit={this.addSmurf}>       
       
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
       
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
        
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
        
          <button type="submit" >Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
	postSmurf,
}

export default connect(null, mapDispatchToProps)(SmurfForm);
