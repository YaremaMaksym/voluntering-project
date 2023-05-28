import { ThemeProvider } from '@emotion/react';
import LogIn from './pages/LogIn';
import theme from './styles';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CreateProject from './pages/CreateProject';
import Marketing from './pages/Marketing';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Marketing />} />
          <Route path='/events' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/createproject' element={<CreateProject />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
