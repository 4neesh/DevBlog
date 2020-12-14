---
title: 'Key takeaways from The Phoenix Project'
date: 2020-12-21
author: 'Aneesh Mistry'
featuredImage: ../images/034_arizona.jpg
subtitle: 'My key takeaways from one of the most highly rated books on modern IT and software delivery: The Phoenix Project.'
time: '10'
tags:
- DevOps
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Review the key takeaways and values that can be taken from the Phoenix Project.<br>
&#8226; Realise the growth of IT from a silo to a cross-business back-bone.<br>
&#8226; Understand the value of DevOps to IT.<br>

<br>
<h4>The Phoenix Project by Gene Kim, Kevin Behr and George Spafford.</h4>
<p>
The Phoenix Project is an award-winning novel that explores modern-day IT and its inseparable importance to the business operations. The mutual inclusion of business and IT within The Phoenix Project open the audience of the book beyond IT professionals to provide valuable lessons for all business leaders to delivery value through their ever-growing IT capability.
The Phoenix Project introduces us to Bill Palmer, a newly promoted IT manager at Parts Unlimited who undertakes a series of challenges to transform the productivity and relationships of IT with the rest of the business. Amongst the challenges of the job include a major project delivery known as 'Phoenix' which will also act as milestone to the company and proving point that threatens the team's existence for being outsourced.
</p>
<p>
Amongst the twists and turns of the story, we are introduced to common characters that we find in our own offices that entice us to read further into their professional development along with the project. Phoenix introduces the value of DevOps at all corners where IT reaches.
</p>
<p>
In this blog, I will look over the key points and takeaway from the story that have allowed me to reflect upon the need for DevOps in the modern delivery methodologies used by IT teams. I personally learnt about the operations of IT from before the use of Cloud for on-demand compute service amongst many other services were adopted as common proactice. For this reason, I would say there is a lot to be learnt from the Phoenix Project, whether that is to understand how DevOps can transform an IT workforce, or to develop an appreciation for how challenges of IT support across an organisation can be so difficult to manage.
</p>


<br>
<h4>Part 1</h4>
<p>
<strong>Tracking and managing changes</strong>
The story follows Bill along with the people he meets and challenges the company face to rectify the disorganised and inefficient IT team that exists.
The state of IT at Parts Unlimited is demonstrated through their handling of an urgent issue within the system. As employee paychecks are yet to be sent, the source to the problem is unbeknownst to anyone amidst the many data sources involved and their intertwined relationships. There is no visibility into the changes made to the system, by who, or where. The issue becomes more and more severe as the relationship as personal identifiable data (pii) is at risk of leaking and the compliance with regulation including the Sarbanes-Oxley act (SOX), EU law become time-pressured motivators along with the moral obligation of the company to pay their employees on time.
</p>
<p>
The insufficient change management process led to difficulties in explaining the error which was later incorrectly diagnosed as a 'glitch'. Software testing is shown to be disregarded for time constraints while CAB meetings are unpopular and have low attendance.
Parts Unlimited begin by introducing cards to the CAB meeting to document the outstanding changes, these are aligned by volatility, risk and priority to make them easier to manage. Bill begins to seek guidance from an IT operations SME Erik, who begins to relate the process of an IT team with a plant factory. 
</p>
<p>
        
</p>
<p>
<strong>The Three Principles of DevOps</strong><br>
The Phoenix Project introduces three underlying principles of DevOps. The underlying principles are explored within this blog as a component to maximising workflow from the business to IT to operations and lastly the customer.
</p>
<p>
<strong>Principle 1: Workflow is always downstream</strong><br>
The business departments at Parts Unlimited demonstrate their lack of cohesion as marketing pushed a date that was earlier-than-expected for the deployment of Phoenix thus causing its deployment to be rushed. Bill is introduced to the first way of underlying DevOps processes: maximising flow of work from the business to development to operations and finally the customer.<br>
The issues experienced at Parts Unlimited before the deployment of Phoenix is unsurprisingly experienced with the Phoenix deployment...
</p>
<p>
<strong>The different types of work</strong><br>
Furthermore, privacy concerns are broken and the customers are required to do manual intervention while Phoenix is fixed. Phoenix is unable to generate any revenue despite its deployment, further audit reports show bad data including pii to be found thus requiring possible lawyer intervention. 
As Bill tries to make sense of the situation, he is able to define 4 key areas of work with Erik that require treating at all times at Parts Unlimited: Planned work (work in progress), internal projects, changes, unplanned work. Brent is identified as a the constraint as the business depends upon him and thus must not be exposed to unplanned work.
</p>
<p>
<strong>Constraints within the system</strong><br>
Brent is identified as a constraint that prevents the business flow from progressing. The workload on Brent is too high thus creating a blockage in flow of all planned work. As Brent is more utilised with planned work, more planned work builds up thus creating a blockage in the flow of further work to be fixed, adjusted and maintained.
</p>
<p>
Bill begins to learn a little bit more about the make-up of the team at Parts Unlimited; the introduction to Brent, the SME at Parts Unlimited exposes the IT team to a highly efficient, however major constraint to the teams workflow. Bill comes to learn of the dependency they all had on Brent to resolve the problems faced. Unfortunately work is not documented and knowledge is not shared partly due to the time constraint and demand of Brent and the time-consuming ticketing system that is used. 
As Brent is so busy doing work he doesn't document the solutions so this adds to the issue. A culture of knowledge sharing must be created, valued and practiced to avoid the rise of "Brent" who may become a dependency and bottleneck across the business. 
</p>
<br>
<h4>Part 2</h4>
<p>
<strong>Communication and trust</strong><br>
Part 2 begins with the leaders at Parts Unlimited telling stories about themselves to build trust with each other. As unplanned work becomes a hot topic, the problem of technical debt is addressed. Erik emphasises the importance to stop planning new work and to address the unplanned work. While the due-date performance begins to improve, management become anxious to unfreeze their projects. 
</p>
<p>
<strong>Principle 2: Feedback Loops</strong>
The leaders begin to understand the second principle of DevOps to increase the feedback loops from the customer back to operations, development and the business. The trigger for change is always failure, without failure, there is little sight for change, and thus feedback upon failure must be present at all stages.
The leaders explore the use of resilience engineering to understand the impact upon the capacity of the team and the value delivered from projects before starting them, and to carry out the painful elements of the delivery line more frequently to avoid larger pile-ups of unplanned work. 
</p>
<p>
<strong>Kanban boards</strong><br>
As the management become more aware of the inefficiencies of the team as a whole, Patty begins to taking action upon lessons from the plant. Kanban boards are used to prioritise changes and the improvement Kata is reinforced to the team that a continuous improvement amongst the team is most important. As priorities are shifted, the burden upon Brent is relieved. The Kanban boards enable the team to see the work move through the organisation from business through to IT and completion. This is a very good visualisation guide to managing work. 
</p>
<p>
<strong>Unreliable test environments</strong><br>
Amongst the growth and improvement at Parts Unlimited, the Phoenix failure has realised to impact 10 million in sales, traced back to the ineffective change management process and delayed feedback loops in product changes. The need for a preproduction environment becomes evident as the developers are unable to test their changes in an environment that is identical to production. The expectation is to decrease the time it takes for revenue to be realised from a software update and to capture unplanned work before it can exist.
</p>


<br>
<h4>Part 3</h4>
<p>
<strong>Principle 3: Experiment and fail fast</strong><br>
The third and final principle of DevOps is supported in the final part where a culture of continuous experimentation and learning is fostered through better support for testing, practice and feedback.
The concept of 'Takt time' is explained to Bill as he understands the agility required from the team to adhere to customer demand and to improve time to market. The team set out to achieve the illustrious '10 deploys per day' which requires understanding the time delays that accrue throughout the process. As the developer review the deployment pipeline, they begin to identify how step-by-step it can be automated and made more efficient. The developers are able to realise the benefits that can be realised from this and become more optimistic about their efficiency capability. 
</p>
<p>
<strong>Continuous Learning</strong>
Amongst the creation of a new pipeline, the team also create a preproduction environment for testing. The benefits of Cloud technology are reviewed as they realise difficulties with their server capacity for testing. The benefit to the developers are practically demonstrated through the release of a software update that stopped out of stock items being shown. Further updates including the use of a CDN was also utilised to support greater server usage.
</p>
<p>
<strong>Kata</strong><br>
Kata is described within the book to describe the lean processing and ironing out of inefficiencies throughout the delivery of software. Essentially Kata enables Parts Unlimited to achieve the ten deploys per day. 
The Kata of IT at Parts Unlimited demonstrated the presence of IT across the organisation, almost as like electricity. The view of IT had shifted from a cost to a competitive advantage as company evolved their change management process, expectation of IT and care around decisions for the growth and continued improvement of the company as a whole.
</p>


<br>
<h4>Summary</h4>
<p>
The Phoenix Project is a 
As an engineer with just a few years experience, The Phoenix Project opened my eyes to how Cloud technology has radically transformed the challenges of scaling servers, databases and much more to create performance changes or cost efficiencies within an IT system. My exposure to change management and ticketing had also been an assumption that I perhaps took for granted with the ease and simplicity of change. The Phoenix Project in this sense has enabled me to learn backwards about the history of IT and its transformation since the start of the millennium to enable the continued growth and adoption of IT across the business.  
</p>
<p>
<strong>Recommended reading</strong><br>
<a target="_blank" href="https://www.bmc.com/blogs/devops-basics-introduction/">DevOps Guide by Stephen Watts</a><br>
<a target="_blank" href="https://emilyfreeman.io/book">DevOps by Emily Freeman</a><br>

</p>

<br>
<small style="float: right;" >Picture: Phoenix, Arizona by <a target="_blank" href="https://unsplash.com/@joecook">Joe Cook</small></a><br>