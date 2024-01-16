import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService, private enrutador: Router) { }

  onSubmit(){
    console.log(this.producto);
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.agregarProducto(this.producto).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.irListaProductos();
        },
        error: (error) => {console.error(error)}
      }
    );
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }
   

}
