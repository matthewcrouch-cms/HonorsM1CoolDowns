/* Unit 6 cool downs (answers from the CMS Unit 6 answer key). */
(function(){
const SIMP = "Equivalent, but not fully simplified";
const HINT = "Type exponents with the ^ key, like y^2. For a fraction, use /, like 3/n^2.";
const EQHINT = "Type your equation, like y = 3*2^x. Use ^ for exponents.";
const SWAP = "Swapped the starting amount and the growth factor";
const LIN = "Wrote a linear function instead of an exponential one";
const SMART = "Compared starting values, not growth factors";

(window.UNITS = window.UNITS || []).push({id:"u6", title:"Unit 6", cds:[

/* ---------- Lesson 1 ---------- */
{
  id:"u6l1", title:"Lesson 1: Powers", keyStatus:"final",
  intro:"Rewrite each expression using the fewest number of positive exponents.",
  items:[
    {id:"u6l1_1",label:"1",stem:"<i>y</i><sup>6</sup>(<i>y</i><sup>3</sup>)",type:"expr",vars:["y"],answer:"y^9",display:"y^9",ph:"Type your answer",unit:HINT,maxCaret:1,maxLetters:1,simpTag:SIMP,
      wrong:[{e:"y^18",d:"y^18",tag:"Multiplied the exponents instead of adding"},{e:"y^3",d:"y^3",tag:"Subtracted the exponents"}]},
    {id:"u6l1_2",label:"2",stem:"(4<i>rs</i><sup>7</sup>)<sup>3</sup>",type:"expr",vars:["r","s"],answer:"64*r^3*s^21",display:"64r^3s^21",ph:"Type your answer",unit:HINT,maxCaret:2,noParens:true,simpTag:SIMP,
      wrong:[{e:"12*r^3*s^21",d:"12r^3s^21",tag:"Multiplied the coefficient by 3 instead of cubing it"},
             {e:"4*r^3*s^21",d:"4r^3s^21",tag:"Didn’t cube the coefficient"},
             {e:"64*r*s^21",d:"64rs^21",tag:"Left the exponent off the r"},
             {e:"64*r^3*s^10",d:"64r^3s^10",tag:"Added the exponents instead of multiplying"}]},
    {id:"u6l1_3",label:"3",stem:"(10<i>n</i>)(<i>n</i><sup>3</sup>)<sup>−2</sup>",type:"expr",vars:["n"],answer:"10/n^5",display:"10/n^5",ph:"Type your answer",unit:HINT,maxCaret:1,maxLetters:1,simpTag:SIMP,noNegExp:true,negTag:"Left a negative exponent",
      wrong:[{e:"10*n^5",d:"10n^5",tag:"Dropped the negative sign on the exponent"},
             {e:"10*n^2",d:"10n^2",tag:"Added the exponents without multiplying (n³)⁻² first"},
             {e:"10/n^6",d:"10/n^6",tag:"Forgot to combine the n from 10n"}]},
    {id:"u6l1_r",label:"",stem:"<b>Reflection:</b> How are you feeling about the start of this new unit? What are you most excited about? What are you most nervous about?",type:"open",samples:["Excited to learn the rules, nervous about negatives.","A little nervous.","Excited!","Not sure yet."]}
  ]
},

/* ---------- Lesson 2 ---------- */
{
  id:"u6l2", title:"Lesson 2: Meow Island and Purr Island", keyStatus:"final",
  intro:"The tables show the cat population on two islands over several years. <br><b>Meow Island:</b> years 0, 1, 2, 3, 4 have 2, 6, 18, 54, 162 cats. <br><b>Purr Island:</b> years 0, 1, 2, 3, 4 have 2, 6, 10, 14, 18 cats.",
  items:[
    {id:"u6l2_1",label:"1",stem:"How is the cat population on <b>Meow Island</b> changing?",type:"mc",correct:"a",options:[
      {id:"a",t:"It is multiplied by 3 each year"},
      {id:"b",t:"It increases by 4 cats each year",tag:"Described adding for multiplicative growth"},
      {id:"c",t:"It is multiplied by 2 each year",tag:"Used the starting value as the factor"},
      {id:"d",t:"It increases by 3 cats each year",tag:"Read the factor as an amount added"}]},
    {id:"u6l2_2",label:"2",stem:"How is the cat population on <b>Purr Island</b> changing?",type:"mc",correct:"a",options:[
      {id:"a",t:"It increases by 4 cats each year"},
      {id:"b",t:"It is multiplied by 3 each year",tag:"Described multiplying for adding growth"},
      {id:"c",t:"It is multiplied by 2 each year",tag:"Used the starting value as the factor"},
      {id:"d",t:"It increases by 6 cats each year",tag:"Used the year 1 value as the amount added"}]},
    {id:"u6l2_x",label:"",stem:"Explain how you know, using numbers from the tables. (Optional, not scored)",type:"open",samples:["Meow goes 2, 6, 18, so you times by 3.","Purr goes up by 4 each time.","I looked at the pattern.","Meow grows way faster."]},
    {id:"u6l2_r",label:"",stem:"<b>Reflection:</b> Which activity was most helpful in your understanding today? Why?",type:"open",samples:["The tables, because I could see the pattern.","Working with my partner.","The warm up.","Not sure."]}
  ]
},

/* ---------- Lesson 3 ---------- */
{
  id:"u6l3", title:"Lesson 3: Mice in the Forest", keyStatus:"draft",
  keyNote:"The key only gives the answer to the second part (2,025 and 1/2). For the first part, I wrote the answer from the same pattern: 75 is the starting number and 3 is the growth factor. Confirm it before using these scores.",
  intro:"A group of biologists is surveying the mouse population in a forest. The equation <i>n</i> = 75 · 3<sup><i>t</i></sup> gives the total number of mice, <i>n</i>, <i>t</i> years since the survey began.",
  items:[
    {id:"u6l3_1",label:"1",stem:"What do the numbers 75 and 3 mean in this situation?",type:"mc",correct:"a",options:[
      {id:"a",t:"75 is the starting number of mice, and the population triples each year"},
      {id:"b",t:"75 is the number of years, and 3 is the number of mice",tag:"Mixed up the roles of the numbers"},
      {id:"c",t:"75 is the starting number of mice, and 3 mice are added each year",tag:"Read the growth factor as an amount added"},
      {id:"d",t:"3 is the starting number of mice, and 75 mice are added each year",tag:SWAP}]},
    {id:"u6l3_2",label:"2",stem:"Three years later, the biologists return for a second survey. The mice had a difficult year following a drought. The equation <i>m</i> = 2025(<sup>1</sup>⁄<sub>2</sub>)<sup><i>y</i></sup> gives the total number of mice, <i>m</i>, <i>y</i> years after the second survey. What do the numbers 2,025 and <sup>1</sup>⁄<sub>2</sub> mean in this situation?",type:"mc",correct:"a",options:[
      {id:"a",t:"2,025 is the number of mice at the second survey, and the population is cut in half each year"},
      {id:"b",t:"2,025 is the number of mice at the second survey, and half a mouse is lost each year",tag:"Read the decay factor as an amount subtracted"},
      {id:"c",t:"2,025 is the number of mice at the second survey, and the population grows by half each year",tag:"Read the decay factor as growth"},
      {id:"d",t:"<sup>1</sup>⁄<sub>2</sub> is the number of mice at the second survey, and 2,025 is the number lost each year",tag:SWAP}]},
    {id:"u6l3_r",label:"",stem:"<b>Reflection:</b> In your own words, how can you use your knowledge about multiplication to help master exponential growth?",type:"open",samples:["Repeated multiplication is the same as an exponent.","I think of times-ing by the same number again and again.","Not sure.","It helps me see the pattern."]}
  ]
},

/* ---------- Lesson 4 ---------- */
{
  id:"u6l4", title:"Lesson 4: Acetaminophen", keyStatus:"final",
  intro:"Acetaminophen is a common pain reliever and fever reducer. The graph shows the amount of acetaminophen, in milligrams, in an adult’s body at different times after they take a normal dose.",
  graph:{dots:[{x:0,y:1000,label:"(0, 1000)",dx:10,dy:-6},{x:1,y:750,label:"(1, 750)",dx:8,dy:-8},{x:2,y:562.5,label:"(2, 562.5)",dx:8,dy:-8},{x:3,y:421.875},{x:4,y:316.4},{x:5,y:237.3},{x:6,y:178},{x:7,y:133.5},{x:8,y:100.1}],xmin:0,xmax:8,xt:1,ymin:0,ymax:1250,yt:250,xlab:"time (hours)",ylab:"acetaminophen (mg)",alt:"Graph of acetaminophen in the body over 8 hours. It starts at 1,000 milligrams, falls to 750 after 1 hour and 562.5 after 2 hours, and keeps falling more slowly."},
  items:[
    {id:"u6l4_1a",label:"1a",groupStem:"1. Look at the vertical intercept.",stem:"What is the vertical intercept? Enter just the number.",type:"num",ph:"Number only",accepted:[1000],wrong:[{v:0,tag:"Gave the time (x-value) instead of the amount"},{v:750,tag:"Gave the value at 1 hour"}]},
    {id:"u6l4_1b",label:"1b",stem:"What does the vertical intercept mean in this situation?",type:"mc",correct:"a",options:[
      {id:"a",t:"There is 1,000 mg of acetaminophen in the body right after taking the medicine (the dose size)"},
      {id:"b",t:"The medicine is all gone after 1,000 hours",tag:"Read the intercept as a time"},
      {id:"c",t:"The body loses 1,000 mg of medicine each hour",tag:"Read the intercept as a rate"},
      {id:"d",t:"There is 1,000 mg of medicine left after 1 hour",tag:"Mixed up time 0 with time 1"}]},
    {id:"u6l4_2",label:"2",stem:"What fraction of the medicine remained after 1 hour? Enter a fraction or a decimal.",type:"num",ph:"Like 3/5 or 0.6",pctToFrac:true,accepted:[0.75],tol:0.001,wrong:[{v:0.25,tag:"Gave the fraction lost, not the fraction remaining"},{v:250,tag:"Gave the milligrams lost"},{v:750,tag:"Gave the milligrams remaining, not a fraction"},{v:1.3333,tag:"Inverted the fraction"}]},
    {id:"u6l4_3",label:"3",stem:"Write an equation that represents the amount of medicine, <i>a</i>, after <i>t</i> hours.",type:"expr",vars:["t"],answer:"1000*(3/4)^t",display:"a = 1000(3/4)^t",ph:"Type your equation",unit:EQHINT,
      wrong:[{e:"1000*(1/4)^t",d:"a = 1000(1/4)^t",tag:"Used the fraction lost as the decay factor"},
             {e:"1000*(4/3)^t",d:"a = 1000(4/3)^t",tag:"Inverted the decay factor"},
             {e:"750*(3/4)^t",d:"a = 750(3/4)^t",tag:"Used the value at 1 hour as the starting amount"},
             {e:"1000-250*t",d:"a = 1000 - 250t",tag:LIN},
             {e:"1000*(3/4)*t",d:"a = 1000(3/4)t",tag:LIN},
             {e:"(3/4)*1000^t",d:"a = (3/4)(1000)^t",tag:SWAP}]},
    {id:"u6l4_r1",label:"",stem:"<b>Reflection:</b> True or false: The use of science-related topics to help learn about exponential decay helped me with my understanding.",type:"mc",scored:false,row:true,options:[{id:"t",t:"True"},{id:"f",t:"False"}]},
    {id:"u6l4_r2",label:"",stem:"Explain your reasoning. (Optional)",type:"open",samples:["The medicine example made decay make sense.","I like real examples.","It didn’t really change anything.","Not sure."]}
  ]
},

/* ---------- Lesson 6 ---------- */
{
  id:"u6l6", title:"Lesson 6: Beaver Population", keyStatus:"final",
  intro:"The graph shows the population of beavers in a forest for different numbers of years after 1995. The beaver population is growing exponentially.",
  graph:{dots:[{x:0,y:50},{x:1,y:100,label:"(1, 100)",dx:8,dy:14},{x:2,y:200,label:"(2, 200)",dx:-6,dy:-10},{x:3,y:400},{x:4,y:800},{x:3.5,y:550,label:"Q",color:"var(--ink)",dx:8,dy:-6}],xmin:0,xmax:5,xt:1,ymin:0,ymax:1000,yt:200,xlab:"time in years",ylab:"number of beavers",alt:"Graph of beaver population over 5 years. Points at (1, 100), (2, 200), then about 400 at year 3 and 800 at year 4. A point labeled Q sits at 3.5 years, a little above 500."},
  items:[
    {id:"u6l6_1",label:"1",stem:"Why can we think of the beaver population as a function of time in years?",type:"mc",correct:"a",options:[
      {id:"a",t:"For any given year, there is one particular number of beavers"},
      {id:"b",t:"The population is growing exponentially",tag:"Cited the growth pattern instead of one output per input"},
      {id:"c",t:"The time in years depends on the number of beavers",tag:"Reversed input and output"},
      {id:"d",t:"The graph goes up from left to right",tag:"Pointed to the direction of the graph"}]},
    {id:"u6l6_2",label:"2",stem:"What is the meaning of the point labeled <i>Q</i> in this context?",type:"mc",correct:"a",options:[
      {id:"a",t:"3.5 years after 1995, the beaver population was about 550"},
      {id:"b",t:"In 1995, there were about 550 beavers",tag:"Misread the time"},
      {id:"c",t:"After 550 years, there were about 3.5 beavers",tag:"Swapped input and output"},
      {id:"d",t:"The population grows by 550 beavers every 3.5 years",tag:"Read the point as a rate"}]},
    {id:"u6l6_3",label:"3",stem:"Write an equation using function notation to represent this situation. Use <i>t</i> for years after 1995.",type:"expr",vars:["t"],answer:"50*2^t",display:"p(t) = 50*2^t",ph:"Type your equation",unit:EQHINT+" Name the function p.",
      wrong:[{e:"100*2^t",d:"p(t) = 100*2^t",tag:"Used the value at 1 year as the starting amount"},
             {e:"2*50^t",d:"p(t) = 2*50^t",tag:SWAP},
             {e:"50*t^2",d:"p(t) = 50*t^2",tag:"Swapped the base and the exponent"},
             {e:"50*t",d:"p(t) = 50t",tag:LIN},
             {e:"50+50*t",d:"p(t) = 50 + 50t",tag:LIN}]},
    {id:"u6l6_r1",label:"",stem:"<b>Reflection:</b> Today I struggled with…",type:"open",samples:["writing the equation","reading the graph","nothing","what Q means"]},
    {id:"u6l6_r2",label:"",stem:"…and I need ___ to be successful with this.",type:"open",samples:["more examples","to practice","a partner","time"]}
  ]
},

/* ---------- Lesson 7 ---------- */
{
  id:"u6l7", title:"Lesson 7: Two Graphs", keyStatus:"final",
  intro:"Here are two graphs. One is the function <i>f</i> given by <i>f</i>(<i>x</i>) = 10 · 2<sup><i>x</i></sup>. The other is the function <i>g</i> defined by <i>g</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup>. The graph of <i>g</i> passes through (0, 3), (1, 12) and (2, 48).",
  graph:{curves:[{fn:x=>10*Math.pow(2,x),color:"var(--blue-ink)",label:"f",lx:0.6,dy:-10},{fn:x=>3*Math.pow(4,x),color:"var(--orange-ink)",label:"g",lx:2.05,dx:8,dy:2}],dots:[{x:0,y:3,label:"(0, 3)",dx:-54,dy:-8,color:"var(--ink)"},{x:1,y:12,label:"(1, 12)",dx:8,dy:14,color:"var(--ink)"},{x:2,y:48,label:"(2, 48)",dx:-60,dy:-6,color:"var(--ink)"}],xmin:-3,xmax:2.2,ymin:0,ymax:64,noTicks:true,xlab:"x",ylab:"y",alt:"Two exponential graphs, f and g. The graph of f starts higher on the y-axis, but g passes through (0, 3), (1, 12) and (2, 48), grows faster, and crosses f."},
  items:[
    {id:"u6l7_1",label:"1a",groupStem:"1. Is <i>b</i> greater than or less than 2?",stem:"<i>b</i> is…",type:"mc",row:true,correct:"g",options:[{id:"g",t:"Greater than 2"},{id:"l",t:"Less than 2",tag:SMART}]},
    {id:"u6l7_1b",label:"1b",stem:"How do you know?",type:"mc",correct:"a",options:[
      {id:"a",t:"The graph of <i>g</i> starts lower but grows faster and passes <i>f</i>, so its growth factor is bigger than 2"},
      {id:"b",t:"The graph of <i>g</i> starts lower than <i>f</i>, so its growth factor must be smaller",tag:SMART},
      {id:"c",t:"Both graphs go up, so <i>b</i> is equal to 2",tag:"Ignored the difference in growth"}]},
    {id:"u6l7_2",label:"2",stem:"Write an equation that defines <i>g</i>.",type:"expr",vars:["x"],answer:"3*4^x",display:"g(x) = 3*4^x",ph:"Type your equation",unit:EQHINT,
      wrong:[{e:"3*12^x",d:"g(x) = 3*12^x",tag:"Used the y-value at x = 1 as the growth factor"},
             {e:"12*4^x",d:"g(x) = 12*4^x",tag:"Used the y-value at x = 1 as the starting amount"},
             {e:"4*3^x",d:"g(x) = 4*3^x",tag:SWAP},
             {e:"3*2^x",d:"g(x) = 3*2^x",tag:"Used the growth factor of f"},
             {e:"9*x+3",d:"g(x) = 9x + 3",tag:LIN}]},
    {id:"u6l7_3",label:"3",stem:"<i>f</i> and <i>g</i> represent the number, in thousands, of social media followers of two organizations as a function of years since 2010. What does the intersection of <i>f</i> and <i>g</i> mean in this context?",type:"mc",correct:"a",options:[
      {id:"a",t:"The number of years since 2010 when the two organizations have the same number of followers"},
      {id:"b",t:"The time when the two organizations started",tag:"Read the intersection as the starting time"},
      {id:"c",t:"The number of followers each organization gained",tag:"Read the intersection as a change"},
      {id:"d",t:"The time when one organization stops growing",tag:"Thought the intersection means growth stops"}]},
    {id:"u6l7_r",label:"",stem:"<b>Reflection:</b> Now that you have been analyzing exponential function equations and graphs, what are one or two skills you have gotten really good at using?",type:"open",samples:["Finding the growth factor.","Reading the starting value from a graph.","Writing equations.","Not sure yet."]}
  ]
},

/* ---------- Lesson 8 ---------- */
{
  id:"u6l8", title:"Lesson 8: Interpreting Rates", keyStatus:"final",
  intro:"For each function rule, identify the percent increase or percent decrease.",
  items:[
    {id:"u6l8_1",label:"1",stem:"<i>f</i>(<i>x</i>) = 135(1.29)<sup><i>x</i></sup>",type:"mc",correct:"a",options:[
      {id:"a",t:"29% increase"},
      {id:"b",t:"129% increase",tag:"Used the factor as the percent"},
      {id:"c",t:"1.29% increase",tag:"Read the factor as a percent"},
      {id:"d",t:"29% decrease",tag:"Mixed up growth and decay"}]},
    {id:"u6l8_2",label:"2",stem:"<i>g</i>(<i>x</i>) = 8(0.492)<sup><i>x</i></sup>",type:"mc",correct:"a",options:[
      {id:"a",t:"50.8% decrease"},
      {id:"b",t:"49.2% decrease",tag:"Read the decay factor as the percent change"},
      {id:"c",t:"50.8% increase",tag:"Mixed up growth and decay"},
      {id:"d",t:"0.492% decrease",tag:"Read the factor as a percent"}]},
    {id:"u6l8_r1",label:"",stem:"<b>Reflection:</b> The teaching strategies being used to help me learn are:",type:"mc",scored:false,options:[{id:"a",t:"Great!"},{id:"b",t:"Good, but I’d like something different"},{id:"c",t:"Not helping me at all"}]},
    {id:"u6l8_r2",label:"",stem:"Feel free to give details on what teaching strategies are helping most and which you’d change. (Optional)",type:"open",samples:["The group work helps.","More examples please.","It’s fine.","I like the cool downs."]}
  ]
},

/* ---------- Lesson 9 ---------- */
{
  id:"u6l9", title:"Lesson 9: Which One Gets There First?", keyStatus:"final",
  intro:"The function <i>f</i> is given by <i>f</i>(<i>x</i>) = 10<i>x</i> + 3, and the function <i>g</i> is given by <i>g</i>(<i>x</i>) = 2<sup><i>x</i></sup>.",
  items:[
    {id:"u6l9_1",label:"1",stem:"Which function reaches 50 first?",type:"mc",row:true,correct:"f",options:[{id:"f",t:"f"},{id:"g",t:"g",tag:"Assumed the exponential function is always ahead"}]},
    {id:"u6l9_2",label:"2",stem:"Which function reaches 100 first?",type:"mc",row:true,correct:"g",options:[{id:"f",t:"f",tag:"Assumed the linear function stays ahead"},{id:"g",t:"g"}]},
    {id:"u6l9_x",label:"",stem:"Show your reasoning. (Optional, not scored)",type:"open",samples:["f(5) = 53 and g(5) = 32.","I tried values for x.","I made a table.","g gets big fast later."]},
    {id:"u6l9_r",label:"",stem:"<b>Reflection:</b> How do you feel about the way you participated in class today? How might you want to improve your participation in future lessons?",type:"open",samples:["I think I did okay.","I want to ask more questions.","I could share more.","Good."]}
  ]
}

]});
})();
