import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Tasks } from '../mock-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl  = 'http://localhost:6100/tasks'

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task : Task) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${task.id}`)
  }

  updateTask(task : Task) : Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${task.id}`, task)
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }
}
