# Elk
Just try a simple test, have problems with authentication in latest version
# Run project
Using command: sudo docker-compose up -d --build
# Stop all container
Using command: docker-compose down
# List of running container
Using command: docker ps -a
# Check LOG of container
Using command: docker logs "container_name"
# Check connect to Elasticsearch
Using command: curl -X GET "http://localhost:9200"
# Port using:
Elasticsearch: 9200
Kibana: 5601
Logstash: 5044
Nginx: 80
App: 3000
# Requirement
Build in Linux environement (Unbuntu 22.04 LTS), you must install Docker & Docker Compose for testing, also Nginx for writing log app 
Check version:
- Check docker using this command: docker --version
- Check docker compose using this command: docker-compose --version
- Check Nginx server: nginx -v
# SSL/TLS step to step configure
Make sure create and bind it to folder config in elasticsearch
- Creat CA: openssl req -new -x509 -days 365 -nodes -out ca.crt -keyout ca.key -subj "/CN=elk_CA"
- Creat request CSR: openssl req -new -nodes -out node.csr -keyout node.key -subj "/CN=elk_node"
- Creat authentication for CA: openssl x509 -req -in node.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out node.crt -days 365






