# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
"""
for letter in 'Python':     
   if letter == 'h':
      break
   print 'Current Letter :', letter

for letter in 'Python':     
   if letter == 'h':
      continue
   print 'Current Letter :', letter
   
for letter in 'Python': 
   if letter == 'h':
      pass #Some code will be added here in the future to deal with this situation
   print 'Current Letter :', letter   
   
def printUpperCase(string):
    "This funtions turns the input argument string into upper case and prints the result"
    stringUpperCase = string.upper()
    print stringUpperCase

printUpperCase("This is a test") #In this line we are calling the function previously defined

# Function definition is here
def changeme( mylist ):
   "This functions changes a passed list by appending a number to the end"
   mylist.append(5);
   print "Values of myList inside the function: ", myList
   return

# Now you can call changeme function
myList = [10,20,30];
changeme( myList );
print "Values outside the function: ", myList

total = 0; # This is global variable.
# Function definition is here
def sum( arg1, arg2 ):
   # Add both the parameters and return them."
   total = arg1 + arg2; # Here total is local variable.
   print "Inside the function local total : ", total
   return total;

# Now you can call sum function
returnedTotal = sum( 10, 20 );
print "Outside the function global total : ", total 
print "Value returned by function: ", returnedTotal 
"""

##practical1

p1Dict = {'Name': 'Richard','LastName': 'Horne', 'Age':10,  }

for item in p1Dict:
    if type(p1Dict[item]) == int:
        print item + ':' + str(p1Dict[item])
    else:
        print item + ':' + p1Dict[item]
        
        
##practical2
        
numbers = [0,1,2,3,4,5,6,7,8]
evenCount = 0
oddCount = 0
for num in numbers:
    if(num % 2):
        evenCount += 1
    else:
        oddCount += 1
        
print'Even count is %d odd count is %d' % (evenCount,oddCount )
        
