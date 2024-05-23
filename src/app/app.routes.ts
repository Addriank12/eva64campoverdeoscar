import { ToDoModel } from './Domain/todoModel';
import { NewToDoComponent } from './Components/new-to-do/new-to-do.component';
import { TodoComponent } from './Components/todo/todo.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/todo', pathMatch: 'full' },
    {path: 'newtodo', component: NewToDoComponent },
    {path: 'todo', component: TodoComponent}
];
