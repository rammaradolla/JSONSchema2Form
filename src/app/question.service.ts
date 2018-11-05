import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {
   // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getJsonSchema() {
    let schema = [{
        "key": "brave",
        "label": "Bravery Rating",
        "type": "select",
        "class": "test-class",
        "options": [
          {"key": "solid",  "value": "Solid"},
          {"key": "great",  "value": "Great"},
          {"key": "good",   "value": "Good"},
          {"key": "unproven", "value": "Unproven"}
        ],
        "order": "3"
    },
    {
      "key": "firstName",
      "label": "First name",
      "type": "text",
      "class": "test-class",
      "value": "Bombasto",
      "required": "true",
      "order": "1"
    },
    {
      "key": "emailAddress",
      "label": "Email",
      "type": "email",
      "class": "test-class",
      "value": "",
      "required": "true",
      "order": "2"
    }
  ]
    return schema;
  }

  getQuestions() {

    var questions: QuestionBase<any>[] = [];
    let schema = this.getJsonSchema();

    schema.forEach(element => {
       let question;
       switch (element.type) {
        case 'select':
          question = new DropdownQuestion({
            key: element.key,
            type: element.type,
            class: element.class,
            label: element.label,
            options: element.options,
            order: element.order
            })
            questions.push(question);
          break;

        case 'text':
        case 'email':
          question =  new TextboxQuestion({
            key: element.key,
            type: element.type,
            class: element.class,
            label: element.label,
            order: element.order
          })
          questions.push(question);
          break;
        default:
          
      }
    });
    return questions.sort((a, b) => a.order - b.order);
  }
}
