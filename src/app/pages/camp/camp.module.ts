import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formulario y rectivos
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// formulario y rectivos


import { IonicModule } from '@ionic/angular';

import { CampPage } from './camp.page';

const routes: Routes = [
  {
    path: '',
    component: CampPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CampPage]
})
export class CampPageModule {}
