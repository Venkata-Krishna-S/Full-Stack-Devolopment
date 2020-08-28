import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandhupatlaComponent } from './sandhupatla.component';

describe('SandhupatlaComponent', () => {
  let component: SandhupatlaComponent;
  let fixture: ComponentFixture<SandhupatlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandhupatlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandhupatlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
