import Scripts from '../../../../scripts';

const scripts = Scripts.setupProjectFromTemplate({
  templateDir: __dirname,
  projectType: 'javascript',
});

it('should support storybook in dev mode', async () => {
  await scripts.dev(
    async () => {
      await page.goto(
        'http://localhost:9009/iframe.html?selectedKind=Components&selectedStory=Basic',
      );
      await page.waitForSelector('#component');
      const result = await page.$eval('#component', (elm) => elm.textContent);
      expect(result).toBe('Component in Storybook');
    },
    { waitForStorybook: true },
  );
});
