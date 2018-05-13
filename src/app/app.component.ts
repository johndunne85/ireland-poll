import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    showSideNav: boolean = false;

    mediaItems = [
      {name:"Dublin City", photo: "dublin.jpg",link: "dublin"},
      {name:"Limerick City", photo: "limerick.jpg",link: "limrick"},
      {name:"Donegal", photo: "donegal.jpg",link: "donegal"},
      {name:"Trinity College", photo: "trinity.jpg", link: "trinity"},
      {name:"Maynooth University", photo: "maynooth.jpg",link:"maynooth"}
    ];

      openNav(){
          this.showSideNav = true;
      }

      closeNav(){
        this.showSideNav = false;
      }
}
