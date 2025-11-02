import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-evento-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.less']
})
export class EventoItemComponent {
  
  @Input() evento!: Evento; 

  constructor(
    private eventosService: EventosService
  ) { 

    console.log("EventoItemComponent CARGADO para:", this.evento?.titulo);
  }

  eliminarEvento(id: number): void {
    console.log("INTENTANDO ELIMINAR (desde EventoItemComponent):", id);
    this.eventosService.eliminarEvento(id); 
  }

  marcarCompletado(evento: Evento): void {
    console.log("INTENTANDO MARCAR (desde EventoItemComponent):", evento.id);
    const eventoActualizado: Evento = {
      ...evento,
      completado: !evento.completado
    };
    this.eventosService.actualizarEvento(eventoActualizado);
  }
}
