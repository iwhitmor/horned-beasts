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
  }

  showModal = (event) => {
    event.stopPropagation()
    this.props.displayModalForIndex(this.props.beastIndex);
  }

  render() {
    return (
      <Card
        onClick={this.handleCardClick} >
        <Card.Body>
          <Card.Img  title={this.props.title} src={this.props.image} alt={this.props.alt}
          onClick={this.showModal} />
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