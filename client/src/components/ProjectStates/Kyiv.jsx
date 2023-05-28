import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../API';
import { Box, Typography, Button } from '@mui/material';
import Call from '/call.svg'; // Corrected import path
import { Colors } from '../../styles';
import Location from '/location.svg'; // Corrected import path

function Kyiv() {
  const [data, setData] = useState([]);
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
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    async function getData() {
      const responseData = localStorage.getItem('responseData');
      let parsedData;

      if (responseData) {
        parsedData = JSON.parse(responseData);
      }

      try {
        const response = await axios.get(API + '/api/v1/event/location/Київ', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        });
        setData(response.data);
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
    <Box
      sx={{
        maxHeight: '500px',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {data.map((item) => {
        const { id, name, city, description, phoneNumber, status } = item;
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
                <Typography fontSize='12px' fontWeight='bold' color='grey'>
                  {city}
                </Typography>
              </Box>
              <Typography fontSize='12px' fontWeight='bold' color='grey'>
                {status}
              </Typography>
            </Box>
            <Box sx={{ maxWidth: '100%', wordBreak: 'break-word' }}>
              <Typography sx={{ fontSize: '14px' }}>{description}</Typography>
            </Box>
            <Box display='flex' alignItems='center' gap='10px'>
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
  );
}

export default Kyiv;
