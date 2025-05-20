@echo off
echo Setting up backend environment...

REM Create .env file
echo Creating .env file...
(
echo # Database
echo DATABASE_URL="postgresql://postgres:postgres@localhost:5432/coleb_db"
echo.
echo # JWT
echo JWT_SECRET="coleb-secret-key-2024"
echo JWT_EXPIRES_IN="7d"
echo.
echo # Server
echo PORT=3000
echo.
echo # Email
echo SMTP_HOST="smtp.gmail.com"
echo SMTP_PORT=587
echo SMTP_USER="your-email@gmail.com"
echo SMTP_PASS="your-app-specific-password"
) > .env

REM Install dependencies
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies
    pause
    exit /b 1
)

REM Run Prisma migrations
echo Running database migrations...
call npx prisma migrate dev --name init
if errorlevel 1 (
    echo Failed to run migrations
    pause
    exit /b 1
)

echo Backend setup complete!
pause 