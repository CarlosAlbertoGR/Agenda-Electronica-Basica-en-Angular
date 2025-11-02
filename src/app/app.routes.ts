
import { Routes } from '@angular/router';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';
import { EditarEventoComponent } from './componentes/editar-evento/editar-evento.component'; 

export const routes: Routes = [
  { path: '', component: VistaPrincipalComponent }, 

  { path: 'editar/:id', component: EditarEventoComponent }, 

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
