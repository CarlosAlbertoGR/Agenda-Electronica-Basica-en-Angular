import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { EventoItemComponent } from '../evento-item/evento-item.component';

@Component({
  selector: 'app-lista-eventos',
  standalone: true,
  imports: [CommonModule, EventoItemComponent], 
  templateUrl: './lista-eventos.html',
  styleUrls: ['./lista-eventos.less']
})
export class ListaEventosComponent implements OnInit {

  eventos$: Observable<Evento[]> = new Observable<Evento[]>(); 

  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    this.eventos$ = this.eventosService.eventos$;
  }

}

