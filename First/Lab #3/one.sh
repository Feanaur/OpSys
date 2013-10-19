df > descf.txt
ls -h -s descf.txt
if test -r descf.txt
then
echo 'Файл доступен для чтения'
else
echo 'Файл не доступен для чтения'
fi
if test -w descf.txt
then
echo 'Файл доступен для записи'
else
echo 'Файл не доступен для записи'
fi
if test -x descf.txt
then
echo 'Файл доступен для исполнения'
else
echo 'Файл не доступен для исполнения'
fi


