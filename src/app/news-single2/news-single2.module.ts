import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSingle2PageRoutingModule } from './news-single2-routing.module';

import { NewsSingle2Page } from './news-single2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSingle2PageRoutingModule
  ],
  declarations: [NewsSingle2Page]
})
export class NewsSingle2PageModule {}
