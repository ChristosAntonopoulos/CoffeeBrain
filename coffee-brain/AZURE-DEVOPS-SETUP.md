# Azure DevOps Setup Guide for Coffee Brain

This guide will help you set up Azure DevOps to automatically build and deploy your Coffee Brain website.

## 🚀 Quick Setup Steps

### 1. Connect GitHub to Azure DevOps

1. **Go to Azure DevOps**: Navigate to your Azure DevOps organization
2. **Create New Project**: Create a new project for Coffee Brain
3. **Import Repository**: 
   - Go to Repos → Import
   - Select "GitHub" as source
   - Connect your GitHub account
   - Select the `CoffeeBrain` repository
   - Import the repository

### 2. Create the Pipeline

1. **Go to Pipelines**: In your Azure DevOps project
2. **Create Pipeline**: Click "New Pipeline"
3. **Select Source**: Choose "Azure Repos Git" (since you imported from GitHub)
4. **Select Repository**: Choose your CoffeeBrain repository
5. **Configure Pipeline**: Select "Existing Azure Pipelines YAML file"
6. **Select File**: Choose `coffee-brain/azure-pipelines.yml`

### 3. Configure Service Connections

You'll need to set up these service connections in Azure DevOps:

#### Option A: Deploy to Azure Container Registry + AKS
1. **Azure Container Registry Connection**:
   - Go to Project Settings → Service Connections
   - Create new service connection
   - Choose "Azure Resource Manager"
   - Select your subscription and ACR

2. **Kubernetes Connection**:
   - Create new service connection
   - Choose "Kubernetes"
   - Select your AKS cluster

#### Option B: Deploy to Azure App Service
1. **Azure Subscription Connection**:
   - Go to Project Settings → Service Connections
   - Create new service connection
   - Choose "Azure Resource Manager"
   - Select your subscription

#### Option C: Deploy via SSH to Ubuntu Server
1. **SSH Connection**:
   - Go to Project Settings → Service Connections
   - Create new service connection
   - Choose "SSH"
   - Enter your server details

### 4. Update Pipeline Configuration

Edit the `azure-pipelines.yml` file and replace these placeholders:

```yaml
# Replace these with your actual values:
containerRegistry: 'your-acr-connection'  # Your ACR service connection name
kubernetesServiceConnection: 'your-k8s-connection'  # Your K8s service connection name
azureSubscription: 'your-azure-subscription'  # Your Azure subscription name
appName: 'your-app-service-name'  # Your App Service name
sshEndpoint: 'your-ssh-connection'  # Your SSH service connection name
```

### 5. Set Deployment Method

Add a variable to choose deployment method:

```yaml
variables:
  deployMethod: 'appservice'  # Options: 'kubernetes', 'ssh', 'appservice'
```

## 🔧 Deployment Options

### Option 1: Azure App Service (Recommended for beginners)
- Easiest to set up
- No container registry needed
- Direct deployment from build artifacts

### Option 2: Azure Container Registry + AKS
- More scalable
- Container-based deployment
- Better for production workloads

### Option 3: SSH to Ubuntu Server
- Deploy to your own server
- Full control over infrastructure
- Good for custom setups

## 📋 Prerequisites

### For Azure App Service:
- Azure subscription
- App Service plan
- App Service (Web App)

### For AKS:
- Azure subscription
- Azure Container Registry
- AKS cluster

### For SSH:
- Ubuntu server with Docker installed
- SSH access configured

## 🎯 Testing the Pipeline

1. **Make a small change** to your code
2. **Commit and push** to GitHub
3. **Check Azure DevOps**: The pipeline should automatically trigger
4. **Monitor the build**: Watch the pipeline run through all stages
5. **Verify deployment**: Check your deployed application

## 🔍 Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version and dependencies
2. **Docker build fails**: Verify Dockerfile path and registry connection
3. **Deployment fails**: Check service connections and permissions
4. **App not accessible**: Verify networking and firewall settings

### Useful Commands:

```bash
# Check pipeline status
az pipelines runs list --project "YourProjectName"

# View build logs
az pipelines runs show --id <run-id> --project "YourProjectName"

# Trigger manual build
az pipelines run --name "YourPipelineName" --project "YourProjectName"
```

## 📞 Support

If you encounter issues:
1. Check the Azure DevOps documentation
2. Review the pipeline logs for specific errors
3. Verify all service connections are properly configured
4. Ensure your Azure subscription has the necessary permissions

## 🎉 Success!

Once configured, every push to your main branch will automatically:
1. Build your React application
2. Create a Docker image (if using containers)
3. Deploy to your chosen platform
4. Make your changes live!

Your Coffee Brain website will be automatically updated with every code change! 🚀 