import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Dynamic form from json Schema</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions: any[];
 
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
