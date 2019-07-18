import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch.model';
import { LaunchesService } from '../../services/launches.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-launches',
  templateUrl: './next-launches.page.html',
  styleUrls: ['./next-launches.page.scss'],
})
export class NextLaunchesPage implements OnInit {
  nextLaunch$: Observable<Launch>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.nextLaunch$ = this.launchesService.getNextLaunch();
  }



}
