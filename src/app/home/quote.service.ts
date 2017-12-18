import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

const endpoint = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.http.get(endpoint.quote(context), { cache: true })
      .pipe(
        map((res: Response) => res.json()),
        map(body => body.value),
        catchError(() => Observable.of('Error, could not load joke :-('))
      );
  }

}
