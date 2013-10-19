if test $1 = '--help'
then
clear
echo '1)замещение файлов (файлы из исходного каталога замещают файлы' 
echo 'резервного);'
echo '2)добавление файлов (если в резервном каталоге файла не существует, то он'
echo 'добавляется из исходного, прочие файлы не заменяются);'
echo '3)удаление файлов (если в резервном каталоге существует файл, которого нет в'
echo 'исходном, то он удаляется);'
echo '4)синхронизация файлов (сравниваются даты последней модификации двух файлов,'
echo 'более новый файл копируется в резервный каталог).'
read
clear
exit
fi

clear
echo 'Введите имя каталога для резервного копирования'
read sourceD
echo 'Введите имя резервного каталога'
read destD
if test -z $destD
then
	cd $sourceD
	cd ..
	mkdir backup
	cd backup
	destD=`pwd`
	echo $destD
	read
fi
if test ! -e $destD
then
	mkdir $destD
fi

clear
echo '1)замещение файлов'
echo '2)добавление файлов'
echo '3)удаление файлов'
echo '4)синхронизация файлов'
read swcase
clear

case $swcase in
	1)	cd $sourceD
		for d in `find * -type d`
		do
			if test ! -e $destD/$d
			then
				mkdir $destD/$d
			fi
			cp --remove-destination $sourceD/$d/* $destD/$d/ 
		done 
		cp --remove-destination $sourceD/* $destD/ ;;
	2)	cd $sourceD
		for d in `find * -type d`
		do
			if test ! -e $destD/$d
			then
				mkdir $destD/$d
			fi
			cd $sourceD/$d
			for f in *
			do
				if test ! -e $destD/$d/$f
				then
					cp $f $destD/$d/
					fi
			done 
		done
		for f in *
		do
			if test ! -e $destD/$f
			then
				cp $f $destD/
			fi
		done
		;;
	3)	cd $sourceD
		for d in `find * -type d`
		do
			if test -e $destD/$d
			then
			cd $destD/$d
			for f in *
			do
			if test ! -e "$sourceD/$d/$f"
			then
				rm $f
					fi
				done
			fi
		done
		cd $destD
		for f in *
		do
			if test ! -e "$sourceD/$f"
			then
				rm $f
			fi
		done
		;;
	4)	cd $sourceD
		for d in `find * -type d`
		do
		cd $sourceD/$d
		for f in *.*
		do
			if test -e $destD/$d
			then
				if test  $f -nt $destD/$d/$f
				then
					cp --remove-destination $f $destD/$d/
				fi
			fi
		done
		cd $sourceD/$d
		for f in *
		do
			if test -e $destD/$d
			then
				if test  $f -nt $destD/$d/$f  #newer than
				then
				cp --remove-destination $f $destD/$d/
				fi
			fi
		done
		done
		for f in *
		do
			if test $f -nt $destD/$f
			then
				cp --remove-destination $f $destD/
			fi
		done
		;;
esac

echo 'Завершено'
read
clear