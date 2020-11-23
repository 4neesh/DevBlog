---
title: 'Ready Set Golang 2'
date: 2020-12-10
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'Visit the Go syntax and design patterns for creating a CRUD web service.'
time: '15'
tags:
- Go
- Microservices
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Explore some of the key methods from the Go standard library for creating a web service.<br>
&#8226; Handle HTTP requests from a client to perform CRUD operations.<br>
&#8226; The.<br>

<br>
<h4>Adding AOP middleware to requests</h4>
<p>
In my previous blog, I explored how a Go allows us to create a CRUD application using the REST protocol and HTTP request and response.
In this blog, we will enhance the microservice CRUD application with Middleware, CORS and persistence of the data. 
By using the Handle and HandlerFunc methods, we are able to encapsulate the two together to create a middleware-type service.
</p>
<p>
First I will revisit some the Handle and HandlerFunc methods to differentiate between them:
Handle will take a string literal and a http.Handler implementation.
HandlerFunc will take a string literal and a func that uses the same method signature as the Http.Serve method as implemented by the http.Handler interface.
To create a middleware (encapsulated handler) we will use the http.Handle method for our string literal, and the Handler it uses for the second argument will be a
function that takes a HandlerFunc implementation and returns it. As a result, we are able to use the HandlerFunc implementation of handler.ServeHTTP within further curly braces:
</p>
<p>
Before:

```go{numberLines:true}
func main() {

	http.HandleFunc("/people", personHandler)
	http.HandleFunc("/people/", singlePersonHandler)
	http.ListenAndServe(":5000", nil)

}
func personHandler(w http.ResponseWriter, r *http.Request) {

...

}
func singlePersonHandler(w http.ResponseWriter, r *http.Request) {

	...
}

```
</p>
<p>
After:

```go{numberLines:true}
func main(){

    peopleHandler := http.HandlerFunc(personHandler)
    personHandler := http.HandlerFunc(singlePersonHandler)

	http.Handle("/people", middlewareHandler(peopleHandler))
	http.Handle("/people/", middlewareHandler(personHandler))
	http.ListenAndServe(":5000", nil)

}

func middlewareHandler(handler http.Handler) http.Handler{
    return http.HandlerFunc( func(w http.ResponseWriter, r *http.Request){
        //middleware logic before execution
        hander.ServeHTTP(w, r)
        //middleware logic after execution
    })
}

```

</p>

<br>
<h4>Creating a database for storage</h4>
<p>
Go includes an SQL package that can allow us to persist and query data from a persisted database.
To begin, I will use the MySQL workbench to create a new database and table with the default records of data required.
I have completed this using a SQL statement below:

```sql
CREATE DATABASE `go_store`
CREATE TABLE `go_store`.`people`(
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(45) NOT NULL,
    `Age` INT NOT NULL,
    PRIMARY KEY (`Id`)
);
INSERT INTO `go_store`.`people` (`Id`, `Name`, `Age`) VALUES (1, "Alice", 25);
INSERT INTO `go_store`.`people` (`Id`, `Name`, `Age`) VALUES (2, "Bob", 22);
INSERT INTO `go_store`.`people` (`Id`, `Name`, `Age`) VALUES (3, "Charlie", 23);
```
</p>

<br>
<h4>Connecting to the database from Go</h4>
<p>
Before we are able to connect our application to the database, we must make sure the appropriate packages are installed.
Go does not include the database drive for sql as standard in the library so it must be downloaded with the following command:
```
go get -u github.com/go-sql-driver/mysql
```
The main.go file will import the driver to be used inexplicitly as it need drive for go sql pacakge to work with database. 
Therefore we will also include it in main package as an underscored import:

```go
_ "github.com/go-sql-driver/mysql"
```
</p>
<p>
The database connection will be established in a separate package: database. The database.go file will use the sql.Open method from the sql package to create a connection.
A pool of database connections are defined within the <a href="https://golang.org/pkg/database/sql/#DB" target="_blank">DB</a> type from the sql package. 
The <a href="https://golang.org/pkg/database/sql/#Open" target="_blank">Open</a> method from the sql package is used to open a pool of database connections. 

The database.go file will appear as below where a SetupDatabase function is defined:

```go
package database

import (
	"database/sql"
	"log"
)

var DbConn *sql.DB

func SetupDatabase() {
	var err error

	DbConn, err = sql.Open("mysql",
		"root:java@tcp(127.0.0.1:3306)/go_db")

	if err != nil {
		log.Fatal(err)
	}

}
```
The var <code>DbConn</code> is defined within the package and assigned by the <code>sql.Open</code> method call on line 13. 
The first argument to the sql.Open defines the driver name. As we are using mysql, it is "mysql", however other driver names can be found <a href="https://github.com/golang/go/wiki/SQLDrivers" target="_blank">here</a>.
The second argument is the data source name. I have defined this using the following structure:
{database username}:{database password}@tcp(127.0.0.1:{port})/{database name}.
'tcp' stands for transmission control protocol which is the protocol used for sending data. The database is hosted locally this the 127.0.0.1 IP address. 
</p>
<p>
From the main method, I will call the database <code>SetupDatabase</code> method and run the application to confirm no error has been produced. 
Once the connection is established, we can begin to process user requests using sql queries. 
</p>

<br>
<h4>Making GET requests to the database</h4>
<p>
The first GET request we will need to make will pull in all People from the database.

```go
func getPeople() ([]Person, error) {

	results, err := database.DbConn.Query(`SELECT Id, Name, Age FROM people`)
	if err != nil {
		log.Fatal(err)
	}
	defer results.Close()
	personList := make([]Person, 0)
	for results.Next() {
		var person Person
		results.Scan(&person.Id, &person.Name, &person.Age)
		personList = append(personList, person)

	}
	return personList, nil

}
```
The <code>getPeople()</code> function will return an array of Person and an error when called.
The <a href="https://golang.org/pkg/database/sql/#DB.Query" taget="_blank">Query</a> method from the sql package will return an array of rows from the database and an error.
The Query statement is a used to return the defined fields in the order as specified by the struct <code>Person</code>. The error is evaluated if the request is not served.
The <code>defer results.Close()</code> method is used to ensure the results returned from the Query are closed at the end of the method. As we know results are returned, we must use the <a href="https://golang.org/pkg/database/sql/#Rows.Close" target="_blank">Close</a> method from the Rows package to prevent further access to the result after the function is executed.
The <code>make([]Person, 0)</code> method is used to create a dynamically-sized array known as a 'Slice'. The <code>personList</code> will be used to store each person as the database is scanned for each row.
The personList is populated by a for-loop upon the results where each row is iterated upon until there are no further rows. 
The <a href="https://golang.org/pkg/database/sql/#Rows.Scan" target="_blank">Scan</a>method from the Rows package will convert the values from each column into the values as specified in the arguments. 
Therefore the first column will be assigned to the &person.Id, second to &person.Name and finally &person.Age.
The method completes by returning the personList which will consist of an array populated by each record in the database. 
</p>

<p>
The second GET request used will be to obtain a single person from the database:


```go
func getPerson(personId int) (*Person, error) {

	row := database.DbConn.QueryRow(`SELECT Id, Name, Age FROM people where Id = ?`, personId)
	person := &Person{}

	err := row.Scan(&person.Id, &person.Name, &person.Age)
	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return person, nil
}
```

The <code>getPerson(personId int)</code> method will take in an int value to represent the personId and will perform a search for the user. The method will return a Person instance with an error.
The <code>row</code> item is defined as a single row by using the <a href="https://golang.org/pkg/database/sql/#DB.QueryRow" target="_blank">QueryRow</a> method. The QueryRow method differs from the Query 
method as it will only return the first result from the database. 
A new Person is instantiated, which will be populated with the <a href="https://golang.org/pkg/database/sql/#Row.Scan" target="_blank">row.Scan</a> method in line 6. The <code>row.Scan</code>
method will return the values of the fields as specified by the query. As a result, we pass the values from column 1 into person.Id, column 2 into person.Name and column 3 into person.Age. 
</p>
<p>
The error returned from <code>row.Scan</code> is evaluated against there being 0 records and any other errors which are otherwise returned. 
Lastly, the complete Person instance is returned.
</p>

<br>
<h4>Making POST requests to the database</h4>
<p>
The <code>insertPerson</code> method is used for making POST requests to the database. 

```go
func insertPerson(person Person) (int, error) {
	result, err := database.DbConn.Exec(`INSERT INTO people (Name, Age) 
	VALUES (?, ?);`, person.Name, person.Age)

	if err != nil {
		return 0, err
	}
	insertId, err := result.LastInsertId()
	if err != nil {
		return 0, nil
	}
	return int(insertId), nil
}
```
The method will take a Person instance and return an int (the personId) along with an error. 
The INSERT statement is made using the <a href="https://golang.org/pkg/database/sql/#DB.Exec" target="_blank">Exec</a> method without returning any rows.
The result from the <code>Exec</code> method will return information such as the number of rows affected. The <code>lastInsertId</code> method is used to return 
the latest Id from the database and it is returned from the method. 
</p>

<br>
<h4>Making DELETE requests to the database</h4>
<p>
The DELETE method is similar to the <code>insertPerson</code> method where the <code>Exec</code> method is used to call a custom SQL query:

```go
func deletePerson(personId int) error {
	_, err := database.DbConn.Exec(`DELETE FROM people where Id = ?`,
		personId)
	if err != nil {
		return err
	}
	return nil
}
```
</p>
<p>
The personId is passed into the method as a parameter and is used to perform the DELETE operation. 
</p>

<br>
<h4>Making PUT requests to the database</h4>
<p>
The UPDATE method also uses the <code>Exec</code> method to perform an update of a user:

```go
func updatePerson(person Person) error {
	_, err := database.DbConn.Exec(`UPDATE people SET Name = ?, Age = ? where Id = ?`,
		person.Name, person.Age, person.Id)
	if err != nil {
		return err
	}
	return nil
}
```
</p>
<p>
The query will update the Name and Age of the Person instance where the Id is as defined. 
The handler will define the new Person instance and pass it into the method. An error is returned as per the SQL result. 
</p>

<br>
<h4>Updating the handlers for the CRUD requests</h4>
<p>
The handler that were previously defined can now be updated to reference the CRUD methods that are defined above. 
There are two handlers to update, one for the "/people" pattern and one for the "/people/" pattern where an individual person is accessed. 
</p>
<p>
The <code>SinglePersonHandler</code> method will be responsible for extracting the final parameter from the URL to make an update to a single row.
As the query uses the personId, just 2 HTTP headers are supported: GET and DELETE. 
The updated method will obtain the Person instance through the new <code>getPerson</code> method:

```go
person, err := getPerson(personId)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}
```

The switch statement responsible for the GET and DELETE methods are updated as follows:

```go
switch r.Method {
	case http.MethodGet:
		personJson, err := json.Marshal(person)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(personJson)
	case http.MethodDelete:
		err := deletePerson(personId)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		return
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
```
The GET method will return the JSON of the Person instance as returned from the <code>getPerson</code> method by using <code>json.Marshal</code>. 
The Delete method will use the personId from the URL to perform the update to the database with the <code>deletePerson</code> method. 
A default <i>Status Method Not Allowed</i> error will be returned if the HTTP request is not GET or DELETE.
</p>
<p>
The PersonHandler will be responsible for handling GET, PUT and POST requests under the "/people" pattern from the URL. 
The GET method is updated to return a list of people using the <code>getPeople()</code> method:

```go
case http.MethodGet:
		personList, err := getPeople()
		if err != nil {
			log.Fatal(err)
		}
		personJson, err := json.Marshal(personList)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(personJson)
```
</p>
<p>
The PUT request will use the <code>updatePerson</code> method to perform the update once the request body has been processed and extracted. 
The person.Id from the request is extracted and performed. 

```go
var updatedPerson Person
		bodyBytes, err := ioutil.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		err = json.Unmarshal(bodyBytes, &updatedPerson)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		err = updatePerson(updatedPerson)

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		w.WriteHeader(http.StatusOK)
		return
```
</p>
<p>
The POST request uses the uses the <code>insertPerson</code> method to make the POST request:

```go
var newPerson Person

		personDetails, err := ioutil.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		err = json.Unmarshal(personDetails, &newPerson)
		if newPerson.Id != 0 {
			w.WriteHeader((http.StatusBadRequest))
			return
		}

		result, err := insertPerson(newPerson)
		if err != nil {
			log.Fatal(err)
		}
		if result == 0 {
			log.Fatal(err)
		}

		w.WriteHeader(http.StatusCreated)
		return
```

</p>

<br>
<h4>Summary</h4>
<p>
Go can be used for creating a microservice persisted by the database.

</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>