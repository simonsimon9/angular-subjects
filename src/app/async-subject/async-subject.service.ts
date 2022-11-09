import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable()
export class AsyncSubjectService {
  data = new AsyncSubject<number>();

  //only the last value sent to subs when the execution complete
  constructor() {}
}
