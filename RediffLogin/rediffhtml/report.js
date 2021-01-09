$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("rediff.feature");
formatter.feature({
  "line": 1,
  "name": "Rediff login feature",
  "description": "",
  "id": "rediff-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Rediff login functionality",
  "description": "",
  "id": "rediff-login-feature;rediff-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter userid \"\u003cuserid\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login fails error message displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "rediff-login-feature;rediff-login-functionality;",
  "rows": [
    {
      "cells": [
        "userid",
        "",
        "password"
      ],
      "line": 8,
      "id": "rediff-login-feature;rediff-login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "",
        "abc123"
      ],
      "line": 9,
      "id": "rediff-login-feature;rediff-login-functionality;;2"
    },
    {
      "cells": [
        "xyz",
        "",
        "xyz123"
      ],
      "line": 10,
      "id": "rediff-login-feature;rediff-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Rediff login functionality",
  "description": "",
  "id": "rediff-login-feature;rediff-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter userid \"abc\" and password \"abc123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login fails error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RediffStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 8789411100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 19
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "RediffStepDefinition.user_enter_userid_and_password(String,String)"
});
formatter.result({
  "duration": 1217853100,
  "status": "passed"
});
formatter.match({
  "location": "RediffStepDefinition.login_fails_error_message_displayed()"
});
formatter.result({
  "duration": 55426700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Rediff login functionality",
  "description": "",
  "id": "rediff-login-feature;rediff-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter userid \"xyz\" and password \"xyz123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login fails error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RediffStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6537059100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 19
    },
    {
      "val": "xyz123",
      "offset": 38
    }
  ],
  "location": "RediffStepDefinition.user_enter_userid_and_password(String,String)"
});
formatter.result({
  "duration": 1419258700,
  "status": "passed"
});
formatter.match({
  "location": "RediffStepDefinition.login_fails_error_message_displayed()"
});
formatter.result({
  "duration": 50302400,
  "status": "passed"
});
});