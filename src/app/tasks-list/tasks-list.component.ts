import {Component, Input} from '@angular/core';
import {NgFor} from "@angular/common";
import {Task} from "../app.component";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
    <li *ngFor="let task of tasks">
      <div
        [class.line-through]="task.done"
        (click)="toggleDoneStatus(task)">
        {{task.name}}
      </div>
    </li>
  </ul>
  `,
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  @Input({required: true}) tasks: Task[] = [];
  toggleDoneStatus(task : Task){
    task.done = !task.done;
  }
}
