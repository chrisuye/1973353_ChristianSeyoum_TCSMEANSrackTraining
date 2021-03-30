import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoserverService } from '../todoserver.service';

const ELEMENT_DATA: Todo[] = []

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Task', 'Date'];
  dataSource:Array<Todo> = ELEMENT_DATA;

  constructor(public todoServer:TodoserverService) { }

  ngOnInit(): void {
    this.getTodo()
  }

  addTodo(todo:any) {
    if (
      todo.id != "" &&
      todo.name != "" &&
      todo.task != "" &&
      todo.date != ""
    ) {
      this.todoServer.addTodo(todo)
    }
  }

  getTodo() {
    this.todoServer.getTodo().subscribe(result=> this.dataSource = result,
      error=> console.log(error))
  }
}
