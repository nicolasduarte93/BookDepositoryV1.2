import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecbooksComponent } from './recbooks.component';

describe('RecbooksComponent', () => {
  let component: RecbooksComponent;
  let fixture: ComponentFixture<RecbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
