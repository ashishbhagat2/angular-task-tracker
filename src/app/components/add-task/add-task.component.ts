import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService} from 'src/app/services/ui.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task : Task ={text: "",day:"",reminder:false}
  showAddTask : Boolean;
  subscription : Subscription;

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask=value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onAddTask.emit(this.task);
    this.task.text="",
    this.task.day="",
    this.task.reminder=false
  }
 
}
