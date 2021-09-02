import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data/data.json'
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <CardColumns>
        {data.map(beast => (<HornedBeast title={beast.title} image={beast.image_url} description={beast.description} />))}
      </CardColumns>
    )
  };
}

export default Main;