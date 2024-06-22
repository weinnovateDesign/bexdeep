---
postId: "tag:blogger.com,1999:blog-8061911113731935185.post-8757300274514030338"
title: "Basic Hypotheses Testing"
slug: "basic-hypotheses-testing"
publishedDate: "2008-11-26T08:25:00.000-08:00"
layout: "post"
---

Hypothesis testing is one of the most interesting and important statistical
tools useful in suggesting a decision or coming to a conclusion about an
experiment. Where is it used? Its used in all kinds of fields ranging from
scientific studies to economic analyses to business and so on. So what is this
testing any way?  

  

Skipping the theory which you will find in any books or Internet sites. I will
try explaining from the point of view of a problem rather than a solution.
That way, the understanding becomes more better - at least that is what I
think. OK, so lets start it.

  

Lets suppose, one analytics purposed a marketing campaign that is going to
increase the sales to 300 per months in each outlet. After the campaign was
carried out the result was as follow:

  

Number of outlet surveyed (n) = 50

Average number of sales (X) = 295

Standard Deviation (S.D) = 20

  

Now, how would you react to the analyst. Was he correct or was he wrong? Hmmm.
That's funny, because his hypothesis was 300 but the average was 295 very
close but not 300.

  

So, there are two options, either he is correct or he is wrong. But, in
statistics and in these kind of calculation, it is very difficult to prove
either, therefore, we decide in terms of by how much percentage was he right
and by how much percentage he was wrong. We call this the [significance
level](http://stattrek.com/Help/Glossary.aspx?Target=Significance%20level).

  

There are many types of testing depending upon the characteristics of variable
and the hypotheses. For example, checking the hypotheses of
[proportion](http://en.wikipedia.org/wiki/Proportion_\(architecture\)),
difference between means, [goodness of fit](http://stattrek.com/AP-
Statistics-4/Goodness-of-Fit.aspx?Tutorial=Stat) etc.

  

So, do you get the problem. Its the testing of the hypothesis and giving a
verdict. In the above example, the hypothesis looks very close but its
significance level must be check to verify that the difference in the mean, is
insignificance to prove the analyst was right.

  

Now, follow the following testing method.

  

1\. State the [Null
](http://stattrek.com/Help/Glossary.aspx?Target=Null%20hypothesis)and
[Alternative
](http://stattrek.com/Help/Glossary.aspx?Target=Null%20hypothesis)hypothesis

  

In this example our:  

Null Hypothesis

u is equal to 300

u is not equal to 300

u is the hypothesised mean

  

This is also known as [two-tailed test](http://en.wikipedia.org/wiki/Two-
tailed_test).

  

2\. Choose the significance level

  

Usually the significance level is chosen around 0.01, 0.05, 0.10. The lesser
the value the more less margin for errors.  

Lets choose 0.05.  

  

3\. Choose the test method

  

There are many testing methods available in the theory. For this we chose the
simple, one sample t-Test. It measures the difference in the observed and
hypothesised mean value.  

  

4\. Run the test either manually or in software

  

Lets calculate:  

  

Standard Error (S.E) = S.D / sqrt(n) = 2.83  

DF (degree of freedom) = n-1 = 49  

t = (X-u) /S.E = 1.77 where X is the observed mean.  

  

5\. Calculate the P-Value

  

Now we calculate the P-value. You can use [t-Distribution
calculator](http://www.stat.tamu.edu/~west/applets/tdemo.html) or a table to
find the P value. P-Value is the probability that the t-score having a degree
of freedom is less than -1.77 and greater then1.77. This choice is due to the
fact that we are doing two-tailed test.  

  

P(t<-1.77) = 0.04 and P(t>1.77) = 0.04.

Thus P value = 0.04 + 0.04 = 0.08  

  

6\. Interpret the result

  

Since the P-value is greater than our significance level, we cannot reject the
Null Hypothesis.  

  

So the verdict is that the Analyst was correct within the significance of .08.

  

There are two kind of error that we can happen in this process.

  

First, we conclude that hypothesis is right when it is wrong.

Second , we conclude that hypothesis is wrong when it is right.

  

The above error has been named as I and II.

  

Well, the above analysis was not mean to teach how to carry a hypothesis test
but to clarify the point of carrying out the test in the very first place.

  

All the other statistic test are used so that we have a quantitative view of
the problem and make decision depending upon the empirical value, as this
gives us more confidence in our decision. But, as always I say, we need to
utilize more than just numbers but also intuition.

  

Lastly, what would it mean to test the hypotheses on zero level of confidence.
It would mean that the value of observed mean must be exactly equal to the
hypothesised value for the hypothesis to be correct and there is no other
option. It is an qualitative analysis.

Hope it was helpful.  

  

