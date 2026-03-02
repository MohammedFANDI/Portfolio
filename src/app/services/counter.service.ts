import { computed, effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {



  // count = signal<number>(0);

  // dblCount = computed(() => this.count() * 2)

  // constructor() {
  //   effect(() => {
  //     console.log("one of the signsl is executed : ", this.count());
  //     localStorage.setItem("count", JSON.stringify(this.count()));
  //   })
  // }


  // increment() {
  //   this.count.update(value => value + 1 )
  //   // this.dblCount = this.count() * 2;
  // }

  // decrement() {
    // if (this.count() > 0) {
    //   //   this.count.update(value =>  value - 1 )
    //   //   // this.dblCount = this.count() * 2;
    // }
  // }

  // reset() {
  //   this.count.set(0);
  //   // this.dblCount = 0;
  // }



  // count = new BehaviorSubject<number>(0);

  // getCount() {
  //   return this.count.asObservable();
  // }

  // increment(valeur: number) {
  //   this.count.next(valeur + 1);
  // }

  // decrement(valeur: number) {
  //   this.count.next(valeur - 1);
  // }

  // reset() {
  //   this.count.next(0);
  // }



  count = new BehaviorSubject<number>(0);

  getCount() {
    return this.count.asObservable();
  }

  increment() {
    this.count.next(this.count.getValue() + 1);
  }

  decrement() {
    this.count.next(this.count.getValue() - 1);
  }

  reset() {
    this.count.next(0);
  }




}
