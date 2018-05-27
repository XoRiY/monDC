import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Utilisateur} from "../model/model.utilisateur";

@Injectable()
export class UtilisateursService {

  constructor(public http: Http) {

  }

  getUtilisateur(motCle: string, page:number, size:number) {
    
    return this.http.get("http://localhost:9070/chercherUtilisateurs?mc="+motCle+"&size="+size+"&page="+page)
      .map(resp => resp.json());
  }

  saveUtilisateur( utilisateur:Utilisateur){

    return this.http.post("http://localhost:9070/utilisateurs", utilisateur).map(resp=>resp.json());
  }

  getUtilisateurByID(id:number) {
    return this.http.get("http://localhost:9070/utilisateurs/"+id)
      .map(resp => resp.json());
  }

  updateUtilisateur(utilisateur:Utilisateur){
     console.log(utilisateur)
    return this.http.put("http://localhost:9070/utilisateurs/"+utilisateur.idUtilisateur, utilisateur).map(resp=>resp.json());
  }
  
  deleteUtilisateurByID(id:number) {
    return this.http.delete("http://localhost:9070/utilisateurs/"+id)
      .map(resp => resp.json());
  }
}
