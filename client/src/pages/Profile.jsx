import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../components/API';
import Header from '../components/Header/Header';
import { Box, Button, Typography, TextField } from '@mui/material';
import MainText from '../components/MainText';
import Call from '/call.svg'; // Corrected import path
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import Location from '/location.svg'; // Corrected import path
import Dog from '/пес-патрон.svg';
import { Colors } from '../styles';
function Profile() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedCity, setEditedCity] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

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

  const handleDelete = async (itemId) => {
    const responseData = localStorage.getItem('responseData');
    let parsedData;

    if (responseData) {
      parsedData = JSON.parse(responseData);
    }
    try {
      await axios.delete(API + `/api/v1/event/${itemId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${parsedData}`,
        },
      });
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('Error:', error.message);
      }
    }
  };

  const handleEdit = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    if (selectedItem) {
      setEditItemId(itemId);
      setEditedName(selectedItem.name);
      setEditedCity(selectedItem.city);
      setEditedDescription(selectedItem.description);
      setEditedPhoneNumber(selectedItem.phoneNumber);
      setEditedStatus(selectedItem.status); // Add this line to set the edited status
    }
  };

  const handleUpdate = async (id) => {
    const responseData = localStorage.getItem('responseData');
    let parsedData;

    if (responseData) {
      parsedData = JSON.parse(responseData);
    }

    try {
      const updatedItem = {
        id: id,
        name: editedName,
        city: editedCity,
        description: editedDescription,
        status: editedStatus,
        phoneNumber: editedPhoneNumber,
      };

      const response = await axios.put(
        API + `/api/v1/event/${id}`,
        {
          name: editedName,
          city: editedCity,
          description: editedDescription,
          status: editedStatus,
          phoneNumber: editedPhoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        }
      );

      // Set the data state to include the updated item
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? updatedItem : item))
      );

      setEditItemId(null);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('Error:', error.message);
      }
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
        const response = await axios.get(API + '/api/v1/volunteer/current', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedData}`,
          },
        });
        setUser(response.data.mark);
        console.log(response.data.mark);
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
    <Box m='0 auto' width='1280px' padding='43px 66px'>
      <Header />
      <Box display={'flex'} gap={'90px'} alignItems={'center'}>
        <Box>
          <MainText value1='Профіль' sx={{ marginTop: '75px' }} />
          <Box display='flex' alignItems='center' gap='100px'>
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
                const isEditing = editItemId === id;

                return (
                  <Box
                    key={id}
                    sx={{
                      fontFamily: 'Commissioner, sans-serif',
                      width: '500px',
                    }}
                  >
                    {isEditing ? (
                      <>
                        <Box display='flex' gap='30px' marginBottom={5}>
                          <TextField
                            variant='standard'
                            label='Name'
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                          <TextField
                            label='City'
                            variant='standard'
                            value={editedCity}
                            onChange={(e) => setEditedCity(e.target.value)}
                          />
                        </Box>
                        <Box display='flex' gap='30px' marginBottom={5}>
                          <TextField
                            label='Description'
                            variant='standard'
                            value={editedDescription}
                            onChange={(e) =>
                              setEditedDescription(e.target.value)
                            }
                          />
                          <TextField
                            label='Phone Number'
                            variant='standard'
                            value={editedPhoneNumber}
                            onChange={(e) =>
                              setEditedPhoneNumber(e.target.value)
                            }
                          />
                        </Box>
                        <Box display='flex' gap='30px' marginBottom={5}>
                          <Select
                            label='Status'
                            variant='standard'
                            value={editedStatus}
                            style={{ width: '220px' }}
                            onChange={(e) => setEditedStatus(e.target.value)}
                          >
                            <MenuItem value='PREPARATION'>PREPARATION</MenuItem>
                            <MenuItem value='ACTIVE'>ACTIVE</MenuItem>
                            <MenuItem value='COMPLETED'>COMPLETED</MenuItem>
                          </Select>

                          <Button
                            variant='contained'
                            color='primary'
                            style={{ width: '220px' }}
                            onClick={() => handleUpdate(id)}
                          >
                            Update
                          </Button>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          key={id}
                          display='flex'
                          alignItems='center'
                          gap='20px'
                        >
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
                              marginLeft={'10px'}
                              fontSize='12px'
                              fontWeight='bold'
                              color='grey'
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
                          mb={'10px'}
                        >
                          <img src={Call} alt='' />
                          <Typography>{phoneNumber}</Typography>
                        </Box>
                        <Box display='flex' gap='10px' mb='20px'>
                          <Button
                            sx={{ width: '100px' }}
                            variant='contained'
                            color='secondary'
                            onClick={() => handleDelete(id)}
                          >
                            Delete
                          </Button>
                          <Button
                            sx={{ width: '100px' }}
                            variant='contained'
                            color='primary'
                            onClick={() => handleEdit(id)}
                          >
                            Edit
                          </Button>
                        </Box>
                      </>
                    )}
                  </Box>
                );
              })}
            </Box>
            <Box
              marginLeft={10}
              sx={{
                padding: '20px',
                width: '500px',
                background: Colors.primary,
                color: Colors.white,
                borderRadius: '50px',
              }}
            >
              <Typography fontSize={'18px'} fontWeight={'bold'}>
                Особистий баланс:
              </Typography>
              <Box display={'flex'} alignItems={'center'} margin={'20px auto'}>
                <img src={Dog} alt='' />
                <Typography
                  fontSize='14px'
                  fontFamily='Commissioner, sans-serif'
                >
                  пси патрони
                </Typography>
                <Typography
                  marginLeft='350px'
                  fontSize='34px'
                  marginTop='-20px'
                  fontWeight={'bold'}
                  fontFamily='Commissioner, sans-serif'
                >
                  {user}
                </Typography>
              </Box>
              <Typography
                color=' #A1FFBA'
                fontSize='14px'
                fontFamily='Commissioner, sans-serif'
              >
                У вас є можливість накопичувати псів патронів (токенів), які ви
                накопичуючи які, ви обмінюєте на мрію(рандомну річ зі списку
                бажань)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
