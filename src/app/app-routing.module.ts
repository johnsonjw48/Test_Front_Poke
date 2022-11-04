import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {PokeComponent} from "./poke/poke.component";
import {SinglePokemonComponent} from "./single-pokemon/single-pokemon.component";


const routes: Routes = [
  { path: '', component: PokeComponent },
  { path: ':name', component: SinglePokemonComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
