import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFogliComponent } from './lista-fogli.component';

describe('ListaFogliComponent', () => {
  let component: ListaFogliComponent;
  let fixture: ComponentFixture<ListaFogliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFogliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFogliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
