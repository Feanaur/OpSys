function round(fold,SExt,file)
{
	DelFileInFolder(fold, SExt, file)
	var folders;
	folders = new Enumerator(fold.SubFolders);
	while(!folders.atEnd())
	{
		path = folders.item().Path;
		var fol;
		fol = fso.GetFolder(path);
		round(fol,SExt,file);
		folders.moveNext();
	}
}

function DelFileInFolder(Fold, SExt, RepFile)
{
	var Files, SPath, FileExt;
	Files = new Enumerator(Fold.Files);
	while(!Files.atEnd())
	{
		SPath = Files.item().Path;
		FileExt = fso.GetExtensionName(SPath).toUpperCase();
		if(FileExt == SExt)
		{
			var gg;
			gg = fso.DeleteFile(SPath);	
			RepFile.WriteLine(SPath+" OK");
		}
		Files.moveNext();
	}
}

var wsh, fso;
wsh = WScript.CreateObject("WScript.Shell");
fso = WScript.CreateObject("Scripting.FileSystemObject");
path = "D:\\rep2.txt";
if(fso.FileExists(path)) 
	file = fso.OpenTextFile(path, 8, true);
else 
	file = fso.CreateTextFile(path);
var arg;
arg = WScript.Arguments;
if (arg.Count() == 0) 
{
	WScript.Echo("Нет аргумента командной строки");
}
else {
var drive, ff;
drive = fso.GetDrive(arg(0));
ff = drive.RootFolder;
round(ff,"TMP",file);
}
file.Close();