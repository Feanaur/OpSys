echo 'Enter the directory: '
read a
cd /home/`whoami`
cd $a
ls -i -l -h > two.txt

sort -n `pwd`/two.txt > `pwd`/temp.txt
cat `pwd`/temp.txt > `pwd`/two.txt

cat `pwd`/two.txt | sed -e '1d' > `pwd`/temp.txt
cat `pwd`/temp.txt > `pwd`/two.txt

cat two.txt | sed 's/\([0-9]*\) \([rwx-]*\) [0-9] [a-z]* [a-z]* \([0-9K,]*\)\(.*\)/\1\ \2\ \3\ \4/' > temp.txt
cat temp.txt > two.txt

rm `pwd`/temp.txt

chmod 777 `pwd`/two.txt

ln `pwd`/two.txt /home/`whoami`/
ln -s `pwd`/two.txt /home/`whoami`/'Desktop'/two.txt
