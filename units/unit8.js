/* Unit 8 cool downs (answers from the CMS Unit 8 answer key, except Lesson 5; see its note). */
(function(){
const HINT = "Type exponents with the ^ key, like x^2.";

(window.UNITS = window.UNITS || []).push({id:"u8", title:"Unit 8", cds:[

/* ---------- Lesson 1 ---------- */
{
  id:"u8l1", title:"Lesson 1: Interpreting a Solution", keyStatus:"final",
  intro:"A framed picture has a total area <i>y</i>, in square inches. The thickness of the frame is represented by <i>x</i>, in inches. The equation <i>y</i> = (8 + 2<i>x</i>)(10 + 2<i>x</i>) relates these two variables.",
  items:[
    {id:"u8l1_1",label:"1",stem:"What are the length and width of the picture without the frame, in inches? Type both numbers.",type:"numset",ph:"Like 5 and 7",answer:[8,10],display:"8 and 10",partialTag:"Gave only one of the two dimensions",
      wrong:[{v:[2,2],d:"2 and 2",tag:"Gave the frame’s coefficients instead of the picture’s size"},{v:[16,20],d:"16 and 20",tag:"Doubled the dimensions"}]},
    {id:"u8l1_2",label:"2",stem:"What would a solution to the equation 100 = (8 + 2<i>x</i>)(10 + 2<i>x</i>) mean in this situation?",type:"mc",correct:"a",options:[
      {id:"a",t:"The thickness of the frame that gives a total area of 100 square inches"},
      {id:"b",t:"The area of the picture without the frame",tag:"Read the solution as the area of the picture"},
      {id:"c",t:"The total area when the frame’s thickness is 100 inches",tag:"Swapped the input and output"},
      {id:"d",t:"The length of the frame, which is 100 inches",tag:"Read 100 as a length"}]},
    {id:"u8l1_r1",label:"",stem:"<b>Reflection:</b> Today my participation was…",type:"mc",scored:false,row:true,options:[{id:"h",t:"High"},{id:"m",t:"Medium"},{id:"l",t:"Low"}]},
    {id:"u8l1_r2",label:"",stem:"…because (optional)",type:"open",samples:["I asked questions.","I was tired.","I worked with my partner.","Not sure."]}
  ]
},

/* ---------- Lesson 2 ---------- */
{
  id:"u8l2", title:"Lesson 2: Find Both Solutions", keyStatus:"final",
  intro:"Find both solutions to the equation 100 + (<i>n</i> − 2)² = 149.",
  items:[
    {id:"u8l2_1",label:"",stem:"Type both solutions.",type:"numset",ph:"Like 3 and -1",answer:[9,-5],display:"9 and -5",partialTag:"Found only one of the two solutions",
      wrong:[{v:[7,-7],d:"7 and -7",tag:"Stopped at n − 2 and didn’t add 2 back"},{v:[5,-9],d:"5 and -9",tag:"Subtracted 2 instead of adding it back"},{v:[51,-47],d:"51 and -47",tag:"Didn’t take the square root first"}]},
    {id:"u8l2_x",label:"",stem:"Explain or show your reasoning. (Optional, not scored)",type:"open",samples:["49 = (n-2)^2, so n-2 = 7 or -7.","I subtracted 100 first.","I took the square root.","Not sure."]},
    {id:"u8l2_r1",label:"",stem:"<b>Reflection:</b> I feel like my math abilities have…",type:"mc",scored:false,options:[{id:"a",t:"Increased greatly this year"},{id:"b",t:"Increased a bit this year"},{id:"c",t:"Stayed the same this year"}]},
    {id:"u8l2_r2",label:"",stem:"My joy for mathematics has…",type:"mc",scored:false,options:[{id:"a",t:"Increased this year"},{id:"b",t:"Stayed the same this year"},{id:"c",t:"Decreased this year"}]}
  ]
},

/* ---------- Lesson 3 ---------- */
{
  id:"u8l3", title:"Lesson 3: Solve This Equation!", keyStatus:"final",
  intro:"Find all solutions to (<i>x</i> + 5)(2<i>x</i> − 3) = 0.",
  items:[
    {id:"u8l3_1",label:"",stem:"Type all solutions.",type:"numset",ph:"Like 2 and -1/2",answer:[-5,1.5],display:"-5 and 3/2",partialTag:"Found only one of the two solutions",
      wrong:[{v:[5,-1.5],d:"5 and -3/2",tag:"Sign errors when solving each factor"},{v:[-5,3],d:"-5 and 3",tag:"Forgot to divide by 2"},{v:[5,1.5],d:"5 and 3/2",tag:"Sign error on the first solution"}]},
    {id:"u8l3_x",label:"",stem:"Explain or show your reasoning. (Optional, not scored)",type:"open",samples:["Set each factor equal to 0.","x + 5 = 0 or 2x - 3 = 0.","Zero product property.","Not sure."]},
    {id:"u8l3_r",label:"",stem:"<b>Reflection:</b> In what ways does your math teacher make you feel supported in class? Is there anything you would change or add?",type:"open",samples:["Checking in with me.","Explaining things more than one way.","Nothing, it’s good.","Not sure."]}
  ]
},

/* ---------- Lesson 5 ---------- */
{
  id:"u8l5", title:"Lesson 5: The Missing Symbols", keyStatus:"draft",
  keyNote:"The key’s answers for this lesson don’t match the printed expressions (they look like they’re from a different version). I worked the answers out from the expressions: x² − 16x − 17, x² + 16x − 17, (x + 7)(x − 4), and (x + 2)(x − 14). Confirm them before using these scores.",
  intro:"Here are pairs of equivalent expressions in standard form and factored form. Complete each one.",
  items:[
    {id:"u8l5_1",label:"1",stem:"<i>x</i>² ▢ 16<i>x</i> ▢ 17 and (<i>x</i> + 1)(<i>x</i> − 17). Type the complete standard form expression.",type:"expr",vars:["x"],answer:"x^2-16*x-17",display:"x^2 - 16x - 17",ph:"Type the full expression",unit:HINT,noParens:true,simpTag:"Equivalent, but not in standard form",
      wrong:[{e:"x^2+16*x+17",d:"x^2 + 16x + 17",tag:"Wrong signs on the middle and last terms"},{e:"x^2-16*x+17",d:"x^2 - 16x + 17",tag:"Sign error on the last term"},{e:"x^2+16*x-17",d:"x^2 + 16x - 17",tag:"Sign error on the middle term"},{e:"x^2+18*x+17",d:"x^2 + 18x + 17",tag:"Added the factors’ numbers instead of combining them"}]},
    {id:"u8l5_2",label:"2",stem:"<i>x</i>² ▢ 16<i>x</i> ▢ 17 and (<i>x</i> − 1)(<i>x</i> + 17). Type the complete standard form expression.",type:"expr",vars:["x"],answer:"x^2+16*x-17",display:"x^2 + 16x - 17",ph:"Type the full expression",unit:HINT,noParens:true,simpTag:"Equivalent, but not in standard form",
      wrong:[{e:"x^2-16*x-17",d:"x^2 - 16x - 17",tag:"Sign error on the middle term"},{e:"x^2+16*x+17",d:"x^2 + 16x + 17",tag:"Sign error on the last term"},{e:"x^2-16*x+17",d:"x^2 - 16x + 17",tag:"Wrong signs on the middle and last terms"}]},
    {id:"u8l5_3",label:"3",stem:"<i>x</i>² + 3<i>x</i> − 28 and (<i>x</i> + ▢)(<i>x</i> − ▢). Type the complete factored form.",type:"expr",vars:["x"],answer:"(x+7)*(x-4)",display:"(x + 7)(x - 4)",ph:"Type the full factored form",unit:HINT,needParens:true,simpTag:"Not written in factored form",
      wrong:[{e:"(x-7)*(x+4)",d:"(x - 7)(x + 4)",tag:"Signs swapped in the two factors"},{e:"(x+14)*(x-2)",d:"(x + 14)(x - 2)",tag:"Used a factor pair that doesn’t add to 3"},{e:"(x+28)*(x-1)",d:"(x + 28)(x - 1)",tag:"Used a factor pair that doesn’t add to 3"}]},
    {id:"u8l5_4",label:"4",stem:"<i>x</i>² − 12<i>x</i> − 28 and (<i>x</i> ▢ ▢)(<i>x</i> ▢ ▢). Type the complete factored form.",type:"expr",vars:["x"],answer:"(x+2)*(x-14)",display:"(x + 2)(x - 14)",ph:"Type the full factored form",unit:HINT,needParens:true,simpTag:"Not written in factored form",
      wrong:[{e:"(x-2)*(x+14)",d:"(x - 2)(x + 14)",tag:"Signs swapped in the two factors"},{e:"(x+4)*(x-7)",d:"(x + 4)(x - 7)",tag:"Used a factor pair that doesn’t add to −12"},{e:"(x-4)*(x-7)",d:"(x - 4)(x - 7)",tag:"Used a factor pair with the wrong product"}]},
    {id:"u8l5_r1",label:"",stem:"<b>Reflection:</b> Today I struggled with…",type:"open",samples:["finding the factor pairs","the signs","nothing","negative numbers"]},
    {id:"u8l5_r2",label:"",stem:"To be successful with this, I need…",type:"open",samples:["more practice","an example","to slow down","nothing"]}
  ]
},

/* ---------- Lesson 6 ---------- */
{
  id:"u8l6", title:"Lesson 6: Conquering More Equations", keyStatus:"final",
  intro:"Solve each equation by rewriting it in factored form and using the zero product property.",
  items:[
    {id:"u8l6_1",label:"1",stem:"<i>x</i>² + 12<i>x</i> + 11 = 0. Type all solutions.",type:"numset",ph:"Like 3 and -1",answer:[-1,-11],display:"-1 and -11",partialTag:"Found only one of the two solutions",
      wrong:[{v:[1,11],d:"1 and 11",tag:"Sign errors on the solutions"},{v:[-12,-11],d:"-12 and -11",tag:"Used the wrong numbers from the equation"}]},
    {id:"u8l6_2",label:"2",stem:"<i>x</i>² − 3 = 1. Type all solutions.",type:"numset",ph:"Like 3 and -1",answer:[2,-2],display:"2 and -2",partialTag:"Found only the positive solution",
      wrong:[{v:[4,-4],d:"4 and -4",tag:"Didn’t take the square root"},{v:[1.5,-1.5],d:"1.5 and -1.5",tag:"Divided instead of taking the square root"}]},
    {id:"u8l6_3",label:"3",stem:"<i>x</i>² − 6<i>x</i> + 7 = −2. Type all solutions.",type:"numset",ph:"Like 3 and -1",answer:[3],display:"3",
      wrong:[{v:[-3],d:"-3",tag:"Sign error on the solution"},{v:[3,-3],d:"3 and -3",tag:"Added a second solution that doesn’t work"}]},
    {id:"u8l6_x",label:"",stem:"Show your reasoning. (Optional, not scored)",type:"open",samples:["I moved everything to one side and factored.","(x+11)(x+1) = 0.","x^2 - 4 = 0, so (x+2)(x-2) = 0.","Not sure."]},
    {id:"u8l6_r",label:"",stem:"<b>Reflection:</b> In what ways have you encouraged others recently in math class? Who have you helped? How did that feel? In what ways can you support others?",type:"open",samples:["I helped my partner.","I told someone they were close.","I could ask people if they need help.","Not sure."]}
  ]
},

/* ---------- Lesson 7 ---------- */
{
  id:"u8l7", title:"Lesson 7: Maximum Area of a Rectangle", keyStatus:"final",
  intro:"The function <i>A</i>(<i>w</i>) = −2<i>w</i>² + 11<i>w</i> − 5 represents the area of a rectangle, in square feet, as a function of the width <i>w</i>, in feet.",
  items:[
    {id:"u8l7_1",label:"1",stem:"Factor the quadratic expression. Type the factored form.",type:"expr",vars:["w"],answer:"(-2*w+1)*(w-5)",display:"(-2w + 1)(w - 5)",ph:"Type the factored form",unit:HINT,needParens:true,simpTag:"Not written in factored form",
      wrong:[{e:"(2*w-1)*(w-5)",d:"(2w - 1)(w - 5)",tag:"Sign error on the leading coefficient"},{e:"(-2*w-1)*(w+5)",d:"(-2w - 1)(w + 5)",tag:"Sign errors in both factors"},{e:"(-2*w+5)*(w-1)",d:"(-2w + 5)(w - 1)",tag:"Swapped the constants in the factors"}]},
    {id:"u8l7_2",label:"2",stem:"What width gives the maximum area? (in feet)",type:"num",ph:"Feet",accepted:[2.75],tol:0.01,wrong:[{v:0.5,tag:"Gave a zero of the function instead of the width at the vertex"},{v:5,tag:"Gave a zero of the function instead of the width at the vertex"},{v:10.125,tag:"Gave the maximum area instead of the width"}]},
    {id:"u8l7_3",label:"3",stem:"What is the maximum area? (in square feet)",type:"num",ph:"Square feet",accepted:[10.125],tol:0.01,wrong:[{v:2.75,tag:"Gave the width instead of the maximum area"},{v:0,tag:"Gave the area at a zero of the function"},{v:5.5,tag:"Used the wrong width to find the area"}]},
    {id:"u8l7_x",label:"",stem:"Show your reasoning. (Optional, not scored)",type:"open",samples:["The vertex is halfway between the zeros 0.5 and 5.","I put 2.75 into the function.","The max is at the vertex.","Not sure."]},
    {id:"u8l7_r",label:"",stem:"<b>Reflection:</b> What was one of your favorite topics or activities in math over the last few weeks? What makes it one of your favorites?",type:"open",samples:["Graphing parabolas.","Factoring.","Working in groups.","Not sure."]}
  ]
}

]});
})();
