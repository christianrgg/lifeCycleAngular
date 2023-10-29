import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements  OnInit, OnChanges, OnDestroy{
  // 4. Implementar un input para que se active el onchanges
  @Input()
  public price:number = 0;

  // 5. Hacer el resto de implementaciones
  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo: ngOnChanges');
    console.log({changes})
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy')
  }

}
