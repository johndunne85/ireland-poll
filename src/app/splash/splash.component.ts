import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit,AfterViewInit {

  mediaItems = [
    {name:"Dublin City", photo: "dublinWater.jpg",link: "dublin"},
    {name:"Trump Administration", photo: "trump.jpg",link: "limerick"},
    {name:"Irish Politics", photo: "irishPolitics.jpg",link: "donegal"},
    {name:"Trinity College", photo: "trinity.jpg", link: "trinity"},
    {name:"Maynooth University", photo: "maynoothc.jpg",link:"maynooth"}
  ];

  constructor() { }

  ngOnInit() {

  }

 @ViewChild('myModal') modal;

ngAfterViewInit(){

  (()=>{
  setTimeout( ()=>{
     this.modal.nativeElement.style.display = "block";
  },1300);
  console.log("john 22");
  })();

}




unlock(){
  this.modal.nativeElement.style.display = "none";

}

}
