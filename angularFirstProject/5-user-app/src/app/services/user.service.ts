import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Dylan',
    lastName: 'Murillo Rios',
    email: 'dylan@gmail.com',
    userName: 'dylan1',
    password: '12345'
  },
  {
    id: 2,
    name: 'Dylan2',
    lastName: 'Murillo Rios2',
    email: 'dylan@gmail.com2',
    userName: 'dylan2',
    password: '12345'
  },
  {
    id: 3,
    name: 'Dylan3',
    lastName: 'Murillo Rios3',
    email: 'dylan@gmail.com3',
    userName: 'dylan3',
    password: '12345'
  }]
  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users)
  }
}
