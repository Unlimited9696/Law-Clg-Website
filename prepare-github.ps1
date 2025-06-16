# PowerShell script to prepare the repository for GitHub

# Navigate to the project root
cd ..

# Initialize Git repository (if not already initialized)
if (-not (Test-Path -Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Green
    git init
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
}

# Make sure .gitignore is properly set up
if (-not (Test-Path -Path ".gitignore")) {
    Write-Host "Creating .gitignore file..." -ForegroundColor Green
    Copy-Item -Path "client/.gitignore" -Destination ".gitignore"
}

# Add all files to Git
Write-Host "Adding files to Git..." -ForegroundColor Green
git add .

# Show status
Write-Host "Current Git status:" -ForegroundColor Cyan
git status

Write-Host "`nRepository is now ready for GitHub!" -ForegroundColor Green
Write-Host "To complete the process, run the following commands:" -ForegroundColor Yellow
Write-Host "1. git commit -m 'Initial commit'" -ForegroundColor White
Write-Host "2. git branch -M main" -ForegroundColor White
Write-Host "3. git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git" -ForegroundColor White
Write-Host "4. git push -u origin main" -ForegroundColor White
Write-Host "`nAfter uploading to GitHub, you can clone the repository to your Hostinger VPS and install dependencies there." -ForegroundColor Magenta 