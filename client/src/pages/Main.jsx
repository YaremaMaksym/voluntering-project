import Logo from '/logo.svg';
import { Box } from '@mui/material';
import MainText from '../components/MainText';
import Person from '/main-person.svg';
import MainNavigation from '../components/MainNavigation';
import { Link } from 'react-router-dom';
import StyledInput from '../components/styledInput';
import UserName from '../components/userName';
import { Button } from '@mui/material';
import { Colors } from '../styles';
import { useState } from 'react';
import Lviv from '../components/ProjectStates/Lviv';
import Kyiv from '../components/ProjectStates/Kyiv';
import Dnipro from '../components/ProjectStates/Dnipro';
import Odesa from '../components/ProjectStates/Odesa';
import Sumy from '../components/ProjectStates/Sumy';

function Main() {
  const [activeButton, setActiveButton] = useState('Львів');

  const handleButtonClick = (city) => {
    setActiveButton(city);
    console.log('Button clicked:', city);
  };

  return (
    <>
      <Box m='0 auto' width='1280px' padding='43px 66px'>
        <Box display={'flex'} alignItems={'center'} gap={'100px'}>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <MainNavigation />
          <StyledInput placeholder='Пошук за містом або назвою' />
          <UserName />
        </Box>
        <Box mt='125px' display={'flex'}>
          <Box>
            <MainText value1='Проекти' />
            <Button
              onClick={() => handleButtonClick('Львів')}
              sx={{
                backgroundColor:
                  activeButton === 'Львів' ? Colors.primary : Colors.white,
                color: activeButton === 'Львів' ? Colors.white : Colors.black,
                '&:hover': {
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                },
              }}
            >
              Львів
            </Button>
            <Button
              onClick={() => handleButtonClick('Київ')}
              sx={{
                backgroundColor:
                  activeButton === 'Київ' ? Colors.primary : Colors.white,
                color: activeButton === 'Київ' ? Colors.white : Colors.black,
                '&:hover': {
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                },
              }}
            >
              Київ
            </Button>
            <Button
              onClick={() => handleButtonClick('Дніпро')}
              sx={{
                backgroundColor:
                  activeButton === 'Дніпро' ? Colors.primary : Colors.white,
                color: activeButton === 'Дніпро' ? Colors.white : Colors.black,
                '&:hover': {
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                },
              }}
            >
              Дніпро
            </Button>
            <Button
              onClick={() => handleButtonClick('Одеса')}
              sx={{
                backgroundColor:
                  activeButton === 'Одеса' ? Colors.primary : Colors.white,
                color: activeButton === 'Одеса' ? Colors.white : Colors.black,
                '&:hover': {
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                },
              }}
            >
              Одеса
            </Button>
            <Button
              onClick={() => handleButtonClick('Суми')}
              sx={{
                backgroundColor:
                  activeButton === 'Суми' ? Colors.primary : Colors.white,
                color: activeButton === 'Суми' ? Colors.white : Colors.black,
                '&:hover': {
                  backgroundColor: Colors.primary,
                  color: Colors.black,
                },
              }}
            >
              Суми
            </Button>
            {activeButton === 'Львів' ? <Lviv /> : null}
            {activeButton === 'Київ' ? <Kyiv /> : null}
            {activeButton === 'Дніпро' ? <Dnipro /> : null}
            {activeButton === 'Одеса' ? <Odesa /> : null}
            {activeButton === 'Суми' ? <Sumy /> : null}
          </Box>
          <Box></Box>
          {/* <CityMap /> */}
          <img src={Person} alt='' />
        </Box>
      </Box>
    </>
  );
}

export default Main;
