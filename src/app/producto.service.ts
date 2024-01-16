import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "https://ancient-brick-production.up.railway.app/inventario-app/productos";

  constructor(private clienteHttp: HttpClient) { }

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto);
  }

  obtenerProductoId(id: number){
    return this.clienteHttp.get<Producto>(this.urlBase + "/" + id);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Object>{
    return this.clienteHttp.put(this.urlBase + "/" + id, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(this.urlBase + "/" + id);
  }
}
