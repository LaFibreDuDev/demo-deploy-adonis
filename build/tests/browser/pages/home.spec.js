import { test } from '@japa/runner';
test.group('Pages home', () => {
    test('see welcome message', async ({ visit }) => {
        const page = await visit('/', {});
        await page.waitForLoadState('domcontentloaded');
        const form = page.locator('#monform');
        await page.fill('#title', 'Mon premier post');
        const button = form.getByRole('button', { name: 'Envoyer', exact: true }).first();
        await button.click();
        await page.assertTextContains('body', 'Affichage des posts');
        await page.assertExists(page.locator('#result'));
        await page.assertTextContains('#result', 'Résultat : Mon premier post');
    });
});
//# sourceMappingURL=home.spec.js.map