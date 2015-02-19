System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "aurelia-templating/*": "dist/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.3.5",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
    "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
    "aurelia-loader": "github:aurelia/loader@0.3.3",
    "aurelia-logging": "github:aurelia/logging@0.2.3",
    "aurelia-metadata": "github:aurelia/metadata@0.3.1",
    "aurelia-path": "github:aurelia/path@0.4.1",
    "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
    "core-js": "npm:core-js@0.4.10",
    "github:aurelia/binding@0.3.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3"
    },
    "github:aurelia/dependency-injection@0.4.3": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader@0.3.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

