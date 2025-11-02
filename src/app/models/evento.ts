export interface Evento {
  id: number; 
  titulo: string; 
  fecha: string;
  hora: string; 
  categoria: 'Trabajo' | 'Personal' | 'Salud'; 
  descripcion: string;
  completado: boolean;
}
