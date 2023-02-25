import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardComponent} from './pages/authguard/authguard.component';
import {CourseComponent} from './pages/course/course.component';



const routes: Routes = [
  { path: '', loadChildren: "./pages/auth/auth.module#AuthModule"},
  { path: 'login', loadChildren: "./pages/auth/auth.module#AuthModule" },
  { path: 'forgot-password', loadChildren: "./pages/forgot-password/forgot-password.module#ForgotPasswordModule", },
  { path: 'reset-password', loadChildren: "./pages/reset-password/reset-password.module#ResetPasswordModule", },
  { path: 'signup', loadChildren: "./pages/signup/signup.module#SignupModule"},
  { path: 'dashboard', loadChildren: "./pages/dashboard/dashboard.module#DashboardModule", canActivate:[AuthguardComponent]},
  // { path: 'notifications', loadChildren: "./pages/notifications/notifications.module#notificationsModule", canActivate:[AuthguardComponent]},
  { path: 'examination', loadChildren: "./pages/examination/examination.module#ExaminationModule", canActivate:[AuthguardComponent]},
  { path: 'settings', loadChildren: "./pages/security/security.module#SecurityModule", canActivate:[AuthguardComponent]},
  { path: 'course', loadChildren: "./pages/course/course.module#CourseModule",
  canActivate:[AuthguardComponent]
},
{ path: 'position-size-calculator', loadChildren: "./pages/calculator/calculator.module#calculatorModule" },
//{ path: 'user-settings', loadChildren: "./pages/settings/settings.module#settingsModule", canActivate:[AuthguardComponent]},  
{ path: 'library', loadChildren: "./pages/library/library.module#libraryModule", canActivate:[AuthguardComponent] },
{ path: 'technicals', loadChildren: "./pages/technicals/technicals.module#technicalsModule", canActivate:[AuthguardComponent] },
  { path: 'book/:id', loadChildren: "./pages/book/book.module#BookModule", canActivate:[AuthguardComponent] },
  { path: 'journal', loadChildren: "./pages/journal/journal.module#JournalModule", canActivate:[AuthguardComponent]},  
  { path: 'profile', loadChildren: "./pages/profile/profile.module#ProfileModule", canActivate:[AuthguardComponent] },
  { path: 'traders-hub', loadChildren: "./pages/trader-v/trader-v.module#TraderVModule" , canActivate:[AuthguardComponent]},
  //{ path: 'trader-v', loadChildren: "./pages/trader-v/trader-v.module#TraderVModule" , canActivate:[AuthguardComponent]}, 
  // { path: 'WZRD-wednesdays', loadChildren: "./pages/wzrd/wzrd.module#WzrdModule", canActivate:[AuthguardComponent] },
  // { path: 'news', loadChildren: "./pages/news/news.module#NewsModule", canActivate:[AuthguardComponent] },
  { path: 'portfolio', loadChildren: "./pages/portfolio/portfolio.module#PortfolioModule" },
  // { path: 'podcasts', loadChildren: "./pages/podcast/podcast.module#PodcastModule", canActivate:[AuthguardComponent] },
  // { path: 'battle-of-wzrds', loadChildren: "./pages/battle-of-wzrds/battleOfWzrds.module#battleOfWzrdsModule", canActivate:[AuthguardComponent] },
  { path: 'charts', loadChildren: "./pages/tradingview/tradingview.module#tradingviewModule", canActivate:[AuthguardComponent]},  
  { path: 'trade-tracker', loadChildren: "./pages/trade-tracker/trade-tracker.module#tradeTrackerModule", canActivate:[AuthguardComponent]},
  // { path: 'wzrd-contributors', loadChildren: "./pages/contributor/contributor.module#contributorModule", canActivate:[AuthguardComponent]},
  // { path: '**', loadChildren: "./pages/dashboard/dashboard.module#DashboardModule", canActivate:[AuthguardComponent]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


