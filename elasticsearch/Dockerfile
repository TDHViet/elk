ARG ELK_VERSION

# https://github.com/elastic/elasticsearch-docker
FROM docker.elastic.co/elasticsearch/elasticsearch:7.3.1

# Add your elasticsearch plugins setup here
# Example: RUN elasticsearch-plugin install analysis-icu

RUN mkdir -p /usr/share/elasticsearch/data/nodes
RUN chown -R 1000:1000 /usr/share/elasticsearch/data/nodes
RUN rm -rf /var/lib/elasticsearch