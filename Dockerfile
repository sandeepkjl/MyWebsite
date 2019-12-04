FROM tomcat:latest


ADD ./dist/ webapps/
EXPOSE 8080

CMD ["catalina.sh", "run"]
