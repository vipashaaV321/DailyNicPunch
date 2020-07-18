import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSingle2Page } from './news-single2.page';

describe('NewsSingle2Page', () => {
  let component: NewsSingle2Page;
  let fixture: ComponentFixture<NewsSingle2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSingle2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSingle2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
