import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubjectService } from '../behavior-subject/behavior-subject.service';

@Component({
  selector: 'app-subscriber',
  template: '<h4>Behavior subject subscriber======</h4><p>{{data | async}}</p>',
})
export class SubscriberComponent implements OnInit {
  data: Observable<number>;
  constructor(private behaviorSubjectService: BehaviorSubjectService) {}

  ngOnInit() {
    this.data = this.behaviorSubjectService.getObservable();
  }
}
