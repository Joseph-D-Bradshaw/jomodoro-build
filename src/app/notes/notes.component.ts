import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  addToTodo(title: string, description: string, estimated: number): void {
    this.notesService.addToTodo(title, description, estimated);
  }
}
