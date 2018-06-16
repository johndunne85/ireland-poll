import { Injectable } from '@angular/core';


@Injectable()
export class Service {

  getQuestions() {
    return[
      { question:"Do you think Maynooth has a good night club scene?", ans1:"Yes, it's as good as any other University.",
          ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
          ans4:"I don't really care.",checkBoxTicked: false,per1: 25, per2: 35, per3: 16, per4: 24},
      { question:"Do you think Maynooth is too far away from the city center?", ans1:"Yes, it's as good as any other University.",
            ans2:"It's ok put not the best.", ans3:"No, it's terrible and I wish I had gone somewhere else.",
            ans4:"I don't really care.",checkBoxTicked: false,per1: 5, per2: 55, per3: 25, per4: 15},

    ];
  }

}
