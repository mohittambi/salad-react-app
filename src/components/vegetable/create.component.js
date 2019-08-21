import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createVegetable } from '../../actions/vegetableActions';
let uuid = require('uuid');

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
    const id = uuid.v1();
    const postData = {
      id: id,
      typeName: 'Vegetable',
      name: this.state.name,
      quantity: this.state.quantity
    };

    // Call Action
    this.props.createVegetable(postData);

    this.setState({
      name: '',
      quantity: ''
    })
  }

  render() {

    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New Vegetable</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Vegetable Name:  </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Vegetable Quantity: </label>
            <input type="text"
              name="quantity"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Save Vegetable"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

Create.propTypes = {
  createVegetable: PropTypes.func.isRequired
}

export default connect(null, { createVegetable })(Create);