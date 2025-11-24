!#/bin/sh


set -e 

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'


echo "${GREEN} Starting API Composer ...${NC}";



wait_server() {

  local port=$1
  local host=$2
  local service=$3
  local max_attempt=30
  local attempt=1
}
