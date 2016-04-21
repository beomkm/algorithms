import math

def fib(n):
	return (1/math.sqrt(5)*pow((1+math.sqrt(5))/2,n+1))

a = input()

print fib(a)
