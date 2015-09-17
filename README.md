# DrugReport
DrugReport allows a user to quickly search for any drug related adverse events using faceted search criteria. DrugReport is powered by openFDA (https://open.fda.gov) dataset and Application Programming Interface (API). The search result is displayed in a responsive layout so users can access DrugReport using mobile devices as well.

# Search
The search criteria include Drug Name, Brand Name, Generic, Substance Name, Manufacturer and Application Number. Using our facet search users can narrow down their results by seriousness of the adverse event, gender, method of reporting, date of notification and age group. The search result page displays a pie chart along with the list of most common adverse reactions with count and percentage. The users can also share search results via an email.

# Usage
To re-create this application in other machine using the docker container: install docker first, pull our docker image from Docker Hub, then launch the docker. Follow these commands:

```
docker pull vinothgovindarajan/drug-report-app
docker run -it --rm --name drug-reporting-app drug-report-app -p 80:9000
```

# Technology Stack
## Core Stack
* NodeJS
* NPM (for nodeJS package management)
* AngularJS
* Bower (for client side package management)
* Grunt (task runner)
* C3 (for chart rendering)

## Web Technologies
* HTML5
* CSS3
* JavaScript
* Bootstrap (theme and web components)

## Unit Test Framework
* Jasmine (using karma adapter)

## Test Automation
* Selenium 

## Continious Integration
* Jenkins

## Continuous Monitoring
* New Relic Browser

## Server Technologies
* Docker (to deploy our application in a container)
* AWS (to host our application)

# Dependencies

Docker

# Approach used to create this prototype

We identified a technical architect and made him responsible to manage user requirements and development methodology to comply with RFQ requirements. He had the full authority to assign tasks, make business, product and technical decisions to develop the prototype. He was made accountable for the ultimate failure or success of our solution.

We assembled a multidisciplinary and talented team with experience in creating modern digital services. Our team included an experienced technical architect, front end web developer, backend web developer and DevOps engineer. We made sure that our team is experienced in developing similar solutions using agile delivery methodology along with development and operations (DevOps) techniques such as continuous integration and continuous deployment.

We used JIRA to create product backlog with user stories, manage sprints, and issues tracking. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/agile_jira)

Using Personas and design thinking techniques, we created initial set of wireframes. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/ux_wireframes)

We used Jasmine framework for unit testing using karma adapter. Our unit test covered each and every filter options for search and other features (email link, API feed query construction). We used Selenium to automate the integration and functionality test. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/automated_test_selenium)

We used Jenkins services for continuous integration and testing. These automated tests are written to provide consistent and reliable protection against unintentional regressions and enable us to release frequent updates to our prototype.  With our robust development methodology, continuous integration is used to maintain and automatically monitor code quality and code convergence metrics and ultimately keeping the maintenance costs low. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/ci_jenkins)

We used New Relic Browser for continuous monitoring and to troubleshoot performance problems in the application [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/cm_new_relic)

We used Docker services to deploy our prototype. We pushed our Docker image into the DockerHub public repository [refer to our docker image in docker hub](https://registry.hub.docker.com/u/vinothgovindarajan/drug-report-app/)






