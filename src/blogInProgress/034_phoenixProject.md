---
title: 'Learning backwards with The Phoenix Project'
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

<br>
<h4>The Phoenix Project</h4>
<p>
The Phoenix Project by Gene Kim, Kevin Behr and George Spafford.
Branded as a must-read for anyone who works within IT. In the modern-day this would extend to far more people than possibly imagined.

Operations technician Bill Parmer who is suddenly promoted to head of IT department that is failing with product backlogs and bankruptcy 
topped off with a threat of outsourcing and pressure from competition for market share.

</p>
<p>
I started learning and using cloud before I could appreciate the challenges of manual server running
I also started learning about DevOps before I could appreciate the discourse between teams. The Phoenix Project however has allowed me to 
understand the challenges that pre-existed DevOps and how the value can be transformational. 
</p>

The goal of the Phoenix Project is to get Parts Unlimited to be competitive, to have IT Systems that are reliable and available, and to have disruptions minimised.

<br>
<h4>Part 1 (Chapters 1 to 16)</h4>
<p>

- Bill Palmer is introduced as a newly promoted head of IT Ops
- One of the first challenges he faces is with paychecks not being sent
- This is an urgent issue which is hard to resolve given multiple data sources involved 
- This can breach SOX 404 regulation and can impact employee pay
- The issue relates to SAN

- There are org structure changes 
- Further audit requirements for PII and EU Law
- The issue for pay was due to a code update to comply quickly with regulation on tokenisation app
- had to deploy the above update or face jail. it was not tested with other components
- There was no change management system that made it hard to track

- They had to say it was a 'glitch' to not be able to pay workers
- time is a big factor which means testing isn't always done
- There is a problem with getting new laptops for Bill and he has an old one
- CAB meetings are unpopular and become mandatory. No one likes the CAB meeting

</p>

<p>

- SOX 404 requirement for devs to support financial reporting
- System breaches segregation of duties
- Change management process is SOX audited

- Changes are submitted via cards and are hard to make
- 400 outstanding changes to be included in next release

- Bill meets with clever person to talk about how IT operations is similar to a plant factory
- 'Work in progress' is defined and how to manage releases better

- The first change to the cards are to prioritise them into volatility, risk, priorities

- More severe issues happen and no one knows what or who caused it. then it gets fixed
- Organised cards improve the CAB
- Scheduling is improved to arrange more changes into a week

- Brent is too heavily relied upon
- need a L3 support team to begin taking his work
- Ticketing system is too time consuming for brent and is not used. 
- Huge dependency on Brent
</p>

<p>

- Changes aren't done as Brent is too busy working on Phoenix
- He cannot support changes 
- Poor resource allocation and need to work out a new way to manage changes

- Phoenix deployment is a huge failure 
- it is slow, breaking privacy, consumers must use manual intervention
- Adverts caused the deployment to happen too soon as mgmt were forced

- There are then issues with audit. They start receiving bad data from the cards and need to delete it or get lawyers
- possibly pii data

- they realise time to market is a problem 
- too hard to adapt with times required for devs

- Phoenix is messing up change management due to number of post it notes
- causing a huge backlog

- 4 types of work: business projects, internal projects, changes, unplanned work
- Erik approves of kanban and suffest to remove biggest source of unplanned work
- we must expoit the constraint by removing unplanned work

- More problems from phoenix as invoices are not sent so no reveneue generated for parts unlimited. 
- Bill Quits

</p>

<br>
<h4>Part 2(Chapters 17 to 29)</h4>
<p>

- Bill returns to Parts

- All leaders share a personal story to build trust, they talk about etch debt = unplanned work 
Erik talks with Steve + John about going forward and how IT ops need to stop planning more work
- By halting other projects, work in progress reduces but due date performance improves

- Freezing projects works, but management are pushing to unfreeze their projects
- brent works many workstations so they depend upon him
- need to document the work Brent does and it is only safe to proceed on projects that dont need him
- resilience engineering is doing painful things more often and less scale. important to consider long term impact of project before starting it

- John realises his security work is meaningless to sox 404


22
- Bill pushs moniting projects to Patty and wes. Patty likes, Wes doesnt
- Patty goes to the plant factory and begins using Kanban and Kata? with the cards. colour used for prioritisation
- Prioritise projects to improve capacity so not only brent is working on it
- This is all about improving the constraint

- John from the security IT team realises how inefficient he is to the team
- Dick doesnt understand the importance of security to the IT team
- Ron explains how raising sales targets demoralises the team and how stores are always out of stock
- IT failure impacted 10 mio dollars in sales
- change process messed up sales
- data cant be used for forecasting as it is meaningless
- reporting it always lowest priorities. Time to market is emphasised. 
- longer dev time = more time not reaping capital from the product. 
- need better feedback loops

- business risk arises due to IT across key KPI categories
- IT impact to business is realised
- they start reducing the risk to a SOX 404 scope
- Security is integrated into operations, not just after deployment

- Preventative security is seen as better than reactive
- WIP increases with reduced projects
- Phoenix deployed but have more errors, could have been avoided with a preprod environment
- none test env replicate prod unfortunately

- devops improved by freezing certain projects
- erik sees importance for faster feedback loops
- priority focuese to revenue-generatin gfeatures of phoenix



</p>

<br>
<h4>Part 3 (Chapters 30 to 25)</h4>
<p>

- Erik explains takt time to bill
- Toyota single minute exchange of die 
- erik explains need for faster deployment to utilise resources and increase time to market and customer satisfaction
- 10 deploys per day
- otherwise if change is not deployed, it makes no money and is WIP stuck in process

- there is 100 steps in deployment
- they mark down all the steps and form value stream 
- se where all deployment time delay arises in the system
- optimism rises as they can see opportunity to imporve

- preprod is made
- pipeline is good but servers are worn out
- cloud is suggested
- pipeline demonstrated as unicorn is fixed for showing out of stock items (WOW)
- prod code becomes easier to manage as features can be turned on/off with config easily
- CDN used for better server use
- quick updates to support faster checkout of vouchers
- MRP needs updating manufacturing resource planning system to provide custom kits like the competition

- improved kata
- it runs through the company like electricity

</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>