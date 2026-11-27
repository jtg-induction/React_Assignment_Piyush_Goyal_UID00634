import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <h1>Hello World</h1>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
