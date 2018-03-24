import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToDoItem} from '../../models/IToDoItem';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  listItem: ToDoItem;

  @Output()
  itemDeleted: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();

  btnStatus = "Set as DONE";


  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.btnStatusUpdate();
  }

  editStatus(){


    this.listItem.isCompleted = !this.listItem.isCompleted;
    this.btnStatusUpdate();

    this.storage.update(this.listItem)

    //this.statusChanged.emit(this.listItem);
  }

  deleteItem(){
    this.storage.delete(this.listItem.id);
    this.itemDeleted.emit(this.listItem);
  }

  private btnStatusUpdate(){
    if(this.listItem.isCompleted)
      this.btnStatus = "Set as TODO";
    else
      this.btnStatus = "Set as DONE";
  }

}
