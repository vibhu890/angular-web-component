import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childangularelement } from './childangularelement';

describe('Childangularelement', () => {
  let component: Childangularelement;
  let fixture: ComponentFixture<Childangularelement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childangularelement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childangularelement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
