@ECHO OFF
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )

REM +++++++++++++++++++++++++++++++++++++++++++++++++++
REM +++++++++++++++++Testrun script++++++++++++++++++++
REM +++++++++++++++++++++++++++++++++++++++++++++++++++
REM Use this after compiling to move all files necesary
REM for the mod to load into the mods folder for wayward.
REM The mod folder is named wayward-tech-dev

REM This file contains the paths to files unnecesary for actualy running the mod.
SET exclude-file=%~dp0copy-exclude.txt

REM The following bit is to remove turn the source-directory var into an absolute path
CD "%~dp0.."
SET source-directory=%cd%

SET destination-directory="c:\Program Files (x86)\Steam\steamapps\common\Wayward\mods\wayward-tech-dev"

ECHO Continue when ready to copy.

PAUSE

ROBOCOPY "%source-directory%" %destination-directory% /s /mir /xo /xd "%source-directory%\node_modules" "%source-directory%\mod-reference" "%source-directory%\tools"

PAUSE

EXIT