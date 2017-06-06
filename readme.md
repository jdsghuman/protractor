Shop Disney Protractor POC
=============

Setup
---------

Install Java http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html

Install Node.js https://nodejs.org/en/

Clone repo: {repository location}

Install npm to install Protractor globally (in Terminal):

npm install -g protractor

Install dependencies after cloning the report
npm install (must be in the project directory in terminal)

webdriver-manager is a helper tool to get an instance of a Selenium Server running.

webdriver-manager update

webdriver-manager start  --- (not required for current setup)

Running Tests
------------

Note: Run tests from the project directory (navigate to project folder in terminal)

- Navigate to project:
e.g. cd shop-disney-tests

- Start Selenium Server
** (Not required since test are setup with Direct Connect)

webdriver-manager Start

- Once the Selenium server is running, start tests in another tab:

protractor conf.js
