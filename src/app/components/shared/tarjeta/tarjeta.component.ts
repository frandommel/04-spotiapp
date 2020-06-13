import { Component, Input } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() items: any[];

  constructor(private router:Router) { 
    
  }
  verArtista( item:any){
    let artistaId:any;
    if(item.type == "album"){
        artistaId= item.artists[0].id;
        this.router.navigate(['/artist',artistaId]);
    }else{
      artistaId= item.id;
      this.router.navigate(['/artist',artistaId]);
    }

  }

}
