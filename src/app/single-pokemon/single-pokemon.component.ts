import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
  name:string = <string>this.route.snapshot.paramMap.get('name');
  singlePoke: any;

  constructor(private route: ActivatedRoute,
              private htpp: HttpClient) { }

  ngOnInit(): void {
    this.getSinglePoke();
  }

  getSinglePoke (): void {
    const url = 'http://localhost:3000/poke/' + this.name
    this.htpp.get(url)
      .subscribe(value => {
        console.log(value)
        this.singlePoke = value
      })
  }

}
