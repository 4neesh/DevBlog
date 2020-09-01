---
title: 'Exploring the AWS Services'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: '../images/_th.png'
subtitle: 'A look into the core services provided by AWS and other competing cloud providers'
time: '8'
tags:
- AWS
- Cloud
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Look into the core services of AWS.<br>
&#8226; Understand how the services are linked together.<br>
&#8226; Begin using the AWS console with intent across the services provided.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Amazon Web Services</h4>
<p>


</p>
<p>
<strong>What is serverless?</strong><br>
Often, you will hear the term 'serverless' used within this post to describe the services AWS provide. 'Serverless' does not mean running applications without servers, but it does mean running applications without thinking about servers, that is, because AWS will manage the servers on your behalf. Management of servers would include server or cluster provisioning, patching, OS maintenance and capacity provisioning. The services are automatically scaled up and down to configuration to save you, the developer, both time and money on your resources. 
</p>
<p>
Within AWS, we will visit a few fully-managed AWS services that do not require provisioning, maintaining and administering. These servers have tolerance and availability ensured. Examples of services include:<br>
&#8226; Simple storage service (S3).<br>
&#8226; Lambda.<br>
&#8226; Elastic compute cloud (EC2).<br>
</p>
<br>
<h4>EC2 virtual machines</h4>
<p>
As one of the most prominent services, EC2 provides developers with secure and resizable compute capacity in the cloud. EC2 instances are virtual servers that can be configured through the Amazon machine image template (AMI) that can launch pre-configured instances of the server. AMIs are customised with pre-installed packages, software, security. You can select from different configurations of the CPU, storage, memory and networking resources. AMIs are categorised by general purpose, compute optimized, memory optimized and storage optimized. AMIs are regional, not global. AMIs are stored within S3. 
The AMI is a template for the configuration. When an EC2 instance is launched, a copy of the AMI is running. The AMI contains the operating system, application server and applications. You can launch different types of an AMI that are configured to serve different purposes (storage, memory, networking). 
</p>

<br>
<h4>Storage: S3, EFS and EBS</h4>
<p>
AWS provides several storage technologies, namely S3, Elastic file system (EFS) and Elastic block store (EBS). EBS and EFS provide a block storage where you can edit and update a section of a file. S3 provides an object-level storage where the entire object must be replaced. If you have high volume read and write operations, you would want block-level storage. S3 is not optimal for OS and database storage as it works at Object-level storage.
</p>
<p>
EBS provides high-availability block-level storage for EC2 instances. Data is retained after the EC2 instance is shut down. It connects to a single EC2 instance. 
EBS connects to a single EC2 instance and has optimised performance. EBS offers low-latency IO requests with strong availability. 
</p>
<p>
EFS provides scalable file storage optimised for EC2. EFS is similar to EBS, however unlike EBS, it can be accessed across EC2 instances and regions. 
EFS enables shared high volume storage across virtual machines. 
</p>
<p>
S3 acts as a useful service to access files across AWS services beyond EC2. For example, CloudFront may use S3 to access website content and media. Its object-level storage should be used for write-once read-many times storage. 
S3 supports static website hosting. It provides secure, scalable and available access to resources. S3 provides reliable disaster recovery, backup and restoration. S3 provides a greater level of security with authority and access control. 
</p>

<br>
<h4>Databases: Aurora and DynamoDB</h4>
<p>
AWS provides support to serverless databases to be consumed by other AWS services. The tables are scaled and priced on a pay-as-you-go basis. 
</p>
<p>
DynamoDB is a fully managed NoSQL database that supports performance at scale and low-latency transactions. Full ACID support is enabled by DynamoDB. DynamoDB is a serverless database that will automatically scale up and down as required to support tables, key value pairs and indexing. 
</p>
<p>
AWS Aurora is a MySQL compatible database stored in the cloud for secure, highly available and reliable databases. The serverless design will automatically scale with requirement 
</p>
<br>
<h4>Data warehouse: RedShift</h4>
<p>
RedShift makes it simple and cost effective to manage multiple databases. Data is later optimised to perform data analytics for business intelligence. Database is optimised for transactions, warehouse is for data analytics perform a column-based output. It allows you to combine queries to large data sets. Useful for databases with heavy read requests. It stores data in columnar style. Means data can be compressed to make the read operations easier. All the data is stored in a single row. RedShift compresses it nicely. The Warehouse consists of clusters of nodes. The cluster contains an engine of databases. DynamoDB is only ever available in one AZ as it tends to not be critical. RedShift can restore snapshots to other AZs to replicate data. 
</p>
<p>
Single source of truth is structuring data in one place. 
</p>
<br>
<h4>Kinesis</h4>
<p>
AWS Kinesis is a data streaming service that allows you to inject large amounts of real-time data into EC2 instances. Data is captured, stored and processed from large distributed streams such as event logs and social media feeds to be consumed by other services simultaneously. 
The throughput for a Kinesis stream is realised through the data shards. Each Shard will support 1MB/sec of data input and 2MB/sec of data output. Each shard support 1000 PUT records per second. Each shard will store records of data. A record will contain information such as sequence number, partition key and data blob of up to 1MB. The partition key is used to route records to specific shards
</p>
<br>
<h4>Monitoring</h4>
<p>

</p>
<br>
<h4>Elastic MapReduce EMR</h4>
<p>
EMR is a data processing service offered to perform analysis of data using the open-source Hadoop framework.
</p>
<br>
<h4>Launching services: Elastic beanstalk and Cloudformation</h4>
<p>
Elastic beanstalk is a platform-as-a-service layer on top of the AWS Infrastructure-as-a-service services such as EC2 instances, Elastic load balancers ans auto-scaling groups. Elastic Beanstalk will automatically configure these instances together to ensure high availability. It will deploy, manage and scale web application and services on behalf of the developer. It uses AWS services such as S3, EC2, load balancing, databases and auto-scaling to deploy the details of the application. 
</p>
<p>
CloudFormation is a method used to define resources for deployment in a JSON file. It is a large configuration file used to deploy AWS services. 
</p>
<br>
<h4>Web hosting: CloudFront</h4>
<p>
CloudFront is a fast content delivery network (CDN) that leverages AWS' global presence to deliver data, videos and applications with high transfer speeds. CloudFront works seamlessly with other AWS services to provide a global service. Lambda@Edge can be used with CloudFront to provide a custom user experience as per the region they are accessing AWS through. 
CloudFront has edge locations globally to deliver the content. LambdaEdge and CloudFront automatically replicate your origin content globally to provide dynamic and static content. 
</p>

<br>
<h4>Developer control: Codestar, CodePipeline, </h4>
<p>

</p>
<br>
<h4>Application Integration: SQS & SES</h4>
<p>
SQS is a fully managed message queue service to decouple and scale microservices and distributed systems. 
</p>
<br>
<h4>Lambda</h4>
<p>
Lambda is a compute service which is managed as a serverless component to execute custom code when called upon. Lambda functions can be called in response to an event, request, or trigger. 
</p>


<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>