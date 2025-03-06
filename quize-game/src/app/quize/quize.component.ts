import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      question: 'What’s the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter',
    },
  ];

  currentQuestionIndex = 0;
  score = 0;
  showResult = false;

  selectAnswer(option: string) {
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.showResult = true;
    }
  }
}
