import {Component, OnInit} from '@angular/core';
import {Adresse} from '../../model/model.adresse';
import {AdresseService} from "../../services/adresse.service";
import { Utilisateur } from "../../model/model.utilisateur";

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  mode: number = 1;
  adresse: Adresse = new Adresse();
  utilisateur:Utilisateur;
  constructor(public adresseService: AdresseService) {}

  ngOnInit() {

  }

  saveContact() {

    this.adresseService.saveAdresse(this.adresse)
      .subscribe(data => {
        this.adresse = data;
        this.mode = 2;
      },
      err => console.log(err));
  }
}
