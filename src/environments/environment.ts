// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyAwmxFyo7ZOYvx1qxuQXpig8EukocdyJRE',
    authDomain: 'test-firebase-219400.firebaseapp.com',
    databaseURL: 'https://test-firebase-219400.firebaseio.com',
    projectId: 'test-firebase-219400',
    storageBucket: 'test-firebase-219400.appspot.com',
    messagingSenderId: '682407175098'
  }
  // firebase.initializeApp(config);
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
