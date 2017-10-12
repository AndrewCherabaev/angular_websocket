import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class WebSocketService {

  private _initialConnectionPromise: Promise<any>;

  constructor() {

    this._initialConnectionPromise = new Promise((_resolve, _reject) => {
      let resolve = () => {
        _resolve();
        resolve = () => {
        };
      };
      let reject = () => {
        _reject();
        reject = () => {
        };
      };
      const socket = new WebSocket(environment.ws_url);
      socket.onopen = (event: Event) => {
        console.info("OnOpen", event);
        resolve();
      };
      socket.onclose = (event: CloseEvent) => {
        console.error("OnClose", event);
        if (event.wasClean) {
          console.error('Соединение закрыто чисто');
        } else {
          console.error('Обрыв соединения'); // например, "убит" процесс сервера
        }
        console.error('Код: ' + event.code + ' причина: ' + event.reason);
        reject();
      };
      socket.onmessage = (event: MessageEvent) => {
        console.info("OnMessage", event);
      };
      socket.onerror = (event: ErrorEvent) => {
        console.error("OnError", event);
        reject();
      };
    });
  }

  public initialConnect(): Promise<any> {
    return this._initialConnectionPromise;
  }

}
