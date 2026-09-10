// ====> Q   U   E   S   T   I   O   N ----- 1 <=====
var a = 10
document.write("The value of a is a  : " + a)
document.write("<br>..........................................")
++a
document.write("<br><br>The value of ++a is a  : " + a)
document.write("<br>Now the value of a is : 11 ")

document.write("<br><br>The value of a++ is : " + a++)
document.write("<br>Now the value of a++ is : " + a)

document.write("<br><br>The value of --a is : " + --a)
document.write("<br>Now the value of a is : " + a)

document.write("<br><br>The value of a-- is : " + a--)
document.write("<br>Now the value of a is : " + a + "<br>")


// ====> Q   U   E   S   T   I   O   N ----- 2 <=====

var a = 2
var b = 1
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>")
document.write("b is " + b + "<br>")
document.write("result is " + result)

// ====> Q   U   E   S   T   I   O   N ----- 3 <=====
var user = prompt("Enter your Name")
document.write("<br>Welcome " + user + "<br>")



// ====> Q   U   E   S   T   I   O   N ----- 4 <=====

var table = prompt("Enter  Table Number : ")
if (table == "") {
    table = 5
}
document.write("<h1>Table Of " + table + " </h1>")
document.write("<br>" + table + " * " + " 1 " + " = " + (table * 1))
document.write("<br>" + table + " * " + " 2 " + " = " + (table * 2))
document.write("<br>" + table + " * " + " 3 " + " = " + (table * 3))
document.write("<br>" + table + " * " + " 4 " + " = " + (table * 4))
document.write("<br>" + table + " * " + " 5 " + " = " + (table * 5))
document.write("<br>" + table + " * " + " 6 " + " = " + (table * 6))
document.write("<br>" + table + " * " + " 7 " + " = " + (table * 7))
document.write("<br>" + table + " * " + " 8 " + " = " + (table * 8))
document.write("<br>" + table + " * " + " 9 " + " = " + (table * 9))
document.write("<br>" + table + " * " + " 10 " + " = " + (table * 10))



// ====> Q   U   E   S   T   I   O   N ----- 5 <=====
var subject1 = prompt("Enter Your subject 1 Name")
var subject2 = prompt("Enter Your subject 2 Name")
var subject3 = prompt("Enter Your subject 3 Name")
var totalMarks = 100
var totals = totalMarks + totalMarks + totalMarks
var subject1ObatinedMarks = +prompt("Enter your obtained marks")
var subject2ObatinedMarks = +prompt("Enter your obtained marks")
var subject3ObatinedMarks = +prompt("Enter your obtained marks")
var obtainedTotal = subject1ObatinedMarks + subject2ObatinedMarks + subject3ObatinedMarks
var percantage = obtainedTotal / totals * 100
var sub1percantage = subject1ObatinedMarks / totalMarks * 100
var sub2percantage = subject2ObatinedMarks / totalMarks * 100
var sub3percantage = subject3ObatinedMarks / totalMarks * 100

document.write(`<table border="1">
        <tr>
            <th>Subjects</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percantage</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${totalMarks}</td>
            <td>${subject1ObatinedMarks}</td>
            <td>${sub1percantage}%</td>

        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${totalMarks}</td>
            <td>${subject2ObatinedMarks}</td>
            <td>${sub2percantage}%</td>

        </tr>

        <tr>
            <td>${subject3}</td>
            <td>${totalMarks}</td>
            <td>${subject3ObatinedMarks}</td>
            <td>${sub3percantage}%</td>

        </tr>
        <tr>
            <td></td>
            <td>${totals}</td>
            <td>${obtainedTotal}</td>
            <td>${percantage}%</td>
        </tr>
    </table>`)

