
cd /home/`whoami`

echo 'Enter the username :'
read c

if grep "^$c" /etc/passwd > temp.txt 
then 
	echo "$c registered."
	who -u > temp2.txt 
	if grep "^$c" temp2.txt > temp.txt
	then 
		echo "$c working." 
	else 
		echo "$c not working." 
	fi 
	rm temp2.txt
else 
	echo "$c not registered"
fi

sed 's/\([^:]*\):[^:]*:\([^:]*\):[^:]*:[^:]*:\([^:]*\):.*/\2\t\1\t\3/' /etc/passwd > temp.txt 
sort -g temp.txt 

rm temp.txt
