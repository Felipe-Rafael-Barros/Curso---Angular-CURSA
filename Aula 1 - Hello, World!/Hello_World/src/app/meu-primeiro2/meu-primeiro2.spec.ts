import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro2 } from './meu-primeiro2';

describe('MeuPrimeiro2', () => {
  let component: MeuPrimeiro2;
  let fixture: ComponentFixture<MeuPrimeiro2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuPrimeiro2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiro2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
