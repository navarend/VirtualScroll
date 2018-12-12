import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
 @ViewChild( CdkVirtualScrollViewport ) viewPort: CdkVirtualScrollViewport;
 items = Array(7000).fill(0);
  constructor() { }

  GoToFinal(){
    this.viewPort.scrollToIndex( this.items.length );
  };

  GoToTop(){
    console.log(1234);
   this.viewPort.scrollToIndex( 0 );
  };

  GoToCenter(){
    this.viewPort.scrollToIndex( this.items.length / 2 );
  };
}
