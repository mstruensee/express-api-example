export PORT=1337
export MORGAN_FORMAT=dev
export MYSQL_MAX_RETRIES=1
export MYSQL_HOST=localhost
export MYSQL_PORT=3306
export MYSQL_USER=root
export MYSQL_PASSWORD=password1
export MYSQL_DATABASE=local
export MYSQL_CONNECTION_LIMIT=300
export MYSQL_WAIT_FOR_CONNECTIONS=true
export MYSQL_QUEUE_LIMIT=300
export MYSQL_ACQUIRE_TIMEOUT=60000
export MYSQL_TIMEOUT=60000
export MYSQL_DEBUG=false
node dist/server.js