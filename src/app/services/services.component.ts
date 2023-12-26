import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus (){
    return this.getServerStatus;
  }

  getColor (){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
