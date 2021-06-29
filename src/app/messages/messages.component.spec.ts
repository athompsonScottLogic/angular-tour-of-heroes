import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message title', () => {
    fixture.detectChanges();
    expect(h2.textContent).toContain("Messages");
  });

  it('should display a different message title', () => {
    h2.textContent = 'Oodles of Noodles';
    fixture.detectChanges();
    expect(h2.textContent).toContain('Oodles of Noodles');
  });
});
