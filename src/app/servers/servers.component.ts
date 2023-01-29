import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServerAddition:boolean = false;
  serverCreationStatus: boolean = false;
  serverName: string = '';
  username: string = '';
  servers = ['SERVER-001', 'SERVER-002'];
  logs: string[] = [];
  togglingPara: string = 'Secret Password = tuna';
  showParaStatus: boolean = true;
  paravisibility: string = 'visible';
  constructor() {
    setTimeout(() => {
      this.allowServerAddition = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onClickResetUsername() {
    this.username = '';
  }
  onClickDisplayDetails() {
    //Toggle the paragraph
    this.paravisibility === 'visible' ? this.paravisibility = 'hidden' : this.paravisibility = 'visible';
    //Log timestamps
    this.logs.push(new Date().toString());
  }
}
