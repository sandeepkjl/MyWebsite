FROM tomcat:latest


ADD ./dist/MyWebsite /webapps/
EXPOSE 8080

CMD ["catalina.sh", "run"]
