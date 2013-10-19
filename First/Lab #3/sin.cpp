#include <cmath>

int main()
{
	float i = 0;
	for(i; i>=0; i += 0.001);sin(i);
	return 0;
}
//запускать в Shell это нужно с параметром компилятора -lm