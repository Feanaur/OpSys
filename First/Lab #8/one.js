//------------------------------------------------------------------------------------
// Имя: one.js
// Язык: JScript
// Описание: Задание 1
//------------------------------------------------------------------------------------

var hm;
var WshShell = WScript.CreateObject("WScript.Shell");

hm = WshShell.Popup("Запустить калькулятор?",0,"?",36);
if(hm == 6)
{
	WshShell.LogEvent(0,"Пользователь согласился запустить калькулятор");
	calc = WshShell.Exec("calc");
	WScript.Sleep(700);
	WshShell.AppActivate(calc.ProcessID);
	WshShell.SendKeys("3{+}");
	WScript.Sleep(700);
	WshShell.SendKeys("2");
	WScript.Sleep(700);
	WshShell.SendKeys("~");
	WScript.Sleep(1000);
	WshShell.SendKeys("^c");
	WshShell.AppActivate(calc.ProcessID);
	WshShell.SendKeys("%{F4}");

	hm = WshShell.Popup("Запустить блокнот?",0,"?",36);
	if(hm == 6)
	{
		WshShell.LogEvent(0,"Пользователь согласился запустить блокнот");
		npad = WshShell.Exec("notepad");
		WshShell.AppActivate(npad.ProcessID);
		WScript.Sleep(500);
		WshShell.SendKeys("Result of calculations~");	
		WScript.Sleep(500);
		WshShell.SendKeys("3{+}2=");
		WScript.Sleep(500);
		WshShell.SendKeys("^v~");
		WScript.Sleep(500);
		WshShell.SendKeys("End~");
		WScript.Sleep(1000);

		hm = WshShell.Popup("Сохранить текстовый файл?",0,"?",36);
		if(hm == 6)
		{
			WshShell.LogEvent(0,"Пользователь согласился сохранить текстовый файл");
			WshShell.SendKeys("^s");
			WScript.Sleep(500);
			WshShell.SendKeys("one.txt");
			WScript.Sleep(1000);
			WshShell.SendKeys("~");
			WScript.Sleep(1000);
			WshShell.AppActivate(npad.ProcessID);
			WshShell.SendKeys("%{F4}");
			
		}
		
		else WshShell.LogEvent(0,"Пользователь не согласился сохранить текстовый файл");	
	}
	else WshShell.LogEvent(0,"Пользователь не согласился запустить блокнот");	
}
else WshShell.LogEvent(0,"Пользователь не согласился запустить калькулятор");