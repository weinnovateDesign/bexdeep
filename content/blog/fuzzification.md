---
postId: "tag:blogger.com,1999:blog-8061911113731935185.post-7784809548419369702"
title: "Fuzzification"
slug: "fuzzification"
publishedDate: "2008-11-16T04:08:00.001-08:00"
layout: "post"
---

[](http://2.bp.blogspot.com/_UYUaEitRq54/SSAjO3lYUVI/AAAAAAAAARU/ji7p93PhIk8/s1600-h/Fuzzy.jpg)![](http://3.bp.blogspot.com/_UYUaEitRq54/SSAjEeS_NNI/AAAAAAAAARM/xuKvypBZQUo/s400/Fuzzy1.png)

Any information, in a form of numbers, has to be first understood in terms of
its physical nature.  

  

For example, let say : 40 degree Celsius. What does it mean? I mean is it cold
or hot? You will be amazed that it is really difficult to categories
temperature in terms of HOT or COLD, because we human beings are not so
critical on there thought process, we are in a sense [FUZZY
](http://en.wikipedia.org/wiki/Fuzzy_logic)about it.

  

But the computer program is not a human being. If a program was written to
give you the answer to the above question than the program would either
respond by saying its HOT or COLD, by the criteria written by the programmer.  

  

Example:

  

If (temperature > 50 ) then

PRINT "HOT"

else

PRINT "COLD"

end.

  

Fair enough. These kinds of code are written every time to categories the
variables or to make a [Decision making
System](http://en.wikipedia.org/wiki/Decision_making). The above method has
its own merits and demerits. Its a classical way of analysing a data.  

  

Now allow me to introduce you to the other way of analysing a data. It is not
really a new method, but is gaining popularity in being implemented into
different systems. It is called [Fuzzy
Logic](http://en.wikipedia.org/wiki/Fuzzy_logic). Do not be confused by the
name. When you understand the method, you will find that its a simple
statistical scoring method, or simple percentile concept. The process off
course is known as [FUZZIFICATION](http://www.atp.ruhr-uni-
bochum.de/rt1/syscontrol/node122.html).

  

Lets apply it to the above example.

  

Now, instead of categorising the quantity as HOT or COLD. We start by defining
a completely new set of attributes to the quantity. In this example I would
prefer :

  

{COLD, COOL, WARM, HOT}

or

{Very COLD, COLD, Less COLD, Neutral, less HOT, HOT, Very HOT}

  

In this way, you can categories any way you like it, but be careful, your
choice of categories is going affect the overall [decision
system](http://knol.google.com/k/bhupendra-khanal/decision-management-
system/2syr067rdoy9b/39#), so BE CAREFUL.

  

So what do you do, now? Well, you start by scoring each category by checking
the quantity. I am going to use the upper category as it is simpler.

  

Example:

  

So for 50 degree Celsius :

COLD = 25%  

COOL = 30%

WARM = 60%

HOT = 30%

  

This scoring has to be done in a very precise way and not haphazardly. What
these percentage mean is that 50 degree Celsius is more of a WARM than a COLD
or HOT. So instead of saying HOT or COLD, we have described the temperature in
terms of four different attributes.

  

So for 100 degree Celsius :

COLD = 0%  

COOL = 0%

WARM = 25%

HOT = 100%

  

Here, 100 degree Celsius is more HOT than COLD, so COLD and COOL is given a
score of 0%.

  

The score can be a number between 0-1 or 0%-100%, as you like it.

  

![](http://2.bp.blogspot.com/_UYUaEitRq54/SSAjO3lYUVI/AAAAAAAAARU/ji7p93PhIk8/s400/Fuzzy.jpg)

If you look into the above graph, you can see that you have 4 curves for each
category.

  

Each curve has its own characteristics. Its known as [Membership
Function](http://en.wikipedia.org/wiki/Membership_function_\(mathematics\)). I
have used non-linear curve, but for simplicity even straight lines can be
used. More abstract you make the curves, the more complicated is your
calculation going to be.

  

So when you are scoring the variables, you just need to look over the X-axis
and check the point and then move vertically upwards and start noting the
values of each category. I have drawn three dotted red line to show you the
example. lets start from the left wards.

  

The first line, which is less than 50, shows a high score for Cold and Cool
but zero for other. The second line, which is around 50 has the score value
for all the category but is very less. The last line, which is around 100, has
a high score value for the Warm and Hot but not for other.

  

In this way, all the quantities can be scored into different values.

  

What is the advantage of going through such a long method? We have increased
the number of variables to analyses the single variable. In this way, we can
look at different attributes of the single variable and than make a decision,
in this way our decision is going to be more valuable than before, and also
more appropriate.

  

The whole process of generating categories and scoring the variable is called
the [FUZZIFICATION](http://www.atp.ruhr-uni-
bochum.de/rt1/syscontrol/node122.html) process. It is a [Statistical
Process](http://en.wikipedia.org/wiki/Statistical_method), which can be
realised in any computer program.

  

This is the first method in the whole process of making a [decision
system](http://knol.google.com/k/bhupendra-khanal/decision-management-
system/2syr067rdoy9b/39#). Others are:

  

1\. Designing [Rule-Based System](http://en.wikipedia.org/wiki/Rule_base)

2\. [Defuzzification](http://en.wikipedia.org/wiki/Defuzzification) Process  

  

During the [fuzzification](http://en.wikipedia.org/wiki/Fuzzy_Mathematics)
process, we could have many types of membership functions, each having their
own advantages over other.

  

But in a very simple words, it is the method of getting a good information on
the variable, so that we get a clear picture of it.

  

  

  

