import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Chat } from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista: FirebaseListObservable<any>;
  mensagem: string;
  hora: Date;
  nat: String ='Natalie'

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor(public af: AngularFire, public navCtrl: NavController) {
    this.lista = af.database.list('https://chatfire-d5346.firebaseio.com/chat');
    this.carregarListaMensagem();
  }

  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
  enviar(){
    let m = {
      texto: this.mensagem,
      datetime: new Date().getTime(),
      dePara: 'natalie_ana'
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";
    });
  }
  excluir(){

  }
  chat(){
      this.navCtrl.push(Chat);

  }

  carregarListaMensagem(){
    this.af.database.list('chat', {
      query: {
        orderByChild: 'dePara',
        equalTo: 'natalie_ana'
      }
    }).subscribe(data => {
      console.log(data);
    });
  }
}
