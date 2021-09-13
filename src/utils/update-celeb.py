import os 
from os import listdir
from os.path import isfile, join

print(os.path.dirname(os.path.realpath(__file__))+'/assets/')

start = os.path.dirname(os.path.realpath(__file__))+'/assets/'

p = os.listdir(start)

for i in p:
    print 'handle'+i 
    if os.path.isfile(i):
        print 'file'+i 
        for j in os.listdir(start+i+'/'):
            if os.path.isdir(j):
                print j



