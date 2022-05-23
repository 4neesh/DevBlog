---
title: 'Options contract and their pricing'
date: 2021-09-13
author: 'Aneesh Mistry'
subtitle: 'Understand the Options contract is and how it is priced'
time: '8'
tags:
- Finance
---

<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand what an Options contract is and why it is used.<br>
&#8226; Take a brief look into the components of an Options contract that are used to derive the price.<br>

<br>
<h4>What is an Options contract</h4>
<p>
An Options contract is a derivative that defines an agreement between two counterparties where the buyer of the contract has the <u>option</u> and NOT the obligation, to buy or sell a particular asset at a particular quantity within a certain time frame.
</p>
<p>
Using the above description, when we create an Options contract, there are 4 key variables defined:<br>
1. If the buyer of the contract has the option to <strong>buy</strong> or <strong>sell</strong> the asset.<br>
2. What the price of the asset will be when bought or sold, known as the <u>Strike price</u>.<br>
3. The <u>quantity</u> of the asset to be bought or sold.<br>
4. The <u>maturity</u> of the Options contract to when it is no longer valid.
</p>
<p>
The times at when the Options contract can be exercised is determined by its type. 'European' Options can be exercised only at expiry, whereas 'American' Options can be exercised at any time before. 'Bermudan' Options on the other hand will have set intervals when it can be exercised leading up to the maturity (such as once per month).
</p>

<br>
<h4>Buy and Sell contracts</h4>
<p>
As mentioned above, an Options contract will entitle, but not obligate the buyer to either buy or sell a particular asset at a strike price by the maturity date.<br>
An option contract that entitles the holder to buy an asset is called a <strong>Call option</strong>. An option contract that entitles the holder to sell an asset is called a <strong>Put option</strong>.
</p>
<p>
Option contracts are not limited to only a single market or participant and are traded for a variety of purposes due to their many advantages that we will discuss later.
Options contracts exist for a huge range of markets including commodities, stocks, bonds, interest rates, currencies and also swaps, known as 'Swaptions'.
</p>
<p>
One example of Options contracts traded without an exchange are <u>Dealer options</u>. Dealer options are used to trade commodities over the counter (OTC) without a centralised exchange. The benefit of OTC trading are the personalised terms that can be agreed upon, thus enabling both counterparties to achieve a more bespoke agreement. 
</p>
<p>
The variety of options contract available to investors make them highly personalised and present one key advantage to using them.
</p>
<br>
<h4>Why Options are used</h4>
<p>
So we can now understand what an Options contract is, what its key properties are and the many forms it can take in the market, but why are they used?
</p>
<p>
As repeated in this blog, the Options contract provides the right, and not the obligation for a counterparty to transact upon the terms of the derivative.<br>
This property of an Options contract means they can be used with huge flexibility and present ample opportunities for both hedging and speculative incentives. 
</p>
<p>
<strong>Hedging strategies</strong><br>
A hedging strategy may see a counterparty use an Options contract to protect themselves from both the upward and downward movement of an interest rate.<br>
For example, if we take a floating point interest rate that is currently 0.16%, counterparty A may agree with counterparty B an Options contract that allows counterparty A to receive payment each time the interest rate exceeds 2% and falls below 1.12%. This hedging strategy is known as a cap and floor, where counterparty A are capping the maximum interest rate they are exposed to at 0.2% and the minimum rate of 0.12%.
</p>
<p>
Counterparty A will pay a premium to counterparty B for the Options contract, but the benefit to counterparty A is the protection from interest rate volatility if it were to exceed either boundary. 
</p>
<p>
<strong>Speculative strategies</strong><br>
On the contrary, the Options contract can enable an investor to benefit from the movement of an underlying asset's price, as they are able to exercise with their right when the price is deemed 'in the money'.<br>
<i>In the money: An options contract that can be exercised to achieve a profit and has 'intrinsic value'.</i>
<br>
As a speculator, the benefit of an Options contract can present unlimited upside, with a limited downside (the premium paid for the contract). For example, if an Options contract enables an investor to buy 100kg of wheat for £1000, and the cost of the options contract is just £50, the investor will have a limited downside of £50, but a potential upside determined by the upward price of wheat within the market. If 100kg of wheat rises to £2000, the investor can make a £950 profit from exercising their options contract, whereas if the price of wheat remains below £1000, they will only ever lose the £50 premium paid up-front. 
</p>
<p>
When considering a hedging or speculative strategy, the benefit is realised by the holder of the contract only when it is exercised. At expiry, the Options contract is deemed worthless, and the benefit of the Options contract creation lies with the seller of the contract. With this in mind, you may wonder how the price of an Options contract is derived, and the factors that play into its value throughout it's life. 
</p>

<br>
<h4>Options contract pricing</h4>
<p>
The <a href="https://www.investopedia.com/terms/b/blackscholes.asp">Black Scholes</a> and Binomial model are popular mathematical models used to calculate the price of an Options contract. The pricing of an Options contract is derived from the probability that the Options contract can be exercised in the money. Each model has its own advantages and approach:
</p>
<p>
<strong>Black Scholes</strong><br>
Developed in 1973, the Black-Scholes-Merton model uses risk factors and time-value to price <u>European Call Options</u> (can only be exercised at expiry).<br>
The analytical model uses 5 variables: strike price, current price, time to expiry, risk free rate of return, and volatility.<br>
The model is based upon the assumption that asset prices have a lognormal distribution (bell curve) with a constant drift and volatility. Using the input variables, the Options price is calculated against the assumptions of constant volatility, unpredictable market movements, and lognormal price distribution.
</p>
<p>
<strong>Binomial Model</strong><br>
The Binomial model is an iterative model that accounts for multiple periods of time for exercise, and is thus an approach used for American Options. While the Binomial model also uses the inputs from the Black Scholes model, it is less complex as it uses a Binomial tree to calculate the value of an Option given two possibilities: underlying price movement goes up or down. The model, shaped like a lattice, can then be split into intervals that represent that time periods for the underlying price movement to happen, thus creating the iterative Options price predictions. The Binomial will build a map of different possible scenarios for the iterative movement of the underlying price of the asset at different time intervals. Each price movement will then represent a present value. 
</p>
<br>
<h4>Options value and sensitivities</h4>
<p>
The Options pricing models make use of multiple variables that represent the multitudes of variance a standard Options contract will be exposed to.
</p>
<p>
The complexity of Options pricing has lead to the inception of the 'Greeks', four risk measures used to quantify the sensitivity of the price to an external factor. <br>
The 4 measures are:<br>
1. Delta: price sensitivity of the option to the asset price<br>
2. Theta: price sensitivity of the option with time<br>
3. Gamma: the rate of change of Delta<br>
4. Vega/Kappa: rate of change between an option and the asset implied volatility<br>
</p>
<p>
In my next blog post, I will explore the Greeks and their relationship with 'intrinsic' and 'extrinsic' value to the investor to further understand how an Options price can be so widely influenced.
</p>

<br>
<h4>Conclusion</h4>
<p>
In this post, we have looked at the Options contract and how it can be used for both speculative and hedging purposes to provide a variety of benefits to both sides of the contract. Not only can Options contract be used for a variety of benefits, but they also come in many shapes and sizes with the right to buy or sell across a variety of markets and with varied opportunities for exercise.
</p>
<p>
The benefit of 'optionality' from the contract exposes the price of the Options contract to multiple variances within the market and time that can influence their price. As a result, complex mathematical models are used to best estimate the present value of the Options contract within the market. When reviewing Option prices, the sensitivities that are exposed to the price have led to the use of the 'Greeks' a group of well defined variances to the Option price. 
</p>