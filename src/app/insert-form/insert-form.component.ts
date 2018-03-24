import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToDoItem} from '../../models/IToDoItem';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  @Output()
  newItem: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();


  constructor(private storage:StorageService) { }

  ngOnInit() {
  }

  send(inItem: NgForm){

    if(inItem.valid) {

      let id = this.storage.getNextId();

      let item: ToDoItem = {
        id: id,
        title: inItem.value.title,
        description: inItem.value.description,
        creationDate: new Date(),
        isCompleted: false
      };

      this.storage.insert(item);
      this.newItem.emit(item);
    }
    else{
      alert("Values not valid");
    }
  }

}
