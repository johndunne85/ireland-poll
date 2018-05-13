import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maynooth',
  templateUrl: './maynooth.component.html',
  styleUrls: ['./maynooth.component.css']
})
export class MaynoothComponent implements OnInit {

  num = 0;
  constructor() { }

  ngOnInit() {
  }

  loadArray =[{ question:"Do you think Maynooth is a good University?", ans1:"Yes, it's as good as any other University.",
    ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
    ans4:"I don't really care.",checkBoxTicked: false}
  ];

  mayQuestions = [
    { question:"Do you think Maynooth has a good night club scene?", ans1:"Yes, it's as good as any other University.",
        ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
        ans4:"I don't really care.",checkBoxTicked: false},
    { question:"Do you think Maynooth is too far away from the city center?", ans1:"Yes, it's as good as any other University.",
          ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
          ans4:"I don't really care.",checkBoxTicked: false},

  ];

  checkBoxTicked: boolean = false;

  openSesami = false;

  checked(){
    this.loadArray[this.num].checkBoxTicked = true;
  }

  openNav(){
      this.openSesami = true;
  }
  closeNav(){
    this.openSesami = false;
  }
  btnClick(){
    this.loadArray.push(this.mayQuestions[this.num]);
    this.num += 1;
  }

}
