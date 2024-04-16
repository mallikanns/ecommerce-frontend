import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackOrderComponent } from './track-order/track-order.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    SignupComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function getLocalStorage() {
//   return (typeof window !== "undefined") ? window.localStorage : null;
// }
