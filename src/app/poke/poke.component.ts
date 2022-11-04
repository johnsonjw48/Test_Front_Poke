import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {
  allPoke!: any;
  constructor(private htpp: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.getPoke()
  }

  getPoke (): void {
    this.htpp.get<any>('http://localhost:3000/poke')
      .subscribe(value => this.allPoke = value.results)
  }

onClickPoke (name: string):void {
    this.router.navigate(['/', name])
}

}
