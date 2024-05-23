import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { CollectionReference, Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { ToDoModel } from '../Domain/todoModel';
import { deleteDoc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  

  constructor(private firestore: Firestore) {     

  }

  async deleteToDos(title: string) {
    (await getDocs(query(collection(this.firestore, 'ToDos')))).docs.map((todos) => {
      if (todos.data()['title'] === title) {
        deleteDoc(todos.ref);
      }
    })
  }

  async getToDos(){
    return (
      await getDocs(query(collection(this.firestore, 'ToDos')))
     ).docs.map((todos) => todos.data());
  }

  addToDo(todo: ToDoModel){
    addDoc(collection(this.firestore, 'ToDos'), Object.assign({}, todo));
  }

  deleteToDo(){

  }
}
