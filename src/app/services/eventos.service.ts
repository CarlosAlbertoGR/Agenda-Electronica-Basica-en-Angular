import { Injectable, PLATFORM_ID, Inject } from '@angular/core'; 
import { isPlatformBrowser } from '@angular/common';           
import { BehaviorSubject, Observable } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private _eventos = new BehaviorSubject<Evento[]>([]);
  public readonly eventos$: Observable<Evento[]> = this._eventos.asObservable();
  
  private STORAGE_KEY = 'eventos_app';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cargarEventos();
  }
  
  private cargarEventos(): void {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        this._eventos.next(JSON.parse(data));
      }
    }
  }

  private guardarEventos(eventos: Evento[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(eventos));
    }
  }

  agregarEvento(evento: Evento): void {
    const eventosActuales = this._eventos.getValue();
    const nuevoId = eventosActuales.length > 0 
                  ? Math.max(...eventosActuales.map(e => e.id)) + 1 
                  : 1;
    const nuevoEventoConId = { ...evento, id: nuevoId };
    const listaActualizada = [...eventosActuales, nuevoEventoConId];

    this._eventos.next(listaActualizada); 
    this.guardarEventos(listaActualizada);
  }

  eliminarEvento(id: number): void {
    const eventosActuales = this._eventos.getValue();
    const listaActualizada = eventosActuales.filter(e => e.id !== id);

    this._eventos.next(listaActualizada); 
    this.guardarEventos(listaActualizada);
  }

 actualizarEvento(eventoActualizado: Evento): void {
    const eventosActuales = this._eventos.getValue();
    const listaActualizada = eventosActuales.map(e => 
      e.id === eventoActualizado.id ? eventoActualizado : e
    );

    this._eventos.next(listaActualizada); 
    this.guardarEventos(listaActualizada);
}

  obtenerEventoPorId(id: number): Evento | undefined {
    return this._eventos.getValue().find(e => e.id === id);
  }
}
