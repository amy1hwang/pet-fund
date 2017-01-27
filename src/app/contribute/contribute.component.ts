import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  providers: [ProjectService]

})
export class ContributeComponent {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService) { }
  name: string = '';
}
