import { Typography } from '@mui/material';

function MainText(props) {
  return (
    <Typography
      fontFamily={'Commissioner, sans-serif'}
      fontSize={45}
      fontWeight={700}
      {...props}
    >
      {props.value1}
    </Typography>
  );
}

export default MainText;
