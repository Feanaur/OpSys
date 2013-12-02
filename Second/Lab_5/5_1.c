#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
int a = 0;
int b = 0;

void *mythread(void *dummy)
{
	int i;	
	pthread_t mythid; 
	mythid = pthread_self();	
	b = a;
	b = b + 1;	
	for (i=0; i<10000000;i++)	
		a = b;
	printf("Thread id %lu. Result = %d\n", mythid, a);
	return NULL;
}
int main()
{
	pthread_t thid, mythid, thid2;
	int i, result, result2;
	mythid = pthread_self(); 
	b = a;
	b = b + 1;
	for (i = 0; i < 1000000; i++)
		a = b;
	printf("Thread id %lu. Result = %d\n", mythid, a);

	result = pthread_create(&thid, (pthread_attr_t *)NULL, mythread, NULL);
	if (result != 0)
	{
		printf("Error on thread create, return value=%d\n", result);
		exit(-1);
	}

	result2 = pthread_create(&thid2, (pthread_attr_t *)NULL, mythread, NULL);
	if (result != 0)
	{
		printf("Error on thread create, return value=%d\n", result);
		exit(-1);
	}	
	
	pthread_join(thid, (void **)NULL);
	pthread_join(thid2, (void **)NULL);
	return 0;
}
