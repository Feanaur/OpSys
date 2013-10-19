@echo off
set /p directory="Enter the directory: "
cd %directory%
for %%i in (*.txt) do (
echo %directory%%%i
type %%i
) 
echo.
pause