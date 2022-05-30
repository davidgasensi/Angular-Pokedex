import { Component, OnInit } from '@angular/core';
import { PokedexapiService } from '../services/pokedexapi.service';
import swal from'sweetalert2';
@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokemon:any = ''
  public randomizePokemon:String = Math.floor(Math.random() * 806 + 1).toString()
  public pokemonID:number = 1;
  classicMode: boolean = true;
  searchedKeyword: string;

  constructor(private _http:PokedexapiService) { }

  ngOnInit(): void {
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data;

        },
        error => {
          this.pokemon = null;

        }
      )
  }


  nextPokemon() {
    this.pokemonID ++;
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data;


        },
        error => {
          this.pokemon = null;

        }
      )
  }

  previousPokemon() {
    this.pokemonID --;
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data;

        },
        error => {
          this.pokemon = null;

        }
      )
  }

  randomPokemon() {
    this.pokemonID = Math.floor(Math.random() * 806 + 1);
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data;
        },
        error => {
          this.pokemon = null;
        }
      )
  }



  searchPokemon(pokemon1:string){
    this._http.getPokemonByName(pokemon1.toLocaleLowerCase())
      .subscribe(
        data => {
          this.pokemon = data;
          this.pokemonID = this.pokemon.id;

        },
        error => {
          this.pokemon = null;

          this.showError();
        }
      )



  }
  showError() {
      swal.fire({
        icon: 'error',
        title: 'Pokemon not found',
      })

  }

}
