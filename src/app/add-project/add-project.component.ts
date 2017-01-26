import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent {
  projects: FirebaseListObservable<any[]>;


  constructor(private projectService: ProjectService) {
  }



  submitForm(genre: string, title: string, description: string, image: string, funding: number = 0, fundingcomplete: number)  {
    var newProject: Project = new Project(genre, title, description, image, funding, fundingcomplete);
    this.projectService.addProject(newProject);
 }

}
