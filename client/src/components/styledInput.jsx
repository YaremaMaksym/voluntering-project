import { styled } from '@mui/system';
import { Colors } from '../styles';
import { Box } from '@mui/material';
import SearchIcon from '/Search-Icon.svg';
export const Input = styled('input')({
  width: '184px',
  padding: '10px 60px 10px 13px',
  fontSize: '17px',
  borderRadius: '13px',
  fontFamily: 'Commissioner, sans-serif',
  color: Colors.notActive,
  backgroundColor: Colors.secondary,
  '&::placeholder': {
    color: Colors.notActive, // Set the color of the placeholder text to white
    fontSize: '13px',
  },
});

function StyledInpit(props) {
  return (
    <Box display={'flex'}>
      <Input {...props} />
      <Box
        color='white'
        sx={{ marginLeft: '-40px', marginTop: '10px', cursor: 'pointer' }}
      >
        <img src={SearchIcon} alt='' />
      </Box>
    </Box>
  );
}
export default StyledInpit;
