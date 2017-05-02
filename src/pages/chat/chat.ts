import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Connection} from "../../providers/connection";
import {Appointment} from "../../model/appointment";
import {AppointmentStatus} from "../../model/appointment-status";
import {Subscription} from "rxjs/Subscription";

/**
* Generated class for the Chat page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {
  @ViewChild(Content) content: Content;
  active: boolean;
//  appointment: Appointment;
  chats: FirebaseListObservable<any>;
  message: string;
  appointmentSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  //  public connection: Connection,
    public af: AngularFire
  ) {
  /**  this.appointment = this.navParams.get("appointment");
    this.appointmentSubscription = this.af.database.object('appointment/'+this.appointment.id).subscribe(appointment => {
      if(appointment.$exists()){
        this.appointment = appointment
        this.appointment.id = appointment.$key;
      } else {
        if(this.navCtrl.getActive().name !== "HomePage"){
          this.navCtrl.popToRoot();
        }
      }
    });

    this.chats = this.af.database.list('chat/'+this.appointment.id, {
      query: {
        orderByChild: 'dateTime'
      }
    });
    this.active = this.appointment.status == AppointmentStatus.ACCEPTED;

    this.chatSubscription = this.chats.subscribe(_ => {
      this.scrollToBottom();
    });
  }

  ionViewDidLoad() {
    this.connection.updateAppointmentChatPending(this.appointment.id);
  }

  ionViewDidEnter() {
    this.scrollToBottom();
  }

  ionViewWillLeave(){
    this.appointmentSubscription.unsubscribe();
    this.chatSubscription.unsubscribe();
    this.connection.updateChatLastVisit(this.appointment.id);
  }

  sendMessage() {
    if(this.message) {
      let chat = {
        appointmentId: this.appointment.id,
        fromProfessionalId: null,
        message: this.message,
        dateTime: new Date().getTime()
      };
      this.connection.sendChatMessage(chat, this.appointment);
      this.message = "";
    }
  }

  scrollToBottom(){
    try{
      let dimensions = this.content.getContentDimensions();
      this.content.scrollTo(0, dimensions.scrollHeight, 0);
    } catch (e) {
      //TODO
    }
  }*/
}}
