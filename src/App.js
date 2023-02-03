import TopBar from './components/topbar/TopBar'
import Register from './pages/registerPage/Register';
import Login from './pages/loginPage/Login';
import Settings from './pages/settingsPage/Settings';
import Home from './pages/homePage/Home';
import Single from './pages/singlePage/Single';
import Write from './pages/writePage/Write';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NotFound from './pages/notFoundPage/NotFound';

function App() {
  const user = false;
  return (
    <Box className='container'>
    
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    
    </Box>
  );
}

export default App;
