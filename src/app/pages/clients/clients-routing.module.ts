import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { clientsPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    component: clientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class clientsPageRoutingModule {}
