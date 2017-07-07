import { Component, OnInit }             from '@angular/core';
import { INgxMyDpOptions, IMyDateModel, NgxMyDatePickerDirective } from 'ngx-mydatepicker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  homeTabsData = [
    {
      'title': 'Overview',
      'link' : './'
    },
    {
      'title': 'Week Plan',
      'link' : './week-plan'
    },
    {
      'title': 'Today',
      'link' : './today'
    },
    {
      'title': 'More',
      'link' : './wer'
    },
  ];

  pageTitle = 'Week Tweak';
  date;
  dateFromCalendar;
  public myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    firstDayOfWeek: 'su',
    minYear:	2017,
    openSelectorTopOfInput: false
  };

  // Initialized to specific date (09.10.2018)
  public model: Object = { date: { year: 2016, month: 7, day: 1 } };

  constructor() { }

  ngOnInit() {
    this.showTime();
  }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
    this.dateFromCalendar = event.jsdate;
  }

  showTime() {
    this.date = new Date();
    setInterval(() => this.date = new Date(), 1000);
  }

}
