// Importar modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Importar componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

// Importar rotas
import { routes } from './app-routing.module';

// Importar serviços
import { DeezerService } from './deezer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [
      DeezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }








/* Importar modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Importar componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';

// Importar serviços
import { DeezerService } from './deezer.service';

// Importar rotas
import { routes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    SearchComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [
      DeezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
