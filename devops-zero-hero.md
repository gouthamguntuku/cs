# DevOps Zero to Hero - Complete Course Outline

## 1. Course Overview

### What is DevOps?
DevOps combines Development (Dev) and Operations (Ops) to shorten the software development lifecycle while delivering features, fixes, and updates frequently. Think of it as breaking down the wall between developers who write code and operations teams who deploy and maintain it.

**Real-world example:** Before DevOps, a developer might write code that works on their laptop but fails in production. With DevOps, the same environment, tools, and automation are used from development to production, preventing "it works on my machine" problems.

### Course Goals
- Master core DevOps tools and practices
- Build automated CI/CD pipelines
- Deploy and manage cloud infrastructure
- Implement monitoring and logging solutions
- Apply DevOps best practices in real projects

---

## 2. DevOps Fundamentals

### Core Principles
- **Automation:** Reduce manual tasks (deployments, testing, infrastructure setup)
- **Continuous Integration/Delivery:** Merge code frequently and deploy automatically
- **Monitoring & Feedback:** Track application health and performance
- **Collaboration:** Break silos between development and operations

### Networking Concepts

#### IP Addressing
- **IP Address:** Unique identifier for devices (e.g., 192.168.1.10)
- **Private vs Public IPs:** Private (internal network, e.g., 192.168.x.x), Public (internet-facing)
- **CIDR Notation:** 192.168.1.0/24 means 256 addresses (192.168.1.0 to 192.168.1.255)

**Example:** In AWS, you create a VPC with CIDR 10.0.0.0/16, giving you 65,536 IP addresses for your cloud resources.

#### DNS (Domain Name System)
DNS translates human-readable names to IP addresses.

**Example:** When you type `www.example.com`, DNS resolves it to `93.184.216.34` so your browser can connect.

#### Ports & Protocols
- **TCP/UDP:** Protocols for data transmission
- **Common Ports:** HTTP (80), HTTPS (443), SSH (22), MySQL (3306)

**Example:** Your web server listens on port 443 for HTTPS traffic. Jenkins runs on port 8080 by default.

#### Load Balancing
Distributes traffic across multiple servers to prevent overload.

**Example:** AWS Application Load Balancer routes requests to 5 backend servers. If one fails, traffic goes to the remaining 4.

#### Firewalls & Security Groups
Control what traffic can reach your servers.

**Example:** Security group rule: Allow port 443 from 0.0.0.0/0 (internet), Allow port 22 from your office IP only.

#### Subnets & VPC
- **VPC:** Virtual Private Cloud, your isolated network in the cloud
- **Subnet:** Subdivisions of VPC (e.g., public subnet for web servers, private for databases)

**Example:** VPC 10.0.0.0/16 with public subnet 10.0.1.0/24 (web) and private subnet 10.0.2.0/24 (database).

---

## 3. Linux System Administration

### Essential Commands
```bash
# File operations
ls -la                    # List files with details
cd /var/log              # Change directory
mkdir -p app/logs        # Create directories
cp file.txt backup.txt   # Copy files
mv old.txt new.txt       # Move/rename
rm -rf folder/           # Remove folder

# File viewing/editing
cat file.txt             # View file
less large.log           # View large files
tail -f app.log          # Follow log in real-time
nano config.yml          # Simple editor
vim deployment.yaml      # Advanced editor

# Permissions
chmod 755 script.sh      # rwxr-xr-x
chown user:group file    # Change ownership
```

**Real-world use:** You SSH into a production server, check logs with `tail -f`, identify an error, edit config with `vim`, and restart the service.

### Process Management
```bash
ps aux | grep nginx      # Find processes
top                      # Monitor resources
htop                     # Better top
kill -9 1234            # Force kill process
systemctl status nginx   # Check service status
systemctl restart nginx  # Restart service
```

**Example:** Application is slow. You run `top`, see MySQL using 90% CPU, run `systemctl restart mysql`.

### Package Management
```bash
# Ubuntu/Debian
apt update && apt upgrade
apt install docker.io

# RHEL/CentOS
yum update
yum install git
```

### Networking
```bash
ping google.com          # Test connectivity
curl https://api.example.com  # Test API
netstat -tuln           # List listening ports
ss -tuln                # Modern netstat
ifconfig / ip addr      # View IP addresses
```

**Example:** Jenkins can't connect to GitHub. You run `ping github.com` to test connectivity, then `curl https://api.github.com` to test the API endpoint.

### Disk & Storage
```bash
df -h                   # Disk usage
du -sh /var/log/        # Directory size
mount /dev/sdb1 /data   # Mount disk
```

---

## 4. Version Control with Git

### Core Concepts
- **Repository:** Project folder tracked by Git
- **Commit:** Snapshot of your code at a point in time
- **Branch:** Parallel version of code
- **Remote:** Server hosting your repo (GitHub, GitLab)

### Essential Commands
```bash
# Initialize & clone
git init                        # Start tracking
git clone https://github.com/user/repo.git

# Daily workflow
git status                      # Check changes
git add .                       # Stage all files
git commit -m "Add feature"     # Save changes
git push origin main            # Upload to remote
git pull origin main            # Download updates

# Branching
git branch feature-login        # Create branch
git checkout feature-login      # Switch branch
git checkout -b fix-bug         # Create & switch
git merge feature-login         # Merge to current
git branch -d feature-login     # Delete branch

# History
git log --oneline              # View commits
git diff                       # See changes
git blame file.txt             # Who changed what
```

### Real-World Workflow
**Example:** You're building a login feature.
```bash
git checkout -b feature-login
# Write code
git add .
git commit -m "Add user authentication"
git push origin feature-login
# Create Pull Request on GitHub
# After review, merge to main
git checkout main
git pull origin main
```

### Collaboration
```bash
# Sync with team
git fetch origin               # Download changes
git rebase origin/main         # Apply your commits on top
git stash                      # Temporarily save work
git stash pop                  # Restore stashed work
```

**Example:** Teammate pushes code. You run `git pull`, resolve merge conflicts if any, continue working.

### Git in DevOps
- **GitOps:** Infrastructure and configs stored in Git
- **CI/CD Triggers:** Jenkins/GitHub Actions run when you push code
- **Version Rollback:** Revert to previous commit if deployment fails

---

## 5. Shell Scripting

### Bash Basics
```bash
#!/bin/bash
# My first script

echo "Hello DevOps"
NAME="Jenkins"
echo "Deploying with $NAME"

# User input
read -p "Enter environment: " ENV
echo "Deploying to $ENV"
```

### Variables & Conditionals
```bash
#!/bin/bash

APP_NAME="myapp"
VERSION="1.2.3"

if [ "$VERSION" = "1.2.3" ]; then
    echo "Version matches"
else
    echo "Version mismatch"
fi

# Check if file exists
if [ -f "/var/log/app.log" ]; then
    echo "Log file found"
fi
```

### Loops
```bash
# For loop
for server in web1 web2 web3; do
    echo "Deploying to $server"
    ssh $server "sudo systemctl restart nginx"
done

# While loop
COUNT=0
while [ $COUNT -lt 5 ]; do
    echo "Attempt $COUNT"
    COUNT=$((COUNT + 1))
done
```

### Functions
```bash
#!/bin/bash

deploy_app() {
    local ENV=$1
    echo "Deploying to $ENV"
    docker-compose -f docker-compose.$ENV.yml up -d
}

deploy_app "staging"
deploy_app "production"
```

### Real-World Script: Backup & Deploy
```bash
#!/bin/bash
# backup-and-deploy.sh

APP_DIR="/var/www/myapp"
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
echo "Creating backup..."
tar -czf $BACKUP_DIR/app_$DATE.tar.gz $APP_DIR

# Pull latest code
echo "Pulling latest code..."
cd $APP_DIR
git pull origin main

# Restart application
echo "Restarting app..."
docker-compose restart

echo "Deployment complete!"
```

**Usage:** Run this script via cron every night or trigger from Jenkins after tests pass.

### Error Handling
```bash
#!/bin/bash
set -e  # Exit on error

deploy() {
    docker-compose up -d || {
        echo "Deployment failed!"
        docker-compose logs
        exit 1
    }
}

deploy
```

---

## 6. Virtual Machines & Cloud Basics

### Virtual Machines (VMs)
A VM is a software computer running inside a physical computer.

**Example:** Your laptop has VirtualBox running Ubuntu VM for testing. The VM thinks it's a real computer with its own CPU, RAM, and disk.

### Hypervisors
- **Type 1:** VMware ESXi, KVM (runs directly on hardware)
- **Type 2:** VirtualBox, VMware Workstation (runs on host OS)

### Cloud Computing Models

#### IaaS (Infrastructure as a Service)
You rent virtual servers, storage, networks. You manage OS and applications.
**Example:** AWS EC2 - You launch a Ubuntu VM, install Docker, deploy your app.

#### PaaS (Platform as a Service)
You deploy code, cloud provider manages infrastructure.
**Example:** AWS Elastic Beanstalk - Upload Java code, AWS handles servers, scaling, load balancing.

#### SaaS (Software as a Service)
Fully managed application.
**Example:** Gmail, Salesforce - You just use the software.

### Cloud Deployment Models
- **Public Cloud:** AWS, Azure, GCP (shared infrastructure)
- **Private Cloud:** Your own data center with cloud tools
- **Hybrid Cloud:** Combination of public and private

### Key Cloud Services (AWS examples)

#### Compute
- **EC2:** Virtual servers
- **Lambda:** Serverless functions (code runs without managing servers)

**Example:** Website runs on 3 EC2 instances. Image processing uses Lambda triggered when user uploads photo.

#### Storage
- **S3:** Object storage (files, images, backups)
- **EBS:** Block storage (VM hard drives)
- **EFS:** File system (shared across multiple VMs)

**Example:** Application logs stored in S3, database files on EBS, shared uploads on EFS.

#### Networking
- **VPC:** Your private network in AWS
- **Route 53:** DNS service
- **CloudFront:** CDN (caches content globally)

**Example:** VPC with 2 subnets, Route 53 points `api.myapp.com` to Load Balancer, CloudFront caches images.

### Real-World Setup
**Scenario:** Deploy a web application in AWS
1. Create VPC (10.0.0.0/16)
2. Create public subnet (10.0.1.0/24) for web servers
3. Create private subnet (10.0.2.0/24) for database
4. Launch 2 EC2 instances in public subnet
5. Launch RDS MySQL in private subnet
6. Create Application Load Balancer
7. Configure security groups (allow 443 to web, 3306 web→DB only)

---

## 7. Containerization with Docker

### What is Docker?
Docker packages your application with all dependencies into a container that runs the same everywhere - dev laptop, staging, production.

**Problem it solves:** "It works on my machine but not production" - different OS, library versions, configurations.

### Core Concepts
- **Image:** Blueprint (recipe) for containers
- **Container:** Running instance of an image
- **Dockerfile:** Instructions to build an image
- **Registry:** Storage for images (Docker Hub)

**Analogy:** Image is like a class in programming, Container is an instance of that class.

### Docker Commands
```bash
# Images
docker pull nginx:latest         # Download image
docker images                    # List images
docker rmi nginx:latest         # Remove image

# Containers
docker run -d -p 80:80 nginx    # Run container
docker ps                       # List running containers
docker ps -a                    # List all containers
docker stop container_id        # Stop container
docker rm container_id          # Remove container
docker logs container_id        # View logs
docker exec -it container_id bash  # Enter container

# Cleanup
docker system prune -a          # Remove unused resources
```

### Creating a Dockerfile
```dockerfile
# Dockerfile for Node.js app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "app.js"]
```

**Build and run:**
```bash
docker build -t myapp:1.0 .
docker run -d -p 3000:3000 myapp:1.0
```

### Docker Compose
Manage multi-container applications.

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://db:5432/myapp
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Commands:**
```bash
docker-compose up -d        # Start all services
docker-compose down         # Stop and remove
docker-compose logs web     # View web service logs
docker-compose ps           # List services
```

### Real-World Example: Microservices
```yaml
# docker-compose.yml for microservices
services:
  frontend:
    image: myapp/frontend:latest
    ports: ["80:80"]
  
  api:
    image: myapp/api:latest
    ports: ["8080:8080"]
    environment:
      - DB_HOST=database
  
  database:
    image: postgres:15
    volumes:
      - db_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
  
  nginx:
    image: nginx:alpine
    ports: ["443:443"]
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

### Docker Networking
```bash
# Create custom network
docker network create myapp-network

# Run containers on same network
docker run -d --network myapp-network --name db postgres
docker run -d --network myapp-network --name web myapp:latest

# Web container can reach db using hostname "db"
```

### Docker Volumes (Data Persistence)
```bash
# Named volume
docker volume create app_data
docker run -v app_data:/data myapp

# Bind mount (development)
docker run -v $(pwd)/src:/app/src myapp
```

**Use case:** Database container with volume ensures data survives container restarts.

---

## 8. Container Orchestration with Kubernetes

### Why Kubernetes?
Docker runs containers on one machine. Kubernetes (K8s) manages containers across many machines, handling scaling, failures, and networking automatically.

**Example:** You have 100 containers running across 20 servers. One server crashes. Kubernetes automatically moves those containers to healthy servers.

### Core Components

#### Cluster Architecture
- **Master Node (Control Plane):** Manages the cluster
- **Worker Nodes:** Run your containers
- **kubectl:** Command-line tool to interact with cluster

#### Key Objects

**Pod:** Smallest unit, wraps one or more containers
```yaml
# pod.yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

**Deployment:** Manages replica sets and rolling updates
```yaml
# deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: myapp:1.2
        ports:
        - containerPort: 8080
```

**Service:** Exposes pods with stable IP/DNS
```yaml
# service.yml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 8080
```

### kubectl Commands
```bash
# Cluster info
kubectl cluster-info
kubectl get nodes

# Deployments
kubectl apply -f deployment.yml
kubectl get deployments
kubectl get pods
kubectl describe pod pod-name
kubectl logs pod-name
kubectl delete pod pod-name

# Scaling
kubectl scale deployment web-app --replicas=5

# Updates
kubectl set image deployment/web-app web=myapp:1.3
kubectl rollout status deployment/web-app
kubectl rollout undo deployment/web-app

# Services
kubectl get services
kubectl expose deployment web-app --type=LoadBalancer --port=80
```

### ConfigMaps & Secrets
```yaml
# configmap.yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_HOST: "db.example.com"
  LOG_LEVEL: "info"

---
# secret.yml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=  # base64 encoded
```

**Using in Deployment:**
```yaml
spec:
  containers:
  - name: app
    image: myapp:latest
    envFrom:
    - configMapRef:
        name: app-config
    - secretRef:
        name: app-secrets
```

### Persistent Storage
```yaml
# pvc.yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-storage
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi

---
# deployment with volume
spec:
  containers:
  - name: app
    volumeMounts:
    - name: data
      mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: app-storage
```

### Real-World Scenario: Complete Application
```yaml
# Complete app with database
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: api
        image: myapp/api:2.1
        ports:
        - containerPort: 8080
        env:
        - name: DB_HOST
          value: postgres-service
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password

---
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
  - port: 80
    targetPort: 8080

---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres-service
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 20Gi
```

### Namespace Organization
```bash
# Create namespaces for environments
kubectl create namespace dev
kubectl create namespace staging
kubectl create namespace production

# Deploy to specific namespace
kubectl apply -f deployment.yml -n production
kubectl get pods -n production
```

---

## 9. Configuration Management (Ansible)

### What is Ansible?
Ansible automates server configuration, application deployment, and task execution across many servers simultaneously without requiring agents.

**Use case:** Configure 50 web servers identically (install nginx, copy config, start service) with one command instead of SSH-ing to each.

### Core Concepts
- **Playbook:** YAML file defining tasks
- **Inventory:** List of servers to manage
- **Module:** Pre-built task (e.g., install package, copy file)
- **Role:** Reusable set of tasks

### Inventory File
```ini
# inventory.ini
[webservers]
web1.example.com
web2.example.com
web3.example.com

[databases]
db1.example.com
db2.example.com

[production:children]
webservers
databases

[production:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/production.pem
```

### Basic Playbook
```yaml
# setup-webserver.yml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
    
    - name: Install nginx
      apt:
        name: nginx
        state: present
    
    - name: Copy nginx config
      copy:
        src: files/nginx.conf
        dest: /etc/nginx/nginx.conf
      notify: Restart nginx
    
    - name: Start nginx
      service:
        name: nginx
        state: started
        enabled: yes
  
  handlers:
    - name: Restart nginx
      service:
        name: nginx
        state: restarted
```

**Run playbook:**
```bash
ansible-playbook -i inventory.ini setup-webserver.yml
```

### Variables
```yaml
# playbook with variables
---
- name: Deploy application
  hosts: webservers
  vars:
    app_version: "1.5.2"
    app_port: 8080
  
  tasks:
    - name: Pull Docker image
      docker_image:
        name: "myapp:{{ app_version }}"
        source: pull
    
    - name: Run container
      docker_container:
        name: myapp
        image: "myapp:{{ app_version }}"
        ports:
          - "{{ app_port }}:8080"
```

### Roles (Reusable Components)
```
roles/
  webserver/
    tasks/
      main.yml
    templates/
      nginx.conf.j2
    files/
      index.html
    vars/
      main.yml
    handlers/
      main.yml
```

**Using roles:**
```yaml
# site.yml
---
- name: Setup infrastructure
  hosts: all
  roles:
    - common        # Install basic tools
    - security      # Configure firewall
    - monitoring    # Install monitoring agent

- name: Setup web servers
  hosts: webservers
  roles:
    - nginx
    - application
```

### Real-World Example: Complete Deployment
```yaml
# deploy-app.yml
---
- name: Deploy microservices application
  hosts: production
  become: yes
  
  vars:
    app_version: "{{ lookup('env', 'APP_VERSION') | default('latest') }}"
    environment: production
  
  tasks:
    - name: Install Docker
      apt:
        name: 
          - docker.io
          - docker-compose
        state: present
    
    - name: Create app directory
      file:
        path: /opt/myapp
        state: directory
    
    - name: Copy docker-compose file
      template:
        src: templates/docker-compose.yml.j2
        dest: /opt/myapp/docker-compose.yml
    
    - name: Copy environment file
      template:
        src: templates/env.j2
        dest: /opt/myapp/.env
      no_log: yes  # Don't show secrets in output
    
    - name: Pull latest images
      command: docker-compose pull
      args:
        chdir: /opt/myapp
    
    - name: Start application
      command: docker-compose up -d
      args:
        chdir: /opt/myapp
    
    - name: Wait for application to be ready
      uri:
        url: "http://localhost:8080/health"
        status_code: 200
      retries: 10
      delay: 5
    
    - name: Register with load balancer
      uri:
        url: "http://loadbalancer/api/register"
        method: POST
        body_format: json
        body:
          server: "{{ ansible_hostname }}"
          port: 8080
```

### Ansible with Other Tools
```yaml
# Integration example
---
- name: Infrastructure setup
  hosts: localhost
  tasks:
    # Use Terraform to provision infrastructure
    - name: Run Terraform
      terraform:
        project_path: ./terraform
        state: present
    
    # Wait for instances to be ready
    - name: Wait for SSH
      wait_for:
        host: "{{ item }}"
        port: 22
        delay: 10
      loop: "{{ terraform_output.instance_ips }}"
    
    # Configure instances with Ansible
    - name: Run configuration playbook
      include_tasks: configure-servers.yml
```

---

## 10. Infrastructure as Code (Terraform)

### What is Terraform?
Terraform provisions and manages cloud infrastructure using code. Instead of clicking in AWS console, you write configuration files that create VPCs, servers, databases, etc.

**Benefits:** Version control for infrastructure, reproducible environments, destroy and recreate infrastructure easily.

### Core Concepts
- **Provider:** Cloud platform (AWS, Azure, GCP)
- **Resource:** Infrastructure component (EC2 instance, S3 bucket)
- **State:** Current infrastructure status
- **Module:** Reusable infrastructure code

### Basic Structure
```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}
```

**Commands:**
```bash
terraform init          # Initialize provider
terraform plan          # Preview changes
terraform apply         # Create resources
terraform destroy       # Delete resources
terraform show          # View current state
```

### Variables
```hcl
# variables.tf
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "instance_count" {
  description = "Number of instances"
  type        = number
  default     = 2
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
}

# main.tf
resource "aws_instance" "app" {
  count         = var.instance_count
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type
  
  tags = {
    Name = "app-${var.environment}-${count.index + 1}"
  }
}
```

**Variable file:**
```hcl
# terraform.tfvars
environment    = "production"
instance_count = 5
instance_type  = "t3.medium"
```

### Outputs
```hcl
# outputs.tf
output "instance_ips" {
  description = "Public IPs of instances"
  value       = aws_instance.app[*].public_ip
}

output "load_balancer_dns" {
  description = "Load balancer URL"
  value       = aws_lb.main.dns_name
}
```

### Real-World Example: Complete Infrastructure
```hcl
# vpc.tf
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  
  tags = {
    Name = "main-vpc"
  }
}

resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 1}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]
  
  map_public_ip_on_launch = true
  
  tags = {
    Name = "public-subnet-${count.index + 1}"
  }
}

resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]
  
  tags = {
    Name = "private-subnet-${count.index + 1}"
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
}

# security-groups.tf
resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id
  
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    from_port   = 80
    to_port     = 80
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

# ec2.tf
resource "aws_launch_template" "app" {
  name_prefix   = "app-"
  image_id      = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  
  vpc_security_group_ids = [aws_security_group.web.id]
  
  user_data = base64encode(<<-EOF
    #!/bin/bash
    apt update
    apt install -y docker.io
    docker run -d -p 80:8080 myapp:latest
  EOF
  )
}

resource "aws_autoscaling_group" "app" {
  desired_capacity    = 3
  max_size           = 10
  min_size           = 2
  target_group_arns  = [aws_lb_target_group.app.arn]
  vpc_zone_identifier = aws_subnet.public[*].id
  
  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }
  
  tag {
    key                 = "Name"
    value               = "app-instance"
    propagate_at_launch = true
  }
}

# load-balancer.tf
resource "aws_lb" "main" {
  name               = "app-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.web.id]
  subnets            = aws_subnet.public[*].id
}

resource "aws_lb_target_group" "app" {
  name     = "app-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
  
  health_check {
    path                = "/health"
    healthy_threshold   = 2
    unhealthy_threshold = 10
  }
}

resource "aws_lb_listener" "app" {
  load_balancer_arn = aws_lb.main.arn
  port              = "443"
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate.main.arn
  
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

# database.tf
resource "aws_db_instance" "main" {
  identifier           = "app-db"
  engine              = "postgres"
  engine_version      = "15.3"
  instance_class      = "db.t3.micro"
  allocated_storage   = 20
  storage_encrypted   = true
  
  db_name  = "myapp"
  username = "admin"
  password = var.db_password  # Never hardcode passwords
  
  vpc_security_group_ids = [aws_security_group.db.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
  
  backup_retention_period = 7
  skip_final_snapshot    = false
  final_snapshot_identifier = "app-db-final-snapshot"
}

resource "aws_db_subnet_group" "main" {
  name       = "main"
  subnet_ids = aws_subnet.private[*].id
}
```

### Modules (Reusable Infrastructure)
```hcl
# modules/web-cluster/main.tf
variable "cluster_name" {}
variable "instance_type" {}
variable "min_size" {}
variable "max_size" {}

resource "aws_launch_template" "this" {
  name_prefix   = "${var.cluster_name}-"
  instance_type = var.instance_type
  # ... configuration
}

resource "aws_autoscaling_group" "this" {
  name     = var.cluster_name
  min_size = var.min_size
  max_size = var.max_size
  # ... configuration
}

output "asg_name" {
  value = aws_autoscaling_group.this.name
}

# Using the module
module "web_cluster" {
  source = "./modules/web-cluster"
  
  cluster_name  = "production-web"
  instance_type = "t3.medium"
  min_size      = 3
  max_size      = 10
}
```

### State Management
```hcl
# backend.tf - Store state in S3
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "production/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

### Terraform + Docker + Kubernetes
```hcl
# Create EKS cluster
resource "aws_eks_cluster" "main" {
  name     = "my-cluster"
  role_arn = aws_iam_role.cluster.arn
  
  vpc_config {
    subnet_ids = aws_subnet.private[*].id
  }
}

# Deploy to Kubernetes using Terraform
provider "kubernetes" {
  host                   = aws_eks_cluster.main.endpoint
  cluster_ca_certificate = base64decode(aws_eks_cluster.main.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.main.token
}

resource "kubernetes_deployment" "app" {
  metadata {
    name = "myapp"
  }
  
  spec {
    replicas = 3
    
    selector {
      match_labels = {
        app = "myapp"
      }
    }
    
    template {
      metadata {
        labels = {
          app = "myapp"
        }
      }
      
      spec {
        container {
          name  = "app"
          image = "myapp:${var.app_version}"
          
          port {
            container_port = 8080
          }
        }
      }
    }
  }
}
```

---

## 11. CI/CD with Jenkins

### What is CI/CD?
- **Continuous Integration (CI):** Automatically test code when developers push changes
- **Continuous Delivery (CD):** Automatically deploy to staging/production after tests pass

**Example:** Developer pushes code → Jenkins runs tests → If pass, builds Docker image → Pushes to registry → Deploys to Kubernetes.

### Jenkins Setup
```groovy
// Jenkinsfile - Pipeline as Code
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        IMAGE_NAME = 'myapp'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/user/myapp.git',
                    credentialsId: 'github-token'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
                sh 'npm run lint'
            }
            post {
                always {
                    junit 'test-results/*.xml'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-credentials') {
                        docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                sh '''
                    kubectl set image deployment/myapp \
                        myapp=${IMAGE_NAME}:${IMAGE_TAG} \
                        -n staging
                    kubectl rollout status deployment/myapp -n staging
                '''
            }
        }
        
        stage('Run Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                
                sh '''
                    kubectl set image deployment/myapp \
                        myapp=${IMAGE_NAME}:${IMAGE_TAG} \
                        -n production
                    kubectl rollout status deployment/myapp -n production
                '''
            }
        }
    }
    
    post {
        success {
            slackSend color: 'good',
                      message: "Build ${env.BUILD_NUMBER} succeeded! Deployed ${IMAGE_TAG}"
        }
        failure {
            slackSend color: 'danger',
                      message: "Build ${env.BUILD_NUMBER} failed!"
        }
        always {
            cleanWs()
        }
    }
}
```

### Multi-Branch Pipeline
Automatically creates pipelines for each branch.

```groovy
// Jenkinsfile for feature branches
pipeline {
    agent any
    
    stages {
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build & Deploy to Dev') {
            when {
                not { branch 'main' }
            }
            steps {
                script {
                    def branchName = env.BRANCH_NAME.replaceAll('/', '-')
                    sh "docker build -t myapp:${branchName} ."
                    sh "kubectl apply -f k8s/dev/deployment-${branchName}.yml"
                }
            }
        }
    }
}
```

### Jenkins with Terraform
```groovy
// Jenkinsfile for infrastructure
pipeline {
    agent any
    
    stages {
        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    sh 'terraform init'
                }
            }
        }
        
        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    sh 'terraform plan -out=tfplan'
                }
            }
        }
        
        stage('Terraform Apply') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Apply Terraform changes?'
                dir('terraform') {
                    sh 'terraform apply tfplan'
                }
            }
        }
    }
}
```

### Jenkins Shared Library
Reusable pipeline code.

```groovy
// vars/buildAndDeploy.groovy
def call(Map config) {
    pipeline {
        agent any
        stages {
            stage('Build') {
                steps {
                    sh "docker build -t ${config.imageName}:${env.BUILD_NUMBER} ."
                }
            }
            stage('Deploy') {
                steps {
                    sh "kubectl set image deployment/${config.deploymentName} ${config.containerName}=${config.imageName}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}

// Jenkinsfile using shared library
@Library('my-shared-library') _

buildAndDeploy(
    imageName: 'myapp',
    deploymentName: 'myapp',
    containerName: 'app'
)
```

### Parallel Execution
```groovy
pipeline {
    agent any
    
    stages {
        stage('Parallel Tests') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test:unit'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'npm run test:integration'
                    }
                }
                stage('Security Scan') {
                    steps {
                        sh 'npm audit'
                    }
                }
            }
        }
    }
}
```

---

## 12. GitOps with ArgoCD

### What is GitOps?
Git repository is the single source of truth for infrastructure and applications. Changes to Git automatically trigger deployments.

**Workflow:** Update Kubernetes manifest in Git → ArgoCD detects change → Automatically applies to cluster.

### ArgoCD Installation
```bash
# Install ArgoCD in Kubernetes
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Access ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Get admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

### Application Manifest
```yaml
# argocd-app.yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  
  source:
    repoURL: https://github.com/user/myapp-k8s-manifests
    targetRevision: main
    path: production
  
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  
  syncPolicy:
    automated:
      prune: true      # Delete resources not in Git
      selfHeal: true   # Fix manual changes
    syncOptions:
      - CreateNamespace=true
```

**Deploy application:**
```bash
kubectl apply -f argocd-app.yml
```

### Git Repository Structure
```
myapp-k8s-manifests/
├── base/
│   ├── deployment.yml
│   ├── service.yml
│   └── kustomization.yml
├── staging/
│   ├── kustomization.yml
│   └── replicas.yml
└── production/
    ├── kustomization.yml
    └── replicas.yml
```

**base/deployment.yml:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 2  # Overridden by environments
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
```

**production/kustomization.yml:**
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

bases:
  - ../base

replicas:
  - name: myapp
    count: 5

images:
  - name: myapp
    newTag: v1.2.3
```

### Helm Charts with ArgoCD
```yaml
# argocd-helm-app.yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: nginx-ingress
  namespace: argocd
spec:
  project: default
  
  source:
    repoURL: https://kubernetes.github.io/ingress-nginx
    chart: ingress-nginx
    targetRevision: 4.7.1
    helm:
      values: |
        controller:
          replicaCount: 3
          service:
            type: LoadBalancer
  
  destination:
    server: https://kubernetes.default.svc
    namespace: ingress-nginx
  
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

### Complete CI/CD with Jenkins + ArgoCD
```groovy
// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Build & Test') {
            steps {
                sh 'npm test'
                sh "docker build -t myapp:${BUILD_NUMBER} ."
                sh "docker push myapp:${BUILD_NUMBER}"
            }
        }
        
        stage('Update Kubernetes Manifests') {
            steps {
                script {
                    // Clone manifest repo
                    git url: 'https://github.com/user/myapp-k8s-manifests',
                        branch: 'main',
                        credentialsId: 'github-token'
                    
                    // Update image tag
                    sh """
                        cd production
                        kustomize edit set image myapp:${BUILD_NUMBER}
                        git add .
                        git commit -m "Update image to ${BUILD_NUMBER}"
                        git push origin main
                    """
                }
            }
        }
    }
}
```

**Flow:** Jenkins builds image → Pushes to registry → Updates Git manifest → ArgoCD detects change → Deploys to cluster.

### ArgoCD CLI
```bash
# Login
argocd login localhost:8080

# Create application
argocd app create myapp \
    --repo https://github.com/user/myapp-k8s \
    --path production \
    --dest-server https://kubernetes.default.svc \
    --dest-namespace production

# Sync application
argocd app sync myapp

# View status
argocd app get myapp

# Rollback
argocd app rollback myapp
```

### Multi-Cluster Setup
```yaml
# Multiple environments in different clusters
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp-production
spec:
  source:
    repoURL: https://github.com/user/myapp-k8s
    path: production
  destination:
    server: https://prod-cluster.example.com
    namespace: production

---
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp-staging
spec:
  source:
    repoURL: https://github.com/user/myapp-k8s
    path: staging
  destination:
    server: https://staging-cluster.example.com
    namespace: staging
```

---

## 13. Cloud Platforms (AWS / Azure / GCP)

### AWS Core Services

#### Compute
**EC2 (Elastic Compute Cloud):**
```bash
# Launch instance via CLI
aws ec2 run-instances \
    --image-id ami-0c55b159cbfafe1f0 \
    --instance-type t3.micro \
    --key-name mykey \
    --security-group-ids sg-123456 \
    --subnet-id subnet-123456 \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]'
```

**Lambda (Serverless):**
```python
# lambda_function.py
import json

def lambda_handler(event, context):
    # Process S3 upload event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']
    
    print(f"Processing {key} from {bucket}")
    
    # Your processing logic here
    
    return {
        'statusCode': 200,
        'body': json.dumps('Processed successfully')
    }
```

**ECS (Container Service):**
```json
// task-definition.json
{
  "family": "myapp",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "app",
      "image": "myapp:latest",
      "memory": 512,
      "cpu": 256,
      "portMappings": [
        {
          "containerPort": 8080,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "DATABASE_URL",
          "value": "postgresql://db.example.com/myapp"
        }
      ]
    }
  ]
}
```

#### Storage
```bash
# S3 operations
aws s3 mb s3://my-app-backups
aws s3 cp app.tar.gz s3://my-app-backups/
aws s3 sync ./logs s3://my-app-backups/logs/

# Enable versioning
aws s3api put-bucket-versioning \
    --bucket my-app-backups \
    --versioning-configuration Status=Enabled
```

#### Database
```bash
# RDS instance
aws rds create-db-instance \
    --db-instance-identifier myapp-db \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --master-username admin \
    --master-user-password MySecretPassword \
    --allocated-storage 20 \
    --backup-retention-period 7
```

### Azure Core Services

#### Compute
```bash
# Create VM
az vm create \
    --resource-group myResourceGroup \
    --name myVM \
    --image UbuntuLTS \
    --admin-username azureuser \
    --generate-ssh-keys \
    --size Standard_B2s
```

**Azure Functions (Serverless):**
```python
# __init__.py
import logging
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing request')
    
    name = req.params.get('name')
    if name:
        return func.HttpResponse(f"Hello, {name}!")
    else:
        return func.HttpResponse(
            "Please pass a name parameter",
            status_code=400
        )
```

#### Containers
```bash
# Azure Kubernetes Service (AKS)
az aks create \
    --resource-group myResourceGroup \
    --name myAKSCluster \
    --node-count 3 \
    --enable-managed-identity \
    --generate-ssh-keys

# Get credentials
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster

# Now use kubectl
kubectl get nodes
```

### GCP Core Services

#### Compute
```bash
# Create VM instance
gcloud compute instances create myinstance \
    --zone=us-central1-a \
    --machine-type=e2-medium \
    --image-family=ubuntu-2004-lts \
    --image-project=ubuntu-os-cloud

# Cloud Functions
gcloud functions deploy hello_world \
    --runtime python39 \
    --trigger-http \
    --allow-unauthenticated
```

#### GKE (Google Kubernetes Engine)
```bash
# Create cluster
gcloud container clusters create mycluster \
    --zone us-central1-a \
    --num-nodes 3 \
    --machine-type n1-standard-2

# Get credentials
gcloud container clusters get-credentials mycluster --zone us-central1-a
```

### Cloud-Native Application Example
```yaml
# AWS: deploy-aws.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  template:
    spec:
      serviceAccountName: myapp-sa  # AWS IAM role
      containers:
      - name: app
        image: 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
        env:
        - name: AWS_REGION
          value: us-east-1
        - name: S3_BUCKET
          value: myapp-data
        - name: RDS_ENDPOINT
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: endpoint
```

### Multi-Cloud Terraform
```hcl
# Deploy to AWS and GCP
provider "aws" {
  region = "us-east-1"
}

provider "google" {
  project = "my-project"
  region  = "us-central1"
}

# AWS resources
resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
}

resource "aws_s3_bucket" "data" {
  bucket = "myapp-data"
}

# GCP resources
resource "google_compute_instance" "app" {
  name         = "app-instance"
  machine_type = "e2-medium"
  zone         = "us-central1-a"
  
  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts"
    }
  }
}

resource "google_storage_bucket" "data" {
  name     = "myapp-gcp-data"
  location = "US"
}
```

---

## 14. Monitoring & Logging

### Prometheus (Metrics)

**Installation:**
```yaml
# prometheus-config.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
```

**Application with Metrics:**
```python
# app.py with Prometheus metrics
from prometheus_client import Counter, Histogram, start_http_server
import time

# Metrics
request_count = Counter('app_requests_total', 'Total requests')
request_duration = Histogram('app_request_duration_seconds', 'Request duration')

@request_duration.time()
def process_request():
    request_count.inc()
    time.sleep(0.1)
    return "OK"

# Start metrics server
start_http_server(8000)
```

**PromQL Queries:**
```promql
# CPU usage
rate(container_cpu_usage_seconds_total[5m])

# Memory usage
container_memory_usage_bytes / container_spec_memory_limit_bytes * 100

# Request rate
rate(http_requests_total[5m])

# 95th percentile latency
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# Error rate
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])
```

### Grafana (Visualization)

**Dashboard JSON:**
```json
{
  "dashboard": {
    "title": "Application Metrics",
    "panels": [
      {
        "title": "Request Rate",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])"
          }
        ],
        "type": "graph"
      },
      {
        "title": "Error Rate",
        "targets": [
          {
            "expr": "rate(http_requests_total{status=~\"5..\"}[5m])"
          }
        ],
        "type": "graph"
      }
    ]
  }
}
```

### ELK Stack (Logging)

**Filebeat Configuration:**
```yaml
# filebeat.yml
filebeat.inputs:
  - type: container
    paths:
      - '/var/lib/docker/containers/*/*.log'

processors:
  - add_kubernetes_metadata:
      host: ${NODE_NAME}
      matchers:
      - logs_path:
          logs_path: "/var/lib/docker/containers/"

output.elasticsearch:
  hosts: ["elasticsearch:9200"]
  index: "filebeat-%{+yyyy.MM.dd}"
```

**Logstash Pipeline:**
```ruby
# logstash.conf
input {
  beats {
    port => 5044
  }
}

filter {
  if [type] == "nginx" {
    grok {
      match => { "message" => "%{COMBINEDAPACHELOG}" }
    }
    date {
      match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
  }
  
  if [type] == "application" {
    json {
      source => "message"
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
```

**Application Logging:**
```python
# Structured logging
import logging
import json

logger = logging.getLogger(__name__)

def log_event(event_type, **kwargs):
    log_data = {
        "timestamp": time.time(),
        "event": event_type,
        **kwargs
    }
    logger.info(json.dumps(log_data))

# Usage
log_event("user_login", user_id=123, ip="192.168.1.1")
log_event("payment_processed", amount=99.99, currency="USD")
```

### Alert Manager
```yaml
# alertmanager.yml
route:
  group_by: ['alertname', 'cluster']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 12h
  receiver: 'slack'

receivers:
  - name: 'slack'
    slack_configs:
      - api_url: 'https://hooks.slack.com/services/XXX'
        channel: '#alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ range .Alerts }}{{ .Annotations.summary }}{{ end }}'

# Prometheus alerts
groups:
  - name: application
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 5m
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value }} requests/sec"
        labels:
          severity: critical
      
      - alert: HighMemoryUsage
        expr: container_memory_usage_bytes / container_spec_memory_limit_bytes > 0.9
        for: 5m
        annotations:
          summary: "Container memory usage > 90%"
```

### Complete Monitoring Stack
```yaml
# docker-compose.yml
version: '3'

services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
  
  grafana:
    image: grafana/grafana
    volumes:
      - grafana_data:/var/lib/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
  
  elasticsearch:
    image: elasticsearch:8.8.0
    environment:
      - discovery.type=single-node
    volumes:
      - es_data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
  
  kibana:
    image: kibana:8.8.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
  
  filebeat:
    image: elastic/filebeat:8.8.0
    volumes:
      - ./filebeat.yml:/usr/share/filebeat/filebeat.yml
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
```

---

## 15. Python for DevOps

### Automation Scripts

**Server Health Check:**
```python
#!/usr/bin/env python3
import requests
import smtplib
from email.message import EmailMessage

def check_service(url):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            return True, "Service is up"
        else:
            return False, f"Service returned {response.status_code}"
    except requests.RequestException as e:
        return False, str(e)

def send_alert(service, message):
    msg = EmailMessage()
    msg['Subject'] = f'ALERT: {service} is down'
    msg['From'] = 'devops@example.com'
    msg['To'] = 'team@example.com'
    msg.set_content(message)
    
    with smtplib.SMTP('smtp.example.com', 587) as server:
        server.starttls()
        server.login('user', 'password')
        server.send_message(msg)

services = {
    'Web': 'https://example.com',
    'API': 'https://api.example.com/health',
    'Database': 'https://db.example.com:5432'
}

for service, url in services.items():
    is_up, message = check_service(url)
    if not is_up:
        print(f"❌ {service}: {message}")
        send_alert(service, message)
    else:
        print(f"✅ {service}: OK")
```

### AWS Automation with Boto3
```python
import boto3
from datetime import datetime, timedelta

# EC2 Management
ec2 = boto3.client('ec2', region_name='us-east-1')

def list_unused_volumes():
    """Find unattached EBS volumes"""
    volumes = ec2.describe_volumes(
        Filters=[{'Name': 'status', 'Values': ['available']}]
    )
    
    for volume in volumes['Volumes']:
        size = volume['Size']
        vol_id = volume['VolumeId']
        print(f"Unused volume: {vol_id} ({size}GB)")

def cleanup_old_snapshots(days=30):
    """Delete snapshots older than specified days"""
    snapshots = ec2.describe_snapshots(OwnerIds=['self'])
    cutoff_date = datetime.now() - timedelta(days=days)
    
    for snapshot in snapshots['Snapshots']:
        snap_date = snapshot['StartTime'].replace(tzinfo=None)
        if snap_date < cutoff_date:
            snap_id = snapshot['SnapshotId']
            print(f"Deleting old snapshot: {snap_id}")
            ec2.delete_snapshot(SnapshotId=snap_id)

def backup_instance(instance_id):
    """Create AMI backup of instance"""
    timestamp = datetime.now().strftime('%Y%m%d-%H%M%S')
    ami_name = f"backup-{instance_id}-{timestamp}"
    
    response = ec2.create_image(
        InstanceId=instance_id,
        Name=ami_name,
        NoReboot=True
    )
    
    print(f"Created backup AMI: {response['ImageId']}")
    return response['ImageId']

# S3 Management
s3 = boto3.client('s3')

def sync_s3_buckets(source_bucket, dest_bucket):
    """Sync contents between two S3 buckets"""
    paginator = s3.get_paginator('list_objects_v2')
    
    for page in paginator.paginate(Bucket=source_bucket):
        if 'Contents' in page:
            for obj in page['Contents']:
                key = obj['Key']
                print(f"Copying {key}...")
                s3.copy_object(
                    CopySource={'Bucket': source_bucket, 'Key': key},
                    Bucket=dest_bucket,
                    Key=key
                )

def cleanup_old_files(bucket, prefix, days=90):
    """Delete S3 files older than specified days"""
    cutoff_date = datetime.now() - timedelta(days=days)
    paginator = s3.get_paginator('list_objects_v2')
    
    for page in paginator.paginate(Bucket=bucket, Prefix=prefix):
        if 'Contents' in page:
            for obj in page['Contents']:
                last_modified = obj['LastModified'].replace(tzinfo=None)
                if last_modified < cutoff_date:
                    key = obj['Key']
                    print(f"Deleting {key}")
                    s3.delete_object(Bucket=bucket, Key=key)
```

### Docker Management
```python
import docker

client = docker.from_env()

def cleanup_containers():
    """Remove stopped containers"""
    containers = client.containers.list(all=True, filters={'status': 'exited'})
    for container in containers:
        print(f"Removing {container.name}")
        container.remove()

def cleanup_images():
    """Remove dangling images"""
    images = client.images.list(filters={'dangling': True})
    for image in images:
        print(f"Removing image {image.id}")
        client.images.remove(image.id)

def monitor_container_resources():
    """Monitor container CPU and memory usage"""
    containers = client.containers.list()
    
    for container in containers:
        stats = container.stats(stream=False)
        
        # Calculate CPU percentage
        cpu_delta = stats['cpu_stats']['cpu_usage']['total_usage'] - \
                   stats['precpu_stats']['cpu_usage']['total_usage']
        system_delta = stats['cpu_stats']['system_cpu_usage'] - \
                      stats['precpu_stats']['system_cpu_usage']
        cpu_percent = (cpu_delta / system_delta) * 100.0
        
        # Calculate memory usage
        memory_usage = stats['memory_stats']['usage'] / 1024 / 1024  # MB
        memory_limit = stats['memory_stats']['limit'] / 1024 / 1024  # MB
        memory_percent = (memory_usage / memory_limit) * 100
        
        print(f"{container.name}:")
        print(f"  CPU: {cpu_percent:.2f}%")
        print(f"  Memory: {memory_usage:.2f}MB / {memory_limit:.2f}MB ({memory_percent:.2f}%)")

def deploy_container(image, name, ports, environment):
    """Deploy a new container"""
    container = client.containers.run(
        image,
        name=name,
        ports=ports,
        environment=environment,
        detach=True,
        restart_policy={'Name': 'always'}
    )
    print(f"Deployed {name}: {container.id}")
    return container
```

### Kubernetes with Python
```python
from kubernetes import client, config

# Load kubeconfig
config.load_kube_config()

v1 = client.CoreV1Api()
apps_v1 = client.AppsV1Api()

def list_pods(namespace='default'):
    """List all pods in namespace"""
    pods = v1.list_namespaced_pod(namespace)
    for pod in pods.items:
        print(f"{pod.metadata.name}: {pod.status.phase}")

def scale_deployment(name, namespace, replicas):
    """Scale deployment to specified replicas"""
    body = {'spec': {'replicas': replicas}}
    apps_v1.patch_namespaced_deployment_scale(
        name=name,
        namespace=namespace,
        body=body
    )
    print(f"Scaled {name} to {replicas} replicas")

def get_pod_logs(pod_name, namespace='default', tail_lines=100):
    """Get logs from pod"""
    logs = v1.read_namespaced_pod_log(
        name=pod_name,
        namespace=namespace,
        tail_lines=tail_lines
    )
    return logs

def create_deployment(name, image, replicas=3, namespace='default'):
    """Create a new deployment"""
    deployment = client.V1Deployment(
        metadata=client.V1ObjectMeta(name=name),
        spec=client.V1DeploymentSpec(
            replicas=replicas,
            selector=client.V1LabelSelector(
                match_labels={'app': name}
            ),
            template=client.V1PodTemplateSpec(
                metadata=client.V1ObjectMeta(labels={'app': name}),
                spec=client.V1PodSpec(
                    containers=[
                        client.V1Container(
                            name=name,
                            image=image,
                            ports=[client.V1ContainerPort(container_port=8080)]
                        )
                    ]
                )
            )
        )
    )
    
    apps_v1.create_namespaced_deployment(namespace=namespace, body=deployment)
    print(f"Created deployment {name}")

def check_pod_health(namespace='default'):
    """Check health of all pods"""
    pods = v1.list_namespaced_pod(namespace)
    unhealthy_pods = []
    
    for pod in pods.items:
        if pod.status.phase != 'Running':
            unhealthy_pods.append({
                'name': pod.metadata.name,
                'status': pod.status.phase,
                'message': pod.status.message
            })
    
    if unhealthy_pods:
        print("Unhealthy pods found:")
        for pod in unhealthy_pods:
            print(f"  {pod['name']}: {pod['status']}")
    else:
        print("All pods are healthy")
    
    return unhealthy_pods
```

### Log Analysis
```python
import re
from collections import Counter
from datetime import datetime

def analyze_nginx_logs(log_file):
    """Analyze nginx access logs"""
    ip_counter = Counter()
    status_counter = Counter()
    endpoint_counter = Counter()
    
    log_pattern = re.compile(
        r'(?P<ip>[\d.]+) .* \[(?P<time>.*?)\] '
        r'"(?P<method>\w+) (?P<endpoint>.*?) HTTP/.*?" '
        r'(?P<status>\d+) (?P<size>\d+)'
    )
    
    with open(log_file, 'r') as f:
        for line in f:
            match = log_pattern.match(line)
            if match:
                data = match.groupdict()
                ip_counter[data['ip']] += 1
                status_counter[data['status']] += 1
                endpoint_counter[data['endpoint']] += 1
    
    print("Top 10 IPs:")
    for ip, count in ip_counter.most_common(10):
        print(f"  {ip}: {count}")
    
    print("\nStatus codes:")
    for status, count in status_counter.items():
        print(f"  {status}: {count}")
    
    print("\nTop endpoints:")
    for endpoint, count in endpoint_counter.most_common(5):
        print(f"  {endpoint}: {count}")

def find_errors_in_logs(log_file, error_pattern='ERROR'):
    """Find and extract error messages"""
    errors = []
    
    with open(log_file, 'r') as f:
        for line in f:
            if error_pattern in line:
                errors.append(line.strip())
    
    print(f"Found {len(errors)} errors")
    return errors
```

### CI/CD Automation
```python
import subprocess
import requests

def run_tests():
    """Run test suite"""
    result = subprocess.run(['pytest', '-v'], capture_output=True, text=True)
    return result.returncode == 0

def build_docker_image(tag):
    """Build Docker image"""
    result = subprocess.run(
        ['docker', 'build', '-t', tag, '.'],
        capture_output=True,
        text=True
    )
    if result.returncode == 0:
        print(f"Built image: {tag}")
        return True
    else:
        print(f"Build failed: {result.stderr}")
        return False

def push_to_registry(image, registry='docker.io'):
    """Push image to registry"""
    full_image = f"{registry}/{image}"
    
    # Tag image
    subprocess.run(['docker', 'tag', image, full_image])
    
    # Push image
    result = subprocess.run(
        ['docker', 'push', full_image],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        print(f"Pushed {full_image}")
        return True
    return False

def deploy_to_kubernetes(image, deployment_name, namespace='default'):
    """Deploy new image to Kubernetes"""
    result = subprocess.run([
        'kubectl', 'set', 'image',
        f'deployment/{deployment_name}',
        f'{deployment_name}={image}',
        '-n', namespace
    ], capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"Deployed {image} to {deployment_name}")
        
        # Wait for rollout
        subprocess.run([
            'kubectl', 'rollout', 'status',
            f'deployment/{deployment_name}',
            '-n', namespace
        ])
        return True
    return False

def notify_slack(webhook_url, message):
    """Send notification to Slack"""
    payload = {
        'text': message,
        'username': 'DevOps Bot',
        'icon_emoji': ':robot_face:'
    }
    requests.post(webhook_url, json=payload)

# Complete deployment pipeline
def deployment_pipeline():
    """Complete CI/CD pipeline"""
    print("Starting deployment pipeline...")
    
    # Run tests
    print("Running tests...")
    if not run_tests():
        notify_slack(SLACK_WEBHOOK, "❌ Tests failed!")
        return False
    
    # Build image
    image_tag = f"myapp:{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    print(f"Building image {image_tag}...")
    if not build_docker_image(image_tag):
        notify_slack(SLACK_WEBHOOK, f"❌ Build failed for {image_tag}")
        return False
    
    # Push to registry
    print("Pushing to registry...")
    if not push_to_registry(image_tag):
        notify_slack(SLACK_WEBHOOK, f"❌ Push failed for {image_tag}")
        return False
    
    # Deploy to Kubernetes
    print("Deploying to Kubernetes...")
    if not deploy_to_kubernetes(image_tag, 'myapp', 'production'):
        notify_slack(SLACK_WEBHOOK, f"❌ Deployment failed for {image_tag}")
        return False
    
    notify_slack(SLACK_WEBHOOK, f"✅ Successfully deployed {image_tag}")
    return True
```

---

## 16. Real-World Projects

### Project 1: Complete CI/CD Pipeline

**Goal:** Build a full CI/CD pipeline for a Node.js application.

**Components:**
- GitHub repository with Node.js app
- Jenkins for CI/CD
- Docker for containerization
- Kubernetes for orchestration
- ArgoCD for GitOps
- Prometheus + Grafana for monitoring

**Implementation Steps:**

1. **Application Setup:**
```javascript
// app.js
const express = require('express');
const prometheus = require('prom-client');

const app = express();
const register = new prometheus.Registry();

// Metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

prometheus.collectDefaultMetrics({ register });

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  const end = httpRequestDuration.startTimer();
  res.json({ message: 'Hello DevOps!' });
  end({ method: 'GET', route: '/', status_code: 200 });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

2. **Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

3. **Kubernetes Manifests:**
```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "3000"
    prometheus.io/path: "/metrics"
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
        resources:
          requests:
            cpu: 100m
            memory: 128Mi
          limits:
            cpu: 200m
            memory: 256Mi
```

4. **Jenkins Pipeline:**
```groovy
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'myregistry.io'
        IMAGE_NAME = 'myapp'
        KUBE_NAMESPACE = 'production'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def imageTag = "${env.BUILD_NUMBER}"
                    sh "docker build -t ${IMAGE_NAME}:${imageTag} ."
                    sh "docker tag ${IMAGE_NAME}:${imageTag} ${DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag}"
                    sh "docker tag ${IMAGE_NAME}:${imageTag} ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    def imageTag = "${env.BUILD_NUMBER}"
                    sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag}"
                    sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                }
            }
        }
        
        stage('Update Manifests') {
            steps {
                script {
                    def imageTag = "${env.BUILD_NUMBER}"
                    sh """
                        git clone https://github.com/user/k8s-manifests.git
                        cd k8s-manifests
                        sed -i 's|image: .*|image: ${DOCKER_REGISTRY}/${IMAGE_NAME}:${imageTag}|' production/deployment.yaml
                        git add .
                        git commit -m "Update image to ${imageTag}"
                        git push origin main
                    """
                }
            }
        }
    }
    
    post {
        success {
            slackSend color: 'good', message: "✅ Build ${env.BUILD_NUMBER} deployed successfully"
        }
        failure {
            slackSend color: 'danger', message: "❌ Build ${env.BUILD_NUMBER} failed"
        }
    }
}
```

### Project 2: Multi-Environment Infrastructure

**Goal:** Create staging and production environments with Terraform.

**Directory Structure:**
```
terraform/
├── modules/
│   ├── vpc/
│   ├── eks/
│   └── rds/
├── environments/
│   ├── staging/
│   │   ├── main.tf
│   │   └── terraform.tfvars
│   └── production/
│       ├── main.tf
│       └── terraform.tfvars
```

**Module Example:**
```hcl
# modules/vpc/main.tf
resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  enable_dns_hostnames = true
  
  tags = {
    Name = "${var.environment}-vpc"
    Environment = var.environment
  }
}

resource "aws_subnet" "public" {
  count = length(var.public_subnet_cidrs)
  
  vpc_id = aws_vpc.main.id
  cidr_block = var.public_subnet_cidrs[count.index]
  availability_zone = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "${var.environment}-public-${count.index + 1}"
    Environment = var.environment
  }
}

# modules/vpc/outputs.tf
output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = aws_subnet.public[*].id
}
```

**Environment Configuration:**
```hcl
# environments/production/main.tf
module "vpc" {
  source = "../../modules/vpc"
  
  environment = "production"
  vpc_cidr = "10.0.0.0/16"
  public_subnet_cidrs = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

module "eks" {
  source = "../../modules/eks"
  
  cluster_name = "production-cluster"
  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.public_subnet_ids
  node_instance_type = "t3.large"
  desired_capacity = 5
}

module "rds" {
  source = "../../modules/rds"
  
  identifier = "production-db"
  instance_class = "db.t3.large"
  allocated_storage = 100
  vpc_id = module.vpc.vpc_id
}
```

### Project 3: Monitoring & Alerting System

**Complete Stack Deployment:**
```yaml
# monitoring-stack.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus:/etc/prometheus
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
    ports:
      - "9090:9090"
  
  grafana:
    image: grafana/grafana:latest
    volumes:
      - ./grafana/datasources:/etc/grafana/provisioning/datasources
      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards
      - grafana-data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin123
      - GF_INSTALL_PLUGINS=grafana-piechart-panel
    ports:
      - "3000:3000"
  
  alertmanager:
    image: prom/alertmanager:latest
    volumes:
      - ./alertmanager:/etc/alertmanager
    ports:
      - "9093:9093"
  
  node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
  
  elasticsearch:
    image: elasticsearch:8.8.0
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - es-data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
  
  kibana:
    image: kibana:8.8.0
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    ports:
      - "5601:5601"
  
  filebeat:
    image: elastic/filebeat:8.8.0
    user: root
    volumes:
      - ./filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro

volumes:
  prometheus-data:
  grafana-data:
  es-data:
```

### Project 4: Disaster Recovery Setup

**Backup Automation:**
```bash
#!/bin/bash
# backup-automation.sh

BACKUP_DIR="/backups"
S3_BUCKET="s3://company-backups"
DATE=$(date +%Y%m%d)

# Database backup
echo "Backing up database..."
kubectl exec -n production postgres-0 -- pg_dump -U postgres myapp > $BACKUP_DIR/db-$DATE.sql
gzip $BACKUP_DIR/db-$DATE.sql

# Kubernetes resources backup
echo "Backing up Kubernetes resources..."
kubectl get all -n production -o yaml > $BACKUP_DIR/k8s-resources-$DATE.yaml

# Application data backup
echo "Backing up application data..."
kubectl exec -n production myapp-0 -- tar czf - /data > $BACKUP_DIR/app-data-$DATE.tar.gz

# Upload to S3
echo "Uploading to S3..."
aws s3 sync $BACKUP_DIR/ $S3_BUCKET/$(date +%Y/%m/%d)/

# Cleanup old local backups (keep last 7 days)
find $BACKUP_DIR -type f -mtime +7 -delete

echo "Backup completed successfully"
```

---

## 17. Interview Preparation

### Common DevOps Questions

**1. Explain CI/CD**
*Answer:* CI/CD is Continuous Integration and Continuous Deployment. CI means automatically building and testing code every time developers push changes. CD means automatically deploying that code to staging/production after it passes tests. For example, a developer pushes code to GitHub, Jenkins automatically runs tests, builds a Docker image, and deploys to Kubernetes if tests pass.

**2. What is the difference between Docker and VM?**
*Answer:* VMs virtualize hardware (each has its own OS), while Docker containers share the host OS kernel. Containers are lighter (MBs vs GBs), start in seconds (vs minutes), and use fewer resources. Use VMs for complete isolation, containers for microservices and rapid deployment.

**3. Explain Kubernetes architecture**
*Answer:* Kubernetes has a master node (control plane) with API server, scheduler, controller manager, and etcd. Worker nodes run pods (containers). When you deploy, the API server receives the request, scheduler assigns pods to nodes, kubelet on worker nodes starts containers, kube-proxy handles networking.

**4. How do you troubleshoot a failing pod?**
```bash
# Check pod status
kubectl get pods
kubectl describe pod <pod-name>

# Check logs
kubectl logs <pod-name>
kubectl logs <pod-name> --previous  # Previous container

# Check events
kubectl get events --sort-by='.lastTimestamp'

# Enter container
kubectl exec -it <pod-name> -- /bin/sh

# Common issues:
# - ImagePullBackOff: Wrong image name/tag or registry credentials
# - CrashLoopBackOff: Application error, check logs
# - Pending: Insufficient resources or scheduling issues
```

**5. Difference between ConfigMap and Secret?**
*Answer:* Both store configuration data. ConfigMaps store non-sensitive data (database URLs, feature flags) in plain text. Secrets store sensitive data (passwords, API keys) base64-encoded and can be encrypted at rest. Example: Database host in ConfigMap, password in Secret.

**6. Explain Blue-Green Deployment**
*Answer:* You have two identical environments (Blue=current, Green=new). Deploy new version to Green, test it, then switch traffic from Blue to Green. If issues arise, instantly switch back to Blue. Minimizes downtime and risk.

**7. What is Infrastructure as Code?**
*Answer:* Managing infrastructure using code files instead of manual configuration. With Terraform, you write config files to create VPCs, servers, databases. Benefits: version control, reproducible environments, easy to destroy/recreate, documentation as code.

**8. How do you secure Kubernetes?**
- RBAC for access control
- Network policies to restrict pod communication
- Pod security policies/standards
- Secrets encryption at rest
- Regular security scans (Trivy, Aqua)
- Limit container privileges (non-root users)
- Keep Kubernetes updated

**9. Explain Prometheus architecture**
*Answer:* Prometheus scrapes metrics from targets (applications, exporters) at regular intervals, stores time-series data, and allows querying with PromQL. Alertmanager handles alerts. Grafana visualizes data. Example: Prometheus scrapes /metrics endpoint every 15s, stores CPU/memory data, alerts if CPU > 80%.

**10. Describe your ideal CI/CD pipeline**
*Answer:* Code pushed → Jenkins triggered → Run unit tests → Build Docker image → Push to registry → Deploy to staging → Run integration tests → Manual approval → Deploy to production → Health checks → Rollback if failed. Include security scans, code quality checks, and notifications at each stage.

### Scenario-Based Questions

**Scenario 1: Production is down**
```
Steps:
1. Check monitoring (Grafana) - identify which service failed
2. Check pod status: kubectl get pods -n production
3. Check logs: kubectl logs <failed-pod>
4. Check recent deployments: kubectl rollout history
5. If recent deployment caused issue: kubectl rollout undo
6. If infrastructure issue: Check cloud console, security groups, load balancer
7. Document incident, create postmortem
```

**Scenario 2: Application is slow**
```
Investigation:
1. Check metrics: CPU, memory, disk I/O, network
2. Check database: Slow queries, connection pool exhaustion
3. Check external dependencies: API rate limits, third-party services
4. Check logs for errors or timeouts
5. Use APM tools (DataDog, New Relic) for detailed traces
6. Scale horizontally if resource-constrained
```

**Scenario 3: Need to deploy urgent hotfix**
```
Process:
1. Create hotfix branch from production
2. Make minimal changes
3. Run automated tests locally
4. Push to branch - triggers CI pipeline
5. Deploy to staging first
6. Quick smoke test on staging
7. Deploy to production with monitoring
8. Merge hotfix back to main branch
```

### Hands-On Tasks

**Task 1: Deploy 3-tier application**
- Frontend (React)
- Backend API (Node.js)
- Database (PostgreSQL)
- Use Docker Compose or Kubernetes
- Implement health checks
- Add persistent storage
- Configure environment-specific settings

**Task 2: Set up monitoring**
- Install Prometheus + Grafana
- Configure application to expose metrics
- Create custom dashboard
- Set up alerts for CPU > 80%, Memory > 90%
- Test alert by simulating high load

**Task 3: Create Jenkins pipeline**
- Multi-stage pipeline (test, build, deploy)
- Integrate with GitHub webhooks
- Build Docker image
- Push to registry
- Deploy to Kubernetes
- Send Slack notifications

---

## 18. Best Practices

### Git Best Practices
- Commit often with clear messages
- Use feature branches, never commit directly to main
- Keep commits atomic (one logical change per commit)
- Write descriptive commit messages: "Fix login bug" not "fixed stuff"
- Use `.gitignore` for secrets, build artifacts, dependencies
- Squash commits before merging to keep history clean
- Use Pull Requests for code review

### Docker Best Practices
- Use official base images
- Use specific tags, not `latest`
- Minimize layers (combine RUN commands)
- Use `.dockerignore` to exclude unnecessary files
- Run containers as non-root user
- Use multi-stage builds to reduce image size
- Scan images for vulnerabilities (Trivy, Snyk)
- Clean up in same layer: `RUN apt update && apt install && rm -rf /var/lib/apt/lists/*`

```dockerfile
# Good Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs
WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs . .
EXPOSE 3000
CMD ["node", "app.js"]
```

### Kubernetes Best Practices
- Always set resource requests and limits
- Use namespaces to organize resources
- Implement liveness and readiness probes
- Use ConfigMaps and Secrets for configuration
- Enable RBAC and use least privilege
- Use labels and selectors consistently
- Implement network policies
- Use StatefulSets for stateful applications
- Store sensitive data in Secrets, not ConfigMaps
- Use Horizontal Pod Autoscaler for scaling

```yaml
# Good Kubernetes deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: production
  labels:
    app: myapp
    version: v1.0.0
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
        version: v1.0.0
    spec:
      serviceAccountName: myapp-sa
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
      containers:
      - name: myapp
        image: myapp:1.0.0
        ports:
        - containerPort: 8080
          name: http
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
        resources:
          requests:
            cpu: 100m
            memory: 128Mi
          limits:
            cpu: 500m
            memory: 512Mi
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
```

### Terraform Best Practices
- Use remote state (S3 + DynamoDB locking)
- Use modules for reusable infrastructure
- Use variables for all configurable values
- Use workspaces for environments
- Always run `terraform plan` before `apply`
- Use `.tfvars` files for different environments
- Never commit credentials or state files
- Use `terraform fmt` to format code
- Tag all resources consistently
- Use data sources to reference existing resources

```hcl
# Good Terraform structure
# variables.tf
variable "environment" {
  description = "Environment name"
  type        = string
  
  validation {
    condition     = contains(["dev", "staging", "production"], var.environment)
    error_message = "Environment must be dev, staging, or production."
  }
}

# main.tf
locals {
  common_tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Project     = "MyApp"
  }
}

resource "aws_instance" "app" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  
  tags = merge(
    local.common_tags,
    {
      Name = "${var.environment}-app-server"
    }
  )
}

# outputs.tf
output "instance_ip" {
  description = "Public IP of the instance"
  value       = aws_instance.app.public_ip
}
```

### CI/CD Best Practices
- Test everything before production
- Use feature flags for gradual rollouts
- Implement automated rollback
- Keep pipelines fast (< 10 minutes)
- Run security scans in pipeline
- Use semantic versioning
- Store artifacts in registry
- Separate build and deploy stages
- Use environment-specific configuration
- Monitor deployment success rates

### Security Best Practices
- Never store secrets in code or Git
- Use secret management tools (Vault, AWS Secrets Manager)
- Rotate credentials regularly
- Implement least privilege access
- Enable audit logging
- Scan images and dependencies for vulnerabilities
- Use SSL/TLS for all communication
- Implement rate limiting and DDoS protection
- Keep all systems updated
- Use multi-factor authentication
- Encrypt data at rest and in transit

```yaml
# Secret management example
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  database-password: "${DATABASE_PASSWORD}"  # From CI/CD variable
  api-key: "${API_KEY}"

---
# External Secrets Operator (better approach)
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: app-secrets
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: aws-secrets-manager
    kind: SecretStore
  target:
    name: app-secrets
  data:
  - secretKey: database-password
    remoteRef:
      key: production/database/password
  - secretKey: api-key
    remoteRef:
      key: production/api/key
```

### Monitoring Best Practices
- Monitor the 4 Golden Signals: Latency, Traffic, Errors, Saturation
- Set meaningful alerts (avoid alert fatigue)
- Use SLOs (Service Level Objectives)
- Implement distributed tracing
- Log structured data (JSON)
- Centralize logs
- Monitor business metrics, not just technical
- Create runbooks for common issues
- Test alerts regularly
- Dashboard for each service

### Infrastructure Best Practices
- Treat infrastructure as immutable
- Use auto-scaling
- Implement health checks
- Use multiple availability zones
- Have disaster recovery plan
- Regular backups with tested restore process
- Use infrastructure as code
- Document architecture
- Implement chaos engineering
- Cost optimization monitoring

---

## 19. Tools Reference

### Essential DevOps Tools by Category

#### Version Control
- **Git:** Distributed version control
- **GitHub/GitLab/Bitbucket:** Git hosting platforms with CI/CD
- **GitKraken/SourceTree:** GUI clients

#### CI/CD
- **Jenkins:** Open-source automation server
- **GitHub Actions:** GitHub-native CI/CD
- **GitLab CI:** Integrated with GitLab
- **CircleCI:** Cloud-based CI/CD
- **Travis CI:** CI service for GitHub
- **ArgoCD:** GitOps continuous delivery

#### Containerization & Orchestration
- **Docker:** Container platform
- **Podman:** Daemonless container engine
- **Kubernetes:** Container orchestration
- **OpenShift:** Enterprise Kubernetes
- **Docker Swarm:** Docker-native orchestration
- **Helm:** Kubernetes package manager

#### Configuration Management
- **Ansible:** Agentless automation
- **Puppet:** Configuration management
- **Chef:** Infrastructure automation
- **SaltStack:** Event-driven automation

#### Infrastructure as Code
- **Terraform:** Multi-cloud IaC
- **Pulumi:** Modern IaC with real programming languages
- **CloudFormation:** AWS-native IaC
- **ARM Templates:** Azure-native IaC

#### Cloud Platforms
- **AWS:** Amazon Web Services
- **Azure:** Microsoft Azure
- **GCP:** Google Cloud Platform
- **DigitalOcean:** Developer-friendly cloud
- **Linode:** Simple cloud hosting

#### Monitoring & Observability
- **Prometheus:** Metrics collection
- **Grafana:** Visualization
- **Datadog:** Full-stack monitoring
- **New Relic:** Application performance
- **ELK Stack:** Elasticsearch, Logstash, Kibana
- **Splunk:** Log management
- **Jaeger:** Distributed tracing
- **Nagios:** Infrastructure monitoring

#### Security
- **Vault:** Secrets management
- **Trivy:** Container vulnerability scanner
- **SonarQube:** Code quality and security
- **Aqua:** Container security
- **Snyk:** Developer-first security

#### Collaboration
- **Slack:** Team communication
- **PagerDuty:** Incident management
- **Jira:** Project management
- **Confluence:** Documentation

### Tool Selection Guide

**For Startups:**
- GitHub + GitHub Actions
- Docker + Docker Compose
- AWS or DigitalOcean
- Prometheus + Grafana
- Terraform

**For Enterprise:**
- GitLab or GitHub Enterprise
- Jenkins + ArgoCD
- Kubernetes on AWS EKS / Azure AKS / GCP GKE
- Datadog or New Relic
- Terraform or Pulumi
- Vault for secrets

**For Learning:**
- Start with: Git, Docker, Linux
- Then: Jenkins, Kubernetes, Terraform
- Practice on: Free tier cloud (AWS/GCP/Azure)
- Use: Minikube or Kind for local Kubernetes

### Quick Command Reference

```bash
# Docker
docker build -t myapp:1.0 .
docker run -d -p 8080:8080 myapp:1.0
docker ps
docker logs container_id
docker exec -it container_id bash

# Kubernetes
kubectl get pods -A
kubectl describe pod pod-name
kubectl logs pod-name -f
kubectl apply -f deployment.yml
kubectl delete -f deployment.yml
kubectl port-forward pod-name 8080:8080

# Terraform
terraform init
terraform plan
terraform apply
terraform destroy
terraform fmt
terraform validate

# Git
git clone repo-url
git checkout -b feature-branch
git add .
git commit -m "message"
git push origin feature-branch
git pull origin main

# Ansible
ansible-playbook -i inventory.ini playbook.yml
ansible all -m ping
ansible-playbook playbook.yml --check

# AWS CLI
aws ec2 describe-instances
aws s3 ls
aws eks update-kubeconfig --name cluster-name

# Helm
helm install myapp ./chart
helm upgrade myapp ./chart
helm list
helm rollback myapp 1
```

---

## 20. Career Guidance

### DevOps Career Path

**Entry Level (0-2 years):**
- **Title:** Junior DevOps Engineer, Build & Release Engineer
- **Skills:** Linux, Git, basic scripting, Docker
- **Responsibilities:** Support CI/CD pipelines, basic monitoring, documentation
- **Salary Range:** $60K-$80K

**Mid Level (2-5 years):**
- **Title:** DevOps Engineer, Site Reliability Engineer
- **Skills:** Kubernetes, Terraform, Ansible, cloud platforms, monitoring
- **Responsibilities:** Build/maintain CI/CD, infrastructure automation, incident response
- **Salary Range:** $90K-$130K

**Senior Level (5-8 years):**
- **Title:** Senior DevOps Engineer, Senior SRE
- **Skills:** Architecture design, multiple cloud platforms, security, mentoring
- **Responsibilities:** Design systems, lead projects, mentor juniors, on-call rotation
- **Salary Range:** $130K-$180K

**Lead/Principal (8+ years):**
- **Title:** Lead DevOps Engineer, Principal SRE, DevOps Architect
- **Skills:** Strategic planning, cross-team collaboration, cost optimization
- **Responsibilities:** Define standards, multi-team projects, technology evaluation
- **Salary Range:** $180K-$250K+

**Management Track:**
- DevOps Team Lead → Engineering Manager → Director of DevOps → VP Engineering

### How to Get Your First DevOps Job

**1. Build Foundation:**
- Learn Linux thoroughly (get comfortable with command line)
- Master Git (understand branching, merging, rebasing)
- Learn one scripting language (Bash or Python)
- Understand networking basics

**2. Practice Projects:**
- Deploy a personal website with CI/CD
- Containerize applications with Docker
- Set up monitoring stack (Prometheus + Grafana)
- Create infrastructure with Terraform
- Contribute to open-source DevOps projects

**3. Get Certified:**
- AWS Certified Solutions Architect Associate
- Kubernetes (CKA - Certified Kubernetes Administrator)
- Terraform Associate
- Linux (RHCSA)

**4. Build Portfolio:**
- GitHub with DevOps projects
- Write blog posts explaining what you learned
- Create YouTube videos or documentation
- Participate in DevOps communities

**5. Networking:**
- Join DevOps meetups
- Participate in online communities (Reddit, Discord, Slack)
- Connect with DevOps engineers on LinkedIn
- Attend conferences (KubeCon, AWS re:Invent)

### Resume Tips

**Good DevOps Resume:**
```
Experience:
• Built CI/CD pipeline with Jenkins reducing deployment time from 2 hours to 15 minutes
• Migrated 20+ applications from VMs to Kubernetes, reducing infrastructure costs by 40%
• Implemented monitoring with Prometheus/Grafana, reducing MTTR from 2 hours to 20 minutes
• Automated infrastructure provisioning with Terraform for AWS (50+ resources)
• Created Ansible playbooks for configuration management across 100+ servers

Projects:
• E-commerce Platform: Kubernetes deployment with ArgoCD, 99.9% uptime
• Monitoring System: Complete observability stack with Prometheus, Grafana, ELK
• Infrastructure Automation: Terraform modules for multi-environment AWS infrastructure

Skills:
Cloud: AWS (EC2, EKS, RDS, S3, VPC, IAM), Azure basics
Containers: Docker, Kubernetes, Helm, Docker Compose
CI/CD: Jenkins, GitHub Actions, ArgoCD
IaC: Terraform, Ansible, CloudFormation
Monitoring: Prometheus, Grafana, ELK Stack
Languages: Python, Bash, Go basics
```

### Interview Preparation Strategy

**Technical Preparation:**
1. Practice common tasks (deploy app, troubleshoot issues)
2. Understand architecture patterns
3. Be ready to explain past projects in detail
4. Practice whiteboarding system designs
5. Know tools deeply (not just surface level)

**Behavioral Questions:**
- Tell me about a time you resolved a production incident
- How do you prioritize when multiple things are broken?
- Describe a time you automated a manual process
- How do you handle disagreements with team members?
- Tell me about a mistake you made and what you learned

**Sample System Design:**
"Design a CI/CD pipeline for a microservices application"
- Discuss: Git workflow, testing strategy, deployment stages
- Explain: How to handle secrets, rollback strategy, monitoring
- Consider: Security, scalability, cost

### Continuous Learning

**Daily:**
- Read DevOps blogs (Medium, Dev.to)
- Follow industry leaders on Twitter/LinkedIn
- Try new tools in lab environment

**Weekly:**
- Complete one tutorial or course module
- Read documentation for tools you use
- Write about what you learned

**Monthly:**
- Build a project applying new skills
- Attend virtual meetup or webinar
- Update resume with new skills

**Resources:**
- **Books:** "The Phoenix Project", "The DevOps Handbook", "Site Reliability Engineering"
- **Courses:** Linux Academy, A Cloud Guru, Udemy
- **YouTube:** TechWorld with Nana, DevOps Toolkit
- **Podcasts:** DevOps Paradox, The Cloudcast
- **Blogs:** HashiCorp Blog, AWS Blog, CNCF Blog

### Transitioning to DevOps

**From Development:**
- Learn infrastructure and operations concepts
- Start with Docker and CI/CD in current role
- Take on deployment and tooling tasks
- Learn cloud platforms

**From System Administration:**
- Learn coding (Python, Go)
- Understand application architecture
- Practice with Docker and Kubernetes
- Automate current manual tasks

**From QA:**
- Focus on test automation
- Learn CI/CD pipeline creation
- Understand infrastructure testing
- Practice with Docker for test environments

### Staying Relevant

**Trends to Watch:**
- **Platform Engineering:** Building internal developer platforms
- **GitOps:** Everything defined in Git
- **eBPF:** Advanced Linux kernel observability
- **Service Mesh:** Istio, Linkerd for microservices
- **AI/ML Ops:** DevOps for machine learning
- **Edge Computing:** Running workloads closer to users
- **FinOps:** Cloud cost optimization

**Certifications Roadmap:**
1. Start: Linux (RHCSA) + Cloud (AWS SAA)
2. Then: Kubernetes (CKA) + Terraform
3. Advanced: Security certifications, Advanced cloud certifications

### Building Your Personal Brand

**Content Creation:**
- Write technical blog posts
- Create GitHub projects
- Make tutorial videos
- Answer questions on Stack Overflow
- Speak at meetups

**Example Topics:**
- "How I reduced Docker image size by 80%"
- "Kubernetes troubleshooting guide"
- "Setting up complete CI/CD pipeline"
- "Cost optimization strategies for AWS"

---

## Final Thoughts

DevOps is a journey, not a destination. Focus on:

1. **Understand the Why:** Don't just learn commands, understand problems and solutions
2. **Practice Hands-On:** Build projects, break things, fix them
3. **Stay Curious:** Technology changes fast, keep learning
4. **Focus on Culture:** DevOps is about collaboration, not just tools
5. **Build Portfolio:** Show what you can do
6. **Network:** Connect with the community
7. **Be Patient:** It takes time to master DevOps

**Your Learning Path:**
1. Month 1-2: Linux, Git, Networking
2. Month 3-4: Docker, Shell Scripting
3. Month 5-6: Kubernetes, CI/CD
4. Month 7-8: Cloud (AWS/Azure/GCP), Terraform
5. Month 9-10: Monitoring, Advanced Kubernetes
6. Month 11-12: Build complete projects, interview prep

**Remember:** Every expert was once a beginner. Start small, stay consistent, and you'll get there!

Good luck on your DevOps journey! 🚀