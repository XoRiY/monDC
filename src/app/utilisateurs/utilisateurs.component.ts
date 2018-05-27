import { Utilisateur } from "../../model/model.utilisateur";
import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {UtilisateursService} from "../../services/utilisateurs.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  pageUtilisateur: any;

  motCle: string = '';
  currentPage: number = 0;
  size: number = 10;
  pages: Array<number>;

  constructor(private http:Http, public utilisateurService: UtilisateursService, 
    public router:Router) {
  }

  ngOnInit() {

  }

  public doSearch() {
    this.utilisateurService.getUtilisateur(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageUtilisateur = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
  this.currentPage = i;
  this.doSearch();
  }
  
  onEditUtilisateur(idUtilisateur){
    this.router.navigate(['edit-utilisateur', idUtilisateur]); 
  }
  
   onDeleteUtilisateur(utilisateur:Utilisateur){
    this.utilisateurService.deleteUtilisateurByID(utilisateur.idUtilisateur).subscribe(data=>{
    this.pageUtilisateur.content.splice(
      this.pageUtilisateur.content.indexOf(utilisateur),1);
      
    },err=>{
    })
  }
}
