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
      {name:"Trump Administration", photo: "trump.jpg",link: "limerick"},
      {name:"Irish Politics", photo: "irishPolitics.jpg",link: "donegal"},
      {name:"Trinity College", photo: "trinity.jpg", link: "trinity"},
      {name:"Maynooth University", photo: "maynoothc.jpg",link:"maynooth"}
    ];

      openNav(){
          this.showSideNav = true;
      }

      closeNav(){
        this.showSideNav = false;
      }
}
