import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateFromComponent } from './client-create-from.component';

describe('ClientCreateFromComponent', () => {
  let component: ClientCreateFromComponent;
  let fixture: ComponentFixture<ClientCreateFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCreateFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
