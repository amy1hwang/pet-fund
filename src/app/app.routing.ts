import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';
import { AdminComponent} from './admin/admin.component';
import { UserComponent} from './user/user.component';
import { ContributeComponent} from './contribute/contribute.component';


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
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
