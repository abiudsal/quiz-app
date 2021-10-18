import { Component, OnInit } from '@angular/core';
import { FileService } from '../../helpers/file.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  public categories: Array<string> = []
  public category = ""
  public name = ""
  public questions: Array<Question> = []

  constructor(
    private fileService: FileService
  ) { 
    this.categories = fileService.getAllCategoriesSorted()
    this.categories.unshift("---")
  }

  ngOnInit(): void {    
  }

  onChange (event: any) {
    if(event.target.value!=="---"){
      this.category = event.target.value;
    }
    //console.log(event.target.value) 
  }

  addQuestion(){
    this.questions.push(new Question("",[],0))
  }

}
