import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] = [];
  constructor(private spotifyService:SpotifyService) {

   }

  public buscar( termino: string)
  {
    this.spotifyService.getArtist( termino )
        .subscribe( (data:any) =>{
           console.log(data);
           this.artistas = data;
    });
    
  }

}
