// import { isPlatformBrowser, isPlatformServer } from '@angular/common';
// import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
// import { log } from 'console';

// // import 'localstorage-polyfill'

// // global['localStorage'] = localStorage;

// const TOKEN = 'ecom-token';
// const USER = 'ecom-user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserStorageService {

//   // constructor() { }
//   constructor(
//     @Inject(PLATFORM_ID) private platformId: any,
//     @Inject('LOCALSTORAGE') private localStorage: any) {

//     // do something

// }

//   NgOnInit() {
//     if (isPlatformBrowser(this.platformId)) {
//         // localStorage will be available: we can use it.
//     }
//     if (isPlatformServer(this.platformId)) {
//         // localStorage will be null.
//     }
//   }


//   public saveToken(token: string): void {
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.setItem(TOKEN, token);
//   }

//   public saveUser(user): void {
//     window.localStorage.removeItem(USER);
//     window.localStorage.setItem(USER, JSON.stringify(user));
//   }

//   static getToken(): string {
//     return localStorage.getItem(TOKEN);
//   }

//   static getUser(): any {
//     return JSON.parse(localStorage.getItem(USER));
//   }

//    static getUserId(): string {
//     const user = this.getUser();
//     if (user == null) {
//       return '';
//     }
//     return user.userId;
//    }

//    static getUserRole(): string {
//     const user = this.getUser();
//     if (user == null) {
//       return '';
//     }
//     return user.role;
//    }

//    static isAdminLoggedIn(): boolean {
//     if (this.getToken === null) {
//       return false;
//     }
//     const role: string = this.getUserRole();
//     return role == 'ADMIN';
//     // return true;
//    }

//    static isCustomerLoggedIn(): boolean {
//     if (this.getToken === null) {
//       return false;
//     }
//     const role: string = this.getUserRole();
//     return role == 'CUSTOMER';
//     // return true;
//    }

//    static signOut(): void {
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.removeItem(USER);
//    }
// }
