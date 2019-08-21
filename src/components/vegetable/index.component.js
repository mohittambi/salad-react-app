import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVegetables } from "../../actions/vegetableActions";
import TableRow from './TableRow';

class Index extends Component {

	componentWillMount() {
		this.props.fetchVegetables();
	}

	componentWillReceiveProps(nextProps) {
		let data = this.props.vegetables;
		var dataToArray = Object.keys(data).map(key => {
			return data[key];
		});

		if (nextProps.newVegetable) {
			dataToArray.unshift(nextProps.newVegetable);
		}
	}

	tabRow() {
		let data = this.props.vegetables;
		var dataToArray = Object.keys(data).map(key => {
			return data[key];
		});

		return dataToArray.map(function (object, i) {
			return <TableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3 align="center">Vegetables List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Vegetable Name</th>
							<th>Vegetable Quantity</th>
							<th colSpan="2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.tabRow()}
					</tbody>
				</table>
			</div>
		);
	}
}

Index.propTypes = {
	fetchVegetables: PropTypes.func.isRequired,
	vegetables: PropTypes.array.isRequired,
	newVegetable: PropTypes.object
}

const mapStateToProps = state => ({
	vegetables: state.vegetables.items,
	newVegetable: state.vegetables.item
});

export default connect(mapStateToProps, { fetchVegetables })(Index);