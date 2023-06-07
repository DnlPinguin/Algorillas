#!/bin/sh

REMOTE_PATH=/app/Algorillas
HOST=3.66.147.23
PORT=22

function run_ssh() {
  ssh -o StrictHostKeyChecking=no ubuntu@$HOST -p $PORT -i ~/.ssh/id_algorillas -C "cd $REMOTE_PATH && $1"
}

function run_compose() {
   run_ssh "docker-compose -f $REMOTE_PATH/production.yml $1"
}

run_ssh "mkdir -p $REMOTE_PATH/.envs/.production"
run_ssh "echo '$APP' > $REMOTE_PATH/.envs/.production/.app"
run_ssh "echo '$DB' > $REMOTE_PATH/.envs/.production/.db"

run_ssh "git pull origin main"
run_compose "build"
sleep 10
run_compose "up -d caddy"