import { Component } from '@angular/core';
import { WebSocketService } from './shared/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socket: WebSocketService) {
    this.socket.initialConnect().then(() => {

    }).catch(() => {

    });
  }

}
