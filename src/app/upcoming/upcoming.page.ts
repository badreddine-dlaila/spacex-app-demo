import { UpComingService } from './../services/upcoming.service';
import { UpComing } from './../Models/upcoming.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {
  upcomings: UpComing[];
  observableUpComing: Observable<UpComing[]>;

  constructor(private upcomingService: UpComingService) { }

  ngOnInit() {
    this.upcomingService.getLaunches().subscribe(result => {
      this.upcomings = result;
    });

    setTimeout(() => {
      this.observableUpComing = this.upcomingService.getLaunches();
    }, 2000);
  }

  buttonClick(upComingId: string) {
    console.log(upComingId);
  }
}
