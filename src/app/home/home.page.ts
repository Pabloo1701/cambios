import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
//Import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // declaciones
  id: string;
  doc: any;
  
  //base
  ingreso: {id: string; nombre: string; correo: string; telefono: string; comuna: string; detalle: string;} [];
  insertar: { comuna: string;}[];


  constructor(
    //iniciar firestore
    private firestore: AngularFirestore,
  ) {}

  ngOnInit(){
  this.firestore.collection('/ingreso/', ref => ref.where ('comuna', '==', "Vigente")).snapshotChanges().subscribe(res=>{
  if(res){
  this.ingreso = res.map(e=>{
    return {
      // recuperar datos
    nombre: e.payload.doc.data()['nombre'],
    correo: e.payload.doc.data()['correo'],
    telefono: e.payload.doc.data()['telefono'],
    comuna: e.payload.doc.data()['comuna'],
    detalle: e.payload.doc.data()['detalle'],
    //
    id: e.payload.doc.id
    }
    
  })
  }

  })


}


  



}
