import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsListItemComponent } from './analytics-list-item.component';

describe('AnalyticsListItemComponent', () => {
  let component: AnalyticsListItemComponent;
  let fixture: ComponentFixture<AnalyticsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
