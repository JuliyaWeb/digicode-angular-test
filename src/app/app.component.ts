import {Component, OnInit} from '@angular/core';
import {ITabInfo, TAB_ITEMS} from './shared/mocks/tab-items.mock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navLinks: ITabInfo[] = TAB_ITEMS;
  activeLinkIndex = -1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }}
