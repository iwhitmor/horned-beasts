import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      imageVotes: '',
    };
  }

  addimageVotesClickHandler = () => {
    this.setState( {
      imageVotes: this.state.imageVotes + '🖤 '
    })
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img onClick={this.addimageVotesClickHandler} title={this.props.title} src={this.props.image} alt={this.props.alt} />
        <p>{this.props.description}</p>
        <p>{this.state.imageVotes}</p>
      </div>
    )
  }
}

export default HornedBeast;