import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './forms_section/contact-form/contact-form.component';
import { SignupFormComponent } from './forms_section/signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './rout_http_section/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './rout_http_section/navbar/navbar.component';
import { HomeComponent } from './rout_http_section/home/home.component';
import { GithubProfileComponent } from './rout_http_section/github-profile/github-profile.component';
import { NotFoundComponent } from './rout_http_section/not-found/not-found.component';
import { GithubFollowersComponent } from './rout_http_section/github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './auth_section/admin/admin.component';
import { HomePageComponent } from './auth_section/home-page/home-page.component';
import { LoginPageComponent } from './auth_section/login-page/login-page.component';
import { NoAccessPageComponent } from './auth_section/no-access-page/no-access-page.component';
import { NotFoundPageComponent } from './auth_section/not-found-page/not-found-page.component';
import { SignupPageComponent } from './auth_section/signup-page/signup-page.component';
import { OrderService } from './auth_section/services/order.service';
import { AuthService } from './auth_section/services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { fakeBackendProvider } from './auth_section/helpers/fake-backend-interceptor';
import { AuthGuard } from './auth_section/services/auth-guard.service';
import { AdminAuthGuard } from './auth_section/services/admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    AdminComponent,
    HomePageComponent,
    LoginPageComponent,
    NoAccessPageComponent,
    NotFoundPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Routing Section
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: HomeComponent,
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'followers/:id/:username',
    //     component: GithubProfileComponent
    //   },
    //   {
    //     path: 'followers',
    //     component: GithubFollowersComponent
    //   },
    //   {
    //     path: 'posts',
    //     component: PostsComponent
    //   },
    //   {
    //     path: '**',
    //     component: NotFoundComponent
    //   },
    // ])
    // Authorization Section
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        throwNoTokenError: false
      }
    }),
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'login', component: LoginPageComponent},
      {path: 'no-access', component: NoAccessPageComponent},
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    // For Authentication and Authorization section
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    // For creating a mock backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
