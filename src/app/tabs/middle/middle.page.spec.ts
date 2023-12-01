import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiddlePage } from './middle.page';

describe('MiddlePage', () => {
  let component: MiddlePage;
  let fixture: ComponentFixture<MiddlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiddlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
