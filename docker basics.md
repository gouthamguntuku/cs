# **DOCKER & CONTAINERS - COMPLETE BEGINNER'S GUIDE**
## *Technical Study Notes from Abhishek Veeramalla's Tutorial*

---

## **📌 KEY CONCEPTS**

### **What is a Container?**
Containers package applications with their required libraries and minimal system dependencies, making them lightweight and portable across computing environments. They are significantly smaller than virtual machines (VMs).

**Container vs VM Comparison:**
- Container base images are approximately 100 times smaller than VM images (e.g., Ubuntu container: ~22 MB vs Ubuntu VM: ~2.3 GB)
- Containers share the host OS kernel, while VMs include a full operating system
- Containers start in seconds; VMs take minutes
- Better resource utilization with containers

### **How Containers Work**
Containers leverage three key Linux technologies: system calls for accessing host resources like CPU and memory, namespaces for creating isolated environments, and cgroups for limiting resource consumption.

**Key Isolation Mechanisms:**
- **Namespaces**: Provide isolation for file systems, process IDs, and networks
- **Control Groups (cgroups)**: Limit CPU, memory, and I/O resources per container
- **System Calls**: Enable containers to interact with the host kernel

---

## **🔧 COMMANDS & TOOLS**

### **Basic Docker Commands**

```bash
# Check the installed Docker version on your system
docker --version

# Download an Ubuntu image from Docker Hub registry to local machine
docker pull ubuntu:latest

# Display all Docker images stored locally on your machine
docker images

# Run Ubuntu container in interactive terminal mode (-it flags)
# This opens a bash shell inside the container
docker run -it ubuntu:latest bash

# Run nginx web server container in detached/background mode (-d flag)
docker run -d nginx

# Show only currently running containers
docker ps

# Show all containers including stopped ones (-a flag for all)
docker ps -a

# Stop a running container gracefully by sending SIGTERM signal
# Replace <container_id> with actual container ID from docker ps
docker stop <container_id>

# Remove/delete a stopped container from the system
# Replace <container_id> with actual container ID
docker rm <container_id>

# Remove/delete a Docker image from local storage
# Replace <image_id> with actual image ID from docker images
docker rmi <image_id>

# Display the logs/output from a container (useful for debugging)
# Replace <container_id> with actual container ID
docker logs <container_id>

# Execute a command (bash shell) inside an already running container
# -it flags provide interactive terminal access
docker exec -it <container_id> bash

# Show detailed JSON configuration of a container (networks, volumes, etc.)
# Replace <container_id> with actual container ID
docker inspect <container_id>
```

### **Building Docker Images**

```bash
# Build a Docker image from Dockerfile in current directory (.)
# -t flag tags the image with a name and version
docker build -t my-image:latest .

# Build image using a specific Dockerfile (not named "Dockerfile")
# -f flag specifies the Dockerfile path
docker build -f Dockerfile.prod -t my-image:prod .

# Create an additional tag/name for an existing image
# Useful for versioning before pushing to registry
docker tag my-image:latest username/my-image:v1.0

# Upload/push the tagged image to Docker Hub or private registry
# Requires docker login first
docker push username/my-image:v1.0
```

---

## **📦 MULTI-STAGE BUILDS**

### **What are Multi-Stage Builds?**
Multi-stage builds utilize multiple FROM statements in a Dockerfile, with each FROM instruction beginning a new build stage that can use a different base image. This allows selective copying of artifacts between stages.

### **Benefits**
Multi-stage builds separate the build environment from the runtime environment, significantly reducing image size and attack surface. Examples show reductions from 502MB to 28MB in production images.

### **Multi-Stage Dockerfile Example**

```dockerfile
# Stage 1: Build stage (named "builder")
# Uses full golang image with build tools and compilers
FROM golang:1.22 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy go module files first (for better layer caching)
COPY go.mod go.sum ./

# Download all Go dependencies (cached if go.mod unchanged)
RUN go mod download

# Copy entire source code into container
COPY . .

# Compile the Go application into a binary named "main"
RUN go build -o main .

# Stage 2: Runtime stage (final production image)
# Uses minimal Alpine Linux base (only ~5MB)
FROM alpine:3.20

# Set working directory for runtime
WORKDIR /app

# Copy ONLY the compiled binary from builder stage (not source code or build tools)
# This is the key to small image size - no Go compiler or source code
COPY --from=builder /app/main .

# Expose port 8080 for the application (documentation purposes)
EXPOSE 8080

# Run the compiled binary when container starts
CMD ["./main"]
```

### **Python Application with Multi-Stage**

```dockerfile
# Base stage with common dependencies shared by all stages
FROM python:3-slim AS base

# Install system-level dependencies and clean up package cache
# --no-install-recommends reduces image size
# rm -rf /var/lib/apt/lists/* cleans apt cache
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Environment variables for Python optimization
# PYTHONUNBUFFERED: Force Python output to appear immediately (good for logs)
# PYTHONDONTWRITEBYTECODE: Prevent .pyc files (reduces image size)
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Build stage - installs Python packages
FROM base AS build

# Set working directory
WORKDIR /app

# Create Python virtual environment in /opt/venv
RUN python -m venv /opt/venv

# Activate virtual environment by setting PATH
ENV PATH="/opt/venv/bin:$PATH"

# Copy requirements file first (for layer caching)
COPY requirements.txt .

# Install Python packages into virtual environment
# --no-cache-dir reduces image size by not caching pip downloads
RUN pip install --no-cache-dir -r requirements.txt

# Production stage - final minimal runtime image
FROM base AS production

# Copy ONLY the virtual environment from build stage (not pip cache or build tools)
COPY --from=build /opt/venv /opt/venv

# Set PATH to use the virtual environment
ENV PATH="/opt/venv/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy application source code
COPY . .

# Run the Python application when container starts
CMD ["python", "app.py"]
```

### **Node.js with Nginx Example**

```dockerfile
# Build stage - compiles React application
FROM node:16-alpine AS react-build

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm install

# Copy source code
COPY . .

# Build production-optimized React app (creates /app/build directory)
RUN npm run build

# Production stage - serves built files with Nginx web server
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy ONLY the built static files from react-build stage
# Source: /app/build, Destination: nginx's default serve directory
COPY --from=react-build /app/build /usr/share/nginx/html

# Expose HTTP port 80
EXPOSE 80

# Start Nginx in foreground mode (required for Docker)
# -g daemon off; prevents Nginx from running as background daemon
CMD ["nginx", "-g", "daemon off;"]
```

### **Key Multi-Stage Commands**

```bash
# Build only a specific stage (useful for testing build stage separately)
# --target flag stops at the named stage
docker build --target build -t my-app:build .

# Build the final stage (default behavior, builds all stages)
docker build -t my-app:latest .

# Pass build-time variables to Dockerfile using ARG instruction
# Useful for parameterizing base image versions
docker build --build-arg PYTHON_VERSION=3.9 -t my-app .
```

---

## **💾 DOCKER VOLUMES**

### **What are Volumes?**
Volumes provide a way to persist container data on the host file system, separate from the container's file system, ensuring data survives container deletion and recreation.

### **Types of Storage**

1. **Docker Volumes** (Recommended)
   - Managed by Docker
   - Platform-independent
   - Easy to backup and migrate

2. **Bind Mounts**
   - Direct host directory mounting
   - Good for development
   - OS-dependent

3. **tmpfs Mounts**
   - Memory-based storage
   - Temporary, not persisted
   - Good for sensitive data

### **Volume Commands**

```bash
# Create a named volume managed by Docker
# Stored in Docker's directory (/var/lib/docker/volumes/ on Linux)
docker volume create my-volume

# List all volumes on the system
docker volume ls

# Show detailed information about a volume (mountpoint, driver, etc.)
docker volume inspect my-volume

# Delete a specific volume (only if not in use by any container)
docker volume rm my-volume

# Remove all volumes not currently used by any container (frees up space)
docker volume prune

# Run container with named volume mounted
# -v flag: volume_name:container_path
# Data in /data persists even if container is deleted
docker run -d -v my-volume:/data nginx

# Using bind mount for development (maps host directory to container)
# -v flag: /absolute/host/path:/container/path
# Changes on host reflect immediately in container
docker run -d -v /host/path:/container/path nginx

# Mount volume as read-only (:ro flag)
# Container cannot write to this volume
docker run -d -v my-volume:/data:ro nginx
```

### **Real-World Examples**

**MySQL Database with Persistent Storage:**
```bash
# Create a dedicated volume for MySQL data
# This ensures database data survives container restarts
docker volume create mysql_data

# Run MySQL container with persistent volume
# -e flag sets environment variables (root password)
# -v mounts mysql_data volume to MySQL's data directory
# All database files are stored in the volume, not container
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=password \
  -v mysql_data:/var/lib/mysql \
  mysql:8.0
```

**Development with Bind Mount:**
```bash
# Live code reload for Node.js development
# $(pwd) gets current working directory on host
# -v mounts it to /app in container
# Code changes on host reflect immediately without rebuilding image
# -p maps port 3000 from container to host
docker run -d \
  --name node-app \
  -v $(pwd):/app \
  -p 3000:3000 \
  node:16
```

---

## **🌐 DOCKER NETWORKING**

### **Network Types**

Docker supports multiple network types including bridge (default private network), host (direct host network access), overlay (multi-host communication), and none (complete isolation).

**1. Bridge Network (Default)**
- Private internal network on host
- Containers communicate by name
- Isolated from external networks

**2. Host Network**
- Shares host's network stack
- No network isolation
- Direct port access without mapping

**3. Overlay Network**
- Multi-host communication
- Used in Docker Swarm/Kubernetes
- Encrypted inter-node traffic

**4. None Network**
- Complete network isolation
- No connectivity
- Used for security-sensitive tasks

### **Networking Commands**

```bash
# List all Docker networks on the system
# Shows bridge, host, none by default
docker network ls

# Create a custom bridge network for container communication
# Containers on this network can talk to each other by name
docker network create my-network

# Create network with specific driver type
# Driver can be: bridge, host, overlay, macvlan, none
docker network create --driver bridge my-bridge

# Create network with custom IP address configuration
# --subnet: IP range for the network
# --ip-range: Subset of IPs to allocate to containers
# --gateway: Gateway IP for the network
docker network create \
  --driver bridge \
  --subnet=10.0.0.0/16 \
  --ip-range=10.0.0.0/24 \
  --gateway=10.0.0.1 \
  custom-net

# Show detailed network configuration (containers, IP addresses, subnet)
docker network inspect my-network

# Connect a running container to an additional network
# Container can now communicate on both networks
docker network connect my-network container1

# Disconnect container from a network
# Container loses connectivity on that network
docker network disconnect my-network container1

# Delete a network (only if no containers are using it)
docker network rm my-network

# Remove all unused networks (cleanup)
docker network prune
```

### **Multi-Container Communication**

```bash
# Create custom network for microservices communication
docker network create app-network

# Run MySQL container on the custom network
# --network flag connects container to app-network
# Container is accessible by name "mysql" on this network
docker run -d --name mysql --network app-network mysql:8.0

# Run API container on same network
# Can connect to MySQL using hostname "mysql" instead of IP
docker run -d --name api --network app-network my-api-image

# Containers can now communicate using container names as hostnames
# Example connection string from api: mysql://mysql:3306/database
# Docker's internal DNS resolves "mysql" to the MySQL container's IP
```

### **Docker Compose with Networks**

```yaml
# Docker Compose version (3.8 supports most features)
version: "3.8"

# Define all services (containers) for the application
services:
  # Nginx web server - frontend facing
  web:
    image: nginx  # Use official nginx image
    networks:
      - frontend  # Connected only to frontend network
    ports:
      - "80:80"  # Map host port 80 to container port 80
  
  # API backend service
  api:
    build: ./api  # Build from Dockerfile in ./api directory
    networks:
      - frontend  # Can communicate with web service
      - backend   # Can communicate with database
  
  # PostgreSQL database - backend only
  db:
    image: postgres:14  # Use official postgres image v14
    networks:
      - backend  # Connected only to backend network (isolated from web)
    volumes:
      - db-data:/var/lib/postgresql/data  # Persist database data

# Define custom networks for service isolation
networks:
  frontend:  # Web tier network (web + api)
  backend:   # Database tier network (api + db)
  # web and db cannot communicate directly (security layer)

# Define named volumes for data persistence
volumes:
  db-data:  # PostgreSQL data persists across container restarts
```

---

## **✅ BEST PRACTICES**

### **Image Optimization**

1. **Use Multi-Stage Builds**
   - Separate build and runtime dependencies
   - Reduce image size by up to 800%
   - Remove build tools from final image

2. **Choose Appropriate Base Images**
   - Use distro-less or minimal images when possible
   - Alpine Linux for smaller size
   - Official images for security

3. **Layer Optimization**
   - Order Dockerfile commands from least to most frequently changing
   - Combine RUN commands to reduce layers
   - Use .dockerignore file

```dockerfile
# Good practice: Optimized layer ordering
FROM node:16-alpine  # Start with minimal Alpine-based Node.js image

# Set working directory
WORKDIR /app

# Copy package files FIRST (changes less frequently)
# If package.json unchanged, npm install layer is cached
COPY package*.json ./

# Install dependencies (this layer is cached if package.json unchanged)
RUN npm install

# Copy source code LAST (changes most frequently)
# Only this layer rebuilds when code changes
COPY . .

# Start the application
CMD ["npm", "start"]
```

### **Security Best Practices**

1. **Run as Non-Root User**
```dockerfile
# Start with Alpine-based Node.js image
FROM node:16-alpine

# Create a non-privileged user and group
# -S creates system user, -G adds to group
# Running as non-root prevents privilege escalation attacks
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch from root to non-root user for all subsequent commands
USER appuser

# Set working directory (appuser has access)
WORKDIR /app

# Copy application files (owned by appuser)
COPY . .

# Application runs as appuser, not root (more secure)
CMD ["node", "app.js"]
```

2. **Scan Images for Vulnerabilities**
```bash
# Scan Docker image for known security vulnerabilities
# Uses Snyk vulnerability database
# Reports CVEs and suggests fixes
docker scan my-image:latest
```

3. **Use Trusted Images**
   - Pull from official repositories
   - Verify image signatures
   - Regularly update base images

### **Development Workflow**

1. **Use .dockerignore**
```
# Exclude node_modules (will be installed in container)
node_modules

# Exclude git files (not needed in image)
.git

# Exclude environment files (may contain secrets)
.env

# Exclude log files (not needed in image)
*.log

# Exclude documentation (not needed in runtime)
README.md
```

2. **Version Control**
   - Tag images with semantic versioning
   - Use specific versions, not :latest
   - Maintain Dockerfile in source control

3. **Environment Variables**
```bash
# Run container with individual environment variables
# -e flag sets environment variable KEY=VALUE
# Useful for configuring database connections, API keys, etc.
docker run -d \
  -e DB_HOST=localhost \
  -e DB_PORT=5432 \
  --env-file .env \
  my-app

# --env-file loads multiple variables from a file
# .env file format:
# DB_HOST=localhost
# DB_PORT=5432
# API_KEY=secret123
```

---

## **🚀 PROJECT NOTES**

### **Complete Multi-Container Application**

**Project Structure:**
```
project/
├── docker-compose.yml      # Orchestrates all services
├── frontend/
│   ├── Dockerfile          # Frontend build instructions
│   └── src/                # React/Vue source code
├── backend/
│   ├── Dockerfile          # Backend build instructions
│   └── api/                # API source code
└── nginx/
    └── nginx.conf          # Nginx reverse proxy config
```

**docker-compose.yml:**
```yaml
# Docker Compose file version
version: "3.8"

# Define all services (containers) in the application
services:
  # React/Vue frontend service
  frontend:
    build: ./frontend  # Build from Dockerfile in frontend directory
    volumes:
      # Mount source code for hot-reload during development
      - ./frontend:/app
      # Preserve node_modules from container (don't overwrite with host)
      - /app/node_modules
    networks:
      - app-network  # Connect to app network
    depends_on:
      - backend  # Start backend before frontend

  # Node.js/Python backend API service
  backend:
    build: ./backend  # Build from Dockerfile in backend directory
    environment:
      # Pass database connection string as environment variable
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    volumes:
      # Mount source for development (hot-reload)
      - ./backend:/app
    networks:
      - app-network
    depends_on:
      - db  # Start database before backend

  # PostgreSQL database service
  db:
    image: postgres:14-alpine  # Use lightweight Alpine version
    environment:
      # Set database credentials
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      # Persist database data in named volume
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

  # Nginx reverse proxy service
  nginx:
    image: nginx:alpine  # Use lightweight Nginx
    ports:
      - "80:80"  # Expose port 80 to host
    volumes:
      # Mount custom Nginx config as read-only
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    networks:
      - app-network
    depends_on:
      - frontend  # Wait for frontend
      - backend   # Wait for backend

# Define custom bridge network for all services
networks:
  app-network:
    driver: bridge  # Default driver for single-host networking

# Define named volumes for data persistence
volumes:
  postgres-data:  # Database data persists across restarts
```

**Running the Project:**
```bash
# Start all services defined in docker-compose.yml
# -d flag runs in detached mode (background)
# Creates networks, volumes, and starts containers
docker-compose up -d

# View real-time logs from all services
# -f flag follows/streams logs (like tail -f)
# Shows output from all containers
docker-compose logs -f

# Stop all running services gracefully
# Sends SIGTERM to containers, removes containers and networks
# Volumes and images are preserved
docker-compose down

# Stop services AND remove all volumes (deletes data!)
# -v flag removes named volumes
# Use for complete cleanup
docker-compose down -v

# Rebuild all images (after Dockerfile changes)
# Ignores cache, builds from scratch
docker-compose build

# Scale a specific service to multiple instances
# --scale service_name=count
# Useful for load testing or high availability
docker-compose up -d --scale backend=3
```

---

## **💡 INTERVIEW TIPS**

### **Common Docker Interview Questions**

1. **"What's the difference between containers and VMs?"**
   - Containers share the host OS kernel; VMs have full OS
   - Containers are lighter (~22MB vs ~2GB)
   - Containers start in seconds; VMs take minutes
   - Better resource utilization with containers

2. **"Explain Docker architecture"**
   - Docker Client: CLI interface
   - Docker Daemon: Manages containers
   - Docker Registry: Stores images (Docker Hub)
   - Images: Read-only templates
   - Containers: Running instances

3. **"What are multi-stage builds and why use them?"**
   - Multiple FROM statements in one Dockerfile
   - Separates build and runtime environments
   - Reduces final image size significantly
   - Improves security by excluding build tools

4. **"How do you persist data in Docker?"**
   - Volumes: Docker-managed, platform-independent (production)
   - Bind Mounts: Direct host mapping (development)
   - tmpfs: Memory-based, temporary storage

5. **"Explain Docker networking types"**
   - Bridge: Default, container-to-container on same host
   - Host: Direct host network access
   - Overlay: Multi-host communication (Swarm)
   - None: Complete isolation

### **Practical Scenarios**

**Q: "How would you reduce a Docker image from 500MB to 50MB?"**
```
A: Use multi-stage builds:
1. Build stage with all dependencies
2. Runtime stage with alpine base
3. Copy only compiled artifacts
4. Remove unnecessary packages
5. Use .dockerignore file
```

**Q: "How do you debug a failing container?"**
```bash
# View container logs (stdout/stderr output)
# Shows application errors and debug messages
docker logs <container_id>

# Open interactive shell inside running container
# -it provides interactive terminal
# Allows inspection of filesystem, processes, network
docker exec -it <container_id> sh

# Show detailed container configuration (JSON format)
# Includes environment, volumes, networks, ports
docker inspect <container_id>

# Monitor real-time resource usage (CPU, memory, network, disk I/O)
# Similar to 'top' command for containers
docker stats <container_id>
```

**Q: "How would you set up a microservices architecture?"**
```
A: Use Docker Compose with:
1. Custom networks for service isolation
2. Volumes for data persistence
3. Environment variables for configuration
4. Health checks for reliability
5. Restart policies for resilience
```

---

## **📊 SUMMARY TABLE**

| **Concept** | **Command/Usage** | **Use Case** |
|------------|------------------|--------------|
| **Build Image** | `docker build -t name .` | Create custom images |
| **Multi-Stage** | Multiple `FROM` statements | Reduce image size |
| **Volumes** | `docker volume create` | Persist data |
| **Bind Mount** | `-v /host:/container` | Development workflow |
| **Networks** | `docker network create` | Container communication |
| **Compose** | `docker-compose up` | Multi-container apps |
| **Bridge Network** | Default network type | Single-host communication |
| **Overlay Network** | For Docker Swarm | Multi-host communication |
| **Alpine Base** | `FROM alpine:latest` | Minimal image size |
| **Distroless** | Secure minimal images | Production security |

---

## **🎯 KEY TAKEAWAYS**

1. **Containers are lightweight** - 100x smaller than VMs
2. **Multi-stage builds** - Essential for production (reduce size by 800%)
3. **Volumes for persistence** - Data survives container restarts
4. **Networks for communication** - Isolate and connect services
5. **Security matters** - Use minimal images, non-root users, scan regularly
6. **Docker Compose** - Simplifies multi-container applications
7. **Best practices** - Layer optimization, .dockerignore, versioning
8. **Learn by doing** - Build projects, experiment, break things

---

**Resources:**
- GitHub: github.com/iam-veeramalla/Docker-Zero-to-Hero
- YouTube: Abhishek.Veeramalla channel
- Docker Docs: docs.docker.com

---

**Note:** These comprehensive study notes cover everything from basic container concepts to advanced multi-stage builds, volumes, and networking - perfect for DevOps beginners preparing for interviews or building real-world projects!
