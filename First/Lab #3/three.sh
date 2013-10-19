if test "$1" = "--help"
then
	echo $0 '-makes a mask of permissions for user, group or other users.'
	echo 'Permissions can set in that way: +-r +-w +-x. Example: +r+w+x .'
	read
	clear
	exit
fi

um=`umask`
pol=`echo $um | sed 's/[0-9]\([0-9]\)[0-9][0-9]/\1/'`
grup=`echo $um | sed 's/[0-9][0-9]\([0-9]\)[0-9]/\1/'`
ost=`echo $um | sed 's/[0-9][0-9][0-9]\([0-9]\)/\1/'`

echo 'Set permissions for:'
echo '1.User'
echo '2.Group'
echo '3.Others'
echo '4.Deafult'

read c
clear

if test "$c" != "1" && test "$c" != "2" && test "$c" != "3"&&test "$c" != "4" || test "$c" = ""
then
	echo 'Not exist'
	read
	clear
	exit
fi


case $c in
	1) t=$pol ;;
	2) t=$grup ;;
	3) t=$ost ;;
	4) umask 0022
		echo `umask -S`
		echo 'Permissions are default now'
		read
		exit;;
esac

x=$((t % 2)) 
w=$((((t >> 1) % 2) << 1)) 
r=$(((t >> 2) << 2)) 

echo 'Enter the rules (+-r +-w +-x) :'
read d

fr=`echo $d | sed 's/.*\([-+]r\).*/\1/'` 
fw=`echo $d | sed 's/.*\([-+]w\).*/\1/'` 
fx=`echo $d | sed 's/.*\([-+]x\).*/\1/'` 

case "$fr" in 
	"-r")r=4 ;;
	"+r")r=0 ;; 
esac 
case "$fw" in 
	"-w")w=2 ;; 
	"+w")w=0 ;; 
esac 
case "$fx" in
	"-x")x=1 ;; 
	"+x")x=0 ;; 
esac 
rwx=$((r+w+x))

case $c in
	1)umask $rwx$grup$ost ;;
	2)umask $pol$rwx$ost ;;
	3)umask $pol$grup$rwx ;;
	
esac

clear
echo `umask -S`
touch 1.txt
read
clear