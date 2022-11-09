import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BehaviorSubjectService {
  data = new BehaviorSubject<number>(100);
  constructor() {}
  setData(value: number) {
    this.data.next(value);
  }

  getObservable() {
    return this.data.asObservable();
  }
}
