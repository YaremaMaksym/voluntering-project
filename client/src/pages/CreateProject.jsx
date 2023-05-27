import { useState } from 'react';
import Header from '../components/Header/Header';
import { Box } from '@mui/material';
import CreateprojectInput from '../components/createprojectInput';
import MainText from '../components/MainText';
import AuthorBtn from '../components/ButtonSubmit';
import { Colors } from '../styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CreateProject() {
  const [projName, setprojName] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const validateForm = () => {
    if (!projName || !state || !phoneNumber || !description) {
      console.log('Please fill in all fields');
      return;
    }
    console.log('Submitted');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { projName, state, phoneNumber };
    if (validateForm()) {
      // try {
      //   const response = await axios.post(
      //     'https://financial-monitor-production.up.railway.app/api/v1/login',
      //     login,
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   );
      //   localStorage.setItem('responseData', JSON.stringify(response.data.jwt));
      //   // Navigate to MainPage.js
      //   navigate('/');
      // } catch (error) {
      //   if (error.response) {
      //     console.log(error.response.data.message);
      //     setUserErrors(error.response.data.message);
      //   } else {
      //     console.log('Error:', error.message);
      //   }
      // }
    }
  };

  return (
    <Box m='0 auto' width='1280px' padding='43px 66px'>
      <Header />
      <MainText value1='Створити проект' sx={{ marginTop: '75px' }} />
      <Box margin={'10px 0 30px 0'}>
        <Typography fontSize={'18px'} fontFamily={'Commissioner, sans-serif'}>
          Введіть дані для створення проекту
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box display='flex' gap='55px'>
          <Box mb='26px'>
            <CreateprojectInput
              placeholder='Назва заходу'
              value={projName}
              onChange={(e) => setprojName(e.target.value)}
            />
          </Box>
          <Box>
            <CreateprojectInput
              placeholder='Місто'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Box>
        </Box>
        <Box mb='26px'>
          <CreateprojectInput
            sx={{ width: '445px' }}
            placeholder='Номер телефону'
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </Box>
        <Box>
          <textarea
            style={{
              width: '445px',
              height: '212px',
              padding: '10px 13px 10px 13px',
              fontSize: '15px',
              borderRadius: '16px',
              fontFamily: 'Commissioner, sans-serif',
              border: '1px solid grey',
              resize: 'none',
              outline: 'none',
            }}
            placeholder='Коротко опишіть подію яка буде відбуватись'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box display={'flex'} gap='30px'>
          <AuthorBtn
            type='submit'
            text='Створити проект'
            sx={{
              marginTop: '70px',
              color: Colors.white,
              backgroundColor: Colors.primary,
              borderRadius: '16px',
              padding: '15px 20px',
            }}
          ></AuthorBtn>
          <Link to='/'>
            <AuthorBtn
              text='Повернутись до подій'
              sx={{
                marginTop: '70px',
                color: 'grey',
                backgroundColor: Colors.white,
                borderRadius: '16px',
                padding: '15px 20px',
                '&:hover': {
                  // Override hover effect styles
                  color: 'grey',
                  backgroundColor: Colors.white,
                },
              }}
            ></AuthorBtn>
          </Link>
        </Box>
      </form>
    </Box>
  );
}

export default CreateProject;
