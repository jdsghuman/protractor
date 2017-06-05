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
npm install (must be in the project directory)

webdriver-manager is a helper tool to get an instance of a Selenium Server running.

webdriver-manager update

webdriver-manager start

Running Tests
------------

Run tests from the project directory

Navigate to project
e.g. cd shop-disney-tests

Start Selenium Server
webdriver-manager Start

Once the Selenium server is running, start tests in another tab:
protractor conf.js
