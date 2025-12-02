# Complete DevOps Zero to Hero - Master Study Guide

**Course:** DevOps Zero to Hero - Complete Series (58 Videos)  
**Instructor:** Abhishek Veeramalla  
**Platform:** YouTube  
**Playlist URL:** https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa  
**GitHub Repository:** https://github.com/iam-veeramalla  
**Duration:** 45+ Days | 50+ Videos  
**Level:** Beginner to Advanced

---

## 📚 Table of Contents

1. [Course Overview](#course-overview)
2. [DevOps Fundamentals](#devops-fundamentals)
3. [Linux System Administration](#linux-system-administration)
4. [Version Control with Git](#version-control-with-git)
5. [Shell Scripting](#shell-scripting)
6. [Virtual Machines & Cloud Basics](#virtual-machines--cloud-basics)
7. [Containerization with Docker](#containerization-with-docker)
8. [Container Orchestration with Kubernetes](#container-orchestration-with-kubernetes)
9. [Configuration Management - Ansible](#configuration-management---ansible)
10. [Infrastructure as Code - Terraform](#infrastructure-as-code---terraform)
11. [CI/CD with Jenkins](#cicd-with-jenkins)
12. [GitOps with ArgoCD](#gitops-with-argocd)
13. [Cloud Platforms (AWS/Azure/GCP)](#cloud-platforms-awsazuregcp)
14. [Monitoring & Logging](#monitoring--logging)
15. [Python for DevOps](#python-for-devops)
16. [Real-World Projects](#real-world-projects)
17. [Interview Preparation](#interview-preparation)
18. [Best Practices](#best-practices)
19. [Tools Reference](#tools-reference)
20. [Career Guidance](#career-guidance)

---

## 🎯 Course Overview

### What You'll Learn

This comprehensive DevOps Zero to Hero course covers the entire DevOps ecosystem from fundamentals to advanced concepts. The course is designed for:
- Complete beginners with no prior DevOps experience
- Developers transitioning to DevOps roles
- System administrators learning automation
- IT professionals seeking cloud and DevOps skills

### Course Structure

- **Duration:** 45+ Days of structured learning
- **Videos:** 50+ detailed video tutorials
- **Projects:** 20+ hands-on real-world projects
- **Interview Questions:** 500+ curated questions
- **GitHub Repos:** Multiple repositories with code examples
- **Learning Approach:** Practical, scenario-based, whiteboard sessions

### Prerequisites

- Basic computer knowledge
- Willingness to learn
- Access to a computer (Windows/Mac/Linux)
- Internet connection for cloud services

---

## 🚀 DevOps Fundamentals

### Day 1: Introduction to DevOps

#### What is DevOps?
DevOps is a culture, practice, and set of tools that combines software **Development** (Dev) and IT **Operations** (Ops) to:
- Shorten the software development lifecycle
- Deliver features, fixes, and updates frequently
- Maintain high software quality
- Improve collaboration between teams

#### Key Principles
1. **Automation** - Automate repetitive tasks
2. **Continuous Integration** - Merge code frequently
3. **Continuous Delivery** - Deploy code reliably
4. **Continuous Monitoring** - Track application and infrastructure health
5. **Continuous Testing** - Test throughout the pipeline
6. **Collaboration** - Break down silos between teams

#### DevOps Lifecycle Phases

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
   ↑                                                              ↓
   └──────────────────── Feedback Loop ────────────────────────┘
```

**1. Plan**
- Requirement gathering
- Sprint planning
- Project management tools (Jira, Trello)

**2. Code**
- Version control (Git)
- Code collaboration
- Branching strategies

**3. Build**
- Compilation
- Dependency management
- Build tools (Maven, Gradle)

**4. Test**
- Unit testing
- Integration testing
- Automated testing (Selenium, JUnit)

**5. Release**
- Release management
- Approval workflows
- Deployment strategies

**6. Deploy**
- Automated deployment
- Environment provisioning
- Configuration management

**7. Operate**
- Infrastructure management
- Scaling
- High availability

**8. Monitor**
- Application monitoring
- Infrastructure monitoring
- Log aggregation

#### Traditional vs DevOps Approach

| Aspect | Traditional (Waterfall) | DevOps (Agile) |
|--------|------------------------|----------------|
| Development Cycle | Months to Years | Days to Weeks |
| Deployment Frequency | Quarterly/Yearly | Multiple times per day |
| Team Structure | Siloed teams | Cross-functional teams |
| Testing | End of cycle | Continuous |
| Feedback | Delayed | Immediate |
| Automation | Minimal | Extensive |
| Failure Recovery | Slow | Fast |

#### DevOps Benefits
- ✅ **Faster Time to Market** - Release features quickly
- ✅ **Improved Collaboration** - Dev and Ops work together
- ✅ **Increased Efficiency** - Automation reduces manual work
- ✅ **Better Quality** - Continuous testing and monitoring
- ✅ **Faster Recovery** - Quick rollback and fixes
- ✅ **Higher Customer Satisfaction** - Rapid feature delivery

### Day 2: Software Development Life Cycle (SDLC)

#### SDLC Phases

**1. Requirement Analysis**
- Gather business requirements
- Document functional specifications
- Create Software Requirement Specification (SRS)

**2. Design**
- High-level design (HLD)
- Low-level design (LLD)
- Architecture diagrams
- Database schema design

**3. Development**
- Code implementation
- Follow coding standards
- Use version control

**4. Testing**
- Unit testing
- Integration testing
- System testing
- User acceptance testing (UAT)

**5. Deployment**
- Release to production
- Deployment automation
- Environment configuration

**6. Maintenance**
- Bug fixes
- Performance optimization
- Feature enhancements

#### SDLC Models

**Waterfall Model**
- Sequential phases
- Each phase must complete before next
- Limited flexibility
- Good for: Well-defined requirements

**Agile Model**
- Iterative development
- Sprint-based (2-4 weeks)
- Continuous feedback
- Good for: Changing requirements

**DevOps Model**
- Continuous everything
- Automation-first
- Rapid releases
- Good for: Modern applications

### Day 3: Virtual Machines and Cloud Computing

#### Virtualization Concepts

**What is Virtualization?**
- Running multiple OS on single physical hardware
- Logical isolation of resources (CPU, Memory, Storage)
- Efficient resource utilization

**Hypervisor Types**

**Type 1 (Bare Metal)**
- Runs directly on hardware
- Examples: VMware ESXi, Xen, KVM
- Better performance
- Used in data centers

**Type 2 (Hosted)**
- Runs on host OS
- Examples: VirtualBox, VMware Workstation
- Easier setup
- Used for development

#### Cloud Computing

**Why Cloud?**
- No upfront infrastructure cost
- Pay-as-you-go model
- Global availability
- Scalability
- High availability
- Disaster recovery

**Cloud Service Models**

**IaaS (Infrastructure as a Service)**
- Virtual machines
- Storage
- Networks
- Examples: AWS EC2, Azure VMs, GCP Compute Engine

**PaaS (Platform as a Service)**
- Managed platforms
- Focus on code, not infrastructure
- Examples: Heroku, Google App Engine

**SaaS (Software as a Service)**
- Ready-to-use applications
- Examples: Gmail, Salesforce, Dropbox

**Cloud Deployment Models**
1. **Public Cloud** - Shared infrastructure (AWS, Azure, GCP)
2. **Private Cloud** - Dedicated infrastructure
3. **Hybrid Cloud** - Mix of public and private
4. **Multi-Cloud** - Multiple cloud providers

---

## 🐧 Linux System Administration

### Day 4-6: Linux Fundamentals

#### Why Linux for DevOps?
- Most servers run Linux
- Open source and free
- Powerful command-line tools
- Excellent for automation
- Strong security
- Large community support

#### Essential Linux Commands

**File and Directory Operations**
```bash
# List files
ls                  # List files in current directory
ls -l               # Long format with details
ls -la              # Include hidden files
ls -lh              # Human-readable sizes
ls -ltr             # Sort by time, reverse order

# Change directory
cd /path/to/dir     # Change to specific directory
cd ~                # Go to home directory
cd ..               # Go up one directory
cd -                # Go to previous directory

# Create directories
mkdir dirname       # Create directory
mkdir -p dir1/dir2/dir3  # Create nested directories

# Create files
touch filename      # Create empty file
cat > file.txt      # Create file and write content

# Copy files
cp source dest      # Copy file
cp -r dir1 dir2     # Copy directory recursively

# Move/Rename files
mv oldname newname  # Rename file
mv file /path/      # Move file

# Delete files
rm filename         # Delete file
rm -r dirname       # Delete directory recursively
rm -rf dirname      # Force delete without prompt
rm -i file          # Interactive delete (prompt)

# View files
cat filename        # Display entire file
less filename       # View file page by page
more filename       # View file (forward only)
head filename       # First 10 lines
head -n 20 file     # First 20 lines
tail filename       # Last 10 lines
tail -f logfile     # Follow file (real-time)

# Search files
find /path -name "*.txt"        # Find files by name
find /path -type f -size +100M  # Find files larger than 100MB
find /path -mtime -7            # Files modified in last 7 days

# Search within files
grep "pattern" file             # Search pattern in file
grep -r "pattern" /path         # Recursive search
grep -i "pattern" file          # Case-insensitive search
grep -v "pattern" file          # Inverse match
grep -n "pattern" file          # Show line numbers
```

**File Permissions**
```bash
# Understanding permissions
# rwx rwx rwx = User Group Others
# r = read (4), w = write (2), x = execute (1)

# Change permissions
chmod 755 file      # rwxr-xr-x
chmod 644 file      # rw-r--r--
chmod +x script.sh  # Add execute permission
chmod -w file       # Remove write permission

# Change ownership
chown user:group file     # Change owner and group
chown -R user:group dir   # Recursive change

# Examples
chmod u+x script.sh       # Add execute for user
chmod g-w file            # Remove write for group
chmod o+r file            # Add read for others
chmod a+x file            # Add execute for all
```

**User and Group Management**
```bash
# User operations
whoami              # Current user
id                  # User and group IDs
sudo command        # Run as superuser
su - username       # Switch user

# User management (requires sudo)
useradd username    # Create user
userdel username    # Delete user
passwd username     # Change password
usermod -aG group user  # Add user to group

# Group operations
groups              # List user's groups
groupadd groupname  # Create group
groupdel groupname  # Delete group
```

**Process Management**
```bash
# View processes
ps                  # Current shell processes
ps aux              # All processes
ps -ef              # Full format listing
top                 # Interactive process viewer
htop                # Enhanced process viewer
pstree              # Process tree

# Process control
kill PID            # Terminate process
kill -9 PID         # Force kill
killall process     # Kill by process name
pkill pattern       # Kill by pattern

# Background processes
command &           # Run in background
jobs                # List background jobs
fg %1               # Bring job 1 to foreground
bg %1               # Resume job 1 in background
nohup command &     # Run immune to hangups
```

**System Information**
```bash
# System details
uname -a            # System information
hostname            # System hostname
uptime              # System uptime
date                # Current date and time
cal                 # Calendar

# Hardware info
lscpu               # CPU information
free -h             # Memory usage
df -h               # Disk space usage
du -sh /path        # Directory size
lsblk               # Block devices

# Network information
ifconfig            # Network interfaces (old)
ip addr show        # Network interfaces (new)
ip route            # Routing table
netstat -tuln       # Listening ports
ss -tuln            # Socket statistics
ping host           # Test connectivity
traceroute host     # Trace route to host
nslookup domain     # DNS lookup
dig domain          # DNS query
```

**Package Management**

**Ubuntu/Debian (APT)**
```bash
# Update package list
sudo apt update

# Upgrade packages
sudo apt upgrade

# Install package
sudo apt install package-name

# Remove package
sudo apt remove package-name

# Search package
apt search package-name

# Show package info
apt show package-name

# List installed packages
apt list --installed
```

**CentOS/RHEL (YUM/DNF)**
```bash
# Update packages
sudo yum update

# Install package
sudo yum install package-name

# Remove package
sudo yum remove package-name

# Search package
yum search package-name

# List installed
yum list installed
```

**Text Processing**
```bash
# awk - Pattern scanning and processing
awk '{print $1}' file               # Print first column
awk -F: '{print $1}' /etc/passwd   # Custom delimiter
awk '$3 > 100' file                 # Conditional processing

# sed - Stream editor
sed 's/old/new/' file               # Replace first occurrence
sed 's/old/new/g' file              # Replace all occurrences
sed -i 's/old/new/g' file           # In-place replacement
sed '1d' file                       # Delete first line
sed -n '5,10p' file                 # Print lines 5-10

# cut - Cut sections from files
cut -d: -f1 /etc/passwd            # Cut first field
cut -c1-10 file                     # Cut characters 1-10

# sort - Sort lines
sort file                           # Alphabetical sort
sort -n file                        # Numerical sort
sort -r file                        # Reverse sort
sort -u file                        # Unique sort

# uniq - Remove duplicates
uniq file                           # Remove adjacent duplicates
uniq -c file                        # Count occurrences
uniq -d file                        # Show only duplicates

# wc - Word count
wc file                             # Lines, words, characters
wc -l file                          # Count lines
wc -w file                          # Count words
```

**Networking Commands**
```bash
# Download files
wget URL                # Download file
curl URL                # Transfer data
curl -O URL             # Save with original name

# File transfer
scp file user@host:/path           # Copy to remote
scp user@host:/path/file .         # Copy from remote
scp -r dir user@host:/path         # Copy directory

# SSH
ssh user@host           # Connect to remote
ssh -i key.pem user@host          # Connect with key
ssh -p 2222 user@host             # Custom port
```

**System Services**
```bash
# Systemctl (systemd)
systemctl start service       # Start service
systemctl stop service        # Stop service
systemctl restart service     # Restart service
systemctl status service      # Check status
systemctl enable service      # Enable on boot
systemctl disable service     # Disable on boot
systemctl list-units --type=service  # List services

# Service logs
journalctl -u service         # View service logs
journalctl -f                 # Follow logs
journalctl -n 50              # Last 50 entries
```

**Disk and Storage**
```bash
# Partition management
fdisk -l                # List partitions
lsblk                   # List block devices
df -h                   # Disk usage
du -sh /path            # Directory size

# Mount operations
mount /dev/sdb1 /mnt    # Mount device
umount /mnt             # Unmount
cat /etc/fstab          # Persistent mounts
```

**Compression and Archives**
```bash
# tar - Archive files
tar -cvf archive.tar files      # Create tar
tar -xvf archive.tar            # Extract tar
tar -czvf archive.tar.gz files  # Create tar.gz
tar -xzvf archive.tar.gz        # Extract tar.gz
tar -cjvf archive.tar.bz2 files # Create tar.bz2
tar -xjvf archive.tar.bz2       # Extract tar.bz2

# zip/unzip
zip archive.zip files           # Create zip
unzip archive.zip               # Extract zip

# gzip
gzip file                       # Compress file
gunzip file.gz                  # Decompress file
```

#### Linux File System Structure

```
/                   # Root directory
├── bin             # Essential user binaries
├── boot            # Boot loader files
├── dev             # Device files
├── etc             # Configuration files
├── home            # User home directories
├── lib             # System libraries
├── media           # Removable media mount points
├── mnt             # Temporary mount points
├── opt             # Optional software
├── proc            # Process information
├── root            # Root user home directory
├── run             # Runtime data
├── sbin            # System binaries
├── srv             # Service data
├── sys             # System information
├── tmp             # Temporary files
├── usr             # User programs
│   ├── bin         # User binaries
│   ├── lib         # User libraries
│   └── local       # Locally installed software
└── var             # Variable data (logs, caches)
    ├── log         # Log files
    ├── www         # Web server files
    └── tmp         # Temporary files
```

---

## 🔀 Version Control with Git

### Day 7-11: Git and GitHub

#### What is Version Control?

Version control is a system that tracks changes to files over time, allowing you to:
- Track all changes made to code
- Collaborate with multiple developers
- Revert to previous versions
- Create branches for features
- Merge changes from different sources

#### Git vs GitHub

**Git**
- Distributed version control system
- Runs locally on your computer
- Open source
- Command-line tool

**GitHub**
- Web-based hosting service for Git
- Cloud storage for repositories
- Collaboration features
- Pull requests, issues, wikis
- Alternatives: GitLab, Bitbucket

#### Git Installation

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# CentOS/RHEL
sudo yum install git

# MacOS
brew install git

# Verify installation
git --version
```

#### Git Configuration

```bash
# Set user name
git config --global user.name "Your Name"

# Set email
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "vim"

# Check configuration
git config --list

# Get specific config
git config user.name
```

#### Essential Git Commands

**Repository Initialization**
```bash
# Create new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git

# Clone with specific branch
git clone -b branch-name https://github.com/user/repo.git
```

**Basic Workflow**
```bash
# Check repository status
git status

# Add files to staging area
git add filename        # Add specific file
git add .               # Add all files
git add *.js            # Add all JavaScript files
git add -A              # Add all changes

# Commit changes
git commit -m "Commit message"

# Add and commit in one command
git commit -am "Message"

# Push to remote
git push origin main

# Pull from remote
git pull origin main
```

**Branching and Merging**
```bash
# List branches
git branch              # Local branches
git branch -r           # Remote branches
git branch -a           # All branches

# Create new branch
git branch branch-name

# Switch branch
git checkout branch-name

# Create and switch to branch
git checkout -b new-branch

# Modern way (Git 2.23+)
git switch branch-name
git switch -c new-branch

# Merge branch
git checkout main
git merge feature-branch

# Delete branch
git branch -d branch-name     # Safe delete
git branch -D branch-name     # Force delete
```

**Remote Repository Operations**
```bash
# Add remote
git remote add origin https://github.com/user/repo.git

# List remotes
git remote -v

# Remove remote
git remote remove origin

# Rename remote
git remote rename old-name new-name

# Fetch from remote
git fetch origin

# Pull with rebase
git pull --rebase origin main
```

**Viewing History**
```bash
# View commit history
git log

# Compact log
git log --oneline

# Graph view
git log --graph --oneline --all

# Show changes in commits
git log -p

# Last n commits
git log -n 5

# Commits by author
git log --author="Name"

# Show specific commit
git show commit-hash
```

**Undoing Changes**
```bash
# Discard changes in working directory
git checkout -- filename

# Unstage file
git reset HEAD filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert commit (create new commit)
git revert commit-hash

# Reset to specific commit
git reset --hard commit-hash
```

**Stashing**
```bash
# Stash changes
git stash

# List stashes
git stash list

# Apply last stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Drop stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

**Tagging**
```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# List tags
git tag

# Push tag to remote
git push origin v1.0.0

# Push all tags
git push origin --tags

# Delete tag
git tag -d v1.0.0
git push origin --delete v1.0.0
```

**Git Diff**
```bash
# Show unstaged changes
git diff

# Show staged changes
git diff --staged

# Compare branches
git diff branch1..branch2

# Compare commits
git diff commit1 commit2

# Show changes in specific file
git diff filename
```

#### Branching Strategies

**Git Flow**
- **main/master** - Production-ready code
- **develop** - Integration branch
- **feature/** - Feature branches
- **release/** - Release preparation
- **hotfix/** - Production fixes

**GitHub Flow**
- **main** - Deployable code
- **feature branches** - All new work
- Pull requests for review
- Deploy from main

**Trunk-Based Development**
- Single main branch
- Short-lived feature branches
- Frequent integration
- Feature flags for incomplete features

#### Git Best Practices

1. **Commit Messages**
   ```
   feat: Add user authentication
   fix: Resolve memory leak in API
   docs: Update README with setup instructions
   refactor: Simplify error handling logic
   test: Add unit tests for user service
   ```

2. **Commit Frequency**
   - Commit early and often
   - Each commit should be logical unit
   - Keep commits atomic

3. **Branch Management**
   - Use descriptive branch names
   - Delete merged branches
   - Keep branches short-lived

4. **Pull Before Push**
   - Always pull latest changes
   - Resolve conflicts locally
   - Test before pushing

5. **.gitignore**
   ```
   # Node modules
   node_modules/
   
   # Environment variables
   .env
   
   # IDE files
   .vscode/
   .idea/
   
   # Build outputs
   dist/
   build/
   
   # Logs
   *.log
   
   # OS files
   .DS_Store
   Thumbs.db
   ```

#### GitHub Features

**Pull Requests**
- Propose changes
- Code review
- Discussion
- Automated testing

**Issues**
- Bug tracking
- Feature requests
- Task management
- Labels and milestones

**GitHub Actions**
- CI/CD workflows
- Automation
- Testing
- Deployment

**SSH Key Setup**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings > SSH and GPG keys

# Test connection
ssh -T git@github.com
```

---

## 📜 Shell Scripting

### Day 8: Shell Scripting Basics

#### What is Shell Scripting?

Shell scripting is writing a series of commands for the shell to execute. It automates repetitive tasks and system administration.

**Why Shell Scripting for DevOps?**
- Automate deployment tasks
- System monitoring
- Log processing
- Backup automation
- Configuration management

#### First Shell Script

```bash
#!/bin/bash
# This is a comment
# My first shell script

echo "Hello, DevOps!"
echo "Current date: $(date)"
echo "Current user: $(whoami)"
```

**Making Script Executable**
```bash
chmod +x script.sh
./script.sh
```

#### Variables

```bash
#!/bin/bash

# Variable declaration (no spaces around =)
NAME="DevOps"
AGE=25
PI=3.14

# Using variables
echo "Name: $NAME"
echo "Age: $AGE"
echo "Value: ${PI}"

# Command substitution
CURRENT_DATE=$(date)
USER=$(whoami)
echo "Date: $CURRENT_DATE"
echo "User: $USER"

# Read user input
echo "Enter your name:"
read USERNAME
echo "Hello, $USERNAME!"

# Multiple inputs
read -p "Enter your age: " AGE
echo "You are $AGE years old"
```

#### Special Variables

```bash
#!/bin/bash

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "All arguments: $@"
echo "Number of arguments: $#"
echo "Exit status of last command: $?"
echo "Process ID: $$"
```

**Usage:**
```bash
./script.sh arg1 arg2 arg3
```

#### Conditional Statements

```bash
#!/bin/bash

# If-else
if [ $1 -gt 10 ]; then
    echo "Number is greater than 10"
elif [ $1 -eq 10 ]; then
    echo "Number is equal to 10"
else
    echo "Number is less than 10"
fi

# File checks
if [ -f "file.txt" ]; then
    echo "File exists"
fi

if [ -d "directory" ]; then
    echo "Directory exists"
fi

# String comparison
if [ "$NAME" = "DevOps" ]; then
    echo "Name matches"
fi

# Multiple conditions
if [ $AGE -gt 18 ] && [ $AGE -lt 60 ]; then
    echo "Adult"
fi

# Case statement
case $1 in
    start)
        echo "Starting service..."
        ;;
    stop)
        echo "Stopping service..."
        ;;
    restart)
        echo "Restarting service..."
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        ;;
esac
```

**Comparison Operators**
- `-eq` : Equal to
- `-ne` : Not equal to
- `-gt` : Greater than
- `-lt` : Less than
- `-ge` : Greater than or equal to
- `-le` : Less than or equal to

#### Loops

**For Loop**
```bash
#!/bin/bash

# Loop through list
for item in apple banana cherry; do
    echo "Fruit: $item"
done

# Loop through range
for i in {1..5}; do
    echo "Number: $i"
done

# C-style for loop
for ((i=1; i<=5; i++)); do
    echo "Counter: $i"
done

# Loop through files
for file in *.txt; do
    echo "Processing: $file"
done

# Loop through array
FRUITS=("apple" "banana" "cherry")
for fruit in "${FRUITS[@]}"; do
    echo "Fruit: $fruit"
done
```

**While Loop**
```bash
#!/bin/bash

# Basic while loop
COUNT=1
while [ $COUNT -le 5 ]; do
    echo "Count: $COUNT"
    COUNT=$((COUNT + 1))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt

# Infinite loop
while true; do
    echo "Press Ctrl+C to stop"
    sleep 1
done
```

**Until Loop**
```bash
#!/bin/bash

COUNT=1
until [ $COUNT -gt 5 ]; do
    echo "Count: $COUNT"
    COUNT=$((COUNT + 1))
done
```

#### Functions

```bash
#!/bin/bash

# Function definition
greet() {
    echo "Hello, $1!"
}

# Function with return value
add_numbers() {
    local num1=$1
    local num2=$2
    local sum=$((num1 + num2))
    echo $sum
}

# Using functions
greet "DevOps"
result=$(add_numbers 5 10)
echo "Sum: $result"

# Function with multiple parameters
create_user() {
    local username=$1
    local email=$2
    echo "Creating user: $username"
    echo "Email: $email"
}

create_user "john" "john@example.com"
```

#### Arrays

```bash
#!/bin/bash

# Array declaration
FRUITS=("apple" "banana" "cherry" "date")

# Access elements
echo "First fruit: ${FRUITS[0]}"
echo "Second fruit: ${FRUITS[1]}"

# All elements
echo "All fruits: ${FRUITS[@]}"

# Array length
echo "Number of fruits: ${#FRUITS[@]}"

# Add element
FRUITS+=("elderberry")

# Loop through array
for fruit in "${FRUITS[@]}"; do
    echo $fruit
done

# Associative array (dictionary)
declare -A PORTS
PORTS[http]=80
PORTS[https]=443
PORTS[ssh]=22

echo "HTTP port: ${PORTS[http]}"
```

#### String Operations

```bash
#!/bin/bash

# String length
TEXT="Hello DevOps"
echo "Length: ${#TEXT}"

# Substring
echo "Substring: ${TEXT:0:5}"  # Hello

# Replace
echo "${TEXT/DevOps/World}"  # Hello World

# Upper/Lower case
echo "${TEXT^^}"  # HELLO DEVOPS
echo "${TEXT,,}"  # hello devops

# Check if string contains
if [[ "$TEXT" == *"DevOps"* ]]; then
    echo "Contains DevOps"
fi
```

#### File Operations

```bash
#!/bin/bash

# Check if file exists
if [ -f "file.txt" ]; then
    echo "File exists"
fi

# Check if directory exists
if [ -d "directory" ]; then
    echo "Directory exists"
fi

# File permissions
if [ -r "file.txt" ]; then
    echo "File is readable"
fi

if [ -w "file.txt" ]; then
    echo "File is writable"
fi

if [ -x "script.sh" ]; then
    echo "File is executable"
fi

# Create backup
cp file.txt file.txt.backup

# Read file
while IFS= read -r line; do
    echo "$line"
done < file.txt

# Write to file
echo "New content" > file.txt    # Overwrite
echo "Append content" >> file.txt  # Append
```

#### Error Handling

```bash
#!/bin/bash

# Exit on error
set -e

# Exit on undefined variable
set -u

# Pipe failure
set -o pipefail

# Combine all
set -euo pipefail

# Custom error handling
error_exit() {
    echo "Error: $1" >&2
    exit 1
}

# Usage
if ! command -v docker &> /dev/null; then
    error_exit "Docker not found"
fi

# Try-catch equivalent
if ! some_command; then
    echo "Command failed"
    exit 1
fi
```

#### Practical Shell Scripts

**System Monitoring Script**
```bash
#!/bin/bash

echo "========== System Monitoring =========="
echo "Date: $(date)"
echo "Hostname: $(hostname)"
echo "Uptime: $(uptime -p)"
echo ""

echo "===== CPU Information ====="
lscpu | grep "Model name"
echo ""

echo "===== Memory Usage ====="
free -h
echo ""

echo "===== Disk Usage ====="
df -h
echo ""

echo "===== Top 5 CPU Processes ====="
ps aux --sort=-%cpu | head -6
echo ""

echo "===== Network Connections ====="
netstat -tuln | grep LISTEN | head -5
```

**Backup Script**
```bash
#!/bin/bash

SOURCE="/var/www/html"
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_$DATE.tar.gz"

echo "Starting backup..."
tar -czf $BACKUP_DIR/$BACKUP_FILE $SOURCE

if [ $? -eq 0 ]; then
    echo "Backup successful: $BACKUP_FILE"
else
    echo "Backup failed!"
    exit 1
fi

# Delete backups older than 7 days
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +7 -delete
echo "Old backups cleaned"
```

**Log Analyzer**
```bash
#!/bin/bash

LOG_FILE="/var/log/nginx/access.log"

echo "===== Log Analysis Report ====="
echo "Total requests: $(wc -l < $LOG_FILE)"
echo ""

echo "Top 10 IP addresses:"
awk '{print $1}' $LOG_FILE | sort | uniq -c | sort -rn | head -10
echo ""

echo "Top 10 requested URLs:"
awk '{print $7}' $LOG_FILE | sort | uniq -c | sort -rn | head -10
echo ""

echo "HTTP status codes:"
awk '{print $9}' $LOG_FILE | sort | uniq -c | sort -rn
```

**Service Health Check**
```bash
#!/bin/bash

SERVICES=("nginx" "docker" "ssh")

for service in "${SERVICES[@]}"; do
    if systemctl is-active --quiet $service; then
        echo "✓ $service is running"
    else
        echo "✗ $service is NOT running"
        # Attempt to restart
        systemctl restart $service
        if [ $? -eq 0 ]; then
            echo "  → $service restarted successfully"
        else
            echo "  → Failed to restart $service"
        fi
    fi
done
```

---

## 🐳 Containerization with Docker

### Day 12-20: Docker Complete Guide

#### What is Docker?

Docker is a platform for developing, shipping, and running applications in **containers**. Containers package an application with all its dependencies, ensuring consistency across environments.

#### Why Docker?

**Traditional Problems:**
- "It works on my machine" syndrome
- Environment inconsistencies
- Complex setup and dependencies
- Resource wastage with VMs

**Docker Solutions:**
- ✅ Consistent environments (Dev = Test = Prod)
- ✅ Isolated applications
- ✅ Lightweight (shares OS kernel)
- ✅ Fast startup times
- ✅ Easy scaling
- ✅ Version control for environments

#### Docker vs Virtual Machines

| Feature | Docker | Virtual Machine |
|---------|--------|-----------------|
| Startup Time | Seconds | Minutes |
| Size | MBs | GBs |
| Performance | Near-native | Overhead |
| Isolation | Process-level | Hardware-level |
| Resource Usage | Minimal | Higher |

#### Docker Architecture

```
┌─────────────────────────────────────┐
│         Docker Client               │
│       (docker commands)             │
└──────────────┬──────────────────────┘
               │
               │ Docker API
               ▼
┌─────────────────────────────────────┐
│       Docker Daemon (dockerd)       │
│  ┌─────────┐  ┌─────────┐          │
│  │ Images  │  │Containers│          │
│  └─────────┘  └─────────┘          │
│  ┌─────────┐  ┌─────────┐          │
│  │ Networks│  │ Volumes │          │
│  └─────────┘  └─────────┘          │
└─────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         Docker Registry             │
│         (Docker Hub)                │
└─────────────────────────────────────┘
```

**Key Components:**
1. **Docker Client** - CLI interface
2. **Docker Daemon** - Background service
3. **Docker Images** - Read-only templates
4. **Docker Containers** - Running instances
5. **Docker Registry** - Image repository

#### Docker Installation

**Ubuntu/Debian**
```bash
# Update packages
sudo apt update

# Install dependencies
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Verify installation
docker --version
docker run hello-world
```

**CentOS/RHEL**
```bash
# Install dependencies
sudo yum install -y yum-utils

# Add Docker repository
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Install Docker
sudo yum install docker-ce docker-ce-cli containerd.io

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker
```

**Post-Installation**
```bash
# Add user to docker group (avoid sudo)
sudo usermod -aG docker $USER

# Log out and log back in, then verify
docker run hello-world
```

#### Essential Docker Commands

**Container Management**
```bash
# Run container
docker run nginx                    # Run in foreground
docker run -d nginx                 # Run in detached mode
docker run -d --name webserver nginx # With custom name
docker run -d -p 8080:80 nginx     # Port mapping
docker run -d -e ENV_VAR=value nginx # Environment variable

# List containers
docker ps                           # Running containers
docker ps -a                        # All containers
docker ps -q                        # Only container IDs

# Container operations
docker start container_name         # Start stopped container
docker stop container_name          # Stop running container
docker restart container_name       # Restart container
docker pause container_name         # Pause container
docker unpause container_name       # Unpause container
docker kill container_name          # Force stop

# Remove containers
docker rm container_name            # Remove stopped container
docker rm -f container_name         # Force remove
docker rm $(docker ps -aq)          # Remove all stopped

# Container logs
docker logs container_name          # View logs
docker logs -f container_name       # Follow logs
docker logs --tail 50 container_name # Last 50 lines

# Execute commands in container
docker exec container_name ls       # Execute command
docker exec -it container_name bash # Interactive shell

# Container information
docker inspect container_name       # Detailed info (JSON)
docker stats                        # Resource usage
docker top container_name           # Running processes
```

**Image Management**
```bash
# Pull images
docker pull nginx                   # Latest tag
docker pull nginx:1.21              # Specific tag
docker pull ubuntu:20.04

# List images
docker images
docker images -a                    # Include intermediate

# Remove images
docker rmi image_name               # Remove image
docker rmi image_id
docker image prune                  # Remove unused images
docker image prune -a               # Remove all unused

# Image information
docker inspect image_name           # Detailed info
docker history image_name           # Image layers

# Search images
docker search nginx
```

**Build Images**
```bash
# Build from Dockerfile
docker build -t myapp:1.0 .

# Build with different Dockerfile
docker build -f Dockerfile.prod -t myapp:prod .

# Build with build arguments
docker build --build-arg VERSION=1.0 -t myapp .

# Build without cache
docker build --no-cache -t myapp .

# Tag image
docker tag myapp:1.0 myapp:latest
docker tag myapp:1.0 username/myapp:1.0

# Push to registry
docker login
docker push username/myapp:1.0
```

**Docker Volumes**
```bash
# Create volume
docker volume create myvolume

# List volumes
docker volume ls

# Inspect volume
docker volume inspect myvolume

# Remove volume
docker volume rm myvolume

# Remove unused volumes
docker volume prune

# Use volume with container
docker run -d -v myvolume:/data nginx

# Bind mount (host directory)
docker run -d -v /host/path:/container/path nginx

# Read-only mount
docker run -d -v /host/path:/container/path:ro nginx
```

**Docker Networks**
```bash
# List networks
docker network ls

# Create network
docker network create mynetwork

# Inspect network
docker network inspect mynetwork

# Remove network
docker network rm mynetwork

# Connect container to network
docker network connect mynetwork container_name

# Disconnect container
docker network disconnect mynetwork container_name

# Run container with network
docker run -d --network mynetwork nginx
```

#### Dockerfile - Building Images

**Dockerfile Syntax**
```dockerfile
# Base image
FROM ubuntu:20.04

# Metadata
LABEL maintainer="your-email@example.com"
LABEL version="1.0"
LABEL description="My application"

# Environment variables
ENV APP_HOME=/app
ENV PORT=8080

# Working directory
WORKDIR /app

# Copy files
COPY package.json .
COPY . .

# Add files (supports URLs and tar extraction)
ADD https://example.com/file.tar.gz /tmp/

# Run commands during build
RUN apt-get update && \
    apt-get install -y python3 && \
    apt-get clean

# Install dependencies
RUN pip install -r requirements.txt

# Expose port
EXPOSE 8080

# Set user
USER appuser

# Volume mount point
VOLUME ["/data"]

# Command to run (shell form)
CMD python3 app.py

# Command to run (exec form - preferred)
CMD ["python3", "app.py"]

# Entry point (cannot be overridden easily)
ENTRYPOINT ["python3"]
CMD ["app.py"]
```

**Best Practices for Dockerfile**

1. **Use Specific Base Images**
```dockerfile
# Bad
FROM ubuntu

# Good
FROM ubuntu:20.04
```

2. **Minimize Layers**
```dockerfile
# Bad - Multiple layers
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y pip

# Good - Single layer
RUN apt-get update && \
    apt-get install -y python3 pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

3. **Use .dockerignore**
```
node_modules
.git
.env
*.log
.DS_Store
```

4. **Multi-Stage Builds**
```dockerfile
# Build stage
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
```

#### Docker Compose

**What is Docker Compose?**
Tool for defining and running multi-container Docker applications using YAML files.

**docker-compose.yml Example**
```yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
    networks:
      - webnet
    depends_on:
      - db
    environment:
      - NGINX_HOST=example.com
      - NGINX_PORT=80

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - webnet
    ports:
      - "3306:3306"

  redis:
    image: redis:alpine
    networks:
      - webnet

networks:
  webnet:
    driver: bridge

volumes:
  db_data:
```

**Docker Compose Commands**
```bash
# Start services
docker-compose up                   # Foreground
docker-compose up -d                # Detached mode
docker-compose up --build           # Rebuild images

# Stop services
docker-compose stop                 # Stop containers
docker-compose down                 # Stop and remove
docker-compose down -v              # Remove volumes too

# View services
docker-compose ps                   # List services
docker-compose logs                 # View logs
docker-compose logs -f web          # Follow specific service

# Execute commands
docker-compose exec web bash        # Shell in service
docker-compose run web ls           # Run one-off command

# Scale services
docker-compose up -d --scale web=3  # Run 3 web instances

# Restart services
docker-compose restart              # Restart all
docker-compose restart web          # Restart specific
```

#### Real-World Docker Examples

**Example 1: Python Flask Application**
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0"]
```

**Example 2: Node.js Application**
```dockerfile
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "server.js"]
```

**Example 3: Java Spring Boot**
```dockerfile
FROM maven:3.8-openjdk-11 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

**Example 4: Full Stack Application**
```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    environment:
      - REACT_APP_API_URL=http://backend:5000

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379

  db:
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:alpine

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:
```

#### Docker Security Best Practices

1. **Use official images**
2. **Scan images for vulnerabilities**
   ```bash
   docker scan myimage:latest
   ```
3. **Run as non-root user**
   ```dockerfile
   RUN useradd -m appuser
   USER appuser
   ```
4. **Limit container resources**
   ```bash
   docker run -m 512m --cpus=1 myapp
   ```
5. **Use secrets for sensitive data**
6. **Keep images updated**
7. **Use read-only filesystem**
   ```bash
   docker run --read-only myapp
   ```

---

## ☸️ Container Orchestration with Kubernetes

### Day 21-32: Kubernetes Deep Dive

#### Kubernetes Overview

Already covered extensively in the previous Kubernetes tutorial. Here are additional topics specific to this DevOps course:

#### Kubernetes Installation Methods

**Minikube (Local)**
```bash
minikube start
minikube status
minikube dashboard
```

**Kind (Kubernetes in Docker)**
```bash
kind create cluster
kind get clusters
kind delete cluster
```

**kubeadm (Production)**
```bash
# Initialize master node
sudo kubeadm init --pod-network-cidr=10.244.0.0/16

# Join worker nodes
sudo kubeadm join <master-ip>:6443 --token <token> --discovery-token-ca-cert-hash <hash>
```

#### Helm - Kubernetes Package Manager

**Installation**
```bash
# Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify
helm version
```

**Helm Commands**
```bash
# Add repository
helm repo add stable https://charts.helm.sh/stable
helm repo add bitnami https://charts.bitnami.com/bitnami

# Search charts
helm search repo mysql

# Install chart
helm install mydb bitnami/mysql

# List releases
helm list

# Upgrade release
helm upgrade mydb bitnami/mysql

# Rollback
helm rollback mydb 1

# Uninstall
helm uninstall mydb

# Create chart
helm create mychart

# Package chart
helm package mychart

# Install from local
helm install myapp ./mychart
```

**Helm Chart Structure**
```
mychart/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default values
├── templates/          # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── charts/             # Dependencies
```

---

## 🔧 Configuration Management - Ansible

### Day 33-36: Ansible Automation

#### What is Ansible?

Ansible is an **agentless** configuration management and automation tool that uses SSH to manage servers.

**Key Features:**
- ✅ Agentless (no agent installation needed)
- ✅ Uses SSH for communication
- ✅ YAML-based playbooks (easy to read)
- ✅ Idempotent (safe to run multiple times)
- ✅ Large module library

#### Ansible Installation

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install ansible

# CentOS/RHEL
sudo yum install epel-release
sudo yum install ansible

# Using pip
pip install ansible

# Verify
ansible --version
```

#### Ansible Inventory

**Static Inventory (/etc/ansible/hosts)**
```ini
[webservers]
web1.example.com
web2.example.com
192.168.1.10

[databases]
db1.example.com ansible_user=admin
db2.example.com ansible_port=2222

[all:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/id_rsa
```

**YAML Inventory**
```yaml
all:
  children:
    webservers:
      hosts:
        web1.example.com:
        web2.example.com:
    databases:
      hosts:
        db1.example.com:
          ansible_user: admin
```

#### Ad-Hoc Commands

```bash
# Ping all hosts
ansible all -m ping

# Run command
ansible webservers -a "uptime"

# Copy file
ansible webservers -m copy -a "src=/local/file dest=/remote/file"

# Install package
ansible webservers -m apt -a "name=nginx state=present" --become

# Restart service
ansible webservers -m service -a "name=nginx state=restarted" --become

# Gather facts
ansible webservers -m setup
```

#### Ansible Playbooks

**Basic Playbook**
```yaml
---
- name: Install and configure web server
  hosts: webservers
  become: yes
  
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes
    
    - name: Start nginx service
      service:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy website files
      copy:
        src: ./html/
        dest: /var/www/html/
    
    - name: Restart nginx
      service:
        name: nginx
        state: restarted
```

**Run Playbook**
```bash
ansible-playbook playbook.yml
ansible-playbook playbook.yml --check  # Dry run
ansible-playbook playbook.yml -v       # Verbose
ansible-playbook playbook.yml --limit webserver1  # Specific host
```

#### Ansible Variables

```yaml
---
- name: Using variables
  hosts: webservers
  vars:
    http_port: 80
    app_name: myapp
  
  tasks:
    - name: Display variables
      debug:
        msg: "App {{ app_name }} running on port {{ http_port }}"
    
    - name: Install package
      apt:
        name: "{{ item }}"
        state: present
      loop:
        - nginx
        - git
        - curl
```

**Variable Files**
```yaml
# vars/main.yml
http_port: 80
https_port: 443
server_name: example.com

# Use in playbook
---
- name: Configure web server
  hosts: webservers
  vars_files:
    - vars/main.yml
  tasks:
    # tasks here
```

#### Ansible Roles

**Create Role**
```bash
ansible-galaxy init webserver
```

**Role Structure**
```
webserver/
├── defaults/       # Default variables
├── files/          # Files to copy
├── handlers/       # Event handlers
├── meta/           # Role metadata
├── tasks/          # Main tasks
├── templates/      # Jinja2 templates
├── tests/          # Test files
└── vars/           # Variables
```

**Using Roles**
```yaml
---
- name: Setup web servers
  hosts: webservers
  roles:
    - webserver
    - database
    - monitoring
```

#### Ansible Templates (Jinja2)

**Template File (nginx.conf.j2)**
```jinja2
server {
    listen {{ http_port }};
    server_name {{ server_name }};
    
    root /var/www/{{ app_name }};
    
    location / {
        proxy_pass http://{{ backend_host }}:{{ backend_port }};
    }
}
```

**Use Template**
```yaml
- name: Deploy nginx config
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/sites-available/{{ app_name }}
  notify: restart nginx
```

---

## 🏗️ Infrastructure as Code - Terraform

### Day 37-42: Terraform Mastery

#### What is Terraform?

Terraform is an Infrastructure as Code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently.

**Key Features:**
- ✅ Multi-cloud support (AWS, Azure, GCP, etc.)
- ✅ Declarative configuration
- ✅ Execution plans
- ✅ Resource graph
- ✅ State management

#### Terraform Installation

```bash
# Ubuntu/Debian
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform

# MacOS
brew install terraform

# Verify
terraform version
```

#### Terraform Basics

**Main Configuration File (main.tf)**
```hcl
# Provider configuration
provider "aws" {
  region = "us-east-1"
}

# VPC Resource
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
  }
}

# Subnet Resource
resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
  
  tags = {
    Name = "public-subnet"
  }
}

# EC2 Instance
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  
  tags = {
    Name = "web-server"
  }
}
```

**Variables (variables.tf)**
```hcl
variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
}
```

**Outputs (outputs.tf)**
```hcl
output "instance_ip" {
  description = "Public IP of EC2 instance"
  value       = aws_instance.web.public_ip
}

output "vpc_id" {
  value = aws_vpc.main.id
}
```

**Terraform Commands**
```bash
# Initialize
terraform init

# Validate configuration
terraform validate

# Format code
terraform fmt

# Plan changes
terraform plan

# Apply changes
terraform apply
terraform apply -auto-approve

# Destroy infrastructure
terraform destroy

# Show current state
terraform show

# List resources
terraform state list

# Import existing resource
terraform import aws_instance.web i-1234567890abcdef0
```

#### Terraform State

**State Commands**
```bash
# View state
terraform state list
terraform state show aws_instance.web

# Move resource
terraform state mv aws_instance.old aws_instance.new

# Remove resource from state
terraform state rm aws_instance.web

# Pull remote state
terraform state pull

# Push local state
terraform state push
```

**Remote State (S3 Backend)**
```hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

#### Terraform Modules

**Module Structure**
```
modules/
└── vpc/
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    └── README.md
```

**Using Modules**
```hcl
module "vpc" {
  source = "./modules/vpc"
  
  cidr_block = "10.0.0.0/16"
  environment = "production"
}

module "web_server" {
  source = "terraform-aws-modules/ec2-instance/aws"
  version = "~> 3.0"
  
  name = "web-server"
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  vpc_id = module.vpc.vpc_id
}
```

---

## 🔄 CI/CD with Jenkins

### Day 43-48: Jenkins Complete Guide

#### What is Jenkins?

Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD).

**Key Features:**
- ✅ 1500+ plugins
- ✅ Distributed builds
- ✅ Pipeline as code
- ✅ Easy configuration
- ✅ Extensible architecture

#### Jenkins Installation

**Docker (Recommended)**
```bash
docker run -d -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  --name jenkins \
  jenkins/jenkins:lts
```

**Ubuntu/Debian**
```bash
# Add Jenkins repository
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Install Java
sudo apt update
sudo apt install openjdk-11-jdk

# Install Jenkins
sudo apt install jenkins

# Start Jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins

# Get initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

**Access Jenkins**
- URL: http://localhost:8080
- Enter initial admin password
- Install suggested plugins
- Create admin user

#### Jenkins Pipeline (Declarative)

**Basic Pipeline**
```groovy
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'mvn clean package'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh './deploy.sh'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
```

**Complete CI/CD Pipeline**
```groovy
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'myapp'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        KUBECONFIG = credentials('kubeconfig')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/user/repo.git',
                    credentialsId: 'github-credentials'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'mvn clean package'
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('Code Quality') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'mvn sonar:sonar'
                    }
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh """
                        kubectl set image deployment/myapp \
                        myapp=${DOCKER_IMAGE}:${DOCKER_TAG} \
                        --record
                        
                        kubectl rollout status deployment/myapp
                    """
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
    }
    
    post {
        success {
            emailext(
                subject: "Pipeline Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build succeeded!",
                to: 'team@example.com'
            )
        }
        failure {
            emailext(
                subject: "Pipeline Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build failed. Please check logs.",
                to: 'team@example.com'
            )
        }
    }
}
```

**Jenkinsfile - Node.js Application**
```groovy
pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
    }
}
```

#### Jenkins Shared Libraries

**Library Structure**
```
jenkins-shared-library/
├── vars/
│   ├── buildDockerImage.groovy
│   ├── deployToK8s.groovy
│   └── sendNotification.groovy
└── src/
    └── org/
        └── company/
            └── Utils.groovy
```

**Using Shared Library**
```groovy
@Library('jenkins-shared-library') _

pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                buildDockerImage('myapp', env.BUILD_NUMBER)
            }
        }
        
        stage('Deploy') {
            steps {
                deployToK8s('production', 'myapp', env.BUILD_NUMBER)
            }
        }
    }
    
    post {
        always {
            sendNotification(currentBuild.result)
        }
    }
}
```

#### Jenkins Configuration as Code (JCasC)

```yaml
jenkins:
  systemMessage: "Jenkins configured automatically by JCasC"
  numExecutors: 5
  mode: NORMAL
  
  securityRealm:
    local:
      allowsSignup: false
      users:
        - id: "admin"
          password: "${ADMIN_PASSWORD}"
  
  authorizationStrategy:
    globalMatrix:
      permissions:
        - "Overall/Administer:admin"
        - "Overall/Read:authenticated"

credentials:
  system:
    domainCredentials:
      - credentials:
          - usernamePassword:
              scope: GLOBAL
              id: "github-credentials"
              username: "myuser"
              password: "${GITHUB_TOKEN}"

tool:
  git:
    installations:
      - name: "Default"
        home: "git"
  
  maven:
    installations:
      - name: "Maven 3.8"
        properties:
          - installSource:
              installers:
                - maven:
                    id: "3.8.6"
```

---

## 🔄 GitOps with ArgoCD

### Day 49-50: ArgoCD and GitOps

#### What is GitOps?

GitOps is a way of implementing Continuous Deployment where:
- Git is the single source of truth
- Infrastructure and application code in Git
- Automated deployment based on Git commits
- Easy rollback using Git history

#### ArgoCD Installation

```bash
# Create namespace
kubectl create namespace argocd

# Install ArgoCD
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Access ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Get admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Install ArgoCD CLI
curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
sudo install -m 555 argocd-linux-amd64 /usr/local/bin/argocd

# Login
argocd login localhost:8080
```

#### ArgoCD Application

**application.yaml**
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  
  source:
    repoURL: https://github.com/user/repo.git
    targetRevision: HEAD
    path: k8s
  
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
```

**Deploy Application**
```bash
kubectl apply -f application.yaml

# Or using CLI
argocd app create myapp \
  --repo https://github.com/user/repo.git \
  --path k8s \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace production
```

**ArgoCD Commands**
```bash
# List applications
argocd app list

# Get application details
argocd app get myapp

# Sync application
argocd app sync myapp

# Delete application
argocd app delete myapp

# View application logs
argocd app logs myapp

# Rollback
argocd app rollback myapp
```

---

## ☁️ Cloud Platforms (AWS/Azure/GCP)

### Day 51-54: Cloud Services

#### AWS Services for DevOps

**Compute**
- **EC2** - Virtual servers
- **ECS** - Container service
- **EKS** - Kubernetes service
- **Lambda** - Serverless functions
- **Elastic Beanstalk** - PaaS

**Storage**
- **S3** - Object storage
- **EBS** - Block storage
- **EFS** - File system

**Database**
- **RDS** - Relational database
- **DynamoDB** - NoSQL database
- **ElastiCache** - In-memory cache

**Networking**
- **VPC** - Virtual private cloud
- **Route 53** - DNS service
- **CloudFront** - CDN
- **ELB** - Load balancer

**DevOps Tools**
- **CodeCommit** - Git repository
- **CodeBuild** - Build service
- **CodeDeploy** - Deployment service
- **CodePipeline** - CI/CD pipeline
- **CloudFormation** - IaC

**Monitoring**
- **CloudWatch** - Monitoring
- **CloudTrail** - Audit logs
- **X-Ray** - Tracing

#### AWS CLI Essentials

```bash
# Configure AWS CLI
aws configure

# EC2 operations
aws ec2 describe-instances
aws ec2 start-instances --instance-ids i-1234567890abcdef0
aws ec2 stop-instances --instance-ids i-1234567890abcdef0

# S3 operations
aws s3 ls
aws s3 cp file.txt s3://bucket-name/
aws s3 sync ./local-dir s3://bucket-name/remote-dir

# ECS operations
aws ecs list-clusters
aws ecs list-services --cluster my-cluster
aws ecs update-service --cluster my-cluster --service my-service --force-new-deployment

# Lambda operations
aws lambda list-functions
aws lambda invoke --function-name my-function output.txt

# CloudFormation
aws cloudformation create-stack --stack-name my-stack --template-body file://template.yaml
aws cloudformation describe-stacks --stack-name my-stack
```

#### Azure Services for DevOps

**Compute**
- **Virtual Machines**
- **Azure Kubernetes Service (AKS)**
- **Azure Container Instances**
- **Azure Functions**

**DevOps**
- **Azure DevOps** - Complete DevOps platform
- **Azure Repos** - Git repositories
- **Azure Pipelines** - CI/CD
- **Azure Artifacts** - Package management

**Azure CLI**
```bash
# Login
az login

# Resource groups
az group create --name myResourceGroup --location eastus

# Virtual machines
az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS

# AKS
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 3
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

#### GCP Services for DevOps

**Compute**
- **Compute Engine** - VMs
- **Google Kubernetes Engine (GKE)**
- **Cloud Run** - Serverless containers
- **Cloud Functions**

**DevOps**
- **Cloud Build** - CI/CD
- **Cloud Source Repositories**
- **Artifact Registry**

**gcloud CLI**
```bash
# Initialize
gcloud init

# Compute Engine
gcloud compute instances list
gcloud compute instances create my-instance --zone=us-central1-a

# GKE
gcloud container clusters create my-cluster --num-nodes=3
gcloud container clusters get-credentials my-cluster
```

---

## 📊 Monitoring & Logging

### Day 55: Prometheus and Grafana

#### Prometheus

**What is Prometheus?**
- Open-source monitoring system
- Time-series database
- Pull-based metrics collection
- PromQL query language
- Alerting capability

**Prometheus Installation (Kubernetes)**
```bash
# Using Helm
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus

# Port forward
kubectl port-forward svc/prometheus-server 9090:80
```

**Prometheus Configuration (prometheus.yml)**
```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']
  
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
```

**PromQL Queries**
```promql
# CPU usage
100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100

# HTTP request rate
rate(http_requests_total[5m])

# Error rate
rate(http_requests_total{status=~"5.."}[5m])
```

#### Grafana

**Grafana Installation**
```bash
# Using Helm
helm repo add grafana https://grafana.github.io/helm-charts
helm install grafana grafana/grafana

# Get admin password
kubectl get secret grafana -o jsonpath="{.data.admin-password}" | base64 --decode

# Port forward
kubectl port-forward svc/grafana 3000:80
```

**Add Prometheus Data Source**
1. Configuration → Data Sources
2. Add Prometheus
3. URL: http://prometheus-server
4. Save & Test

**Popular Dashboards**
- Kubernetes Cluster Monitoring: 315
- Node Exporter Full: 1860
- Docker Container & Host Metrics: 179

### ELK Stack (Elasticsearch, Logstash, Kibana)

**ELK for Log Management**

**Docker Compose - ELK Stack**
```yaml
version: '3.8'

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.5.0
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  logstash:
    image: docker.elastic.co/logstash/logstash:8.5.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5044:5044"
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.5.0
    ports:
      - "5601:5601"
    environment:
      ELASTICSEARCH_URL: http://elasticsearch:9200
    depends_on:
      - elasticsearch

volumes:
  elasticsearch_data:
```

**Logstash Configuration**
```ruby
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
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
```

---

## 🐍 Python for DevOps

### Day 56: Python Automation

#### Why Python for DevOps?

- ✅ Easy to learn and read
- ✅ Rich library ecosystem
- ✅ Excellent for automation
- ✅ Cross-platform
- ✅ Strong community support

#### Essential Python Libraries

**System Administration**
```python
import os
import sys
import subprocess
import shutil

# Execute shell commands
result = subprocess.run(['ls', '-la'], capture_output=True, text=True)
print(result.stdout)

# File operations
shutil.copy('source.txt', 'destination.txt')
os.remove('file.txt')

# Environment variables
api_key = os.environ.get('API_KEY')
```

**AWS Automation (Boto3)**
```python
import boto3

# EC2 operations
ec2 = boto3.client('ec2')

# List instances
response = ec2.describe_instances()
for reservation in response['Reservations']:
    for instance in reservation['Instances']:
        print(f"Instance ID: {instance['InstanceId']}")
        print(f"State: {instance['State']['Name']}")

# Start instance
ec2.start_instances(InstanceIds=['i-1234567890abcdef0'])

# S3 operations
s3 = boto3.client('s3')

# Upload file
s3.upload_file('local-file.txt', 'my-bucket', 'remote-file.txt')

# List buckets
response = s3.list_buckets()
for bucket in response['Buckets']:
    print(bucket['Name'])
```

**Docker Automation**
```python
import docker

client = docker.from_env()

# List containers
for container in client.containers.list():
    print(f"Container: {container.name}")
    print(f"Status: {container.status}")

# Run container
container = client.containers.run(
    'nginx',
    detach=True,
    ports={'80/tcp': 8080}
)

# Stop container
container.stop()

# Remove container
container.remove()
```

**Kubernetes Automation**
```python
from kubernetes import client, config

# Load kubeconfig
config.load_kube_config()

# Create API client
v1 = client.CoreV1Api()

# List pods
pods = v1.list_pod_for_all_namespaces()
for pod in pods.items:
    print(f"Pod: {pod.metadata.name}")
    print(f"Namespace: {pod.metadata.namespace}")

# Create deployment
apps_v1 = client.AppsV1Api()

deployment = client.V1Deployment(
    metadata=client.V1ObjectMeta(name="nginx-deployment"),
    spec=client.V1DeploymentSpec(
        replicas=3,
        selector=client.V1LabelSelector(
            match_labels={"app": "nginx"}
        ),
        template=client.V1PodTemplateSpec(
            metadata=client.V1ObjectMeta(labels={"app": "nginx"}),
            spec=client.V1PodSpec(
                containers=[
                    client.V1Container(
                        name="nginx",
                        image="nginx:latest",
                        ports=[client.V1ContainerPort(container_port=80)]
                    )
                ]
            )
        )
    )
)

apps_v1.create_namespaced_deployment(namespace="default", body=deployment)
```

**API Requests**
```python
import requests

# GET request
response = requests.get('https://api.github.com/users/github')
data = response.json()
print(data['name'])

# POST request
payload = {'key': 'value'}
response = requests.post('https://api.example.com/data', json=payload)

# With authentication
headers = {'Authorization': 'Bearer token'}
response = requests.get('https://api.example.com/data', headers=headers)
```

**Automation Scripts**

**Instance Health Check**
```python
#!/usr/bin/env python3
import boto3
import smtplib
from email.mime.text import MIMEText

def check_instance_health():
    ec2 = boto3.client('ec2')
    response = ec2.describe_instances()
    
    unhealthy_instances = []
    
    for reservation in response['Reservations']:
        for instance in reservation['Instances']:
            instance_id = instance['InstanceId']
            state = instance['State']['Name']
            
            if state != 'running':
                unhealthy_instances.append(instance_id)
    
    if unhealthy_instances:
        send_alert(unhealthy_instances)
    
    return unhealthy_instances

def send_alert(instances):
    msg = MIMEText(f"Unhealthy instances: {', '.join(instances)}")
    msg['Subject'] = 'AWS Instance Health Alert'
    msg['From'] = 'monitor@example.com'
    msg['To'] = 'admin@example.com'
    
    with smtplib.SMTP('localhost') as server:
        server.send_message(msg)

if __name__ == '__main__':
    check_instance_health()
```

---

## 🚀 Real-World Projects

### Project 1: Complete CI/CD Pipeline

**Architecture:**
```
GitHub → Jenkins → Docker Build → Push to Registry → Deploy to K8s → Monitor
```

**Implementation Steps:**
1. Application code in GitHub
2. Jenkins pipeline triggered on commit
3. Run tests and code quality checks
4. Build Docker image
5. Push to Docker Hub
6. Deploy to Kubernetes
7. Run integration tests
8. Send notifications

### Project 2: Microservices Deployment

**Stack:**
- Frontend: React (Nginx)
- Backend: Node.js API
- Database: PostgreSQL
- Cache: Redis
- Message Queue: RabbitMQ

**Kubernetes Manifests:**
- Deployments for each service
- Services for internal communication
- Ingress for external access
- ConfigMaps and Secrets
- Persistent Volumes

### Project 3: Infrastructure Automation

**Using Terraform:**
- Create VPC with public/private subnets
- Launch EC2 instances
- Set up RDS database
- Configure load balancer
- Set up auto-scaling
- Configure monitoring

### Project 4: Log Aggregation System

**Components:**
- Fluentd/Filebeat for log collection
- Elasticsearch for storage
- Kibana for visualization
- Alerting with ElastAlert

### Project 5: Monitoring Solution

**Setup:**
- Prometheus for metrics collection
- Grafana for dashboards
- AlertManager for alerts
- Node Exporter for host metrics
- Blackbox Exporter for endpoint monitoring

---

## 💼 Interview Preparation

### Common Interview Questions

**DevOps Basics**
1. What is DevOps and why is it important?
2. Explain the DevOps lifecycle
3. What is CI/CD?
4. Difference between Continuous Delivery and Continuous Deployment
5. What is Infrastructure as Code?

**Linux**
1. How to check disk usage?
2. What is the difference between soft and hard links?
3. How to find a process consuming high CPU?
4. Explain file permissions in Linux
5. What is a zombie process?

**Git**
1. Difference between git pull and git fetch
2. What is git rebase vs git merge?
3. How to resolve merge conflicts?
4. Explain git branching strategies
5. What is git stash?

**Docker**
1. Difference between Docker image and container
2. What is a Dockerfile?
3. Explain Docker networking modes
4. What is Docker Compose?
5. How to reduce Docker image size?

**Kubernetes**
1. What is a Pod?
2. Difference between Deployment and StatefulSet
3. What is a Service in Kubernetes?
4. Explain Ingress vs Service
5. What is a ConfigMap vs Secret?

**Jenkins**
1. What is a Jenkins Pipeline?
2. Declarative vs Scripted pipeline
3. How to pass parameters to a pipeline?
4. What is Jenkins shared library?
5. How to secure Jenkins?

**Terraform**
1. What is Terraform state?
2. Explain Terraform modules
3. What is terraform plan vs apply?
4. How to manage secrets in Terraform?
5. What is remote state?

**AWS**
1. What is VPC?
2. Difference between Security Group and NACL
3. What is the difference between EBS and S3?
4. Explain AWS IAM
5. What is Auto Scaling?

### Scenario-Based Questions

1. **Application is slow in production**
   - Check resource utilization
   - Review application logs
   - Check database queries
   - Analyze network latency
   - Review recent deployments

2. **Container keeps crashing**
   - Check container logs
   - Review resource limits
   - Verify image is correct
   - Check health checks
   - Review dependencies

3. **Deployment failed in Kubernetes**
   - Check pod status
   - Review events
   - Check resource availability
   - Verify configurations
   - Review image pull errors

---

## ✅ Best Practices

### General DevOps Best Practices

1. **Automation First**
   - Automate repetitive tasks
   - Use IaC for infrastructure
   - Automate testing and deployment

2. **Version Control Everything**
   - Code
   - Infrastructure
   - Configuration
   - Documentation

3. **Continuous Everything**
   - Continuous Integration
   - Continuous Delivery
   - Continuous Testing
   - Continuous Monitoring

4. **Security**
   - Shift security left
   - Scan dependencies
   - Use secrets management
   - Implement RBAC
   - Regular security audits

5. **Monitoring and Logging**
   - Comprehensive monitoring
   - Centralized logging
   - Set up alerts
   - Create dashboards
   - Regular reviews

6. **Documentation**
   - Keep README updated
   - Document architecture
   - Maintain runbooks
   - Write clear commit messages

7. **Collaboration**
   - Break down silos
   - Cross-functional teams
   - Code reviews
   - Knowledge sharing

### Docker Best Practices

1. Use official base images
2. Use specific tags, not latest
3. Minimize layers
4. Use .dockerignore
5. Run as non-root user
6. Multi-stage builds
7. Keep images small
8. Scan for vulnerabilities
9. One process per container
10. Use health checks

### Kubernetes Best Practices

1. Use namespaces for isolation
2. Set resource requests and limits
3. Use liveness and readiness probes
4. Don't use latest tag
5. Use ConfigMaps and Secrets
6. Implement RBAC
7. Use Network Policies
8. Regular backups
9. Monitor everything
10. Use Helm for complex apps

### CI/CD Best Practices

1. Build once, deploy many times
2. Automated testing at every stage
3. Fast feedback loops
4. Parallel execution where possible
5. Artifact versioning
6. Rollback capability
7. Environment parity
8. Secrets management
9. Notifications and alerts
10. Pipeline as code

---

## 🛠️ Tools Reference

### Essential DevOps Tools

**Version Control**
- Git, GitHub, GitLab, Bitbucket

**CI/CD**
- Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI

**Configuration Management**
- Ansible, Puppet, Chef, SaltStack

**Infrastructure as Code**
- Terraform, CloudFormation, Pulumi

**Containerization**
- Docker, Podman, containerd

**Orchestration**
- Kubernetes, Docker Swarm, Nomad

**Cloud Providers**
- AWS, Azure, GCP, DigitalOcean

**Monitoring**
- Prometheus, Grafana, Datadog, New Relic

**Logging**
- ELK Stack, Splunk, Fluentd, Loki

**Security**
- Vault, AWS Secrets Manager, SonarQube, Snyk

**GitOps**
- ArgoCD, Flux, Jenkins X

**Service Mesh**
- Istio, Linkerd, Consul

---

## 🎓 Career Guidance

### DevOps Learning Path

**Beginner (0-3 months)**
1. Learn Linux fundamentals
2. Master Git and version control
3. Basic shell scripting
4. Understand DevOps concepts
5. Learn Docker basics

**Intermediate (3-6 months)**
1. Deep dive into Docker
2. Learn Kubernetes
3. CI/CD with Jenkins
4. Infrastructure as Code (Terraform)
5. Configuration Management (Ansible)
6. One cloud platform (AWS/Azure/GCP)

**Advanced (6-12 months)**
1. Kubernetes deep dive (Helm, Operators)
2. GitOps (ArgoCD, Flux)
3. Service Mesh (Istio)
4. Advanced monitoring and observability
5. Security best practices
6. Multi-cloud strategies
7. Microservices architecture
8. Real-world project implementations

### DevOps Roles and Responsibilities

**Junior DevOps Engineer (0-2 years)**
- Basic CI/CD pipeline maintenance
- Docker container management
- Script automation
- Monitoring and alerting setup
- Documentation
- Support senior engineers

**DevOps Engineer (2-5 years)**
- Design and implement CI/CD pipelines
- Infrastructure automation
- Kubernetes cluster management
- Cloud infrastructure management
- Security implementation
- Performance optimization
- Incident response

**Senior DevOps Engineer (5+ years)**
- Architecture design
- Strategic planning
- Team leadership
- Complex problem solving
- Multi-cloud strategies
- Cost optimization
- Mentoring junior engineers

**DevOps Architect**
- Enterprise-wide DevOps strategy
- Tool selection and evaluation
- Standards and best practices
- Cross-team collaboration
- Innovation and research

### Certifications

**AWS Certifications**
- AWS Certified Solutions Architect - Associate
- AWS Certified DevOps Engineer - Professional
- AWS Certified SysOps Administrator

**Azure Certifications**
- Azure Administrator Associate
- Azure DevOps Engineer Expert
- Azure Solutions Architect Expert

**GCP Certifications**
- Google Cloud Associate Cloud Engineer
- Google Cloud Professional DevOps Engineer

**Kubernetes Certifications**
- CKA (Certified Kubernetes Administrator)
- CKAD (Certified Kubernetes Application Developer)
- CKS (Certified Kubernetes Security Specialist)

**Other Important Certifications**
- HashiCorp Certified: Terraform Associate
- Docker Certified Associate
- Jenkins Certified Engineer
- Red Hat Certified System Administrator (RHCSA)

### Salary Expectations

**India (Annual)**
- Junior DevOps Engineer: ₹4-8 LPA
- DevOps Engineer: ₹8-18 LPA
- Senior DevOps Engineer: ₹18-35 LPA
- DevOps Architect: ₹35-60 LPA

**USA (Annual)**
- Junior DevOps Engineer: $70k-$95k
- DevOps Engineer: $95k-$140k
- Senior DevOps Engineer: $140k-$180k
- DevOps Architect: $180k-$250k+

---

## 📚 Additional Resources

### Official Documentation
- [Linux Documentation](https://www.kernel.org/doc/)
- [Git Documentation](https://git-scm.com/doc)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [Terraform Documentation](https://www.terraform.io/docs)
- [Ansible Documentation](https://docs.ansible.com/)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [Azure Documentation](https://docs.microsoft.com/azure/)
- [GCP Documentation](https://cloud.google.com/docs)

### Practice Platforms
- **Katacoda** - Interactive learning scenarios
- **Play with Docker** - Docker playground
- **Play with Kubernetes** - K8s playground
- **AWS Free Tier** - Practice AWS services
- **Azure Free Account** - Practice Azure
- **GCP Free Tier** - Practice GCP
- **Killercoda** - Hands-on tutorials

### YouTube Channels
- TechWorld with Nana
- Abhishek Veeramalla
- DevOps Directive
- CloudBeesTV
- That DevOps Guy
- KodeKloud

### Books
- "The Phoenix Project" by Gene Kim
- "The DevOps Handbook" by Gene Kim
- "Site Reliability Engineering" by Google
- "Kubernetes Up & Running" by Kelsey Hightower
- "Docker Deep Dive" by Nigel Poulton
- "Terraform: Up & Running" by Yevgeniy Brikman

### Communities
- DevOps subreddit (r/devops)
- Kubernetes Slack
- CNCF Community
- AWS Community
- Azure Community
- DevOps Stack Exchange
- LinkedIn DevOps Groups

### Blogs and Websites
- medium.com/tag/devops
- dev.to/t/devops
- devops.com
- dzone.com/devops
- sre.google
- martinfowler.com

---

## 🎯 Day-by-Day Study Plan

### Week 1-2: Foundations
- **Day 1-2:** DevOps fundamentals, SDLC
- **Day 3-5:** Linux basics and commands
- **Day 6-8:** Advanced Linux, file permissions, networking
- **Day 9-11:** Git and GitHub
- **Day 12-14:** Shell scripting basics

### Week 3-4: Containerization
- **Day 15-17:** Docker fundamentals
- **Day 18-20:** Advanced Docker, multi-stage builds
- **Day 21-23:** Docker Compose
- **Day 24-26:** Docker networking and volumes
- **Day 27-28:** Docker security and best practices

### Week 5-7: Kubernetes
- **Day 29-31:** Kubernetes basics, architecture
- **Day 32-34:** Pods, Deployments, Services
- **Day 35-37:** ConfigMaps, Secrets, Volumes
- **Day 38-40:** Advanced K8s concepts
- **Day 41-42:** Helm package manager
- **Day 43-44:** K8s security and RBAC
- **Day 45-46:** K8s troubleshooting

### Week 8-9: CI/CD
- **Day 47-49:** Jenkins installation and basics
- **Day 50-52:** Jenkins pipelines
- **Day 53-54:** Advanced Jenkins concepts
- **Day 55-56:** GitHub Actions
- **Day 57-58:** GitLab CI/CD
- **Day 59-60:** ArgoCD and GitOps

### Week 10-11: IaC and Configuration Management
- **Day 61-63:** Terraform basics
- **Day 64-66:** Advanced Terraform
- **Day 67-68:** Terraform modules and state
- **Day 69-71:** Ansible basics
- **Day 72-74:** Ansible playbooks and roles

### Week 12-13: Cloud Platforms
- **Day 75-77:** AWS fundamentals
- **Day 78-80:** AWS services for DevOps
- **Day 81-82:** Azure basics
- **Day 83-84:** GCP basics
- **Day 85-86:** Multi-cloud strategies

### Week 14: Monitoring and Logging
- **Day 87-88:** Prometheus setup and queries
- **Day 89-90:** Grafana dashboards
- **Day 91-92:** ELK Stack setup
- **Day 93-94:** Application monitoring

### Week 15: Security and Best Practices
- **Day 95-96:** DevSecOps fundamentals
- **Day 97-98:** Security scanning tools
- **Day 99-100:** Best practices and optimization

### Week 16+: Projects and Interview Prep
- **Week 16-17:** Build real-world projects
- **Week 18:** Interview preparation
- **Week 19:** Mock interviews and practice
- **Week 20:** Final review and certification prep

---

## 🔑 Key Takeaways

### Must-Know Concepts

1. **DevOps is a Culture**
   - Not just tools
   - Collaboration between teams
   - Continuous improvement mindset

2. **Automation is Critical**
   - Automate repetitive tasks
   - Infrastructure as Code
   - CI/CD pipelines

3. **Containers Changed Everything**
   - Consistency across environments
   - Microservices architecture
   - Cloud-native applications

4. **Kubernetes is Industry Standard**
   - Container orchestration
   - Declarative configuration
   - Self-healing capabilities

5. **Cloud is the Future**
   - Scalability
   - Flexibility
   - Cost optimization

6. **Monitoring is Essential**
   - Know what's happening
   - Proactive problem detection
   - Data-driven decisions

7. **Security Cannot Be Afterthought**
   - Shift-left security
   - Compliance requirements
   - Zero-trust architecture

8. **Documentation Matters**
   - Knowledge sharing
   - Onboarding new team members
   - Disaster recovery

---

## 💡 Pro Tips for Success

### Learning Tips

1. **Practice Daily**
   - Hands-on experience is key
   - Build small projects
   - Break things and fix them

2. **Build a Home Lab**
   - Virtual machines
   - Kubernetes cluster
   - CI/CD pipeline
   - Monitoring setup

3. **Contribute to Open Source**
   - Learn from others
   - Build portfolio
   - Network with community

4. **Follow the 80/20 Rule**
   - Focus on most-used tools
   - Master fundamentals first
   - Depth before breadth

5. **Document Your Journey**
   - Blog about learnings
   - Create tutorials
   - Share on GitHub

6. **Join Communities**
   - Ask questions
   - Help others
   - Stay updated

7. **Stay Current**
   - Technology changes fast
   - Follow industry trends
   - Experiment with new tools

8. **Work on Real Projects**
   - Theory + Practice
   - Portfolio building
   - Interview preparation

### Interview Tips

1. **Know the Basics Cold**
   - Linux commands
   - Git operations
   - Docker fundamentals
   - K8s core concepts

2. **Prepare Scenarios**
   - Troubleshooting stories
   - Architecture decisions
   - Problem-solving examples

3. **Show Your Process**
   - Explain your thinking
   - Ask clarifying questions
   - Walk through solutions step-by-step

4. **Be Honest**
   - Admit what you don't know
   - Show willingness to learn
   - Discuss how you'd find answers

5. **Ask Good Questions**
   - About the team
   - About the tech stack
   - About challenges they face

---

## 🚀 Next Steps After This Course

### Immediate Actions

1. **Build Your Portfolio**
   - Create GitHub profile
   - Upload projects
   - Write good README files
   - Show your DevOps journey

2. **Get Hands-On**
   - Set up home lab
   - Deploy real applications
   - Break and fix things
   - Document learnings

3. **Network**
   - Join DevOps communities
   - Attend meetups
   - Connect on LinkedIn
   - Participate in forums

4. **Pursue Certifications**
   - Start with one cloud platform
   - Get Kubernetes certification
   - Consider Docker certification
   - Terraform associate

5. **Apply for Jobs**
   - Update resume
   - Highlight DevOps projects
   - Practice interviews
   - Start applying

### Long-Term Goals

1. **Continuous Learning**
   - Stay updated with new tools
   - Read DevOps blogs
   - Watch tech talks
   - Experiment constantly

2. **Specialization**
   - Choose focus area (Cloud, K8s, Security)
   - Deep dive into specialization
   - Become subject matter expert

3. **Leadership Skills**
   - Mentor others
   - Lead projects
   - Improve communication
   - Strategic thinking

4. **Contribute Back**
   - Open source contributions
   - Write articles/blogs
   - Create tutorials
   - Speak at conferences

---

## 📋 Quick Reference Cheat Sheet

### Essential Commands

```bash
# Docker
docker ps
docker images
docker run -d -p 8080:80 nginx
docker exec -it container bash
docker logs -f container

# Kubernetes
kubectl get pods
kubectl describe pod name
kubectl logs pod-name
kubectl apply -f file.yaml
kubectl delete -f file.yaml

# Git
git status
git add .
git commit -m "message"
git push origin main
git pull origin main

# Linux
ls -la
cd /path
cp source dest
mv old new
rm file
chmod 755 file

# AWS CLI
aws s3 ls
aws ec2 describe-instances
aws eks update-kubeconfig --name cluster

# Terraform
terraform init
terraform plan
terraform apply
terraform destroy
```

---

## 🎓 Course Completion Checklist

### Skills Mastered ✅

- [ ] Linux system administration
- [ ] Git and version control
- [ ] Shell scripting
- [ ] Docker containerization
- [ ] Kubernetes orchestration
- [ ] CI/CD with Jenkins
- [ ] Infrastructure as Code (Terraform)
- [ ] Configuration Management (Ansible)
- [ ] Cloud platforms (AWS/Azure/GCP)
- [ ] Monitoring and logging
- [ ] GitOps with ArgoCD
- [ ] Python for DevOps
- [ ] Security best practices
- [ ] Troubleshooting and debugging

### Projects Completed ✅

- [ ] Deployed application with Docker
- [ ] Created CI/CD pipeline
- [ ] Kubernetes cluster setup
- [ ] Infrastructure automation with Terraform
- [ ] Configuration management with Ansible
- [ ] Monitoring solution with Prometheus/Grafana
- [ ] Log aggregation with ELK
- [ ] Cloud deployment (AWS/Azure/GCP)
- [ ] GitOps workflow with ArgoCD
- [ ] Full-stack microservices application

### Ready for ✅

- [ ] DevOps Engineer interviews
- [ ] Real-world DevOps projects
- [ ] Cloud certifications
- [ ] Kubernetes certifications
- [ ] Contributing to open source
- [ ] Building professional portfolio
- [ ] Mentoring others

---

## 🌟 Final Words

Congratulations on completing the **DevOps Zero to Hero** course! You've covered an incredible amount of material across the entire DevOps ecosystem.

### Remember:

1. **DevOps is a Journey, Not a Destination**
   - Keep learning
   - Stay curious
   - Embrace change

2. **Practice Makes Perfect**
   - Build projects
   - Break things
   - Learn from failures

3. **Community Matters**
   - Help others
   - Ask questions
   - Share knowledge

4. **Stay Humble**
   - Technology evolves fast
   - Always be learning
   - No one knows everything

5. **You've Got This!**
   - You have the foundation
   - Trust the process
   - Keep pushing forward

---

## 📞 Connect and Learn More

### Abhishek Veeramalla (Instructor)

- **YouTube:** [Abhishek Veeramalla](https://www.youtube.com/@AbhishekVeeramalla)
- **GitHub:** [iam-veeramalla](https://github.com/iam-veeramalla)
- **LinkedIn:** Connect for updates and opportunities

### Course Resources

- **GitHub Repository:** All course materials, scripts, and projects
- **Discord Community:** Join to connect with fellow learners
- **Q&A Sessions:** Weekly doubt clearing sessions
- **Project Reviews:** Get feedback on your projects

---

## 🎯 Study Progress Tracker

### Week-by-Week Goals

**Week 1-2: Foundation** ⬜
- Linux fundamentals
- Git basics
- Shell scripting

**Week 3-4: Containers** ⬜
- Docker mastery
- Container networking
- Docker Compose

**Week 5-7: Kubernetes** ⬜
- K8s fundamentals
- Workload management
- Helm charts

**Week 8-9: CI/CD** ⬜
- Jenkins pipelines
- GitLab CI
- ArgoCD

**Week 10-11: IaC** ⬜
- Terraform
- Ansible
- CloudFormation

**Week 12-13: Cloud** ⬜
- AWS services
- Azure basics
- GCP fundamentals

**Week 14: Monitoring** ⬜
- Prometheus
- Grafana
- ELK Stack

**Week 15: Security** ⬜
- DevSecOps
- Best practices
- Compliance

**Week 16+: Projects** ⬜
- Real-world implementations
- Portfolio building
- Interview preparation

---

## 📊 Performance Metrics

Track your progress with these metrics:

### Technical Skills (1-10)
- Linux: ___/10
- Git: ___/10
- Docker: ___/10
- Kubernetes: ___/10
- Jenkins: ___/10
- Terraform: ___/10
- Ansible: ___/10
- AWS: ___/10
- Monitoring: ___/10
- Python: ___/10

### Projects Completed
- Total Projects: ___
- GitHub Repositories: ___
- Live Deployments: ___
- Blog Posts: ___

### Certifications
- Obtained: ___
- In Progress: ___
- Planned: ___

---

## 🏆 Achievement Badges

Earn these badges as you progress:

- 🐧 **Linux Master** - Master essential Linux commands
- 🔀 **Git Guru** - Understand version control deeply
- 📜 **Script Wizard** - Write powerful shell scripts
- 🐳 **Docker Captain** - Containerize any application
- ☸️ **Kubernetes Champion** - Deploy and manage K8s clusters
- 🔄 **CI/CD Expert** - Build complete pipelines
- 🏗️ **IaC Architect** - Automate infrastructure
- ☁️ **Cloud Native** - Deploy on cloud platforms
- 📊 **Monitoring Master** - Set up comprehensive monitoring
- 🔒 **Security Sentinel** - Implement security best practices
- 🎓 **Project Pro** - Complete 5+ real projects
- 🌟 **DevOps Hero** - Complete entire course!

---

## 📝 Notes Section

Use this space for your personal notes, insights, and learnings:

```
Personal Goals:
_________________________________________________
_________________________________________________
_________________________________________________

Key Insights:
_________________________________________________
_________________________________________________
_________________________________________________

Challenges Faced:
_________________________________________________
_________________________________________________
_________________________________________________

How I Overcame Them:
_________________________________________________
_________________________________________________
_________________________________________________

Next Steps:
_________________________________________________
_________________________________________________
_________________________________________________
```

---

## 🎉 Congratulations!

You now have a comprehensive guide covering all 58 videos of the **DevOps Zero to Hero** course by Abhishek Veeramalla. This study guide includes:

✅ **Complete course coverage** - All topics from 58 videos  
✅ **Detailed explanations** - Every concept explained thoroughly  
✅ **Practical commands** - Ready-to-use command references  
✅ **Code examples** - Real-world implementation samples  
✅ **Best practices** - Industry-standard approaches  
✅ **Projects** - Hands-on project ideas  
✅ **Interview prep** - Common questions and answers  
✅ **Career guidance** - Path to DevOps success  
✅ **Resources** - Links to documentation and communities  
✅ **Study plan** - Structured day-by-day learning  

### Save This Guide

This markdown file is your complete reference for:
- Daily studying
- Quick command lookup
- Interview preparation
- Project implementation
- Career planning

### Share Your Success

When you land your DevOps role:
- Share this guide with others
- Contribute to open source
- Mentor aspiring DevOps engineers
- Pay it forward to the community

---

**Version:** 1.0  
**Last Updated:** October 2025  
**Course:** DevOps Zero to Hero (58 Videos)  
**Instructor:** Abhishek Veeramalla  
**Total Pages:** 200+ pages of content  
**Study Time:** 45+ Days of focused learning  

**Remember:** The best way to learn DevOps is by DOING. Use this guide as your roadmap, but make sure to practice everything hands-on!

**Good luck on your DevOps journey! 🚀**

---

*"The only way to do great work is to love what you do." - Steve Jobs*

*"DevOps is not a goal, but a never-ending process of continual improvement." - Jez Humble*