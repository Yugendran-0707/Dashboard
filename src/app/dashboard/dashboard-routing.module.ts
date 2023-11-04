import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../page/page.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
 { path: '', component: DashboardComponent,
  children: [
    {
      path: '', component: PageComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
