import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithDiscComponent } from './products-with-disc.component';

describe('ProductsWithDiscComponent', () => {
  let component: ProductsWithDiscComponent;
  let fixture: ComponentFixture<ProductsWithDiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithDiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
