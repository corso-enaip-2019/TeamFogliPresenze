import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaFoglio } from './tabella-foglio.component';

describe('TabellaFoglioComponent', () => {
  let component: TabellaFoglio;
  let fixture: ComponentFixture<TabellaFoglio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaFoglio ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaFoglio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
