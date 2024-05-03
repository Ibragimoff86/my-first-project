import { Injectable } from "@angular/core";
import { User } from "../user-interface";

@Injectable({
    providedIn: 'root'
})

export class LocalStorage { 

    setItemUsers(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    getItemUsers(key: string): any {
      try {
        const data = localStorage.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
        return null;
      } catch (error) {
        console.error('Ошибка парсинга данных', error);
        return null;
      }
    }
  }
  