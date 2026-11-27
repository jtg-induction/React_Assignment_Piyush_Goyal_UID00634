import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Palette {
        header: {
            main: string;
            border: string;
            textPrimary: string;
            textSecondary: string;
        };
        surface: {
            subtle: string;
            border: string;
            inputBorder: string;
            profileBanner: string;
        };
    }

    interface PaletteOptions {
        header?: {
            main?: string;
            border?: string;
            textPrimary?: string;
            textSecondary?: string;
        };
        surface?: {
            subtle?: string;
            border?: string;
            inputBorder?: string;
            profileBanner?: string;
        };
    }
}

export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
    }
}
