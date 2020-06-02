import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
// ['deeppurple-amber', 'indigo-pink', 'pink-bluegrey', 'purple-green']
selectedIndex: number = 3;
themeList =[
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ffc107",
    "headingColor": "#673ab7",
    "text": "Deep Purple & Amber",
    "value": "deeppurple-amber"
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ff4081",
    "headingColor": "#3f51b5",
    "text": "Indigo & Pink",
    "value": "indigo-pink"
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#e91e63",
    "text": "Pink & Blue Grey",
    "value": "pink-bluegrey"
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#4caf50",
    "headingColor": "#9c27b0",
    "text": "Purple & Green",
    "value": "purple-green"
  }
]


  constructor() { }

  changeTheme(themeValue, index)
  {
    this,this.selectedIndex = index;
    let _themeLink = document.getElementById('theme-link');
    let _href = "./assets/theme/"+ themeValue + ".css";
    _themeLink.setAttribute("href", _href)
  }

  ngOnInit(): void {
  }

}
