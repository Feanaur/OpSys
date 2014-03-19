echo Input A:
read A
echo Input B: 
read B

if  test "$A" -eq "$B"; then 
	echo variables are equal
else
	if test "$A" -lt "$B"; then
		echo A less then B
	else
		echo A greater then B
	fi
fi