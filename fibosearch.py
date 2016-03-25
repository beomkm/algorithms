fibos = [0,1,1,2,3,5,8,13,21,34,55,89] #len=12
arr = [6,11,13,18,20,22,27,29,30,34,38,41] #len=12

def fiboSearch(data, val):
	l1 = len(data)
	l2 = len(fibos)
	k = 0
	while k < l2:
		if(fibos[k+1] == l1+1):
			break
		k += 1

	if k == l2:
		print("invalid length")
		return -1;

	i = fibos[k]
	p = fibos[k-1] 
	q = fibos[k-3]


	while i>0 or i<=l1:
		if val < data[i-1]:
			if q == 0:
				return -1
			i = i-q
			p = q
			q = p-q
		elif val > data[i-1]:
			if p == 1:
				return -1
			i = i+q
			p = p-q
			q = q-p
		else:
			return i-1
		
	return -1


print(fiboSearch(arr, 22))
