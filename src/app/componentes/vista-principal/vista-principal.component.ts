import { Component } from '@angular/core';
import { FormularioEventoComponent } from '../formulario-evento/formulario-evento.component';
import { ListaEventosComponent } from '../lista-eventos/lista-eventos.component'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormularioEventoComponent, ListaEventosComponent],
template: `
    <div class="vista-principal-layout">
      <app-formulario-evento></app-formulario-evento>
      
      <app-lista-eventos></app-lista-eventos>
      
      <router-outlet></router-outlet> 
    </div>
  `,
  styles: [`
    .vista-principal-layout { 
      display: flex; 
      flex-direction: column; 
      gap: 30px; 
    }
  `]
})
export class VistaPrincipalComponent {}
