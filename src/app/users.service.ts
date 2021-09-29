import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserWithAddress {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface EditUser {
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly client: HttpClient) {}

  getUsers(): Observable<UserWithAddress[]> {
    return this.client.get<UserWithAddress[]>(this.url);
  }

  addUser(newUser: UserWithAddress): Observable<{}> {
    console.log(`adding ${newUser}`);
    return this.client.post(this.url, newUser);
  }

  removeUser(id: number): Observable<{}> {
    console.log(`removing ${this.url}/${id}`);
    return this.client.delete(`${this.url}/${id}`);
  }

  editUser(id: number, changedUser: UserWithAddress): Observable<{}> {
    return this.client.put<{}>(`${this.url}/${id}`, changedUser);
  }
}
