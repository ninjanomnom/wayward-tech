@echo OFF

SET exclude-file=%~dp0copy-exclude.txt
SET source-directory=%~dp0*
SET destination-directory="c:\Program Files (x86)\Steam\steamapps\common\Wayward\mods\wayward-tech-dev"

xcopy %source-directory% %destination-directory% /W /Y /I /S /EXCLUDE:%exclude-file%

pause