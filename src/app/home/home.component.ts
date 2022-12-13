import { Component } from '@angular/core';
import { DeezerService } from '../deezer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {

  albumnExist: any[] = [];

  constructor(private deezer: DeezerService) {
    this.deezer.getArtistAlbumns()
      .subscribe(resp => {
        this.albumnExist = resp;
    });

  }



}
