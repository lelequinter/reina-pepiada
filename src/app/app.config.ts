import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()), provideNzIcons(), provideNzI18n(es_ES), importProvidersFrom(FormsModule), importProvidersFrom(HttpClientModule), provideAnimations()]
};
