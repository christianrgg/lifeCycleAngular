import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements  OnInit, OnChanges, OnDestroy{
  // 4. Implementar un input para que se active el onchanges
  @Input()
  public price:number = 0;
  // 10 Crear una propiedad que almacenará la suscripción
  public interval$?: Subscription;

  // 5. Hacer el resto de implementaciones
  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit');

    // 9. Crear una suscripción que emita valores infinitos
    // 11. Iniciar la suscripcion
    this.interval$ = interval(1000).subscribe(value => console.log(`Tiks: ${value}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo: ngOnChanges');
    console.log({changes})
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy')
    // 12. Destruir la suscripción
    this.interval$?.unsubscribe();
  }

}
