import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // Temporary placeholder so Redux boots cleanly until we add auth, profile, search, and suggestions slices
        _placeholder: (state: Record<string, unknown> = {}) => state,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
