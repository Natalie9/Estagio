import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public af: AngularFire) {
    this.lista = af.database.list('https://chatfire-d5346.firebaseio.com/chat');
  }

  enviar(){
    let m = {
      texto: this.mensagem,
      data: new Date() //teste
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";
    });
}
}
