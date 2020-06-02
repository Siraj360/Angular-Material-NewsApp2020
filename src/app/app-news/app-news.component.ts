import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsApiService } from '../Service/news-api.service';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GlobalState } from '../global.state';
import {TestDataService} from './test-data.service';
import { FilterPipe, OrderBy } from '../pipes'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.scss'],
  providers: [NewsApiService,TestDataService],
})
export class AppNewsComponent implements OnInit
{
  title = "Welcome to an Angular 9 - News App";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private newsapi: NewsApiService,
    public dialog: MatDialog,
    private globalState: GlobalState,
    private testDataService:TestDataService
  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);}

  mArticles: Array<any>;
  mSources: Array<any>;
  allArticles: Array<any>;
  allSources: Array<any>;
  isShowSidebar:boolean = true;
  isFavoriteFilter:boolean = false;
  favoriteCount: number = 0 ;
  filtterText: string ="";
  categories = [ 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  isShowCategary:boolean= false;
  isShowPagnator:boolean= false;
  pageSize:number = 8;
  source: any;
  //  pageSize:number = 6;

  ngOnInit() {
    this.getTestData();
    // this.getData();
  }

  getTestData()
  {
    debugger;
        this.testDataService.getTestData()
            .then(res => {
                 // console.log(res)
                  this.mArticles=  res["testArticles"];
                   this.mSources= res["testSources"];
                   this.updateData();
                   //To set 1st page of paginatpr
                  this.filterFirstPage();
            });
  }

filterFirstPage()
{
  if (this.isShowPagnator)
  {
     this.mArticles = this.allArticles.slice(0, this.pageSize);
  }

}
changePagnator()
{
  this.isShowPagnator = !this.isShowPagnator
  this.mArticles = this.allArticles
  this.filterFirstPage()
}
filterClick()
  {
    this.isFavoriteFilter = !this.isFavoriteFilter

    if(this.isFavoriteFilter)
    {
       this.mArticles = this.allArticles.filter(a=>a.isFavorite == true)
    }else
    {
      this.mArticles = this.allArticles;
      this.filterFirstPage();

    }

  }

updateData()
{
  for (let article of this.mArticles) {
       article["like"] = Math.floor((Math.random() * 1000) + 1);;
       article["dislike"] = Math.floor((Math.random() * 100) + 1);;
       article["isFavorite"] = false;
       article["comments"] = [];
    }

    this.allArticles = this.mArticles;
}

  favoriteUpdate()
  {
     this.favoriteCount =  this.allArticles.filter(a=>a.isFavorite == true).length;
     if( this.favoriteCount <= 0)
     {
        this.isFavoriteFilter = false;
     }
  }



 categaryClick(categary)
 {
   console.log("categary");
 }

 pageChange(event)
 {
    // console.log("eve");
    this.filtterText="";

    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.allArticles.length){
      endIndex = this.allArticles.length;
    }
    this.mArticles = this.allArticles.slice(startIndex, endIndex);
 }

  getData()
  {
     this.newsapi.initArticles().subscribe((data) => {
      debugger;
      this.mArticles = data['articles'];
    }),
      (err) => {
        console.error(err);
        this.getTestData()
      };
    this.newsapi
      .initSources()
      .subscribe((data) => (this.mSources = data['sources'])),
      (err) => {
        console.error(err);
       this.getTestData()
      };
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data) => (this.mArticles = data['articles']));
  }

  openDialog(article): void {
    let titleFix = article.title;
    if(titleFix.length > 54)
    {
         titleFix = titleFix.substring(0,50)+ "..."
    }
    const dialogRef = this.dialog.open(DlgCommentDialog, {
      data: {title: titleFix, comment: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.trim().length > 0)
      {
       article.comments.push(result.trim());
      }
    });
  }
}


//dillog related
export interface DialogData {
  title: string;
  comment: string;
}

@Component({
  selector: 'dlg-comment',
  templateUrl: 'dlg-comment.html',
  styleUrls: ['./app-news.component.scss'],
})
export class DlgCommentDialog {

  constructor(
    public dialogRef: MatDialogRef<DlgCommentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
