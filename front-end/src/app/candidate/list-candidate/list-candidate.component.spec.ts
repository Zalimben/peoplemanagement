import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidateComponent } from './list-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('ListCandidateComponent', () => {
  let component: ListCandidateComponent;
  let fixture: ComponentFixture<ListCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ ListCandidateComponent, HeaderComponent ],
      providers: [ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCandidateComponent);
    component = fixture.componentInstance;
    localStorage.setItem('statusCandidate', JSON.stringify('{"id":4,"name":"Interview Team eLumen"}'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
