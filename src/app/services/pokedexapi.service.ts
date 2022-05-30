import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexapiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemonId:any) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+pokemonId)
  }

  getPokemonByName(pokemonName:any) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
  }
}
