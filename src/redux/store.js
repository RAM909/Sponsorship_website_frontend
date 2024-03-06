import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './features/loadingSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer:{
        loading:loadingReducer,
        user:userReducer,
    }
});

export default store;