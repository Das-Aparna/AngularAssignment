import { DOCUMENT, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

export interface Icompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: Icompany[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usrData: IUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.usrDetails();
  }

  usrDetails() {
    this.getUsrDetails().subscribe(
      (data) => {
        data.forEach((ele) => {
          this.usrData.push(ele);
        });
      },
      (error) => {
        console.log(`Data is not fetched from API due to error ${error}`);
      }
    );
  }

  getUsrDetails(): Observable<IUser[]> {
    const api = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<IUser[]>(api);
  }
}
