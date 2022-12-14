import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerService } from '../deezer.service';
import { FavoritasService } from '../favoritas.service';
import { ItracksFavorites } from '../itens';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './artist.component.css' ]
})
export class ArtistComponent {

  items: any = [] = [];
  artist: any = {};
  albumTracks: any = {};
  artistPlaylist: any[] = [];
  artistPlaylistImg: any;
  artistPlaylistTitle: any;
  artistPlaylistAlbum: any;

  constructor(
    private router: ActivatedRoute, 
    private deezer: DeezerService,
    private favoritasService: FavoritasService
  ) {

    // Obtém o id da rota
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getPlaylist(params['albumid']);
    });
  }

  // Obtém as informações da API do artista com o id
  getArtist(id: string) {
    this.deezer.getArtistId(id)
      .subscribe(resp => {
        this.artist = resp;
    });
  }

  // Obtém a playlist
  getPlaylist(id: string) {
    this.deezer.getArtistTrackList(id)
      .subscribe(resp => {
        //Obtém o título da playlist
        this.artistPlaylistTitle = resp.title;
        //Obtém a lista de músicas
        this.artistPlaylist = resp.tracks.data;
    });
  }

  adicionarAsFavoritas() {
    this.favoritasService.adicionarAsFavoritas(this.items);
  }

}
