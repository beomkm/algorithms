#include <bits/stdc++.h>

const int SIZE = 28;

void drawCircle(int arr[SIZE][SIZE], int r, int x, int y);
void display(int arr[SIZE][SIZE]);

int main(void)
{	
	int arr[SIZE][SIZE] = {0,};
	
	drawCircle(arr, 11, 13, 13);
	display(arr);
	
	return 0; 
}


void drawCircle(int arr[SIZE][SIZE], int r, int cx, int cy)
{
	int x, y;
	double p;
	
	x = 0;
	y = r;
	p = 0 - r; 
	
	arr[y+cy][x+cx] = 1;
	arr[-y+cy][x+cx] = 1;
	arr[x+cy][y+cx] = 1;
	arr[x+cy][-y+cx] = 1;

	++x;
	while(x < y) {
		if(p < 0) {
			p += x+x + 1;
		}
		else {
			y -= 1;
			p += x+x + 1 -y-y;
			for(int i=0; i<x; i++) {
				arr[y+cy][i+cx] = 2;
				arr[-y+cy][i+cx] = 3;
				arr[y+cy][-i+cx] = 4;
				arr[-y+cy][-i+cx] = 5;
				arr[i+cy][y+cx] = 6;
				arr[-i+cy][y+cx] = 7;
				arr[i+cy][-y+cx] = 8;
				arr[-i+cy][-y+cx] = 9;
			}
		}
		arr[y+cy][x+cx] = 2;
		arr[-y+cy][x+cx] = 3;
		arr[y+cy][-x+cx] = 4;
		arr[-y+cy][-x+cx] = 5;
		arr[x+cy][y+cx] = 6;
		arr[-x+cy][y+cx] = 7;
		arr[x+cy][-y+cx] = 8;
		arr[-x+cy][-y+cx] = 9;
		
		++x; 
	}

	for(int i=cy-y+1; i<cy+y; i++) {
		for(int j=cx-y+1; j<cx+y; j++) {
			arr[i][j] = 10;
		}
	}
}


void display(int arr[SIZE][SIZE])
{	
	for(int i=0; i<SIZE; i++) {
		for(int j=0; j<SIZE; j++) {
			if(arr[i][j] == 1)
				printf("¡Ý");
			else if(arr[i][j] == 2)
				printf("¢Â");
			else if(arr[i][j] == 3)
				printf("¡ß");
			else if(arr[i][j] == 4)
				printf("¡á");
			else if(arr[i][j] == 5)
				printf("¢Ì");
			else if(arr[i][j] == 6)
				printf("¢Ã");
			else if(arr[i][j] == 7)
				printf("¢À");
			else if(arr[i][j] == 8)
				printf("¢Ë");
			else if(arr[i][j] == 9)
				printf("¡Ú");
			else if(arr[i][j] == 10)
				printf("¡à");
			else
				printf("¡¡");
		}
		printf("\n");
	}
}
