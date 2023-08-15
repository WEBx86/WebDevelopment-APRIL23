import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDDemoComponent } from './crud-demo.component';

describe('CRUDDemoComponent', () => {
  let component: CRUDDemoComponent;
  let fixture: ComponentFixture<CRUDDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
