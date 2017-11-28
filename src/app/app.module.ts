import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ContextMenuModule } from '../lib';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ContextMenuModule.forRoot({
      autoFocus: false,
      // useBootstrap4: true,
    }),
    RouterModule.forRoot([
      {
        path: '**',
        component: AppComponent,
      }
    ]),
    ScrollDispatchModule,
  ],
  providers: [/* TODO: Providers go here */],
})
export class AppModule { }
