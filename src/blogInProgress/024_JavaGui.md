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
&#8226; Explore the Java Swing package to create a GUI with Java.<br>
&#8226; Understand how JFrame, JTable and Renderer can be used together for custom GUI views.<br>
&#8226; Create a simple Java GUI to display array data within a column.<br>



<br>
<h4>The Java Swing package</h4>
<p>
In this blog post, I will be using the Java Swing package to create a GUI from a Java application.
The Swing package is included within the Java as an API for providing a graphical user interface (GUI) to an application.
</p>
<p>
We will use three classes from the Swing framework to create a GUI with a table and custom formatting:<br>
&#8226; JFrame to create the outline of the GUI.<br>
&#8226; JTable to create  and populate a table within the GUI.<br>
&#8226; Renderer to provide custom formatting to the table.<br>
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
&#8226; <code>setSize(x, y)</code> to set the size of the frame.<br>
&#8226; <code>setVisible(true)</code> to make the frame visible.<br>
&#8226; <code>frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)</code> to shutdown the application when the frame is closed.<br>
</p>
<p>
The Frame class is created with the Singleton design pattern to ensure the application consistently refers to the same GUI instance.

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
The main method will set the properties as well as a title and the ability to resize the frame:

```java{numberLines:true}
Frame frame = Frame.getFrameInstance();
        frame.setVisible(true);
        frame.setSize(400,400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("My frame");
        frame.setResizable(true);
```
</p>
<p>
An alternative to the <code>setSize(x,y)</code> method is <code>pack()</code> which will automatically adjust the size of the frame so that all its contents are visible at the preferred size. 
</p>
<br>
<h4>Adding a Table to the GUI</h4>
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
&#8226; <code>addColumn(Object[])</code> to add in further columns to the table.<br>
&#8226; <code>setValueAt(Object value, int row, int column)</code> to reset the value of a cell.<br>
&#8226; <code>JTable(int row, int column)</code> constructor to create a table with a set number of columns and rows.<br>

</p>
<br>
<h4>Adding the table to the gui</h4>
<p>
Before we can add the table to the GUI, we need to create a view component within the GUI. <code>JScrollPane</code> provides a scrollable view of a component for the GUI. From our main method, we will instantiate the JTable instance and pass it into a JScrollPane instance as an argument. The single argument constructor for the JScrollPane is used to take in a Component to display within the pane.<br>
The JTable we create is passed in as an argument as it extends from Component in the following hierarchy: Component > Container > JComponent > JTable.
</p>
<p>
The JTable and JScrollPane are defined in the main method. The frame then takes the JScrollPane with the table Component. 

```java{numberLines:true}
 JTable table = new TableBuilder().buildTable();
        JScrollPane jp = new JScrollPane(table);
        frame.add(jp);
```
When we run the application, we will see the following GUI with the rows and columns:

![Single Column Table](../../src/images/024_Table.png)

</p>
<p>
We can further enhance the table to include more descriptive column names and values that are passed into 
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