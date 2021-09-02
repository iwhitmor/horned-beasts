import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/selectedBeast';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <SelectedBeast />
    </div>
  );
}

export default App;
