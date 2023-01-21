import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    MostrarComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MostrarComponent,
    AsideComponent
  ]
})
export class ComponentsModule { }
