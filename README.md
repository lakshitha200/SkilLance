# SKil-Lance Full Microservices Project Architecture

![Skillance (1)](https://github.com/user-attachments/assets/396cb000-d7c2-459a-a75c-135f56e39dc0)


- Back-end : Spring Boot
- Front-end : React JS

## Services Breakdown:

### Gig Service
- Function: Handles gigs data (crud operations).
- Database: PostgreSQL

### Order Service
- Function: Manages order creation, order details, and interacts with Gig, Notification and Payment services.
- Database: PostgreSQL

### Payment Service
- Function: Manages payment processing for orders.
- Database: PostgreSQL

### Notification Service
- Function: Sends notifications to customers, triggered asynchronously using Kafka.
- Kafka message streaming
- Database: MongoDB

### Auth Service
- Function: Provides security features, including authentication and authorization. (Spring Security + JWT)
- Database: PostgreSQL

## Technologies and Services Used:
- Spring Boot
- Spring Cloud
- Eureka Server (Service Discovery) - Acts as a service registry where microservices register themselves and discover others.
- Feign Client - To enable easier inter-service communication in a RESTful manner.
- Spring Cloud Config Server with github - Centralized configuration management for all microservices.
- Spring Cloud Gateway (API Gateway) - A single-entry point that routes requests to appropriate services.
- Resilience4j - Provides resilience patterns such as Circuit Breakers, Bulkhead, Retry, and Rate Limiting.
- Kafka - Used for asynchronous communication to send notifications when an order is placed or completed, improving non-blocking communication between services.
- MongoDB
- PostgreSQL
- Docker - To containerize each microservice, making deployment easier and ensuring consistency across environments (All services are running in docker containers).
- Docker Compose - To orchestrate multiple containers (microservices, databases, Kafka) and manage their dependencies in the development environment.
- Spring Boot Actuator - To expose health, metrics, and other service information to help in monitoring and debugging.
- Testcontainers - For integration testing
- React - For Front-end

