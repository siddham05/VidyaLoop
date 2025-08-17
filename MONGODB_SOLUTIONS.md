# MongoDB Startup Issues - Solutions

## Issue Identified
MongoDB is failing to start due to **"out of memory"** errors. This is likely because:
1. MongoDB is trying to allocate too much memory
2. The system doesn't have enough available RAM
3. The WiredTiger cache settings are too aggressive

## Solution Options

### Option 1: Use MongoDB Atlas (Cloud Database) - RECOMMENDED
This is the fastest solution to get your project working:

1. Go to https://www.mongodb.com/atlas
2. Sign up for a free account (512MB free tier)
3. Create a cluster
4. Get the connection string
5. Update your `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vidyaloop?retryWrites=true&w=majority
```

### Option 2: Fix Local MongoDB Installation

#### Step 1: Clear MongoDB Data and Logs
```powershell
# Run as Administrator in PowerShell
Stop-Service -Name "MongoDB" -Force
Remove-Item "C:\Program Files\MongoDB\Server\7.0\data\*" -Recurse -Force
Remove-Item "C:\Program Files\MongoDB\Server\7.0\log\*" -Force
```

#### Step 2: Create Memory-Optimized Config
Replace the content of `C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg` with:

```yaml
storage:
  dbPath: C:\Program Files\MongoDB\Server\7.0\data
  engine: wiredTiger
  wiredTiger:
    engineConfig:
      cacheSizeGB: 0.5  # Limit cache to 512MB
systemLog:
  destination: file
  logAppend: true
  path: C:\Program Files\MongoDB\Server\7.0\log\mongod.log
net:
  port: 27017
  bindIp: 127.0.0.1
processManagement:
  windowsService:
    serviceName: MongoDB
    displayName: MongoDB
```

#### Step 3: Start the Service
```powershell
# Run as Administrator
net start MongoDB
```

### Option 3: Use Docker (If Docker is installed)
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Option 4: Portable MongoDB Setup
1. Download MongoDB Community Edition (ZIP version)
2. Extract to a folder like `C:\mongodb-portable`
3. Create data folder: `C:\mongodb-portable\data`
4. Run from command line:
```bash
C:\mongodb-portable\bin\mongod.exe --dbpath C:\mongodb-portable\data --port 27017
```

## Immediate Next Step

**I recommend Option 1 (MongoDB Atlas)** as it's:
- ✅ Fastest to set up (5 minutes)
- ✅ No local installation issues
- ✅ Always available
- ✅ Free tier sufficient for development
- ✅ No memory management issues

Would you like me to help you set up MongoDB Atlas, or would you prefer to try fixing the local installation?
