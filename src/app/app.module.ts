import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { PokedexFormComponent } from './pokedex-form/pokedex-form.component';
import { StatComponent } from './stat/stat.component';
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const APP_ROUTES: Route[] = [
  { path: '', component: PokedexComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexScreenComponent,
    PokedexFormComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES, {useHash:true}),
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
