import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
