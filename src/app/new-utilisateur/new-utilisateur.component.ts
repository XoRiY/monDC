import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../../model/model.utilisateur";
import { UtilisateursService } from "../../services/utilisateurs.service";

@Component({
  selector: 'app-new-utilisateur',
  templateUrl: './new-utilisateur.component.html',
  styleUrls: ['./new-utilisateur.component.css']
})
export class NewUtilisateurComponent implements OnInit {

  mode: number = 1;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(public utilisateurService: UtilisateursService) { }

  ngOnInit() {
  }
  saveUtilisateur() {
    this.utilisateurService.saveUtilisateur(this.utilisateur)
      .subscribe(data => {
        this.utilisateur = data;
        this.mode = 2;
      },
        err => console.log(err));
  }
}
