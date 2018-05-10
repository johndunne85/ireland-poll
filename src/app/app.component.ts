import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    showSideNav: boolean = false;

    mediaItems = [
      {name:"Dublin City", photo: "dublin.jpg"},
      {name:"Limerick City", photo: "limerick.jpg"},
      {name:"Donegal", photo: "donegal.jpg"},
      {name:"Trinity College", photo: "trinity.jpg"},
      {name:"Maynooth University", photo: "maynooth.jpg"}
    ];

      openNav(){
          this.showSideNav = true;
      }

      closeNav(){
        this.showSideNav = false;
      }
}
