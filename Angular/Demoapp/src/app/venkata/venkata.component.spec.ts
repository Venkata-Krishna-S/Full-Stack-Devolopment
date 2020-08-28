import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkataComponent } from './venkata.component';

describe('VenkataComponent', () => {
  let component: VenkataComponent;
  let fixture: ComponentFixture<VenkataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenkataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
