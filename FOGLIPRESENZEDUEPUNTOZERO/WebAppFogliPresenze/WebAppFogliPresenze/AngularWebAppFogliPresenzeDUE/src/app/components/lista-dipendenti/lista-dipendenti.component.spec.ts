import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDipendentiComponent } from './lista-dipendenti.component';

describe('ListaDipendentiComponent', () => {
  let component: ListaDipendentiComponent;
  let fixture: ComponentFixture<ListaDipendentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDipendentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
