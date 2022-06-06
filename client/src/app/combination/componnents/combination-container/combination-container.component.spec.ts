import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationContainerComponent } from './combination-container.component';

describe('CombinationContainerComponent', () => {
  let component: CombinationContainerComponent;
  let fixture: ComponentFixture<CombinationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
