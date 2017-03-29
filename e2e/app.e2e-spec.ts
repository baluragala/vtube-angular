import { VtubePage } from './app.po';

describe('vtube App', () => {
  let page: VtubePage;

  beforeEach(() => {
    page = new VtubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
