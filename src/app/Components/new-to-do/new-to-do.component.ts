import { Component } from '@angular/core';
import { ToDoServiceService } from '../../Services/to-do-service.service';
import { ToDoModel } from '../../Domain/todoModel';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-to-do',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-to-do.component.html',
  styleUrl: './new-to-do.component.css'
})
export class NewToDoComponent {

todo: ToDoModel = new ToDoModel();

  constructor(private toDoService: ToDoServiceService) { 
    
  }

  saveToDo(){
    this.toDoService.addToDo(this.todo);
  }

}
