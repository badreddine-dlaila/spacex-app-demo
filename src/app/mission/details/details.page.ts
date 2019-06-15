import {Component, OnInit} from '@angular/core';
import {Mission} from '../../Models/mission.model';
import {Observable} from 'rxjs';
import {MissionService} from '../../services/mission.service';
import {Location} from '@angular/common';


@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    mission: Mission;
    missionWiki: string;
    missionTwitter: string;
    missionWebsite: string;
    missionPayloadIds: string[];
    observableMission: Observable<Mission[]>;

    constructor(private missionService: MissionService, private _location: Location) { }

    private getMissionId(): string {
        return window.location.pathname.split('/').pop();
    }

    ngOnInit(): void {
        const missionId = this.getMissionId();
        console.log(missionId);


        this.missionService.getOneMission(missionId).subscribe(result => {
            this.mission = result;
            this.missionWiki = this.mission.wikipedia;
            this.missionTwitter = this.mission.twitter;
            this.missionWebsite = this.mission.website;
            this.missionPayloadIds = this.mission.payload_ids;
        });

        setTimeout(() => {
            this.observableMission = this.missionService.getMissions();
        }, 2000);
    }

    redirectToWiki() {
        location.href = this.missionWiki;
    }

    redirectToTwitter() {
        location.href = this.missionTwitter;
    }

    redirectToWebsite() {
        location.href = this.missionWebsite;
    }

    previous() {
        this._location.back();
    }

    redirectToSearchPayloadByIdPage() {
        //Implement redirection to search payload by id
        console.log("pouet");
    }

}
