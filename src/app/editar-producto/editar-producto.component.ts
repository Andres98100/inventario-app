import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(private productoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoId(this.id).subscribe(
      {
        next: (data) =>
          this.producto = data,
        error: (error: any) => console.log(error)
      }
    );
  }

  onSubmit() {
    this.guardarProducto();

  }

  guardarProducto() {
    this.productoServicio.actualizarProducto(this.id, this.producto).subscribe(
      {
        next: (data) => this.irProductoLista(),
        error: (error: any) => console.log(error)
      }
    );
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos']);
  }
}
