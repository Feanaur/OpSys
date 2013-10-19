echo "Введите А:"
read a
echo "Введите B:"
read b
if  [[ "$a" < "$b" ]]; then
 echo "A<B"
fi

if  [[ "$a" > "$b" ]]; then
 echo "A>B"
fi
if  [[ "$a" = "$b" ]]; then
 echo "A=B"
fi