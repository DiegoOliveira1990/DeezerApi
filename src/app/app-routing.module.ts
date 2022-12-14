import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id/:albumid', component: ArtistComponent },
    { path:'', pathMatch:'full', redirectTo:'home' },
    { path:'**', pathMatch:'full', redirectTo:'home' }
]
