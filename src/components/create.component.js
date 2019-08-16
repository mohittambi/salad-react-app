import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createFruit } from '../actions/fruitActions';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      quantity: ''
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const postData = {
      id: '104',
      name: this.state.name,
      quantity: this.state.quantity
    };

    // Call Action
    this.props.createFruit(postData);

    this.setState({
      name: '',
      quantity: ''
    })
  }

  render() {

    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New Fruit</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Fruit Name:  </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Fruit Quantity: </label>
            <input type="text"
              name="quantity"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Save Fruit"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

Create.propTypes = {
  createFruit: PropTypes.func.isRequired
}

export default connect(null, { createFruit })(Create);