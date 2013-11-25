#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int main() 
{
	printf("\nPID: %i\nPPID: %i\n\n", getpid(), getppid());
	int fd, size;
	char resstring[14];
	if ((fd = open("FIFO", O_RDONLY)) < 0)
	{
		printf("ERROR: cannot open file\n");
		exit(-1);
	}
	size = read(fd, resstring, 14);
	if (size < 0)
	{
		printf("ERROR: cannot read string\n");
		exit(-1);
	}
	printf("%s\n", resstring);
	close(fd);
	return 0;
}
