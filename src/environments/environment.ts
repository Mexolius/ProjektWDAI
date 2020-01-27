import * as firebase from 'firebase';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDZ2HfVaf_C51-v3CA3cVntShLE5EegyRg",
    authDomain: "wdaiproj.firebaseapp.com",
    databaseURL: "https://wdaiproj.firebaseio.com",
    projectId: "wdaiproj",
    storageBucket: "wdaiproj.appspot.com",
    messagingSenderId: "406660514070",
    appId: "1:406660514070:web:57d04e1b23b14506d9d037",
    measurementId: "G-NLTXNTTY44"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
