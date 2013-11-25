#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int main() 
{
	int fd, size;
	printf("\nPID: %i\nPPID: %i\n\n", getpid(), getppid());
	char name[] = "FIFO";
	char resstring[14];
	(void)umask(0);

	if (mknod(name, S_IFIFO|0666, 0) < 0)
	{
		printf("ERROR: cannot create FIFO file\n");
		exit(-1);
	}
	if ((fd = open(name, O_WRONLY)) < 0)
	{
		printf("ERROR: cannot open FIFO for writing\n");
		exit(-1);
	}
	size = write(fd,"Information\n", 14);
	if (size != 14)
	{
		printf("ERROR: cannot write all string\n");
		exit(-1);
	}
	close(fd);
	return 0;
}
