import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import MainText from '../components/MainText';
import Lviv from '../components/ProjectStates/Lviv';
import Kyiv from '../components/ProjectStates/Kyiv';
import Dnipro from '../components/ProjectStates/Dnipro';
import Odesa from '../components/ProjectStates/Odesa';
import Sumy from '../components/ProjectStates/Sumy';
import Header from '../components/Header/Header';
import Person from '/main-person.png';

import { Colors } from '../styles';

function Main() {
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
              <Box>all</Box>
            )}
          </Box>
          <img src={Person} alt='' />
        </Box>
      </Box>
    </>
  );
}

export default Main;
