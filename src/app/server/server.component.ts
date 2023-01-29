import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  }
)
export class ServerComponent{
  serverId: number = 101;
  serverStatus: string = Math.random() > 0.5 ? 'Online' : 'Offline';
  getServerStatus() {
    return this.serverStatus;
  }
  getServerColor() {
    return this.serverStatus === 'Online' ? '#32de84' : '#fd5c63';
  }
}