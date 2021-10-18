import { Component, OnInit } from '@angular/core';
import { FileService } from '../../helpers/file.service';
import { Quiz } from '../../models/Quiz';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories:Array<String> = [] 
  public quizzes: Array<Quiz> = []

  constructor(
    private fileService: FileService
  ) { 
    this.categories = fileService.getAllCategoriesSorted()
    this.quizzes = fileService.getAll()
  }

  ngOnInit(): void {
  }



}
