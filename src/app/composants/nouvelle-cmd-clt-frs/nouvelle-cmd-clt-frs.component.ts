import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent {

  origin ='';
  constructor(
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data: any) => {
      this.origin = data.origin;
    });
  }

}
