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
  public hits: number = 0;
  public blocked = false;
  public gameOver = false;
  public id: any


  //public id: string
  constructor(
    private fileService: FileService,
    private route: ActivatedRoute,
    private router: Router    
  ) { 
    this.id = this.route.snapshot.paramMap.get('id'); 
    if(this.id===null){
      this.id="0";
    }
    this.quiz = fileService.get(parseInt(this.id));
    this.nQuestion = 0;
    this.nAllQuestions = this.quiz.questions.length
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //this.formFocus.nativeElement.focus();
  }

  nextQuestion(){
    if(this.blocked){
      if(this.nQuestion < this.quiz.questions.length-1){
        this.nQuestion++
        this.resetButtons()
        this.blocked = false;
      }else{
        this.showResults()
      }
    }
    else{
      alert("Seleccione una respuesta para continuar")
    }
  }

  checkAnswer(i: number){
    if(!this.blocked){
      if(i===this.quiz.questions[this.nQuestion].index){
        //alert("fdsafdsa "+i)
        this.hits++;
      }
      else{
        this.showIncorrectButton(i)        
      }
      this.showCorrectButton(this.quiz.questions[this.nQuestion].index)
      this.blocked = true;
    }

  }

  resetButtons(){
    this.answer0.nativeElement.classList.remove('correct');
    this.answer1.nativeElement.classList.remove('correct');
    this.answer2.nativeElement.classList.remove('correct');
    this.answer3.nativeElement.classList.remove('correct');
    this.answer4.nativeElement.classList.remove('correct');
    this.answer0.nativeElement.classList.remove('incorrect');
    this.answer1.nativeElement.classList.remove('incorrect');
    this.answer2.nativeElement.classList.remove('incorrect');
    this.answer3.nativeElement.classList.remove('incorrect');
    this.answer4.nativeElement.classList.remove('incorrect');
  }

  showCorrectButton(i: number){
    switch(i){
      case 0:
        this.answer0.nativeElement.classList.add('correct');
        break;
      case 1:
        this.answer1.nativeElement.classList.add('correct');
        break;
      case 2:
        this.answer2.nativeElement.classList.add('correct');
        break;
      case 3:
        this.answer3.nativeElement.classList.add('correct');
        break;
      case 4:
        this.answer4.nativeElement.classList.add('correct');
        break;
    }
  }

  showIncorrectButton(i: number){
    switch(i){
      case 0:
        this.answer0.nativeElement.classList.add('incorrect');
        break;
      case 1:
        this.answer1.nativeElement.classList.add('incorrect');
        break;
      case 2:
        this.answer2.nativeElement.classList.add('incorrect');
        break;
      case 3:
        this.answer3.nativeElement.classList.add('incorrect');
        break;
      case 4:
        this.answer4.nativeElement.classList.add('incorrect');
        break;
    }
  }

  showResults(){
    this.gameOver = true
  }

  restart(){
    window.location.reload();
  }

  explore(){
    this.router.navigateByUrl("/categorias")
  }

}
