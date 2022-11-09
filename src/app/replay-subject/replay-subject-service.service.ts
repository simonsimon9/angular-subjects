import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ReplaySubjectServiceService {
  data = new ReplaySubject<number>(2); //store last 2
  constructor() {}
}
