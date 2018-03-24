import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToDoItem} from '../../models/IToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input()
  toDoList: ToDoItem[];

  @Output()
  itemDeleted: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();



  constructor() { }

  ngOnInit() {
  }

  updateStatus(item: ToDoItem){
    this.itemDeleted.emit(item);
  }

}
