# Skil-Lance Full Microservices Project Architecture

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

<img width="2598" height="1799" alt="localhost_5173_" src="https://github.com/user-attachments/assets/fac213ec-444b-416f-bf3b-5464deefd0b8" />

<img width="2573" height="2712" alt="localhost_5173_ (1)" src="https://github.com/user-attachments/assets/de9aa36d-a907-4a75-a356-a94b63074f76" />

<img width="2579" height="1395" alt="localhost_5173_dashboard_t=seller (1)" src="https://github.com/user-attachments/assets/74ec9c40-0bc7-4280-828f-a31a9508ad64" />

<img width="2561" height="2155" alt="localhost_5173_services_create-new" src="https://github.com/user-attachments/assets/06c79be4-7e2a-4bdc-9bf9-92c6717daf0c" />
