import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSingle1PageRoutingModule } from './news-single1-routing.module';

import { NewsSingle1Page } from './news-single1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSingle1PageRoutingModule
  ],
  declarations: [NewsSingle1Page]
})
export class NewsSingle1PageModule {}
