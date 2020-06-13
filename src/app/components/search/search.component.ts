import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;
  constructor(private spotifyService:SpotifyService) {
    this.loading = false;
   }

  public buscar( termino: string)
  {
    if(termino.length == 0){
      this.loading = false;
    }else this.loading = true; 
    
    this.spotifyService.getArtists( termino )
        .subscribe( (data:any) =>{
           console.log(data);
           this.artistas = data;
           this.loading = false;
    });
    
  }
  }
