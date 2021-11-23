import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { KanbanComponent } from './kanban/kanban.component';
import { NotesComponent } from './notes/notes.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    NotesComponent,
    PomodoroComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
