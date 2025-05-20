@echo off
echo Setting up PostgreSQL database...

REM Set PostgreSQL bin directory
set PGBIN="C:\Program Files\PostgreSQL\17\bin"

REM Check if PostgreSQL is installed
if not exist %PGBIN% (
    echo PostgreSQL is not installed or path is incorrect.
    echo Please install PostgreSQL 17.x from: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
    pause
    exit /b 1
)

REM Set password for psql
set PGPASSWORD=postgres

REM Create database
echo Creating database...
%PGBIN%\psql -U postgres -c "CREATE DATABASE coleb_db;"

REM Grant privileges
echo Granting privileges...
%PGBIN%\psql -U postgres -d coleb_db -c "GRANT ALL PRIVILEGES ON DATABASE coleb_db TO postgres;"

REM Clear password
set PGPASSWORD=

echo Database setup complete!
pause 