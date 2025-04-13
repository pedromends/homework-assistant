import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedModule } from './protected/protected.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule
  ]
})
export class PagesModule { }
