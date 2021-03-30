export class Test {
    constructor(
        public ques:string,
        public answer: Answer[]
        ){}
}

class Answer {
    constructor(
        public opt:string,
        public check:boolean
    ){}
}

export class AnsweredTest {
    constructor(
      public question:string,
      public checkAnswer:CheckAnswer[],
      public check:boolean
    ){}
}

export class CheckAnswer {
    constructor(
        public choice:string
    ){}
}