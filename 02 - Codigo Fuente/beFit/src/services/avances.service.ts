import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AvancesService{
    constructor(public afDB: AngularFireDatabase){}

    avances = [];

      public getAvances(){
          //return this.avances;
          return this.afDB.list('avances/');
      }

      public getAvance(id){
          //return this.avances.filter(function(e, i){ return e.id == id }) [0] || {id:null, titulo:null, fecha:null, peso:null, cintura:null, biceps:null};
          return this.afDB.object('avances/'+id);
      }

      public crearAvance(avance){
          this.afDB.database.ref('avances/'+avance.id).set(avance);
          //this.avances.push(avance)
      }

      public editarAvance(avance){
        /*for(let i=0; i < this.avances.length; i++){
            if(this.avances[i].id == avance.id){
                this.avances[i] = avance;
            }
        }*/
        this.afDB.database.ref('avances/'+avance.id).set(avance);
    }

    public eliminarAvance(avance){
        this.afDB.database.ref('avances/'+avance.id).remove();
        /*for(let i=0; i < this.avances.length; i++){
            if(this.avances[i].id == avance.id){
                this.avances.splice(i, 1);
            }
        }*/
    }
} 