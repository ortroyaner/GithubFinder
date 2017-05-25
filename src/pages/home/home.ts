import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { GitHubService } from '../../providers/git-hub-service/git-hub-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  username = '';
  email = '';
  public foundRepos;
  public gituser;

  constructor(private nav: NavController, private auth: AuthService,
  private github: GitHubService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  getRepos() {
    this.github.getRepos(this.gituser).subscribe(
        data => {
            this.foundRepos = data.json();
        },
        err => console.error(err),
        () => console.log('getRepos completed')
    );
  }
}
