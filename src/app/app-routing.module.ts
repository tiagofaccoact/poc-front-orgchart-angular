import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { GroupComponent } from './components/group/group.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'group', component: GroupComponent },
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
