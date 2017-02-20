import { WebgiraShowcase2Page } from './app.po';

describe('webgira-showcase2 App', function() {
  let page: WebgiraShowcase2Page;

  beforeEach(() => {
    page = new WebgiraShowcase2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
