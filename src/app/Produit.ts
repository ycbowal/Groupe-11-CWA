export class Produit{
    public nom : string ; 
    public Origine : string; 
    public description : string ; 
    public categories : Array<Produit>[] ; 
    public infosupplementaire : string; 
    public id: string ; 
    public dateAjout: Date ; 
    public tauxReduction : number ; 
    public urlimage : string; 
    
    constructor(nom : string , Origine : string , description : string , categories : Array<Produit>[] , infosupplementaire : string, id: string, dateAjout: Date, tauxReduction : number , urlimage : string) {
        this.nom = nom ; 
        this.Origine = Origine  ;
        this.description = description ; 
        this.categories = categories ; 
        this.infosupplementaire = infosupplementaire ; 
        this.id = id ; 
        this.dateAjout = dateAjout ; 
        this.tauxReduction = tauxReduction ; 
        this.urlimage = urlimage ; 
    }

}