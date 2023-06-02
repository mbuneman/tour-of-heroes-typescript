import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoudreListComponent } from './foudre-list.component';

describe('FoudreListComponent', () => {
  let component: FoudreListComponent;
  let fixture: ComponentFixture<FoudreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoudreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoudreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
