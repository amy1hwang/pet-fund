import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('/projects');
  }
  getProjects(){
    return this.projects;
  }
  getProjectById(projectId: string) {
    return this.angularFire.database.object('/projects/' + projectId);
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
      projectEntryInFirebase.update({genre: localUpdatedProject.genre,
                                    title: localUpdatedProject.title,
                                    description: localUpdatedProject.description,
                                    image: localUpdatedProject.image,
                                    funding: localUpdatedProject.funding,
                                    fundingcomplete: localUpdatedProject.fundingcomplete
                                    });
  }
  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
  // submitContribution(newFund: Project) {
  //   var projectEntryInFirebase = this.getProjectById(localFundedProject.$key);
  //   projectEntryInFirebase.update({funding: localFundedProject.funding,
  //                                 });
  // }
}
