import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from '../dashboard-menu/dashboard-menu.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatGridListModule,MatCardModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatPaginatorModule,MatSidenavModule,MatStepperModule,MatTabsModule,MatToolbarModule, MatProgressBarModule} from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { PageComponent } from '../page/page.component';
// import * as CanvasJSAngularChart from ';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [DashboardComponent,DashboardMenuComponent,DashboardHeaderComponent,PageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,MatListModule,MatMenuModule,MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule
  ]
})
export class DashboardModule { }

