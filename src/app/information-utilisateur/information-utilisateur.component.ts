import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/model.utilisateur';
import {UtilisateursService} from "../../services/utilisateurs.service";


@Component({
  selector: 'app-information-utilisateur',
  templateUrl: './information-utilisateur.component.html',
  styleUrls: ['./information-utilisateur.component.css']
})
export class InformationUtilisateurComponent implements OnInit {

    infoUtilisateur: any;

   id:number = 0;

  constructor(public utilisateurService : UtilisateursService) { }

  
  ngOnInit() {
  }


    doGetOneUtilisateur(id: number) {
    this.utilisateurService.getUtilisateurByID(this.id)
      .subscribe(data => {
        this.infoUtilisateur = data;
      }, err => {
        console.log(err);
      });
  }
}
