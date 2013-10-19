@echo off
cls
:menu
echo 1) Display the hostname
echo 2) Display all network adapters
echo 3) Display all that DNS cache keeps
echo 4) Clear DNS cache
echo 5) Exit

set c=0
set /p c=""
if %c%==1 goto one
if %c%==2 goto two
if %c%==3 goto three
if %c%==4 goto four
if %c%==5 goto exit
goto menu

:one
hostname
goto menu


:two
ipconfig /all
goto menu


:three
ipconfig /displaydns
goto menu


:four
ipconfig /flushdns
goto menu


:exit
pause
cls
