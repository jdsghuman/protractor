Protractor Example for Angular & non-angular site
=============

Setup
---------

- Install Java [Install Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)

- Install Node.js [Nodejs download](https://nodejs.org/en/)

- Clone repo: `git clone https://github.com/jdsghuman/protractor-example.git`

- Install Protractor globally (from Terminal):

   `npm install -g protractor`

- Install project dependencies after cloning the report

   `npm install` (must be in the project directory in terminal)

- webdriver-manager is a helper tool to get an instance of a Selenium Server running.

   `webdriver-manager update`

   `webdriver-manager start`  --- (not required for current setup)

Running Tests
------------

Note: Run tests from the project directory (navigate to project folder in terminal)

### 1. Navigate to project:

e.g. `cd shop-disney-tests`

### 2. Start Selenium Server

   (Not required since test are setup with Direct Connect)

`webdriver-manager start`

### 3. Start tests in terminal (This command will run all the tests):

   Ensure terminal is in the project folder

`protractor conf.js`

### 4. To run a specific suite

`protractor conf.js --suite {suite name}`

Reports
-----------

HTML reports for Jasmine2 and Protractor include screenshots and pass/skip/failure results for each tests

The path where the reports are created is setup in the config file

./{project folder}/reports/htmlreport/

Project Structure
-----------------


<pre>
  |-- projectfolder

    |-- my-tests

      |--e2e
         |-- page-objects
             helper.po.js
             homepage.po.js
             mybagpage.po.js
             orderhistory.po.js

         |-- home
             home.spec.js

         |-- product
             product.spec.js

      |-- reports
        |-- htmlreport
</pre>
