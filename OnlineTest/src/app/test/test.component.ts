import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnsweredTest, Test, CheckAnswer } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests:Array<Test> = []
  currentQuestion:number = 0
  correct:number = 0
  incorrect:number = 0
  answerSelected:boolean = false
  buttonDisplay:string = "Next"
  option:boolean = false
  answeredTest:Array<AnsweredTest> = []
  answered:string = ""
  finalCheck:boolean = false
  isButtonVisible:boolean = false
  result:boolean = false
  isClicked:boolean = true

  constructor(public service:TestService, public router:Router) { }

  ngOnInit(): void {
    this.service.loadTest().subscribe(result=> this.tests = result,
      error=> console.log(error))
  }

  onClick(option:boolean, answered:string) {
    this.answerSelected = true
    this.option = option
    this.answered = answered
  }

  onNext() {
    if (this.currentQuestion + 1 < this.tests.length) {
      for (let i = 0; i < this.tests[this.currentQuestion].answer.length; i++) {
        if (this.tests[this.currentQuestion].answer[i].check = true) {
          let picked: Array<CheckAnswer> = []
          picked.push(new CheckAnswer("Your Answer: "+this.answered))
          picked.push(new CheckAnswer("Correct Answer: "+this.tests[this.currentQuestion].answer[i].opt))
          let check = this.answered==this.tests[this.currentQuestion].answer[i].opt
          check ? this.correct++ : this.incorrect++
          this.answeredTest.push(new AnsweredTest(this.tests[this.currentQuestion].ques, picked, check))
          break
        }
      }
      
      this.currentQuestion++
      this.answerSelected = false

    } 
    if (this.currentQuestion + 1 == this.tests.length) {
      this.buttonDisplay = "Finish"
      if (this.finalCheck) {
        for (let i = 0; i < this.tests[this.currentQuestion].answer.length; i++) {
          if (this.tests[this.currentQuestion].answer[i].check = true) {
            let picked: Array<CheckAnswer> = []
            picked.push(new CheckAnswer("Your Answer: "+this.answered))
            picked.push(new CheckAnswer("Correct Answer: "+this.tests[this.currentQuestion].answer[i].opt))
            let check = this.answered==this.tests[this.currentQuestion].answer[i].opt
            check ? this.correct++ : this.incorrect++
            this.answeredTest.push(new AnsweredTest(this.tests[this.currentQuestion].ques, picked, check))
            break
          }
        }

        this.answerSelected = false
        this.isButtonVisible = true
      } else {
        this.finalCheck = true
      }
    }
  }

  showResults() {
    this.result = true
    this.isClicked = false
  }

  done() {
    this.router.navigate(["startpage"]);
  }

}
