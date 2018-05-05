/*tslint:disable:no-var-requires no-var-keyword */
const path = require('path');

exports.config = {
  specs: [ './spec/**/*.spec.ts' ],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: { args: [ '--disable-popup-blocking', '--disable-translate' ] }
  },
  skipSourceMapSupport: true,

  maxSessions: 15,
  allScriptsTimeout: 600000,
  getPageTimeout: 600000,
  directConnect: true,

  debug: true,
  beforeLaunch: () => {
    const baseUrl = './spec';
    const tsConfig = require('./tsconfig.json');

    require('ts-node').register({ project: './tsconfig.json' });
    require('tsconfig-paths').register({
      baseUrl,
      paths: tsConfig.compilerOptions.paths
    });
  },

  baseUrl: 'http://tut.by',
  onPrepare: () => {
    const { SpecReporter } = require('jasmine-spec-reporter');
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );
  },

  onComplete: () => void 0,

  // highlightDelay: 100,

  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 240000,
    print: () => void 0
  },

  SELENIUM_PROMISE_MANAGER: false
};
