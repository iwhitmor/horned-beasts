import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageVotes: 0,
    };
  }

  handleCardClick = () => {
    let currentVotes = this.state.imageVotes;
    this.setState({ imageVotes: currentVotes + 1 })

  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Img onClick={this.handleCardClick} title={this.props.title} src={this.props.image} alt={this.props.alt} />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            😍 = {this.state.imageVotes}
          </Card.Text>
          {this.props.description}
        </Card.Body>
      </Card>
    )
  };
};

export default HornedBeast;