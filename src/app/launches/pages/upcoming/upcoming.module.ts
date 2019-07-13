import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpcomingPage } from './upcoming.page';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CoreModule } from '../../../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: UpcomingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CoreModule,
    NgxJsonViewerModule
  ],
  declarations: [UpcomingPage]
})
export class UpcomingPageModule {}
