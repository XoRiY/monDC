import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Adresse} from "../model/model.adresse";

@Injectable()
export class AdresseService {

  
  constructor(public http: Http) {

  }

  getAdresses(motCle: string, page:number, size:number) {
    console.log(motCle)
    return this.http.get("http://localhost:9070/chercherAdresses?mc="+motCle+"&size="+size+"&page="+page)
      .map(resp => resp.json());
  }

  saveAdresse( adresse:Adresse){
    console.log(adresse)
    return this.http.post("http://localhost:9070/adresses", adresse).map(resp=>resp.json());
  }

  getAdresseByUtilisateurID(idUtilisateur:number) {
    
    return this.http.get("http://localhost:9070/adresseUtilisateur?idUtilisateur="+idUtilisateur+"")
      .map(resp => resp.json());
  }


}
