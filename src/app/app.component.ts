import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from './app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public count$: Observable<number>;

    constructor(
        private store: Store<{ count: number }>
    ) {
        this.count$ = store.select('count');
    }

    public increment() {
        console.log('dispatch inc event');
        this.store.dispatch(increment());
    }

    public decrement() {
        console.log('dispatch dec event');
        this.store.dispatch(decrement());
    }

    public reset() {
        console.log('dispatch reset event');
        this.store.dispatch(reset());
    }
}
