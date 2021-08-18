import {Injectable, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Data} from '../models/data';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  // firebase with json
  private  API_URL = 'https://jsonplaceholder.typicode.com/users';

  dataChange: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Data[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  // crud for table
  getAllIssues(): void {
    this.httpClient.get<Data[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  addIssue (data: Data): void {
    this.dialogData = data;
  }

  updateIssue (data: Data): void {
    this.dialogData = data;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
  // fetch
  // fetchdata(){
  //   this.http
  //   .get<data[]>('https://assessment-61abf-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
  //   .pipe(map(data => {
  //     return {...data, data:}
  //   }))
  // }

  // ADD, POST METHOD
  addItem(data:Data): void {
    this.httpClient.post(this.API_URL, data).subscribe(data => {
      this.dialogData = data;
      });
   }

   // UPDATE, PUT METHOD
   updateItem(data:Data): void {
    this.httpClient.put(this.API_URL, ViewChild(data.email)).subscribe(data => {
        this.dialogData = data;
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
      }
    );
  }
}


