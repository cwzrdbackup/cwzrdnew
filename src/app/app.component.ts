import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from './pages/player/player.component';
import { ApiService } from 'src/app/pages/dataservice/apiservice.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import { Configuration } from './pages/dataservice/app.constant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [PlayerComponent]
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  show_achievement: Boolean = false;
  show_rank: Boolean = false;
  achievements = [];
  rank = '';
  achievement_id: any;
  gifTypes = {
    0: 'locked',
    1: 'unlocked'
  };
  constructor(
    private _dataservice: ApiService, private router: Router, private _configuration: Configuration) {
    setInterval(() => {

      this._dataservice
        .postCall<any>(this._configuration.AddMinuteApi, {})
        .subscribe(resp => {
          if (resp.status === this._configuration.ResponseStatusError) {
            return;
          }
        },
          error => {
            console.log(error);
          },
          () => {

          });

    }, 1000 * 60);

    setInterval(() => {

      let now = DateTime.local().setZone("UTC");
      let then = DateTime.fromObject({ year: 2019, month: 11, day: 29, hour: 15, minute: 10, second: 0, zone: 'UTC', });


    }, 1000);
  }

  ngOnInit() {
    // Subscribe to show Achievements

    this._dataservice.showAchievementsListener().subscribe((achievements: any) => {
      this.achievements = achievements;
      this.show_achievement = true;
      setTimeout(() => {
        this.show_achievement = false;
        this.achievements.length = 0;
      }, 1000 * 7);
    });
    // Subscribe to show ranks

    this._dataservice.showRanksListener().subscribe((rank: any) => {
      this.rank = rank;
      this.show_rank = true;
      window.scrollTo(0, 0);
    });
  }

  closeRank() {
    this.show_rank = false;
    this.rank = '';
  }
}
