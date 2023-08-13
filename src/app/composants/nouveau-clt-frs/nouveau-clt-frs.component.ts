import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent {

//  @Output()
//  saveClickEvent = new EventEmitter();
//  @Output()
//  cancelClickEvent = new EventEmitter();

  origin ='';
  constructor(
    private router: Router ,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data: any) => {
      this.origin = data.origin;
    });
  }

  // nouvelleCommande(): void{
  //   if(this.origin ==='client'){
  //     this.router.navigate(['nouvellecommandeclt']);
  //   } else if(this.origin ==='fournisseur'){
  //     this.router.navigate(['nouvellecommandefrs']);
  //   }
  // }

    saveClick():void{
      
    }

    cancelClick():void{
      if(this.origin ==='client'){
            this.router.navigate(['clients']);
          } else if(this.origin ==='fournisseur'){
            this.router.navigate(['fournisseurs']);
          }
    }
}
