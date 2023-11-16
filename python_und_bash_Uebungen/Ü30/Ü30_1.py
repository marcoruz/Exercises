def swap(ch):
	c = ord(ch)
	if (c >= 65) and (c <= 90):
    	    c += 32
    elif    c >= 97 and c <= 122:
    	        c -= 32
return   chr(c)


