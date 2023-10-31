import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { GroupComponent } from './components/group/group.component';

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'group', component: GroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
