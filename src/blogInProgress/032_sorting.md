---
title: 'xxx'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'A review and comparison of the most common sorting algorithms: merge sort, bubble sort and quick sort.'
time: '10'
tags:
- Java
- Algorithms
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Assess the advantages and disadvantages of different sorting algorithms.<br>
&#8226; Review how the merge sort, bubble sort and quick sort algorithms are implemented.<br>
&#8226; Review which sorting algorithm is most appropriate for the characteristics of the collections.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Sorting in Java</h4>
<p>


</p>
<br>
<h4>Merge sort</h4>
<p>
Merge sort will divide the items into single elements using a tree-like fashion. Each element is then merged with their pair into each level, sorted as appropriate. At each level, the pairs are sorted into larger arrays before being returned as expected.

</p>

<br>
<h4>Bubble sort</h4>
<p>
In bubble sort, the array is iterated upon in pairs which are compared and swapped as necessary. 

</p>
<p>
Benefit of bubble sort, and drawbacks. How to implement: 
</p>
<br>
<h4>Quick sort</h4>
<p>
Similar to merge sort, quick sort uses the divide and conquer technique to break down the collection to sort. The quick is implemented by consistently taking the first, last, or middle element and partitioning all the other elements around it. By breaking down the collection against the element, the collection is split. This process is repeatedly applied until there are no further divisions to be made against the collection.
</p>
<p>
For example, if you had [0,-2,4,5,9,2,3,6], the anchor could be the final value.
This means 6 is the value and all other elements are split from 6: [0, -2, 4, 5, 2, 3] 6 and [9].
Then you anchor on [9] to get [0, -2, 4, 5, 2, 3] 6 and 9.
Then anchor on 3: [0, -2, 2] 3 [4, 5].
Anchor on 5: [0, -2, 2, 4] 5.
Anchor on 4, 2, -2, and 0. 
</p>
<p>

</p>


<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>