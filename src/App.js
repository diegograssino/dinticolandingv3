// import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/1Navbar/MyNavbar';
import './styles/custom.scss';
import MyHeader from './components/2Header/MyHeader';
import MyMain from './components/3Main/MyMain';

function App() {
  return (
    <div>
      <MyNavbar />
      <MyHeader />
      <MyMain />
    </div>
  );
}

export default App;
