import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';

const BaseUrl : string = ('https://jsonplaceholder.typicode.com/users')

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  constructor(private httpclient: HttpClient){

  }
  http = inject(HttpClient)
  getUsers(){
   return this.http.get<any>(BaseUrl)
    
    

  }
  
}

