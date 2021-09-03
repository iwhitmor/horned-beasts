import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data/data.json'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {data.map((beast, i) => (
            <Col>
              <HornedBeast
                beastIndex={i}
                displayModalForIndex={this.props.handleSelectBeast}
                title={beast.title} image={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  };
}

export default Main;