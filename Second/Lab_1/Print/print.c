#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
int main()
{
  printf("User's UID: %i\n",getuid());
  printf("User's GID: %i\n",getgid());
  printf("Process PID: %i\n",getpid());
  printf("Process PPID: %i\n",getppid());

  return 0;
}
