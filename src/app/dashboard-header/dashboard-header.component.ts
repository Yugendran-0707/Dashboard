import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cf-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  username: string;

  constructor() { }

  ngOnInit() {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  fnlogout(){
  }
}
