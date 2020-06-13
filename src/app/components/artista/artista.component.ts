import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //para recibir por parametro
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
    artist: any = {};
    topTracks: any[] = [];
    loading:boolean = true;
  constructor(private router: ActivatedRoute, private spoti:SpotifyService) { 
      this.router.params.subscribe(params =>{     
         this.getArtista(params['id']);
         this.getTopTrack(params['id']);
      });
  }

  getArtista( id: string){
    this.spoti.getArtist(id).subscribe( (data:any)=>{
      this.artist = data;
      this.loading = false;
  })
  }
  getTopTrack(id: string){
    this.spoti.getTopTracks(id).subscribe( (data:any)=>{
        this.topTracks = data;
        console.log(data);
    });
  }


}
