import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent {

  constructor(
    private router: Router
  ){
  
  }
  nouvelUtlilisateur(): void{
      this.router.navigate(['nouvelutlisateur']);
    }

}
