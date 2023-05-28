import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { Colors } from '../styles';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import Logo from '/logo.svg';
import People from '/people.png';
import MainText from '../components/MainText';
import axios from 'axios';
import AuthorBtn from '../components/ButtonSubmit';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { API } from '../components/API';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ '': '' });
  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    return errors;
  };
  const validateForm = () => {
    const errors = {};
    if (firstName.trim() === '') {
      errors.name = 'Please enter your name';
    }

    if (surname.trim() === '') {
      errors.surname = 'Please enter your surname';
    }

    // Validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate password
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      errors.password = passwordErrors;
    }

    // Validate password confirmation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const signup = { firstname: firstName, surname, email, password };
      try {
        const response = await axios.post(
          API + '/api/v1/registration',
          signup,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        localStorage.setItem('responseData', JSON.stringify(response.data));
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message);
          console.log(error.response.data.message);
        } else {
          console.log('Error:', error.message);
        }
      }
      console.log('Validated');
    }
  };

  return (
    <Box
      sx={{
        width: '1380px',
        margin: '0 auto',
        padding: '33px 26px 26px 100px',
      }}
    >
      <Box display={'flex'} gap={'80px'}>
        <Box
          sx={{
            backgroundColor: Colors.primary,
            borderRadius: '30px',
            padding: '200px 33px 100px 33px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '80px',
            }}
          >
            <MainText
              value1='Створіть свій обліковий запис'
              value2='Введіть свої дані для реєстрації'
            />
            <Box
              sx={{
                display: 'flex',
                gap: '50px',
                width: '295px',
                height: '51px',
                padding: '4px',
                borderRadius: '19px',
                marginTop: '50px',
                backgroundColor: Colors.secondary,
              }}
            >
              <Typography
                fontSize={16}
                color={Colors.notActive}
                padding={'12px 0px 12px 42px'}
              >
                <Link to='/login' component={<LogIn />}>
                  Log in
                </Link>
              </Typography>

              <Box
                sx={{
                  padding: '12px 50px',
                  borderRadius: '19px',
                  backgroundColor: Colors.white,
                  color: Colors.primary,
                  cursor: 'pointer',
                }}
              >
                <Typography fontSize={16}>Sign up</Typography>
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box>
                <TextField
                  variant='standard'
                  label='Name'
                  color='secondary'
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                  sx={{
                    width: '300px',
                    margin: '60px 0 45px 0 ',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  variant='standard'
                  label='Surname'
                  color='secondary'
                  type='text'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  error={Boolean(errors.surname)}
                  helperText={errors.surname}
                  sx={{
                    width: '300px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  variant='standard'
                  label='Email'
                  color='secondary'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(errors.email) || Boolean(message)}
                  helperText={errors.email || message}
                  sx={{
                    width: '300px',
                    margin: '45px 0 45px 0 ',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  variant='standard'
                  type={seePassword ? 'text' : 'password'}
                  label='Password'
                  color='secondary'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    width: '300px',
                    marginBottom: '45px',
                  }}
                />
                <IconButton
                  onClick={() => setSeePassword(!seePassword)}
                  sx={{
                    cursor: 'pointer',
                    marginBottom: '-30px',
                    marginLeft: '10px',
                    color: Colors.secondary,
                  }}
                >
                  {seePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
              <Box>
                <TextField
                  variant='standard'
                  color='secondary'
                  type={seePassword ? 'text' : 'password'}
                  label='Password confirmation'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{
                    width: '300px',
                    marginBottom: '45px',
                  }}
                />
                <IconButton
                  onClick={() => setSeePassword(!seePassword)}
                  sx={{
                    cursor: 'pointer',
                    marginBottom: '-30px',
                    marginLeft: '10px',
                    color: Colors.secondary,
                  }}
                >
                  {seePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
              {
                <AuthorBtn
                  type='submit'
                  text='Sign Up'
                  sx={{ marginTop: '70px', marginLeft: '75px' }}
                />
              }
            </form>
          </Box>
        </Box>

        <Box>
          <Box marginLeft={'400px'}>
            <img src={Logo} alt='Budget Buddy' />
          </Box>
          <Box marginTop={'150px'}>
            <img src={People} alt='' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
