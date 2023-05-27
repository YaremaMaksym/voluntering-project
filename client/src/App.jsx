import { ThemeProvider } from '@emotion/react';
import LogIn from './pages/LogIn';
import theme from './styles';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/createproject' element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
