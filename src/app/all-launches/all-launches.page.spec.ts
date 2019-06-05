import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaunchesPage } from './all-launches.page';

describe('AllLaunchesPage', () => {
  let component: AllLaunchesPage;
  let fixture: ComponentFixture<AllLaunchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLaunchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLaunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
