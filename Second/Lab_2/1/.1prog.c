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
  		  printf("x=%f,ctan=%f\n",x,1/tan(x));
  		  x=x+0.1;
      }while (x<=0.5);

  		printf("child's pid=%i\n",getpid());
  		printf("child's ppid=%i\n",getppid());	
  		int i=0;	
  		exit(i);
  	}
  	else
  	{
  		float x=0;
  		do{
  		  printf("x=%f,tan=%f\n",x,tan(x));
  		  x=x+0.1;
      }while (x<=0.5);
  		printf("parent's pid=%i\n",getpid());
  		printf("parent's ppid=%i\n",getppid());	
  		int i=0;	
  		exit(i);
  	}

  return 0;
}
