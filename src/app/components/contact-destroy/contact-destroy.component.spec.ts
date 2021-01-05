import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDestroyComponent } from './contact-destroy.component';

describe('ContactDestroyComponent', () => {
  let component: ContactDestroyComponent;
  let fixture: ComponentFixture<ContactDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
