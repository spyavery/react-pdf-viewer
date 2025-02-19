import 'expect-puppeteer';

describe('Link annotation jumps to correct position in dual page with cover viewmode', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:3000/default-layout-different-dimensions');
        await page.setViewport({
            width: 1920,
            height: 1080,
        });
        await page.evaluate(() => document.querySelector('[data-testid="core__viewer"]')?.scrollIntoView());

        // Wait until the first page is rendered
        await page.waitForSelector('[data-testid="core__page-layer-0"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-0"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-0"]');

        await page.waitForSelector('[data-testid="core__page-layer-1"]');
        await page.waitForSelector('[data-testid="core__text-layer-1"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-1"]');

        await page.waitForSelector('[data-testid="core__page-layer-2"]');
        await page.waitForSelector('[data-testid="core__text-layer-2"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-2"]');

        await page.waitForSelector('[data-testid="core__page-layer-3"]');
        await page.waitForSelector('[data-testid="core__text-layer-3"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-3"]');

        // Switch to the dual page viewmode
        const moreActionsButton = await page.waitForSelector('[data-testid="toolbar__more-actions-popover-target"]');
        await moreActionsButton?.click();

        const switchToDualPageCoverMenu = await page.waitForSelector('[data-testid="view-mode__dual-cover-menu"]');
        await switchToDualPageCoverMenu?.click();

        await page.waitForSelector('[data-testid="core__page-layer-1"]');
        await page.waitForSelector('[data-testid="core__text-layer-1"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-1"]');

        await page.waitForSelector('[data-testid="core__page-layer-2"]');
        await page.waitForSelector('[data-testid="core__text-layer-2"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-2"]');

        await page.waitForSelector('[data-testid="core__page-layer-3"]');
        await page.waitForSelector('[data-testid="core__text-layer-3"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-3"]');

        await page.waitForSelector('[data-testid="core__page-layer-4"]');
        await page.waitForSelector('[data-testid="core__text-layer-4"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-4"]');

        await page.waitForSelector('[data-testid="core__page-layer-5"]');
        await page.waitForSelector('[data-testid="core__text-layer-5"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-5"]');

        await page.waitForSelector('[data-testid="core__page-layer-6"]');
        await page.waitForSelector('[data-testid="core__text-layer-6"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-6"]');

        // Jump to the 4th page
        const pageInput = await page.waitForSelector('[data-testid="page-navigation__current-page-input"]', {
            visible: true,
        });
        await pageInput?.focus();
        await pageInput?.click({ clickCount: 3 });
        await pageInput?.type('4');
        await pageInput?.press('Enter');

        // Wait until the page is rendered
        await page.waitForSelector('[data-testid="core__page-layer-3"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-3"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-3"]');

        await page.waitForSelector('[data-testid="core__page-layer-7"]');
        await page.waitForSelector('[data-testid="core__text-layer-7"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-7"]');

        await page.waitForSelector('[data-testid="core__page-layer-8"]');
        await page.waitForSelector('[data-testid="core__text-layer-8"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-8"]');

        await page.waitForSelector('[data-testid="core__page-layer-9"]');
        await page.waitForSelector('[data-testid="core__text-layer-9"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-9"]');

        await page.waitForSelector('[data-testid="core__page-layer-10"]');
        await page.waitForSelector('[data-testid="core__text-layer-10"]');
        await page.waitForSelector('[data-testid="core__annotation-layer-10"]');

        await page.waitForFunction(() => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 792');

        // Check the current page input
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "4"',
        );
    });

    test('Click the `6.3.4` link', async () => {
        const link = await page.waitForSelector('[data-annotation-id="428R"] a');
        await link?.click();

        await page.waitForSelector('[data-testid="core__page-layer-26"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-26"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-26"]');
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 5406',
        );
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "28"',
        );
    });

    test('Click the `6.3.3` link', async () => {
        const link = await page.waitForSelector('[data-annotation-id="435R"] a');
        await link?.click();

        await page.waitForSelector('[data-testid="core__page-layer-23"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-23"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-23"]');
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 5034',
        );
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "26"',
        );
    });

    test('Click the `6.3.2` link', async () => {
        const link = await page.waitForSelector('[data-annotation-id="427R"] a');
        await link?.click();

        await page.waitForSelector('[data-testid="core__page-layer-20"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-20"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-20"]');
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 4003',
        );
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "22"',
        );
    });

    test('Click the `6.3.1.1` link', async () => {
        const link = await page.waitForSelector('[data-annotation-id="426R"] a');
        await link?.click();

        await page.waitForSelector('[data-testid="core__page-layer-19"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-19"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-19"]');
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 4003',
        );
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "22"',
        );
    });

    test('Click the `6.3` link', async () => {
        const link = await page.waitForSelector('[data-annotation-id="425R"] a');
        await link?.click();

        await page.waitForSelector('[data-testid="core__page-layer-17"]', { visible: true });
        await page.waitForSelector('[data-testid="core__text-layer-17"]', { visible: true });
        await page.waitForSelector('[data-testid="core__annotation-layer-17"]');
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=core__inner-pages]").scrollTop === 3603',
        );
        await page.waitForFunction(
            () => 'document.querySelector("[data-testid=page-navigation__current-page-input]").value === "20"',
        );
    });
});
