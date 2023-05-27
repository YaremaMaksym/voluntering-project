import { useState } from 'react';
import Header from '../components/Header/Header';
import { Box } from '@mui/material';
import CreateprojectInput from '../components/createprojectInput';
import MainText from '../components/MainText';
import AuthorBtn from '../components/ButtonSubmit';
import { Colors } from '../styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { API } from '../components/API';
import axios from 'axios';
import Person from '/addEventPerson.png';
function CreateProject() {
  const [projName, setprojName] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const validateForm = () => {
    if (!projName || !state || !phoneNumber || !description) {
      console.log('Please fill in all fields');
      return false;
    }
    console.log('Submitted');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = localStorage.getItem('responseData');
    let parsedData;

    if (responseData) {
      parsedData = JSON.parse(responseData);
    }
    const form = {
      name: projName,
      city: state,
      description: description,
      phoneNumber: phoneNumber,
    };
    console.log(form);
    console.log(parsedData);
    if (validateForm()) {
      try {
        const response = await axios.post(API + '/api/v1/event', form, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        if (error) {
          console.log(error.response.data.message);
        } else {
          console.log('Error:', error.message);
        }
      }
    }
  };

  return (
    <Box m='0 auto' width='1280px' padding='43px 66px'>
      <Header />
      <Box display={'flex'} gap={'90px'} alignItems={'center'}>
        <Box>
          <MainText value1='Створити проект' sx={{ marginTop: '75px' }} />
          <Box margin={'10px 0 30px 0'}>
            <Typography
              fontSize={'18px'}
              fontFamily={'Commissioner, sans-serif'}
            >
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
              <Link to='/events'>
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
        <Box>
          <img src={Person} alt='' />
        </Box>
      </Box>
    </Box>
  );
}

export default CreateProject;
