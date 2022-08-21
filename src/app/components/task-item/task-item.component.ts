import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/mock-data';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task : Task
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateTask : EventEmitter<Task> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onUpdate(task: Task) {
    this.onUpdateTask.emit(task);
  }

}
