import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinHeaderComponent } from './min-header.component';

describe('MinHeaderComponent', () => {
  let component: MinHeaderComponent;
  let fixture: ComponentFixture<MinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
