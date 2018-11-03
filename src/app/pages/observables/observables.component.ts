import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from '../../../../node_modules/rxjs';
import { retry, map, filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    this.subscription = this.regresarObservable().subscribe(
        numero => {console.log("SubTarea", numero)},
        error  => {console.log("La tarea ha sido errónea" + error)},
        () => {console.log("La tarea ha termino con normalidad")}
      );

  }


  regresarObservable(): Observable<any>{
    return new Observable( (observable : Subscriber<any>) => {
        let contador = 0;
        setInterval( () => {
          contador ++;

          const salida = {
            valor:contador
          };

          observable.next(salida);
        },1000);
    }).pipe(
      map( resp => resp.valor ),
      filter((valor, index) =>{
        if( (valor%2) === 1 ){
          return true;
        }else{
          return false;
        }
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
