#!/bin/bash


# Function to make requests to NGINX
make_requests() {
  for ((i=0; i<100; i++)); do
    # Select a random route
    curl http://localhost/error/server/
      # Delay a random amount of time between requests
    # DELAY=$(awk -v min=0 -v max=0.2 'BEGIN{srand(); print min+rand()*(max-min)}')
    # sleep $DELAY
  done
}

# Make requests
make_requests