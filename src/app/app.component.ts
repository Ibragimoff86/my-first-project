import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,UserCardComponent , UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent   {
  

  
}
