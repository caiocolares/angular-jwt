import { Component, OnInit } from '@angular/core';

import {Notification} from '../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  notifications : Notification[] = [];
  notification : Notification = new Notification();

  showMessage: boolean = false;
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';

  displayDialog : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.notification = new Notification();
    this.displayDialog = true;
  }

  sendNotification(){
    this.displayDialog = false;

  }

}
