import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() items: any[] = [];
  
  constructor(private router: Router) { }

   // Obtém o id do artista
   getArtistId(item: any) {
    let artistId, albumId, playlistId;
    artistId = item.artist.id;
    albumId = item.album.id;
    playlistId = item.id;
    this.router.navigate(['/artist/', artistId, albumId]);
  }

  ngOnInit(): void {
  }

}