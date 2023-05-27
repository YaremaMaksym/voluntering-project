import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import MainText from '../components/MainText';
import Lviv from '../components/ProjectStates/Lviv';
import Kyiv from '../components/ProjectStates/Kyiv';
import Dnipro from '../components/ProjectStates/Dnipro';
import Odesa from '../components/ProjectStates/Odesa';
import Sumy from '../components/ProjectStates/Sumy';
import Header from '../components/Header/Header';
import Person from '/main-person.png';
import Location from '/location.svg';
import axios from 'axios';
import { API } from '../components/API';
import { Colors } from '../styles';
import { Typography } from '@mui/material';

function Main() {
  const [data, setData] = useState([]);
  const [isDepo, setIsDepo] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isCreadite, setIsCreadite] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
        <Header search={true} />
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
              <Box>
                {data.map((item) => {
                  const { id, name, city, description, phoneNumber } = item;
                  return (
                    <Box
                      key={id}
                      sx={{
                        fontFamily: 'Commissioner, sans-serif',
                        width: '500px',
                      }}
                    >
                      <Box display='flex' alignItems='center'>
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
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: '100%', wordBreak: 'break-word' }}>
                        <Typography sx={{ fontSize: '14px' }}>
                          {description}
                        </Typography>
                      </Box>
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
