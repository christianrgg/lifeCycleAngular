import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// 1. Se inicia implementando los ciclos de vida: en este caso son todos los de la linea siguiente.
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

  // 3. Se crea una propiedad para hacer un cambio en el template
  public isProductVisible:boolean = false;


  // 2. Despues implementar todas las interfaces creadas. Tambien un constructor este tambien es un ciclo de vida
  constructor() {
    console.log('constructor')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
