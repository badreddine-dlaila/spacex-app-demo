import { LaunchService } from './../services/launch.service';
import { Observable } from 'rxjs';
import { Launch } from './../Models/launch.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.page.html',
  styleUrls: ['./launch.page.scss'],
})
export class LaunchPage implements OnInit {
  launches: Launch[];
  observableLaunches: Observable<Launch[]>;

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.launchService.getLaunches().subscribe(result => {
      this.launches = result;
    });

    //this.launchService.convertDate() = this.dateLaunch;

    setTimeout(() => {
      this.observableLaunches = this.launchService.getLaunches();
    }, 2000);
  }

  buttonClick(launchId: string) {
    console.log(launchId);
  }
}
