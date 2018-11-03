import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from '../../../../node_modules/rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrubs',
  templateUrl: './breadcrubs.component.html',
  styles: []
})

export class BreadcrubsComponent implements OnInit {
  public titulo: string;

  constructor(private router: Router,
              private title: Title) {
    this.getData().subscribe( event => {
        this.titulo = event.titulo;
        this.title.setTitle(this.titulo);
      });

  }

  ngOnInit() {
  }

  getData() {
     return this.router.events.pipe(

       filter( (evento) => evento instanceof ActivationEnd),
       filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
       map (   (evento: ActivationEnd) => evento.snapshot.data)

    );
  }

}
