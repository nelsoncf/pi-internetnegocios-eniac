import { JBStorePage } from './app.po';

describe('jbstore App', function() {
  let page: JBStorePage;

  beforeEach(() => {
    page = new JBStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
