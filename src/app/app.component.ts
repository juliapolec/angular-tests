import { Component } from '@angular/core';
import {TasksListComponent} from "./tasks-list/tasks-list.component";

export type Task = {
  done: boolean;
  type: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-guide';
  tasks = [
    {
      name: "task-1",
      done: true,
    },
    {
      name: "task-2",
      done: true,
    }
  ];

}
