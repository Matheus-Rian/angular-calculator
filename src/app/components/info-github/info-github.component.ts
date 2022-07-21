import { Component, OnInit } from '@angular/core';
import { GithubModel } from 'src/models/github.model';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'app-info-github',
  templateUrl: './info-github.component.html',
  styleUrls: ['./info-github.component.scss'],
})

export class InfoGithubComponent implements OnInit {
  githubInfo: GithubModel = new GithubModel();

  constructor(
    private ghService: GithubService,
  ) { }

  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this.ghService.getUser().subscribe((response) => {
      this.githubInfo = response;
    });
  }

  handlNavigateGithubUser() {
    window.location.href = this.githubInfo.html_url;
  }
}
