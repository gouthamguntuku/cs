# 🚀 DevOps Zero to Hero - Complete Course

## Table of Contents
1. [Course Overview](#1-course-overview)
2. [DevOps Fundamentals](#2-devops-fundamentals)
3. [Linux System Administration](#3-linux-system-administration)
4. [Version Control with Git](#4-version-control-with-git)
5. [Shell Scripting](#5-shell-scripting)
6. [Virtual Machines & Cloud Basics](#6-virtual-machines--cloud-basics)
7. [Containerization with Docker](#7-containerization-with-docker)
8. [Container Orchestration with Kubernetes](#8-container-orchestration-with-kubernetes)
9. [Configuration Management with Ansible](#9-configuration-management-with-ansible)
10. [Infrastructure as Code with Terraform](#10-infrastructure-as-code-with-terraform)
11. [CI/CD with Jenkins](#11-cicd-with-jenkins)
12. [GitOps with ArgoCD](#12-gitops-with-argocd)
13. [Cloud Platforms](#13-cloud-platforms)
14. [Monitoring & Logging](#14-monitoring--logging)
15. [Python for DevOps](#15-python-for-devops)
16. [Real-World Projects](#16-real-world-projects)
17. [Interview Preparation](#17-interview-preparation)
18. [Best Practices](#18-best-practices)
19. [Tools Reference](#19-tools-reference)
20. [Career Guidance](#20-career-guidance)

---

## 1. Course Overview

### What is DevOps?
DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the software development lifecycle and provide continuous delivery with high quality.

### Course Structure
This course is designed to take you from zero knowledge to job-ready DevOps engineer in 16-20 weeks.

**Learning Path:**
- **Weeks 1-2:** Foundations (DevOps basics, Linux)
- **Weeks 3-4:** Version Control & Scripting
- **Weeks 5-6:** Virtualization & Containers
- **Weeks 7-8:** Orchestration (Kubernetes)
- **Weeks 9-10:** Configuration Management & IaC
- **Weeks 11-12:** CI/CD Pipelines
- **Weeks 13-14:** Cloud & Monitoring
- **Weeks 15-16:** Python & Real Projects
- **Weeks 17-20:** Advanced Topics & Interview Prep

### Prerequisites
- A computer with at least 8GB RAM
- Basic understanding of how computers work
- Willingness to learn and practice daily

### Tools You'll Master
- Linux, Git, Docker, Kubernetes, Jenkins, Terraform, Ansible, AWS/Azure, Prometheus, Grafana, ArgoCD, Python

---

## 2. DevOps Fundamentals

### 2.1 What is DevOps?

**Traditional Approach:**
- Developers write code → throw it over the wall → Operations deploys it
- Slow release cycles (months/years)
- High failure rates
- Blame culture

**DevOps Approach:**
- Developers and Operations collaborate
- Automated testing and deployment
- Fast release cycles (days/hours)
- Shared responsibility
- Continuous improvement

### 2.2 Core DevOps Principles

**1. Collaboration & Communication**
- Breaking down silos between teams
- Shared tools and processes
- Regular stand-ups and retrospectives

**2. Automation**
- Automate repetitive tasks
- Infrastructure as Code
- Automated testing and deployment

**3. Continuous Integration/Continuous Deployment (CI/CD)**
- Integrate code changes frequently
- Deploy to production automatically
- Fast feedback loops

**4. Monitoring & Feedback**
- Monitor applications and infrastructure
- Collect metrics and logs
- Use data to improve

### 2.3 DevOps Lifecycle

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → [back to Plan]
```

**Real-World Example: E-commerce Website**
1. **Plan:** Feature request - "Add shopping cart"
2. **Code:** Developer writes shopping cart code
3. **Build:** Code is compiled and packaged
4. **Test:** Automated tests verify functionality
5. **Release:** Code is marked as ready for production
6. **Deploy:** Code is automatically deployed to servers
7. **Operate:** System runs the new feature
8. **Monitor:** Track cart usage, errors, performance
9. **Plan:** Use data to plan improvements

### 2.4 DevOps Tools Ecosystem

**Version Control:** Git, GitHub, GitLab
**CI/CD:** Jenkins, GitLab CI, GitHub Actions
**Configuration Management:** Ansible, Chef, Puppet
**Containerization:** Docker, Podman
**Orchestration:** Kubernetes, Docker Swarm
**IaC:** Terraform, CloudFormation, Pulumi
**Monitoring:** Prometheus, Grafana, ELK Stack
**Cloud:** AWS, Azure, GCP

### 2.5 Key Metrics (DORA Metrics)

1. **Deployment Frequency:** How often you deploy to production
2. **Lead Time for Changes:** Time from commit to production
3. **Mean Time to Recovery (MTTR):** Time to recover from failure
4. **Change Failure Rate:** Percentage of deployments causing failures

**Industry Benchmarks:**
- Elite: Deploy multiple times per day, <1 hour lead time
- High: Deploy weekly to monthly, <1 week lead time
- Medium: Monthly to biannually, 1-6 months lead time
- Low: Less than biannually, >6 months lead time

---

## 3. Linux System Administration

### 3.1 Why Linux for DevOps?

- 90% of servers run Linux
- Open-source and free
- Powerful command-line tools
- Highly customizable
- Industry standard for DevOps

### 3.2 Linux Basics

**Understanding the File System:**
```
/           # Root directory (everything starts here)
/home       # User home directories
/etc        # Configuration files
/var        # Variable data (logs, databases)
/bin        # Essential binaries (commands)
/usr        # User programs and data
/tmp        # Temporary files
/opt        # Optional software
```

**Essential Commands:**

```bash
# Navigation commands
pwd              # Print working directory - shows where you are
cd /path/to/dir  # Change directory - move to a different location
cd ..            # Go up one directory level
cd ~             # Go to home directory
ls               # List files in current directory
ls -la           # List all files with detailed information (including hidden)

# File operations
touch file.txt           # Create an empty file
cat file.txt             # Display file contents
nano file.txt            # Edit file with nano text editor
vim file.txt             # Edit file with vim text editor
cp source.txt dest.txt   # Copy file
mv old.txt new.txt       # Move or rename file
rm file.txt              # Remove/delete file
mkdir mydir              # Make directory
rmdir mydir              # Remove empty directory
rm -rf mydir             # Remove directory and all contents (be careful!)

# File permissions
chmod 755 script.sh      # Give read/write/execute to owner, read/execute to others
chmod +x script.sh       # Make file executable
chown user:group file    # Change file owner and group

# Viewing and searching
head -n 10 file.txt      # Show first 10 lines
tail -n 10 file.txt      # Show last 10 lines
tail -f logfile.log      # Follow log file in real-time (useful for monitoring)
grep "error" log.txt     # Search for "error" in file
find /path -name "*.txt" # Find all .txt files in path

# System information
uname -a                 # Show system information
df -h                    # Show disk space usage in human-readable format
free -h                  # Show memory usage
top                      # Show running processes (interactive)
htop                     # Better version of top (if installed)
ps aux                   # Show all running processes
```

### 3.3 User and Permission Management

**Understanding Permissions:**
```
-rwxr-xr-x
│││││││││└─ Execute permission for others
││││││││└── Write permission for others
│││││││└─── Read permission for others
││││││└──── Execute permission for group
│││││└───── Write permission for group
││││└────── Read permission for group
│││└─────── Execute permission for owner
││└──────── Write permission for owner
│└───────── Read permission for owner
└────────── File type (- = file, d = directory)
```

**Permission Management:**
```bash
# Create a new user
sudo useradd -m -s /bin/bash john  # -m creates home directory, -s sets shell

# Set password for user
sudo passwd john

# Add user to sudo group (administrative privileges)
sudo usermod -aG sudo john

# Switch to another user
su - john

# Change file ownership
sudo chown john:developers app.py  # Change owner to john, group to developers

# Set permissions numerically
chmod 644 file.txt    # rw-r--r-- (owner can read/write, others can only read)
chmod 755 script.sh   # rwxr-xr-x (owner can do everything, others can read/execute)
chmod 600 secret.key  # rw------- (only owner can read/write)
```

**Real-World Example:**
```bash
# Setting up a web application directory
sudo mkdir -p /var/www/myapp          # Create application directory
sudo chown -R www-data:www-data /var/www/myapp  # Give ownership to web server
sudo chmod -R 755 /var/www/myapp      # Set appropriate permissions
```

### 3.4 Process Management

```bash
# View processes
ps aux | grep nginx      # Find nginx processes
pgrep nginx              # Get process IDs for nginx

# Start, stop, restart services
sudo systemctl start nginx     # Start nginx service
sudo systemctl stop nginx      # Stop nginx service
sudo systemctl restart nginx   # Restart nginx service
sudo systemctl status nginx    # Check service status
sudo systemctl enable nginx    # Enable service to start on boot

# Kill processes
kill 1234                # Gracefully terminate process with PID 1234
kill -9 1234             # Force kill process (use as last resort)
killall nginx            # Kill all processes named nginx

# Background and foreground jobs
command &                # Run command in background
jobs                     # List background jobs
fg %1                    # Bring job 1 to foreground
bg %1                    # Resume job 1 in background
```

**Real-World Scenario:**
```bash
# Restart a crashed application
ps aux | grep myapp              # Check if app is running
sudo systemctl restart myapp     # Restart the service
sudo systemctl status myapp      # Verify it's running
tail -f /var/log/myapp.log       # Monitor the logs
```

### 3.5 Package Management

**Ubuntu/Debian (APT):**
```bash
# Update package list from repositories
sudo apt update

# Upgrade all installed packages
sudo apt upgrade -y

# Install a package
sudo apt install nginx -y

# Remove a package
sudo apt remove nginx

# Remove package and configuration files
sudo apt purge nginx

# Search for a package
apt search docker

# Show package information
apt show nginx
```

**Red Hat/CentOS (YUM/DNF):**
```bash
# Update all packages
sudo yum update -y

# Install package
sudo yum install nginx -y

# Remove package
sudo yum remove nginx

# Search for package
yum search docker
```

### 3.6 Networking Basics

```bash
# Check network interfaces
ip addr show              # Show all network interfaces and IP addresses
ip link show              # Show network interfaces status

# Test connectivity
ping google.com           # Test connection to google.com
ping -c 4 8.8.8.8        # Send 4 ping packets to Google DNS

# DNS lookup
nslookup google.com       # Query DNS for domain
dig google.com            # Detailed DNS information

# Check open ports
netstat -tulpn            # Show all listening ports (tcp/udp)
ss -tulpn                 # Modern replacement for netstat
lsof -i :80               # Show what's using port 80

# Download files
wget https://example.com/file.zip      # Download file
curl -O https://example.com/file.zip   # Download file with curl

# Test web service
curl http://localhost:80  # Make HTTP request
curl -I http://example.com # Show only response headers
```

**Real-World Example: Troubleshooting Web Application**
```bash
# Check if web server is running
sudo systemctl status nginx

# Check if port 80 is open
sudo netstat -tulpn | grep :80

# Test local connection
curl http://localhost

# Check firewall rules
sudo ufw status

# View recent logs
sudo tail -f /var/log/nginx/error.log
```

### 3.7 Log Management

```bash
# System logs location
/var/log/syslog          # General system logs (Ubuntu/Debian)
/var/log/messages        # General system logs (Red Hat/CentOS)
/var/log/auth.log        # Authentication logs
/var/log/nginx/          # Nginx web server logs
/var/log/apache2/        # Apache web server logs

# View logs
sudo tail -f /var/log/syslog          # Follow system log in real-time
sudo journalctl -u nginx              # View logs for nginx service
sudo journalctl -f                    # Follow all system logs
sudo journalctl --since "1 hour ago"  # View logs from last hour
sudo journalctl -p err                # Show only error messages

# Search logs
grep "error" /var/log/syslog          # Find errors in system log
grep -i "failed" /var/log/auth.log    # Case-insensitive search for failed logins
```

**Real-World Debugging Scenario:**
```bash
# Application is slow - investigating
# Step 1: Check if disk is full
df -h

# Step 2: Check memory usage
free -h

# Step 3: Check CPU usage
top

# Step 4: Look for errors in application logs
sudo tail -100 /var/log/myapp/error.log | grep -i error

# Step 5: Check system logs for issues
sudo journalctl -p err --since "1 hour ago"
```

### 3.8 Text Processing & Manipulation

```bash
# grep - Search for patterns
grep "error" app.log                    # Find lines containing "error"
grep -i "error" app.log                 # Case-insensitive search
grep -r "TODO" /home/user/project       # Recursively search in directory
grep -v "debug" app.log                 # Show lines NOT containing "debug"

# awk - Pattern scanning and text processing
awk '{print $1}' file.txt               # Print first column
awk '{print $1, $3}' file.txt           # Print first and third columns
awk '/error/ {print $0}' log.txt        # Print lines containing "error"

# sed - Stream editor for text manipulation
sed 's/old/new/' file.txt               # Replace first occurrence of "old" with "new"
sed 's/old/new/g' file.txt              # Replace all occurrences
sed -i 's/old/new/g' file.txt           # Replace in file (in-place editing)
sed -n '10,20p' file.txt                # Print lines 10 to 20

# cut - Remove sections from lines
cut -d':' -f1 /etc/passwd               # Extract first field (usernames)
cut -c1-10 file.txt                     # Extract first 10 characters

# sort and uniq
sort file.txt                           # Sort lines alphabetically
sort -n numbers.txt                     # Sort numerically
sort file.txt | uniq                    # Remove duplicate lines
sort file.txt | uniq -c                 # Count occurrences of each line
```

**Real-World Example: Analyzing Web Server Logs**
```bash
# Find top 10 IP addresses accessing your server
awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10

# Count 404 errors
grep " 404 " /var/log/nginx/access.log | wc -l

# Extract all URLs that resulted in 500 errors
awk '$9 == 500 {print $7}' /var/log/nginx/access.log | sort | uniq
```

### 3.9 Bash Scripting Basics (Intro)

```bash
#!/bin/bash
# This is a shebang - tells system to use bash to execute this script

# Variables
NAME="DevOps Engineer"    # Assign value to variable
echo "Hello, $NAME"       # Print variable (output: Hello, DevOps Engineer)

# Command substitution
CURRENT_DATE=$(date)      # Store command output in variable
echo "Today is: $CURRENT_DATE"

# Conditional statements
if [ -f "/etc/passwd" ]; then          # Check if file exists
    echo "Password file exists"
else
    echo "Password file not found"
fi

# Loops
for i in 1 2 3 4 5; do                # Loop through numbers
    echo "Number: $i"
done

# Functions
backup_files() {                       # Define function
    echo "Backing up files..."
    tar -czf backup.tar.gz /home/user/documents
}

backup_files                           # Call function
```

### 3.10 Practice Exercises

**Exercise 1: User Management**
```bash
# Create a new user for deployment
sudo useradd -m -s /bin/bash deployer
sudo passwd deployer
sudo usermod -aG docker deployer  # Add to docker group
```

**Exercise 2: Log Analysis**
```bash
# Create a script to monitor failed SSH login attempts
#!/bin/bash
echo "Failed SSH login attempts in the last hour:"
sudo grep "Failed password" /var/log/auth.log | tail -20
```

**Exercise 3: System Health Check**
```bash
#!/bin/bash
# System health check script

echo "===== SYSTEM HEALTH CHECK ====="
echo ""

# Check disk space
echo "Disk Usage:"
df -h | grep -v "tmpfs"
echo ""

# Check memory
echo "Memory Usage:"
free -h
echo ""

# Check CPU load
echo "CPU Load Average:"
uptime
echo ""

# Check running services
echo "Critical Services Status:"
systemctl status nginx | grep "Active"
systemctl status mysql | grep "Active"
```

---

## 4. Version Control with Git

### 4.1 What is Version Control?

Version control is a system that records changes to files over time so you can recall specific versions later.

**Why Git?**
- Track every change made to your code
- Collaborate with multiple developers
- Revert to previous versions if something breaks
- Work on multiple features simultaneously (branches)
- Industry standard (used by 95% of developers)

**Real-World Analogy:**
Think of Git like a time machine for your code. Every time you make a change, you can create a "save point" (commit). If something goes wrong, you can go back to any previous save point.

### 4.2 Git Installation and Setup

```bash
# Install Git
sudo apt install git -y  # Ubuntu/Debian
sudo yum install git -y  # Red Hat/CentOS

# Configure Git with your identity
git config --global user.name "Your Name"           # Set your name
git config --global user.email "you@example.com"    # Set your email
git config --global core.editor "vim"               # Set default editor

# View configuration
git config --list

# Set up SSH key for GitHub/GitLab (more secure than passwords)
ssh-keygen -t ed25519 -C "you@example.com"         # Generate SSH key
cat ~/.ssh/id_ed25519.pub                          # Display public key (add to GitHub)
```

### 4.3 Git Fundamentals

**Git Workflow:**
```
Working Directory → Staging Area → Repository
       ↓                ↓              ↓
    (edit)         (git add)      (git commit)
```

**Basic Commands:**

```bash
# Initialize a new Git repository
git init                    # Creates .git folder in current directory
# This makes the current folder a Git repository

# Clone an existing repository
git clone https://github.com/user/repo.git        # Download remote repository
git clone git@github.com:user/repo.git            # Clone using SSH

# Check status of files
git status                  # Shows which files are modified, staged, or untracked
# Output explains:
# - Untracked: new files Git doesn't know about
# - Modified: files changed since last commit
# - Staged: files ready to be committed

# Add files to staging area
git add filename.txt        # Stage a specific file
git add .                   # Stage all changes in current directory
git add *.py                # Stage all Python files

# Commit changes
git commit -m "Add login feature"              # Commit with a message
# The message should describe WHAT changed and WHY
# Good: "Add user authentication to login page"
# Bad: "Changes" or "Update"

# View commit history
git log                     # Show all commits with full details
git log --oneline           # Show commits in compact format
git log --graph --oneline   # Show commits with branch visualization

# View changes
git diff                    # Show unstaged changes
git diff --staged           # Show staged changes
git diff HEAD~1             # Compare with previous commit
```

**Real-World Example: Starting a New Project**
```bash
# Create a new Python project
mkdir my-web-app
cd my-web-app

# Initialize Git repository
git init

# Create initial files
echo "# My Web App" > README.md
echo "Flask==2.0.1" > requirements.txt

# Create Python application file
cat > app.py << 'EOF'
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
EOF

# Stage all files
git add .

# Make first commit
git commit -m "Initial commit: Set up Flask application structure"

# View commit history
git log
```

### 4.4 Branching and Merging

**Why Branches?**
- Work on new features without affecting main code
- Multiple team members work simultaneously
- Test changes before merging to production
- Isolate bug fixes

**Branching Commands:**

```bash
# Create and switch to a new branch
git branch feature-login           # Create branch
git checkout feature-login         # Switch to branch
# OR in one command:
git checkout -b feature-login      # Create and switch to new branch

# List branches
git branch                         # List local branches
git branch -a                      # List all branches (including remote)

# Switch between branches
git checkout main                  # Switch to main branch
git checkout feature-login         # Switch to feature branch

# Merge branches
git checkout main                  # Switch to branch you want to merge INTO
git merge feature-login            # Merge feature-login INTO current branch

# Delete branch
git branch -d feature-login        # Delete branch (safe - prevents deleting unmerged)
git branch -D feature-login        # Force delete branch
```

**Real-World Branching Workflow:**
```bash
# Start working on a new feature
git checkout -b feature-user-registration

# Make changes to files
nano registration.py

# Stage and commit
git add registration.py
git commit -m "Add user registration form with email validation"

# Make more changes
nano database.py
git add database.py
git commit -m "Add user table to database schema"

# Switch back to main branch
git checkout main

# Merge feature into main
git merge feature-user-registration

# Delete feature branch (clean up)
git branch -d feature-user-registration
```

**Handling Merge Conflicts:**
```bash
# When merge conflicts occur, Git will notify you
# Conflict markers look like this in the file:
<<<<<<< HEAD
code from current branch
=======
code from branch being merged
>>>>>>> feature-branch

# To resolve:
# 1. Open the conflicted file
# 2. Edit to keep the code you want
# 3. Remove the conflict markers
# 4. Stage the resolved file
git add conflicted-file.py

# 5. Complete the merge
git commit -m "Merge feature-branch: Resolved conflicts in conflicted-file.py"
```

### 4.5 Working with Remote Repositories

```bash
# Add remote repository
git remote add origin https://github.com/user/repo.git
# 'origin' is conventional name for primary remote repository

# View remotes
git remote -v                      # Show remote URLs

# Push changes to remote
git push origin main               # Push main branch to origin
git push -u origin feature-login   # Push and set upstream tracking

# Pull changes from remote
git pull origin main               # Fetch and merge changes from remote
# This is equivalent to:
# git fetch origin
# git merge origin/main

# Fetch without merging
git fetch origin                   # Download changes but don't merge

# Clone a repository
git clone https://github.com/user/repo.git
```

**Real-World Example: Contributing to a Project**
```bash
# Fork and clone a project from GitHub
git clone https://github.com/yourname/opensource-project.git
cd opensource-project

# Create a branch for your feature
git checkout -b add-dark-mode

# Make changes
nano style.css
git add style.css
git commit -m "Add dark mode theme with toggle button"

# Push to your fork
git push origin add-dark-mode

# Now create Pull Request on GitHub to propose your changes
```

### 4.6 Essential Git Workflows

**Feature Branch Workflow:**
```bash
# 1. Start from updated main branch
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature-payment-gateway

# 3. Work on feature (make multiple commits)
git add payment.py
git commit -m "Add Stripe payment integration"
git add tests/test_payment.py
git commit -m "Add unit tests for payment processing"

# 4. Push feature branch
git push origin feature-payment-gateway

# 5. Create Pull Request for code review
# 6. After approval, merge to main
git checkout main
git pull origin main
git merge feature-payment-gateway
git push origin main

# 7. Delete feature branch
git branch -d feature-payment-gateway
git push origin --delete feature-payment-gateway
```

**Gitflow Workflow (Used in Large Teams):**
```
main (production-ready code)
  ↑
develop (integration branch)
  ↑
feature branches (new features)
hotfix branches (urgent production fixes)
release branches (preparing for release)
```

### 4.7 Advanced Git Commands

```bash
# Stash changes (temporarily save without committing)
git stash                          # Save current changes
git stash list                     # View stashed changes
git stash apply                    # Apply most recent stash
git stash pop                      # Apply and remove most recent stash
git stash drop                     # Delete most recent stash

# Revert commits
git revert HEAD                    # Create new commit that undoes last commit
git revert abc123                  # Revert specific commit

# Reset (USE WITH CAUTION)
git reset --soft HEAD~1            # Undo last commit, keep changes staged
git reset --mixed HEAD~1           # Undo last commit, unstage changes
git reset --hard HEAD~1            # Undo last commit, discard changes

# View specific commit
git show abc123                    # Show details of commit abc123

# Tag releases
git tag v1.0.0                     # Create lightweight tag
git tag -a v1.0.0 -m "Release version 1.0.0"  # Create annotated tag
git push origin v1.0.0             # Push tag to remote

# Cherry-pick (apply specific commit from another branch)
git cherry-pick abc123             # Apply commit abc123 to current branch

# Rebase (rewrite history - advanced)
git rebase main                    # Reapply commits on top of main
```

**Real-World Scenario: Fixing a Mistake**
```bash
# Oops! Committed sensitive data (API key)
git reset --soft HEAD~1            # Undo commit, keep changes
nano config.py                     # Remove sensitive data
git add config.py
git commit -m "Add configuration file"

# Alternative: Already pushed? Remove from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config.py" \
  --prune-empty --tag-name-filter cat -- --all
```

### 4.8 Git Best Practices

**Commit Messages:**
```bash
# Good commit messages:
git commit -m "Add user authentication with JWT tokens"
git commit -m "Fix memory leak in image processing pipeline"
git commit -m "Update dependencies: upgrade Django to 3.2"

# Bad commit messages:
git commit -m "Update"
git commit -m "Fix bug"
git commit -m "Changes"
```

**Commit Message Format:**
```
Type: Short description (50 chars max)

Optional detailed explanation (wrap at 72 chars)
- What was changed
- Why it was changed
- Any important context

Types: feat, fix, docs, style, refactor, test, chore
```

**Example:**
```bash
git commit -m "feat: Add two-factor authentication

Implemented 2FA using TOTP (Time-based One-Time Password)
for enhanced security. Users can enable 2FA in settings.

- Added QR code generation for authenticator apps
- Created backup codes for account recovery
- Updated database schema with 2FA fields"
```

### 4.9 .gitignore File

```bash
# .gitignore tells Git which files to ignore

# Create .gitignore file
cat > .gitignore << 'EOF'
# Python
__pycache__/              # Python compiled files
*.py[cod]                 # Python bytecode
*.so                      # Compiled extensions
.env                      # Environment variables (secrets!)
venv/                     # Virtual environment
*.log                     # Log files

# Node.js
node_modules/             # Dependencies
npm-debug.log

# IDE
.vscode/                  # VS Code settings
.idea/                    # PyCharm settings
*.swp                     # Vim swap files

# OS
.DS_Store                 # macOS
Thumbs.db                 # Windows

# Build artifacts
build/
dist/
*.egg-info/
EOF

# Add and commit .gitignore
git add .gitignore
git commit -m "Add .gitignore for Python project"
```

### 4.10 GitHub/GitLab Workflows

**Pull Request (PR) Workflow:**
```bash
# 1. Fork repository on GitHub
# 2. Clone your fork
git clone https://github.com/yourname/project.git

# 3. Create feature branch
git checkout -b fix-login-bug

# 4. Make changes and commit
git add login.py
git commit -m "Fix login redirect issue after successful authentication"

# 5. Push to your fork
git push origin fix-login-bug

# 6. Create Pull Request on GitHub
# 7. Address review comments
git add login.py
git commit -m "Add input validation as per review comments"
git push origin fix-login-bug

# 8. PR gets merged by maintainer
```

### 4.11 Practice Exercises

**Exercise 1: Complete Git Workflow**
```bash
# Create a new project
mkdir todo-app
cd todo-app
git init

# Create application files
echo "# Todo Application" > README.md
echo "flask==2.0.1\nsqlalchemy==1.4.0" > requirements.txt

# Initial commit
git add .
git commit -m "Initial commit: Project structure"

# Create feature branch
git checkout -b feature-add-tasks

# Add feature
echo "def add_task(task): pass" > tasks.py
git add tasks.py
git commit -m "Add task creation functionality"

# Merge back to main
git checkout main
git merge feature-add-tasks

# View history
git log --oneline --graph
```

**Exercise 2: Resolving Merge Conflicts**
```bash
# Create conflict scenario
git checkout -b branch-a
echo "Feature A" > feature.txt
git add feature.txt
git commit -m "Add Feature A"

git checkout main
git checkout -b branch-b
echo "Feature B" > feature.txt
git add feature.txt
git commit -m "Add Feature B"

# Try to merge - this will create a conflict
git checkout main
git merge branch-a  # This merges fine
git merge branch-b  # This creates a conflict

# Resolve the conflict
nano feature.txt    # Edit to keep both features
git add feature.txt
git commit -m "Merge branch-b: Resolve conflict between Feature A and B"
```

---

## 5. Shell Scripting

### 5.1 What is Shell Scripting?

Shell scripting is writing a series of commands in a file that can be executed together. It's the foundation of automation in DevOps.

**Why Shell Scripting?**
- Automate repetitive tasks
- Create deployment scripts
- System administration automation
- Build custom tools
- Schedule maintenance tasks

**Real-World Use Cases:**
- Automated backups
- Log rotation and cleanup
- Server health checks
- Application deployment
- Database maintenance

### 5.2 Your First Shell Script

```bash
#!/bin/bash
# This line (shebang) tells the system to use bash to execute this script

# Print a message
echo "Hello, DevOps World!"

# Save as hello.sh
# Make it executable: chmod +x hello.sh
# Run it: ./hello.sh
```

**Script Template:**
```bash
#!/bin/bash

#############################################
# Script Name: script_name.sh
# Description: What this script does
# Author: Your Name
# Date: 2025-01-01
# Version: 1.0
#############################################

# Exit on any error
set -e

# Exit on undefined variable
set -u

# Print commands as they execute (for debugging)
# set -x

# Your script logic here
echo "Script starting..."

# More commands...

echo "Script completed successfully"
exit 0
```

### 5.3 Variables and Data Types

```bash
#!/bin/bash

# String variables
NAME="John Doe"                    # No spaces around =
SERVER="production-server-01"      # Use descriptive names
echo "User: $NAME"                 # Access with $
echo "User: ${NAME}"               # Braces for clarity (recommended)

# Integer variables
PORT=8080
MAX_RETRIES=3
echo "Connecting to port: $PORT"

# Command substitution (store command output)
CURRENT_DATE=$(date +%Y-%m-%d)    # Modern syntax
HOSTNAME=`hostname`                # Old syntax (avoid)
echo "Today is: $CURRENT_DATE"
echo "Server: $HOSTNAME"

# Arrays
SERVERS=("web1" "web2" "web3")    # Declare array
echo ${SERVERS[0]}                 # Access first element (web1)
echo ${SERVERS[@]}                 # All elements
echo ${#SERVERS[@]}                # Number of elements (3)

# Add to array
SERVERS+=("web4")

# Loop through array
for server in "${SERVERS[@]}"; do
    echo "Server: $server"
done

# Read-only variables (constants)
readonly API_KEY="secret123"
API_KEY="new_value"                # This will cause error

# Environment variables
export DATABASE_URL="postgresql://localhost/mydb"  # Available to child processes
echo $PATH                         # System environment variable
```

**Real-World Example: Configuration Script**
```bash
#!/bin/bash

# Application configuration
APP_NAME="my-web-app"
APP_VERSION="1.2.3"
DEPLOY_ENV="production"
SERVER_PORT=8080

# Paths
APP_DIR="/opt/${APP_NAME}"
LOG_DIR="/var/log/${APP_NAME}"
CONFIG_FILE="${APP_DIR}/config.yml"

# Database
DB_HOST="db.example.com"
DB_PORT=5432
DB_NAME="${APP_NAME}_${DEPLOY_ENV}"

# Display configuration
echo "=== Application Configuration ==="
echo "Name: $APP_NAME"
echo "Version: $APP_VERSION"
echo "Environment: $DEPLOY_ENV"
echo "Port: $SERVER_PORT"
echo "Database: ${DB_HOST}:${DB_PORT}/${DB_NAME}"
```

### 5.4 User Input and Arguments

```bash
#!/bin/bash

# Reading user input
echo "What is your name?"
read NAME                          # Read input into NAME variable
echo "Hello, $NAME!"

# Read with prompt
read -p "Enter your age: " AGE
echo "You are $AGE years old"

# Read password (hidden input)
read -sp "Enter password: " PASSWORD
echo ""  # New line after hidden input

# Command-line arguments
echo "Script name: $0"             # Name of the script
echo "First argument: $1"          # First argument
echo "Second argument: $2"         # Second argument
echo "All arguments: $@"           # All arguments as separate words
echo "Number of arguments: $#"     # Count of arguments

# Check if argument provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

FILENAME=$1
echo "Processing file: $FILENAME"
```

**Real-World Example: Deployment Script**
```bash
#!/bin/bash

# Usage: ./deploy.sh <environment> <version>
# Example: ./deploy.sh production v1.2.3

# Check arguments
if [ $# -ne 2 ]; then
    echo "Error: Invalid number of arguments"
    echo "Usage: $0 <environment> <version>"
    echo "Example: $0 production v1.2.3"
    exit 1
fi

ENVIRONMENT=$1
VERSION=$2

# Validate environment
if [ "$ENVIRONMENT" != "staging" ] && [ "$ENVIRONMENT" != "production" ]; then
    echo "Error: Environment must be 'staging' or 'production'"
    exit 1
fi

echo "Deploying version $VERSION to $ENVIRONMENT..."
# Deployment logic here
```

### 5.5 Conditional Statements

```bash
#!/bin/bash

# if-then-else
AGE=25

if [ $AGE -ge 18 ]; then          # -ge means "greater than or equal"
    echo "Adult"
else
    echo "Minor"
fi

# if-elif-else
SCORE=75

if [ $SCORE -ge 90 ]; then
    echo "Grade: A"
elif [ $SCORE -ge 80 ]; then
    echo "Grade: B"
elif [ $SCORE -ge 70 ]; then
    echo "Grade: C"
else
    echo "Grade: F"
fi

# String comparisons
NAME="DevOps"

if [ "$NAME" = "DevOps" ]; then         # Use = for string equality
    echo "Correct name"
fi

if [ "$NAME" != "Developer" ]; then     # != for not equal
    echo "Different name"
fi

if [ -z "$EMPTY_VAR" ]; then            # -z checks if string is empty
    echo "Variable is empty"
fi

if [ -n "$NAME" ]; then                 # -n checks if string is not empty
    echo "Variable has value"
fi

# File checks
FILE="script.sh"

if [ -f "$FILE" ]; then                 # -f checks if file exists
    echo "File exists"
fi

if [ -d "/etc" ]; then                  # -d checks if directory exists
    echo "Directory exists"
fi

if [ -r "$FILE" ]; then                 # -r checks if file is readable
    echo "File is readable"
fi

if [ -w "$FILE" ]; then                 # -w checks if file is writable
    echo "File is writable"
fi

if [ -x "$FILE" ]; then                 # -x checks if file is executable
    echo "File is executable"
fi

# Numeric comparisons
NUM1=10
NUM2=20

if [ $NUM1 -eq $NUM2 ]; then echo "Equal"; fi           # -eq (equal)
if [ $NUM1 -ne $NUM2 ]; then echo "Not equal"; fi       # -ne (not equal)
if [ $NUM1 -lt $NUM2 ]; then echo "Less than"; fi       # -lt (less than)
if [ $NUM1 -le $NUM2 ]; then echo "Less or equal"; fi   # -le (less or equal)
if [ $NUM1 -gt $NUM2 ]; then echo "Greater than"; fi    # -gt (greater than)
if [ $NUM1 -ge $NUM2 ]; then echo "Greater or equal"; fi # -ge (greater or equal)

# Logical operators
if [ $NUM1 -lt 20 ] && [ $NUM2 -gt 15 ]; then    # AND
    echo "Both conditions true"
fi

if [ $NUM1 -lt 5 ] || [ $NUM2 -gt 15 ]; then     # OR
    echo "At least one condition true"
fi

if [ ! -f "nonexistent.txt" ]; then              # NOT
    echo "File does not exist"
fi

# Case statement (like switch)
ENVIRONMENT="production"

case $ENVIRONMENT in
    development)
        echo "Development environment"
        DB_HOST="localhost"
        ;;
    staging)
        echo "Staging environment"
        DB_HOST="staging-db.example.com"
        ;;
    production)
        echo "Production environment"
        DB_HOST="prod-db.example.com"
        ;;
    *)
        echo "Unknown environment"
        exit 1
        ;;
esac

echo "Database host: $DB_HOST"
```

**Real-World Example: Service Health Check**
```bash
#!/bin/bash

# Check if nginx is running
SERVICE="nginx"

if systemctl is-active --quiet $SERVICE; then
    echo "✓ $SERVICE is running"
else
    echo "✗ $SERVICE is not running"
    echo "Attempting to start $SERVICE..."
    
    sudo systemctl start $SERVICE
    
    if systemctl is-active --quiet $SERVICE; then
        echo "✓ $SERVICE started successfully"
    else
        echo "✗ Failed to start $SERVICE"
        echo "Check logs: sudo journalctl -u $SERVICE"
        exit 1
    fi
fi

# Check if port is listening
PORT=80

if netstat -tuln | grep -q ":$PORT "; then
    echo "✓ Port $PORT is listening"
else
    echo "✗ Port $PORT is not listening"
    exit 1
fi

echo "All checks passed!"
```

### 5.6 Loops

```bash
#!/bin/bash

# For loop - iterate over list
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# For loop - with range
for i in {1..10}; do              # Numbers 1 to 10
    echo "Count: $i"
done

for i in {1..10..2}; do           # Numbers 1 to 10, step by 2 (1,3,5,7,9)
    echo "Odd number: $i"
done

# For loop - C-style
for ((i=1; i<=5; i++)); do
    echo "Iteration: $i"
done

# For loop - iterate over files
for file in *.txt; do             # All .txt files in current directory
    echo "Processing: $file"
done

# For loop - iterate over command output
for user in $(cat /etc/passwd | cut -d: -f1); do
    echo "User: $user"
done

# While loop - execute while condition is true
COUNT=1
while [ $COUNT -le 5 ]; do
    echo "Count: $COUNT"
    COUNT=$((COUNT + 1))          # Increment counter
done

# While loop - read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt

# Until loop - execute until condition is true
COUNT=1
until [ $COUNT -gt 5 ]; do
    echo "Count: $COUNT"
    COUNT=$((COUNT + 1))
done

# Break and continue
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        continue                  # Skip iteration 5
    fi
    if [ $i -eq 8 ]; then
        break                     # Exit loop at 8
    fi
    echo "Number: $i"
done
```

**Real-World Example: Server Backup Script**
```bash
#!/bin/bash

# Backup multiple directories
BACKUP_DIR="/backup"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DIRECTORIES=("/etc" "/var/www" "/home")

echo "Starting backup at $(date)"

for dir in "${DIRECTORIES[@]}"; do
    # Check if directory exists
    if [ ! -d "$dir" ]; then
        echo "Warning: Directory $dir does not exist, skipping..."
        continue
    fi
    
    # Create backup filename
    BACKUP_NAME="backup_${dir//\//_}_${TIMESTAMP}.tar.gz"
    BACKUP_PATH="${BACKUP_DIR}/${BACKUP_NAME}"
    
    echo "Backing up $dir..."
    
    # Create compressed backup
    if tar -czf "$BACKUP_PATH" "$dir" 2>/dev/null; then
        echo "✓ Successfully backed up $dir to $BACKUP_PATH"
    else
        echo "✗ Failed to backup $dir"
    fi
done

echo "Backup completed at $(date)"

# Clean up old backups (keep last 7 days)
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +7 -delete
echo "Old backups cleaned up"
```

### 5.7 Functions

```bash
#!/bin/bash

# Define a function
greet() {
    echo "Hello, World!"
}

# Call the function
greet

# Function with parameters
greet_user() {
    local name=$1                 # Local variable (only exists in function)
    echo "Hello, $name!"
}

greet_user "John"                 # Output: Hello, John!

# Function with return value
add_numbers() {
    local num1=$1
    local num2=$2
    local result=$((num1 + num2))
    echo $result                  # "Return" value via echo
}

sum=$(add_numbers 5 10)           # Capture output
echo "Sum: $sum"                  # Output: Sum: 15

# Function with return status
check_file() {
    local filename=$1
    
    if [ -f "$filename" ]; then
        return 0                  # Success (true)
    else
        return 1                  # Failure (false)
    fi
}

if check_file "myfile.txt"; then
    echo "File exists"
else
    echo "File does not exist"
fi

# Function with multiple return values (using global variables)
get_system_info() {
    HOSTNAME=$(hostname)
    OS=$(uname -s)
    KERNEL=$(uname -r)
}

get_system_info
echo "Host: $HOSTNAME"
echo "OS: $OS"
echo "Kernel: $KERNEL"
```

**Real-World Example: Deployment Functions**
```bash
#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'  # No Color

# Logging functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if service is running
check_service() {
    local service_name=$1
    
    if systemctl is-active --quiet "$service_name"; then
        log_info "$service_name is running"
        return 0
    else
        log_error "$service_name is not running"
        return 1
    fi
}

# Restart service with verification
restart_service() {
    local service_name=$1
    
    log_info "Restarting $service_name..."
    
    if sudo systemctl restart "$service_name"; then
        sleep 2  # Wait for service to start
        
        if check_service "$service_name"; then
            log_info "$service_name restarted successfully"
            return 0
        else
            log_error "$service_name failed to start after restart"
            return 1
        fi
    else
        log_error "Failed to restart $service_name"
        return 1
    fi
}

# Deploy application
deploy_application() {
    local app_name=$1
    local version=$2
    
    log_info "Deploying $app_name version $version"
    
    # Stop service
    log_info "Stopping $app_name..."
    sudo systemctl stop "$app_name"
    
    # Update application files
    log_info "Updating application files..."
    # Add your deployment commands here
    
    # Start service
    if restart_service "$app_name"; then
        log_info "Deployment successful!"
        return 0
    else
        log_error "Deployment failed!"
        return 1
    fi
}

# Usage
deploy_application "my-web-app" "v1.2.3"
```

### 5.8 Error Handling

```bash
#!/bin/bash

# Exit on error
set -e                            # Exit if any command fails
set -u                            # Exit if undefined variable used
set -o pipefail                   # Exit if any command in pipeline fails

# Custom error handling
error_exit() {
    echo "ERROR: $1" >&2          # Print to stderr
    exit 1
}

# Check command success
if ! command -v docker &> /dev/null; then
    error_exit "Docker is not installed"
fi

# Try-catch equivalent
{
    # Commands that might fail
    risky_command || error_exit "Risky command failed"
}

# Trap errors
trap 'echo "Error on line $LINENO"' ERR

# Cleanup on exit
cleanup() {
    echo "Cleaning up..."
    rm -f /tmp/temp_file
}
trap cleanup EXIT                 # Run cleanup when script exits

# Check exit status
command_that_might_fail
if [ $? -ne 0 ]; then            # $? contains exit status of last command
    echo "Command failed with exit code $?"
    exit 1
fi
```

**Real-World Example: Robust Backup Script**
```bash
#!/bin/bash

set -euo pipefail                 # Strict error handling

# Configuration
BACKUP_SOURCE="/var/www"
BACKUP_DEST="/backup"
LOG_FILE="/var/log/backup.log"
MAX_RETRIES=3

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Error handler
error_handler() {
    log "ERROR: An error occurred on line $1"
    log "Backup failed!"
    # Send alert email
    # echo "Backup failed" | mail -s "Backup Alert" admin@example.com
    exit 1
}

trap 'error_handler $LINENO' ERR

# Cleanup function
cleanup() {
    log "Cleaning up temporary files..."
    rm -f /tmp/backup_in_progress
}

trap cleanup EXIT

# Main backup logic
log "Starting backup process"

# Check if source exists
if [ ! -d "$BACKUP_SOURCE" ]; then
    log "ERROR: Source directory $BACKUP_SOURCE does not exist"
    exit 1
fi

# Check if destination has enough space
REQUIRED_SPACE=$(du -sb "$BACKUP_SOURCE" | cut -f1)
AVAILABLE_SPACE=$(df -B1 "$BACKUP_DEST" | tail -1 | awk '{print $4}')

if [ "$AVAILABLE_SPACE" -lt "$REQUIRED_SPACE" ]; then
    log "ERROR: Not enough space in $BACKUP_DEST"
    exit 1
fi

# Create backup with retries
RETRY_COUNT=0
while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    log "Backup attempt $((RETRY_COUNT + 1)) of $MAX_RETRIES"
    
    if tar -czf "${BACKUP_DEST}/backup_$(date +%Y%m%d).tar.gz" "$BACKUP_SOURCE"; then
        log "Backup completed successfully"
        exit 0
    else
        RETRY_COUNT=$((RETRY_COUNT + 1))
        log "Backup attempt failed, retrying..."
        sleep 5
    fi
done

log "ERROR: Backup failed after $MAX_RETRIES attempts"
exit 1
```

### 5.9 Practical Scripts for DevOps

**Script 1: System Health Monitor**
```bash
#!/bin/bash

# System Health Monitoring Script
# Checks CPU, memory, disk, and services

# Thresholds
CPU_THRESHOLD=80
MEM_THRESHOLD=80
DISK_THRESHOLD=90

# Get current values
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
MEM_USAGE=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100}')
DISK_USAGE=$(df -h / | tail -1 | awk '{print $5}' | cut -d'%' -f1)

echo "=== System Health Check ==="
echo "Date: $(date)"
echo ""

# Check CPU
echo "CPU Usage: ${CPU_USAGE}%"
if (( $(echo "$CPU_USAGE > $CPU_THRESHOLD" | bc -l) )); then
    echo "⚠️  WARNING: High CPU usage!"
fi

# Check Memory
echo "Memory Usage: ${MEM_USAGE}%"
if [ $MEM_USAGE -gt $MEM_THRESHOLD ]; then
    echo "⚠️  WARNING: High memory usage!"
fi

# Check Disk
echo "Disk Usage: ${DISK_USAGE}%"
if [ $DISK_USAGE -gt $DISK_THRESHOLD ]; then
    echo "⚠️  WARNING: High disk usage!"
fi

# Check critical services
SERVICES=("nginx" "mysql" "docker")
echo ""
echo "=== Service Status ==="

for service in "${SERVICES[@]}"; do
    if systemctl is-active --quiet "$service" 2>/dev/null; then
        echo "✓ $service: Running"
    else
        echo "✗ $service: Not running"
    fi
done

echo ""
echo "=== Top Processes by CPU ==="
ps aux --sort=-%cpu | head -6

echo ""
echo "=== Top Processes by Memory ==="
ps aux --sort=-%mem | head -6
```

**Script 2: Log Analyzer**
```bash
#!/bin/bash

# Log Analysis Script
# Analyzes web server logs for errors and traffic patterns

LOG_FILE="/var/log/nginx/access.log"
OUTPUT_DIR="/tmp/log_analysis_$(date +%Y%m%d)"

mkdir -p "$OUTPUT_DIR"

echo "Analyzing logs from $LOG_FILE"
echo "Output directory: $OUTPUT_DIR"

# Count total requests
TOTAL_REQUESTS=$(wc -l < "$LOG_FILE")
echo "Total requests: $TOTAL_REQUESTS"

# Top 10 IP addresses
echo "Top 10 IP addresses:" > "$OUTPUT_DIR/top_ips.txt"
awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10 >> "$OUTPUT_DIR/top_ips.txt"

# Top 10 requested URLs
echo "Top 10 requested URLs:" > "$OUTPUT_DIR/top_urls.txt"
awk '{print $7}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10 >> "$OUTPUT_DIR/top_urls.txt"

# HTTP status codes distribution
echo "HTTP Status Codes:" > "$OUTPUT_DIR/status_codes.txt"
awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn >> "$OUTPUT_DIR/status_codes.txt"

# Count 404 errors
ERROR_404=$(grep " 404 " "$LOG_FILE" | wc -l)
echo "404 Errors: $ERROR_404" >> "$OUTPUT_DIR/error_summary.txt"

# Count 500 errors
ERROR_500=$(grep " 500 " "$LOG_FILE" | wc -l)
echo "500 Errors: $ERROR_500" >> "$OUTPUT_DIR/error_summary.txt"

# Traffic by hour
echo "Traffic by hour:" > "$OUTPUT_DIR/traffic_by_hour.txt"
awk '{print $4}' "$LOG_FILE" | cut -d: -f2 | sort | uniq -c >> "$OUTPUT_DIR/traffic_by_hour.txt"

echo "Analysis complete! Check $OUTPUT_DIR for results."
```

**Script 3: Auto Deployment Script**
```bash
#!/bin/bash

# Automated Deployment Script
# Pulls latest code, builds, and deploys application

set -euo pipefail

# Configuration
APP_NAME="my-web-app"
APP_DIR="/opt/$APP_NAME"
GIT_REPO="https://github.com/user/$APP_NAME.git"
BRANCH="main"
SERVICE_NAME="$APP_NAME"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Pre-deployment checks
log_info "Running pre-deployment checks..."

if [ ! -d "$APP_DIR" ]; then
    log_error "Application directory $APP_DIR does not exist"
    exit 1
fi

cd "$APP_DIR"

# Backup current version
log_info "Creating backup of current version..."
BACKUP_DIR="/backup/${APP_NAME}_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r "$APP_DIR" "$BACKUP_DIR/"
log_info "Backup created at $BACKUP_DIR"

# Pull latest code
log_info "Pulling latest code from $BRANCH branch..."
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

# Check if there are any changes
if [ -z "$(git status --porcelain)" ]; then
    log_info "No changes detected. Deployment not needed."
    exit 0
fi

# Install dependencies
log_info "Installing dependencies..."
if [ -f "requirements.txt" ]; then
    pip install -r requirements.txt
elif [ -f "package.json" ]; then
    npm install
fi

# Run tests
log_info "Running tests..."
if [ -f "run_tests.sh" ]; then
    if ./run_tests.sh; then
        log_info "All tests passed"
    else
        log_error "Tests failed! Rolling back..."
        cp -r "$BACKUP_DIR/$APP_NAME"/* "$APP_DIR/"
        exit 1
    fi
fi

# Build application (if needed)
log_info "Building application..."
if [ -f "build.sh" ]; then
    ./build.sh
fi

# Stop application
log_info "Stopping $SERVICE_NAME..."
sudo systemctl stop "$SERVICE_NAME"

# Deploy new version
log_info "Deploying new version..."
# Add any additional deployment steps here

# Start application
log_info "Starting $SERVICE_NAME..."
sudo systemctl start "$SERVICE_NAME"

# Verify deployment
sleep 5
if systemctl is-active --quiet "$SERVICE_NAME"; then
    log_info "✓ Deployment successful!"
    log_info "Application is running"
else
    log_error "✗ Deployment failed!"
    log_error "Rolling back to previous version..."
    cp -r "$BACKUP_DIR/$APP_NAME"/* "$APP_DIR/"
    sudo systemctl start "$SERVICE_NAME"
    exit 1
fi

# Cleanup old backups (keep last 5)
log_info "Cleaning up old backups..."
cd /backup
ls -t | grep "$APP_NAME" | tail -n +6 | xargs -I {} rm -rf {}

log_info "Deployment completed successfully!"
```

### 5.10 Practice Exercises

**Exercise 1: User Management Script**
```bash
#!/bin/bash
# Create a script that adds multiple users from a file

# Usage: ./add_users.sh users.txt
# users.txt format: username:fullname:department

if [ $# -ne 1 ]; then
    echo "Usage: $0 <userfile>"
    exit 1
fi

USERFILE=$1

while IFS=: read -r username fullname department; do
    # Skip empty lines and comments
    [[ -z "$username" || "$username" =~ ^# ]] && continue
    
    echo "Creating user: $username ($fullname) - $department"
    
    # Create user
    sudo useradd -m -c "$fullname" "$username"
    
    # Set temporary password
    echo "$username:changeme" | sudo chpasswd
    
    # Force password change on first login
    sudo chpasswd -e "$username"
    
    echo "✓ User $username created"
done < "$USERFILE"

echo "All users created successfully"
```

**Exercise 2: Disk Cleanup Script**
```bash
#!/bin/bash
# Find and remove old files to free up space

DAYS_OLD=30
MIN_SIZE="100M"
TARGET_DIR="/var/log"

echo "Finding files older than $DAYS_OLD days and larger than $MIN_SIZE in $TARGET_DIR"

# Find old large files
find "$TARGET_DIR" -type f -mtime +$DAYS_OLD -size +$MIN_SIZE -exec ls -lh {} \; > /tmp/files_to_delete.txt

# Show what will be deleted
echo "Files to be deleted:"
cat /tmp/files_to_delete.txt

# Ask for confirmation
read -p "Delete these files? (yes/no): " CONFIRM

if [ "$CONFIRM" = "yes" ]; then
    find "$TARGET_DIR" -type f -mtime +$DAYS_OLD -size +$MIN_SIZE -delete
    echo "Files deleted successfully"
else
    echo "Operation cancelled"
fi
```

---

## 6. Virtual Machines & Cloud Basics

### 6.1 What are Virtual Machines?

A Virtual Machine (VM) is a software emulation of a physical computer. It runs an operating system and applications just like a physical computer, but it's isolated and runs on top of a physical machine (the host).

**Key Concepts:**
- **Hypervisor:** Software that creates and runs VMs (Examples: VMware, VirtualBox, KVM, Hyper-V)
- **Host OS:** The operating system on the physical machine
- **Guest OS:** The operating system running inside the VM

**Why Use VMs in DevOps?**
- Test applications in different environments
- Isolate applications from each other
- Create dev/test environments quickly
- Snapshot and restore system states
- Efficient resource utilization

**VM vs Physical Server:**
```
Physical Server:
- 1 Server = 1 Operating System
- Expensive hardware
- Difficult to scale
- Wasted resources

Virtual Machine:
- 1 Server = Multiple VMs
- Cost-effective
- Easy to scale
- Efficient resource usage
```

### 6.2 Working with VirtualBox (Hands-on)

**Installation:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install virtualbox -y

# Check installation
vboxmanage --version
```

**Creating a VM via Command Line:**
```bash
# Create a new VM
vboxmanage createvm --name "Ubuntu-Server" --ostype Ubuntu_64 --register

# Configure memory and CPU
vboxmanage modifyvm "Ubuntu-Server" --memory 2048 --cpus 2

# Create virtual hard disk
vboxmanage createhd --filename ~/VirtualBox\ VMs/Ubuntu-Server/Ubuntu-Server.vdi --size 20480

# Attach hard disk to VM
vboxmanage storagectl "Ubuntu-Server" --name "SATA Controller" --add sata --controller IntelAhci
vboxmanage storageattach "Ubuntu-Server" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium ~/VirtualBox\ VMs/Ubuntu-Server/Ubuntu-Server.vdi

# Configure network
vboxmanage modifyvm "Ubuntu-Server" --nic1 nat --nictype1 82540EM

# Attach ISO for installation
vboxmanage storageattach "Ubuntu-Server" --storagectl "SATA Controller" --port 1 --device 0 --type dvddrive --medium ~/Downloads/ubuntu-22.04.iso

# Start VM
vboxmanage startvm "Ubuntu-Server" --type headless

# List all VMs
vboxmanage list vms

# Stop VM
vboxmanage controlvm "Ubuntu-Server" poweroff

# Delete VM
vboxmanage unregistervm "Ubuntu-Server" --delete
```

### 6.3 Cloud Computing Fundamentals

**What is Cloud Computing?**
Cloud computing is delivering computing services (servers, storage, databases, networking, software) over the internet ("the cloud").

**Cloud Service Models:**

1. **IaaS (Infrastructure as a Service)**
   - Provides: Virtual machines, storage, networks
   - You manage: OS, runtime, applications
   - Examples: AWS EC2, Azure VMs, Google Compute Engine
   - Use case: Full control over infrastructure

2. **PaaS (Platform as a Service)**
   - Provides: Infrastructure + OS + runtime
   - You manage: Applications and data
   - Examples: AWS Elastic Beanstalk, Heroku, Azure App Service
   - Use case: Focus on code, not infrastructure

3. **SaaS (Software as a Service)**
   - Provides: Complete application
   - You manage: Just your data
   - Examples: Gmail, Salesforce, Office 365
   - Use case: Ready-to-use applications

**Cloud Deployment Models:**
- **Public Cloud:** Resources owned by cloud provider (AWS, Azure, GCP)
- **Private Cloud:** Resources owned by organization
- **Hybrid Cloud:** Mix of public and private
- **Multi-Cloud:** Using multiple cloud providers

### 6.4 Introduction to AWS (Amazon Web Services)

**Core AWS Services for DevOps:**

1. **EC2 (Elastic Compute Cloud)** - Virtual servers
2. **S3 (Simple Storage Service)** - Object storage
3. **RDS (Relational Database Service)** - Managed databases
4. **VPC (Virtual Private Cloud)** - Networking
5. **IAM (Identity and Access Management)** - Security
6. **CloudWatch** - Monitoring
7. **Lambda** - Serverless computing
8. **ECS/EKS** - Container services

**AWS CLI Installation:**
```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify installation
aws --version

# Configure AWS credentials
aws configure
# Enter:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region (e.g., us-east-1)
# - Default output format (json)

# Test configuration
aws sts get-caller-identity
```

### 6.5 Working with AWS EC2

**Launching an EC2 Instance (CLI):**
```bash
# List available AMIs (Amazon Machine Images)
aws ec2 describe-images --owners amazon --filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" --query 'Images[0].[ImageId,Name]'

# Create a key pair for SSH access
aws ec2 create-key-pair --key-name MyKeyPair --query 'KeyMaterial' --output text > MyKeyPair.pem
chmod 400 MyKeyPair.pem  # Secure the private key

# Create a security group (firewall rules)
aws ec2 create-security-group \
    --group-name MySecurityGroup \
    --description "Security group for web server" \
    --vpc-id vpc-xxxxxxxx

# Allow SSH access (port 22)
aws ec2 authorize-security-group-ingress \
    --group-id sg-xxxxxxxx \
    --protocol tcp \
    --port 22 \
    --cidr 0.0.0.0/0

# Allow HTTP access (port 80)
aws ec2 authorize-security-group-ingress \
    --group-id sg-xxxxxxxx \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

# Launch an EC2 instance
aws ec2 run-instances \
    --image-id ami-xxxxxxxxx \
    --instance-type t2.micro \
    --key-name MyKeyPair \
    --security-group-ids sg-xxxxxxxx \
    --count 1 \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]'

# List running instances
aws ec2 describe-instances \
    --filters "Name=instance-state-name,Values=running" \
    --query 'Reservations[*].Instances[*].[InstanceId,InstanceType,PublicIpAddress,Tags[?Key==`Name`].Value|[0]]' \
    --output table

# Get instance public IP
INSTANCE_ID="i-xxxxxxxxx"
PUBLIC_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

# SSH into instance
ssh -i MyKeyPair.pem ec2-user@$PUBLIC_IP

# Stop instance
aws ec2 stop-instances --instance-ids $INSTANCE_ID

# Start instance
aws ec2 start-instances --instance-ids $INSTANCE_ID

# Terminate instance (delete)
aws ec2 terminate-instances --instance-ids $INSTANCE_ID
```

**User Data Script (Bootstrap EC2 on Launch):**
```bash
#!/bin/bash
# This script runs when the EC2 instance first starts

# Update system
yum update -y

# Install Apache web server
yum install httpd -y

# Create a simple web page
cat > /var/www/html/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head><title>My Web Server</title></head>
<body>
    <h1>Hello from EC2!</h1>
    <p>This server was automatically configured using user data.</p>
    <p>Instance ID: <span id="instanceId"></span></p>
    <script>
        // Get instance metadata
        fetch('http://169.254.169.254/latest/meta-data/instance-id')
            .then(response => response.text())
            .then(data => document.getElementById('instanceId').textContent = data);
    </script>
</body>
</html>
EOF

# Start Apache
systemctl start httpd
systemctl enable httpd

# Configure firewall
systemctl start firewalld
firewall-cmd --permanent --add-service=http
firewall-cmd --reload
```

**Launch with User Data:**
```bash
# Save user data script to file
cat > userdata.sh << 'EOF'
#!/bin/bash
yum update -y
yum install httpd -y
echo "<h1>Hello from $(hostname)</h1>" > /var/www/html/index.html
systemctl start httpd
systemctl enable httpd
EOF

# Launch instance with user data
aws ec2 run-instances \
    --image-id ami-xxxxxxxxx \
    --instance-type t2.micro \
    --key-name MyKeyPair \
    --security-group-ids sg-xxxxxxxx \
    --user-data file://userdata.sh \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=AutoConfiguredWebServer}]'
```

### 6.6 AWS S3 (Simple Storage Service)

**S3 Basics:**
- Object storage service
- Store and retrieve any amount of data
- 99.999999999% (11 9's) durability
- Use cases: Backups, static websites, data lakes, application assets

**Working with S3:**
```bash
# Create a bucket
aws s3 mb s3://my-unique-bucket-name-12345

# List all buckets
aws s3 ls

# Upload a file
aws s3 cp myfile.txt s3://my-unique-bucket-name-12345/

# Upload a directory
aws s3 cp mydir/ s3://my-unique-bucket-name-12345/mydir/ --recursive

# Download a file
aws s3 cp s3://my-unique-bucket-name-12345/myfile.txt ./

# List bucket contents
aws s3 ls s3://my-unique-bucket-name-12345/

# Sync local directory with S3 (like rsync)
aws s3 sync ./mydir s3://my-unique-bucket-name-12345/mydir/

# Delete a file
aws s3 rm s3://my-unique-bucket-name-12345/myfile.txt

# Delete bucket
aws s3 rb s3://my-unique-bucket-name-12345 --force  # --force deletes all objects first

# Make bucket public (for static website hosting)
aws s3 website s3://my-unique-bucket-name-12345/ --index-document index.html --error-document error.html

# Set bucket policy for public read
cat > bucket-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::my-unique-bucket-name-12345/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket my-unique-bucket-name-12345 --policy file://bucket-policy.json
```

**Real-World Example: Automated Backup to S3**
```bash
#!/bin/bash
# Automated backup script that uploads to S3

set -euo pipefail

# Configuration
BACKUP_DIR="/var/www"
S3_BUCKET="s3://my-backups-bucket"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="backup_${TIMESTAMP}.tar.gz"
LOCAL_BACKUP="/tmp/${BACKUP_NAME}"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Create backup
log "Creating backup of $BACKUP_DIR"
tar -czf "$LOCAL_BACKUP" "$BACKUP_DIR"

if [ ! -f "$LOCAL_BACKUP" ]; then
    log "ERROR: Backup file not created"
    exit 1
fi

# Get backup size
BACKUP_SIZE=$(du -h "$LOCAL_BACKUP" | cut -f1)
log "Backup created: $BACKUP_NAME ($BACKUP_SIZE)"

# Upload to S3
log "Uploading to S3: $S3_BUCKET"
if aws s3 cp "$LOCAL_BACKUP" "${S3_BUCKET}/${BACKUP_NAME}"; then
    log "Upload successful"
else
    log "ERROR: Upload failed"
    exit 1
fi

# Clean up local backup
rm -f "$LOCAL_BACKUP"
log "Local backup cleaned up"

# Delete old backups (keep last 7 days)
log "Cleaning up old backups"
CUTOFF_DATE=$(date -d '7 days ago' +%Y%m%d)

aws s3 ls "${S3_BUCKET}/" | while read -r line; do
    BACKUP_FILE=$(echo "$line" | awk '{print $4}')
    BACKUP_DATE=$(echo "$BACKUP_FILE" | grep -oP '\d{8}' | head -1)
    
    if [ "$BACKUP_DATE" -lt "$CUTOFF_DATE" ]; then
        log "Deleting old backup: $BACKUP_FILE"
        aws s3 rm "${S3_BUCKET}/${BACKUP_FILE}"
    fi
done

log "Backup process completed successfully"
```

### 6.7 AWS IAM (Identity and Access Management)

**IAM Concepts:**
- **Users:** Individual people or services
- **Groups:** Collection of users
- **Roles:** Permissions that can be assumed
- **Policies:** JSON documents defining permissions

**Creating IAM Users and Groups:**
```bash
# Create a group
aws iam create-group --group-name Developers

# Attach policy to group (grant permissions)
aws iam attach-group-policy \
    --group-name Developers \
    --policy-arn arn:aws:iam::aws:policy/PowerUserAccess

# Create a user
aws iam create-user --user-name john-doe

# Add user to group
aws iam add-user-to-group --user-name john-doe --group-name Developers

# Create access keys for user
aws iam create-access-key --user-name john-doe

# List users
aws iam list-users

# List groups
aws iam list-groups

# Create custom policy
cat > developer-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:Describe*",
                "ec2:StartInstances",
                "ec2:StopInstances",
                "s3:ListBucket",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "*"
        }
    ]
}
EOF

aws iam create-policy --policy-name DeveloperPolicy --policy-document file://developer-policy.json

# Create IAM role for EC2
cat > trust-policy.json << 'EOF'
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
EOF

aws iam create-role --role-name EC2-S3-Access --assume-role-policy-document file://trust-policy.json

# Attach policy to role
aws iam attach-role-policy \
    --role-name EC2-S3-Access \
    --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
```

### 6.8 Cloud Best Practices

**Cost Optimization:**
```bash
# Use spot instances for non-critical workloads
aws ec2 run-instances \
    --image-id ami-xxxxxxxxx \
    --instance-type t2.micro \
    --instance-market-options '{"MarketType":"spot","SpotOptions":{"MaxPrice":"0.01"}}'

# Stop instances when not in use (scheduled with cron)
# Schedule to stop instances at night
# crontab -e
# 0 22 * * * aws ec2 stop-instances --instance-ids i-xxxxxxxxx

# Start instances in the morning
# 0 8 * * 1-5 aws ec2 start-instances --instance-ids i-xxxxxxxxx

# Set up billing alerts
aws cloudwatch put-metric-alarm \
    --alarm-name HighBillingAlert \
    --alarm-description "Alert when billing exceeds threshold" \
    --metric-name EstimatedCharges \
    --namespace AWS/Billing \
    --statistic Maximum \
    --period 21600 \
    --threshold 100 \
    --comparison-operator GreaterThanThreshold
```

**Security Best Practices:**
1. **Never use root account** - Create IAM users
2. **Enable MFA** - Multi-factor authentication
3. **Use least privilege** - Grant minimum necessary permissions
4. **Rotate credentials** - Change passwords and access keys regularly
5. **Encrypt data** - Use encryption at rest and in transit
6. **Use VPC** - Isolate resources in private networks
7. **Monitor activity** - Enable CloudTrail logging

**Tagging Strategy:**
```bash
# Good tagging helps with cost allocation and resource management
aws ec2 create-tags --resources i-xxxxxxxxx --tags \
    Key=Environment,Value=Production \
    Key=Application,Value=WebApp \
    Key=Owner,Value=DevOps-Team \
    Key=CostCenter,Value=Engineering \
    Key=Project,Value=CustomerPortal

# Find all resources by tag
aws ec2 describe-instances \
    --filters "Name=tag:Environment,Values=Production" \
    --query 'Reservations[*].Instances[*].[InstanceId,Tags[?Key==`Name`].Value|[0]]'
```

### 6.9 Practical Cloud Exercises

**Exercise 1: Deploy a Web Application on EC2**
```bash
#!/bin/bash
# Complete EC2 web server deployment script

# Variables
KEY_NAME="my-webapp-key"
SECURITY_GROUP_NAME="webapp-sg"
INSTANCE_TYPE="t2.micro"
AMI_ID="ami-0c55b159cbfafe1f0"  # Amazon Linux 2
REGION="us-east-1"

echo "=== Deploying Web Application to AWS EC2 ==="

# Step 1: Create key pair
echo "Creating key pair..."
aws ec2 create-key-pair --key-name $KEY_NAME --query 'KeyMaterial' --output text > ${KEY_NAME}.pem
chmod 400 ${KEY_NAME}.pem
echo "✓ Key pair created"

# Step 2: Create security group
echo "Creating security group..."
SG_ID=$(aws ec2 create-security-group \
    --group-name $SECURITY_GROUP_NAME \
    --description "Security group for web application" \
    --query 'GroupId' \
    --output text)

# Step 3: Configure security group rules
echo "Configuring firewall rules..."
aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 22 --cidr 0.0.0.0/0
aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 80 --cidr 0.0.0.0/0
aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 443 --cidr 0.0.0.0/0
echo "✓ Security group configured"

# Step 4: Create user data script
cat > userdata.sh << 'USERDATA'
#!/bin/bash
yum update -y
yum install -y httpd git

# Install Node.js
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs

# Clone application
cd /var/www/html
git clone https://github.com/user/webapp.git
cd webapp
npm install

# Create systemd service
cat > /etc/systemd/system/webapp.service << 'EOF'
[Unit]
Description=Web Application
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/var/www/html/webapp
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl start webapp
systemctl enable webapp
USERDATA

# Step 5: Launch EC2 instance
echo "Launching EC2 instance..."
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id $AMI_ID \
    --instance-type $INSTANCE_TYPE \
    --key-name $KEY_NAME \
    --security-group-ids $SG_ID \
    --user-data file://userdata.sh \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=WebApp-Production}]" \
    --query 'Instances[0].InstanceId' \
    --output text)

echo "✓ Instance launched: $INSTANCE_ID"
echo "Waiting for instance to be running..."

# Wait for instance to be running
aws ec2 wait instance-running --instance-ids $INSTANCE_ID

# Get public IP
PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE_ID \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text)

echo "=== Deployment Complete ==="
echo "Instance ID: $INSTANCE_ID"
echo "Public IP: $PUBLIC_IP"
echo "SSH Command: ssh -i ${KEY_NAME}.pem ec2-user@${PUBLIC_IP}"
echo "Application URL: http://${PUBLIC_IP}"
```

**Exercise 2: S3 Static Website Hosting**
```bash
#!/bin/bash
# Deploy static website to S3

BUCKET_NAME="my-website-$(date +%s)"
REGION="us-east-1"

echo "Creating S3 bucket for static website..."

# Create bucket
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Create sample website
mkdir -p website
cat > website/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>My Static Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to My S3 Website!</h1>
        <p>This is a static website hosted on Amazon S3.</p>
        <button onclick="alert('Hello from S3!')">Click Me</button>
    </div>
</body>
</html>
EOF

cat > website/style.css << 'EOF'
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    text-align: center;
}

button {
    background: #667eea;
    color: white;
    border: none;
    padding: 10px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background: #764ba2;
}
EOF

# Upload website files
aws s3 sync website/ s3://$BUCKET_NAME/ --acl public-read

# Configure bucket for website hosting
aws s3 website s3://$BUCKET_NAME/ \
    --index-document index.html \
    --error-document error.html

# Set bucket policy for public access
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo "=== Website Deployed ==="
echo "Bucket: $BUCKET_NAME"
echo "Website URL: $WEBSITE_URL"
echo "Visit: $WEBSITE_URL"
```

---

## 7. Containerization with Docker

### 7.1 What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers package an application with all its dependencies, ensuring it runs consistently across different environments.

**Problem Docker Solves:**
```
Without Docker:
Developer: "It works on my machine!"
Operations: "It doesn't work in production!"

Reason: Different OS versions, dependencies, configurations

With Docker:
Everything the app needs is packaged together
Runs the same everywhere - dev, test, production
```

**Docker vs Virtual Machines:**
```
Virtual Machine:
- Includes full OS (GBs)
- Takes minutes to start
- Resource intensive
- Strong isolation

Docker Container:
- Shares host OS kernel
- Takes seconds to start
- Lightweight (MBs)
- Process-level isolation
- More containers per host
```

**Key Docker Concepts:**
- **Image:** Blueprint/template for containers (like a class in programming)
- **Container:** Running instance of an image (like an object)
- **Dockerfile:** Instructions to build an image
- **Registry:** Repository for images (Docker Hub, AWS ECR)
- **Volume:** Persistent data storage
- **Network:** Container communication

### 7.2 Installing Docker

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add Docker repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add current user to docker group (avoid using sudo)
sudo usermod -aG docker $USER

# Log out and back in for group changes to take effect
# Verify installation
docker --version
docker run hello-world
```

**Docker Compose Installation:**
```bash
# Download Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Make executable
sudo chmod +x /usr/local/bin/docker-compose

# Verify
docker-compose --version
```

### 7.3 Docker Basics

```bash
# Pull an image from Docker Hub
docker pull nginx                    # Pull latest nginx image
docker pull nginx:1.21              # Pull specific version

# List downloaded images
docker images                        # Show all images on system

# Run a container
docker run nginx                     # Run nginx (foreground, blocks terminal)
docker run -d nginx                  # Run in detached mode (background)
docker run -d --name my-nginx nginx  # Run with custom name
docker run -d -p 8080:80 nginx      # Map port 8080 (host) to 80 (container)

# List running containers
docker ps                            # Show running containers
docker ps -a                         # Show all containers (including stopped)

# Stop a container
docker stop my-nginx                 # Graceful stop (sends SIGTERM)
docker stop container_id             # Stop by ID

# Start a stopped container
docker start my-nginx

# Restart a container
docker restart my-nginx

# Remove a container
docker rm my-nginx                   # Remove stopped container
docker rm -f my-nginx                # Force remove (stops and removes)

# Remove an image
docker rmi nginx                     # Remove image (no containers using it)
docker rmi -f nginx                  # Force remove

# View container logs
docker logs my-nginx                 # View all logs
docker logs -f my-nginx              # Follow logs (like tail -f)
docker logs --tail 100 my-nginx      # Last 100 lines

# Execute command in running container
docker exec my-nginx ls /etc         # Run command in container
docker exec -it my-nginx /bin/bash   # Interactive shell in container

# View container details
docker inspect my-nginx              # Full JSON output with all details
docker inspect my-nginx | grep IPAddress  # Get container IP

# View container stats
docker stats                         # Real-time resource usage
docker stats my-nginx                # Stats for specific container

# Copy files to/from container
docker cp myfile.txt my-nginx:/tmp/  # Copy to container
docker cp my-nginx:/tmp/myfile.txt . # Copy from container
```

**Real-World Example: Running a Web Application**
```bash
# Run nginx web server with custom content
# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head><title>My Docker App</title></head>
<body>
    <h1>Hello from Docker!</h1>
    <p>This page is served by nginx running in a Docker container.</p>
</body>
</html>
EOF

# Run nginx and mount custom html
docker run -d \
    --name my-website \
    -p 8080:80 \
    -v $(pwd)/index.html:/usr/share/nginx/html/index.html:ro \
    nginx

# Visit http://localhost:8080 in browser
echo "Website available at: http://localhost:8080"

# View logs
docker logs -f my-website

# Stop and remove
docker stop my-website
docker rm my-website
```

### 7.4 Creating Docker Images (Dockerfiles)

**Dockerfile Basics:**
```dockerfile
# Dockerfile - instructions to build an image

# FROM: Base image to start from
FROM ubuntu:22.04

# LABEL: Metadata about the image
LABEL maintainer="devops@example.com"
LABEL version="1.0"
LABEL description="My custom Docker image"

# RUN: Execute commands during build (creates layers)
RUN apt-get update && apt-get install -y \
    nginx \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# WORKDIR: Set working directory
WORKDIR /app

# COPY: Copy files from host to image
COPY index.html /var/www/html/
COPY app.py /app/

# ADD: Like COPY but can also extract archives and download URLs
ADD application.tar.gz /app/

# ENV: Set environment variables
ENV APP_ENV=production
ENV PORT=8080

# EXPOSE: Document which ports the container listens on
EXPOSE 80
EXPOSE 8080

# USER: Switch to non-root user (security best practice)
RUN useradd -m appuser
USER appuser

# CMD: Default command to run when container starts
# Only one CMD per Dockerfile (last one wins)
CMD ["nginx", "-g", "daemon off;"]

# ENTRYPOINT: Configure container to run as executable
# ENTRYPOINT ["python", "app.py"]

# VOLUME: Create mount point for persistent data
VOLUME ["/data"]

# HEALTHCHECK: Check if container is healthy
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1
```

**Example 1: Python Web Application**
```dockerfile
# Dockerfile for Flask application
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements first (for layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Expose 