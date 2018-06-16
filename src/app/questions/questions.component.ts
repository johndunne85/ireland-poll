import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  num = 0;
  constructor() { }

  ngOnInit() {
  }

  loadArray =[{ question:"Do you think Maynooth is a good University?", ans1:"Yes, it's as good as any other University.",
    ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
    ans4:"I don't really care.",checkBoxTicked: false,per1: 8, per2: 35, per3: 46, per4: 27}
  ];

  mayQuestions = [
    { question:"Do you think Maynooth has a good night club scene?", ans1:"Yes, it's as good as any other University.",
        ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
        ans4:"I don't really care.",checkBoxTicked: false,per1: 25, per2: 35, per3: 16, per4: 24},
    { question:"Do you think Maynooth is too far away from the city center?", ans1:"Yes, it's as good as any other University.",
          ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
          ans4:"I don't really care.",checkBoxTicked: false,per1: 5, per2: 55, per3: 25, per4: 15},

  ];

  checkBoxTicked: boolean = false;

  openSesami = false;
  modulo = true;




  checked(){
    if(this.modulo ){

    this.loadArray[this.num].checkBoxTicked = true;


    if(this.num < 2){
    setTimeout(()=>{
      this.loadArray.push(this.mayQuestions[this.num++]);

    },2000);
      }
}


    this.modulo = !this.modulo;

  }

  openNav(){
      this.openSesami = true;
  }
  closeNav(){
    this.openSesami = false;
  }
  //   btnClick(){
  //   this.loadArray.push(this.mayQuestions[this.num]);
  //   this.num += 1;
  // }

}
