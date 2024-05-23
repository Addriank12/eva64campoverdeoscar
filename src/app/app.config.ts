import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from "firebase/app";


import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore,  provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA10XJ6N6Cwy1SDx5MxiqR6cbawGcBN08k",
  authDomain: "eva64campoverdeoscar.firebaseapp.com",
  projectId: "eva64campoverdeoscar",
  storageBucket: "eva64campoverdeoscar.appspot.com",
  messagingSenderId: "23194165894",
  appId: "1:23194165894:web:adc465443861c41d86a707",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
