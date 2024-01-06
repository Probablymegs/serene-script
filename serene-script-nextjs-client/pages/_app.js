import { ThemeProvider } from "@emotion/react";
import "../styles/styles.css";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
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
