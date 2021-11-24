import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { NotesComponent } from './notes/notes.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { OverviewComponent } from './overview/overview.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'editor', component: NoteEditorComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    NotesComponent,
    PomodoroComponent,
    OverviewComponent,
    NoteEditorComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
