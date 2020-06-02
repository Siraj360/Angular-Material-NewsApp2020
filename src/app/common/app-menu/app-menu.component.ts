import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
title = "Welcome to an Angular 9 - News App";
  constructor(
    private globalState: GlobalState,
  ) {
    this.globalState.subscribe("Header.title", (title) => {
      this.title = title;
    });
  }

  ngOnInit(): void {}
}
