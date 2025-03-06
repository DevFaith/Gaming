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

  timer: number = 30; // 30 seconds per question
  interval: any;

  constructor() {
    this.startTimer(); // Start the timer when the quiz loads
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.nextQuestion(); // Auto move to next question on timeout
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timer = 30;
    this.startTimer(); // Restart the timer for the next question
  }

  nextQuestion() {
    this.resetTimer();
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.showResult = true;
      clearInterval(this.interval); // Stop the timer when quiz ends
    }
  }

  selectAnswer(option: string) {
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.nextQuestion();
  }
}
