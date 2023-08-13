import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatogriesComponent } from './page-catogries.component';

describe('PageCatogriesComponent', () => {
  let component: PageCatogriesComponent;
  let fixture: ComponentFixture<PageCatogriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCatogriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCatogriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
