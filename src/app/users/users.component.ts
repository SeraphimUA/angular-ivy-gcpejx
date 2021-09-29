import { Component, OnInit } from '@angular/core';
import { UsersService, UserWithAddress, EditUser } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersFromJSON: UserWithAddress[];

  constructor(readonly usersService: UsersService) {
    this.usersFromJSON = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    var users$ = this.usersService.getUsers();

    users$.subscribe((result) => (this.usersFromJSON = result));
  }

  /* після видалення просимо оновлення на сервері */
  /* this.loadUsers() */

  removeUser(id: number) {
    this.usersService.removeUser(id).subscribe({
      next: () => {
        this.usersFromJSON = this.usersFromJSON.filter((u) => u.id !== id);
      },
      error: () => {
        console.log('remove failed');
      },
    });
  }

  editUser(id: number, newUserStats: EditUser): void {
    const changedUser = this.findUser(id);

    changedUser.name = newUserStats.name;
    changedUser.username = newUserStats.username;
    changedUser.email = newUserStats.email;
    changedUser.address.street = newUserStats.street;
    changedUser.address.suite = newUserStats.suite;
    changedUser.address.city = newUserStats.city;
    changedUser.address.zipcode = newUserStats.zipcode;

    this.usersService.editUser(id, changedUser).subscribe();
  }

  addUser(newUser: UserWithAddress): void {
    console.log(`UsersComponent ${newUser}`);
    this.usersService.addUser(newUser).subscribe(() => {
      // this.loadUsers();

      this.usersFromJSON = [newUser, ...this.usersFromJSON];
    });
  }

  private findUser(id: number): UserWithAddress | null {
    return this.usersFromJSON.find((t) => t.id === id);
  }
}
