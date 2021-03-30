import { TestBed } from '@angular/core/testing';

import { TodoserverService } from './todoserver.service';

describe('TodoserverService', () => {
  let service: TodoserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
