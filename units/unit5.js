/* Unit 5 cool downs. To add a unit: copy this file to units/unitN.js, change the id/title/cool downs,
   and add one <script src="units/unitN.js"></script> line to index.html. */
(function(){
const MIS_SWAP = "Swapped input and output";
const MIS_MULT = "Read function notation as multiplication";
const MIS_SQ = "Squared the 6 too: (6s)²";
const MIS_12 = "Doubled s instead of squaring (12s)";
const MIS_6S = "Multiplied 6·s without squaring";

/* Each unit holds its own cool downs. To add a unit, add another block to UNITS (later this becomes one file per unit). */
(window.UNITS = window.UNITS || []).push({id:"u5",title:"Unit 5",cds:[
{
  id:"u5l1", title:"Lesson 1: A Growing Puppy", keyStatus:"final",
  intro:"Function <i>Q</i> gives a puppy’s weight in pounds as a function of its age in months.",
  items:[
    {id:"u5l1_1a",label:"1a",groupStem:"1. What does each expression or equation represent in this situation?",stem:"<i>Q</i>(18)",type:"mc",correct:"a",options:[
      {id:"a",t:"The puppy’s weight, in pounds, when it is 18 months old"},
      {id:"b",t:"The puppy’s age, in months, when it weighs 18 pounds",tag:MIS_SWAP},
      {id:"c",t:"<i>Q</i> times 18",tag:MIS_MULT},
      {id:"d",t:"The puppy’s age and weight are both 18",tag:"Treated 18 as both input and output"}]},
    {id:"u5l1_1b",label:"1b",stem:"<i>Q</i>(30) = 27.5",type:"mc",correct:"a",options:[
      {id:"a",t:"At 30 months old, the puppy weighs 27.5 pounds"},
      {id:"b",t:"At 27.5 months old, the puppy weighs 30 pounds",tag:MIS_SWAP},
      {id:"c",t:"<i>Q</i> times 30 equals 27.5",tag:MIS_MULT},
      {id:"d",t:"The puppy gains 27.5 pounds in 30 months",tag:"Read output as a change, not a value"}]},
    {id:"u5l1_2a",label:"2a",groupStem:"2. Use function notation to represent each statement.",stem:"When the puppy turned 12 months old, it weighed 19.6 pounds.",type:"text",ph:"Type your answer, like Q(5) = 3",display:"Q(12) = 19.6",accepted:["q(12)=19.6"],wrong:[{m:"q(19.6)=12",d:"Q(19.6) = 12",tag:MIS_SWAP},{m:"q*12=19.6",d:"Q × 12 = 19.6",tag:MIS_MULT}]},
    {id:"u5l1_2b",label:"2b",stem:"When the puppy was <i>M</i> months old, it weighed <i>W</i> pounds.",type:"text",ph:"Type your answer",display:"Q(M) = W",accepted:["q(m)=w"],wrong:[{m:"q(w)=m",d:"Q(W) = M",tag:MIS_SWAP},{m:"m=q(w)",d:"M = Q(W)",tag:MIS_SWAP}]},
    {id:"u5l1_r",label:"",stem:"<b>Reflection:</b> What were some of your most powerful learning moments in class today? What made them powerful?",type:"open",samples:["Working with my partner on the graphs.","Seeing the notation matched to a real situation.","Not sure yet.","When we compared our answers as a group."]}
  ]
},
{
  id:"u5l2", title:"Lesson 2: Surface Area of a Cube", keyStatus:"final",
  intro:"The function rule <i>A</i>(<i>s</i>) = 6<i>s</i>² represents the surface area of a cube, where <i>s</i> is the side length of the cube in inches and <i>A</i>(<i>s</i>) is the surface area in square inches.",
  items:[
    {id:"u5l2_1a",label:"1a",groupStem:"1. Complete the table with the surface area of a cube for each side length.",stem:"Side length 0.5 inches → surface area (square inches)",type:"num",accepted:[1.5],wrong:[{v:9,tag:MIS_SQ},{v:6,tag:MIS_12},{v:3,tag:MIS_6S}]},
    {id:"u5l2_1b",label:"1b",stem:"Side length 4 inches → surface area (square inches)",type:"num",accepted:[96],wrong:[{v:576,tag:MIS_SQ},{v:48,tag:MIS_12},{v:24,tag:MIS_6S}]},
    {id:"u5l2_1c",label:"1c",stem:"Side length 7 inches → surface area (square inches)",type:"num",accepted:[294],wrong:[{v:1764,tag:MIS_SQ},{v:84,tag:MIS_12},{v:42,tag:MIS_6S}]},
    {id:"u5l2_2a",label:"2a",groupStem:"2. Look at <i>A</i>(9).",stem:"What is the value of <i>A</i>(9)?",type:"num",accepted:[486],wrong:[{v:2916,tag:MIS_SQ},{v:108,tag:MIS_12},{v:54,tag:MIS_6S}]},
    {id:"u5l2_2b",label:"2b",stem:"What does <i>A</i>(9) tell us about the side length and surface area of a cube?",type:"mc",correct:"a",options:[
      {id:"a",t:"A cube with a side length of 9 inches has a surface area of 486 square inches"},
      {id:"b",t:"A cube with a surface area of 9 square inches has a side length of 486 inches",tag:MIS_SWAP},
      {id:"c",t:"9 cubes have a total surface area of 486 square inches",tag:"Treated 9 as the number of cubes"},
      {id:"d",t:"A cube with a side length of 9 inches has a volume of 486 cubic inches",tag:"Confused surface area with volume"}]},
    {id:"u5l2_r1",label:"",stem:"<b>Reflection:</b> What is one concept you struggled with today?",type:"mc",scored:false,options:[
      {id:"a",t:"Plugging a value into a function"},{id:"b",t:"Squaring vs. multiplying by 2"},{id:"c",t:"Reading notation like <i>A</i>(9)"},{id:"d",t:"Explaining what an answer means"},{id:"e",t:"Nothing, I felt good about it"}]},
    {id:"u5l2_r2",label:"",stem:"What do you need to help you understand better?",type:"open",samples:["More examples with decimals.","A worked example first.","Nothing right now.","Time to practice with a partner."]}
  ]
},
{
  id:"u5l3", title:"Lesson 3: Population of a City", keyStatus:"draft",
  intro:"The graph shows the population of a city from 1900 to 2000.",
  graph:{pts:[[1900,20],[1910,22],[1920,32],[1930,40],[1940,44],[1950,45],[1960,43],[1970,35],[1980,30],[1990,28],[2000,26]],xmin:1900,xmax:2000,xt:20,ymin:0,ymax:50,yt:10,xlab:"year",ylab:"population in thousands",alt:"Line graph of a city’s population in thousands from 1900 to 2000. It rises to about 45 thousand around 1950, then falls to about 26 thousand by 2000."},
  items:[
    {id:"u5l3_1",label:"1",stem:"What is the average rate of change of the population between 1930 and 1950? Enter a number.",type:"num",ph:"Number only",unit:"Include thousands per year or people per year in your thinking, then type the number.",accepted:[0.25,250],wrong:[{v:5,tag:"Found the change but didn’t divide by 20 years"},{v:45,tag:"Used the 1950 population, not the change"},{v:20,tag:"Used the length of the interval"}]},
    {id:"u5l3_2a",label:"2a",groupStem:"2. Is the average rate of change positive or negative?",stem:"From 1930 to 1940",type:"mc",row:true,correct:"p",options:[{id:"p",t:"Positive"},{id:"n",t:"Negative",tag:"Mixed up rising and falling"}]},
    {id:"u5l3_2b",label:"2b",stem:"From 1950 to 1970",type:"mc",row:true,correct:"n",options:[{id:"p",t:"Positive",tag:"Mixed up rising and falling"},{id:"n",t:"Negative"}]},
    {id:"u5l3_2c",label:"2c",stem:"From 1930 to 1970",type:"mc",row:true,correct:"n",options:[{id:"p",t:"Positive",tag:"Looked at the rise and ignored the endpoints"},{id:"n",t:"Negative"}]},
    {id:"u5l3_3",label:"3",stem:"In which decade (10-year interval) did the population grow the fastest?",type:"mc",correct:"b",options:[
      {id:"a",t:"1900 to 1910",tag:"Picked the start of the graph"},
      {id:"b",t:"1910 to 1920"},
      {id:"c",t:"1920 to 1930",tag:"Picked a rising decade, not the steepest"},
      {id:"d",t:"1940 to 1950",tag:"Picked where the population was highest"}]},
    {id:"u5l3_3x",label:"",stem:"Explain how you know. (Optional, not scored)",type:"open",samples:["Because it goes up the most on the graph.","The line is steepest there.","I compared the change in each decade.","It looked the biggest."]},
    {id:"u5l3_r",label:"",stem:"<b>Reflection:</b> How does collaborating in math class help us learn? How has it helped you learn, personally?",type:"open",samples:["Hearing how others think about it.","My partner caught a mistake I made.","I explain it and understand it better.","It helps me not get stuck."]}
  ]
},
{
  id:"u5l6", title:"Lesson 6: A Pot of Water", keyStatus:"draft",
  intro:"The function <i>W</i> gives the temperature, in degrees Fahrenheit, of a pot of water on a stove <i>t</i> minutes after the stove is turned on. After 30 minutes, the pot is taken off the stove.",
  graph:{pts:[[0,70],[10,210],[15,210],[30,100]],xmin:0,xmax:30,xt:5,ymin:0,ymax:300,yt:50,xlab:"time (minutes)",ylab:"temperature (degrees Fahrenheit)",alt:"Line graph of water temperature over 30 minutes. It starts near 70 degrees, rises to 210 by minute 10, stays level until minute 15, then falls to about 100 by minute 30."},
  items:[
    {id:"u5l6_1",label:"1",stem:"Is 250 in the range of function <i>W</i>?",type:"mc",row:true,correct:"n",options:[{id:"y",t:"Yes",tag:"Used the axis limits instead of the graph"},{id:"n",t:"No"}]},
    {id:"u5l6_1b",label:"",stem:"How do you know?",type:"mc",correct:"a",options:[
      {id:"a",t:"The graph never gets as high as 250 degrees"},
      {id:"b",t:"250 is on the temperature axis, so it is in the range",tag:"Used the axis limits instead of the graph"},
      {id:"c",t:"250 is more than the 30 minutes the pot was on the stove",tag:"Mixed up domain and range"}]},
    {id:"u5l6_2",label:"2",stem:"Describe the range of the function.",type:"mc",correct:"a",options:[
      {id:"a",t:"All temperatures from about 70°F to 210°F"},
      {id:"b",t:"All times from 0 to 30 minutes",tag:"Described the domain, not the range"},
      {id:"c",t:"All temperatures from 0°F to 300°F",tag:"Used the axis limits instead of the graph"},
      {id:"d",t:"Only the temperatures 70°F and 100°F",tag:"Used only the first and last points"}]},
    {id:"u5l6_3",label:"3",stem:"Is there a value of <i>t</i> that makes <i>W</i>(<i>t</i>) = 0 true?",type:"mc",row:true,correct:"n",options:[{id:"y",t:"Yes",tag:"Looked at t = 0 instead of W(t) = 0"},{id:"n",t:"No"}]},
    {id:"u5l6_3b",label:"",stem:"How do you know?",type:"mc",correct:"a",options:[
      {id:"a",t:"The temperature is never 0°F on the graph"},
      {id:"b",t:"When <i>t</i> = 0 the graph is at the start, so <i>W</i>(<i>t</i>) = 0",tag:"Looked at t = 0 instead of W(t) = 0"},
      {id:"c",t:"The pot is taken off the stove, so it cools to 0°F",tag:"Assumed the water cools all the way down"}]},
    {id:"u5l6_x",label:"",stem:"Add anything else you want me to know. (Optional, not scored)",type:"open",samples:["I got stuck on which axis is the range.","Okay.","Domain and range are easy to mix up.","Can we go over #3?"]},
    {id:"u5l6_r",label:"",stem:"<b>Reflection:</b> I think my math ability is:",type:"mc",scored:false,options:[{id:"a",t:"Great and getting better"},{id:"b",t:"Okay, and still growing"},{id:"c",t:"A battle, but I am learning and growing"}]}
  ]
}
]});
})();
