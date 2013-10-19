var sh = WScript.CreateObject("WScript.Shell");
var arg;
var WshProcEnv=sh.Environment;
var stdout = WScript.StdOut;
arg = WScript.Arguments;
if (arg.Count() == 0) 
{
	sh.LogEvent(1,"Нет аргумента командной строки");
	WScript.Echo("Нет аргумента командной строки");
}
else
if(arg(0) == "/1")
{

WScript.StdOut.WriteLine("COMSPEC: " + WshProcEnv("COMSPEC"));
WScript.StdOut.WriteLine("HOMEDRIVE: " + WshProcEnv("HOMEDRIVE"));
WScript.StdOut.WriteLine("HOMEPATH: " + WshProcEnv("HOMEPATH"));
WScript.StdOut.WriteLine("NUMBER_OF_PROCESSORS: " + WshProcEnv("NUMBER_OF_PROCESSORS"));
WScript.StdOut.WriteLine("OS: " + WshProcEnv("OS"));
WScript.StdOut.WriteLine("PATH: " + WshProcEnv("PATH"));
WScript.StdOut.WriteLine("PATHEXT: " + WshProcEnv("PATHEXT"));
WScript.StdOut.WriteLine("PROCESSOR_ARCHITECTURE: " + WshProcEnv("PROCESSOR_ARCHITECTURE"));
WScript.StdOut.WriteLine("PROCESSOR_IDENTIFIER: " + WshProcEnv("PROCESSOR_IDENTIFIER"));
WScript.StdOut.WriteLine("PROCESSOR_LEVEL: " + WshProcEnv("PROCESSOR_LEVEL"));
WScript.StdOut.WriteLine("PROCESSOR_REVISION: " + WshProcEnv("PROCESSOR_REVISION"));
WScript.StdOut.WriteLine("PROMPT: " + WshProcEnv("PROMPT"));
WScript.StdOut.WriteLine("SYSTEMDRIVE: " + WshProcEnv("SYSTEMDRIVE"));
WScript.StdOut.WriteLine("SYSTEMROOT: " + WshProcEnv("SYSTEMROOT"));
WScript.StdOut.WriteLine("TEMP: " + WshProcEnv("TEMP"));
WScript.StdOut.WriteLine("TMP: " + WshProcEnv("TMP"));
WScript.StdOut.WriteLine("WINDIR: " + WshProcEnv("WINDIR"));
}
else
if(arg(0) == "/2")
{
	shfold = sh.SpecialFolders;
	WScript.Echo("Специальные папки:");
	for(var i = 0; i < shfold.Count(); i++)
	WScript.Echo(shfold(i));
}
else 
{
	sh.LogEvent(1,"Задан неверный аргумент командной строки");
	WScript.Echo("Задан неверный аргумент командной строки.");
}