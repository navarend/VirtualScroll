import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styles: []
})
export class DragDropComponent implements OnInit {
  contries: any = [];
  constructor( private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/lang/en").subscribe( result => this.contries = result );
  }

  Drop( event: CdkDragDrop<any> ){
    moveItemInArray( this.contries, event.previousIndex, event.currentIndex );
  };

}
