import { Component } from '@angular/core';
import { DeezerService } from '../deezer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
    ]
})
export class HomeComponent {

  albumnExist: any[] = [];
  loading =  true;

  constructor(private deezer: DeezerService) {
    this.deezer.getArtistAlbumns()
      .subscribe(resp => {
        this.albumnExist = resp;
        this.loading = false;
    });
  }

}
