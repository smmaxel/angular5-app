import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(itemsInCart: number) {
        this.subject.next(itemsInCart);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
