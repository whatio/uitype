@echo off

echo ********************* 开始导出 *********************
uitype c --root %~dp0../../ --outFile %~dp0../../../../client/cocos_slg/assets/lib/uitype/index.d.ts
@REM uitype c --root %~dp0../../ --outFile %~dp0/output-uitype/index.d.ts
if %errorlevel% == 0 (goto exeEnd) else (goto errorExit)

:errorExit
echo ********************* 发生错误 *********************
pause>nul
exit

:exeEnd
echo ********************* 执行完成 *********************
pause>nul
exit