FROM node:0.10-onbuild

# Install Bower
RUN npm install -g bower

# Install Grunt
RUN npm install -g grunt-cli 

# create working dir
RUN mkdir -p /home/project && \
    chmod 777 -R /home/project

# start the grunt serve
CMD cd /home/project && \
    git clone https://github.com/vinothgovindarajan/DrugReport.git && \
    cd /home/project/DrugReport && \
    npm install && \
    bower install --allow-root && \
    grunt test && \
    grunt serve

# set the working dir
WORKDIR /home/project/DrugReport

# expose port 9000
EXPOSE 9000
