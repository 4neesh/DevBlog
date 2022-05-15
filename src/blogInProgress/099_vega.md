---
title: 'xxx'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Vega and the Greeks</h4>
<p>
'The greeks' are defined within finance as a group of different dimensions of risk that are taken when opening a position with an options contract. 
There are 4 common risk exposures within the greeks: Delta, Gamma, Theta and Vega, each represent a different element of risk that is exposed from the contract. 
</p>
<p>
This blog will focus upon Vega, which is a measure upon an option's sensitivity to the implied volatility of the asset. 
</p>

<br>
<h4>The options contract</h4>
<p>
An options contract is a derivative that provides the buyer of the contract the <u>right</u>, but not the <u>obligation</u> to exercise the promise of the contract. At a very high level, an options contract can be split into two: a <strong>call option</strong> which provides the buyer the right to buy an asset at a stated price within the time-frame, and a <strong>put option</strong> which provides the buyer the right to sell an asset at a stated price within the time-frame. 
</p>
<p>
Option contracts come in different 'flavours'. You can have European and American options; where a European option can only be exercised at the contracts maturity, whereas the American option can be exercised at any time up to maturity. Contrary to both, there are also Bermudan options, that can be exercised at predetermined dates (often one day per month) up to the maturity.
</p>

<br>
<h4>Option pricing</h4>
<p>
The price of an option represents the 'premium' paid by the buyer to have the right to exercise the contract. 
The price of the option is determined by many variables including the current market price of the asset, the strike price for the asset in the contract, volatility in the market and the time until the contract expires. 
</p>
<p>
The volatility in the market 
</p>

<br>
<h4>Vega - Option volatility</h4>
<p>
Vega is a measurement that is used to capture the price sensitivity of an option to a change of 1% in the underlying asset's implied volatility.
</p>
<p>
Implied volatility represents the view the market has on the likelihood that an asset's price will change. Implied volatility differs from historical/statistical volatility that reflects upon the past market changes in the asset's price. 
</p>
<p>
Implied volatility is denoted by the sigma (σ) symbol. The volatility of an asset is likely to be higher during bearish markets, where equity prices are expected to fall, and lower during a bullish market. The volatility of an asset price does not represent the direction of the price change, it can go up or down, however the size of the swings will be larger or smaller depending on implied volatility. 
</p>
<p>
Implied volatility has an impact on Options prices.
The implied volatility provides a probability when estimating future option prices. 
As implied volatility represents market opinion, this relationship can help impact options pricing. 
Higher implied volatility will result in higher premiums on the Option. 
</p>


<p>
 Intrinsic value measures the profitability of the options contract, whereas the time value reflects the asset's volatility during the life of the contract. 
</p>
<p>
Through the life of the option contract, the price of the option contract will change as the market price of the underlying asset changes. For example, the price of an option contract to buy at a certain price will increase as the market price of the asset rises. This is because the option can be deemed more valuable as it is more likely to become in-the-money. The same applies to a put contract, where the value will fall as the market price rises, as selling for a pre-defined price will create further losses to the counterparty. 
</p>
<p>
The extrinsic value on an options contract will correlate with the time to expiry. The longer the option has until expiry, the more opportunity it has to become in-the-money and thus present the owner of the contract with a profitable position. The options price will typically lose one third of its price within the first half of its life. 
</p>
<p>
Given the influence of market price movements in an asset and the sensitivity of the options price to its time to expiry, the volatility of the underlying asset's price will therefore have an important role to play in how susceptible the options price is to change. An asset with high volatility will sustain its price better with time, as the opportunity to become in-the-money can remain likely. An asset with low volatility will create lower time-value as their price movement will require more time to accumulate. 
</p>

<br>
<h4>The Greeks</h4>
<p>
The sensitivity and variety of influences upon an Options price has lead to the use of the Greeks to denote the various sensitivities an Options price may have. <br>
The Greeks are:<br>


Delta
Vega

</p>
<p>
I will follow this blog with a future post on the Greeks as they will require further detail for explanation. 
</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>