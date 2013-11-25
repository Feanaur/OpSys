#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main()
{
  int pid=fork();
  if (pid==-1) 
  {
  	printf("ERROR!\n");
  	int i=-1;	
  	exit(i);
  }
  else 
  	if (pid==0)
  	{
  		float x=0;

  		do{
    		printf("Child: PID=%i PPID=%i x=%f,ctan=%f\n",getpid(),getppid(),x,1/tan(x));
    		x=x+0.1;
    	}while (x<=1);

  	}
  	else
  	{
  		float x=0;
  		do{
  		  printf("Parent: PID=%i PPID=%i x=%f,tan=%f\n",getpid(),getppid(),x,tan(x));
  		  x=x+0.1;
      }while (x<=1);
  		//printf("PID of parent=%i\n",getpid());
  		//printf("PPID of parent=%i\n",getppid());	
  	}

  return 0;
}
