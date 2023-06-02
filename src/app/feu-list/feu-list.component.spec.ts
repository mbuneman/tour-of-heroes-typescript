import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuListComponent } from './feu-list.component';

describe('FeuListComponent', () => {
  let component: FeuListComponent;
  let fixture: ComponentFixture<FeuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
