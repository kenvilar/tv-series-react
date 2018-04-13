import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
	state = {
		show: null
	};

	componentDidMount() {
		const {id} = this.props.match.params;
		fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState({show: json});
			})
			.catch((ex) => {
				console.log('parsing failed', ex);
			});
	}

	render() {
		console.log(this.props);
		const {show} = this.state;
		console.log(show);
		return (
			<div>
				{
					show === null
					&&
					<Loader/>
				}
			</div>
		);
	}
}

export default SingleSeries;
