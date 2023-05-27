import { Box } from '@mui/material';
import { Colors } from '../styles';
import { Typography } from '@mui/material';

function UserName() {
  const name = 'Rostyk Zhuk';
  const [firstName, lastName] = name.split(' '); // Split the name into first name and last name
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`; // Combine the first letters of first name and last name
  return (
    <Box display={'flex'} alignItems={'center'} gap='10px'>
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
    </Box>
  );
}

export default UserName;
