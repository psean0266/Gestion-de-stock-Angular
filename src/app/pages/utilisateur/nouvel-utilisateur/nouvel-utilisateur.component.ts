import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent {
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
    saveClick():void{    
    }

    cancel():void{
     this.router.navigate(['utilsateurs']);
    }

}
