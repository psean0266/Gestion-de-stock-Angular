import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent {
  @Input()
  isNouveauVisible = true ;
  @Input()
  isExportVisible= true ;
  @Input()
  isImportVisible = true ;
  
   @Output()
  clickEvent = new EventEmitter()

  constructor(){}

  ngOnInit(): void {}

  boutonNouveauClick():void{
   this.clickEvent.emit(); 
  }

}
