import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Status, StatusRadio } from '../types';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  selectedStatus: Status;
  statuses: StatusRadio[] = [
    { value: 'todo', displayName: 'Todo' },
    { value: 'in progress', displayName: 'In Progress'},
    { value: 'done', displayName: 'Done'}
  ];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  addToTodo(title: string, description: string, estimated: number, status: Status): void {
    this.notesService.addToTodo(title, description, estimated, status);
  }
}
