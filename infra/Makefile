.PHONY: help up down restart logs ps clean build

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

up: ## Start all services
	docker compose up -d

up-build: ## Build and start all services
	docker compose up -d --build

down: ## Stop all services
	docker compose down

down-volumes: ## Stop all services and remove volumes
	docker compose down -v

restart: ## Restart all services
	docker compose restart

logs: ## Show logs for all services
	docker compose logs -f

logs-%: ## Show logs for specific service (e.g., make logs-auth-service)
	docker compose logs -f $*

ps: ## Show running containers
	docker compose ps

build: ## Build all services
	docker compose build

build-%: ## Build specific service (e.g., make build-auth-service)
	docker compose build $*

clean: ## Remove all containers, networks, and volumes
	docker compose down -v --remove-orphans
	docker system prune -f

# Individual stack management
up-db: ## Start only databases
	docker compose up -d auth-db user-db

up-services: ## Start only application services
	docker compose up -d auth-service user-service

up-messaging: ## Start only messaging stack
	docker compose up -d zookeeper kafka kafka-ui

up-monitoring: ## Start only monitoring stack
	docker compose up -d prometheus grafana

up-gateway: ## Start only gateway
	docker compose up -d traefik

# Health checks
health: ## Check health of all services
	@docker compose ps --format "table {{.Name}}\t{{.Status}}"

# Database operations
db-reset: ## Reset all databases (WARNING: destroys data)
	docker compose down auth-db user-db
	docker volume rm -f microservices-platform_auth_db_data microservices-platform_user_db_data || true
	docker compose up -d auth-db user-db

# Development helpers
dev: ## Start development environment (databases + services)
	docker compose up -d auth-db user-db
	@echo "Waiting for databases to be ready..."
	@sleep 10
	docker compose up -d auth-service user-service

prod: ## Start production-like environment (all services)
	docker compose up -d
