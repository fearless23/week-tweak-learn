import { WeekTweakPage } from './app.po';

describe('week-tweak App', function() {
  let page: WeekTweakPage;

  beforeEach(() => {
    page = new WeekTweakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
