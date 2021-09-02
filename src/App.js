import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/selectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
    };
  }

  handleClose = () => {
    console.log('Please Hide Modal');
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <SelectedBeast 
        show={this.state.showModal}
        handleClose={this.handleClose} />
      </div>
    );
  }
}

export default App;
