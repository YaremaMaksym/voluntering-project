import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
// import StatsIcon from '/stats.svg';
// import SettingIcon from '/setting.svg';
import PropTypes from 'prop-types';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  fontSize: '17px',
}));

MainNavigation.propTypes = {
  value: PropTypes.string.isRequired,
};

const ItemLink = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontFamily: 'Commissioner, sans-serif',
}));

export default function MainNavigation() {
  return (
    <Box>
      <Stack spacing='40px' direction={'row'}>
        <Item elevation={0}>
          <ItemLink to='/createproject'>Створити проект</ItemLink>
        </Item>

        <Item elevation={0}>
          <ItemLink to='/transactions'>Збори</ItemLink>
        </Item>

        <Item elevation={0}>
          <ItemLink to='/profile'>Профіль</ItemLink>
        </Item>
      </Stack>
    </Box>
  );
}
