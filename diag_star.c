/*
drawing diagonal lines k spaces apart
n is a size of the square
the diagonal lines are shaped like '/'
tibyte.kr
*/

#include <stdio.h>


int main(void)
{
	int n, k;
	int i, j;

	printf("n:");
	scanf("%d",&n);
	printf("k:");
	scanf("%d",&k);

	for(i=0; i<n; i++)
		printf("*");

	printf("\n");
	for(i=0; i<n-2; i++) {
		printf("*");
		for(j=0; j<n-2; j++) {
			if(j%k == k-1-(i+k-1)%k) printf("*");
			else printf(" ");
		}
		printf("*");
		printf("\n");
	}
			
	for(i=0; i<n; i++)
		printf("*");
	printf("\n");

	return 0;
}
