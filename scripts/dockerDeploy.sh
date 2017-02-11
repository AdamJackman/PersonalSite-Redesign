#Run from project root
docker build -t personal_site .
docker run -d -p 80:80 personal_site
