import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFruits } from "../../actions/fruitActions";
import TableRow from './TableRow';

class Index extends Component {

	componentWillMount() {
		this.props.fetchFruits();
	}

	componentWillReceiveProps(nextProps) {
		let data = this.props.fruits;
		var dataToArray = Object.keys(data).map(key => {
			return data[key];
		});

		if (nextProps.newFruit) {
			dataToArray.unshift(nextProps.newFruit);
		}
	}

	tabRow() {
		let data = this.props.fruits;
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
				<h3 align="center">Fruits List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Fruit Name</th>
							<th>Fruit Quantity</th>
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
	fetchFruits: PropTypes.func.isRequired,
	fruits: PropTypes.array.isRequired,
	newFruit: PropTypes.object
}

const mapStateToProps = state => ({
	fruits: state.fruits.items,
	newFruit: state.fruits.item
});

export default connect(mapStateToProps, { fetchFruits })(Index);