import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note, Status } from '../types';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  notes: Note[];
  noteTitle = 'title';
  noteDescription = 'description';
  noteEstimatedPomodoros = 1;
  noteStatus: Status = 'todo';

  constructor(private notesService: NotesService) {
    this.notes = notesService.getAll();
   }

  ngOnInit(): void {
  }

}
