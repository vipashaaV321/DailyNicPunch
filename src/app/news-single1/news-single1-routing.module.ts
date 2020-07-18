import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSingle1Page } from './news-single1.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSingle1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSingle1PageRoutingModule {}
