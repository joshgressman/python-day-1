Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 26 2016, 10:47:25) 
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> 2+2
4
>>> 2*2
4
>>> 2**3
8
>>> #evaluates to 2 to the power of 3 2*2*2
>>> # This is the Python Shell
>>> "612 387 6666"
'612 387 6666'
>>> #String /litteral not number
>>> "2" + "2"
'22'
>>> #will concatinate not add
>>> "2" * 3
'222'
>>> #multiples the string value * 3 NOT the number
>>> "2" + 2
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    "2" + 2
TypeError: Can't convert 'int' object to str implicitly
>>> x = 5
>>> # x is the variable that now has a value of 5... do not need a var x = 5
>>> x
5
>>> # return 5
>>> age = 31
>>> age
31
>>> #setting variables
>>> age + 'Years'
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    age + 'Years'
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> age " years"
SyntaxError: invalid syntax
>>> age * 365
11315
>>> age * 365 * 24 * 60 * 60
977616000
>>> #Seconds I have been a live
>>> age_string = str(age)
>>> age_string
'31'
>>> #Converte age number to age stting
>>> age_string + "Years Old"
'31Years Old'
>>> #now you can concatinate the age string
>>> str(age) + " years old"
'31 years old'
>>> #Do not need to assign a new variable just use str()
>>>
