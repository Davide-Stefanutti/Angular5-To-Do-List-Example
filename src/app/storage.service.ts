import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { ToDoItem} from '../models/IToDoItem';
import {fakeAsync} from '@angular/core/testing';


@Injectable()
export class StorageService {

  constructor() { }


  private toDoList: ToDoItem[];


  public getNextId():number {

      this.getToDoItem();

      if(this.toDoList.length > 0) {

        let index = _.max(this.toDoList, function (element) {
          return element.id;
        });
          return (index.id + 1);
      }
     return 1;
  }


  public getToDoItem(): ToDoItem[]{
    let data = localStorage.getItem("ToDoList");
      if(data){
        this.toDoList = JSON.parse(data);
        return this.toDoList;
      }
      else{
        this.toDoList = [];
        return [];
      }
    }

    public delete(id: number){
      if(this.toDoList.length > 0) {
        let item = _.find(this.toDoList, function (item) {
          return item.id == id;
        });

        let index = this.toDoList.findIndex(d => d.id == item.id);
        this.toDoList.splice(index,1);
        this.saveStorage();
      }
    }

    public insert(item: ToDoItem){
      this.getToDoItem();

      this.toDoList.push(item);

      this.saveStorage();
    }

    public update(item: ToDoItem): boolean{

       let index = this.toDoList.findIndex(d => d.id == item.id);

       if (index != -1) {
         this.toDoList[index] = item;
         this.saveStorage();
         return true;
       }

      return false;
    }

    public saveStorage(){
      localStorage.setItem("ToDoList", JSON.stringify(this.toDoList));
    }

    public deleteStorage(){
      localStorage.removeItem("ToDoList");
    }



}
