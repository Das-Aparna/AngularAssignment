import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
})
export class AppComponent implements OnInit {
  title = 'usrInfo';
  myDate = new Date();

  constructor(
    @Inject(DOCUMENT) private document: any,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.document.querySelector('#date').textContent = this.datePipe.transform(
      this.myDate,
      'dd-MMMM-yy'
    );
  }
}
