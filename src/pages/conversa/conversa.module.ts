import { NgModule } from '@angular/core';
import { IonicModule } from 'page/ionic-angular';
import { Conversa } from './conversa';

@NgModule({
  declarations: [
    Conversa,
  ],
  imports: [
    IonicModule.forChild(Conversa),
  ],
  exports: [
    Conversa
  ]
})
export class ConversaModule {}
