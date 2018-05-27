import { AdresseService } from "../services/adresse.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

const appRoutes : Routes =  [
  {path: 'about', component:AboutComponent},
  {path: 'utilisateurs', component:UtilisateursComponent},
  {path: 'info-utilisateur', component: InformationUtilisateurComponent},
  {path: 'adresses', component: AdresseComponent},
  {path: 'edit-utilisateur/:idUtilisateur', component:EditUtilisateurComponent},
  {path: 'add-utilisateur', component:NewUtilisateurComponent},
  {path: '', redirectTo:'/about', pathMatch: 'full'},
]

import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {HttpModule} from "@angular/http";
import {UtilisateursService} from "../services/utilisateurs.service";
import {FormsModule} from "@angular/forms";
import { NewUtilisateurComponent } from './new-utilisateur/new-utilisateur.component';
import { AdresseComponent } from './adresse/adresse.component';
import { InformationUtilisateurComponent } from './information-utilisateur/information-utilisateur.component';
import { EditUtilisateurComponent } from './edit-utilisateur/edit-utilisateur.component';
/*les annotations en tyeScript s'appellent des déorateurs*/
@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    AboutComponent,
    NewUtilisateurComponent,
    AdresseComponent,
    InformationUtilisateurComponent,
    EditUtilisateurComponent
   ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule
  ],
  providers: [UtilisateursService, AdresseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
