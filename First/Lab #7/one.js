var sh = WScript.CreateObject("WScript.Shell");
var arg;
arg = WScript.Arguments;
if (arg.Count() == 0) 
{
	sh.LogEvent(1,"Нет аргумента командной строки");
	WScript.Echo("Нет аргумента командной строки");
}
else
if(arg(0) == "/?")
{
	WScript.Echo("Аргументы командной строки:");
	WScript.Echo("/1  - Сравнение двух чисел, введенных с клавиатуры");
	WScript.Echo("/2  - Выводит на экран путь к исполняемому файлу сервера сценариев, имя запущенного сценария и версию WSH");
	WScript.Echo("/? - Справка");
}
else
if(arg(0) == "/2")
{
	WScript.Echo("Путь к исполняемому файлу сервера сценариев:");
	WScript.Echo(WScript.FullName);
	WScript.Echo(" ");
	WScript.Echo("Имя запущенного сценария:");
	WScript.Echo(WScript.ScriptName);
	WScript.Echo(" ");
	WScript.Echo("Версия WSH:");
	WScript.Echo(WScript.Version);
}
else
if(arg(0) == "/1")
{
	var a = 0, b = 0;
	WScript.Echo("Введите первое число:");
	a = WScript.StdIn.ReadLine();
	WScript.Echo("Введите второе число:");
	b = WScript.StdIn.ReadLine();
	if (a > b) WScript.Echo(a,">",b);
	else if (a < b) WScript.Echo(a,"<",b);
	else WScript.Echo(a,"=",b);
}
else 
{
	sh.LogEvent(1,"Задан неверный аргумент командной строки");
	WScript.Echo("Задан неверный аргумент командной строки");
}