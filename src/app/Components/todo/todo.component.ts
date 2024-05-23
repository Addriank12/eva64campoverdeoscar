import { Component } from '@angular/core';
import { ToDoServiceService } from '../../Services/to-do-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  constructor(private ToDoService: ToDoServiceService) { }

  Todos: any;

  ngOnInit() {
    this.getTodos();
  }

  async getTodos() {
    this.Todos = await this.ToDoService.getToDos();
  }

  async delete(title: string) {
    await this.ToDoService.deleteToDos(title);
    this.getTodos();
  }

}
