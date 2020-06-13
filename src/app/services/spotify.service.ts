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
      'Authorization':'Bearer BQDC2HCeFRot5ja2o1o6ANiwBvnEAwIUCg2DvgcUWYOg1M6GupMyYWaO_QpZj16SfTvL5URnb2Vyjrd8-C0'
    });

    return this.http.get(url, { headers });
  }

  /*Obtengo nuevos lanzamientos*/
  getNewReleases(){  
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( (data: any) => data.albums.items ));    //el pipe filtra los datos que queres
  }
//Obtengo artistas
  getArtists( termino: string ){
      return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                 .pipe(map( ( data:any ) =>  data.artists.items));
  }
  //Obtengo artista
  getArtist( id: string ){
    return this.getQuery(`artists/${ id }`);
              // .pipe(( data:any ) =>  data);
}
getTopTracks( id: string ){
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
            .pipe( map( ( data:any ) =>  data['tracks']));
}


}
