import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoute }       from './user.route';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoute,
    PaginationModule.forRoot(),
  ],
  declarations: [
    UserComponent, UserCardComponent
  ]
})
export class UserModule {}
