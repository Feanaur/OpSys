#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main() {
	double arg = 0;
	int pid;
	pid = fork();
	if (pid == -1) 
	{
		printf("ERROR\n");
	} 
	else 
	{
		if (pid == 0) 
		{
			while (arg <=1) 
			{
				printf("PID: %i, PPID: %i,ctg: %f\n", getpid(), getppid(), 1/tan(arg));
				arg += 0.1;
				if (arg == 0.5)
					exit(0);
			}
			arg = 0;
		} else 
		{
			while(arg <= 1) 
			{
				printf ("PID: %i, PPID: %i,tg: %f\n", getpid(), getppid(), tan(arg));
				arg += 0.1;
				if (arg == 0.5)
					exit(0);
			}
			arg = 0;
		}
	}
}
