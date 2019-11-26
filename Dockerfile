FROM tomcat:latest


COPY ./dist/ /webapps/
EXPOSE 8080

CMD ["catalina.sh", "run"]
