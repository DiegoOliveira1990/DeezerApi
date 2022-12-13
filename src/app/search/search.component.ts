import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../deezer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  artistSearch: any[] = [];

  constructor(private deezer: DeezerService) { }

  //Mostrar informações da busca
  search(term:string) {
    //Carregamento do método de serviço
    this.deezer.getArtistSearch(term)
      .subscribe(resp => {
        console.log(resp);
        this.artistSearch = resp;
      })

  }

 

}
