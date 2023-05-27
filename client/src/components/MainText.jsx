import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function MainText({ value1 }) {
  return (
    <Typography
      fontFamily={'Commissioner, sans-serif'}
      fontSize={45}
      fontWeight={700}
    >
      {value1}
    </Typography>
  );
}

MainText.propTypes = {
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string,
};

export default MainText;
