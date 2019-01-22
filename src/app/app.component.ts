import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropzoneActive:boolean = false;
  handleDrop(files){
    console.log(files);
  }
  dropzoneState(event){
    this.dropzoneActive = event;
  }
}
