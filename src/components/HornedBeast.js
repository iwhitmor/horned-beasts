import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageVotes: '',
    };
  }

  addimageVotesClickHandler = () => {
    this.setState({
      imageVotes: this.state.imageVotes + '🖤 '
    })
  };

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.addimageVotesClickHandler} title={this.props.title} src={this.props.image} alt={this.props.alt} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              </Card.Text> 
              {this.state.imageVotes}
          </Card.Body>
        </Card>
      </div>
    )
  };
}

export default HornedBeast;