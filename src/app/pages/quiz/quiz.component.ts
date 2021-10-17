import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../../helpers/file.service';
import { Quiz } from '../../models/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @ViewChild("answer0") answer0!: ElementRef;
  @ViewChild("answer1") answer1!: ElementRef;
  @ViewChild("answer2") answer2!: ElementRef;
  @ViewChild("answer3") answer3!: ElementRef;
  @ViewChild("answer4") answer4!: ElementRef;



  public quiz:Quiz
  public nQuestion: number;
  public nAllQuestions: number;



  //public id: string
  constructor(
    private fileService: FileService,
    private route: ActivatedRoute,
    private router: Router    
  ) { 
    let id = this.route.snapshot.paramMap.get('id'); 
    if(id===null){
      id="0";
    }
    this.quiz = fileService.get(parseInt(id));
    this.nQuestion = 0;
    this.nAllQuestions = this.quiz.questions.length
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //this.formFocus.nativeElement.focus();
  }

  nextQuestion(){
    if(this.nQuestion < this.quiz.questions.length)
      this.nQuestion++
  }

  checkAnswer(i: number){
    if(i===this.quiz.questions[this.nQuestion].index){
      //alert("fdsafdsa "+i)
      this.answer0.nativeElement.classList.add('correct');
    }

  }

}
