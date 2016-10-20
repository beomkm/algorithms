#include <iostream>
#include <string>
#include <algorithm>

int main()
{
	std::string marks = "0123456789ABCDEF";
	std::string str;
	int num, base;

	std::cin >> num >> base;
	
	for(;num>0;) {
		str += marks[num%base];
		num /= base;
	}
	
	std::reverse(str.begin(), str.end());
	
	std::cout << str << std::endl;
	
	return 0;
}
