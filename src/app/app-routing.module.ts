import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';



const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }



/*

const routes: Routes = [

  { path: 'heroes', component: HeroesComponent }

];



A typical Angular Route has two properties:



path: a string that matches the URL in the browser address bar.

component: the component that the router should create when navigating to this route.

This tells the router to match that URL to path: 'heroes' and

display the HeroesComponent when the URL is something like localhost:4200/heroes.*/