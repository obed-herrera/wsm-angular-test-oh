import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceHighcpaComponent } from './device-highcpa.component';

describe('DeviceHighcpaComponent', () => {
  let component: DeviceHighcpaComponent;
  let fixture: ComponentFixture<DeviceHighcpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceHighcpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceHighcpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
