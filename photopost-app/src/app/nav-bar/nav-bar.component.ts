import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { faCircleUser, faMagnifyingGlass, faXmark, faCameraRetro, faListUl } from '@fortawesome/free-solid-svg-icons'
import { NavBarData } from '../models/data-models/nav-bar-data.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  faCircleUser = faCircleUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;
  faCameraRetro = faCameraRetro;
  faListUl = faListUl;

  searchValue: string;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  @Input() data: NavBarData; 
  @Output() logutClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (!this.data.userName) {
      this.data.userName = 'user_name';
      this.data.userId = 1;
    }
    
  }

  clearValue(): void {
    this.searchValue = '';
  }

  openProfileMenu(): void {
    this.trigger.openMenu();
  }

  logutClick(): void{
    this.logutClicked.emit(true);
  }
}