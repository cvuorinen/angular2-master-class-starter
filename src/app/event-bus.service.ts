import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable()
export class EventBusService {
  public static APP_TITLE_CHANGE = 'APP_TITLE_CHANGE';

  private messages = new Subject<EventBusArgs>();

  constructor() { }

  emit(type: string, data: any) {
    this.messages.next({type, data});
  }

  observe(type): Observable<any> {
    return this.messages
        .filter(message => message.type === type)
        .map(message => message.data);
  }
}
