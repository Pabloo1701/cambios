import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


// control formulario
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-camp',
  templateUrl: './camp.page.html',
  styleUrls: ['./camp.page.scss'],
})
export class CampPage implements OnInit {
  
  doc: any;
  insertar:{nombre: string ; correo: string ; telefono: string ; comuna: string; detalle: string; };
  
  constructor(
    private firestore: AngularFirestore ,
     public formBuilder: FormBuilder,
     
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
   this.insertar = {nombre : '' ,correo : '', telefono : '', comuna : '', detalle: '',}  
  }
  
 
 
  guardar(nombre, correo, telefono, comuna, detalle=null){
  
  
  let insertar={}
  insertar['nombre'] = nombre
  insertar['correo'] = correo
  insertar['telefono'] = telefono
  insertar['comuna'] = comuna
  insertar['detalle'] = detalle 
  

  this.firestore.collection('/ingreso/').add(insertar).then (() => {
  this.insertar = {nombre :  '', correo : '', telefono: '', comuna: '', detalle: ''}
    
  })
  this.router.navigateByUrl('home');

  }


}
