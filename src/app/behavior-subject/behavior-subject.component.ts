import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from './behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  template:
    '<h4>Behavior Subject ============</h4><p>{{data}}</p> <button (click)="changeBehavior()">change Behavior</button>',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  data: number;
  constructor(private behaviorSubjectService: BehaviorSubjectService) {}

  ngOnInit() {
    this.behaviorSubjectService.setData(2);
    this.behaviorSubjectService.data.subscribe((e) => (this.data = e));
  }

  changeBehavior() {
    this.behaviorSubjectService.setData(Math.random());
  }
}
