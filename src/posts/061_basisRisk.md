---
title: 'An introduction to basis risk'
date: 2021-07-26
author: 'Aneesh Mistry'
featuredImage: ../images/061_edinburgh.jpg
subtitle: 'Understand how basis risk is derived and why it is important to consider with hedging strategies.'
time: '10'
tags:
- Finance
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; What is basis risk.<br>
&#8226; How basis risk is created.<br>
&#8226; Why basis risk is so frequently encountered.<br>


<br>
<h4>Spot prices vs Futures prices</h4>
<p>
To understand how basis risk, we need to first understand the difference between a spot price and a futures price. 
A spot price, is the price paid for an commodity, asset or security at a given time. For example, when you go shopping at a supermarket, you're in theory paying the spot price for your groceries.<br>
A futures price is the price for an amount of a specific asset to be delivered at a certain date in the future. 
For example, a spot price for a StockA might be £2.00 today, but a futures price for it might be £2.03 to be delivered in 5 weeks time. One security can have many different futures prices for it as the quantity and time-frame for when the asset will be delivered will be different. 
</p>
<br>
<h4>The futures contract</h4>
<p>
A futures contract is a derivative that is traded between two counterparties as an agreement to buy or sell an underlying quantity of a commodity, asset or security at a certain price and at a certain point in time in the future. The futures contract is traded
through an exchange. A similar kind of derivative is a forward contract, which is traded without an exchange, and is instead traded over the counter.<br>
The futures contract serves both counterparties:
</p>
<p>
First, the counterparty that sells the contract are fixing a price for which a certain amount of an asset at a point in the future will be delivered and sold.<br>
Second, the counterparty buying the contract are securing the delivery for the amount of the asset at a point in the future.<br>
The time which the exchange happens is known as the expiry. The price of the future contract will represent the price of the asset. For example, I could pay £100 for a future contract that represents the delivery of 10kg of chicken breast in 1 weeks time. The buyer of the futures contract (me) is therefore hedging the risk that the price will increase from when the futures contract is agreed upon (that the price of 10kg chicken breast does not rise beyond £100 in 1 weeks time). As a result, the I am protecting myself from <strong>price risk</strong>.
</p>
<p>
The motivation for buying a futures contract can also be used for speculation. For example if an investor believes the price of an asset may rise to more than the market expect, they can purchase a futures contract to secure the delivery of the asset at a cheaper price than they expect it to rise to, and then can make a subsequent profit from the resale of the asset in the market at expiry. 
</p>
<p>
How are futures used in the real world?<br>
A common example I refer to would be any airline company that would like to secure the delivery of jet fuel for the immediate and long-term future. By using a futures contract, they can secure the cost of jet fuel, and better estimate their cash requirements and costs for flights in the future. 
</p>
<p>
A rather interesting example might also be when McDonalds benefitted from a futures contracts that enabled them to create the chicken nugget. You can read the story <a href="https://www.businessinsider.com/mcdonalds-mcnugget-launch-was-masterminded-by-bridgewater-ray-dalio-2018-4?r=US&IR=T">here</a>.
</p>

<br>
<h4>Basis Risk</h4>
<p>
As mentioned above, the counterparty buying the futures contract are eliminating 'price risk' on the delivered asset as they secure the cost for its delivery. The price risk is however replaced by a new risk, called 'basis risk'.
</p>
<p>
Basis risk exists as the price difference between the current price of the underlying asset and the price that is agreed upon in the futures contract. Basis risk is therefore a replacement of
price risk as it hedges the investor from the absolute price movement of the asset.
</p>
<h4>Let's use an example</h4>
<p>
If a shop owner is worried about the price volatility of milk, where it is £1.40 per gallon today and expected to rise to £1.50 in 6 months, they may like to buy a futures contract to ensure the delivery of milk at a price of £1.50 per gallon for 6 months time, and to protect themselves of any further unexpected price increases. Let's say they're buying 100 gallons worth, the futures contract will be priced at £150 (100 gallons times by £1.50).
</p>
<p>
<strong>The basis risk the shop owner faces is equal to the price agreed within the futures contract 
and the current price of the asset.</strong> This would be 10 pence, where the agreed upon price is £1.50 and the price of milk when the futures contract is bought, is just £1.40. 
</p>
<p>
The price agreed on the futures exchange will edge closer and closer to the actual price of the asset as the time to expiry reduces. As time passes, the movement of the 
futures price and the underlying asset can however change. For example, the price of milk may rise to £1.60, therefore the basis risk to the shop owner will actually be -10 pence. What we can see here, is that 
basis risk can actually be positive and negative as the price of the asset changes. As the underlying asset price moves, so do the price of futures contract for the same maturity date that the shop owner had initially agreed upon.
</p>
<p>
If our shop owner agreed to exchange 6 months from today, which is 1st January 2022, and by December 1st 2021 the price of milk is now £1.60, then the futures price for delivery of milk on the 1st January 2022 is likely to be higher than £1.50 (for those wishing to buy a 1 month maturity future).
</p>
<p>
The price movements between the underlying asset and the futures market are not always perfectly correlated. There are many factors to consider for a futures contract such as the cost of storing the asset, delivery of the asset and the risk-free rate of return that can all impact price. As a result, the basis risk, which is the difference between the price today for the asset and the agreed upon futures price, can grow and shrink as the market for the asset and its future price move in an uncorrelated fashion. In an ideal world for the shop owner, the price of the milk and the futures price will be well correlated such that basis risk is 0 at expiry. 
</p>

<br>
<h4>If markets are perfect, when does basis risk actually occur?</h4>
<p>
If we use the above example, where basis risk occurs between the difference between the current price and the futures price of an underlying asset, you may be wondering how such a risk can ever be present at maturity.
After all, markets should be efficient enough, such that the shop owner is only able to buy at a futures price that very closely reflects the expected price of milk 6 months from today. Perhaps it would take a significant market condition to create such a shock in the milk price that a basis risk becomes prevalent (such as a new cow disease).
</p>
<p>
The reason basis risk is such a prevalent risk to consider, is because the futures contracts that are bought aren't always perfect. As a buyer of a futures market, you would require a futures contract that specifies all three components perfectly:<br>
1. The exact asset.<br>
2. The exact amount of the asset.<br>
3. The exact maturity required.<br>
4. The exact delivery location of the asset.<br>

Failure to reach all three of these targets in a futures contract will create an <i>imperfect hedging strategy</i>. This imperfect strategy creates a basis risk for the futures contract buyer as the movement of the futures price may not be perfectly correlated to the movement of the true asset they are trying to hedge against. 
</p>
<p>
For this reason, futures contracts are not always held to expiry, and are therefore sold in the market when the price risk for the asset has been reduced against time to a significant degree. The imperfect hedging strategy exposes a counterparty to one of 4 different sub-components to basis risk:<br>
1. Price basis risk: Where the price of the asset does not move as expected towards the futures price.<br>
2. Location basis risk: The delivery location of the asset is different to that desired by the buyer of the contract. For example, they would like delivery of milk to England, however the market can only offer the delivery to France, which would reflect a slightly different market price movement.<br>
3. Calendar basis risk: Where the expiry of the futures contract is different to the desired duration from the contract buyer. If the futures contract expires 1 week beyond the desired delivery of the asset, the buyer may sell the futures contract 1 week early, and realise the outstanding basis risk on the contract.<br>
4. Product quality basis risk: Where the asset on the futures contract does not perfectly reflect the asset hedged against. For example, the futures price for semi-skimmed milk may move slightly different to that of 2% milk. 
</p>
<p>
It is due to these factors that an imperfect hedge may be taken within the market, and thus basis risk is a key exposure faced by the buyer of the contract. 
</p>

<br>
<h4>Summary</h4>
<p>
A futures contract is used to fix the delivery of a specified quantity of a specific asset and at an agreed date in the future. The contract is traded over an exchange.
</p>
<p>
Basis risk exists at all times within the life of a futures contract where the current spot price for the asset is different to that of the futures price. Therefore basis risk can be both positive and negative. 
</p>
<p>
Perfect markets would mean basis risk is minimised at all expiry dates of all futures contracts. However future contracts are not always perfect for the risk that is hedged by the buyer of the contract. Factors such as the asset, asset quantity, date of delivery, and market pressures, can all mean the futures contract is sold before its expiry, and therefore expose the selling party to the basis risk of the contract. 
</p>

<br>
<small style="float: right;" >Picture: Edinburgh, Vereinigtes Königreich by <a target="_blank" href="https://unsplash.com/@peter_cordes">Peter Cordes</small></a><br>