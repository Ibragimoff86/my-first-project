import { ApplicationConfig } from '@angular/core';
import { Route, Routes, provideRouter } from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
 
]
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(), provideAnimationsAsync(), CommonModule]
};
