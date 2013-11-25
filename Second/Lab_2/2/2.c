#include <stdio.h>
#include <unistd.h>

int main() {
	printf("PID: %i\n", getpid());
	execl("1_modified", NULL, NULL);
	printf("ERROR");
	printf("\n\n");
	return 0;
}
