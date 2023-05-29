import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoCardComponent,
    BigCardComponent,
    MenuBarComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
