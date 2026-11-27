import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    mode: 'light',
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    divider: COLORS.BORDER.LIGHT,
    error: {
        main: COLORS.STATUS.ERROR,
    },
    success: {
        main: COLORS.STATUS.SUCCESS,
    },
    header: {
        main: COLORS.HEADER.MAIN,
        border: COLORS.HEADER.BORDER,
        textPrimary: COLORS.HEADER.TEXT_PRIMARY,
        textSecondary: COLORS.HEADER.TEXT_SECONDARY,
    },
    surface: {
        subtle: COLORS.BACKGROUND.SUBTLE,
        border: COLORS.BORDER.LIGHT,
        inputBorder: COLORS.BORDER.INPUT,
        profileBanner: COLORS.GRADIENT.PROFILE_BANNER,
    },
};
