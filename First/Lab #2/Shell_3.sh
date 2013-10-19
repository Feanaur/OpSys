echo "Enter the directory:"
read directory
cd $directory  # Забивать директорию нужно вместе с последним /
for f in *.txt
do
echo "$directory$f"
cat $f
done