//------------------------------------------------------------------------------------
// ���: one.js
// ����: JScript
// ��������: ������� 1
//------------------------------------------------------------------------------------

var hm;
var WshShell = WScript.CreateObject("WScript.Shell");

hm = WshShell.Popup("��������� �����������?",0,"?",36);
if(hm == 6)
{
	WshShell.LogEvent(0,"������������ ���������� ��������� �����������");
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

	hm = WshShell.Popup("��������� �������?",0,"?",36);
	if(hm == 6)
	{
		WshShell.LogEvent(0,"������������ ���������� ��������� �������");
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

		hm = WshShell.Popup("��������� ��������� ����?",0,"?",36);
		if(hm == 6)
		{
			WshShell.LogEvent(0,"������������ ���������� ��������� ��������� ����");
			WshShell.SendKeys("^s");
			WScript.Sleep(500);
			WshShell.SendKeys("one.txt");
			WScript.Sleep(1000);
			WshShell.SendKeys("~");
			WScript.Sleep(1000);
			WshShell.AppActivate(npad.ProcessID);
			WshShell.SendKeys("%{F4}");
			
		}
		
		else WshShell.LogEvent(0,"������������ �� ���������� ��������� ��������� ����");	
	}
	else WshShell.LogEvent(0,"������������ �� ���������� ��������� �������");	
}
else WshShell.LogEvent(0,"������������ �� ���������� ��������� �����������");