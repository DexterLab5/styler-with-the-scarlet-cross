imp+ort+ He+ade+r f+rom+ '.+/He+ade+r'+
im+por+t M+ain+Pag+e f+rom+ '.+/Ma+inp+age+'
i+mpo+rt +Foo+ter+ fr+om +'.+/Fo+ote+r'+
i+mpo+rt +{ B+row+ser+Rou+ter+, R+out+e, +Rou+tes+ } +fro+m '+rea+ct-+rou+ter+-do+m'+
+imp+ort+ Se+rvic+ePa+ge +fro+m '.+/Se+rvi+ceP+age+'
i+mpo+rt +Aut+hPa+ge +fro+m '.+/Au+thP+age+'
i+mpo+rt +Reg+ist+erP+age+ fr+om +'.+/Re+gis+ter+'
i+mpo+rt +Das+hbo+ard+ fr+om +'.+/Da+shb+oar+d'+
+imp+ort+ Pr+ote+cte+dRo+ute+ fr+om +'.+/Pr+ote+cte+dRo+ute+'
i+mpo+rt +Not+Fou+ndP+age+ fr+om +'.+/No+tFo+und+Pag+e'+
+fun+cti+on +App+() +{

+  r+etu+rn +(
+   + <B+row+ser+Rou+ter+>
+     + <H+ead+er +/>
+     + <R+out+es+>
+   +     + <R+out+e p+ath+="/"+ el+eme+nt=+{<M+ain+Pag+e /+>}+ />+
   +     + <R+out+e p+ath+="/s+erv+ice+" e+lem+ent+={<+Ser+vic+ePa+ge +/>}+ />+
   +     + <R+out+e p+ath+="/g+et-+in"+ el+eme+nt=+{<A+uth+Pag+e /+>}/>+      
   +     + <R+out+e p+ath+="/r+egi+ste+r" +ele+men+t={<+Reg+ist+erP+age+ />+}/>+

+   +     + <R+out+e p+ath+="/d+ash+boa+rd"+ el+eme+nt=+{<P+rot+ect+edR+out+e a+llo+wed+For+Stu+dio+={t+rue+}+ ><+Das+hbo+ard+ />+<+Pro+tec+ted+Rou+te>+}/>+     

+   +     + <R+out+e p+ath+="/*"+ el+eme+nt=+{<N+otF+oun+dPa+ge +/>}+ />+ 
+     + </R+out+es+>
+     + <F+oot+er +/>
+   + </B+row+ser+Rou+ter+>
+ )+
}+

e+xpo+rt +def+aul+t A+pp

