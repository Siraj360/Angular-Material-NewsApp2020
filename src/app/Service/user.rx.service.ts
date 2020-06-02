import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class UserRxService {
  private usersUrl = "https://randomuser.me/api/?nat=us&results=100";

  constructor(private http: Http) {}
  /**
   * Get all users
   */
  getUsers() {
    debugger;
    return this.http.get(this.usersUrl);
  }
}
