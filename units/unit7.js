/* Unit 7 cool downs (answers from the CMS Unit 7 answer key). */
(function(){
const HINT = "Type exponents with the ^ key, like x^2. Use * or just write the number next to the letter.";
const FEQ = "<i>f</i>(<i>x</i>) = <i>x</i>² − 4", GEQ = "<i>g</i>(<i>x</i>) = 1 − <i>x</i>²", HEQ = "<i>h</i>(<i>x</i>) = <i>x</i>² + 4";
const MATCH = (id,label,graphLetter,correct,groupStem) => ({id,label,groupStem,stem:"Which equation matches graph "+graphLetter+"?",type:"mc",correct,options:[
  {id:"f",t:FEQ,tag:correct==="f"?undefined:"Matched using the wrong y-intercept or opening direction"},
  {id:"g",t:GEQ,tag:correct==="g"?undefined:"Matched using the wrong y-intercept or opening direction"},
  {id:"h",t:HEQ,tag:correct==="h"?undefined:"Matched using the wrong y-intercept or opening direction"}]});

(window.UNITS = window.UNITS || []).push({id:"u7", title:"Unit 7", cds:[

/* ---------- Lesson 1 ---------- */
{
  id:"u7l1", title:"Lesson 1: 100 Meters of Fencing", keyStatus:"final",
  intro:"A rectangular yard is enclosed by 100 meters of fencing. The table shows some possible values for the length and width of the yard. <table class='t'><tr><th>Length (meters)</th><th>Width (meters)</th><th>Area (square meters)</th></tr><tr><td>10</td><td>40</td><td>400</td></tr><tr><td>20</td><td>30</td><td>?</td></tr><tr><td>25</td><td>25</td><td>625</td></tr><tr><td>35</td><td>15</td><td>525</td></tr><tr><td>40</td><td>?</td><td>?</td></tr></table>",
  items:[
    {id:"u7l1_1a",label:"1a",groupStem:"1. Complete the table with the missing values.",stem:"Area when the length is 20 and the width is 30:",type:"num",ph:"Square meters",accepted:[600],wrong:[{v:50,tag:"Added the length and width instead of multiplying"},{v:100,tag:"Used the perimeter"}]},
    {id:"u7l1_1b",label:"1b",stem:"Width when the length is 40:",type:"num",ph:"Meters",accepted:[10],wrong:[{v:60,tag:"Subtracted from 100 instead of 50 (half the fencing)"},{v:40,tag:"Repeated the length"}]},
    {id:"u7l1_1c",label:"1c",stem:"Area when the length is 40:",type:"num",ph:"Square meters",accepted:[400],wrong:[{v:2400,tag:"Used the wrong width"},{v:50,tag:"Added instead of multiplying"}]},
    {id:"u7l1_2",label:"2",stem:"If the values for length and area are plotted, what would the graph look like?",type:"mc",correct:"a",options:[
      {id:"a",t:"A stretched-out upside-down U (an arch)"},
      {id:"b",t:"A straight line going up",tag:"Assumed the relationship is linear"},
      {id:"c",t:"A straight line going down",tag:"Assumed the relationship is linear"},
      {id:"d",t:"A U shape that opens upward",tag:"Flipped the shape of the graph"}]},
    {id:"u7l1_3",label:"3",stem:"How is the relationship between length and area different from other relationships we’ve seen?",type:"mc",correct:"a",options:[
      {id:"a",t:"As the length increases, the area first increases and then decreases"},
      {id:"b",t:"As the length increases, the area always increases",tag:"Described a linear or exponential increase"},
      {id:"c",t:"As the length increases, the area increases at a constant rate",tag:"Described a linear relationship"},
      {id:"d",t:"As the length increases, the area stays the same",tag:"Didn’t see the area change"}]},
    {id:"u7l1_r",label:"",stem:"<b>Reflection:</b> What is one thing you already knew, and what is one thing you look forward to learning more about?",type:"open",samples:["I knew area is length times width.","I want to learn about parabolas.","I already knew how to graph.","Not sure."]}
  ]
},

/* ---------- Lesson 2 ---------- */
{
  id:"u7l2", title:"Lesson 2: Where Will It Be?", keyStatus:"final",
  intro:"The expression 16<i>t</i>² represents the distance in feet an object falls after <i>t</i> seconds. The object is dropped from a height of 906 feet.",
  items:[
    {id:"u7l2_1",label:"1",stem:"What is the height in feet of the object 2 seconds after it is dropped?",type:"num",ph:"Feet",accepted:[842],wrong:[{v:64,tag:"Gave the distance fallen, not the height"},{v:874,tag:"Used 16 · 2 instead of 16 · 2²"},{v:970,tag:"Added the distance fallen"}]},
    {id:"u7l2_2",label:"2",stem:"Write a function rule for the height of the object in feet <i>t</i> seconds after it is dropped.",type:"expr",vars:["t"],answer:"906-16*t^2",display:"h(t) = 906 - 16t^2",ph:"Type your function rule",unit:HINT,
      wrong:[{e:"16*t^2",d:"h(t) = 16t^2",tag:"Wrote the distance fallen, not the height"},
             {e:"906+16*t^2",d:"h(t) = 906 + 16t^2",tag:"Added the distance instead of subtracting"},
             {e:"(906-16*t)^2",d:"h(t) = (906 - 16t)^2",tag:"Squared the whole expression"},
             {e:"906-16*t",d:"h(t) = 906 - 16t",tag:"Forgot to square t"},
             {e:"906-(16*t)^2",d:"h(t) = 906 - (16t)^2",tag:"Squared the 16 too"}]},
    {id:"u7l2_r",label:"",stem:"<b>Reflection:</b> What was the most helpful method or strategy your teacher used in today’s lesson?",type:"open",samples:["Using a table first.","Graphing it.","Examples on the board.","Not sure."]}
  ]
},

/* ---------- Lesson 3 ---------- */
{
  id:"u7l3", title:"Lesson 3: Making the Greatest Revenue", keyStatus:"final",
  intro:"This graph represents the revenue, in dollars, that a company expects if they sell their product for <i>p</i> dollars.",
  graph:{curves:[{fn:p=>-50*p*(p-20),color:"var(--blue-ink)"}],xmin:0,xmax:20,xt:2,ymin:0,ymax:6000,yt:1000,xlab:"price (dollars)",ylab:"revenue (dollars)",alt:"Graph of revenue against price. An arch that starts at 0 revenue at a price of $0, rises to about $5,000 at a price of $10, and returns to 0 revenue at a price of $20."},
  items:[
    {id:"u7l3_1",label:"1",stem:"Based on this model, which price would generate more revenue, $5 or $17?",type:"mc",row:true,correct:"5",options:[{id:"5",t:"$5"},{id:"17",t:"$17",tag:"Assumed a higher price always means more revenue"}]},
    {id:"u7l3_2a",label:"2a",groupStem:"2. The company wants to make as much revenue as possible.",stem:"At what price should they sell the product?",type:"num",ph:"Dollars",accepted:[10],wrong:[{v:20,tag:"Used the price where revenue is zero"},{v:5000,tag:"Gave the revenue instead of the price"}]},
    {id:"u7l3_2b",label:"2b",stem:"About how much revenue will they make?",type:"num",ph:"Dollars",accepted:[5000],tol:150,wrong:[{v:10,tag:"Gave the price instead of the revenue"},{v:6000,tag:"Used the top of the graph instead of the peak"}]},
    {id:"u7l3_3",label:"3",stem:"What is an appropriate <b>domain</b> for the function?",type:"mc",correct:"a",options:[
      {id:"a",t:"0 ≤ <i>p</i> ≤ 20"},
      {id:"b",t:"0 ≤ <i>p</i> ≤ 5000",tag:"Used the range as the domain"},
      {id:"c",t:"All real numbers",tag:"Ignored the situation (price can’t be negative)"},
      {id:"d",t:"10 ≤ <i>p</i> ≤ 20",tag:"Used only the decreasing part of the graph"}]},
    {id:"u7l3_4",label:"4",stem:"What is an appropriate <b>range</b> for the function?",type:"mc",correct:"a",options:[
      {id:"a",t:"0 ≤ <i>r</i> ≤ 5000"},
      {id:"b",t:"0 ≤ <i>r</i> ≤ 20",tag:"Used the domain as the range"},
      {id:"c",t:"All real numbers",tag:"Ignored the situation (revenue can’t be negative)"},
      {id:"d",t:"0 ≤ <i>r</i> ≤ 6000",tag:"Used the top of the graph’s axis"}]},
    {id:"u7l3_x",label:"",stem:"Explain how you know for any question. (Optional, not scored)",type:"open",samples:["The vertex is the highest point.","Revenue can’t be negative.","The graph hits zero at 20.","Not sure."]},
    {id:"u7l3_r1",label:"",stem:"<b>Reflection:</b> On a scale of 1 to 5, how confident were you to speak aloud and share with your peers?",type:"mc",scored:false,options:[{id:"1",t:"1 – Not confident at all"},{id:"2",t:"2 – Barely confident"},{id:"3",t:"3 – Not completely confident but not anxious"},{id:"4",t:"4 – Fairly confident"},{id:"5",t:"5 – Very confident"}]},
    {id:"u7l3_r2",label:"",stem:"How can your teacher support you in becoming more confident in mathematics? (Optional)",type:"open",samples:["Give me time to think first.","Let me share with a partner first.","I’m fine.","Not sure."]}
  ]
},

/* ---------- Lesson 4 ---------- */
{
  id:"u7l4", title:"Lesson 4: From One Form to Another", keyStatus:"final",
  intro:"For each expression, write an equivalent expression in standard form.",
  items:[
    {id:"u7l4_1",label:"1",stem:"(2<i>x</i> + 5)(<i>x</i> + 1)",type:"expr",vars:["x"],answer:"2*x^2+7*x+5",display:"2x^2 + 7x + 5",ph:"Type your answer",unit:HINT,noParens:true,simpTag:"Equivalent, but not in standard form",
      wrong:[{e:"2*x^2+5",d:"2x^2 + 5",tag:"Only multiplied the first terms and the last terms"},
             {e:"2*x^2+6*x+5",d:"2x^2 + 6x + 5",tag:"Miscounted the middle terms"},
             {e:"3*x+6",d:"3x + 6",tag:"Added the factors instead of multiplying"},
             {e:"2*x^2+7*x-5",d:"2x^2 + 7x - 5",tag:"Sign error on the last term"}]},
    {id:"u7l4_2",label:"2",stem:"(<i>x</i> − 2)(<i>x</i> + 2)",type:"expr",vars:["x"],answer:"x^2-4",display:"x^2 - 4",ph:"Type your answer",unit:HINT,noParens:true,simpTag:"Equivalent, but not in standard form",
      wrong:[{e:"x^2+4",d:"x^2 + 4",tag:"Multiplied −2 and 2 and got +4"},
             {e:"x^2-4*x-4",d:"x^2 - 4x - 4",tag:"Sign errors in the middle terms"},
             {e:"2*x-4",d:"2x - 4",tag:"Left out the x² term"},
             {e:"x^2-2",d:"x^2 - 2",tag:"Arithmetic mistake combining terms"}]},
    {id:"u7l4_x",label:"",stem:"Show your reasoning. (Optional, not scored)",type:"open",samples:["I used an area model.","I multiplied each pair of terms.","FOIL.","Not sure."]},
    {id:"u7l4_r",label:"",stem:"<b>Reflection:</b> What was the best support or encouragement you received in math class today? Who gave you that support or encouragement?",type:"open",samples:["My partner helped me.","The teacher said I was close.","Nobody today.","Not sure."]}
  ]
},

/* ---------- Lesson 6 ---------- */
{
  id:"u7l6", title:"Lesson 6: Sketching a Graph", keyStatus:"draft",
  keyNote:"The key’s text didn’t show the y-intercept for this lesson, so I computed it from the function: f(0) = (−2)(4) = −8. Confirm it before using these scores.",
  intro:"The function <i>f</i> is given by <i>f</i>(<i>x</i>) = (<i>x</i> − 2)(<i>x</i> + 4). Without using graphing technology, answer the questions. <i>(Sketching the graph is done on paper.)</i>",
  items:[
    {id:"u7l6_1",label:"1",stem:"What are the <i>x</i>-intercepts of the graph? Type both <i>x</i>-values.",type:"numset",ph:"Like 3 and -1",answer:[2,-4],display:"2, -4",partialTag:"Found only one x-intercept",
      wrong:[{v:[-2,4],d:"-2, 4",tag:"Sign errors on the x-intercepts"},{v:[2,4],d:"2, 4",tag:"Sign error on one x-intercept"},{v:[-2,-4],d:"-2, -4",tag:"Sign error on one x-intercept"}]},
    {id:"u7l6_2",label:"2",stem:"What are the <i>x</i>- and <i>y</i>-coordinates of the vertex? Type them as <i>x</i>, <i>y</i>.",type:"pair",ph:"Like 3, -1",answer:[-1,-9],display:"-1, -9",
      wrong:[{v:[1,-9],d:"1, -9",tag:"Sign error on the x-coordinate"},{v:[-1,9],d:"-1, 9",tag:"Sign error on the y-coordinate"},{v:[-9,-1],d:"-9, -1",tag:"Swapped the x- and y-coordinates"},{v:[-1,0],d:"-1, 0",tag:"Didn’t find the y-coordinate of the vertex"}]},
    {id:"u7l6_3",label:"3",stem:"What is the <i>y</i>-intercept? Enter the <i>y</i>-value.",type:"num",ph:"Number",accepted:[-8],wrong:[{v:8,tag:"Sign error on the y-intercept"},{v:-9,tag:"Gave the vertex’s y-value"},{v:0,tag:"Gave an x-intercept’s y-value"}]},
    {id:"u7l6_x",label:"",stem:"Show your reasoning. (Optional, not scored)",type:"open",samples:["Set each factor to 0.","The vertex is halfway between the intercepts.","I plugged in 0 for x.","Not sure."]},
    {id:"u7l6_r1",label:"",stem:"<b>Reflection:</b> Graphing quadratic functions is easiest for me when it is in…",type:"mc",scored:false,row:true,options:[{id:"s",t:"Standard form"},{id:"f",t:"Factored form"}]},
    {id:"u7l6_r2",label:"",stem:"…because (optional)",type:"open",samples:["I can see the intercepts.","I can see the y-intercept.","It’s easier to plug in.","Not sure."]}
  ]
},

/* ---------- Lesson 7 ---------- */
{
  id:"u7l7", title:"Lesson 7: Matching Equations and Graphs", keyStatus:"draft",
  keyNote:"The key’s text didn’t show the vertex of k(x) = x² − 8x, so I computed it: (4, −16). Confirm it before using these scores.",
  intro:"Three quadratic functions are defined by <i>f</i>(<i>x</i>) = <i>x</i>² − 4, <i>g</i>(<i>x</i>) = 1 − <i>x</i>², and <i>h</i>(<i>x</i>) = <i>x</i>² + 4. The graph shows all three, labeled A, B, and C.",
  graph:{curves:[{fn:x=>x*x+4,color:"var(--blue-ink)",label:"A",lx:1.9,dx:10,dy:-4},{fn:x=>x*x-4,color:"var(--orange-ink)",label:"B",lx:2.9,dx:10,dy:-2},{fn:x=>1-x*x,color:"var(--ink)",label:"C",lx:1.9,dx:10,dy:4}],xmin:-4,xmax:4,xt:2,ymin:-8,ymax:8,yt:2,xlab:"x",ylab:"y",alt:"Three parabolas. A opens upward with its lowest point at (0, 4). B opens upward with its lowest point at (0, -4). C opens downward with its highest point at (0, 1)."},
  items:[
    MATCH("u7l7_1a","1a","A","h","1. Match each equation to a graph."),
    MATCH("u7l7_1b","1b","B","f"),
    MATCH("u7l7_1c","1c","C","g"),
    {id:"u7l7_2",label:"2",stem:"Which part of the equation for graph C tells us the graph opens downward?",type:"mc",correct:"a",options:[
      {id:"a",t:"The negative coefficient of <i>x</i>² (the −<i>x</i>²)"},
      {id:"b",t:"The 1 in 1 − <i>x</i>²",tag:"Looked at the constant instead of the x² term"},
      {id:"c",t:"The <i>x</i>² (it is squared)",tag:"Ignored the sign of the x² term"},
      {id:"d",t:"The <i>g</i> in <i>g</i>(<i>x</i>)",tag:"Looked at the function name"}]},
    {id:"u7l7_3",label:"3",stem:"What is the vertex of <i>k</i>(<i>x</i>) = <i>x</i>² − 8<i>x</i>? Type it as <i>x</i>, <i>y</i>.",type:"pair",ph:"Like 3, -1",answer:[4,-16],display:"4, -16",
      wrong:[{v:[-4,-16],d:"-4, -16",tag:"Sign error on the x-coordinate"},{v:[4,16],d:"4, 16",tag:"Sign error on the y-coordinate"},{v:[8,0],d:"8, 0",tag:"Gave an x-intercept instead of the vertex"},{v:[4,0],d:"4, 0",tag:"Didn’t find the y-coordinate of the vertex"}]},
    {id:"u7l7_x",label:"",stem:"Explain how you matched the graphs. (Optional, not scored)",type:"open",samples:["I looked at the y-intercept.","C opens down.","B has x-intercepts.","Not sure."]},
    {id:"u7l7_r",label:"",stem:"<b>Reflection:</b> Today I got excited or felt confident doing my math work when…",type:"open",samples:["I matched the graphs.","I helped my partner.","I got the vertex.","Not sure."]}
  ]
}

]});
})();
