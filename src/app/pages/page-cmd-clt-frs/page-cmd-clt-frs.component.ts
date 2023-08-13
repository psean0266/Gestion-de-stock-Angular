import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent {
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

  nouvelleCommande(): void{
    if(this.origin ==='client'){
      this.router.navigate(['nouvellecommandeclt']);
    } else if(this.origin ==='fournisseur'){
      this.router.navigate(['nouvellecommandefrs']);
    }
      
    }

}
