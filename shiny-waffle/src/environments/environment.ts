// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDHhcEaaHzixewWVunlQUD3ONMlQqzwgs0",
    authDomain: "shinywaffle.firebaseapp.com",
    databaseURL: "https://shinywaffle-default-rtdb.firebaseio.com",
    projectId: "shinywaffle",
    storageBucket: "shinywaffle.appspot.com",
    messagingSenderId: "923943825637",
    appId: "1:923943825637:web:9da61fb3078ad1ec5b240c"
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
