import { Component, OnInit } from '@angular/core';
import { ReplaySubjectServiceService } from './replay-subject-service.service';

@Component({
  selector: 'app-replay-subject',
  template: '<h4>Replay Subject========</h4>{{data | json}}',
})
export class ReplaySubjectComponent implements OnInit {
  data: number[] = [];
  constructor(private RSubjectService: ReplaySubjectServiceService) {
    this.RSubjectService.data.next(1000);
    this.RSubjectService.data.next(100);
    this.RSubjectService.data.next(10);
    this.RSubjectService.data.subscribe((e) => this.data.push(e));
  }

  ngOnInit() {}
}
