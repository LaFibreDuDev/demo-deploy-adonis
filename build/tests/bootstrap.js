import { assert } from '@japa/assert';
import app from '@adonisjs/core/services/app';
import { pluginAdonisJS } from '@japa/plugin-adonisjs';
import testUtils from '@adonisjs/core/services/test_utils';
import { apiClient } from '@japa/api-client';
import { browserClient } from '@japa/browser-client';
export const plugins = [
    assert(),
    apiClient(),
    pluginAdonisJS(app),
    browserClient({
        runInSuites: ['browser'],
    }),
];
export const runnerHooks = {
    setup: [
        () => testUtils.db().migrate(),
        () => testUtils.db().truncate(),
        () => testUtils.db().seed(),
    ],
    teardown: [],
};
export const configureSuite = (suite) => {
    if (['browser', 'functional', 'e2e'].includes(suite.name)) {
        return suite.setup(() => testUtils.httpServer().start());
    }
};
//# sourceMappingURL=bootstrap.js.map