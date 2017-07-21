import { PrototypePage } from './app.po';

describe('prototype App', () => {
  let page: PrototypePage;

  beforeEach(() => {
    page = new PrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
