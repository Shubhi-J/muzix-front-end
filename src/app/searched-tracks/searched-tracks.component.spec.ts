import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedTracksComponent } from './searched-tracks.component';

describe('SearchedTracksComponent', () => {
  let component: SearchedTracksComponent;
  let fixture: ComponentFixture<SearchedTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
