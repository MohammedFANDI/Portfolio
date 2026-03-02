import { Observable } from 'rxjs';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCount } from '../../store/counter/counter.selectors';
import {
  decrement,
  increment,
  reset,
} from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counterService = inject(CounterService);

  store = inject(Store);

  myCount!: Observable<number>; //mais à condition d'ajouter pipe async au variable obsrvable dans html comme ca | async

  ngOnInit() {
    this.myCount = this.store.select(selectCount);
  }

  // myCount!: number;

  // ngOnInit() {
  //   this.store.select(selectCount).subscribe((res) => {
  //     this.myCount = res;
  //   });
  // }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
