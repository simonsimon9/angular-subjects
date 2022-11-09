import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectServiceService {
  data = new Subject<number>();
  setData(value: number) {
    this.data.next(value);
  }
  constructor() {}

  subjectObservable() {
    return this.data.asObservable();
  }
}
