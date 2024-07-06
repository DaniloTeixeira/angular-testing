import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Product } from '../../../types/product.inteface';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the card content', () => {
    const product: Product = {
      id: 1,
      title: 'Iphone',
      description: 'smartphone Apple',
      image: 'src/assets/images/iphone.png',
      price: '1000',
      category: 'smartphone',
    };

    component.product = product;
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('h2')).nativeElement;
    const description = fixture.debugElement.query(By.css('p')).nativeElement;
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    const price = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.textContent).toContain(product.title);
    expect(description.textContent).toContain(product.description);
    expect(image.src).toContain(product.image);
    expect(price.textContent).toContain(product.price);
  });

  it('should show edit and delete button if isManageable is true', () => {
    component.isManageable = true;
    fixture.detectChanges();

    const buttonsContainer = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;

    expect(buttonsContainer).toBeTruthy();
  });

  it('should hide edit and delete button if isMabageable is false', () => {
    component.isManageable = false;
    fixture.detectChanges();

    const buttonsContainer = fixture.debugElement.query(By.css('span'));

    expect(buttonsContainer).toBeFalsy();
  });
});
