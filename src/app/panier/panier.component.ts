import { Component, OnInit } from '@angular/core';
import { Produit } from "../Produit" ; 

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public prix : number ; 
  public produits : Array<Produit> ;
  public heureCreation:  Date ; 

  constructor(prix : number , produits : Array<Produit> , heureCreation : Date) { 
    this.prix = prix ;
    this.produits = produits ; 
    this.heureCreation = heureCreation ; 
  }

  ngOnInit(): void {}

}
