#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

#define N 3
#define FALSE 0

int a = 0, b = 0;
int turn[N];
int stage[N+1];

struct thread_info {
	pthread_t thread_id;
	int thread_num;
} threads[N];

void enter_region(int thread_num)		
{
	int i;
	for (i = 1; i < N; i++) 
	{
		int j;
		stage[thread_num] = i;
		turn[i] = thread_num;
		for (j = 1; j <= N; j++)
		{
			if (j == thread_num)
				continue;
			while (stage[j] >= i && turn[i] == thread_num);
		}
	}
}

void leave_region(int thread_num) 		
{
	stage[thread_num] = FALSE;
}

void *mythread(void *dummy)
{
	int i, id = 0;
	pthread_t mythid; 
	mythid = pthread_self();	
	for (i = 0; i < N; i++)
	{
		if (threads[i].thread_id == mythid)
			id = i;
	}
	enter_region(id);
	b = a;
	b = b + 1;
	for (i = 0; i < 100000000; i++)
		a = b;
	printf("Thread %lu id %d. Result = %d\n", mythid, id , a);
	leave_region(id);
	return NULL;
}

int main()
{
	int result, result2, tnum;
	for (tnum = 0; tnum < N; tnum++)
	{
		threads[tnum].thread_num = tnum;
	}
	result = pthread_create(&threads[1].thread_id, (pthread_attr_t *)NULL, mythread, NULL);
	if (result != 0)
	{
		printf("Error on thread create, return value=%d\n", result);
		exit(-1);
	}
	result2 = pthread_create(&threads[2].thread_id, (pthread_attr_t *)NULL, mythread, NULL);
	if (result2 != 0)
	{
		printf("Error on thread2 create, return value=%d\n", result2);
		exit(-1);
	}	
	
	enter_region(0);
	threads[0].thread_id = pthread_self();
	a += 1;
	printf("Thread %lu id 0 Calculation result = %d\n", threads[0].thread_id, a);
	leave_region(0);
	
	pthread_join(threads[1].thread_id, (void **)NULL);
	pthread_join(threads[2].thread_id, (void **)NULL);
	return 0;
}
