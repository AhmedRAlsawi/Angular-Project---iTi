import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithoutDiscComponent } from './products-without-disc.component';

describe('ProductsWithoutDiscComponent', () => {
  let component: ProductsWithoutDiscComponent;
  let fixture: ComponentFixture<ProductsWithoutDiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithoutDiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithoutDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
