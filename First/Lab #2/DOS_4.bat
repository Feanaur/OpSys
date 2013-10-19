@echo off
if "%1"=="/?" goto help
echo Enter the source catalog:
set sourceD=0
set /p sourceD=""
echo Enter the destination folder:
set destD=0
set /p destD=""
if %destD%==0 (
mkdir %sourceD%_backup
set destD=%sourceD%_backup
)
if not exist %destD% (
mkdir %destD%
)
cls
echo 1.Replace files
echo 2.Add files
echo 3.Delete files
echo Exit - press any key
set c=0
set /p c=""
if %c%==1 goto one
if %c%==2 goto two
if %c%==3 goto three
goto exit

:one
copy %sourceD%\* %destD%
goto exit

:two
set d=%cd%
cd %sourceD%
for %%i in (*) do (
if not exist %destD%\%%~nxi (
copy %%i %destD%
)
)
cd %d%
goto exit

:three
set d=%cd%
cd %destD%
for %%i in (*) do (
if not exist %sourceD%\%%~nxi (
del %%i
)
)
cd %d%
goto exit

:help
echo This batch script creates a reserve copy of th choosen folder.
echo 1)Replace files - files from source folder replace files
echo                       in destination folder
echo 2)Add files - if file doesn`t exist in dest folder,
echo                       then it adds from source folde, other files 
echo                       remain the same
echo 3)Delete files   - if file already exists in destination folder ,
echo                       which doesn`t exist in source folder, then it will be deleted.
goto exit

:exit
echo Mission accomplished
pause
cls