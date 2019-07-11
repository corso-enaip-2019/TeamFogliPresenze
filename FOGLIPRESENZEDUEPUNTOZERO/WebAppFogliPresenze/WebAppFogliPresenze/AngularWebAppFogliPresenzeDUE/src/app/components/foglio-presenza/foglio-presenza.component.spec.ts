import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglioPresenzaComponent } from './foglio-presenza.component';

describe('FoglioPresenzaComponent', () => {
  let component: FoglioPresenzaComponent;
  let fixture: ComponentFixture<FoglioPresenzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoglioPresenzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoglioPresenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
