
class stReader:
    #Constructor, nothing passed in
    #def __init__(self):
        
    #Method that reads input from prompt and stores in class variable st

    def getString(self):
        self.st = input("Input a string")
    #method to print what is in variable st to the prompt
    def printString(self):
        print(self.st)

#Instantiate st reader class
#testclass = stReader()
#Call st reader methods
#testclass.getString()
#testclass.printString()

import math

class Circle:

    def __init__(self, radius):
        self.radius = radius
        

    def computeArea(self):
        area = math.pi * math.pow(self.radius,2)
        print(area)



aCircle = Circle(2)

aCircle.computeArea()

class Person:
    def __init__(self,age):
        self.age = age
        self.gender = "unknown"

    def getGender(self):
        print(self.gender)

    def __str__(self):
        return("My age is %d and my gender is %s" % (self.age, self.gender))


class Male(Person):
    def __init__(self,age):
        Person.__init__(self, age)
        self.gender = "Male"
    

class Female(Person):
    def __init__(self,age):
        Person.__init__(self, age)
        self.gender = "Female"

pp = Person(5)
pm = Male(10)
pf = Female(20)


    

        
