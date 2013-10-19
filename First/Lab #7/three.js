//------------------------------------------------------------------------------------
// »м€: three.js
// язык: JScript
// ќписание: «адание 3
//------------------------------------------------------------------------------------

var sh = WScript.CreateObject("WScript.Shell");

var pop;
pop = sh.Popup("—оздать на рабочем столе €рлык дл€ запуска сценари€ из задани€ 2?",0,"?",36);
if(pop == 6)
{
	var path1 = sh.CurrentDirectory + "\\two.js";
	var path2 = sh.SpecialFolders("Desktop") + "\\2a.lnk";
	var link;
	link = sh.CreateShortcut(path2);
	link.TargetPath = path1;
	link.Arguments = "/1";
	link.Save();
	var cjob = sh.Exec("cscript " + path2 + " > " + sh.SpecialFolders("Desktop") + "\\2a.txt");
	path2 = sh.SpecialFolders("Desktop") + "\\2b.lnk";
	link = sh.CreateShortcut(path2);
	link.TargetPath = path1;
	link.Arguments = "/2";
	link.Save();
}