import { PreviewPdfModule } from 'src/app/components/preview-pdf/preview-pdf.module';
import { PreviewImageModule } from './../../components/preview-image/preview-image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NbProgressBarModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbDialogModule, NbActionsModule, NbSpinnerModule } from '@nebular/theme';
import { ChooseProfileImgComponent } from './choose-profile-img/choose-profile-img.component';
import { ChooseHeaderImgComponent } from './choose-header-img/choose-header-img.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { AchievementComponent } from './Achievement/achievement.component';
import { documentsComponent } from './documents/documents.component';
//import { BattleOfWzrdsComponent } from './battle-of-wzrds/battle-of-wzrds.component';
import { HeaderModule } from '../header/header.module';
import { bowHeaderModule } from '../bowheader/header.module';
import { achievementHeaderModule } from '../achievementHeader/achievementHeader.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { PreviewImageComponent } from 'src/app/components/preview-image/preview-image.component';
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome';
//import { ImgProgressBarComponent } from './../../components/img-progress-bar/img-progress-bar.component';
//import { ThresholdProgressComponent } from './../../components/threshold-progress/threshold-progress.component';
const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'refer-friend', component: ReferFriendComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'Documents', component: documentsComponent},
  //{path: 'battle-of-wzrds', component: BattleOfWzrdsComponent}
]

@NgModule({
  //declarations: [AchievementComponent, ProfileComponent, ChooseProfileImgComponent, ChooseHeaderImgComponent, ReferFriendComponent, documentsComponent, BattleOfWzrdsComponent, ImgProgressBarComponent, ThresholdProgressComponent,],
  declarations: [AchievementComponent, ProfileComponent, ChooseProfileImgComponent, ChooseHeaderImgComponent, ReferFriendComponent, documentsComponent,],
  imports: [
    CommonModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
	NbProgressBarModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbActionsModule, 
	HeaderModule,
	HttpClientModule,
  NbSpinnerModule,
  PreviewImageModule,
  PreviewPdfModule,
  achievementHeaderModule,
  // FontAwesomeModule,
  bowHeaderModule
  ],
  entryComponents: [ChooseProfileImgComponent, ChooseHeaderImgComponent, PreviewImageComponent]
})
export class ProfileModule { }