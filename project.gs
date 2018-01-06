



function.inputsym.states.q0.(f::fs).df="#include<stdio.h> \n#include<stdbool.h> \n \n int func(char a,int state) \n {" ++  (foldr.f2."".df) ++" \n else return " ++ (show.q0) ++";" ++ "\n } \n  \n bool fsm(char s[10]) \n { \n int state=" ++(show.q0)++ "; \n for(int j=0;s[j]!=NULL ;j++) \n { \n state=func(s[j],state); \n } \n if(state=="++ (show.f)++ (foldr.f3."".fs)++ ") \n return 1; \n else return 0; \n } \n \n  int main() \n { \n char s[10]; \n scanf(\"%s\",&s); \n printf(\"%d\",fsm(s)); \n return 0; \n }"


f2.(ini,ch,next).code
	|(ch=='#') = code ++ "\n if ( state ==" ++ show.ini ++ ") return " ++ show.next++ ";"
	|otherwise = code ++ "\n if (a== '" ++ [ch] ++ "' && state ==" ++ show.ini ++ ") return " ++ show.next++ ";"

f3.x.code=code ++" || state == " ++ (show.x)



---------------------------------------------------------------

--type De=(Int,Char,Int)

--del: [De]-> String -> String

--f02.i.q.q0.(x::xs).df="#include<stdio.h> \n#include<stdbool.h> \n \n int func(char a,int state) \n {" ++  (del.df."") ++" \n else return " ++ (show.q0) ++";" ++ "\n } \n  \n bool fsm(char s[10]) \n { \n int state=" ++(show.q0)++ "; \n for(int j=0;s[j]!=NULL ;j++) \n { \n state=func(s[j],state); \n } \n if(state=="++ (show.x)++ (f31.xs."")++ ") \n return 1; \n else return 0; \n } \n \n  int main() \n { \n char s[10]; \n scanf(\"%s\",&s); \n printf(\"%d\",fsm(s)); \n return 0; \n }"

--del.[].cod=cod
--del.(x::xs).cod=del.xs.(f2.x.cod)

--f31.(x::xs).cod=f3.xs.(f3.x.cod)
--f31.[].cod=cod