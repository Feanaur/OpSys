function RFillStr(l,s)
{
	var ss, i, ll;
	ll = l-s.length;
	if(s.length <= 1)
	{
		return(s);
	}
	else
	{
		ss = s;
		for(i = 1; i <= ll; i++) ss = " "+ss;
		return(ss);
	}
}

function LFillStr(l,s)
{
	var ss, i, ll;
	ll = l-s.length;
	if(s.length <= 1)
	{
		return(s);
	}
	else
	{
		ss = s;
		for(i = 1; i <= ll; i++) ss = ss+" ";
		return(ss);
	}
}

function FillStr(l,s)
{
	var ss,i,ll,s1,l2;
	ll = l-s.length;
	if(s.length <= 1)
	{
		return(s);
	}
	else
	{
		ss = s;
		l2 = Math.round((l-s.length)/2);
		ss = LFillStr(s.length+l2,s);
		ss = RFillStr(l,ss);
		return(ss);
	}
}

function WriteDriveInfo(drive, RepFile)
{
	if(drive.IsReady)
	{
		var s;
		Total = Math.round(drive.TotalSize/1048576);
		Free = Math.round(drive.FreeSpace/1048576);
		Used = Total - Free;
		DriveLetter = drive.DriveLetter+":";
		VolumeName = drive.VolumeName;
		RepFile.WriteLine("+---------------------------------------------------+");
		s = "|" + FillStr(51,"Диск "+DriveLetter)+"|";
		RepFile.WriteLine(s);
		RepFile.WriteLine("+---------------------------------------------------+");
		s = "|"+LFillStr(25,"Метка тома: "+VolumeName)+"|";
		s += LFillStr(25,"Общий объем, Mb: "+Total)+"|";
		RepFile.WriteLine(s);
		RepFile.WriteLine("+---------------------------------------------------+");
		s = "|"+LFillStr(25,"Используется, Mb: "+Used.toString())+"|";
		s += LFillStr(25,"Свободно, Mb: "+Free.toString())+"|";
		RepFile.WriteLine(s);
		RepFile.WriteLine("+---------------------------------------------------+");
	}
	else
	{
		if(drive.DriveType == 3)
			RepFile.WriteLine("Диск "+drive.DriveLetter+" является сетевым")
	}
}

var wsh, Drives, fso, file, path;
wsh = WScript.CreateObject("WScript.Shell");
fso = WScript.CreateObject("Scripting.FileSystemObject");
path = "Q:\\rep.txt";
if(fso.FileExists(path)) 
	file = fso.OpenTextFile(path, 8, true);
else 
	file = fso.CreateTextFile(path);
Drives = new Enumerator(fso.Drives);
for(; !Drives.atEnd(); Drives.moveNext())
	WriteDriveInfo(Drives.item(), file);
file.Close();