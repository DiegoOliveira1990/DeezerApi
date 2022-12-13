import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DeezerService {
  constructor(private http: HttpClient) { }

  // Consumir API - GET
  getAPI(query: string) {
    // URL endpoint
    const url = `https://deezerdevs-deezer.p.rapidapi.com/${query}`;

    // Segurança - API
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'bf6f6dbb25mshc31f95af5bdc607p11dc9fjsn5b267d7fff12',
    });

    return this.http.get(url, { headers });
  }

  // Obtém os discos de um artista através do Search
  getArtistAlbumns() {
    return this.getAPI('search?q=rock as melhores').pipe(
      map((resp: any) => resp.data)
    );
  }

  // Obtém o artista através do Search
  getArtistSearch(term: string) {
    return this.getAPI(`search?q=${term}`).pipe(map((resp: any) => resp.data));
  }

  // Obtém o artista através do Artist
  getArtistId(id: string) {
    return this.getAPI(`artist/${id}`).pipe(map((resp: any) => resp));
  }

  // Obtém a playlist de um artista através do Playlist
  getArtistPlayList(id: string) {
    return this.getAPI(`playlist/${id}`).pipe(
      map((resp: any) => resp.data)
    );
  }

  // Obtém a playlist de um artista
  getArtistTrackList(id: string) {
    return this.getAPI(`album/${id}`).pipe(map((resp: any) => resp));
  }
  
}
