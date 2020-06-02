import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'about',
  templateUrl: './about.html',
})
export class AboutComponent {
public title:String = "About this application"
public imgurl :string ="http://www.siraj360.com/QuickStart/assets/img/qs-about.png"
  constructor(
      private globalState: GlobalState
  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }



}
