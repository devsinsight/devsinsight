import { DevsinsightPage } from './app.po';

describe('devsinsight App', () => {
  let page: DevsinsightPage;

  beforeEach(() => {
    page = new DevsinsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
