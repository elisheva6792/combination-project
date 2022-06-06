import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationGridComponent } from './combination-grid.component';

describe('CombinationGridComponent', () => {
  let component: CombinationGridComponent;
  let fixture: ComponentFixture<CombinationGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
