import { TestBed } from '@angular/core/testing';

import { CourseDataServiceService } from './course-data-service.service';

describe('CourseDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseDataServiceService = TestBed.get(CourseDataServiceService);
    expect(service).toBeTruthy();
  });
});
