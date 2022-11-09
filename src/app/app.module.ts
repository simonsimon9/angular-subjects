import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectServiceService } from './subject/subject-service.service';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { BehaviorSubjectService } from './behavior-subject/behavior-subject.service';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ReplaySubjectServiceService } from './replay-subject/replay-subject-service.service';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { AsyncSubjectService } from './async-subject/async-subject.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SubscriberComponent,
    AsyncSubjectComponent,
  ],
  providers: [
    SubjectServiceService,
    BehaviorSubjectService,
    ReplaySubjectServiceService,
    AsyncSubjectService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
