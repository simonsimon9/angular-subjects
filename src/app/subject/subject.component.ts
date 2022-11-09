import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectServiceService } from './subject-service.service';

@Component({
  selector: 'app-subject',
  template:
    '<h4>subject=========</h4><p>{{data}}</p> <button (click)="sendData()">subject change</button>',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  //subject only emits values. upcoming.
  //behavior subject holds inital value and upcoming

  constructor(private subjectService: SubjectServiceService) {}
  //data: Observable<number>;
  data: number;
  ngOnInit() {
    this.subjectService.data.next(69); //changes subject's state

    this.subjectService.data.subscribe((e) => (this.data = e)); //doesn't get current value

    //this.data = this.subjectService.subjectObservable();
  }

  sendData() {
    this.subjectService.data.next(Math.random());
  }
}
