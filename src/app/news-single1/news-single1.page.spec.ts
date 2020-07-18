import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSingle1Page } from './news-single1.page';

describe('NewsSingle1Page', () => {
  let component: NewsSingle1Page;
  let fixture: ComponentFixture<NewsSingle1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSingle1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSingle1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
