import router from '../BrowseRouter';
import { Block } from 'core';

export class Test extends Block {
  protected render(): string {
    // language=hbs
    return `
      <p>Test</p>
    `;
  }
}

describe('Router test', () => {
  router.use('/login', Test).use('/profile', Test).start();

  // it('Should works add new routes', () => {
  //   expect(router.getHistory().length).to.equal(2);
  // });

  // it('Should be correct elements on paths', () => {
  //   // expect(router.getRoute('/login')?._block).to.deep.equal(componentOne);
  //   // expect(router.getRoute('/profile')?._block).to.deep.equal(componentTwo);
  // });
});
