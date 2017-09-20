import { Component, OnInit } from '@angular/core';

import { Notification} from '../models/notification.model';
import { NotificationService } from '../services/notification.service';

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

  constructor(private service : NotificationService) { }

  ngOnInit() {
    this.service.list()
      .subscribe(list => this.notifications = list);

  }

  add(){
    this.notification = new Notification();
    this.displayDialog = true;
  }

  sendNotification(){

    this.service.sendNotification(this.notification)
            .subscribe(resp => {console.log(resp);
                                alert('Mensagem enviada com sucesso!')
                                this.displayDialog = false;},
                        error=> {alert('Falha ao enviar a mensagem!'); 
                                this.displayDialog = false;
                                console.log(error);})

  }

}
