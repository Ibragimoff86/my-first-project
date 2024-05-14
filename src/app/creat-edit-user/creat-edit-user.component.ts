import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../user-interface';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-creat-edit-user',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgIf,
  ],
  templateUrl: './creat-edit-user.component.html',
  styleUrl: './creat-edit-user.component.css',
})
export class CreatEditUserComponent {
  constructor(
    private readonly userService: UserService,
    @Inject(MAT_DIALOG_DATA) public readonly data: User,
    private readonly dialogRef: MatDialogRef<CreatEditUserComponent>
  ) {}

  public myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? new Date().getTime()),
    name: new FormControl(this.data?.name ?? null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._-]{3,16}$/),
    ]),
    username: new FormControl(this.data?.username ?? null, Validators.required),
    email: new FormControl(this.data?.email ?? null, [
      Validators.email,
      Validators.required,
    ]),
  });

  onSubmit() {
    this.dialogRef.close(this.myForm.value);
  }

  onNoclick() {
    this.dialogRef.close();
  }

  // createId(users: User[]){// утилита для создания id
  // return Math.max(...users.map((user) => user.id))+1

  // }
}
