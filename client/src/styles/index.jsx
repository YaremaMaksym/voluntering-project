import { createTheme } from '@mui/material/styles';

export const Colors = {
  primary: '#00A82D',
  secondary: '#89D86E',
  notActive: '#00681C',
  white: '#fff',
  modalBackground: '#F4F4F4',
  black: '#000',
  loginFalseTxt: '#F8F8F8',
  loginFalseBg: '#EF4141',
};

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    third: {
      main: Colors.inputTextColor,
    },
    fourth: {
      main: Colors.white,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colors.dark,
          color: Colors.dove_gray,
          borderRadius: '0px 10px 10px 0px',
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: Colors.white,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
