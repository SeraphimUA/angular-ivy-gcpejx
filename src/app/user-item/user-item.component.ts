import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserWithAddress, EditUser } from '../users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: UserWithAddress;

  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter<EditUser>();

  editMode = false;

  editItem() {
    let userToEdit: EditUser = {
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      street: this.user.address.street,
      suite: this.user.address.suite,
      city: this.user.address.city,
      zipcode: this.user.address.zipcode,
    };

    this.edit.emit(userToEdit);

    this.editMode = false;
  }

  startEditMode() {
    this.editMode = true;
  }

  removeItem() {
    this.remove.emit();
  }

  constructor() {}

  ngOnInit() {}
}
