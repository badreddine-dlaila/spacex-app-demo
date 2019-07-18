import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { RocketsService } from './services/rockets-service.service';
import { Rocket } from './models/rocket.model';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.page.html',
  styleUrls: ['./rockets.page.scss'],
})
export class RocketsPage implements OnInit {
  rockets$: Observable<Rocket>;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rockets$ = this.rocketsService.getRockets();
  }

}
