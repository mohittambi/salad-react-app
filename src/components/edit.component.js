import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			quantity: ''
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8970/fruit/' + this.props.match.params.id + '/update/')
			.then(response => {
				this.setState({
					id: response.data.Items[0].id,
					name: response.data.Items[0].name,
					quantity: response.data.Items[0].quantity
				});
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const obj = {
			id: this.state.id,
			name: this.state.name,
			quantity: this.state.quantity
		};
		axios.post('http://localhost:8970/fruit/' + this.props.match.params.id + '/update/', obj)
			.then(res => console.log(res.data));

		this.props.history.push('/fruits');
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3 align="center">Update Fruit</h3>
				<form onSubmit={this.onSubmit}>
					<input
						type="hidden"
						name="id"
						value={this.state.id}
					/>
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
							value="Update Fruit"
							className="btn btn-primary" />
					</div>
				</form>
			</div>
		)
	}
}

export default Edit;