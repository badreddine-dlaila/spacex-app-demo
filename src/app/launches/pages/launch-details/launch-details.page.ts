  import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.page.html',
  styleUrls: ['./launch-details.page.scss'],
})
export class LaunchDetailsPage implements OnInit, AfterViewInit {
  launch: Launch;
  missionName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.launch =  this.route.snapshot.data.launch;
  }

  ngAfterViewInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
