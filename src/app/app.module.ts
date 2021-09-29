import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { UserItemComponent } from './user-item/user-item.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UsersComponent,
    ColorPickerComponent,
    UserItemComponent,
    AddUserComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
