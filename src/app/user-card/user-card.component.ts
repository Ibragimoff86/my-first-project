import { Component, EventEmitter,Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Input } from '@angular/core';
import { User } from '../user-interface';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule,MatCardModule,MatIconButton],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  
})
export class UserCardComponent  {

constructor(){}

@Input ({required:true}) user!: User

@Output() deleteUser = new EventEmitter<number>();
 
@Output() editUser = new EventEmitter<number>();
  
  

onDeleteUser(id: number) {
  this.deleteUser.emit(id)
}
editUserCard(id: number){
this.editUser.emit(id)
  }


  

 

}