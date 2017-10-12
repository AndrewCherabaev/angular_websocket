import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class WebSocketService {

  constructor() {
    const socket = new WebSocket(environment.ws_url);
    socket.onopen = (event: Event) => {
      console.log("OnOpen", event);
    };
    socket.onclose = (event: CloseEvent) => {
      console.log("OnClose", event);
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения'); // например, "убит" процесс сервера
      }
      console.log('Код: ' + event.code + ' причина: ' + event.reason);
    };
    socket.onmessage = (event: MessageEvent) => {
      console.log("OnMessage", event);
    };
    socket.onerror = (event: ErrorEvent) => {
      console.log("OnError", event);
    };
  }

}
