import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import Logo from '/logo.svg';
import { Link } from 'react-router-dom';
import UserName from '../components/userName';
import MainText from '../components/MainText';
import { Colors } from '../styles';
import { Typography } from '@mui/material';

function Marketing() {
  const [investorClicked, setInvestorClicked] = useState(false);
  const [volunteerClicked, setVolunteerClicked] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleClickInvestor = () => {
    setInvestorClicked(true);
    setShowButtons(false);
  };

  const handleClickVolunteer = () => {
    setVolunteerClicked(true);
    setShowButtons(false);
  };

  const handleBackClick = () => {
    setInvestorClicked(false);
    setVolunteerClicked(false);
    setShowButtons(true);
  };

  return (
    <Box m='0 auto' width='1280px' padding='43px 66px'>
      <Box display={'flex'} alignItems={'center'} gap={'750px'}>
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
        <UserName />
      </Box>
      <MainText
        value1='Обери свою мету:'
        marginTop='50px'
        marginBottom='20px'
      />
      <Box>
        {showButtons && (
          <Box display={'flex'} gap='50px'>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleClickInvestor}
                sx={{
                  width: '530px',
                  height: '210px',
                  fontSize: '40px',
                  borderRadius: '50px',
                }}
              >
                Я - Інвестор!
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleClickVolunteer}
                sx={{
                  width: '530px',
                  height: '210px',
                  fontSize: '40px',
                  borderRadius: '50px',
                }}
              >
                Я - Волонтер!
              </Button>
            </Box>
            <Box
              sx={{
                width: '510px',
                height: '430px',
                boxShadow: '5px 4px 19px rgba(0, 0, 0, 0.25)',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  color: Colors.black,
                  fontSize: '40px',
                  fontFamily: 'Commissioner, sans-serif',
                }}
              >
                Для чого це мені?
              </Typography>
              <Button
                variant='contained'
                color='primary'
                sx={{
                  fontSize: '22px',
                  borderRadius: '50px',
                }}
              >
                <Link to='/events'>Перейти до подій</Link>
              </Button>
            </Box>
          </Box>
        )}
        {investorClicked && (
          <Box display={'flex'} gap='50px'>
            <Box
              sx={{
                width: '510px',
                height: '390px',
                backgroundColor: Colors.primary, // Replace with your desired color
                fontSize: '40px',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                padding: '20px',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '40px',
                  fontFamily: 'Commissioner, sans-serif',
                }}
              >
                Я - Інвестор!
              </Typography>
              <Typography sx={{ color: 'white', fontSize: '22px' }}>
                Станьте інвестором волонтерських проектів - це не просто вклад у
                роботу волонтера, а інвестиція в майбутнє нашої спільноти,
                допомога досягти реальної зміни та позитивного впливу.
              </Typography>
              <Button
                variant='contained'
                onClick={handleBackClick}
                sx={{ borderRadius: '50px' }}
              >
                Назад
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: Colors.primary,

                width: '510px',
                height: '400px',
                paddingTop: '30px',
                boxShadow: '5px 4px 19px rgba(0, 0, 0, 0.25)',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  color: Colors.white,
                  fontSize: '40px',
                  fontFamily: 'Commissioner, sans-serif',
                  marginTop: '40px',
                }}
              >
                Для чого це мені?
              </Typography>
              <Typography
                sx={{
                  color: Colors.white,
                  fontSize: '22px',
                  fontFamily: 'Commissioner, sans-serif',
                  padding: '20px',
                }}
              >
                Допоможи та отримуй омріяний подарунок у винагороду
              </Typography>
              <Button
                variant='contained'
                color='primary'
                sx={{
                  fontSize: '22px',
                  borderRadius: '50px',
                }}
              >
                <Link to='/events'>Перейти до подій</Link>
              </Button>
            </Box>
          </Box>
        )}
        {volunteerClicked && (
          <Box display={'flex'} gap='50px'>
            <Box
              sx={{
                width: '510px',
                height: '390px',
                backgroundColor: Colors.primary, // Replace with your desired color
                fontSize: '40px',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                padding: '20px',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '40px',
                  fontFamily: 'Commissioner, sans-serif',
                }}
              >
                Я - Волонтер!
              </Typography>
              <Typography sx={{ color: 'white', fontSize: '22px' }}>
                Станьте волонтером - це ваш шанс допомогти світу, покращити
                життя інших, розвиватись як особистість та відкрити для себе
                нові можливості та перспективи.
              </Typography>
              <Button
                variant='contained'
                onClick={handleBackClick}
                sx={{ borderRadius: '50px' }}
              >
                Назад
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: Colors.primary,

                width: '510px',
                height: '400px',
                paddingTop: '30px',
                boxShadow: '5px 4px 19px rgba(0, 0, 0, 0.25)',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  color: Colors.white,
                  fontSize: '40px',
                  fontFamily: 'Commissioner, sans-serif',
                  marginTop: '40px',
                }}
              >
                Для чого це мені?
              </Typography>
              <Typography
                sx={{
                  color: Colors.white,
                  fontSize: '22px',
                  padding: '20px',
                  fontFamily: 'Commissioner, sans-serif',
                }}
              >
                Допоможи та отримуй омріяний подарунок у винагороду
              </Typography>
              <Button
                variant='contained'
                color='primary'
                sx={{
                  fontSize: '22px',
                  borderRadius: '50px',
                }}
              >
                <Link to='/events'>Перейти до подій</Link>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Marketing;
