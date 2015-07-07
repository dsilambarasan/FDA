# Prototype URL
Access our application from this URL: http://ec2-52-0-103-219.compute-1.amazonaws.com/

# DrugReport
DrugReport allows a user to quickly search for any drug related adverse events using faceted search criteria.  DrugReport is powered by openFDA (https://open.fda.gov) dataset and Application Programming Interface (API). The search result is displayed in a responsive layout so users can access DrugReport using mobile devices as well.

#Search
The search criteria include seriousness, gender, method of reporting, year and age range. The search result page displays a pie chart along with the list of most common adverse reactions. The user can also share search results via email.

# Usage
To re-create this application in other machine using the docker container: install docker first, pull our docker image from Docker Hub, then launch the docke. Follow these commands:

```
docker pull vinothgovindarajan/drug-report-app
docker run -it --rm --name drug-reporting-app drug-report-app -p 80:9000
```
# Dependencies

Docker

# Approach used to create this prototype

We identified a product owner and made him responsible to manage user requirements and development methodology to comply with RFQ requirements. He had the full authority to assign tasks, make business, product and technical decisions to develop the prototype. He was made accountable for the ultimate failure or success of our solution.

We assembled a multidisciplinary and talented team with experience in creating modern digital services. Our team included an experienced technical architect, front-end developer, back-end developer and one DevOps engineer. We made sure that our team is experienced in developing similar solutions using agile delivery methodology along with development and operations (DevOps) techniques such as continuous integration and continuous deployment.

Using Personas and design thinking techniques, we created initiatail set of wireframes. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/ux_wireframes)

We used the following open-source technologies: JavaScript, AngularJS, Bootstrap, HTML5, CSS3, Node.js, C3.js, Docker (to deploy in a container), Jenkins (continuous integration), Selenium (integration test) and Jasmine (unit test), Grunt (task runner), Bower (Configuration management)

We deployed our prototype on AWS.
http://ec2-52-25-63-237.us-west-2.compute.amazonaws.com/

We used Jasmine framework for unit testing on karma adapter. Our unit test covered each and every filter options for search and other features (email link, API feed query construction) [refer to this screenshot] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/automated_test_selenium)

We used Jenkins services for continuous integration and testing. These automated tests are written to provide consistent and reliable protection against unintentional regressions and enable us to release frequent updates to our prototype.  With our robust development methodology, continuous integration is used to maintain and automatically monitor code quality and code convergence metrics and ultimately keeping the maintenance costs low. [refer to these screenshots] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/ci_jenkins)

We used NPM for node.js package management and Bower for client side package management(AngularJS, D3, C3, jQuery)

We used New Relic Browser for continuous monitoring and to troubleshot performance problems in the application [refer to this screenshot] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/cm_new_relic)

We used Docker services to deploy our prototype. We pushed our Docker image into the DockerHub public repository, here is the URL of our Docker image: 

https://registry.hub.docker.com/u/vinothgovindarajan/drug-report-app/

We used JIRA to document user stories, manage sprints and backlogs and bug fixes. [refer to this screenshot] (https://github.com/vinothgovindarajan/DrugReport/tree/master/evidence_docs/agile_jira)






