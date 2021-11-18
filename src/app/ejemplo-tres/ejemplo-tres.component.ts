import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {filter} from 'rxjs/operators';

/* utilizando last, para buscar el ultimo elemento

of(1, 2, 3, 4, 5)
.pipe(last())
.subscribe((v) =>console.log(`value: ${v}`));
*/
// usando filter para obtener segunda posición la primer posicion es 0
of(1,2,3)
.pipe(filter((x, index) => index === 1))
.subscribe(x => console.log(`value : ${x}`))

@Component({
  selector: 'app-ejemplo-tres',
  templateUrl: './ejemplo-tres.component.html',
  styleUrls: ['./ejemplo-tres.component.css']
})
export class EjemploTresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
