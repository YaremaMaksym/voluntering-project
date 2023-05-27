import { Box } from '@mui/material';
import Logo from '/logo.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainNavigation from '../MainNavigation';
import StyledInput from '../styledInput';
import UserName from '../userName';

function Header({ search }) {
  return (
    <Box display={'flex'} alignItems={'center'} gap={'100px'}>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
      <MainNavigation />
      {search ? (
        <StyledInput placeholder='Пошук за містом або назвою' />
      ) : (
        <Box m='0 115px'></Box>
      )}
      <UserName />
    </Box>
  );
}

Header.propTypes = {
  search: PropTypes.bool.isRequired,
};

export default Header;
