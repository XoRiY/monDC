import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationUtilisateurComponent } from './information-utilisateur.component';

describe('InformationUtilisateurComponent', () => {
  let component: InformationUtilisateurComponent;
  let fixture: ComponentFixture<InformationUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
