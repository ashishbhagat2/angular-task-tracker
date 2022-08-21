import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Tasks } from 'src/app/mock-data';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[] = []

  constructor(private taskService : TaskService ) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks().subscribe((task) => this.tasks = task);
  }

  deleteTask(task: Task) : void {
    this.taskService.deleteTask(task).subscribe(()=> {this.getTasks();})
  }

  updateTask(task: Task) : void {
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe(()=>{this.getTasks();})
  }

  addTask(task : Task) : void {
    this.taskService.addTask(task).subscribe(()=>{this.getTasks();}) 
  }

}
