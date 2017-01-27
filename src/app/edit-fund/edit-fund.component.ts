import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-fund',
  templateUrl: './edit-fund.component.html',
  styleUrls: ['./edit-fund.component.css'],
  providers: [ProjectService]
})
export class EditFundComponent implements OnInit {
  @Input() projectToDisplay;
    constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  // submitContribution(funding: number) {
  //   var newFund: Project = new Project(funding);
  //   this.projectService.addProject(newFund);
  // }
}
