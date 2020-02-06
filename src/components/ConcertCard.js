import React from 'react';
import { connect } from 'react-redux';
import { saveConcert } from '../actions/savedConcerts.js';

// params are destructured as they are passed as argument
// ({ concert, saveConcert, currentUserId, saved_concert })
class ConcertCard extends React.Component {
  constructor() {
    super();

    this.state = {
      upvote: 0
    }
  }

  renderButton = () => {
    if (!this.props.saved_concert) {
      return <button onClick={() => this.props.saveConcert(this.props.concert.id, this.props.currentUserId)}>Save This Concert</button>
    }
  }

  handleUpvote = () => {
    let num = this.state.upvote + 1
    this.setState({
      upvote: num
    })
  }

  render() {
  return (
    <div className="ConcertCard">
      <h4>{this.props.concert.attributes.artist_name}</h4>
      <p>{this.props.concert.attributes.date}</p>
      <p>${this.props.concert.attributes.price_range}</p>
      <p>{this.props.concert.attributes.location_json.city}, {this.props.concert.attributes.location_json.state}</p>
      <button onClick={this.handleUpvote}>Upvote this: {this.state.upvote}</button>
      <button>See who else saved this show</button>
      {this.renderButton()}
    </div>
    )
  }
}

//this method is changing the date
// const formatDate = date => {
//   const formatted_date = new Date(date).toDateString();
//   return formatted_date.substring(0, 10) + ',' + formatted_date.substring(10)
// }

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUser.id
  }
}

export default connect(mapStateToProps, { saveConcert })(ConcertCard);
