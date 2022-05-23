---
title: 'How @InjectMocks works with Mockito'
date: 2021-08-09
author: 'Aneesh Mistry'
subtitle: 'Learn about how you can use @InjectMocks to automatically add services to classes as they are tested with Mockito.'
time: '8'
tags:
- Java
- Testing
---

<br>
<h4>How to use @InjectMocks</h4>
<p>
@InjectMocks will allow you to inject other spies and mocks into a class that requires services when it is being tested. The annotation will scan the class under test and automatically inject all available mocks and spies from within the test class. No more NullPointerExceptions when an unknown service is called!

[![YouTube video link](../images/063_injectmocks.jpg)](https://youtu.be/KuqYS9reh2I)
</p>