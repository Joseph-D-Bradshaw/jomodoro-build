import { Injectable } from '@angular/core';
import { Note } from './types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  todo: Note[] = [
    {title: 'Make this app', description: 'Make an app that is worth using via Angular Material', estimated: 12},
    {title: 'Make an MVP', description: 'A clone of the "make this app" ticket'},
    {title: 'Add Some Notes', description: 'Go ahead! Try it!'},
  ];

  inProgress: Note[] = [
    {title: 'Test this app out', description: 'Mess around, have fun.'},
    {title: 'Share with friends', description: 'If you like me that is.', estimated: 4}
  ];

  done: Note[] = [
    {title: '????', description: '?????????????'},
    {title: 'Profit', description: '$ :)'},
    {title: 'Did it work?', description: 'Probably not.. I break everything'}
  ];

  constructor() { }

  addToTodo(title: string, description: string, estimated: number): void {
    if (title && description && estimated) {
      if (!this.alreadyExists({ title, description, estimated })) {
        this.todo.push({ title, description, estimated });
      }
    }
  }

  private alreadyExists(note: Note): boolean {
    let matchFound = false;
    this.getAll().some(innerNote => {
      if (innerNote.description === note.description &&
        innerNote.title === note.title &&
        innerNote.estimated === note.estimated) {
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
