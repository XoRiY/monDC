import {Utilisateur} from "../../model/model.utilisateur";
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../services/utilisateurs.service";

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent implements OnInit {

  mode: number = 1;

  public utilisateur: Utilisateur = new Utilisateur();

  idUtilisateur: number;

  constructor(public activatedRout: ActivatedRoute, public utilisateurService: UtilisateursService, public router:Router) {

    this.idUtilisateur = activatedRout.snapshot.params['idUtilisateur'];

  }

  ngOnInit() {
    this.utilisateurService.getUtilisateurByID(this.idUtilisateur).subscribe(data => {
      console.log(data)
      this.utilisateur = data;
    }), err => {
      console.log(err)
    }
    

  }

  updateUtilisateur() { 
    this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(data=>{
      console.log(data)
      alert('Mise a jour effectuée');
      this.utilisateur=data;
      this.mode = 2;
    },err=>{
      console.log(err); 
      alert("Problème : " );
    })

  }
  
  

}
