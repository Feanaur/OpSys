@echo off
if exist %1 (attrib +s %1
echo And now this is belong to the system
) else (echo This file is not exist)