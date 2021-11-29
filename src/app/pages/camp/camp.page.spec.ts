import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampPage } from './camp.page';

describe('CampPage', () => {
  let component: CampPage;
  let fixture: ComponentFixture<CampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
