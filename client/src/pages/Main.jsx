import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import MainText from '../components/MainText';
import Lviv from '../components/ProjectStates/Lviv';
import Kyiv from '../components/ProjectStates/Kyiv';
import Dnipro from '../components/ProjectStates/Dnipro';
import Odesa from '../components/ProjectStates/Odesa';
import SearchIcon from '/Search-Icon.svg'; // Corrected import path
import Sumy from '../components/ProjectStates/Sumy';
import Logo from '/logo.svg'; // Corrected import path
import MainNavigation from '../components/MainNavigation';
import { Input } from '../components/styledInput';
import { Link } from 'react-router-dom';
import UserName from '../components/userName';
import Person from '/main-person.png'; // Corrected import path
import Location from '/location.svg'; // Corrected import path
import axios from 'axios';
import { API } from '../components/API';
import { Colors } from '../styles';
import { Typography } from '@mui/material';
import Call from '/call.svg'; // Corrected import path

function Main() {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);
  const [isDepo, setIsDepo] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isCreadite, setIsCreadite] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [inputData, setInputData] = useState('');

  const toggleDepo = () => {
    setIsDepo((prevIsActive) => !prevIsActive);
    setIsPurchase(false);
    setIsCreadite(false);
    setIsIncome(false);
    setIsEdit(false);
  };

  const togglePurchase = () => {
    setIsDepo(false);
    setIsPurchase((prevIsActive) => !prevIsActive);
    setIsCreadite(false);
    setIsIncome(false);
    setIsEdit(false);
  };

  const toggleCreadite = () => {
    setIsDepo(false);
    setIsPurchase(false);
    setIsCreadite((prevIsActive) => !prevIsActive);
    setIsIncome(false);
    setIsEdit(false);
  };

  const toggleIncome = () => {
    setIsDepo(false);
    setIsPurchase(false);
    setIsCreadite(false);
    setIsIncome((prevIsActive) => !prevIsActive);
    setIsEdit(false);
  };

  const toggleEdit = () => {
    setIsDepo(false);
    setIsPurchase(false);
    setIsCreadite(false);
    setIsIncome(false);
    setIsEdit((prevIsActive) => !prevIsActive);
  };

  const handleClick1 = async (id) => {
    const responseData = localStorage.getItem('responseData');
    let parsedData;

    if (responseData) {
      parsedData = JSON.parse(responseData);
    }
    console.log(id);
    try {
      const response = await axios.post(
        `${API}/api/v1/event/${id}/applicants`, // Update the API endpoint with the correct path
        { id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        }
      );
      console.log(response.status);
      setStatus(response.status);

      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleClick = () => {
    // Get the searched text from the input field
    fetch(API + `/api/v1/event/search/${inputData}`) // Fixed variable name
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data here
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  useEffect(() => {
    async function getData() {
      const responseData = localStorage.getItem('responseData');
      let parsedData;

      if (responseData) {
        parsedData = JSON.parse(responseData);
      }

      try {
        const response = await axios.get(API + '/api/v1/event', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          console.log('Error:', error.message);
        }
      }
    }
    getData();
  }, []);

  return (
    <>
      <Box m='0 auto' width='1280px' padding='43px 66px'>
        <Box display={'flex'} alignItems={'center'} gap={'100px'}>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <MainNavigation />
          <Box display='flex'>
            <Input
              placeholder='Пошук по назві або по місту'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)} // Added onChange handler
            />
            <Box
              color='white'
              sx={{ marginLeft: '-40px', marginTop: '10px', cursor: 'pointer' }}
            >
              <img src={SearchIcon} alt='' onClick={handleClick} />
            </Box>
          </Box>
          <UserName />
        </Box>

        <Box mt='125px' display='flex' gap={'100px'}>
          <Box>
            <MainText value1='Проекти' />
            <Box display={'flex'} gap='40px'>
              <Button
                onClick={toggleDepo}
                sx={{
                  backgroundColor: isDepo ? Colors.primary : Colors.white,
                  color: isDepo ? Colors.white : Colors.black,
                }}
              >
                Львів
              </Button>
              <Button
                onClick={togglePurchase}
                sx={{
                  backgroundColor: isPurchase ? Colors.primary : Colors.white,
                  color: isPurchase ? Colors.white : Colors.black,
                }}
              >
                Київ
              </Button>
              <Button
                onClick={toggleCreadite}
                sx={{
                  backgroundColor: isCreadite ? Colors.primary : Colors.white,
                  color: isCreadite ? Colors.white : Colors.black,
                }}
              >
                Дніпро
              </Button>
              <Button
                onClick={toggleIncome}
                sx={{
                  backgroundColor: isIncome ? Colors.primary : Colors.white,
                  color: isIncome ? Colors.white : Colors.black,
                }}
              >
                Одеса
              </Button>
              <Button
                onClick={toggleEdit}
                sx={{
                  backgroundColor: isEdit ? Colors.primary : Colors.white,
                  color: isEdit ? Colors.white : Colors.black,
                }}
              >
                Суми
              </Button>
            </Box>
            {isDepo && <Lviv />}
            {isPurchase && <Kyiv />}
            {isCreadite && <Dnipro />}
            {isIncome && <Odesa />}
            {isEdit && <Sumy />}
            {!isDepo && !isPurchase && !isCreadite && !isIncome && !isEdit && (
              <Box
                sx={{
                  maxHeight: '500px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
              >
                {data.map((item) => {
                  const { id, name, city, description, phoneNumber, status } =
                    item;
                  return (
                    <Box
                      key={id}
                      sx={{
                        fontFamily: 'Commissioner, sans-serif',
                        width: '500px',
                      }}
                    >
                      <Box display='flex' alignItems='center' gap='20px'>
                        <Typography fontSize='24px' fontWeight='bold'>
                          {name}
                        </Typography>
                        <Box display='flex'>
                          <img src={Location} alt='' />
                          <Typography
                            fontSize='12px'
                            fontWeight='bold'
                            color='grey'
                          >
                            {city}
                          </Typography>
                          <Typography
                            fontSize='12px'
                            fontWeight='bold'
                            color='grey'
                            ml='20px'
                          >
                            {status}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: '100%', wordBreak: 'break-word' }}>
                        <Typography sx={{ fontSize: '14px' }}>
                          {description}
                        </Typography>
                      </Box>
                      <Box
                        display='flex'
                        alignItems='center'
                        gap='10px'
                        margin='10px 0'
                      >
                        <img src={Call} alt='' />
                        <Typography>{phoneNumber}</Typography>
                      </Box>
                      <Button
                        onClick={() => handleClick1(id)}
                        sx={{
                          backgroundColor: Colors.primary,
                          color: 'white',
                          marginBottom: '20px',
                          '&:hover': {
                            backgroundColor: Colors.primary, // Maintain the same color on hover
                          },
                        }}
                      >
                        Взяти участь
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <img src={Person} alt='' />
        </Box>
      </Box>
    </>
  );
}

export default Main;
