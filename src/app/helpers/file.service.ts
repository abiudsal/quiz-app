import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { Quiz } from '../models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class FileService {
    public categories = []
    public quiz = []

    constructor() { 
        //this.saveInLocalStorage()
        //localStorage.getItem("categories")
        //localStorage.getItem("quizzes")
        this.getLocalStorage()
    }


    get(id: number){
        return Object.assign({}, this.quiz[id]);
    }
  
    getAll(){
        return [...this.quiz];
    }
    
    getAllCategories(){
        return [...this.categories];
    }

    getAllCategoriesSorted(){
        let temp = [...this.categories];

        temp = temp.sort((a:string, b:string) =>{
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        })

        return temp;
    }

    saveInLocalStorage(){
        localStorage.setItem("categories", JSON.stringify(this.categories))
        localStorage.setItem("quizzes", JSON.stringify(this.quiz))
    }

    getLocalStorage(){
        this.categories = JSON.parse(localStorage.getItem("categories") || "")
        this.quiz = JSON.parse(localStorage.getItem("quizzes") || "")
    }
}

/*
[
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
                "Oslo","Estambul", "Tokio", "Seúl"
            ], 3),   
            new Question("¿Cuál es la capital de Egipto?", [
                "Egipto","El Cairo", "Guiza", "Nilo"
            ], 1),   
        ]),
        new Quiz("Continentes", "Geografía",[
            new Question("¿En qué continente está España?", [
                "Africa","América", "Asia", "Europa" 
            ], 3),
            new Question("¿En qué continente está Nigeria?", [
                "Africa","América", "Asia", "Europa" 
            ], 0),   
            new Question("¿En qué continente está Venezuela?", [
                "Africa","América", "Asia", "Europa" 
            ], 1),   
            new Question("¿En qué continente está Nueva Zelanda?", [
                "Africa","Oceanía", "Asia", "Europa" 
            ], 1),   
            new Question("¿En qué continente está Tailandia?", [
                "Africa","América", "Asia", "Europa" 
            ], 2),   
            new Question("¿En qué continente está Cuba?", [
                "Africa","Oceanía", "Asia", "América" 
            ], 3),   
            new Question("¿En qué continente está Australia?", [
                "Africa","Oceanía", "Asia", "Europa" 
            ], 1),   
        ]),
        new Quiz("Segunda Guerra Mundial", "Historia Universal",[
            new Question("¿En qué año inició la Segunda Guerra Mundial?", [
                "1937","1938", "1939", "1940"
            ], 2),
            new Question("¿Cuál fue el acontecimiento que dió inició a la Segunda Guerra Mundial?", [                
                "Alemania invadió Polonia", "Francia invadió Polonia", "Rusia invadió Polonia"
            ], 0),
            new Question("¿Cuál de lo siguientes países NO perteneció al Eje?", [                
                "Alemania", "Italia", "URSS", "Japón"
            ], 2),
            new Question("¿Cuál de lo siguientes países NO perteneció a los Aliados?", [                
                "Estados Unidos", "Italia", "URSS", "Gran Bretaña"
            ], 1),
            new Question("¿Cuál fue el acontecimiento que provocó que Estados Unidos se unierá a los Aliados?", [                
                "El inicio de la Guerra Fría", "Alemania invadió Francia", "El ataque por parte de Japón a la base de Pearl Harbor"
            ], 0),
            new Question("¿En qué año terminó la Segunda Guerra Mundial?", [
                "1944","1945", "1946", "1947"
            ], 1),            
            new Question("¿Cuál fue el número estimado de bajas durante la Segunda Guerra Mundial?", [                
                "Entre 20 y 30 millones", "Entre 30 y 40 millones", "Entre 50 y 60 millones", "Más de 100 millones"
            ], 2),
              
        ]),
        new Quiz("Primera Guerra Mundial", "Historia Universal",[
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
                "Oslo","Estambul", "Tokio", "Seúl"
            ], 3),   
            new Question("¿Cuál es la capital de Egipto?", [
                "Egipto","El Cairo", "Guiza", "Nilo"
            ], 1),   
        ]),        
    ]


    ["Geografía", "Historia Universal", "Español", "Matemáticas", "Arte"];
*/
