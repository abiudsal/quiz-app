import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../../helpers/file.service';
import { Quiz } from '../../models/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
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

  nextQuestion(){
    if(this.nQuestion < this.quiz.questions.length)
      this.nQuestion++
  }

}
