#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>
int main() {
	char *sharedMemPtr; 
	int shmid; 
	char pathname[] = "storage.txt"; 

	key_t key; 
	if((key = ftok(pathname, 0) ) < 0)
    {
		printf("ERROR: cannot generate key\n");
		exit(-1);
	}	

	FILE* f = fopen("1.c","r");
	int fsk=fseek(f,0,SEEK_END);
	long ftl=ftell(f);
	fseek(f,0,SEEK_SET);
	char* stringToWrite=(char*)malloc(ftl*sizeof(char));
	void* ptr=malloc(ftl*sizeof(void));
	fread(ptr,sizeof(char),ftl,f);

	if((shmid = shmget(key, ftl * sizeof(char*) , 0666|IPC_CREAT|IPC_EXCL)) < 0)
    {
		if(errno != EEXIST) 
    	{
			printf("ERROR: cannot create shared memory\n");
			exit(-1);
		} else 
   		{
			if((shmid = shmget(key, ftl * sizeof(char*), 0)) < 0)
      		{
				printf("ERROR: cannot find shared memory\n");
        		exit(-1);
			}
		}
	}

	sharedMemPtr = (char *)shmat(shmid, NULL, 0);

	if( sharedMemPtr == (char *)(-1)){
		printf("ERROR: cannot attach shared memory\n");
		exit(-1);
	}
	
	int i;

	for (i=0;i<ftl;i++)
    {
		sharedMemPtr[i]=((char*)ptr)[i];
	}

	if(shmdt(sharedMemPtr) < 0)
    {
		printf("ERROR: cannot detach shared memory\n");
		exit(-1);
	}
  
	fclose(f);
	return 0;
}
