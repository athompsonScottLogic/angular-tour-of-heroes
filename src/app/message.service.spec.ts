import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start empty', () => {
    expect(service.messages).toEqual([]);
  });

  it('should add a message', () => {
    service.add("test message");
    expect(service.messages).toEqual(["test message"]);
  });

  it('should add two messages', () => {
    service.add("test message");
    service.add("another test message");
    expect(service.messages).toEqual(["test message", "another test message"]);
  });

  it('should clear message list', () => {
    service.add("test message");
    service.clear();
    expect(service.messages).toEqual([]);
  });

  it('should display correct amount after clearing and re-adding', () => {
    service.add("test message");
    service.clear();
    service.add("another test message");
    expect(service.messages).toEqual(["another test message"]);
  });
});
