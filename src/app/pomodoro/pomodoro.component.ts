import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../types';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  time = '00:00';
  timeData = new Date().getTime();
  inProgress: Note[];

  private timeToFinish: number;
  private timeInterval: NodeJS.Timeout;

  constructor(private notesService: NotesService) {
    this.inProgress = notesService.inProgress;
  }

  ngOnInit(): void {

  }

  startTimer(minutes: number): void {
    this.timeToFinish = new Date(new Date().getTime() + 1000 * 60 * minutes).getTime();
    this.timeInterval = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    const now = new Date().getTime();
    const timeLeft = this.timeToFinish - now;
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (timeLeft < 0) {
      this.time = '00:00';
      clearInterval(this.timeInterval);
    } else {
      this.time = `${minutes}:${seconds}`;
    }
  }

}
