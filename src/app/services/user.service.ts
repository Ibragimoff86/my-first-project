import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { Interface } from 'readline';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { __values } from 'tslib';
import { User } from '../user-interface';
import { LocalStorage } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})

export class UserService  {
  constructor(private readonly storage: LocalStorage) {
    
  }

  public users: User[] = [];
  // private _users: User[] = [];

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  
  };

  addUserCard(newUser: User) :void {
    
      this.users = [...this.users, newUser]
      localStorage.setItem('users', JSON.stringify(this.users))
  };

  editUser(editableUser: User){
    this.users = this.users.map( user => {
      if(user.id === editableUser.id) {
        return editableUser;
      }
      return user;
    })
    
  }
  
 

}

