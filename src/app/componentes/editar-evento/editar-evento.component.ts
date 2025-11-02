import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';
import { FormularioEventoComponent } from '../formulario-evento/formulario-evento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-evento',
  standalone: true,
  imports: [CommonModule, RouterModule, FormularioEventoComponent], 
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.less']
})
export class EditarEventoComponent implements OnInit {
  
  eventoParaEditar: Evento | undefined;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        const id = parseInt(idString, 10);
        
        this.eventoParaEditar = this.eventosService.obtenerEventoPorId(id);
        
        if (!this.eventoParaEditar) {
          alert('Evento no encontrado.');
          this.router.navigate(['/']); 
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  manejarActualizacion(eventoActualizado: Evento): void {
    this.eventosService.actualizarEvento(eventoActualizado);
    alert('Evento actualizado correctamente.');
    this.router.navigate(['/']); 
  }
}
