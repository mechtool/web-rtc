import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";
import {GeneralModule} from "./modules/general/general.module";
import {ColorThemeService} from "./services/color-theme.service";
import {NgxsModule} from "@ngxs/store";
import { AppContextState} from "./store/states";
import {ScreenInstallService} from "./services/screen-install.service";
import {AppErrorHandler} from "./services/error-handle.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      NgxsModule.forRoot([AppContextState], {
	  developmentMode: !environment.production
      }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('service-worker.js', { enabled: true, registrationStrategy : 'registerImmediately' , scope : './' }/*{ enabled: environment.production }*/),
    BrowserAnimationsModule,
      MaterialModule,
      GeneralModule,
      ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
  ],
  providers: [
      {provide: ErrorHandler, useClass: AppErrorHandler},
      ColorThemeService,
      ScreenInstallService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
