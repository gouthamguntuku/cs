# Complete DevOps Engineer Computer Science Fundamentals Guide

## Part 1: Programming Fundamentals

### 1.1 Variables and Data Types
Variables are containers that store data values. Every programming language has different data types:

**Data Types:**
- **Integer (int):** Whole numbers like 42, -10, 0
- **Float/Double:** Decimal numbers like 3.14, -2.5
- **String:** Text data like "hello", "DevOps Engineer"
- **Boolean:** True or False values
- **Array/List:** Collection of values like [1, 2, 3] or ["prod", "dev", "staging"]

**Example:** In a deployment system, you might store:
```
server_count = 5 (integer)
cpu_usage = 85.5 (float)
environment = "production" (string)
is_running = true (boolean)
server_names = ["web-01", "web-02", "db-01"] (array)
```

### 1.2 Control Flow and Logic

**If-Else Statements:** Execute code based on conditions
```
if server_status == "running":
    print("Server is operational")
else if server_status == "stopped":
    print("Server needs restart")
else:
    print("Server status unknown")
```

**Loops:** Repeat code multiple times
- **For Loop:** Iterate a fixed number of times
  ```
  for i in range(1, 4):  # Run 3 times
      deploy_server(i)
  ```
- **While Loop:** Repeat until condition is false
  ```
  while cpu_usage > 80:
      scale_down_resources()
      cpu_usage = get_current_cpu()
  ```

**Practical DevOps Example:** Automatically restart failed services
```
for service in services_list:
    status = check_service(service)
    if status == "down":
        restart_service(service)
        log_incident(service)
```

### 1.3 Functions and Modularity

Functions are reusable blocks of code that perform specific tasks.

**Example:**
```
function deploy_application(app_name, version, environment):
    prepare_environment(environment)
    pull_code(app_name, version)
    run_tests(app_name)
    start_service(app_name)
    verify_deployment(app_name)
    return success_status

result = deploy_application("api-service", "2.1.0", "production")
```

Benefits: Reusability, easier testing, cleaner code organization.

### 1.4 Data Structures

**Arrays/Lists:** Ordered collection of items
```
servers = ["web-1", "web-2", "db-1", "cache-1"]
# Access: servers[0] = "web-1"
# Add: servers.append("web-3")
```

**Dictionaries/Maps:** Key-value pairs (like a real dictionary)
```
config = {
    "database_host": "db.example.com",
    "database_port": 5432,
    "pool_size": 20,
    "timeout": 30
}
# Access: config["database_host"] = "db.example.com"
```

**Stack (LIFO - Last In First Out):** Last added item is removed first
```
execution_stack = []
execution_stack.push("step1")  # Stack: [step1]
execution_stack.push("step2")  # Stack: [step1, step2]
execution_stack.pop()  # Returns "step2", Stack: [step1]
```

**Queue (FIFO - First In First Out):** First added item is removed first
```
job_queue = []
job_queue.enqueue("deploy_job_1")   # Queue: [job_1]
job_queue.enqueue("deploy_job_2")   # Queue: [job_1, job_2]
job_queue.dequeue()  # Returns "job_1", Queue: [job_2]
```

Used in CI/CD pipelines where jobs are processed in order.

### 1.5 Object-Oriented Programming (OOP)

OOP organizes code into objects that bundle data and functions together.

**Classes and Objects:**
```
class Server:
    def __init__(self, name, ip, port):
        self.name = name
        self.ip = ip
        self.port = port
        self.status = "unknown"
    
    def start(self):
        self.status = "running"
        print(f"{self.name} started")
    
    def stop(self):
        self.status = "stopped"
        print(f"{self.name} stopped")

# Create objects (instances)
web_server = Server("web-01", "192.168.1.10", 8080)
web_server.start()  # Output: web-01 started
```

**Four Key OOP Concepts:**
- **Encapsulation:** Bundle data and methods together, hide internal details
- **Inheritance:** Child classes inherit properties from parent classes
- **Polymorphism:** Objects can take multiple forms
- **Abstraction:** Hide complex implementation details

**DevOps Example:** Create a base deployment class, then specific implementations for different platforms:
```
class Deployment:
    def deploy(self): pass
    def rollback(self): pass

class KubernetesDeployment(Deployment):
    def deploy(self): apply_kubernetes_manifest()
    def rollback(self): kubectl_rollback()

class DockerDeployment(Deployment):
    def deploy(self): run_docker_container()
    def rollback(self): stop_and_revert_docker()
```

---

## Part 2: Networking Fundamentals

### 2.1 IP Addressing and Networking Basics

**What is IP?** The Internet Protocol is the fundamental protocol that allows computers to communicate.

**IPv4 Address Format:** Four numbers separated by dots, each 0-255
```
192.168.1.10
  |  |  |  |
  |  |  |  +-- Host ID
  |  |  +------ Subnet
  |  +--------- Network
  +------------ Network Class
```

**IP Address Classes:**
- **Class A:** 1.0.0.0 to 126.255.255.255 (Large networks)
- **Class B:** 128.0.0.0 to 191.255.255.255 (Medium networks)
- **Class C:** 192.0.0.0 to 223.255.255.255 (Small networks)

**Private IP Ranges (for internal networks):**
- 10.0.0.0 to 10.255.255.255
- 172.16.0.0 to 172.31.255.255
- 192.168.0.0 to 192.168.255.255

**Subnetting:** Dividing networks into smaller subnetworks

**Example:** 192.168.1.0/24
```
/24 = Subnet mask 255.255.255.0
This network contains:
- 192.168.1.0 (Network address)
- 192.168.1.1 to 192.168.1.254 (Usable IPs)
- 192.168.1.255 (Broadcast address)
```

### 2.2 DNS (Domain Name System)

DNS translates human-readable domain names into IP addresses.

**Example Process:**
1. User types: www.example.com
2. Browser asks DNS: "What's the IP for www.example.com?"
3. DNS responds: "93.184.216.34"
4. Browser connects to 93.184.216.34

**DNS Records (important for DevOps):**
- **A Record:** Maps domain to IPv4 address
  ```
  example.com  A  93.184.216.34
  ```
- **AAAA Record:** Maps domain to IPv6 address
- **CNAME Record:** Creates alias for another domain
  ```
  www.example.com  CNAME  example.com
  api.example.com  CNAME  api-server.example.com
  ```
- **MX Record:** Mail server for email
- **TXT Record:** Text records, often for verification

**DevOps Use Case:** Blue-green deployment
```
# Current production
www.example.com  A  192.168.1.100  (Blue server)

# During deployment to new server
www.example.com  A  192.168.1.101  (Green server - being tested)

# After validation, switch production
www.example.com  A  192.168.1.101  (Green becomes Blue)
# Old server can be turned off or kept as backup
```

### 2.3 Ports and Port Numbers

Ports allow multiple services to run on the same machine. Think of a server as a building and ports as different apartment numbers.

**Port Ranges:**
- **0-1023:** Well-known ports (require admin privileges)
  - 21: FTP (File Transfer)
  - 22: SSH (Secure Shell)
  - 25: SMTP (Email)
  - 53: DNS
  - 80: HTTP (Web)
  - 443: HTTPS (Secure Web)
  - 3306: MySQL
  - 5432: PostgreSQL
  - 6379: Redis

- **1024-49151:** Registered ports (user applications)
  - 3000: Node.js development
  - 5000: Flask/Python development
  - 8000-8999: Custom applications
  - 8080: Tomcat web server

- **49152-65535:** Dynamic/private ports (temporary connections)

**Example Configuration:**
```
Web Server (Port 80/443)
  ↓
Application Server (Port 8080)
  ↓
Database (Port 5432)
  ↓
Cache Server (Port 6379)

Each service listens on its own port on the same machine
```

**DevOps Firewall Rule Example:**
```
Allow traffic to port 22 (SSH) from office_ip_range
Allow traffic to port 443 (HTTPS) from anywhere
Allow traffic to port 3306 (MySQL) only from app_server_ip
Deny all other traffic
```

### 2.4 Protocols (OSI Model)

The OSI Model has 7 layers describing how data travels through networks.

**Layer 1: Physical Layer**
- Physical cables (Ethernet, fiber optic)
- Hardware connectors

**Layer 2: Data Link Layer**
- MAC addresses (Media Access Control)
- Switches, network cards
- Format: AA:BB:CC:DD:EE:FF

**Layer 3: Network Layer**
- IP addresses
- Routing (getting packets to correct destination)
- Routers

**Layer 4: Transport Layer**
- **TCP (Transmission Control Protocol):** Reliable, ordered delivery
  - Used for: HTTP/HTTPS, FTP, SSH, Databases
  - Slower but ensures delivery
  - Example: Downloading a file should be complete and uncorrupted
  
- **UDP (User Datagram Protocol):** Fast but unreliable
  - Used for: Video streaming, online games, VoIP
  - Faster because doesn't check if data arrived
  - Example: Losing one frame in a video is acceptable

**Layer 5-7: Session, Presentation, Application**
- Application layer handles actual services: HTTP, FTP, SSH, SMTP

**Data Flow Example:**
```
Application sends: "GET /api/users HTTP/1.1"
        ↓
Transport Layer adds port numbers
        ↓
Network Layer adds IP addresses
        ↓
Data Link Layer adds MAC addresses
        ↓
Physical Layer transmits as electrical signals
        ↓
(Reverse process at destination)
```

---

## Part 3: Protocols and Communication

### 3.1 HTTP/HTTPS

**HTTP (HyperText Transfer Protocol):** Protocol for transferring web pages and data

**HTTP Methods (Verbs):**
- **GET:** Retrieve data without modifying anything
  ```
  GET /api/users
  Returns: List of all users
  ```
- **POST:** Create new data
  ```
  POST /api/users
  Body: {"name": "John", "email": "john@example.com"}
  ```
- **PUT:** Update entire resource
  ```
  PUT /api/users/1
  Body: {"name": "Jane", "email": "jane@example.com"}
  ```
- **PATCH:** Partial update
  ```
  PATCH /api/users/1
  Body: {"email": "newemail@example.com"}
  ```
- **DELETE:** Remove data
  ```
  DELETE /api/users/1
  ```

**HTTP Status Codes:**
- **2xx (Success):**
  - 200 OK: Request succeeded
  - 201 Created: Resource created successfully
  
- **3xx (Redirection):**
  - 301 Moved Permanently: Resource moved, update bookmarks
  - 302 Found: Temporary redirect
  
- **4xx (Client Error):**
  - 400 Bad Request: Invalid request format
  - 401 Unauthorized: Authentication needed
  - 403 Forbidden: Authenticated but not allowed
  - 404 Not Found: Resource doesn't exist
  
- **5xx (Server Error):**
  - 500 Internal Server Error: Server error
  - 503 Service Unavailable: Server temporarily down

**HTTPS:** HTTP + SSL/TLS encryption for security

**DevOps Health Check Example:**
```
def health_check():
    response = GET "https://api.example.com/health"
    if response.status == 200:
        application_is_healthy = true
    else:
        alert_monitoring_system()
```

### 3.2 SSH (Secure Shell)

SSH provides secure remote access to servers.

**SSH Components:**
- **Client:** Your local machine
- **Server:** Remote machine you want to connect to
- **Port:** 22 (standard)

**How SSH Works:**
1. Client connects to server on port 22
2. Server sends public key to client
3. Client and server negotiate encryption
4. Authentication (password or key-based)
5. Encrypted command channel opens

**SSH Keys (Better than passwords):**
```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa
# Creates: id_rsa (private key - keep secret) and id_rsa.pub (public key - share)

# Add public key to server
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Connect without password
ssh user@server_ip
```

**DevOps Use Case:**
```
# Automated deployment script connects to servers
ssh deploy@web-server-1 "cd /app && git pull && systemctl restart app"
ssh deploy@web-server-2 "cd /app && git pull && systemctl restart app"

# All servers are accessed securely and deployment is automated
```

### 3.3 FTP/SFTP

**FTP (File Transfer Protocol):** Transfer files between computers
- Port: 21
- Unencrypted (security risk)
- Mostly deprecated

**SFTP (SSH File Transfer Protocol):** Secure FTP
- Uses SSH (port 22)
- Encrypted
- Modern replacement for FTP

**DevOps Example:**
```
# Upload configuration files securely
sftp deploy@config-server:~
put app-config.yaml
put database.conf

# Download application logs
sftp logs@log-server:~/logs
get application.log
get error.log
```

### 3.4 SSL/TLS and Certificates

SSL/TLS encrypts communication between client and server.

**How It Works:**
1. Client connects to server
2. Server sends certificate with public key
3. Client verifies certificate (issued by trusted authority)
4. Client and server perform key exchange
5. Encrypted connection established

**SSL Certificate Contents:**
```
Subject: example.com
Issuer: Let's Encrypt
Valid From: Jan 1, 2024
Valid Until: Jan 1, 2025
Public Key: <long hex string>
Signature: <long hex string>
```

**Certificate Types:**
- **Self-signed:** Created by you (untrusted by browsers)
- **CA-signed:** From trusted Certificate Authority
- **Wildcard:** *.example.com (covers all subdomains)

**DevOps Certificate Management:**
```
# Generate CSR (Certificate Signing Request)
openssl req -new -key private.key -out certificate.csr

# Submit to CA or use Let's Encrypt
certbot certonly --standalone -d example.com

# Install certificate on web server
cp certificate.crt /etc/ssl/certs/
cp private.key /etc/ssl/private/

# Configure web server to use certificate (HTTPS on port 443)
```

---

## Part 4: APIs (Application Programming Interfaces)

### 4.1 REST API Principles

REST (Representational State Transfer) is an architectural style for web services.

**REST Principles:**
- **Client-Server:** Clear separation between requester and provider
- **Stateless:** Server doesn't store client context; each request is independent
- **Cacheable:** Responses can be cached to improve performance
- **Uniform Interface:** Consistent resource naming and operations

**RESTful API Design:**

**Resource-Oriented (Not action-oriented):**
```
WRONG:
GET /api/getUsers
GET /api/deleteUser/5
POST /api/createUser

CORRECT:
GET /api/users          # Get all users
GET /api/users/5        # Get user with ID 5
POST /api/users         # Create new user
PUT /api/users/5        # Update user 5
DELETE /api/users/5     # Delete user 5
```

**API Response Format (JSON):**
```json
{
  "success": true,
  "status_code": 200,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "message": "User retrieved successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "status_code": 404,
  "error": "User not found",
  "error_code": "USER_NOT_FOUND"
}
```

### 4.2 API Authentication and Authorization

**Authentication:** Verifying who you are
**Authorization:** Determining what you're allowed to do

**API Key Authentication:**
```
Request Header:
X-API-Key: abc123xyz789

Server verifies the key is valid
```

**OAuth 2.0:** Industry standard for delegated access
```
1. User clicks "Login with Google"
2. Redirected to Google's login page
3. User logs in and authorizes the app
4. Google redirects back with authorization code
5. App exchanges code for access token
6. App uses token to access user data
```

**JWT (JSON Web Token):** Secure token-based authentication
```
Token Structure: header.payload.signature

header (Base64):
{
  "alg": "HS256",
  "typ": "JWT"
}

payload (Base64):
{
  "user_id": 123,
  "username": "john",
  "exp": 1642012345,
  "iat": 1641408345
}

signature: HMAC-SHA256(header.payload, secret_key)

Complete token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjN9.signature

Usage: Authorization: Bearer eyJhbGciOi...
```

### 4.3 API Rate Limiting and Throttling

Protects APIs from abuse and ensures fair usage.

**Rate Limiting Examples:**
```
# REST API rate limits
1000 requests per hour per API key
50 requests per second per user

# Response headers indicate current status
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1642012345

# If limit exceeded
HTTP 429 Too Many Requests
Retry-After: 60  (wait 60 seconds)
```

**DevOps Use Case:** Prevent deployment service overload
```
# Only allow 5 concurrent deployments
# Queue additional deployment requests
# Process them as current deployments complete
```

### 4.4 Webhooks

Webhooks are callback URLs that receive events from external systems.

**How Webhooks Work:**
```
1. You register webhook URL with GitHub:
   https://your-ci-server.com/webhook/github

2. You push code to GitHub

3. GitHub automatically sends POST request to your webhook URL:
   POST https://your-ci-server.com/webhook/github
   {
     "event": "push",
     "repository": "my-app",
     "branch": "main",
     "commits": [...],
     "pusher": "john"
   }

4. Your CI server receives the event

5. CI server automatically starts build process
```

**DevOps Webhook Examples:**
- GitHub → Trigger CI/CD pipeline on code push
- Monitoring tool → Alert DevOps team on threshold breach
- Load balancer → Notify when scaling needed
- Deployment service → Notify monitoring dashboard when deployment completes

---

## Part 5: Virtualization and Containerization

### 5.1 Virtual Machines (VMs)

VMs are software-based computers running on physical hardware.

**VM Architecture:**
```
Physical Server Hardware
        ↓
Hypervisor (VMware, KVM, Hyper-V)
    ↓   ↓   ↓
   VM1 VM2 VM3
   Linux Windows Linux
   1GB   2GB   1GB
```

**Benefits:**
- Multiple operating systems on one server
- Isolation (problems in one VM don't affect others)
- Easy backup and migration
- Resource allocation per VM

**Drawback:**
- Each VM includes full OS (heavy, ~gigabytes each)
- Slower startup time
- More resource consumption

**DevOps Use Case:**
```
One physical server runs multiple VMs:
- VM1: Web server (Linux)
- VM2: Database server (Linux)
- VM3: Load balancer (Linux)
- VM4: Testing environment (Windows)

Easily scale by creating new VMs
```

### 5.2 Containers and Docker

Containers are lightweight, isolated environments without full OS overhead.

**Container Architecture:**
```
Physical Server Hardware
        ↓
Host Operating System (Linux kernel)
        ↓
Container Runtime (Docker)
    ↓   ↓   ↓
  Container1 Container2 Container3
  (App + libs) (App + libs) (App + libs)
  150MB       150MB       150MB
  Starts in milliseconds
```

**Docker Concepts:**

**Image:** Blueprint for containers (like class in OOP)
```
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y python3
COPY app.py /app/
WORKDIR /app
CMD ["python3", "app.py"]
```

**Container:** Running instance of image (like object in OOP)
```
docker run -d -p 8080:8080 --name my-app my-app-image
# Creates container named "my-app" from "my-app-image"
# Maps port 8080 from container to 8080 on host
# -d means run in background
```

**Registry:** Repository for storing images
```
docker tag my-app:1.0 docker.io/username/my-app:1.0
docker push docker.io/username/my-app:1.0
# Image now available for others to use
```

**Dockerfile Example:**
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "index.js"]

# Build: docker build -t my-node-app:1.0 .
# Run: docker run -d -p 3000:3000 my-node-app:1.0
```

**Container vs VM Comparison:**
```
VMs:
- Size: 1-5 GB each
- Startup: Seconds to minutes
- Overhead: Full OS for each VM

Containers:
- Size: 50-500 MB each
- Startup: Milliseconds
- Overhead: Minimal (shared kernel)
- Density: Hundreds of containers per server
```

### 5.3 Kubernetes Orchestration

Kubernetes manages containers across multiple machines.

**Key Concepts:**

**Cluster:** Multiple machines running Kubernetes
```
Kubernetes Cluster
├── Master/Control Plane
│   ├── API Server
│   ├── Scheduler
│   ├── Controller Manager
│   └── etcd (data store)
├── Worker Node 1
│   ├── Kubelet (node agent)
│   ├── Container Runtime
│   └── Kube-proxy
├── Worker Node 2
└── Worker Node 3
```

**Pod:** Smallest deployable unit (usually one container)
```
Pod: Similar to container but with Kubernetes management
- Can contain multiple containers (rare)
- Networking shared between containers in pod
- Storage volumes can be shared
```

**Deployment:** Manages replicas of pods
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3  # Run 3 copies
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: my-app:1.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
```

**Service:** Exposes pods to network traffic
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-app-service
spec:
  type: LoadBalancer
  selector:
    app: web-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
```

**Scaling Example:**
```bash
# Initially 3 replicas
kubectl scale deployment web-app --replicas=5

# Now 5 replicas running
# If one crashes, Kubernetes automatically creates replacement
# If traffic drops, scale back down
```

---

## Part 6: CI/CD (Continuous Integration/Continuous Deployment)

### 6.1 CI/CD Concepts

**Continuous Integration (CI):** Automatically test code when pushed

**Continuous Deployment (CD):** Automatically deploy tested code to production

**Pipeline Stages:**
```
Developer pushes code
        ↓
Triggered: Run automated tests
        ↓
If tests pass: Build application
        ↓
If build succeeds: Deploy to staging
        ↓
Run integration tests on staging
        ↓
If approved: Deploy to production
```

### 6.2 Popular CI/CD Tools

**Jenkins:**
```groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        
        stage('Deploy Staging') {
            steps {
                sh './deploy.sh staging'
            }
        }
        
        stage('Approve Production') {
            steps {
                input 'Deploy to production?'
            }
        }
        
        stage('Deploy Production') {
            steps {
                sh './deploy.sh production'
            }
        }
    }
    
    post {
        always {
            junit 'target/test-results.xml'
        }
        failure {
            emailext to: 'team@example.com',
                     subject: 'Build failed',
                     body: 'Check Jenkins for details'
        }
    }
}
```

**GitHub Actions:**
```yaml
name: Deploy Application

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Build Docker image
      run: docker build -t my-app:${{ github.sha }} .
    
    - name: Push to registry
      run: |
        docker tag my-app:${{ github.sha }} registry.example.com/my-app:latest
        docker push registry.example.com/my-app:latest
    
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/my-app my-app=registry.example.com/my-app:latest
        kubectl rollout status deployment/my-app
    
    - name: Notify Slack
      if: always()
      uses: slackapi/slack-github-action@v1
```

**GitLab CI/CD:**
```yaml
image: ubuntu:20.04

variables:
  REGISTRY: registry.gitlab.com
  IMAGE_NAME: $REGISTRY/$CI_PROJECT_PATH

stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - apt-get update && apt-get install -y build-essential
    - make build
  artifacts:
    paths:
      - dist/
    expire_in: 1 week

test:
  stage: test
  dependencies:
    - build
  script:
    - make test
  coverage: '/Coverage: (\d+\.\d+\%)/'

deploy_staging:
  stage: deploy
  environment: staging
  script:
    - docker build -t $IMAGE_NAME:staging .
    - docker push $IMAGE_NAME:staging
    - kubectl set image deployment/app app=$IMAGE_NAME:staging -n staging
  only:
    - main

deploy_production:
  stage: deploy
  environment: production
  script:
    - docker build -t $IMAGE_NAME:$CI_COMMIT_TAG .
    - docker push $IMAGE_NAME:$CI_COMMIT_TAG
    - kubectl set image deployment/app app=$IMAGE_NAME:$CI_COMMIT_TAG -n production
  only:
    - tags
  when: manual
```

### 6.3 Deployment Strategies

**Blue-Green Deployment:**
```
Current (Blue): Production - running v1.0
        ↓ (running)
Prepare (Green): Staging - running v2.0
        ↓ (test green thoroughly)
Switch traffic to Green
        ↓
Green becomes new Blue
Old Blue becomes standby

Rollback: Just switch traffic back to old Blue (instant)
```

**Canary Deployment:**
```
Existing: 100% traffic to v1.0
        ↓
Deploy v2.0 to 5% of traffic
        ↓
Monitor metrics and errors
        ↓
If all good: Increase to 25%
        ↓
Monitor again
        ↓
If all good: Increase to 50%
        ↓
Complete rollout to 100%

Rollback: Route traffic back to v1.0 (immediate)
```

**Rolling Deployment:**
```
5 servers running v1.0
        ↓
Update server 1 to v2.0 (4x v1.0, 1x v2.0)
        ↓
Verify server 1 is healthy
        ↓
Update server 2 to v2.0 (3x v1.0, 2x v2.0)
        ↓
Continue until all updated

Zero downtime, but mixed versions briefly
```

---

## Part 7: Infrastructure and Cloud Services

### 7.1 Infrastructure as Code (IaC)

Write infrastructure configuration in code files instead of manual setup.

**Terraform Example:**
```hcl
# Define provider (AWS)
provider "aws" {
  region = "us-east-1"
}

# Create VPC (Virtual Private Cloud)
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "main-vpc"
  }
}

# Create subnet
resource "aws_subnet" "main" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "main-subnet"
  }
}

# Create security group (firewall rules)
resource "aws_security_group" "web" {
  name   = "web-sg"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create EC2 instance
resource "aws_instance" "web_server" {
  ami                    = "ami-0c55b159cbfafe1f0"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.main.id
  vpc_security_group_ids = [aws_security_group.web.id]

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y nginx
              sudo systemctl start nginx
              EOF

  tags = {
    Name = "web-server-1"
  }
}

# Output the IP address
output "server_ip" {
  value = aws_instance.web_server.public_ip
}

# Apply configuration:
# terraform init
# terraform plan     (preview changes)
# terraform apply    (create resources)
# terraform destroy  (delete resources)
```

**Ansible Example (Configuration Management):**
```yaml
---
- name: Deploy web application
  hosts: web_servers
  become: yes
  
  vars:
    app_version: "2.1.0"
    app_port: 8080
    app_user: "app"
  
  tasks:
    - name: Update system packages
      yum:
        name: "*"
        state: latest
    
    - name: Install required packages
      yum:
        name:
          - git
          - python3
          - python3-pip
        state: present
    
    - name: Create application user
      user:
        name: "{{ app_user }}"
        state: present
        shell: /bin/bash
    
    - name: Clone application repository
      git:
        repo: "https://github.com/company/app.git"
        dest: "/home/{{ app_user }}/app"
        version: "v{{ app_version }}"
      become_user: "{{ app_user }}"
    
    - name: Install Python dependencies
      pip:
        requirements: "/home/{{ app_user }}/app/requirements.txt"
        virtualenv: "/home/{{ app_user }}/venv"
    
    - name: Create systemd service file
      copy:
        content: |
          [Unit]
          Description=Web Application
          After=network.target
          
          [Service]
          Type=simple
          User={{ app_user }}
          WorkingDirectory=/home/{{ app_user }}/app
          ExecStart=/home/{{ app_user }}/venv/bin/python app.py
          Restart=always
          
          [Install]
          WantedBy=multi-user.target
        dest: /etc/systemd/system/app.service
    
    - name: Start and enable service
      systemd:
        name: app
        state: started
        enabled: yes
        daemon_reload: yes
    
    - name: Wait for service to be ready
      wait_for:
        port: "{{ app_port }}"
        delay: 5
        timeout: 30
    
    - name: Verify application is responding
      uri:
        url: "http://localhost:{{ app_port }}/health"
        method: GET
      register: health_check
    
    - name: Notify on failure
      debug:
        msg: "Health check failed!"
      when: health_check.status != 200

# Run playbook:
# ansible-playbook -i inventory.ini deploy.yml
```

**Comparison:**
- **Terraform:** Infrastructure provisioning (create VMs, networks, storage)
- **Ansible:** Configuration management (install software, configure services)
- Together: Create infrastructure AND configure it

### 7.2 Cloud Providers (AWS, Azure, GCP)

**AWS (Amazon Web Services):**

Major services DevOps uses:
```
EC2: Virtual machines in cloud
RDS: Managed relational databases
S3: Object storage (files, backups)
Lambda: Serverless functions
CloudFront: Content delivery network (CDN)
VPC: Virtual private network
ELB: Elastic Load Balancer
CloudWatch: Monitoring and logging
IAM: Access control
```

**AWS EC2 Deployment Example:**
```bash
# Create security group
aws ec2 create-security-group \
  --group-name web-sg \
  --description "Security group for web servers"

# Allow HTTP traffic
aws ec2 authorize-security-group-ingress \
  --group-name web-sg \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0

# Launch EC2 instance
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t2.micro \
  --key-name my-key \
  --security-groups web-sg \
  --count 1

# Create load balancer
aws elbv2 create-load-balancer \
  --name my-lb \
  --subnets subnet-12345678 subnet-87654321

# Register instances with load balancer
aws elbv2 register-targets \
  --target-group-arn arn:aws:elasticloadbalancing:... \
  --targets Id=i-1234567890abcdef0
```

**Azure (Microsoft Cloud):**

Major services DevOps uses:
```
Virtual Machines: VMs in cloud
App Service: Managed web applications
Azure SQL: Managed databases
Blob Storage: Cloud file storage
Azure DevOps: Build, test, deployment pipelines
Key Vault: Secrets and keys management
Application Insights: Monitoring
Azure Container Registry: Docker image storage
```

**GCP (Google Cloud Platform):**

Major services DevOps uses:
```
Compute Engine: Virtual machines
Cloud SQL: Managed databases
Cloud Storage: Object storage
Cloud Run: Serverless containers
Google Kubernetes Engine: Managed Kubernetes
Cloud Pub/Sub: Message queuing
Cloud Monitoring: Observability
Artifact Registry: Container image storage
```

### 7.3 Load Balancing

Distributes incoming traffic across multiple servers.

**Load Balancer Types:**

**Layer 4 (Transport Layer) - Network Load Balancer:**
```
Fast, handles millions of requests
Uses IP protocol information
Example: Round-robin distribution

Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A
Request 5 → Server B
Request 6 → Server C
```

**Layer 7 (Application Layer) - Application Load Balancer:**
```
Intelligent routing based on request content
Routes based on: URL path, hostname, headers

Example:
Request to api.example.com → API servers
Request to static.example.com → Static content servers
Request /api/users → User service
Request /api/products → Product service
```

**Load Balancer Configuration Example:**
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-lb
spec:
  type: LoadBalancer  # Creates external load balancer
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  sessionAffinity: ClientIP  # Sticky sessions
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 3600
```

**Health Checks:**
```
Load Balancer constantly checks if servers are healthy

Check every 10 seconds: GET http://server:8080/health
If no response within 5 seconds: Mark as unhealthy
If unhealthy for 2 consecutive checks: Remove from rotation
When server recovers: Add back to rotation

This ensures traffic only goes to working servers
```

### 7.4 Storage Solutions

**Block Storage (EBS, Volumes):**
```
Attached to one server at a time
Similar to physical hard drive
High performance
Can be encrypted
Good for: Databases, applications, OS

Example: AWS EBS volume attached to EC2 instance
```

**Object Storage (S3, Blob Storage):**
```
Store any type of file (documents, images, videos, backups)
Unlimited scalability
Pay for what you use
HTTP access from anywhere

Example:
s3://my-bucket/backups/database-2024-01-15.sql
s3://my-bucket/logs/application.log
s3://my-bucket/images/product-001.jpg

Access via S3 API:
PUT /bucket/key         → Upload file
GET /bucket/key         → Download file
DELETE /bucket/key      → Delete file
```

**Database Storage:**
```
Relational (SQL):
- PostgreSQL, MySQL, Oracle
- Structured data
- ACID transactions
- Used for: Business applications, financial systems

NoSQL (Non-relational):
- MongoDB, DynamoDB, Redis
- Flexible schema
- High scalability
- Used for: Real-time data, caching, sessions
```

### 7.5 Backup and Disaster Recovery

**Backup Strategies:**

**Full Backup:**
```
Backup entire system
Size: Large
Time: Takes long time
Restore time: Fast (have everything)
Frequency: Daily or weekly
Example: 100GB database → 100GB backup
```

**Incremental Backup:**
```
Backup only changes since last backup
Size: Small
Time: Quick
Restore time: Need full + all incremental backups
Frequency: Daily

Example:
Day 1: Full backup (100GB) + Full copy
Day 2: Changes only (5GB) + Incremental copy
Day 3: Changes only (3GB) + Incremental copy
To restore: Restore Day 1 full + apply Day 2 + apply Day 3
```

**Backup Strategy (3-2-1 Rule):**
```
3 copies of data
2 different storage types
1 copy offsite

Example:
Copy 1: Production database
Copy 2: Daily backup on local SAN
Copy 3: Daily backup uploaded to cloud storage offsite

If production fails: Restore from Copy 2 (fast)
If local storage destroyed: Restore from Copy 3 (cloud)
```

**DevOps Backup Script Example:**
```bash
#!/bin/bash

# Variables
DB_NAME="production_db"
BACKUP_DIR="/backups"
S3_BUCKET="s3://company-backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create database backup
pg_dump $DB_NAME | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# Upload to S3 (offsite backup)
aws s3 cp $BACKUP_DIR/db_$DATE.sql.gz $S3_BUCKET/

# Verify backup
if aws s3 ls $S3_BUCKET/db_$DATE.sql.gz; then
    echo "Backup successful: db_$DATE.sql.gz"
    
    # Delete old backups (keep last 30 days)
    aws s3 rm $S3_BUCKET --recursive --exclude "*" \
        --include "db_*.sql.gz" \
        --older-than 30
else
    echo "Backup failed!"
    exit 1
fi

# Restore example (when needed):
# aws s3 cp $S3_BUCKET/db_$DATE.sql.gz .
# gunzip db_$DATE.sql.gz
# psql $DB_NAME < db_$DATE.sql
```

---

## Part 8: Monitoring, Logging, and Observability

### 8.1 Monitoring Basics

Monitoring tracks system health and performance.

**Metrics to Monitor:**

**System Metrics:**
```
CPU Usage: % of processor being used
- Alert if > 80%

Memory Usage: RAM consumption
- Alert if > 85%

Disk Usage: Storage space used
- Alert if > 90%

Network Traffic: Data in/out
- Alert if unusual spikes
```

**Application Metrics:**
```
Request Rate: Requests per second
- Normal: 1000 req/sec
- Alert if spike to 5000

Response Time: How long requests take
- Normal: 100ms
- Alert if > 500ms

Error Rate: % of failed requests
- Normal: 0.1%
- Alert if > 1%

Active Users: Concurrent users
- Peak: 5000 users
- Alert if > 8000
```

**Database Metrics:**
```
Query Latency: Time to execute queries
Connections: Active database connections
Replication Lag: Delay between master and replicas
Cache Hit Rate: % of requests served from cache
```

### 8.2 Monitoring Tools

**Prometheus + Grafana:**

**Prometheus** collects metrics, **Grafana** visualizes them

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'api-server'
    static_configs:
      - targets: ['localhost:8080']
  
  - job_name: 'database'
    static_configs:
      - targets: ['localhost:5432']

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['localhost:9093']

# alert_rules.yml
groups:
  - name: application
    rules:
      - alert: HighCPUUsage
        expr: node_cpu_usage > 80
        for: 5m
        annotations:
          summary: "High CPU usage detected"
      
      - alert: HighErrorRate
        expr: rate(http_errors_total[5m]) > 0.01
        for: 10m
        annotations:
          summary: "High error rate detected"
```

**CloudWatch (AWS):**
```
Automatically collects metrics from AWS services
Can create custom metrics
Set alarms based on metrics

Example alarm:
If CPU > 80% for 10 minutes
Send SNS notification to DevOps team
Trigger auto-scaling policy
```

**DataDog:**
```
Commercial monitoring platform
Collects metrics from servers and applications
APM (Application Performance Monitoring)
Log aggregation
Real-time alerts
```

### 8.3 Logging

Logs record events and errors for debugging.

**Log Levels:**
```
DEBUG: Detailed information for debugging
INFO: General informational messages
WARN: Warning messages (something unexpected)
ERROR: Error messages (something failed)
FATAL: Critical errors (system crash)

Example log entries:
[DEBUG] Database connection pool size: 20
[INFO] User 123 logged in
[WARN] CPU usage above 80%
[ERROR] Failed to connect to payment service
[FATAL] Out of memory, system shutting down
```

**Log Format (Structured Logging):**
```json
{
  "timestamp": "2024-01-15T10:30:45.123Z",
  "level": "ERROR",
  "service": "api-server",
  "component": "payment-service",
  "message": "Payment processing failed",
  "error": "Connection timeout",
  "error_code": "PAYMENT_TIMEOUT",
  "user_id": 12345,
  "transaction_id": "txn_abc123",
  "duration_ms": 5000,
  "retry_count": 3
}
```

### 8.4 Centralized Logging

**ELK Stack (Elasticsearch, Logstash, Kibana):**
```
Servers send logs → Logstash → Elasticsearch → Kibana

Logstash: Processes logs (filters, transforms)
Elasticsearch: Stores and indexes logs
Kibana: Visualizes logs, search and analysis

Example:
Raw log: [ERROR] Payment failed at 2024-01-15 10:30:45
Logstash processes: Extract timestamp, level, message
Elasticsearch indexes: Searchable, sortable
Kibana: Create dashboard showing error trends
```

**Loki (Lightweight alternative):**
```
Designed for Kubernetes environments
Lower storage requirements than ELK
Works with Grafana

Example:
Labels: {service="api", environment="prod", region="us-east"}
Log line: {"error": "connection refused", "attempt": 3}

Query in Grafana:
{service="api", environment="prod"} | json | error="connection refused"
```

### 8.5 Alerting

**Alert Configuration Example:**
```yaml
# AlertManager configuration
global:
  resolve_timeout: 5m

route:
  receiver: 'devops-team'
  group_by: ['alertname', 'cluster', 'service']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  routes:
    - match:
        severity: critical
      receiver: 'page-on-call'
      continue: true
    
    - match:
        severity: warning
      receiver: 'slack-notifications'

receivers:
  - name: 'devops-team'
    email_configs:
      - to: 'devops@company.com'
        from: 'alerts@company.com'
        smarthost: 'smtp.company.com:587'
  
  - name: 'page-on-call'
    pagerduty_configs:
      - service_key: 'YOUR_SERVICE_KEY'
  
  - name: 'slack-notifications'
    slack_configs:
      - api_url: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL'
        channel: '#alerts'
        title: 'Alert: {{ .GroupLabels.alertname }}'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'
```

---

## Part 9: Security in DevOps

### 9.1 Authentication and Authorization

**Authentication:** Who are you?
**Authorization:** What are you allowed to do?

**SSH Keys (Already covered):**
```
Asymmetric encryption: Public key (share) + Private key (keep secret)
Better than passwords (can't be guessed)
Automated authentication for CI/CD systems
```

**OAuth 2.0 in DevOps:**
```
CI/CD system logs in as: "CI bot"
Gets access token from identity provider
Uses token to access resources (GitHub, cloud providers)

No password stored: Uses token instead
Token can expire: Must refresh before expiration
Token can be revoked: Immediate access loss
Logs all token usage: Audit trail
```

**Multi-Factor Authentication (MFA):**
```
Something you know: Password
Something you have: Phone, security key
Something you are: Fingerprint, face

At least 2 required (usually password + phone)
Even if password stolen: Can't access without second factor
```

### 9.2 Secrets Management

**Secret Types:**
- Database passwords
- API keys
- Private SSH keys
- Cloud credentials
- Encryption keys
- Tokens

**Bad Practice:**
```bash
# DON'T DO THIS
username=admin
password=MySecurePassword123
api_key=sk_live_abc123xyz789
secret_token=token_12345

# Or in code
def connect_database():
    connection_string = "postgresql://admin:MyPassword@db.example.com"
    return connect(connection_string)

# Or in environment variables
export DB_PASSWORD="MyPassword123"
```

**Good Practice (Using HashiCorp Vault):**
```bash
# Store secrets in Vault (centralized secret manager)
vault kv put secret/database/prod \
  username="db_user" \
  password="secure_random_password"

vault kv put secret/api/stripe \
  api_key="sk_live_secure_key"

# In application code
secret = vault.kv.read("secret/database/prod")
db_user = secret.data['username']
db_pass = secret.data['password']

# Vault logs access to secrets
# Can revoke credentials instantly
# Secrets never appear in logs or code
# Access controlled via policies
```

**Kubernetes Secrets:**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  username: ZGJfdXNlcg==  # base64 encoded
  password: c2VjdXJlX3Bhc3N3b3Jk

---
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:1.0
    env:
    - name: DB_USER
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: password
```

### 9.3 Encryption

**Data at Rest (stored on disk):**
```
Database encryption
- Database encrypts data before storing on disk
- Only authorized applications can decrypt

Disk encryption
- Full disk encryption (BitLocker, LUKS)
- If physical drive stolen: Can't read data

Backup encryption
- Encrypt backups when storing
- Encrypt during transfer to cloud
```

**Data in Transit (moving across network):**
```
HTTPS/TLS
- All web traffic encrypted
- Prevents eavesdropping

VPN
- Encrypted tunnel between networks
- Secure remote access

SSH
- Encrypted shell access
- Secure file transfers
```

**Example TLS Configuration:**
```nginx
# Nginx web server
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Certificate and key
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    
    # Strong encryption
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # HSTS: Force HTTPS
    add_header Strict-Transport-Security "max-age=31536000" always;
    
    location / {
        proxy_pass http://backend;
    }
}
```

### 9.4 Network Security

**Firewall Rules:**
```
Allow SSH (port 22) only from office IPs
Allow HTTP/HTTPS (ports 80, 443) from anywhere
Allow MySQL (port 3306) only from app servers
Allow database replication (port 5432) between DB servers
Deny everything else

Example AWS Security Group:
Inbound:
  - Port 22: CIDR 203.0.113.0/24 (office IPs only)
  - Port 80: CIDR 0.0.0.0/0 (anywhere)
  - Port 443: CIDR 0.0.0.0/0 (anywhere)
  - Port 5432: Security group sg-12345 (app servers)

Outbound:
  - All traffic to 0.0.0.0/0 (allow all outbound)
```

**Network Segmentation:**
```
VPC: Virtual Private Cloud (isolated network)
├── Public Subnet
│   └── Load Balancer (accessible from internet)
├── Private Subnet 1
│   └── Application Servers (no direct internet)
├── Private Subnet 2
│   └── Database Servers (only app servers can access)
└── Bastion Host (gateway for admin access)

Traffic flow:
Internet → Load Balancer → App Servers → Database
(Database isolated from internet)
```

### 9.5 Scanning and Compliance

**Container Image Scanning:**
```
Before running container:
1. Scan for vulnerable dependencies
2. Scan for malware
3. Check for insecure configurations
4. Verify base image is up-to-date

Tools: Trivy, Grype, Aqua

Example:
trivy image myapp:1.0
# Output: 5 vulnerabilities found
# - CVE-2024-01234: High severity
# Fails deployment until fixed
```

**Infrastructure Scanning:**
```
Regularly scan infrastructure for:
- Unencrypted databases
- Overly permissive firewall rules
- Outdated software versions
- Unused resources (security risk)
- Missing backup configurations

Tools: AWS Config, CloudTrail, Checkov
```

---

## Part 10: Version Control and Collaboration

### 10.1 Git Basics

Git tracks code changes over time.

**Basic Commands:**
```bash
# Clone repository
git clone https://github.com/company/app.git

# Create new branch
git checkout -b feature/new-feature

# Make changes
# ... edit files ...

# Stage changes
git add .

# Commit changes
git commit -m "Add new feature: user authentication"

# Push to remote
git push origin feature/new-feature

# Create Pull Request (on GitHub)
# Request review from team members
# Get approval
# Merge to main
```

**Common Workflows:**

**Centralized Workflow:**
```
Everyone commits directly to main branch
Simple but risky (no code review)
Good for: Small teams, solo projects
```

**Feature Branch Workflow:**
```
main (always production-ready)
├── feature/login
├── feature/payments
└── bugfix/session-timeout

Process:
1. Create branch from main
2. Work on feature
3. Push branch
4. Create Pull Request
5. Code review by others
6. Merge to main
7. Delete branch
```

**Git Flow:**
```
main (production releases)
develop (integration branch)
├── feature/* (new features)
├── release/* (release prep)
└── hotfix/* (urgent production fixes)

Used in: Large teams, strict release schedule
```

**GitHub Flow (used by GitHub):**
```
main (always production-ready)
├── feature-1
├── feature-2
└── fix-bug-123

Process:
1. Create branch
2. Commit and push
3. Create Pull Request
4. Discuss and review
5. Merge when approved
6. Deploy

Simple, continuous deployment friendly
```

### 10.2 Git Workflows in DevOps

**Pre-commit Hooks:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run tests before commit
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed, commit aborted"
  exit 1
fi

# Lint code
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed, commit aborted"
  exit 1
fi

# Check for secrets
if git grep -P "(?i)(password|secret|key|token).*=" -- ':!*.md'; then
  echo "Potential secrets detected, commit aborted"
  exit 1
fi

exit 0
```

**Commit Message Standards:**
```
Format: <type>(<scope>): <subject>

<body>

<footer>

Types: feat, fix, docs, style, refactor, test, chore
Scope: Component affected
Subject: What changed
Body: Why and how changed
Footer: Related issues

Example:
feat(auth): implement JWT token refresh

Added automatic token refresh logic to prevent
session expiration during long user sessions.

Tokens now refresh silently when 80% of TTL elapsed.
Added new endpoint POST /api/auth/refresh.

Fixes #1234
Related to: #1235
```

---

## Part 11: Database Administration

### 11.1 Database Concepts

**ACID Properties (Relational Databases):**

**Atomicity:** Transaction all-or-nothing
```
Transfer $100 from Account A to B:
1. Debit $100 from A
2. Credit $100 to B

If step 1 succeeds but step 2 fails:
Both changes are rolled back (atomic)
Account B doesn't receive money, Account A not charged
```

**Consistency:** Database stays valid
```
Before: A=$1000, B=$500, Total=$1500
Transfer: $100 from A to B
After: A=$900, B=$600, Total=$1500 (still valid)
```

**Isolation:** Transactions don't interfere
```
Transaction 1: Reading A
Transaction 2: Modifying A

Transaction 1 sees consistent state (either before or after T2, not mid-change)
```

**Durability:** Committed data persists
```
Transaction committed to database
Power failure, server crash happens
Data still there (survives failure)
```

### 11.2 Database Replication

**Master-Slave Replication:**
```
Master (Primary)
├── Accepts writes
├── Logs all changes
└── Sends changes to slaves

Slave 1 (Read-only)
├── Receives changes from master
└── Available for reading

Slave 2 (Read-only)
├── Receives changes from master
└── Available for reading

Benefits:
- Distribute reads to slaves
- Backup on slaves
- High availability (if master fails, promote slave)
```

**Multi-Master Replication:**
```
Master 1 ←→ Master 2
Both accept writes
Both replicate to each other
Useful for: Geographic distribution, disaster recovery
Challenges: Conflict resolution when same record modified on both
```

### 11.3 Backup and Recovery

**Backup Verification:**
```bash
#!/bin/bash

# Perform backup
pg_dump prod_db | gzip > backup_$(date +%s).sql.gz

# Verify backup integrity
gunzip -t backup_*.sql.gz
if [ $? -eq 0 ]; then
    echo "Backup is valid"
    # Test restore in isolated environment
    restore_and_test_backup
else
    echo "Backup corrupted!"
    alert_team
fi
```

**Point-in-Time Recovery (PITR):**
```
Scenario: Accidental delete happened at 14:32

Solution: Restore from backup before 14:30, then replay transaction logs up to 14:31
Result: Database state as it was before the deletion

Requirements:
- Full backup
- Transaction logs (binary logs in MySQL, WAL in PostgreSQL)
```

### 11.4 Database Performance

**Query Optimization:**
```sql
-- SLOW QUERY (full table scan)
SELECT * FROM orders WHERE customer_id = 123;
-- Examines entire orders table

-- OPTIMIZED QUERY (with index)
CREATE INDEX idx_customer_id ON orders(customer_id);
SELECT * FROM orders WHERE customer_id = 123;
-- Uses index, finds result instantly
```

**Connection Pooling:**
```
Without pooling:
Each request opens new connection
Cost: 1-5ms per connection
1000 requests = 1000-5000ms wasted

With pooling:
Maintain pool of 20 connections
Reuse connections
Cost: ~0.1ms per request
1000 requests = 100ms (50x faster)

Example (PgBouncer):
listening_port = 6432
databases:
  prod_db = host=localhost port=5432
pool_size = 25
min_pool_size = 10
reserve_pool_size = 5
```

---

## Part 12: Essential DevOps Tools

### 12.1 Container Orchestration

**Docker Compose (Single host):**
```yaml
version: '3.8'

services:
  web:
    image: myapp:1.0
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=database
      - DB_PORT=5432
    depends_on:
      - database
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 10s
      retries: 3
  
  database:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=secure_password
    volumes:
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  
  cache:
    image: redis:7
    ports:
      - "6379:6379"

volumes:
  db_data:

# Run: docker-compose up
# Stop: docker-compose down
```

**Kubernetes vs Docker Compose:**
```
Docker Compose:
- Single host
- Simple deployments
- Good for development and testing
- No automatic recovery
- Limited scaling

Kubernetes:
- Multiple hosts (cluster)
- Production-grade
- Self-healing
- Auto-scaling
- Complex setup
```

### 12.2 Configuration Management

**Helm (Kubernetes Package Manager):**
```yaml
# Chart structure
my-app-chart/
├── Chart.yaml
├── values.yaml          # Default configuration
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── configmap.yaml

# values.yaml
replicaCount: 3
image:
  repository: myapp
  tag: "1.0"
  pullPolicy: IfNotPresent

resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"

service:
  type: LoadBalancer
  port: 80

# Template example (templates/deployment.yaml)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-deployment
spec:
  replicas: {{ .Values.replicaCount }}
  template:
    spec:
      containers:
      - name: app
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        resources: {{ toYaml .Values.resources | nindent 12 }}

# Install: helm install my-release my-app-chart/
# Upgrade: helm upgrade my-release my-app-chart/
# Rollback: helm rollback my-release 1
```

### 12.3 Service Mesh

**Istio (Service Mesh):**
```
Manages service-to-service communication
Handles: Routing, load balancing, circuit breaking, retries

Architecture:
Data Plane: Envoy proxies (sidecar in each pod)
Control Plane: Istiod (manages configuration)

Example: Advanced routing
100% traffic to v1
10% traffic to v2 (canary)
90% traffic to v1

Then gradually shift more traffic to v2
```

### 12.4 Artifact Management

**Nexus / Artifactory:**
```
Repository for storing:
- Docker images
- JAR files
- Python packages
- Maven artifacts
- npm packages

Example workflow:
1. Build application
2. Create artifact (JAR, Docker image)
3. Upload to Artifactory
4. Reference in deployment (retrieves from repo)

Benefits:
- Centralized storage
- Version control
- Access control
- Cache external dependencies
```

---

## Part 13: Scripting and Automation

### 13.1 Bash Scripting

Bash automates repetitive tasks.

**Basic Script Structure:**
```bash
#!/bin/bash
# Shebang: tells OS this is bash script

# Variables
ENVIRONMENT="production"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="/var/log/deployment_${TIMESTAMP}.log"

# Functions
log_message() {
    local level=$1
    local message=$2
    echo "[${level}] $(date '+%Y-%m-%d %H:%M:%S') - ${message}" | tee -a $LOG_FILE
}

# Error handling
set -e  # Exit on error
trap 'log_message "ERROR" "Script failed at line $LINENO"' ERR

# Main logic
log_message "INFO" "Starting deployment to ${ENVIRONMENT}"

# Check prerequisites
if ! command -v docker &> /dev/null; then
    log_message "ERROR" "Docker not installed"
    exit 1
fi

# Pull latest code
log_message "INFO" "Pulling latest code"
cd /app
git pull origin main

# Build Docker image
log_message "INFO" "Building Docker image"
docker build -t myapp:$(git rev-parse --short HEAD) .

# Push to registry
log_message "INFO" "Pushing to registry"
docker push myregistry.com/myapp:latest

# Deploy
log_message "INFO" "Deploying application"
kubectl set image deployment/myapp myapp=myregistry.com/myapp:latest

log_message "INFO" "Deployment complete"
```

**Useful Bash Techniques:**

**Loops and Conditionals:**
```bash
# Loop through servers and restart service
for server in web-01 web-02 web-03; do
    echo "Restarting service on $server"
    ssh deploy@$server "sudo systemctl restart myapp"
done

# Check if file exists
if [ -f "/etc/myapp/config.yaml" ]; then
    echo "Config file found"
else
    echo "Config file missing"
    exit 1
fi

# Check if directory exists and is readable
if [ -d "/app" ] && [ -r "/app" ]; then
    echo "App directory accessible"
fi

# Compare numbers
if [ $CPU_USAGE -gt 80 ]; then
    echo "CPU usage critical"
fi
```

**Command Substitution:**
```bash
# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

# Get Docker container count
CONTAINER_COUNT=$(docker ps -q | wc -l)

# Get server uptime in days
UPTIME_DAYS=$(uptime | awk '{print $1}')

# Process multiple servers
for IP in $(cat /etc/servers.txt); do
    ping -c 1 $IP
done
```

### 13.2 Python for DevOps

Python is powerful for complex automation.

```python
#!/usr/bin/env python3

import requests
import json
import subprocess
import sys
from datetime import datetime
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DeploymentManager:
    def __init__(self, registry, environment):
        self.registry = registry
        self.environment = environment
        self.timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    def build_image(self, app_name, dockerfile_path):
        """Build Docker image"""
        try:
            logger.info(f"Building image for {app_name}")
            cmd = [
                "docker", "build",
                "-t", f"{self.registry}/{app_name}:latest",
                "-f", dockerfile_path,
                "."
            ]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode != 0:
                logger.error(f"Build failed: {result.stderr}")
                return False
            
            logger.info(f"Image built successfully")
            return True
        except Exception as e:
            logger.error(f"Error building image: {e}")
            return False
    
    def push_image(self, app_name):
        """Push image to registry"""
        try:
            logger.info(f"Pushing {app_name} to registry")
            cmd = ["docker", "push", f"{self.registry}/{app_name}:latest"]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode != 0:
                logger.error(f"Push failed: {result.stderr}")
                return False
            
            logger.info(f"Image pushed successfully")
            return True
        except Exception as e:
            logger.error(f"Error pushing image: {e}")
            return False
    
    def deploy_to_kubernetes(self, deployment_name, image_name):
        """Deploy to Kubernetes"""
        try:
            logger.info(f"Deploying {deployment_name}")
            cmd = [
                "kubectl", "set", "image",
                f"deployment/{deployment_name}",
                f"{deployment_name}={self.registry}/{image_name}:latest"
            ]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode != 0:
                logger.error(f"Deployment failed: {result.stderr}")
                return False
            
            # Wait for rollout
            logger.info("Waiting for deployment to complete")
            cmd = ["kubectl", "rollout", "status", f"deployment/{deployment_name}"]
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode != 0:
                logger.error(f"Rollout failed: {result.stderr}")
                return False
            
            logger.info(f"Deployment successful")
            return True
        except Exception as e:
            logger.error(f"Error deploying: {e}")
            return False
    
    def health_check(self, url, max_retries=5):
        """Check if application is healthy"""
        for attempt in range(max_retries):
            try:
                response = requests.get(url, timeout=10)
                if response.status_code == 200:
                    logger.info(f"Health check passed")
                    return True
            except requests.RequestException as e:
                logger.warning(f"Health check attempt {attempt + 1} failed: {e}")
            
            if attempt < max_retries - 1:
                logger.info("Retrying in 10 seconds...")
                subprocess.run(["sleep", "10"])
        
        logger.error("Health check failed after all retries")
        return False

# Usage
if __name__ == "__main__":
    manager = DeploymentManager(
        registry="docker.io/mycompany",
        environment="production"
    )
    
    # Build
    if not manager.build_image("myapp", "Dockerfile"):
        sys.exit(1)
    
    # Push
    if not manager.push_image("myapp"):
        sys.exit(1)
    
    # Deploy
    if not manager.deploy_to_kubernetes("myapp-deployment", "myapp"):
        sys.exit(1)
    
    # Verify
    if not manager.health_check("https://myapp.example.com/health"):
        sys.exit(1)
    
    logger.info("Deployment completed successfully")
```

---

## Part 14: Performance and Optimization

### 14.1 Caching Strategies

**HTTP Caching:**
```
Client-side cache:
GET /api/users → Response includes: Cache-Control: max-age=3600
Browser caches response for 1 hour
Next request within 1 hour uses cache (no server call)

Server-side cache:
Popular queries cached in Redis
Result served from cache instead of database
Reduces database load significantly
```

**Cache Invalidation:**
```
Problem: When data changes, cache becomes stale

Solutions:

Time-based: Cache expires after time period
GET /api/products → Cache-Control: max-age=3600
After 3600 seconds, cache expires, fresh data fetched

Event-based: Delete cache when data changes
Update /api/products/5 → Success
DELETE cache_key "products:5"
Next GET fetches fresh data

Pattern-based: Clear related caches
SET product:5 → name changed
INVALIDATE products:* (all product caches)
Ensures consistency
```

**Application Caching:**
```python
# Without cache
def get_user_orders(user_id):
    # Query database
    orders = db.query(f"SELECT * FROM orders WHERE user_id = {user_id}")
    return orders
# Every call hits database

# With cache
def get_user_orders(user_id):
    cache_key = f"user_orders:{user_id}"
    
    # Check cache first
    orders = redis.get(cache_key)
    if orders:
        return orders
    
    # Cache miss: query database
    orders = db.query(f"SELECT * FROM orders WHERE user_id = {user_id}")
    
    # Store in cache for 1 hour
    redis.setex(cache_key, 3600, orders)
    return orders
```

### 14.2 Database Query Optimization

**N+1 Query Problem:**
```python
# PROBLEM: N+1 queries
users = db.query("SELECT * FROM users")  # 1 query
for user in users:
    # N additional queries (one per user)
    orders = db.query(f"SELECT * FROM orders WHERE user_id = {user.id}")
    print(user.name, orders)
# Total: 1 + N queries (expensive!)

# SOLUTION: Join query
users_with_orders = db.query("""
    SELECT u.*, o.* FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
""")
for row in users_with_orders:
    print(row.user_name, row.order_id)
# Total: 1 query (efficient!)

# SOLUTION 2: Batch loading
user_ids = [1, 2, 3, 4, 5]
orders = db.query(f"SELECT * FROM orders WHERE user_id IN ({user_ids})")
# Total: 2 queries (acceptable)
```

**Query Execution Plan:**
```sql
-- Check how query executes
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 123;

-- Output shows:
-- Seq Scan on orders: Scanning entire table (slow!)
-- vs
-- Index Scan using idx_customer_id: Using index (fast!)

-- Create index if missing
CREATE INDEX idx_customer_id ON orders(customer_id);
```

### 14.3 Load Testing and Capacity Planning

**Apache JMeter Load Test:**
```
Simulate 1000 users making requests
Ramp up over 5 minutes
Run for 10 minutes
Check response times and error rates

Results:
- Average response time: 250ms
- 95th percentile: 800ms
- 99th percentile: 2000ms
- Error rate: 0.1%
- Throughput: 100 requests/sec

Decision:
Current capacity handles 1000 concurrent users
Scale up when approaching this limit
```

### 14.4 Auto-scaling Configuration

**Kubernetes Horizontal Pod Autoscaler:**
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 3
  maxReplicas: 20
  
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
```

**AWS Auto Scaling Group:**
```
Minimum instances: 2
Desired capacity: 5
Maximum instances: 20

Scale-up rule: If CPU > 80% for 3 minutes, add instance
Scale-down rule: If CPU < 30% for 10 minutes, remove instance
```

---

## Part 15: Troubleshooting and Debugging

### 15.1 Debugging Techniques

**Check Service Status:**
```bash
# Is service running?
systemctl status myapp

# Check logs
journalctl -u myapp -n 50

# Check port is listening
netstat -tlnp | grep :8080
lsof -i :8080

# Check process
ps aux | grep myapp
```

**Network Troubleshooting:**
```bash
# Check DNS resolution
nslookup example.com
dig example.com

# Check connectivity
ping 8.8.8.8
traceroute example.com

# Check open connections
netstat -an | grep ESTABLISHED
ss -tlnp

# Test port connectivity
telnet example.com 443
nc -zv example.com 443

# Capture network traffic
tcpdump -i eth0 -n 'tcp port 8080'
```

**Container Debugging:**
```bash
# Check container logs
docker logs container_id

# Follow logs in real-time
docker logs -f container_id

# Execute command in running container
docker exec -it container_id bash

# Inspect container
docker inspect container_id

# Check resource usage
docker stats

# Check processes inside container
docker top container_id
```

**Kubernetes Debugging:**
```bash
# Check pod status
kubectl get pods
kubectl describe pod pod_name

# Check pod logs
kubectl logs pod_name

# Previous logs (if pod restarted)
kubectl logs pod_name --previous

# Stream logs
kubectl logs -f pod_name

# Execute command in pod
kubectl exec -it pod_name -- /bin/bash

# Get pod events
kubectl describe pod pod_name

# Check resource usage
kubectl top pods
kubectl top nodes

# Get detailed cluster info
kubectl cluster-info
kubectl get nodes -o wide
```

### 15.2 Common Issues and Solutions

**Application won't start:**
```
Check list:
1. Is port already in use?
   lsof -i :8080

2. Are environment variables set?
   echo $DATABASE_URL
   echo $API_KEY

3. Are dependencies installed?
   pip list
   npm list

4. Is database accessible?
   psql -h db.example.com -U user -d dbname

5. Check logs
   tail -f /var/log/app.log
```

**High memory usage:**
```
Identify process using memory:
ps aux --sort=-%mem | head -5

Check for memory leaks:
valgrind --leak-check=full ./app

Restart service to free memory:
systemctl restart myapp

Permanent fix:
Profile application
Find memory leak source
Fix code
```

**Database connection pool exhausted:**
```
Symptom: Application can't connect to database
Error: "Cannot acquire connection, all 20 in pool used"

Root cause: Connections not being released

Solution:
1. Increase pool size (temporary)
2. Check for hanging queries
   SELECT * FROM pg_stat_activity WHERE wait_event IS NOT NULL
3. Kill long-running queries
4. Fix application code (ensure connections returned to pool)
5. Set connection timeout to auto-release
```

---

## Part 16: Best Practices and Production Readiness

### 16.1 High Availability

**Eliminating Single Points of Failure:**
```
Database: Master-Slave replication (failover to slave)
Load Balancer: Multiple load balancers (active-active)
Cache: Redis Sentinel (automatic failover)
Message Queue: Cluster of brokers
DNS: Multiple DNS servers

System Resilience:
No single server failure should take down system
Auto-recovery when failure occurs
Health checks continuously monitor
Alerts notify team of issues
```

### 16.2 Disaster Recovery

**Recovery Time Objective (RTO):**
```
Maximum acceptable time to recover
Example: RTO = 1 hour
If disaster at 2:00 PM, must be back online by 3:00 PM
```

**Recovery Point Objective (RPO):**
```
Maximum acceptable data loss
Example: RPO = 15 minutes
Can lose at most last 15 minutes of data
Need backups every 15 minutes to meet this
```

**Disaster Recovery Plan Example:**
```
Tier 1 Critical (RTO: 15 min, RPO: 5 min):
- Production database
- Payment service
- User authentication

Tier 2 Important (RTO: 1 hour, RPO: 30 min):
- API servers
- Web application
- Cache servers

Tier 3 Non-critical (RTO: 4 hours, RPO: 2 hours):
- Development environment
- Monitoring dashboards
- Reporting systems

Actions:
1. Detect disaster
2. Activate backup systems
3. Restore Tier 1 first
4. Test functionality
5. Notify users
6. Investigate root cause
7. Implement prevention
```

### 16.3 Documentation

**What to Document:**

**Architecture Diagrams:**
```
Document system components and interactions
How services communicate
Data flow between systems
Dependencies
```

**Runbooks:**
```
Step-by-step procedures for common tasks
Deployment process
Scaling procedures
Backup and restore
Incident response

Example:
Scale web servers to 10 instances:
1. kubectl scale deployment web-app --replicas=10
2. Verify all pods are running: kubectl get pods
3. Check load balancer health: curl /health
4. Monitor CPU and memory: kubectl top pods
5. Document scaling reason and time
```

**Incident Reports:**
```
What happened?
When did it occur?
What was the impact?
Root cause analysis
What was the fix?
How to prevent in future?
Lessons learned
```

### 16.4 SLOs and SLIs

**Service Level Objective (SLO):**
```
Target reliability we commit to

Example SLOs:
- 99.9% uptime (8 hours 46 minutes downtime per year)
- 99.95% uptime (21 minutes 56 seconds downtime per year)
- 99.99% uptime (52 minutes 35 seconds downtime per year)
```

**Service Level Indicator (SLI):**
```
Metric measuring actual performance

Examples:
- API response time p99 < 500ms
- Error rate < 0.1%
- Availability > 99.9%
```

**Error Budget:**
```
If SLO is 99.9% uptime, error budget is 0.1%

For month (2592000 seconds):
Error budget = 2592000 * 0.001 = 2592 seconds

Use error budget to:
- Decide if safe to deploy
- If already at budget: Don't deploy (high risk)
- If budget remaining: Deploy low-risk features
- Revisit SLO if constantly hitting limit (too aggressive)
```

---

## Part 17: Soft Skills and Practices

### 17.1 Communication and Documentation

**Incident Communication:**
```
As soon as incident detected:
1. Acknowledge issue (within 5 minutes)
2. Provide status updates every 15 minutes
3. Explain what you're doing
4. Provide ETA for resolution

Example:
"Payment service down - investigating database connection issue. 
Status: Attempting restart of database server. 
ETA: 30 minutes"
```

**Postmortem Culture:**
```
Blameless postmortems
Focus: What happened and how to prevent
Not: Who to blame

Questions to answer:
- What was the impact?
- What happened?
- Why did it happen?
- What did we do well?
- What could we improve?
- Action items to prevent recurrence
```

### 17.2 Team Collaboration

**Code Review Checklist:**
```
- Follows team coding standards
- Handles errors gracefully
- Has appropriate logging
- Tests included
- Security considerations addressed
- Performance implications understood
- Documentation updated
- No hardcoded secrets
- Backward compatible (if applicable)
```

**Knowledge Sharing:**
```
Regular team meetings
Pair programming sessions
Documentation wiki
Brown bag lunches (team learning)
Post on team blog
Share tools and techniques
```

---

## Conclusion

This comprehensive guide covers all fundamental concepts a DevOps engineer needs:

**Core Programming:** Variables, control flow, functions, OOP
**Networking:** IP, DNS, ports, protocols, TCP/UDP
**APIs:** REST principles, authentication, rate limiting, webhooks
**Infrastructure:** VMs, containers, Kubernetes, orchestration
**CI/CD:** Pipelines, deployment strategies, tools
**Cloud Services:** AWS, Azure, GCP, cloud concepts
**Data:** Databases, backups, replication, optimization
**Observability:** Monitoring, logging, alerting
**Security:** Authentication, encryption, secrets, scanning
**Tools:** Git, Terraform, Ansible, Helm, Docker
**Scripting:** Bash, Python automation
**Production Ready:** High availability, disaster recovery, SLOs
**Best Practices:** Documentation, incident response, teamwork

Master these concepts through:
1. Understanding theory
2. Practicing with real projects
3. Setting up labs
4. Building portfolio projects
5. Contributing to open source
6. Learning from production incidents

DevOps is not about knowing everything, but knowing where to find answers and solving problems systematically.