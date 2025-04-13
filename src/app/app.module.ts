import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
    PagesModule
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: { preset: Aura, options: { darkModeSelector: '.p-dark' } },
    }),
  ],
})
export class AppModule { }
