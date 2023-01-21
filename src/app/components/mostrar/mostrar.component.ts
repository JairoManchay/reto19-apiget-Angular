import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {

  // Instanciando al service para obtener los datos
  constructor(private userService: ServicesService){}

  // Ejecutar el metodo getUserAll del servicio al cargar el component
  listado = new Array();
  arraDatos: any[] = [];

  ngOnInit(): void {
    this.userService.metodoGet().subscribe({
      next:(userAll: string)=>{
        this.listado.push(userAll);
        this.arraDatos = [...this.listado[0]]
        console.log(this.listado)
      },
      error:(er)=>{console.error(er)},
      complete:()=>{console.info("Se completó la conexión")}
    })

  }

}
