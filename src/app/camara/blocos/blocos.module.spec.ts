import { BlocosModule } from './blocos.module';

describe('BlocosModule', () => {
  let blocosModule: BlocosModule;

  beforeEach(() => {
    blocosModule = new BlocosModule();
  });

  it('should create an instance', () => {
    expect(blocosModule).toBeTruthy();
  });
});
