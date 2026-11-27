import type { Components } from '@mui/material/styles';

// Local Font files
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
import { COLORS } from '@constant';

const fontFaceDeclarations = `
    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegularWOFF2}) format('woff2'),
             url(${InterRegularTTF}) format('truetype');
    }
`;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: `
            ${fontFaceDeclarations}
            html {
                font-size: 62.5%;
            }
        `,
    },
    MuiAppBar: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: {
                backgroundColor: COLORS.HEADER.MAIN,
                color: COLORS.HEADER.TEXT_PRIMARY,
                borderBottom: `1px solid ${COLORS.HEADER.BORDER}`,
            },
        },
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius: '8px',
                padding: '8px 18px',
            },
        },
    },
    MuiCard: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: {
                borderRadius: '16px',
                border: `1px solid ${COLORS.BORDER.LIGHT}`,
                boxShadow: '0px 4px 20px rgba(17, 24, 39, 0.05)',
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: '10px',
                backgroundColor: COLORS.BACKGROUND.PAPER,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: COLORS.BORDER.INPUT,
                },
            },
        },
    },
};
