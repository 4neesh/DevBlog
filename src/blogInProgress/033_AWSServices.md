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
<h4>Amazon Web Services Analytics</h4>
<p>
In this blog, I will introduce some of the core AWS services that make up the AWS analytics services. This blog will introduce what the different services are used for, why AWS is advantageous to use and how they might differ from a non-cloud solution.<br>
</p>
<p>
AWS Analytics is specifically focussed on processing structured, semi-structured and unstructured data. Structured data can be directly stored within a relational database. Semi-structured data could be JSON or XML files that have a partially fulfilled structure. Unstructured data has no pre-defined model such as documents, audio, video and metadata.
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
<h4>The AWS Analytics architecture</h4>
<p>
An all-AWS architecture for data analytics can include many different services and keywords that interact with each other. This section will briefly mention some of the services used before I dive slightly deeper on each one.<br>

AWS EC2 provides a secure and resizable compute capacity where application servers can be hosted. Data can then be then be sent to other services via a streaming service such as Kinesis. 
Kinesis is a data streaming service that offers two main solutions: Kinesis Streams which can offer storage of data and Kinesis firehose which will ingest the data in real time directly to S3, Redshift or Elasticsearch. 
Similar to Kinesis, AWS Data pipeline provides a service to transport and transform data across sources. The pipeline can define activities to be completed after data is stored. Kinesis provides real-time analysis of data, whereas the pipeline is more step-by-step. Kinesis performs the analysis whereas Pipeline transports the data to be processed.
AWS S3 is an object-level storage solution for write-once-read-many service to other AWS services. Elastic block store (EBS) and Elastic file system (EFS) are block-level storage services for frequently updated data. EBS is attached to a single EC2 instance, whereas EFS provides access to other services and multiple instances. 
AWS Redshift is a data warehousing solution where columnar data is stored for efficient querying, data analysis and business intelligence solutions. 
DynamoDB provides a fully managed NoSQL database service for fast and predictable performance. DynamoDB is not for mission-critical requests and provides singular database solutions of data. 
AWS Athena provides an interactive SQL service to query data stored in S3 buckets. Rather than polluting SQL queries to a Redshift cluster, queries can be processed with AWS Athena to the data stored in S3 buckets. Athena provides out-of-the-box data analysis for S3 data.
Amazon Elasticsearch uses the open source analytics engine from Apache Lucene to provide log analytics, full-text search, business analytics and intelligence use cases. The API uses Kinesis to conduct RESTful searches upon documentation.
Amazon Elastic MapReduce uses the open source Apache Hadoop framework to support large scale data processing. Hadoop contains a distributed files system and processor to perform large scale operations. AWS provides a managed service where servers and processors are spun up on demand to the compute power necessary for the data.

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
AWS provides several storage technologies, namely S3, Elastic file system (EFS) and Elastic block store (EBS). EBS and EFS provide a block storage where files are split into blocks that support file updates. S3 provides an object-level storage for durable and highly available storage of data as a single object. The performance implication of object level storage means S3 is more suitable for write-once data. The block storage can be directly accessed by the operating system and is therefore a mounted drive volume. If you have high volume read and write operations, you would want block-level storage. S3 is not optimal for OS and database storage as it works at Object-level storage.
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
<h4>AWS Athena</h4>
<p>
AWS Athena allows you to analyse data from S3 buckets in a serverless manner. It is serverless so no clusters are required to use it. It is used to run queries against large volumes of data without having to launch clusters of databases or warehouses to do so. You simply connect Athena to a datastore in S3, specify the schema, and run queries against it. 
</p>
<br>
<h4>Databases: Aurora and DynamoDB</h4>
<p>
AWS provides support to serverless databases to be consumed by other AWS services. The tables are scaled and priced on a pay-as-you-go basis. 
</p>
<p>
DynamoDB is a fully managed NoSQL database that supports performance at scale and low-latency transactions. Full ACID support is enabled by DynamoDB. DynamoDB is a serverless database that will automatically scale up and down as required to support tables, key value pairs and indexing. While RDBS use indexing to increase the performance of data searches, DynamoDB supports secondary indexing where 
</p>
<p>
AWS Aurora is a MySQL compatible database stored in the cloud for secure, highly available and reliable databases. The serverless design will automatically scale with requirement 
</p>
<br>
<h4>Data warehouse: RedShift and Data lake</h4>
<p>
Data warehousing is required to provide aggregate data in the format suitable for decision making. Data is collected from different databases. It is integrated to the data warehouse through a staging area where formats are standardised (extract, transform, loaded). The warehouse stores all data in standardised manner. Data marts (subsets) are then created with prepared answers for different queries. Querying a mart will not hit the data warehouse.
Data warehouse is a placed where data assets is stored. The defacto source of truth. Used for data recording and purpose. Information revolves around a subject, not all information, just the subject-related information. Information is integrated to common standards. Data cannot be changed once in. It is often aggregated and segmented for analysis. 
</p>
<p>
AWS Redshift is designed for online analytical processing. This is analysis of multidimensional data for complex calculations. Such as what-if statements and business intelligence forecasting. It supports complex queries. Redshift stores data in a columnar storage for more efficient querying of indexes. Each field is held in a file(or files) and is queries rather than the entire table to return the values needed. 
</p>
<p>
AWS Datalake is a service that is used to store large unstructured data as a repository. It is not processed in any way, unlike Redshift where data is compiled into files and ready for analysis. 
</p>
<p>
RedShift makes it simple and cost effective to manage multiple databases. Data is later optimised to perform data analytics for business intelligence. Database is optimised for transactions, warehouse is for data analytics perform a column-based output. It allows you to combine queries to large data sets. Useful for databases with heavy read requests. It stores data in columnar style. Means data can be compressed to make the read operations easier. All the data is stored in a single row. RedShift compresses it nicely. The Warehouse consists of clusters of nodes. The cluster contains an engine of databases. DynamoDB is only ever available in one AZ as it tends to not be critical. RedShift can restore snapshots to other AZs to replicate data. Redshift is scalable and offers SQL, ETL and BI tools for optimised queries. No pain in managing infrastructure with Redshift.
</p>
<p>
Difference between row databases and columnar databases.
If you need to query a row database such as transactions and users, it will scan the whole database and return a join operation between the two databases. 
With Columnar databases, data is not stored in rows, but in single files with all the data itself. If you want the first name and transaction made, it will scan just these files to perform the query. Therefore columnar is far more efficient. 
</p>
<p>
Columnar data requires less reads to store. All data types in the file are the same so it is easier to compress. Redshift warehouse uses nodes to form a cluster. The Redshift engine will contain the databases. Redshift cluster has lead and compute nodes to direct queries. Redshift is available for all zones unlike DynamoDB. DynamoDB is not business critical. Redshift is charged on compute hours and backup.s
</p>


<br>
<h4>Kinesis</h4>
<p>
When using Kinesis, the unit of scale for data ingestion is known as a shard. Shards scale linearly, so more shards means more capacity to ingest and emit data. When a stream is created, the number of shards are defined and remain final for that stream. Resharding is possible however not through the GUI. Adding shards will split existing ones while removing will merger shards. Within a stream, shards are distinguished by their partition key. As each shard ingests data, each record has a sequence number that is incremented.
</p>
<p>
AWS Kinesis is a data streaming service that allows you to ingest large amounts of real-time data into EC2 instances. Data is captured, stored and processed from large distributed streams such as event logs and social media feeds to be consumed by other services simultaneously. 
The throughput for a Kinesis stream is realised through the data shards. Each Shard will support 1MB/sec of data input and 2MB/sec of data output. Each shard support 1000 PUT records per second. Each shard will store records of data. A record will contain information such as sequence number, partition key and data blob of up to 1MB. The partition key is used to route records to specific shards
</p>
<p>
Three of the main services within Kinesis include Kinesis Firehose Kinesis data analytics, and Kinesis Streams.
</p>
<p>
Data Streams
Data Streams are not managed, you must manually Shard the streams. Streams will capture large volumes of data and replicate it across 3 AZs. Data is available for 24 hours in the stream by default. Data can be processed and stored. 
</p>
<p>
Firehose
Used to load streaming data into other AWS services such as S3 and Redshift. From there, you can load data into EMR, Elasticsearch etc. It automatically scales unlike Data Stream. 
</p>
<p>
Analytics
Allows you to run SQL queries and Java against data streams and send it to monitoring tools. This removes the necessity of storing data before analysing it. It integrates with AWS services so SQL queries can be performed on the data. Java developers can build streaming applications to integrate and analyse data in real time. It scales automatically. 
</p>


<br>
<h4>Elastic MapReduce EMR</h4>
<p>
AWS EMR is used for data processing. Data processing comprises the series of steps required to transform raw data into a computer-readable format. The Hadoop open source framework offers two services: HDFS and MapReduce to provide a concurrent service to data processing. EMR supports the Hadoop framework by running the processes on EC2 instances that scale to the required performance and data load. 
</p>
<p>
Amazon EMR supports the use of accompanying frameworks such as Apache Hive to run declarative MapReduce jobs, Apache Spark to run enhanced MapReduce jobs, and Apache Pig to run procedural processes.
</p>
<p>
EMR enables you to use Hive and Pig and Spark to query data. 
</p>
<p>
Apache Hive is used to convert SQL-like queries into MapReduce Jobs to perform queries. 
</p>
<br>
<h4>AWS Glue</h4>
<p>
AWS Glue is an extract, transform and load service (ETL) for loading data to be ready for analytics. AWS Glue provides data crawlers to scan over data (such as in a Data lake) and to prepare metadata so it is ready to be queried. AWS Glue and Amazon EMR offer similar solutions for data processing, however the difference lies in the infrastructure requirement. While Glue is serverless, EMR can provide faster and more stable performance from the Hadoop framework.
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