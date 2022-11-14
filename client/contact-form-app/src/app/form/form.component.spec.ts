import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { AppService } from '../app.service'
import { ReactiveFormsModule } from '@angular/forms';
import { MockService } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('FormComponent', () => {

  let app: FormComponent
  let fixture: ComponentFixture<FormComponent>;
  let mockAppService: AppService
  let mockRouter: Router;
  beforeEach(async () => {
    mockAppService = MockService(AppService);
    mockRouter = MockService(Router)
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        FormComponent
      ],
      providers: [
        { provide: AppService, useValue: mockAppService },
        { provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FormComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.govuk-fieldset__heading')?.textContent).toContain('How would you prefer to be contacted?');
  });
});
