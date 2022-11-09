import { Component, OnInit } from '@angular/core';
import { AsyncSubjectService } from './async-subject.service';

@Component({
  selector: 'app-async-subject',
  template: '<p>{{data}}',
})
export class AsyncSubjectComponent implements OnInit {
  data: number;
  constructor(private asyncSubjectService: AsyncSubjectService) {}

  ngOnInit() {
    this.asyncSubjectService.data.next(12);
    this.asyncSubjectService.data.subscribe((e) => (this.data = e));
    this.asyncSubjectService.data.next(1);
    this.asyncSubjectService.data.next(2);
    this.asyncSubjectService.data.next(3); // last one will be sent to subs
    this.asyncSubjectService.data.complete();
  }
}
