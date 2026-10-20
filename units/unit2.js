/* Unit 2 cool downs (answers from the CMS Unit 2 answer key). */
(function(){
const EQHINT = "Type your equation, like y = 3x + 2. Use * or just write the number next to the letter.";

(window.UNITS = window.UNITS || []).push({id:"u2", title:"Unit 2", cds:[

/* ---------- Lesson 1 ---------- */
{
  id:"u2l1", title:"Lesson 1: Shirt Colors", keyStatus:"final",
  intro:"A school choir needs to make T-shirts for its 75 members and has set aside some money in its budget to pay for them. The members of the choir decided to order from a printing company that charges $3 per shirt, plus a $50 fee for each color to be printed on the shirts.",
  items:[
    {id:"u2l1_1",label:"1",stem:"Let <i>x</i> be the number of colors on the shirts and <i>D</i> the total cost in dollars. Which equation represents the total cost of the order?",type:"mc",correct:"a",options:[
      {id:"a",t:"75(3) + 50<i>x</i> = <i>D</i>"},
      {id:"b",t:"75(3 + 50<i>x</i>) = <i>D</i>",tag:"Charged the color fee for every shirt"},
      {id:"c",t:"3<i>x</i> + 50(75) = <i>D</i>",tag:"Mixed up the number of shirts and the number of colors"},
      {id:"d",t:"75 + 3 + 50<i>x</i> = <i>D</i>",tag:"Added the number of shirts instead of multiplying"}]},
    {id:"u2l1_2",label:"2",stem:"In this situation, which quantities can vary and which are fixed?",type:"mc",correct:"a",options:[
      {id:"a",t:"The number of colors and the total cost can vary. The cost per shirt, the fee per color, and the 75 shirts are fixed"},
      {id:"b",t:"The cost per shirt and the fee per color can vary. The total cost is fixed",tag:"Swapped which quantities are fixed and which vary"},
      {id:"c",t:"Nothing can vary. Every quantity is fixed",tag:"Didn’t see the number of colors as a changing choice"},
      {id:"d",t:"The number of shirts can vary. The number of colors is fixed",tag:"Treated the number of shirts as the changing quantity"}]},
    {id:"u2l1_r",label:"",stem:"<b>Reflection:</b> What resources or practices in math class help you learn best?",type:"open",samples:["Working with partners.","Examples on the board.","Practice problems.","Not sure."]}
  ]
},

/* ---------- Lesson 2 ---------- */
{
  id:"u2l2", title:"Lesson 2: Salary and Deposit", keyStatus:"final",
  intro:"The table shows the relationship between two quantities. <table class='t'><tr><th>Monthly salary in dollars, <i>x</i></th><td>872</td><td>998</td><td>1,015</td><td>2,110</td></tr><tr><th>Amount deposited in dollars, <i>y</i></th><td>472</td><td>598</td><td>615</td><td>1,710</td></tr></table>",
  items:[
    {id:"u2l2_1",label:"1",stem:"How are the two quantities in the table related?",type:"mc",correct:"a",options:[
      {id:"a",t:"The amount deposited is $400 less than the monthly salary"},
      {id:"b",t:"The amount deposited is $400 more than the monthly salary",tag:"Reversed which quantity is larger"},
      {id:"c",t:"The amount deposited is 400 times the monthly salary",tag:"Multiplied instead of subtracting"},
      {id:"d",t:"The amount deposited is half of the monthly salary",tag:"Used one pair of values instead of the pattern"}]},
    {id:"u2l2_2",label:"2",stem:"Write an equation to represent the relationship between the two quantities.",type:"eqn",vars:["x","y"],indep:"x",dep:"y",line:e=>e.x-400,display:"y = x - 400",ph:"Type your equation",unit:EQHINT,
      wrong:[{line:e=>e.x+400,d:"y = x + 400",tag:"Added instead of subtracted (or swapped x and y)"},
             {line:e=>400-e.x,d:"y = 400 - x",tag:"Reversed the subtraction"},
             {line:e=>400*e.x,d:"y = 400x",tag:"Multiplied instead of subtracting"},
             {line:e=>e.x/2,d:"y = x/2",tag:"Used one pair of values instead of the pattern"}]},
    {id:"u2l2_r",label:"",stem:"<b>Reflection:</b> I felt really confident today when I was…",type:"open",samples:["working with my group.","writing the equation.","looking for patterns.","Not sure."]}
  ]
},

/* ---------- Lesson 3 ---------- */
{
  id:"u2l3", title:"Lesson 3: Box of Beans and Rice", keyStatus:"final",
  intro:"A cardboard box, which weighs 0.6 pounds when empty, is filled with 15 bags of beans and a 4-pound bag of rice. The total weight of the box and the contents inside it is 25.6 pounds. One way to represent this situation is with the equation 0.6 + 15<i>b</i> + 4 = 25.6.",
  items:[
    {id:"u2l3_1",label:"1",stem:"In this situation, what does the solution to the equation represent?",type:"mc",correct:"a",options:[
      {id:"a",t:"The weight, in pounds, of one bag of beans"},
      {id:"b",t:"The total weight of the box and its contents (25.6 pounds)",tag:"Read the solution as the total weight"},
      {id:"c",t:"The number of bags of beans (15)",tag:"Read the solution as the number of bags"},
      {id:"d",t:"The weight of the empty box (0.6 pounds)",tag:"Read the solution as the weight of the box"}]},
    {id:"u2l3_2",label:"2",stem:"Select <b>all</b> equations that are also equivalent to 0.6 + 15<i>b</i> + 4 = 25.6.",type:"multi",correct:["b","c","e"],options:[
      {id:"a",t:"15<i>b</i> + 4 = 25.6",tag:"Didn’t subtract the 0.6 from both sides"},
      {id:"b",t:"15<i>b</i> + 4 = 25"},
      {id:"c",t:"3(0.6 + 15<i>b</i> + 4) = 76.8"},
      {id:"d",t:"15<i>b</i> = 25.6",tag:"Ignored the weight of the box and the rice"},
      {id:"e",t:"15<i>b</i> = 21"}]},
    {id:"u2l3_r",label:"",stem:"<b>Reflection:</b> Doing math work at home or after school makes me feel ___ because ___.",type:"open",samples:["stressed because it’s hard without help.","fine because I can go at my own pace.","tired because I have a lot of homework.","okay."]}
  ]
},

/* ---------- Lesson 4 ---------- */
{
  id:"u2l4", title:"Lesson 4: Declining Account", keyStatus:"final",
  intro:"A checking account is set up with an initial balance of $4,800, and $400 is removed from the account each month for rent (no other transactions occur on the account).",
  items:[
    {id:"u2l4_1",label:"",stem:"Write an equation whose solution is the number of months, <i>m</i>, it takes for the account balance to reach $2,000.",type:"eqn",vars:["m"],sol:7,mustAny:["4800","2000","400"],trivialTag:"Wrote the answer instead of an equation that models the situation",display:"4800 - 400m = 2000",ph:"Type your equation",unit:"Type an equation with m in it, like 5m + 2 = 17.",
      wrong:[{sol:-7,d:"4800 + 400m = 2000",tag:"Added the rent instead of subtracting it"},
             {sol:12,d:"4800 - 400m = 0",tag:"Set the balance to $0 instead of $2,000"},
             {sol:5,d:"400m = 2000",tag:"Left out the starting balance"},
             {sol:2.2,d:"4800 - 2000m = 400",tag:"Mixed up which amounts go with the months"}]},
    {id:"u2l4_r1",label:"",stem:"<b>Reflection:</b> What have you learned about writing and solving equations?",type:"open",samples:["Equations have to match the story.","You can do the same thing to both sides.","Not sure.","It gets easier with practice."]},
    {id:"u2l4_r2",label:"",stem:"What are you really good at?",type:"open",samples:["Solving.","Writing equations from words.","Checking my work.","Not sure."]},
    {id:"u2l4_r3",label:"",stem:"What should you keep working toward?",type:"open",samples:["Word problems.","Being faster.","Showing my steps.","Not sure."]}
  ]
},

/* ---------- Lesson 6 ---------- */
{
  id:"u2l6", title:"Lesson 6: Carnival Tickets", keyStatus:"final",
  intro:"A school is holding a carnival and hopes to raise $500. Child tickets cost $3, and adult tickets cost $5. If the school sells <i>x</i> child tickets and <i>y</i> adult tickets, then the equation 3<i>x</i> + 5<i>y</i> = 500 expresses the fact that the school raised exactly $500 from ticket sales.",
  items:[
    {id:"u2l6_1",label:"1",stem:"Solve the equation for <i>x</i>.",type:"expr",vars:["y"],answer:"(500-5*y)/3",display:"x = (500 - 5y)/3",ph:"Type x = …",unit:"Type your answer, like x = (10 + 2y)/4. Use / for division.",
      wrong:[{e:"500-5*y/3",d:"x = 500 - 5y/3",tag:"Divided only the 5y term by 3"},
             {e:"(500+5*y)/3",d:"x = (500 + 5y)/3",tag:"Sign error when moving 5y"},
             {e:"500-5*y",d:"x = 500 - 5y",tag:"Didn’t divide by 3"},
             {e:"(5*y-500)/3",d:"x = (5y - 500)/3",tag:"Subtracted in the wrong order"},
             {e:"3*(500-5*y)",d:"x = 3(500 - 5y)",tag:"Multiplied by 3 instead of dividing"}]},
    {id:"u2l6_2",label:"2",stem:"When might it be helpful to rewrite the equation this way?",type:"mc",correct:"a",options:[
      {id:"a",t:"When you know the number of adult tickets and want to find how many child tickets to sell to raise exactly $500"},
      {id:"b",t:"When you want to find the total money raised from any number of tickets",tag:"Described finding the total, not solving for a ticket count"},
      {id:"c",t:"When the school sells no tickets at all",tag:"Didn’t connect the rewrite to a useful question"},
      {id:"d",t:"It is never helpful to rewrite the equation",tag:"Didn’t see why solving for one variable is useful"}]},
    {id:"u2l6_r1",label:"",stem:"<b>Reflection:</b> Today my participation was…",type:"mc",scored:false,row:true,options:[{id:"h",t:"High"},{id:"m",t:"Medium"},{id:"l",t:"Low"}]},
    {id:"u2l6_r2",label:"",stem:"…because (optional)",type:"open",samples:["I asked questions.","I was tired.","I worked with my group.","Not sure."]}
  ]
},

/* ---------- Lesson 8 ---------- */
{
  id:"u2l8", title:"Lesson 8: How Many Hours of Work?", keyStatus:"final",
  intro:"Lin’s job pays $8.25 an hour. She also gets paid $10 per week to cover uniform cleaning. To meet her budget, Lin needs to be paid at least $175 per week.",
  items:[
    {id:"u2l8_1",label:"1",stem:"Let <i>h</i> be the number of hours Lin works in a week. Which inequality represents this situation?",type:"mc",correct:"a",options:[
      {id:"a",t:"8.25<i>h</i> + 10 ≥ 175"},
      {id:"b",t:"8.25<i>h</i> + 10 ≤ 175",tag:"Reversed the inequality (at least vs. at most)"},
      {id:"c",t:"8.25(<i>h</i> + 10) ≥ 175",tag:"Applied the $10 to every hour"},
      {id:"d",t:"8.25 + 10<i>h</i> ≥ 175",tag:"Swapped the hourly rate and the weekly pay"}]},
    {id:"u2l8_2",label:"2",stem:"What is the fewest number of hours per week Lin needs to work to meet her budget?",type:"num",ph:"Number of hours",accepted:[20],wrong:[{v:165,tag:"Subtracted the $10 but didn’t divide by 8.25"},{v:21.2,tol:0.06,tag:"Forgot to subtract the $10 first"}]},
    {id:"u2l8_x",label:"",stem:"Show or explain your reasoning. (Optional, not scored)",type:"open",samples:["175 - 10 = 165, then 165 / 8.25 = 20.","I tried different hours.","I solved the inequality.","Not sure."]},
    {id:"u2l8_r",label:"",stem:"<b>Reflection:</b> How do you feel about your level of input during class today (verbal or non-verbal)? What is something you’d like to do differently in the future?",type:"open",samples:["I think I shared enough.","I want to ask more questions.","I could talk more.","Not sure."]}
  ]
}

]});
})();
