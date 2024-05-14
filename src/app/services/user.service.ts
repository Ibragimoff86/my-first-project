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
    this.usersSubject$.subscribe(users => localStorage.setItem('users', JSON.stringify(users)));
  }

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject$.asObservable();
  // private _users: User[] = [];

  deleteUser(id: number) {
    this.usersSubject$.next(this.usersSubject$.value.filter((user) => user.id !== id))   

  };

  addUserCard(newUser: User) :void {
    
      this.usersSubject$.next([...this.usersSubject$.value, newUser]) 
     // ))
  };

  editUser(editableUser: User){
    this.usersSubject$.next(this.usersSubject$.value.map( user => {
      if(user.id === editableUser.id) {
        return editableUser;
      }
      return user;
    })) 
    
  }
  


setUsers(users: User[]) {
 this.usersSubject$.next(users)
}
 getUser(id:number): User | null {
    return this.usersSubject$.value.find((user) => user.id === id) ?? null
 }


// createId(users: User[]){// утилита для создания id 
//   return Math.max(...this.usersSubject$.value.map((user) => user.id))+1
// }
  
}

