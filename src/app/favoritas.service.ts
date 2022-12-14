import { Injectable } from '@angular/core';
import { ItracksFavorites } from './itens';

@Injectable({
  providedIn: 'root'
})
export class FavoritasService {
  items: ItracksFavorites[] = [];

  constructor() { }

  obtemFavoritas() {
    return JSON.parse(localStorage.getItem("favoritas") || "");
  }

  adicionarAsFavoritas(item: ItracksFavorites) {
    this.items.push(item);
    localStorage.setItem("favoritas", JSON.stringify(this.items));
  }

  limparFavoritas() {
    this.items = [];
    localStorage.clear();
  }
}
