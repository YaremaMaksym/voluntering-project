import { Box, Button } from '@mui/material';
import { Colors } from '../styles';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from './API';
import { Link } from 'react-router-dom';
function UserName() {
  const [data, setData] = useState({});
  const initials = `${data.firstname?.charAt(0)}${data.surname?.charAt(0)}`; // Combine the first letters of firstname and surname

  useEffect(() => {
    async function getData() {
      const responseData = localStorage.getItem('responseData');
      let parsedData;

      if (responseData) {
        parsedData = JSON.parse(responseData);
      }

      try {
        const response = await axios.get(API + '/api/v1/volunteer/current', {
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

  const { firstname, surname } = data;
  const name = `${firstname} ${surname}`;

  return (
    <Box display={'flex'} alignItems={'center'} gap='10px'>
      {firstname && surname ? (
        <>
          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              backgroundColor: Colors.primary,
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              color: Colors.white,
            }}
          >
            {initials}
          </Box>
          <Typography fontFamily={'Commissioner, sans-serif'} fontSize={16}>
            {name}
          </Typography>
        </>
      ) : (
        <>
          <Button variant='contained' color='primary'>
            <Link to='/login'>Login</Link>
          </Button>
          <Button variant='contained' color='primary'>
            <Link to='/sign-up'>Signup</Link>
          </Button>
        </>
      )}
    </Box>
  );
}

export default UserName;
