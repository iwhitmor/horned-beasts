import React from 'react';

class HornedBeast extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img title={this.props.title} src={this.props.src} alt={this.props.alt} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;