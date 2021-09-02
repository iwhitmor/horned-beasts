import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/selectedBeast';
import data from './data/data.json'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
    };
  }

  handleSelectBeast = beastIndex => {
    this.setState({
      SelectedBeast: data[beastIndex],
      showModal: true,
    })
  }
  
  handleClose = () => {
    console.log('Please Hide Modal');
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={data}
        handleSelectBeast={this.handleSelectBeast} />
        <Footer />
        <SelectedBeast 
        show={this.state.showModal}
        handleClose={this.handleClose} />
      </div>
    );
  }
}

export default App;
