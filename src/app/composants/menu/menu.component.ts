import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import {  faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faChartLine = faChartLine ;
  filmIcon = faFilm;
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: `fas fa-chart-line`,
   //   icon: `fa-solid fa-chart-line-up`,
  
      url: '',
      sousMenu: [
        { id: '11', titre: 'vue d\'ensemble', icon: 'fa-solid fa-chart-pie', url: '' },
        { id: '12', titre: 'statistiques', icon: 'fa-solid fa-chart-column', url: 'statistiques' }] as Array<Menu>
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenu: [
        { id: '21', titre: 'Articles', icon: 'fas fa-boxes', url: 'articles' },
        { id: '22', titre: 'Mouvements du Stock', icon: 'fab fa-stack-overflow', url: 'mvtstk' }
      ] as Array<Menu>
    },
    {
      id: '3',
      titre: 'Client',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        { id: '31', titre: 'Clients', icon: 'fas fa-users', url: 'clients' },
        { id: '32', titre: 'Commandes clients', icon: 'fas fa-shopping-basket', url: 'commandesclient' }
      ] as Array<Menu>
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        { id: '41', titre: 'Fournisseurs', icon: 'fas fa-users', url: 'fournisseurs' },
        {
          id: '42', titre: 'Commandes Fournisseurs', icon: 'fas fa-truck', url: 'commandesfournisseur'
        }
      ] as Array<Menu>
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        { id: '51', titre: 'Categories', icon: 'fas fa-tools', url: 'categories' },
        { id: '52', titre: 'utilisateurs', icon: 'fas fa-users-cog', url: 'utilisateurs' }
      ] as Array<Menu>
    },

  ];
  private lastSelectedMenu: Menu | undefined
  constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
  }
  
  // navigate(url?:string): void {
  //   this.router.navigate([url]);
  // }

  navigate(menu: Menu): void {
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active = false ;
    }
    menu.active = true ;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu
  }

}
