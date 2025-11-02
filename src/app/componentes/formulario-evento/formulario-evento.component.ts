
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.less']
})
export class FormularioEventoComponent implements OnInit {

  @Input() eventoInicial?: Evento;
  
  @Output() eventoGuardado = new EventEmitter<Evento>();
  
  eventoForm!: FormGroup;
  categorias = ['Trabajo', 'Personal', 'Salud'];

  constructor(
    private fb: FormBuilder,
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    this.eventoForm = this.fb.group({
      id: [this.eventoInicial ? this.eventoInicial.id : null],
      completado: [this.eventoInicial ? this.eventoInicial.completado : false],

      titulo: ['', [Validators.required, Validators.minLength(5)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      categoria: ['Personal', Validators.required],
      descripcion: ['', Validators.required],
    });

    if (this.eventoInicial) {
      this.eventoForm.patchValue(this.eventoInicial);
    }
  }

  onSubmit(): void {
    if (this.eventoForm.valid) {
      const eventoFinal: Evento = this.eventoForm.value;

      if (this.eventoInicial) {
          this.eventoGuardado.emit(eventoFinal);
      
      } else {
          this.eventosService.agregarEvento(eventoFinal); 
          
          this.eventoForm.reset({
              categoria: 'Personal',
              completado: false
          });
      }
      
      console.log(`Evento ${this.eventoInicial ? 'actualizado' : 'guardado'} con éxito.`);
    } else {
      this.eventoForm.markAllAsTouched();
    }
  }

  get f() { return this.eventoForm.controls; }
}
