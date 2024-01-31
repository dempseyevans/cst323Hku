import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromptComponent } from './list-prompts.component';

describe('ListAlbumsComponent', () => {
  let component: ListPromptComponent;
  let fixture: ComponentFixture<ListPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
