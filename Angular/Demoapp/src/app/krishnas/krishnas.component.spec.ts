import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnasComponent } from './krishnas.component';

describe('KrishnasComponent', () => {
  let component: KrishnasComponent;
  let fixture: ComponentFixture<KrishnasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrishnasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
