import { Injectable } from '@angular/core';
import { Note, Status } from './types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  todo: Note[] = [];
  inProgress: Note[] = [];
  done: Note[] = [];

  constructor() { }

  addToTodo(title: string, description: string, estimated: number, status: Status): void {
    if (title && description && estimated && status) {
      if (!this.alreadyExists({ title, description, estimated, status })) {
        this.todo.push({ title, description, estimated, status });
      }
    }
  }

  private alreadyExists(note: Note): boolean {
    let matchFound = false;
    this.getAll().some(innerNote => {
      if (innerNote.description === note.description &&
        innerNote.title === note.title &&
        innerNote.estimated === note.estimated &&
        innerNote.status === note.status) {
        matchFound = true;
        return matchFound;
      }
    });
    return matchFound;
  }

  getAll(): Note[] {
    return this.todo.concat(this.inProgress).concat(this.done);
  }
}
