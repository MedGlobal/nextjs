import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: { main: '#0d47a1' },
    secondary: { main: '#e64a19' },
    tertiary: { main: '#1565c0' },
    text: {
      primary: '#212121',
      secondary: 'rgba(0,0,0,0.6)',
    },
    info: {
      main: '#E3F2FD',
      contrastText: '#0d47a1',
    },
    background: {
      main: '#fff',
      light: '#f9f9f9',
      smoke: '#f5f5f5',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
      lineHeight: 1.13,
      letterSpacing: '0.07em',
    },
    fontFamily: 'Raleway',
    h3: { fontWeight: 600 },
    body2: { fontWeight: 400 },
  },
});

export default theme;
