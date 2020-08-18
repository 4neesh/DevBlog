---
title: 'Creating a Java GUI'
date: 2020-09-14 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'Create a GUI with a Java application by using the JFrame and JTable packages.'
time: '8'
tags:
- Java
- Design
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>The Java Swing package</h4>
<p>
In this blog post, I will be using the Java Swing package to create a GUI from a Java application.
The Swing package is part of the foundational tools of Java and is an API for providing graphical user interfaces (GUIs) for an application.</p>
<p>
We will use three classes from the Swing framework to create a table with custom formatting:<br>
&#8226; JFrame to create the outline of the GUI.<br>
&#8226; JTable to create and populate the table within the GUI.<br>
&#8226; Renderer to provide custom formatting for the table.<br>
</p>
<p>
All three classes will be used to create a table that has formatting, custom mouse functionality and table sorting.

//image of the final product.


</p>

</p>
<br>
<h4>Creating the GUI frame</h4>
<p>
The <code>JFrame</code> class from the Java Swing package is used to create the GUI frame. To create the GUI, we will extend JFrame and implement the following properties within the class to give the basic framework details:<br>
&#8226; setSize(x, y) to set the size of the frame.<br>
&#8226; setVisible(true) to make the frame visible.<br>
&#8226; frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) to close the application when the frame is closed.<br>
</p>
<p>
The Frame class is created with the Singleton design pattern to ensure the application only refers to the same GUI each time.

```java{numberLines:true}
public class Frame extends JFrame {

    private static Frame frame;

    private Frame(){

    }

    public static Frame getFrameInstance(){
        if(frame == null){
            frame = new Frame();
        }
        return frame;
    }
}
```
The main method will set the properties as well as a title:

```java{numberLines:true}
Frame frame = Frame.getFrameInstance();
        frame.setVisible(true);
        frame.setSize(400,400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("My frame");
```
</p>
<br>
<h4>Introducing a Table to the GUI</h4>
<p>
The JTable class from the Swing package will be used to create the table. The JTable works similarly to an Excel worksheet where each cell will have an x and y coordinate which we can populate with data. 
</p>
<p>
The JTable can be created in many ways, but for this example we will instantiate the data (Object[][]) and columns (Object[]) in the JTable constructor. 

```java{numberLines:true}
private static JTable table;

    public void buildTable(){

        table = new JTable(new String[][]{{"David"},{"Joe"}}, new String[]{"Column 1"});

    }
```

As you might imagine, the data and columns can be pre-defined and passed into the JTable when the requirements for the JTable are to show data that is created or read in from other sources.
</p>
<p>
There are other convenient methods that can be used to create or modify the table including:<br>
&#8226; addColumn(Object[]) to add in further columns to the table.<br>
&#8226; setValueAt(Object value, int row, int column) to reset the value of a cell.<br>
&#8226; JTable(int row, int column) constructor to create a table with a set number of columns and rows.<br>

</p>
<br>
<h4>Adding the table to the gui</h4>
<p>
Before we can add the table to the GUI, we need to create a view component within the GUI. <code>JScrollPane</code> provides a scrollable view of a component for the GUI. From our main method, we will instantiate the JTable instance and pass it into a JScrollPane instance as an argument. The single argument constructor for the JScrollPane is used to take in a Component to display within the pane.<br>
The JTable we create is passed in as an argument as it extends from Component in the following order: Component > Container > JComponent > JTable.
</p>
<p>
The JTable and JScrollPane are defined in the main method. The frame then takes the JScrollPane with the table Component. The <code>pack()</code> method will set the frame size as according to the table. As a result, the <code>setSize()</code> method may become redundant, however we can leave it in as a default size for the GUI.

```java{numberLines:true}
 JTable table = new TableBuilder().buildTable();
        JScrollPane jp = new JScrollPane(table);
        frame.add(jp);
        frame.pack();
```
When we run the application, we will now see the following GUI with the rows and columns:

//insert image of basic table
</p>
<br>
<h4>Custom styling of the GUI</h4>
<p>
In our current demo, we have passed in the table columns and data into the table, passed the table into a JScrollPane and then passed the JScrollPane into the JFrame to create the visualisation of the Table in the GUI. To implement custom styling, we need to add a model to the table which we can then
</p>
<p>
To provide custom styling to the GUI, we can use the TableCellRenderer interface form the Java Swing package. I will create a new class called <code>CustomRenderer</code> to implement the <code>TableCellRenderer</code> and override the getTableCellRendererComponent method.
</p>
<p>
The <code>getTableCellRendererComponent</code> method will take in 6 arguments. These include the table, cell value, boolean isSelected, boolean hasFocus, int row and int column. The arguments provide the method with all the details required to implement bespoke design into the cells for the table.
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>