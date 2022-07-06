import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

import { store } from './app/store/store'
import { Provider } from 'react-redux'

import {BrowserRouter} from 'react-router-dom'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAyI5bhPmHIuFps4bWwda_eRsEritfUo9A",
  authDomain: "todoreact-cae48.firebaseapp.com",
  projectId: "todoreact-cae48",
  storageBucket: "todoreact-cae48.appspot.com",
  messagingSenderId: "807679256392",
  appId: "1:807679256392:web:4aad498ba20a332aa3357d",
  measurementId: "G-164B7R0X66"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth:any = getAuth();
export const AuthContext = createContext(null)



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <AuthContext.Provider value={auth}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </AuthContext.Provider>
      </Provider>

  </React.StrictMode>
)
