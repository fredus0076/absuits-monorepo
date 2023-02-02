import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAdaptorComponent } from './store-adaptor.component';

describe('StoreAdaptorComponent', () => {
  let component: StoreAdaptorComponent;
  let fixture: ComponentFixture<StoreAdaptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAdaptorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAdaptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
