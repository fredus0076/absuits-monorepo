import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsbComponent } from './csb.component';

describe('CsbComponent', () => {
  let component: CsbComponent;
  let fixture: ComponentFixture<CsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
