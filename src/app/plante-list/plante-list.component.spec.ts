import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteListComponent } from './plante-list.component';

describe('PlanteListComponent', () => {
  let component: PlanteListComponent;
  let fixture: ComponentFixture<PlanteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
