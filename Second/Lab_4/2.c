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
	FILE* f = fopen("1.c","r");
	int fsk=fseek(f,0,SEEK_END);
	long ftl=ftell(f);
	fclose(f);
	printf("Amount of symbols=%li\n",ftl);

	if((key = ftok(pathname, 0) ) < 0){
		printf("ERROR: cannot generate key\n");
		exit(-1);
	}

	printf("IPC_key=%i\n",key);
	if(shmid=shmget(key, ftl * sizeof(char*), 0)<0)
	{
		printf("Empty!\n");
		return 0;
	}
	shmid = shmget(key, ftl * sizeof(char*), 0666|IPC_CREAT);
	if((sharedMemPtr = (char *)shmat(shmid, NULL, 0)) == (char *)(-1))
	{
		printf("ERROR: cannot attach shared memory\n");
		exit(-1);
	}

	printf("%s\n",(char*)sharedMemPtr); 

	if(shmdt(sharedMemPtr) < 0){
		printf("ERROR: cannot detach shared memory\n");
		exit(-1);
	}
	
	shmctl(shmid, IPC_RMID, NULL);

	return 0;
}

