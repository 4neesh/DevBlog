---
title: 'Obtaining a fair price with the binomial asset pricing model'
date: 2023-12-10
author: 'Aneesh Mistry'
subtitle: 'Subtitle'
time: '10'
tags:
- Finance
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<p>
Intro
The binomial asset pricing model is used to understand arbitrage pricing theory and probability. 
We start by taking a general one period model that begins at time 0 and ends at time 1. At time 0, we have a security who's price is denoted by S0 where the price will change at time 1 to one of two values. 

The price change of a stock
These values are denoted by a head or tail (H and T) at time period 1: S1(H) and S1(T). The price of the stock at Time 1 is determined by a coin toss, however the coin is not deemed to be fair, and therefore the probability of Heads can be denoted by p, where the probability of Tails is q, equal to (1-p).
We will assume that Heads will create a rise in the stock price, and a Tails will cause it to fall. The factor by which the price rises or falls will be denoted by u and d (abbreviations for up and down). 
The value of u is equal to S1(H)/S0, and the value of d is S1(T)/S0. If the security value is to rise, it would have a factor of u as greater than 1, and if it were to fall, the factor of d would be less than 1. 

Introducing interest rate and the money markets
Interest rate in the binomial asset pricing model comes with several assumptions and plays an important role in the funding for the purchase of a security. When we define the price of a security, we will consider interest rate as this will influence the cost of borrowing from the money market to fund the purchase, equally it will represent the returns that can be made from investing within the money market. We assume that the cost to borrow and invest in the money market are equal. With regards to T0 and T1, investing 1 pound at T0 will yield 1+r at T1, where r is the interest rate. 

Arbitrage
Arbitrage exists as an opportunity to earn money from nothing without a risk of loss. Such an opportunity rarely exists within a market, and if it does, then we would see it used and eliminated within an efficient market. As a result, we would need to assume that the factor of d in a security is less than the return that can be made from an investment in the money market:


```math
0 < d < 1+r < u
```

If the d factor for our security was equal to and greater than 1+r, we would see an arbitrage opportunity as we could borrow from the money market at 1+r, invest in the security, and always realise a gain greater than the repayment fo 1+r at T1. 

Replicating a European Option with two transactions
Before we begin looking at how we can begin calculating the fair price of a security, let's look at how we can replicate a European call option with two transactions. This will help us to better understand the construction of a binomial price. 
A European call option provides the right, but not obligation to purchase a security at T1 for price K. We will assume that S1(T) < K < S1(H), as the option would be worthless at T1 if strike is not greater than the value provided a tails result. The value of the European option at T1 is therefore (S1 - K)<sup>+</sup>. The <sup>+</sup> indicates the value is the greater of 0 and our expression in the brackets. What we would like to know, is the price required for the option, to have that right to exercise it, at a fair price. 

Example
If we take Security A which has a current price (S0) of 4, Strike (K) of 5, up-factor (u) of 2, and down factor (d) of 0.5 and an interest rate of (0.25). S1(H) = 8, S1(T) = 2.<br>
We start with an initial wealth X<sub>0</sub> of 1.20 and want to buy $\delta$<sub>0</sub> 0.5 shares of the stock at T0. <br>
We will need to borrow 0.8 in the money market to fund the purchase of 0.5 stock (2) to leave us with a cash position of: (1+r) (X<sub>0</sub> - $\delta$<sub>0</sub>). This leaves us at -0.8(1+r), 
</p>
<br>
<h4></h4>
<p>


</p>
<br>
<h4></h4>
<p>


</p>

<br>
<h4>Summary</h4>
<p>


</p>
