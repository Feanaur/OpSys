echo "Enter the directory"
read dir
cd $dir
if [ -e $1 ]; then 
test -r $1 && echo "Readable" || echo "Not Readable"
test -w $1 && echo "Writeable" || echo "Not Writeable"
test -x $1 && echo "Executable" || echo "Not Executable"
else echo "Not exist"
fi