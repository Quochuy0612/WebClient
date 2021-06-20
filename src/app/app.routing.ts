import { OurStoresComponent } from './layouts-user/our-stores/our-stores.component';
import { PromotionComponent } from './layouts-user/promotion/promotion.component';
import { ClassroomManagementComponent } from './layouts-user/classroom-management/classroom-management.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './layouts-shared/signin/signin.component';
import { SignupComponent } from './layouts-shared/signup/signup.component';
import { ForgotPasswordComponent } from './layouts-shared/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './layouts-shared/new-password/new-password.component';
import { ViewUserComponent } from './layouts-user/view-user/view-user.component';
import { DashboardUserComponent } from './layouts-user/dashboard-user/dashboard-user.component';
import { DefaultStudyComponent } from './layouts-user/default-study/default-study.component';
import { DetailProductComponent } from './layouts-user/detail-product/detail-product.component';
import { ScheduleComponent } from './layouts-user/schedule/schedule.component';
import { ClassScheduleComponent } from './layouts-user/class-schedule/class-schedule.component';
import { SpecificTranscriptComponent } from './layouts-user/specific-transcript/specific-transcript.component';
import { TestQuizzesComponent } from './layouts-user/test-quizzes/test-quizzes.component';
import { TranscriptComponent } from './layouts-user/transcript/transcript.component';
import { BlogComponent } from './layouts-user/blog/blog.component';
import { CollectionsMenuComponent } from './layouts-user/collections-menu/collections-menu.component';
import { PayComponent } from './layouts-user/pay/pay.component';
import { RatingComponent } from './layouts-user/rating/rating.component';
import { SignupCourseComponent } from './layouts-user/signup-course/signup-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password/:token',
    component: NewPasswordComponent,
  },
  {
    path: 'signupCourse',
    component: SignupCourseComponent
  },
  //////////////////////////////////////////////////
  {
    path: '',
    component: ViewUserComponent,
    children: [
      {
        path: 'home',
        component: DashboardUserComponent,
      },
      {
        path: 'study',
        component: DefaultStudyComponent
      },
      {
        path: 'products-detail/:catelogyId/:productId',
        component: DetailProductComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'classschedule',
        component: ClassScheduleComponent
      },
      {
        path: 'SpecificTranscript',
        component: SpecificTranscriptComponent
      },
      {
        path: 'TestQuizzes',
        component: TestQuizzesComponent
      },
      {
        path: 'Transcript',
        component: TranscriptComponent
      },
      {
        path: 'Blog',
        component: BlogComponent
      },
      {
        path: 'Menu',
        component: CollectionsMenuComponent
      },
      {
        path: 'Pay',
        component: PayComponent
      },
      {
        path: 'Rating',
        component: RatingComponent
      },
      {
        path: 'class-management',
        component: ClassroomManagementComponent
      },
      {
        path: 'rewards',
        component: PromotionComponent
      },
      {
        path: 'our-stores',
        component: OurStoresComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
