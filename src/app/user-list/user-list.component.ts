import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { UserApiService } from '../services/user-api-service.service';

import { OnInit } from '@angular/core';
import { User } from '../user-interface';
import { Observable, map, pipe, take, takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatEditUserComponent } from '../creat-edit-user/creat-edit-user.component';
import { UserService } from '../services/user.service';
import { LocalStorage } from '../services/local-storage.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit, OnDestroy {
  public users$ = this.userService.users$;
  public destroy$ = new Subject<void>();

  constructor(
    private readonly userApiService: UserApiService,
    private readonly userService: UserService,
    private readonly cdr: ChangeDetectorRef,
    public readonly dialog: MatDialog,
    private readonly localStorage: LocalStorage
  ) {}

  ngOnInit(): void {
    const currentUsers = this.localStorage.getItemUsers('users');

    if (currentUsers) {
      this.userService.users$ = currentUsers;
    }
    if (!this.userService.users$) {
      this.userApiService
        .getUsers()
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: User[]) => {
          this.userService.setUsers(data)
        });

      //this.localStorage.setItemUsers('users', this.users$);
    }
    
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleDeletUser(id: number) {
    this.userService.deleteUser(id);
    
    //this.cdr.markForCheck();

  }

  openDialog(id?: number): void {
    let dialogConfig = new MatDialogConfig<User | undefined>();
    if (id) {
      dialogConfig.data = this.userService.getUser(id)
    dialogConfig.height = '70%';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(CreatEditUserComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (!!data) {
          if (id) {
            this.userService.editUser(data);
          } else {
            this.userService.addUserCard(data);
          }
          this.userService.setUsers(data)
         // this.localStorage.setItemUsers('users', this.users);
         // this.cdr.markForCheck();
        }
      });
  }
  }
  }