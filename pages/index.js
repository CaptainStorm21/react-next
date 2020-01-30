import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';

import './index.css';
import Card from './Card';


// export default class Index extends React.Component {
	class Index extends React.Component {
	static async getInitialProps( { store }) {
		// return { cards: data };
		store.dispatch (initialCards());
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src="/static/1.jpg" className="static-logo" alt="logo" />
				</header>
				<div className="Grid">
					{this.props.cards.map(card => (
						<Card key={card.id} />
                    ))
                }
				</div>
			</div>
		);
	}
}

//ccomes with reducers
const mapDispatchTopProps = (dispatch) => {
	return {
		initialCards: bindActionCreators(initialCards, dispatch),
		addItem: bindActionCreators(initialCards, dispatch)

	}
}

const mapStateToProps = ( state ) => {
	return {
		cards: state.cards,
	}
}

export default withRedux ( initStore, mapStateToProps, mapDispatchTopProps ) (Index);