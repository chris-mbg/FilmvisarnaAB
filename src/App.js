// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import OrderPage from './pages/OrderPage';
// import RegistrationPage from './pages/RegistrationPage';
// import ProfilePage from './pages/ProfilePage';
// import UserContextProvider from './contexts/UserContext';
// import MovieContextProvider from './contexts/MovieContext';
// import './css/App.css';
import LoginModal from './components/LoginModal';

function App() {
  return (
    <div className='App'>
      <LoginModal />
    </div>
  );
}

export default App;
