# DFA-to-C-code-conversion
Tiny project to convert a given DFA tuple to C code using functional programming.

This is a tiny program written in gofer which takes a DFA tuple as an input and converts it to C code which takes the input string from terminal and returns a boolean value (1:True or 0:False)

The format of the tuple is:
### {[input symbols],[states],(initial state),[final states],[(initial_state,input_character,next_state)]}

Note: I have reduced the number of lines to 3 lines of effective code by using fold operations and the program also converts data to code.

### Example
Consider a problem statement which recognizes all strings ending with '.c' 
```
func.['.','c'].[1,2,3].1.[3].[(1,'#',1),(3,'#',1),(2,'.',2),(1,'.',2),(2,'c',3)]
```
Gofer terminal
```
? :l project.gs

Gofer session for:
/home/leena/gofer/pusimple.pre
project.gs
? func.['.','c'].[1,2,3].1.[3].[(1,'#',1),(3,'#',1),(2,'.',2),(1,'.',2),(2,'c',3)]
#include<stdio.h> 
#include<stdbool.h> 
 
 int func(char a,int state) 
 {
 if (a== 'c' && state ==2) return 3;
 if (a== '.' && state ==1) return 2;
 if (a== '.' && state ==2) return 2;
 if ( state ==3) return 1;
 if ( state ==1) return 1; 
 else return 1;
 } 
 
 bool fsm(char s[10]) 
 { 
 int state=1; 
 for(int j=0;s[j]!=NULL ;j++) 
 { 
 state=func(s[j],state); 
 } 
 if(state==3) 
 return 1; 
 else return 0; 
 } 
 
 int main() 
 { 
 char s[10]; 
 scanf("%s",&s); 
 printf("%d",fsm(s)); 
 return 0; 
 }
 
 ```
Note the use of #. It is used when there are too many input symbols. Also make sure that those transitions are mentioned first in case of foldr and last when fold is not used.

Save the code generated in a separate file and run it. Give an input string and check its acceptance.

Also, refer https://github.com/rusimody/gofer/ for setup and installation.
