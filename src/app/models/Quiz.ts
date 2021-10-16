import { Question } from './Question';
export class Quiz {
    constructor(
        public title:string,
        public category:string,
        public questions: Array<Question>
    ){}
}