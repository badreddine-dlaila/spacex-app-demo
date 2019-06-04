import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;
  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'First Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'Second Page blank',
      url: '/menu/second'
    },
    {
      title: 'Missions Page blank',
      utl: '/menu/missions'
    }
  ];
  constructor(
    private router: Router,
    public progress: NgProgress
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.progress.start();

    setTimeout(() => {
      /** progress ends after 2 seconds */
      this.progress.done();
    }, 10000);
  }

}
