import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
      component: ProjectListComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'add-project',
      component: AddProjectComponent
  },
  {
    path: 'projects/:id',
      component: ProjectDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
