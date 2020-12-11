import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojsRecordingComponent } from './videojs-recording.component';

describe('VideojsRecordingComponent', () => {
  let component: VideojsRecordingComponent;
  let fixture: ComponentFixture<VideojsRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojsRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojsRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
