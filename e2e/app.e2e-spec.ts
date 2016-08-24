import { Tasktrac2MasterPage } from './app.po';

describe('tasktrac2-master App', function() {
  let page: Tasktrac2MasterPage;

  beforeEach(() => {
    page = new Tasktrac2MasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
