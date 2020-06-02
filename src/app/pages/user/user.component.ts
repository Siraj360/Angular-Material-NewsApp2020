import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GlobalState } from "../../global.state";
import { HttpClient } from '@angular/common/http';
// import { User } from "../../models/user";
// import { UserRxService } from '../../Service/user.rx.service';

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ['./user.component.scss']

})
export class UserComponent {
  public title: String = "Users Profiles";
  users: any;
  pageUsers: any[] = [];
  url: string = 'https://randomuser.me/api/?nat=us&results=1000';

  public totalItems: number = 50;
  public currentPage: number = 1;
  public smallnumPages: number = 0;
  public itemsPerPage: number = 10;
  public pageText: string = 'From 1 to 10 of 1000';

  constructor(
    private globalState: GlobalState,
    private http: HttpClient
  ) {
    this.globalState.notifyDataChanged("Header.title", this.title);
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);

    this.pageUsers = this.users.results.slice(
      event.itemsPerPage * (event.page - 1),
      event.itemsPerPage * event.page
    );

    this.pageText =
      'From ' +
      (event.itemsPerPage * (event.page - 1) + 1) +
      ' to ' +
      event.itemsPerPage * event.page +
      ' of ' +
      this.users.results.length;
    }

    getData() {
      this.http.get(this.url).subscribe((data) => {
        this.users = data;
        this.pageUsers = this.users.results.slice(0, this.itemsPerPage);
        this.totalItems = this.users.results.length;
        this.currentPage = 1;
        this.pageText =
          'From 1 to ' + this.itemsPerPage + ' of ' + this.users.results.length;
      });
    }
  ngOnInit() {
    this.getData();
  }
}
