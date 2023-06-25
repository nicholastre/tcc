import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public saveObject(key: string, object: any): void {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString);
  }

  public getObject(key: string): any {
    const objectString = localStorage.getItem(key);
    if (objectString) {
      return JSON.parse(objectString);
    }
    return null;
  }

  public removeObject(key: string): void {
    localStorage.removeItem(key);
  }
}
