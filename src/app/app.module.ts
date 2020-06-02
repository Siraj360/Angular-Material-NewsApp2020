import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-modules/app-material.module';
import { AppNewsComponent, DlgCommentDialog } from './app-news/app-news.component';
import { AppMenuComponent } from './common/app-menu/app-menu.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ThemeSwitchComponent } from './common/theme-switch/theme-switch.component';
import { GlobalState } from './global.state';
import { FilterPipe, OrderBy } from './pipes'

@NgModule({
  declarations: [
    FilterPipe,
    OrderBy,
    AppComponent,
    AppNewsComponent,
    DlgCommentDialog,
    AppMenuComponent,
    LoaderComponent,
    ThemeSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  entryComponents: [DlgCommentDialog],
  providers: [
    GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule { }
