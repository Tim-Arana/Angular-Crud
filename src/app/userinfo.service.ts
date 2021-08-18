import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Userinfo } from "./userinfo";

@Injectable({
    providedIn: 'root'
  })
  export class UserinfoService {
   
    private dbPath = '/userinfo';
   
    userinfoRef: AngularFireList<Userinfo> = null;
   
    constructor(private db: AngularFireDatabase) {
      this.userinfoRef = db.list(this.dbPath);
    }
   
    createCustomer(userinfo: Userinfo): void {
      this.userinfoRef.push(userinfo);
    }
   
    updateCustomer(key: string, value: any): Promise<void> {
      return this.userinfoRef.update(key, value);
    }
   
    deleteCustomer(key: string): Promise<void> {
      return this.userinfoRef.remove(key);
    }
   
    getCustomersList(): AngularFireList<Userinfo> {
      return this.userinfoRef;
    }
   
    deleteAll(): Promise<void> {
      return this.userinfoRef.remove();
    }
  }