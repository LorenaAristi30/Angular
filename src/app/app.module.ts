import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IndexComponent } from './pages/index/index.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    IndexComponent,
    HistoryComponent,
    LoginComponent,
    MenuLoginComponent,
    CharactersComponent,
    ContactComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
