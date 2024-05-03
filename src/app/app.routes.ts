import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
    {
        path: 'user-list', component: UserListComponent
    },
    {
        path: 'user-card', component: UserCardComponent
    }
        
    
]
