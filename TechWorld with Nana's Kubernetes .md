# Kubernetes Tutorial for Beginners - Complete Study Notes

**Course:** Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]  
**Instructor:** TechWorld with Nana  
**Duration:** 4 Hours  
**Level:** Beginner  
**Video URL:** https://youtu.be/X48VuDVv0do

---

## 📋 Table of Contents

1. [Course Overview](#course-overview)
2. [What is Kubernetes (K8s)](#what-is-kubernetes-k8s)
3. [Main Kubernetes Components](#main-kubernetes-components)
4. [Kubernetes Architecture](#kubernetes-architecture)
5. [Minikube and kubectl - Local Setup](#minikube-and-kubectl---local-setup)
6. [Essential kubectl Commands](#essential-kubectl-commands)
7. [YAML Configuration Files](#yaml-configuration-files)
8. [Demo Project: MongoDB + MongoExpress](#demo-project-mongodb--mongoexpress)
9. [Advanced Topics](#advanced-topics)
10. [Best Practices](#best-practices)
11. [Tools Used](#tools-used)
12. [Additional Resources](#additional-resources)

---

## 🎯 Course Overview

This comprehensive 4-hour tutorial covers Kubernetes fundamentals through a combination of:
- **Animated explanations** for complex concepts
- **Hands-on demos** for practical experience
- **Real-world application setup** with MongoDB and MongoExpress
- **Step-by-step guidance** for beginners

### Prerequisites
- Basic understanding of **Docker** and containers
- Familiarity with **YAML** syntax
- Basic command-line knowledge

---

## 🤔 What is Kubernetes (K8s)?

### Definition
Kubernetes is an **open-source container orchestration platform** that automates the deployment, scaling, and management of containerized applications.

### Problems Kubernetes Solves
- **Manual container management** across multiple servers
- **Application downtime** when containers crash
- **Scaling challenges** with hundreds of containers
- **Load balancing** and traffic distribution
- **Service discovery** and communication between containers
- **Automated recovery** and self-healing capabilities

### Key Benefits
- ✅ Automated deployment and rollback
- ✅ Self-healing (restarts failed containers)
- ✅ Horizontal scaling (scale up/down based on demand)
- ✅ Load balancing and service discovery
- ✅ Storage orchestration
- ✅ Secret and configuration management
- ✅ Works across cloud providers and on-premises

---

## 🔧 Main Kubernetes Components

### 1. **Node**
- Physical or virtual machine in the cluster
- Worker machine that runs containerized applications
- Types: **Master Node** (Control Plane) and **Worker Nodes**

### 2. **Pod**
- Smallest deployable unit in Kubernetes
- Abstraction over containers
- Usually runs one container (can run multiple)
- Each Pod gets its own IP address
- Ephemeral (can die and be recreated)

### 3. **Service**
- Permanent IP address for Pods
- Load balancer for Pods
- Types:
  - **ClusterIP** (internal, default)
  - **NodePort** (external, specific port)
  - **LoadBalancer** (external, cloud provider)
  - **ExternalName** (DNS mapping)

### 4. **Ingress**
- Manages external access to services (HTTP/HTTPS)
- Provides routing rules
- SSL/TLS termination
- More convenient than external services

### 5. **ConfigMap**
- External configuration for applications
- Stores non-confidential data in key-value pairs
- Environment variables, configuration files

### 6. **Secret**
- Stores sensitive data (passwords, tokens, keys)
- Base64 encoded (not encrypted by default)
- Referenced by Pods

### 7. **Volume**
- Data persistence storage
- Attaches physical storage to Pods
- Types: Local, Cloud (EBS, Azure Disk), NFS, etc.
- Survives Pod restarts

### 8. **Deployment**
- Blueprint for creating Pods
- Manages ReplicaSets
- Defines desired state for stateless applications
- Handles rolling updates and rollbacks

### 9. **StatefulSet**
- For stateful applications (databases)
- Maintains persistent identifier for each Pod
- Guarantees ordering and uniqueness
- More complex than Deployments

### 10. **DaemonSet**
- Ensures a copy of a Pod runs on all (or selected) nodes
- Use cases: logging, monitoring agents

---

## 🏗️ Kubernetes Architecture

### Master Node (Control Plane) Components

#### 1. **API Server**
- Entry point to the Kubernetes cluster
- Handles all REST requests
- Gateway for kubectl commands

#### 2. **Scheduler**
- Assigns Pods to Nodes
- Considers resource requirements and constraints
- Ensures optimal Pod placement

#### 3. **Controller Manager**
- Maintains desired cluster state
- Handles node failures, replication, endpoints
- Types: Node Controller, Replication Controller, etc.

#### 4. **etcd**
- Key-value store for cluster data
- Stores cluster state and configuration
- Backup and recovery critical

### Worker Node Components

#### 1. **kubelet**
- Agent running on each node
- Communicates with API Server
- Manages Pods and containers

#### 2. **kube-proxy**
- Network proxy on each node
- Maintains network rules
- Enables service communication

#### 3. **Container Runtime**
- Software to run containers
- Examples: Docker, containerd, CRI-O

---

## 💻 Minikube and kubectl - Local Setup

### Minikube
**What is it?**
- Tool to run Kubernetes locally
- Creates a single-node cluster on your machine
- Great for development and testing

**Installation:**
```bash
# macOS
brew install minikube

# Linux
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Windows (using Chocolatey)
choco install minikube
```

**Start Minikube:**
```bash
minikube start
minikube status
```

### kubectl
**What is it?**
- Command-line tool for Kubernetes
- Interacts with Kubernetes API
- Used for deploying and managing applications

**Installation:**
```bash
# macOS
brew install kubectl

# Linux
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Windows (using Chocolatey)
choco install kubernetes-cli
```

**Verify Installation:**
```bash
kubectl version --client
```

---

## 📝 Essential kubectl Commands

### Cluster Information
```bash
# Get cluster info
kubectl cluster-info

# Get nodes
kubectl get nodes

# Get node details
kubectl describe node <node-name>
```

### Working with Pods
```bash
# Get all pods
kubectl get pods
kubectl get pods -o wide

# Get pods in specific namespace
kubectl get pods -n <namespace>

# Describe pod
kubectl describe pod <pod-name>

# Get pod logs
kubectl logs <pod-name>
kubectl logs -f <pod-name>  # Follow logs

# Execute command in pod
kubectl exec -it <pod-name> -- /bin/bash

# Delete pod
kubectl delete pod <pod-name>
```

### Working with Deployments
```bash
# Create deployment
kubectl create deployment <name> --image=<image>

# Get deployments
kubectl get deployments
kubectl get deploy

# Describe deployment
kubectl describe deployment <deployment-name>

# Edit deployment
kubectl edit deployment <deployment-name>

# Scale deployment
kubectl scale deployment <deployment-name> --replicas=3

# Delete deployment
kubectl delete deployment <deployment-name>
```

### Working with Services
```bash
# Get services
kubectl get services
kubectl get svc

# Describe service
kubectl describe service <service-name>

# Expose deployment as service
kubectl expose deployment <deployment-name> --type=LoadBalancer --port=8080

# Delete service
kubectl delete service <service-name>
```

### Working with ConfigMaps and Secrets
```bash
# Create ConfigMap
kubectl create configmap <name> --from-literal=key=value
kubectl create configmap <name> --from-file=<file-path>

# Get ConfigMaps
kubectl get configmaps
kubectl get cm

# Create Secret
kubectl create secret generic <name> --from-literal=key=value
kubectl create secret generic <name> --from-file=<file-path>

# Get Secrets
kubectl get secrets

# Decode secret
kubectl get secret <secret-name> -o jsonpath='{.data.password}' | base64 --decode
```

### Apply Configuration Files
```bash
# Apply configuration
kubectl apply -f <file.yaml>
kubectl apply -f <directory>/

# Delete resources from file
kubectl delete -f <file.yaml>
```

### Debugging and Troubleshooting
```bash
# Get events
kubectl get events --sort-by=.metadata.creationTimestamp

# Get resource usage
kubectl top nodes
kubectl top pods

# Port forwarding
kubectl port-forward <pod-name> 8080:80

# Get all resources
kubectl get all

# Get detailed output
kubectl get pods -o yaml
kubectl get pods -o json
```

### Namespaces
```bash
# Get namespaces
kubectl get namespaces
kubectl get ns

# Create namespace
kubectl create namespace <name>

# Set default namespace
kubectl config set-context --current --namespace=<namespace>

# Get resources in all namespaces
kubectl get pods --all-namespaces
kubectl get pods -A
```

---

## 📄 YAML Configuration Files

### Basic Structure
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    app: myapp
spec:
  containers:
  - name: my-container
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```

### Deployment Example
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

### Service Example
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  type: ClusterIP
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

### ConfigMap Example
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "mongodb://mongodb-service:27017"
  app_mode: "production"
```

### Secret Example
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded
  password: cGFzc3dvcmQ=  # base64 encoded
```

---

## 🚀 Demo Project: MongoDB + MongoExpress

### Project Overview
Deploy a web application (MongoExpress) with MongoDB database in Kubernetes cluster.

### Architecture
```
Browser → MongoExpress (External Service) → MongoExpress Pod
                                              ↓
                                         MongoDB Service → MongoDB Pod
```

### Step 1: MongoDB Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
  labels:
    app: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo
        ports:
        - containerPort: 27017
        env:
        - name: MONGO_INITDB_ROOT_USERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: MONGO_INITDB_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password
```

### Step 2: MongoDB Secret
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
  mongo-root-username: dXNlcm5hbWU=
  mongo-root-password: cGFzc3dvcmQ=
```

### Step 3: MongoDB Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
spec:
  selector:
    app: mongodb
  ports:
  - protocol: TCP
    port: 27017
    targetPort: 27017
```

### Step 4: MongoExpress Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-express
  labels:
    app: mongo-express
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo-express
  template:
    metadata:
      labels:
        app: mongo-express
    spec:
      containers:
      - name: mongo-express
        image: mongo-express
        ports:
        - containerPort: 8081
        env:
        - name: ME_CONFIG_MONGODB_ADMINUSERNAME
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-username
        - name: ME_CONFIG_MONGODB_ADMINPASSWORD
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: mongo-root-password
        - name: ME_CONFIG_MONGODB_SERVER
          valueFrom:
            configMapKeyRef:
              name: mongodb-configmap
              key: database_url
```

### Step 5: MongoExpress ConfigMap
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
  database_url: mongodb-service
```

### Step 6: MongoExpress External Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: mongo-express-service
spec:
  selector:
    app: mongo-express
  type: LoadBalancer
  ports:
  - protocol: TCP
    port: 8081
    targetPort: 8081
    nodePort: 30000
```

### Deployment Commands
```bash
# Create secret first
kubectl apply -f mongodb-secret.yaml

# Create ConfigMap
kubectl apply -f mongodb-configmap.yaml

# Deploy MongoDB
kubectl apply -f mongodb-deployment.yaml
kubectl apply -f mongodb-service.yaml

# Deploy MongoExpress
kubectl apply -f mongo-express-deployment.yaml
kubectl apply -f mongo-express-service.yaml

# Verify deployments
kubectl get all
kubectl get pods
kubectl get services

# Get external IP (Minikube)
minikube service mongo-express-service --url
```

---

## 🔥 Advanced Topics

### 1. Namespaces
**Purpose:**
- Organize resources in clusters
- Divide cluster resources between users
- Resource isolation

**Common Namespaces:**
- `default` - default namespace for resources
- `kube-system` - for Kubernetes system components
- `kube-public` - publicly accessible data
- `kube-node-lease` - for node heartbeat data

**Create Namespace:**
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: development
```

```bash
kubectl create namespace development
kubectl get namespaces
```

### 2. Ingress
**What is Ingress?**
- Manages external HTTP/HTTPS access
- Provides load balancing, SSL termination
- Name-based virtual hosting

**Ingress Controller Required:**
- nginx-ingress
- traefik
- HAProxy

**Example:**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: myapp.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
```

### 3. Helm Package Manager
**What is Helm?**
- Package manager for Kubernetes
- Bundles YAML files into Charts
- Makes deployment easier and reusable

**Key Concepts:**
- **Chart** - Package of pre-configured Kubernetes resources
- **Release** - Instance of a chart running in cluster
- **Repository** - Place where charts are stored

**Common Commands:**
```bash
# Add repository
helm repo add stable https://charts.helm.sh/stable

# Search charts
helm search repo mysql

# Install chart
helm install my-release stable/mysql

# List releases
helm list

# Uninstall release
helm uninstall my-release

# Upgrade release
helm upgrade my-release stable/mysql
```

### 4. Persistent Volumes (PV) and Persistent Volume Claims (PVC)

**Persistent Volume (PV):**
- Piece of storage in cluster
- Provisioned by administrator or dynamically

**Persistent Volume Claim (PVC):**
- Request for storage by user
- Binds to PV

**Example PV:**
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-example
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  hostPath:
    path: /data
```

**Example PVC:**
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-example
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

### 5. StatefulSet
**Use Cases:**
- Databases (MySQL, PostgreSQL, MongoDB)
- Applications requiring stable network identifiers
- Ordered deployment and scaling

**Example:**
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: mysql:5.7
        ports:
        - containerPort: 3306
        volumeMounts:
        - name: data
          mountPath: /var/lib/mysql
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi
```

---

## ✅ Best Practices

### 1. **Resource Management**
- Always set resource requests and limits
- Monitor resource usage
- Use Horizontal Pod Autoscaler (HPA)

```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

### 2. **Health Checks**
- Implement liveness and readiness probes
- Ensure graceful shutdown

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 3
  periodSeconds: 3

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

### 3. **Security**
- Use Secrets for sensitive data
- Enable RBAC (Role-Based Access Control)
- Use Network Policies
- Run containers as non-root user
- Scan images for vulnerabilities

### 4. **Configuration Management**
- Use ConfigMaps for configuration
- Separate config from code
- Version control your YAML files
- Use namespaces for environment separation

### 5. **Deployment Strategies**
- Use rolling updates
- Implement blue-green deployments
- Test in staging before production
- Use Helm for complex applications

### 6. **Monitoring and Logging**
- Implement centralized logging (ELK, Fluentd)
- Use Prometheus for monitoring
- Set up alerts for critical issues
- Use Grafana for visualization

### 7. **Backup and Disaster Recovery**
- Regular etcd backups
- Document recovery procedures
- Test disaster recovery plans
- Use persistent volumes wisely

---

## 🛠️ Tools Used

### Core Tools
1. **Kubernetes** - Container orchestration platform
2. **kubectl** - Command-line tool for Kubernetes
3. **Minikube** - Local Kubernetes cluster
4. **Docker** - Container runtime

### Optional Tools
5. **Helm** - Package manager for Kubernetes
6. **Prometheus** - Monitoring and alerting
7. **Grafana** - Metrics visualization
8. **ELK Stack** - Logging (Elasticsearch, Logstash, Kibana)
9. **Istio** - Service mesh
10. **Lens** - Kubernetes IDE (GUI)

### Cloud Provider Tools
- **kubectl** plugins for cloud providers
- **eksctl** (AWS EKS)
- **gcloud** (Google GKE)
- **az aks** (Azure AKS)

---

## 📚 Additional Resources

### Official Documentation
- [Kubernetes Official Documentation](https://kubernetes.io/docs/)
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Kubernetes API Reference](https://kubernetes.io/docs/reference/kubernetes-api/)

### Practice Environments
- [Katacoda Kubernetes Playground](https://www.katacoda.com/courses/kubernetes)
- [Play with Kubernetes](https://labs.play-with-k8s.com/)
- [Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)

### Community
- [Kubernetes Slack](https://slack.k8s.io/)
- [Kubernetes GitHub](https://github.com/kubernetes/kubernetes)
- [CNCF - Cloud Native Computing Foundation](https://www.cncf.io/)

### Certification
- **CKA** - Certified Kubernetes Administrator
- **CKAD** - Certified Kubernetes Application Developer
- **CKS** - Certified Kubernetes Security Specialist

---

## 📝 Quick Reference Commands

```bash
# Start Minikube
minikube start

# Get cluster info
kubectl cluster-info

# Create deployment
kubectl create deployment nginx --image=nginx

# Expose deployment
kubectl expose deployment nginx --port=80 --type=NodePort

# Scale deployment
kubectl scale deployment nginx --replicas=3

# Apply YAML configuration
kubectl apply -f deployment.yaml

# Get all resources
kubectl get all

# Delete resources
kubectl delete deployment nginx
kubectl delete service nginx

# Get pod logs
kubectl logs <pod-name>

# Execute into pod
kubectl exec -it <pod-name> -- /bin/bash

# Port forward
kubectl port-forward <pod-name> 8080:80

# Stop Minikube
minikube stop

# Delete Minikube cluster
minikube delete
```

---

## 🎓 Key Takeaways

1. **Kubernetes automates** container orchestration, making deployment and management easier
2. **Pods are the smallest unit** in Kubernetes and usually contain one container
3. **Services provide** stable networking for Pods
4. **Deployments manage** stateless applications, while StatefulSets manage stateful ones
5. **ConfigMaps and Secrets** separate configuration from code
6. **kubectl** is the primary tool for interacting with Kubernetes
7. **YAML files** are used to define desired state of Kubernetes resources
8. **Namespaces** help organize and isolate resources
9. **Helm** simplifies complex application deployments
10. **Persistent storage** requires PV and PVC for data persistence

---

## 💡 Study Tips

- ✅ Practice with Minikube before moving to cloud
- ✅ Master kubectl commands through regular use
- ✅ Understand YAML syntax thoroughly
- ✅ Build small projects to reinforce concepts
- ✅ Learn by deploying real applications
- ✅ Join Kubernetes communities for support
- ✅ Read official documentation regularly
- ✅ Follow Kubernetes best practices
- ✅ Consider getting certified (CKA/CKAD)

---

**Course Completed:** ✅  
**Next Steps:** Deploy your own application on Kubernetes, explore cloud providers (EKS, GKE, AKS), and consider advanced topics like service mesh and GitOps.

---

*Last Updated: October 2025*  
*Based on: TechWorld with Nana's Kubernetes Tutorial*
