---
title: 'Key takeaways from The Phoenix Project'
date: 2020-12-21
author: 'Aneesh Mistry'
subtitle: 'Key takeaways from the best-selling novel on modern IT and software delivery: The Phoenix Project.'
time: '10'
tags:
- DevOps
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Review the key points and values that can be taken from The Phoenix Project.<br>
&#8226; Understand the importance of IT across a business when delivering value to a customer.<br>
&#8226; Understand the various elements of DevOps and its importance to creating cohesion between business teams.<br>

<br>
<h4>The Phoenix Project by Gene Kim, Kevin Behr and George Spafford</h4>
<p>
The Phoenix Project is an award-winning novel that explores modern-day IT and its inseparable importance to the business operations. The mutual inclusion of business and IT within The Phoenix Project extend the audience of the book beyond IT professionals to provide valuable lessons for all business leaders on delivering value through their IT capability.
</p>
<p>
The Phoenix Project introduces us to the protagonist Bill Palmer, a newly promoted IT manager at Parts Unlimited who tackles a series of challenges to transform the productivity and chemistry between teams of the same system. The focal challenge of the job regards a major project delivery known as 'Project Phoenix' which acts as milestone to the company and performance review that threatens the IT team to being outsourced.
</p>
<p>
Amongst the twists and turns of the story, we are introduced to common characters that we find in our own offices that entice us to read further into their professional development. The Phoenix Project introduces the value of DevOps at all corners of the business; unsurprisingly, we will come to find that IT is no longer a business domain to keeping the costs down, but is an interconnected web between all sources of value at Parts Unlimited.
</p>
<p>
In this blog, I will review the key points and takeaways from the novel that have allowed me to reflect upon the value of DevOps in modern delivery methodologies. 
</p>

<br>
<h4>Part 1</h4>
<p>
<strong>Tracking and managing changes</strong><br>
The disorganised state of IT at Parts Unlimited is firstly demonstrated through their handling of an urgent issue where a software change has prevented employee paychecks from being sent. The exact cause of the problem is unbeknownst to anyone amidst the many data sources and their intertwined relationships. There is minimal visibility into the changes made to the system meaning the team were unable to identify who, when or where the critical update was performed. The issue becomes more and more severe as personal identifiable information is at risk thus introducing regulatory pressures to the moral pressure of the company to pay their employees on time.
</p>
<p>
The insufficient change management process highlighted difficulties in understanding the error which was brashly diagnosed as a 'glitch'. Why were Parts Unlimited unable to identify the source of the problem? The IT team did not utilise an approval chain, communication channel or ticketing system to track and document the updates to the system. As a result, the team were unable to understand where to look for the problem or even when it may have first occurred. As we will later review, the time constraints upon the development team meant the ticketing system along with software testing had been disregarded.
</p>
<p>
<strong>The Three Ways of DevOps</strong><br>
The Phoenix Project introduces three underlying principles of DevOps that are implemented by Parts Unlimited throughout the story. The underlying principles are explored within this blog as a component to maximising workflow from the business to IT, to operations, and lastly the customer.
</p>
<p>
<strong>DevOps Way 1: Systems thinking</strong><br>
The business silos at Parts Unlimited demonstrate their lack of cohesion as marketing publicly communicated a date that was earlier than expected for the deployment of Phoenix. The premature delivery of Phoenix introduced Bill to consequences to breaking the first underlying DevOps way.
</p>
<p>
Maximising workflow downstream emphasises the importance of the business to act <u>together</u> and not as individual silos. The first way instils an understanding of the system right across the workflow where business silos do not allow a defect to be passed downstream and subsequently take a view of the system and impacts of changes upon others rather than just themselves. Without the systems thinking, the issues experienced at Parts Unlimited <u>before</u> the deployment of Phoenix (such as erratic changes and fixes) were unsurprisingly experienced during the Phoenix deployment. 
</p>
<p>
<strong>The 4 types of work</strong><br>
As Bill tries to make sense of the problems at Parts Unlimited, he receives help from an agile 'guru' Erik who uses a plant factory as an analogy to the software delivery at Parts Unlimited. Erik introduces 4 types of work that are constantly worked upon at any business (including Parts Unlimited):<br>
&#8226; Planned work - business projects or enhancements<br>
&#8226; Internal projects - server migrations and software updates<br>
&#8226; Changes - feedback driven updates to the software<br>
&#8226; Unplanned work - escalations and fixes to delivered projects.
</p>
<p>
Amongst the different types of work, <strong>unplanned work</strong> is the outlier that cannot be accounted for within a delivery plan and must be minimised as much as possible. It is important for Bill to understand the different types of work so new work can be prioritised accordingly. The optimal distribution of work will see the senior members work on planned work while new-joiners undertake the unplanned work.
</p>
<p>
<strong>Constraints within the system</strong><br>
Bill meets Brent, a senior engineer, who is the SME across the IT systems at Parts Unlimited. Brent is soon identified as a constraint to the business who is highly depended upon by multiple work streams as the only person who can resolve their problems. Brent not only has unmanageable levels of work, he is also unable to document his knowledge for others to learn from due to the same time constraint. Brent informs Bill how the ticketing system is also too timely to use thus creating a further dependency upon Brent's expertise in the future. 
</p>
<p>
Brent' responsibilities extend to completing unplanned work thus creating further bottlenecks for multiple work streams that depend upon Brent to fix their problems. The vicious cycle of Brent's knowledge retention and time consumption from fixing problems make the reliance upon him deepen with time. The organisation of the engineers to rely on Brent breaks the optimisation of the team resources where the most senior engineers are to be working solely on enhancing the software and for junior engineers to be learning about the software through unplanned work. 
</p>

<br>
<h4>Part 2</h4>
<p>
<strong>DevOps Way 2: Feedback Loops</strong><br>
Part 2 starts on a positive note of leadership bonding followed by a retrospective where Erik emphasises the importance to prioritise and reduce unplanned work. Due-date performance begins to improve however management become anxious to unfreeze their projects. The failure of planned work continues to creates more unplanned work and the business leaders are introduced to the second way of DevOps: increasing feedback loops across the workflow.
</p>
<p>
The changes within the system are always triggered by failure. Feedback upon changes must therefore be provided across the workflow to reduce the potential for further unplanned work to be created. The leadership are introduced to resilience engineering where the system is designed to withstand failure and the ability to adapt to failure becomes a strength and not a weakness of more unplanned work. 
</p>
<p>
Feedback loops across the workflow are amplified and addressed directly before it can further impact downstream teams and customers. Feedback is supported across more points within the workflow and within non-production environments. The amplified feedback supports software testing for developers before moving changes to production. From a DevOps perspective, feedback loops can be automated across builds and deployments through a continuous integration and delivery pipeline. The CICD pipeline would further prevent the advancement of a software change to further deployment steps if it is detected to fail at any preceding stage.
</p>
<p>
<strong>Utilising test environments</strong><br>
The support for faster feedback at Parts Unlimited came about from a Phoenix change failure that impacted $10 million in sales. The error was traced back to the ineffective testing of a change that had performed as expected in test environments, but differently in production. The need for a preproduction environment, which is a replica of production, became evident to the developers to avoid a similar error in deployment testing. The test environment configuration is therefore important to retain and monitor to support the quality and reliability of testing before deployment to production. 
</p>
<p>
<strong>Kanban boards</strong><br>
A Kanban board is an agile project management tool used to visualise work across the business. Kanban boards are first used in part 1 to categorise changes when discussed within the CAB meeting. Changes are grouped by volatility, risk and priority. When Kanban boards were first introduced, some 400 changes were scattered across boards to illustrate the hectic schedule of changes at Parts Unlimited <u>before</u> the deployment of Phoenix.
</p>
<p>
In part 2, Patty, director of IT service support, begins taking action upon lessons she has picked up from the plant. Kanban boards are used to prioritise changes. The kanban boards allow Patty to visualise the work in progress throughout the organisation and to see how work shifts and does not shift across team boundaries. 
The visualisation allows Patty to identify where work builds up and to strategically change priorities to focus upon  objectives where bottlenecks occur most frequently. As priorities are better aligned with improved visibility across the workflow, the dependency upon Brent is relieved and spread across the teams.
</p>

<br>
<h4>Part 3</h4>
<p>
<strong>DevOps Way 3: Experiment and fail fast</strong><br>
The third way of DevOps requires a culture of continuous experimentation and learning which is fostered through effective support for testing, practice and feedback.
Bill explores the concept of 'Takt time'. Takt time is the rate at which a product or feature can be delivered to a customer from its inception. Takt time underpins the agility of Parts Unlimited to adhere to customer demand with their software updates and deliveries. Parts Unlimited set out to achieve the illustrious '10 deploys per day' which requires each team to develop an understanding for where time delays accrue throughout the workflow and how feedback can be retrieved strategically for valuable insight upon deployments.
</p>
<p>
As the developers review the deployment pipeline, they begin to identify how, step-by-step, it can be automated and optimised from hours to minutes. The developers realise the benefits from an automated pipeline while being encouraged to experiment with new builds that can be tested against prepared environments for feedback. 
</p>
<p>
The benefits of Cloud technology are later raised as Parts Unlimited experience difficulties with their server capacity for testing. The benefit to the developers are practically demonstrated through the release of a software update that prevented 'out of stock' items from being shown on the systems. Further updates including the use of a content delivery network to support greater server usage were considered for enhancing the system thus demonstrating the agile-framed ideas of the team.
</p>
<p>
<strong>Kata</strong><br>
Kata is described within The Phoenix Project to describe the lean processing and 'ironing out' of inefficiencies throughout the delivery of software. A focus upon kata enables Parts Unlimited to achieve the ten deploys per day. 
The kata of IT at Parts Unlimited demonstrated the presence of IT across the organisation, almost like electricity. The view of IT had shifted from a 'cost to reduce' to a source of competitive advantage. Parts Unlimited evolved their change management process, expectation of IT and care upon decisions for the growth and continued improvement of the company as a whole.
</p>

<br>
<h4>Summary</h4>
<p>
The Phoenix Project delivers an exciting introduction to DevOps in the form of a novel that navigates the challenges of change across multiple teams within an organisation. The reality of The Phoenix Project extends to the modern day as businesses change their approach to IT and embrace its potential for achieving a competitive advantage or to even maintain cost competitiveness within the market.
</p>
<p>
While The Phoenix Project is often described to be an exaggeration of reality, it is highly regarded for capturing the most common pain-points for DevOps to drive change within an organisation.
Beyond the focal point of DevOps, The Phoenix Project taught me about the challenges of IT before services such as Cloud enabled on-demand compute services. The Phoenix Project offers many lessons to the reader such as to understand how DevOps can transform an IT workforce, or to develop an appreciation for how multi-dimensional the challenges are for IT to support across an organisation. The Phoenix Project in this sense has enabled me to learn backwards about the modern history of IT and its transformation since the start of the millennium to foster the continued growth and adoption across the business. 
</p>

<p>
<strong>Related reading to The Phoenix Project</strong><br>
<a target="_blank" href="https://www.bmc.com/blogs/devops-basics-introduction/">DevOps Guide by Stephen Watts</a><br>
<a target="_blank" href="https://emilyfreeman.io/book">DevOps by Emily Freeman</a><br>
</p>