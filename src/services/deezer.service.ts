import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DeezerService {
    constructor(private http: HttpClient) {

    }

    // Consumir API - GET
    getAPI(query: string) {
        //URL endpoint
        const url = `https://deezerdevs-deezer.p.rapidapi.com/${query}`;
    }
}