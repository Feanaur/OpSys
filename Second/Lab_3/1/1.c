#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
#include <sys/wait.h>
#include <stdlib.h>

int main()
{
	int parent_fd[2],child_fd[2], result;
	size_t size;
	char resstring[14];
	if (pipe(parent_fd) < 0||pipe(child_fd) < 0)
	{
		printf("Cannot create the pipe.\n");
		exit(-1);
	}
	result = fork();
	if (result == -1) 
	{
		printf("ERROR: cannot fork the process.\n");
		exit(-1);
	}
	else
	{	if (result !=0)
		{
			size = write(child_fd[1], "\"Hello, Workd\" \n", 14);

			if (size != 14)
			{
				printf("Cannot write all strings\n");
				exit(-1);
			}
			printf("\nPID: %i  PPID: %i \n", getpid(), getppid());

			close(child_fd[1]);

			size = read(parent_fd[0], resstring, 14);

			if (size != 14)
			{
				printf("Can\'t write all string\n");
				exit(-1);
			}
			
			printf("%s\n", resstring);
			close(parent_fd[0]);
		}
		else
		{
			size = write(parent_fd[1], "\'Hello, World\' \n \n", 14);
			if (size < 0)
			{
				printf("Cannot read the string\n");
				exit(-1);
			}
			size = read(child_fd[0], resstring, 14);
			if (size < 0)
			{
				printf("Cannot read string\n");
				exit(-1);
			}
			printf("\nPID: %i  PPID: %i \n", getpid(), getppid());
			printf("%s\n", resstring);
			close(parent_fd[0]);
			close(child_fd[1]);

		}
	}
	printf("\n");
	return 0;
}

