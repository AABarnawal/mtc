import {configureStore} from '@reduxjs/toolkit'
// import rootreducer from './rootreducer';
import loginReducer from './features/loginSlice'

// const store = configureStore({
//     reducer : rootreducer
// })


const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})


export default store;