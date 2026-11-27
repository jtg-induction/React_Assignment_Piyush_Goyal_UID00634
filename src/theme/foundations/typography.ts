import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
- Converts a pixel value to rem units.
- @param px - The pixel value to convert.
- @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
- Creates a typography block with various styles
- @param theme - Theme object to access the breakpoints.
- @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: "'Inter', sans-serif",
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    // Page headings (e.g., "Who to Follow")
    h1: {
        fontSize: typographyUtil.pxToRem(28),
        fontWeight: 700,
        lineHeight: 1.25,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(36),
        },
    },

    // Card headings (e.g., "Welcome Back", "My Profile")
    h2: {
        fontSize: typographyUtil.pxToRem(24),
        fontWeight: 700,
        lineHeight: 1.3,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(28),
        },
    },

    // Stat numbers ("1,000", "50") and Profile username
    h3: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 700,
        lineHeight: 1.3,
    },

    // Card sub-headings (e.g., "About", list usernames)
    h4: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: 1.4,
    },

    // Body text and bios
    body1: {
        fontSize: typographyUtil.pxToRem(15),
        fontWeight: 400,
        lineHeight: 1.5,
    },

    // Secondary labels ("Followers", "Following", subtitles)
    body2: {
        fontSize: typographyUtil.pxToRem(13),
        fontWeight: 400,
        lineHeight: 1.45,
    },

    // Helper and error text
    caption: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.4,
    },

    // Button labels
    button: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        textTransform: 'none',
    },
});

export const typography = { typographyStyle, typographyUtil };
