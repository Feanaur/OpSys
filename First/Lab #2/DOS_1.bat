@echo off
set /p a="Input a "
set /p b="Input b "
if %a% LSS %b% (echo A less than B) else (if %a% GTR %b% (echo A greater than B) else (echo A equal to B))
pause