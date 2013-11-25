#include <stdio.h>
int main(int argc,char *argv[],char *envp[])
{
  int i;
  printf("argc=%i\n",argc);

  for (i=0;i<argc;i++)
  	printf("argv[%i]=%s\n",i,argv[i]);

  i=0;

  while (envp[i]!=NULL)
  {
  	printf("envp[%i]=%s\n",i,envp[i]);
  	i++;
  }
  
  return 0;
}
