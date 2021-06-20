// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiLoginUser: 'http://localhost:3800/api',
  apiToken: 'http://localhost:3800/api/login/token',
  apiLoginAdmin: 'http://localhost:3800/api/login/admin',
  apiGetUsers: 'http://localhost:3800/api/user/all',
  apiTickets: 'http://localhost:3800/api/ticket/all',
  apiPostUser: 'http://localhost:3800/api/user/',
  apiPostForm: 'http://localhost:3800/api/form/',
  apiGetForms: 'http://localhost:3800/api/form/all',
  apiGetUser: 'http://localhost:3800/api/user/',
  apiTicket: 'http://localhost:3800/api/ticket/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
