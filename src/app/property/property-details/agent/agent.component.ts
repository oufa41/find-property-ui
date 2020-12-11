import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../model/agent.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  @Input() agent: Agent;

  constructor() { }

  ngOnInit(): void {
  }

}
