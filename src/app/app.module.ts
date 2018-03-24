import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import {FormsModule, NgForm} from '@angular/forms';
import { InsertFormComponent } from './insert-form/insert-form.component';
import {StorageService} from './storage.service';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    InsertFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
