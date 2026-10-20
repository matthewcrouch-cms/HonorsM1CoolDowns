/* Unit 4 cool downs (answers from the CMS Unit 4 answer key). */
(function(){
const REL3 = (id,label,pair,correct,tags) => ({id,label,stem:pair,type:"mc",correct,options:[
  {id:"w",t:"A very weak or no relationship",tag:tags.w},
  {id:"s",t:"A strong relationship that is not a causal relationship",tag:tags.s},
  {id:"c",t:"A causal relationship",tag:tags.c}]});

(window.UNITS = window.UNITS || []).push({id:"u4", title:"Unit 4", cds:[

/* ---------- Lesson 1 ---------- */
{
  id:"u4l1", title:"Lesson 1: How Bad Is It, Doc?", keyStatus:"final",
  intro:"Doctors suspect a strain of bacteria found in the hospital is becoming resistant to antibiotics. They put various concentrations of an antibiotic in petri dishes and add some of the bacteria to allow it to grow. In the dishes, the bacteria grow into groups called colonies. After some time, the doctors return to the petri dishes and count the number of colonies for the different amounts of antibiotic. The correlation coefficient of the data is <i>r</i> = −0.83.",
  items:[
    {id:"u4l1_1",label:"1",stem:"What does the <b>sign</b> of the correlation coefficient tell you about the relationship between the number of bacteria colonies and the concentration of antibiotic?",type:"mc",correct:"a",options:[
      {id:"a",t:"It is a negative relationship: when the concentration of antibiotic is higher, there tend to be fewer colonies"},
      {id:"b",t:"It is a positive relationship: more antibiotic goes with more colonies",tag:"Read a negative r as a positive relationship"},
      {id:"c",t:"There is no relationship between the two",tag:"Read the negative sign as no relationship"},
      {id:"d",t:"The number of colonies is 0.83 less than the concentration",tag:"Read r as a difference between the variables"}]},
    {id:"u4l1_2",label:"2",stem:"What does the <b>numerical value</b> of the correlation coefficient tell you?",type:"mc",correct:"a",options:[
      {id:"a",t:"It is a strong relationship, since −0.83 is fairly close to −1"},
      {id:"b",t:"It is a weak relationship, since the value is negative",tag:"Thought a negative value means a weak relationship"},
      {id:"c",t:"It is a weak relationship, since 0.83 is less than 1",tag:"Thought anything less than 1 is weak"},
      {id:"d",t:"It is a perfect relationship, since it is close to 1",tag:"Thought a value near 1 in size means a perfect fit"}]},
    {id:"u4l1_3",label:"3",stem:"A follow-up study finds <i>r</i> = −0.94. Which study suggests a stronger relationship?",type:"mc",correct:"a",options:[
      {id:"a",t:"The scientists’ study, because −0.94 is closer to −1"},
      {id:"b",t:"The doctors’ study, because −0.83 is greater than −0.94",tag:"Compared the values instead of their distance from 0"},
      {id:"c",t:"They are the same, because both are negative",tag:"Ignored the size of the correlation"},
      {id:"d",t:"You can’t tell from the correlation coefficient",tag:"Didn’t use the correlation coefficient to compare strength"}]},
    {id:"u4l1_r1",label:"",stem:"<b>Reflection:</b> When we work in groups in math class I feel…",type:"mc",scored:false,options:[{id:"a",t:"Excited"},{id:"b",t:"It does not matter to me"},{id:"c",t:"Not excited"}]},
    {id:"u4l1_r2",label:"",stem:"I feel this way because… (optional)",type:"open",samples:["I learn from my group.","I like working alone.","It depends who I’m with.","Not sure."]}
  ]
},

/* ---------- Lesson 2 ---------- */
{
  id:"u4l2", title:"Lesson 2: Fresh Air", keyStatus:"final",
  intro:"The data show the (number of trees in a forest, oxygen produced). Use technology to find the regression equation <i>y</i> = <i>mx</i> + <i>b</i>. <table class='t'><tr><th>Number of trees</th><th>Tons of oxygen produced</th></tr><tr><td>148</td><td>16.43</td></tr><tr><td>175</td><td>25.64</td></tr><tr><td>190</td><td>23.28</td></tr><tr><td>200</td><td>29.2</td></tr><tr><td>202</td><td>21.41</td></tr><tr><td>425</td><td>60.56</td></tr><tr><td>505</td><td>50.75</td></tr><tr><td>528</td><td>74.45</td></tr><tr><td>562</td><td>62.66</td></tr><tr><td>585</td><td>84.24</td></tr></table>",
  items:[
    {id:"u4l2_1a",label:"1a",groupStem:"1. Round the regression equation to the nearest hundredth.",stem:"Slope, <i>m</i>:",type:"num",ph:"Number",accepted:[0.13],tol:0.011,wrong:[{v:-0.19,tol:0.02,tag:"Gave the y-intercept as the slope"},{v:7.7,tol:0.5,tag:"Swapped x and y in the regression"}]},
    {id:"u4l2_1b",label:"1b",stem:"<i>y</i>-intercept, <i>b</i>:",type:"num",ph:"Number",accepted:[-0.19],tol:0.021,wrong:[{v:0.13,tol:0.011,tag:"Gave the slope as the intercept"},{v:0.19,tol:0.02,tag:"Dropped the negative sign"}]},
    {id:"u4l2_2",label:"2",stem:"Interpret the slope in context. Is the interpretation reasonable?",type:"mc",correct:"a",options:[
      {id:"a",t:"Each additional tree goes with about 0.13 more tons of oxygen produced. This seems reasonable"},
      {id:"b",t:"Each additional ton of oxygen goes with 0.13 more trees. This seems reasonable",tag:"Swapped x and y in the interpretation"},
      {id:"c",t:"Each additional tree goes with about 0.13 more tons of oxygen, but this is not reasonable",tag:"Said a reasonable slope is unreasonable"},
      {id:"d",t:"With no trees, the forest produces 0.13 tons of oxygen",tag:"Confused the slope with the intercept"}]},
    {id:"u4l2_3",label:"3",stem:"Interpret the <i>y</i>-intercept in context. Is the interpretation reasonable?",type:"mc",correct:"a",options:[
      {id:"a",t:"With 0 trees, the model predicts −0.19 tons of oxygen. This is not reasonable, since 0 trees should produce 0 tons"},
      {id:"b",t:"With 0 trees, the model predicts −0.19 tons of oxygen. This is reasonable because it is close to 0",tag:"Accepted a negative amount of oxygen as reasonable"},
      {id:"c",t:"Each tree removes 0.19 tons of oxygen",tag:"Read the intercept as a rate"},
      {id:"d",t:"With no oxygen, there are −0.19 trees",tag:"Swapped x and y in the interpretation"}]},
    {id:"u4l2_r",label:"",stem:"<b>Reflection:</b> In your own words, how might you describe how to determine if a line is a bad fit, good fit, or best fit? If you are unsure, what is causing confusion for you?",type:"open",samples:["Closer points mean a better fit.","The best fit line has the smallest residuals.","I’m confused about residuals.","Not sure."]}
  ]
},

/* ---------- Lesson 3 ---------- */
{
  id:"u4l3", title:"Lesson 3: Just Cause", keyStatus:"final",
  intro:"For each pair of variables, decide whether there is a very weak or no relationship, a strong relationship that is not a causal relationship, or a causal relationship.",
  items:[
    REL3("u4l3_1","1","Number of snowplows owned by a city and mitten sales in the city","s",{w:"Missed that a third variable (like snowy weather) links them",c:"Called a relationship caused by a third variable causal"}),
    REL3("u4l3_2","2","Number of text messages sent per day by a person and number of shirts owned by the person","w",{s:"Saw a strong relationship where none is likely",c:"Called two unrelated variables causal"}),
    REL3("u4l3_3","3","Price of a pizza and number of calories in the pizza","s",{w:"Missed that size and toppings link price and calories",c:"Called a relationship caused by size and toppings causal"}),
    REL3("u4l3_4","4","Amount of gas used on a trip and number of miles driven on the trip","c",{w:"Missed that driving farther uses more gas",s:"Missed that driving farther causes more gas use"}),
    {id:"u4l3_x",label:"",stem:"Explain your reasoning for any pair. (Optional, not scored)",type:"open",samples:["Snow causes both snowplows and mitten sales.","Gas use is caused by distance.","Texts and shirts aren’t related.","Not sure."]},
    {id:"u4l3_r",label:"",stem:"<b>Reflection:</b> Consider your own experiences. What are one or two examples of associations you have seen or experienced? What are one or two examples of causal relationships?",type:"open",samples:["Ice cream sales and sunburns.","Studying and grades.","Practice and getting better.","Not sure."]}
  ]
}

]});
})();
