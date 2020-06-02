import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: any = {};
  @Input() iseven: boolean = true;
  @Input() profile: number = 120;
  constructor() {}

  capitalize(txt: string) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }


  ngOnInit() {
  }

}
