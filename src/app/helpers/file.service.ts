import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { Quiz } from '../models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class FileService {
    public quiz = [
        new Quiz("Capitales", "Geografía",[
            new Question("¿Cuál es la capital de Argentina?", [
                "Buenos Aires","Argentina", "Tabasco", "Montevideo"
            ], 0),
            new Question("¿Cuál es la capital de Alemania?", [
                "París","Berlín", "Moskú", "Praga"
            ], 1),   
            new Question("¿Cuál es la capital de México?", [
                "México","Estado de México", "Tenochtitlan", "Ciudad de México"
            ], 3),   
            new Question("¿Cuál es la capital de Corea del Sur?", [
                "Oslo","Estambul", "Tokio", "Ciudad de Seúl"
            ], 3),   
            new Question("¿Cuál es la capital de Egipto?", [
                "Egipto","El Cairo", "Guiza", "Nilo"
            ], 3),   
        ]),
        new Quiz("Hola mundo", "Aprendiendo",[
            new Question("¿Cuantos años tienes?", [
                "Si","No", "Tal vez", "mmm bueno"
            ], 2)   
        ]),
    ]

    constructor() { 
        
    }


    get(id: number){
        return Object.assign({}, this.quiz[id]);
    }
  
    getAll(){
        return [...this.quiz];
      }
}
