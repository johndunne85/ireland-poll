import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-questions',
  templateUrl: './more-questions.component.html',
  styleUrls: ['./more-questions.component.css']
})
export class MoreQuestionsComponent implements OnInit {



  changeTopic = ["change Topic","next Topic","other Topic","GAA","Love Island"];

  constructor() { }

  ngOnInit() {
  }

}
