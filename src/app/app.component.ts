import { Component } from '@angular/core';
import { ToDoItem} from '../models/IToDoItem';
import {StorageService} from './storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public toDoList: ToDoItem[] = [];

  public listTitle: string;
  public listDesc: string;

  constructor(private storage: StorageService ){
    this.toDoList = storage.getToDoItem();
  }

  public newItem(item: ToDoItem){
    this.toDoList = this.storage.getToDoItem();
  }

  public clearData(){
    this.storage.deleteStorage();
    this.toDoList = this.storage.getToDoItem();
  }

  updateStatus(item: ToDoItem){
    this.toDoList = this.storage.getToDoItem();
  }



}
