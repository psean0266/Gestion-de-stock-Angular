import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-catogries',
  templateUrl: './page-catogries.component.html',
  styleUrls: ['./page-catogries.component.scss']
})
export class PageCatogriesComponent {

  constructor(
    private router : Router 
  ){}

  ngOnInit(): void {}
  
  nouvelleCtegorie(): void{
    this.router.navigate(['nouvellecategorie']);
  }



}
