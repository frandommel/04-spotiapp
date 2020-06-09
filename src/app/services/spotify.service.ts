import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService { 
  constructor(private http: HttpClient) { 

  }
  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

            // header del token (expira cada 1 hora)
    const headers =  new HttpHeaders({
      'Authorization':'Bearer BQD6jOU3Ll1g37r9UrlyHjAIffYgDFWAcaQR6JkzeTmLS8yn4kuW4_l-n1hqd5aiypxmkRsinu9TAiSvNX8'
    });

    return this.http.get(url, { headers });
  }

  /*Obtengo nuevos lanzamientos*/
  getNewReleases(){  
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( (data: any) => data.albums.items ));    //el pipe filtra los datos que queres
  }
//Obtengo artistas
  getArtist( termino: string ){
      return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                 .pipe(map( ( data:any ) =>  data.artists.items));
  }
}
