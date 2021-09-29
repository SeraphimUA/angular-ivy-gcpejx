import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User, UserWithAddress } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  formData = {
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  };

  @Output() add = new EventEmitter<UserWithAddress>();

  addMode = false;

  AddOn() {
    this.addMode = !this.addMode;
    console.log(this.addMode);
  }

  addUser() {
    const user: UserWithAddress = {
      id: Math.round(Math.random() * 100000),
      name: this.formData.name,
      username: this.formData.username,
      email: this.formData.email,
      address: {
        street: this.formData.street,
        suite: this.formData.suite,
        city: this.formData.city,
        zipcode: this.formData.zipcode,
      },
    };

    console.log(user);

    this.addMode = !this.addMode;
    console.log(this.addMode);

    this.add.emit(user);
  }

  constructor() {}

  ngOnInit() {}
}
