import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string;
  @Input() progress: number;
  @Output() updateDate: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor(valor): boolean{
    if(this.progress==null){
      this.progress = 0 ;
    }
    if (this.progress+valor > 100) {
      this.progress = 100;
      return false;
    }
    if (this.progress + valor < 0) {
      this.progress = 0
      return false
    }

    this.progress += valor;
    this.updateDate.emit(this.progress);
    this.txtProgress.nativeElement.focus();
    return true;
  }

  verifyInput( newValue: number){

    if(newValue > 100){
      this.progress=100;
    }else
      if(newValue < 0 ){
        this.progress= 0;
      }else{
            this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;
    this.updateDate.emit(this.progress);

  }


}
