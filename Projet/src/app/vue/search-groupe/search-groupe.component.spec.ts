import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupeComponent } from './search-groupe.component';

describe('SearchGroupeComponent', () => {
  let component: SearchGroupeComponent;
  let fixture: ComponentFixture<SearchGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
