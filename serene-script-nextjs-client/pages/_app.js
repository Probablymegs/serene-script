import { ThemeProvider } from "@emotion/react";
import "../styles/styles.css";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#a8d8d4',
          dark: '#336369',
          light: '#badcdc',
          contrastText: '#06413e',
        },
        secondary: {
          main: '#018574',
        },
      },
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
