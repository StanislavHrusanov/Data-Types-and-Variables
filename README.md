# Data-Types-and-Variables
Problems for exercise and homework from my training in Softuni

## **1. Echo Type**

Write a JS function that takes **one parameter** and **prints** on two
lines the **type** of the parameter and then one of the following:

  - If the parameter type is either **string** or **number**, print its
    value

  - Otherwise, print the text **'Parameter is not suitable for
    printing'**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'Hello, JavaScript!'</strong></td>
<td><p><strong>string</strong></p>
<p><strong>Hello, JavaScript!</strong></p></td>
</tr>
<tr class="even">
<td><strong>18</strong></td>
<td><p><strong>number</strong></p>
<p><strong>18</strong></p></td>
</tr>
<tr class="odd">
<td><strong>null</strong></td>
<td><p><strong>object</strong></p>
<p><strong>Parameter is not suitable for printing</strong></p></td>
</tr>
</tbody>
</table>

## **2. Concatenate Names**

Write a **function**, which receives two **names** as **string
parameters** and a **delimiter**. Print the names **joined** by the
delimiter.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>'John',</strong></p>
<p><strong>'Smith',</strong></p>
<p><strong>'-&gt;'</strong></p></td>
<td><strong>John-&gt;Smith</strong></td>
</tr>
<tr class="even">
<td><p><strong>'Jan',</strong></p>
<p><strong>'White',</strong></p>
<p><strong>'&lt;-&gt;'</strong></p></td>
<td><strong>Jan&lt;-&gt;White</strong></td>
</tr>
<tr class="odd">
<td><p><strong>'Linda',</strong></p>
<p><strong>'Terry',</strong></p>
<p><strong>'=&gt;'</strong></p></td>
<td><strong>Linda=&gt;Terry</strong></td>
</tr>
</tbody>
</table>


## **3. Right Place**

You will receive **3 parameters (string, char, string).**  
The first string will be a word with a **missing char** replaced with an
underscore '**\_**'.  
You have to **replace** the missing character (**underscore**) of the
first string with the character passed as the second parameter and
**compare** the result with the second string.

If they are equals, you should print "**Matched**", otherwise print
"**Not Matched**".

### Examples

| **Input**                | **Output**  |
| ------------------------ | ----------- |
| 'Str\_ng', 'I', 'Strong' | Not Matched |
| 'Str\_ng', 'i', 'String' | **Matched** |


## **4. Integer and Float**

You will receive **3 numbers**. Your task is to find their **sum** and
print result to the console in the following format:  
**\`{sum} - {type of the number (Integer or Float)}\`**

### Examples

| **Input**         | **Output**        |
| ----------------- | ----------------- |
| 9, 100, 1.1       | 110.1 - Float     |
| **100, 200, 303** | **603 - Integer** |


## **5. Amazing Numbers**

Write a **function**, which as **input** will receive a **number**.

**Check** and print if it is **amazing** or **not** into the following
format:

**"{number} Amazing? {True or False}"**

An amazing number includes the **digit 9** the sum of its digits.

**Examples** for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5
+ 8 + 3 + 4 + 7 + 2 = 29)

### Examples

| **Input** | **Output**         |
| --------- | ------------------ |
| 1233      | 1233 Amazing? True |
| 999       | 999 Amazing? False |


## **6. Gramophone**

Write a **function**, which as **input** will receive **3 parameters
(strings)**

  - **The first string** is the name of the **band**

  - **The second string** is the name of the **album**

  - **The third** is holding a **song** name from the album

You have to find out how many **times** the plate will **rotate** the
given song from the album.

<span class="underline">The plate makes a full rotation every **2.5**
seconds.</span>

The song **duration in seconds** is calculate by the given formula:

**(albumName.length \* bandName.length) \* song-name.length / 2**

As **output,** you should print the following message:

**\`The plate was rotated {rotations} times.\`**

Rotations should be **rounded up**.

### Examples

| **Input**                               | **Output**                       |
| --------------------------------------- | -------------------------------- |
| 'Black Sabbath', 'Paranoid', 'War Pigs' | The plate was rotated 167 times. |
| 'Rammstein', 'Sehnsucht', 'Engel'       | The plate was rotated 81 times.  |


## **7. Required reading**

Write a **function** to help **Ivan** calculate how many hours a day he
has to spend reading the necessary literature from the list given for
the summer vacation.

As **input,** you will receive **3 parameters:**

  - **Number of pages of the current book** - **integer** \[1… 1000\]

  - **Pages read in 1 hour** - **integer** \[1… 1000\]

  - **The number of days for which you must read the book** -
    **integer** \[1… 1000\]

As **output** print on the console the **number of hours**, that Ivan
has to read each day.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Explanations</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>212,</strong></p>
<p><strong>20</strong> <strong>,</strong></p>
<p><strong>2</strong></p></td>
<td>5.3</td>
<td><p>Total time to read the book: <strong>212 pages / 20 pages per hour = 10.6 hours</strong></p>
<p>Required hours per day: <strong>10.6 hours / 2 days = 5.3 hours</strong> per day</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>432,</strong></p>
<p><strong>15</strong> <strong>,</strong></p>
<p><strong>4</strong></p></td>
<td>7.2</td>
<td><p>Total reading time of the book: <strong>432 pages / 15 pages per hour = 28.8 hours</strong></p>
<p>Required hours per day: <strong>28.8 hours / 4 days = 7.2 hours</strong> per day</p></td>
</tr>
</tbody>
</table>

## **8. Centuries to Minutes**

Write a program that receives a **number** of **centuries** and converts
it to **years**, **days**, **hours**, and **minutes**.

**Examples**

| **Input** | **Output**                                                                    |
| --------- | ----------------------------------------------------------------------------- |
| **1**     | **1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes**    |
| **5**     | **5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes** |


## **9. Special Numbers**

Write a program that receives a number **n.** For all numbers in the
range **\[1…n\]** print the number and if it is special or not (**True**
/ **False**).

  - A **number** is **special** when its **sum of digits is 5, 7 or
    11**.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>15</strong></td>
<td><p><strong>1 -&gt; False</strong></p>
<p><strong>2 -&gt; False</strong></p>
<p><strong>3 -&gt; False</strong></p>
<p><strong>4 -&gt; False</strong></p>
<p><strong>5 -&gt; True</strong></p>
<p><strong>6 -&gt; False</strong></p>
<p><strong>7 -&gt; True</strong></p>
<p><strong>8 -&gt; False</strong></p>
<p><strong>9 -&gt; False</strong></p>
<p><strong>10 -&gt; False</strong></p>
<p><strong>11 -&gt; False</strong></p>
<p><strong>12 -&gt; False</strong></p>
<p><strong>13 -&gt; False</strong></p>
<p><strong>14 -&gt; True</strong></p>
<p><strong>15 -&gt; False</strong></p></td>
</tr>
<tr class="even">
<td><strong>20</strong></td>
<td><p><strong>1 -&gt; False</strong></p>
<p><strong>2 -&gt; False</strong></p>
<p><strong>3 -&gt; False</strong></p>
<p><strong>4 -&gt; False</strong></p>
<p><strong>5 -&gt; True</strong></p>
<p><strong>6 -&gt; False</strong></p>
<p><strong>7 -&gt; True</strong></p>
<p><strong>8 -&gt; False</strong></p>
<p><strong>9 -&gt; False</strong></p>
<p><strong>10 -&gt; False</strong></p>
<p><strong>11 -&gt; False</strong></p>
<p><strong>12 -&gt; False</strong></p>
<p><strong>13 -&gt; False</strong></p>
<p><strong>14 -&gt; True</strong></p>
<p><strong>15 -&gt; False</strong></p>
<p><strong>16 -&gt; True</strong></p>
<p><strong>17 -&gt; False</strong></p>
<p><strong>18 -&gt; False</strong></p>
<p><strong>19 -&gt; False</strong></p>
<p><strong>20 -&gt; False</strong></p></td>
</tr>
</tbody>
</table>


## **10. Triples of Latin Letters**

Write a program that receives a string of **number** **n** and print all
**triples** of the first **n small Latin letters**, ordered
alphabetically:

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'3'</strong></td>
<td><p><strong>aaa</strong></p>
<p><strong>aab</strong></p>
<p><strong>aac</strong></p>
<p><strong>aba</strong></p>
<p><strong>abb</strong></p>
<p><strong>abc</strong></p>
<p><strong>aca</strong></p>
<p><strong>acb</strong></p>
<p><strong>acc</strong></p>
<p><strong>baa</strong></p>
<p><strong>bab</strong></p>
<p><strong>bac</strong></p>
<p><strong>bba</strong></p>
<p><strong>bbb</strong></p>
<p><strong>bbc</strong></p>
<p><strong>bca</strong></p>
<p><strong>bcb</strong></p>
<p><strong>bcc</strong></p>
<p><strong>caa</strong></p>
<p><strong>cab</strong></p>
<p><strong>cac</strong></p>
<p><strong>cba</strong></p>
<p><strong>cbb</strong></p>
<p><strong>cbc</strong></p>
<p><strong>cca</strong></p>
<p><strong>ccb</strong></p>
<p><strong>ccc</strong></p></td>
</tr>
<tr class="even">
<td><strong>2</strong></td>
<td><p><strong>aaa</strong></p>
<p><strong>aab</strong></p>
<p><strong>aba</strong></p>
<p><strong>abb</strong></p>
<p><strong>baa</strong></p>
<p><strong>bab</strong></p>
<p><strong>bba</strong></p>
<p><strong>bbb</strong></p></td>
</tr>
</tbody>
</table>

## **11. Sum Digits**

Write a **function**, which will be given a single **number**. Your task
is to find the **sum** of its digits.

### Examples

| **Input** | **Output** |
| --------- | ---------- |
| 245678    | **32**     |
| 97561     | **28**     |
| 543       | **12**     |

## **12. Chars to String**

Write a **function**, which receives **3 parameters**. Each parameter is
a single character. Combine all the characters into **one** string and
print it on the console.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'a',</p>
<p>'b',</p>
<p>'c'</p></td>
<td>abc</td>
</tr>
<tr class="even">
<td><p>'%',</p>
<p>'2',</p>
<p>'o'</p></td>
<td>%2o</td>
</tr>
<tr class="odd">
<td><p>'1',</p>
<p>'5',</p>
<p>'p'</p></td>
<td>15p</td>
</tr>
</tbody>
</table>

## **13. Town Info**

You will be given **3 parameters**. The first parameter will be the name
of the **town** (string), the second – the **population** (number), and
the third the **area** (number). Print the result in the following
format:

"**Town {town name} has population of {population} and area {area}
square km.**"

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'Sofia',</p>
<p>1286383,</p>
<p>492</p></td>
<td>Town Sofia has population of 1286383 and area 492 square km.</td>
</tr>
<tr class="even">
<td><p>'Plovdiv',</p>
<p>1481353,</p>
<p>512</p></td>
<td>Town Plovdiv has population of 1481353 and area 512 square km.</td>
</tr>
</tbody>
</table>

## **14. Convert Meters to Kilometres**

You will be given a **number** that will be the distance in **meters**.
Write a program that converts **meters** to **kilometers** formatted to
the **second decimal** point.

### Examples

| **Input** | **Output** |
| --------- | ---------- |
| 1852      | 1.85       |
| 798       | 0.80       |

## **15. Pounds to Dollars**

Write a **function** that converts British **pounds** to **dollars**
formatted to the **3rd decimal point**.

  - 1 British Pound = 1.31 Dollars

### Examples

| **Input** | **Output** |
| --------- | ---------- |
| 80        | 104.800    |
| 39        | 51.090     |

## **16. Reversed Chars**

Write a program that takes **3 parameters** (characters) and prints them
in **reversed order** with a space between them.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'A',</p>
<p>'B',</p>
<p>'C'</p></td>
<td>C B A</td>
</tr>
<tr class="even">
<td><p>'1',</p>
<p>'L',</p>
<p>'&amp;'</p></td>
<td>&amp; L 1</td>
</tr>
</tbody>
</table>

## **17. Lower or Upper**

Write a **function** that prints whether a given character is
**upper-case** or **lower-case**.

### Examples

| **Input** | **Output** |
| --------- | ---------- |
| 'L'       | upper-case |
| 'f'       | lower-case |

## **18. \*Calculator**

Write a **function** that receives 3 parameters: a **number**, an
**operator** (string), and **another number**.

The **operator** can be: **'+', '-', '/', '\*'.** Print the result of
the calculation on the console formatted to the **second decimal**
point.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>'+',</p>
<p>10</p></td>
<td>15.00</td>
</tr>
<tr class="even">
<td><p>25.5,</p>
<p>'-',</p>
<p>3</p></td>
<td>22.50</td>
</tr>
</tbody>
</table>

## **19. \*Gladiator Expenses**

As a gladiator, Peter has to repair his broken equipment when he loses a
fight. His equipment consists of a helmet, sword, shield, and armor. You
will receive Peter\`s **lost fights count**.

  - Every **second** lost game, his helmet is broken.

  - Every **third** lost game, his sword is broken.

  - When both **his sword and helmet are broken** in the same lost
    fight, his **shield also breaks**.

  - **Every** **second time**, when his shield brakes, his **armor**
    also needs to be repaired.

You will receive the price of each item in his equipment. Calculate his
expenses for the year for renewing his equipment.

**Input / Constraints**

You will receive 5 parameters to your function:

  - The first parameter - **lost fights count** - is an integer in the
    range **\[0, 1000\]**.

  - The second parameter - **helmet price** - is the floating-point
    number in the range **\[0, 1000\]**.

  - The third parameter - **sword price** - is the floating-point number
    in the range **\[0, 1000\]**.

  - The fourth parameter - **shield price** - is the floating-point
    number in the range **\[0, 1000\]**.

  - The fifth parameter - **armor price** - is the floating-point number
    in the range **\[0, 1000\]**.

**Output**

  - As output you must print Peter\`s total expenses for new equipment
    rounded to the second decimal point: **"Gladiator expenses:
    {expenses} aureus"**

<!-- end list -->

  - Allowed working **time** / **memory**: **100ms** / **16MB**.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>7,</p>
<p>2,</p>
<p>3,</p>
<p>4,</p>
<p>5</p></td>
<td>Gladiator expenses: 16.00 aureus</td>
<td><p>Trashed helmet -&gt; 3 times</p>
<p>Trashed sword -&gt; 2 times</p>
<p>Trashed shield -&gt; 1 time</p>
<p>Total: 6 + 6 + 4 = 16.00 aureus;</p></td>
</tr>
<tr class="even">
<td><p>23,</p>
<p>12.50,</p>
<p>21.50,</p>
<p>40,</p>
<p>200</p></td>
<td>Gladiator expenses: 608.00 aureus</td>
<td></td>
</tr>
</tbody>
</table>

## **20. \*Spice Must Flow**

*Spice is Love, Spice is Life. And most importantly, Spice must flow. It
must be extracted from the scorching sands of Arrakis, under the
constant threat of giant sandworms. To make the work as efficient as
possible, the Duke has tasked you with the creation of management
software.*

Write a program that calculates the **total amount** of spice that can
be extracted from a source. The source has a **starting yield**, which
indicates how much spice can be mined on the **first day**. After it has
been mined for a day, the **yield drops** by 10, meaning on the second
day it’ll produce 10 less spice than on the first, on the third day 10
less than on the second, and so on (see examples). A source is
considered profitable only while its yield is **at least** 100 – when
less than 100 spices are expected in a day, abandon the source.

The mining crew **consumes** 26 spices **every day** at the end of their
shift and **an additional** 26 after the mine has been exhausted. Note
that the workers **cannot** consume more spice than there is in storage.

When the operation is complete, print on the console on two separate
lines how many **days** the mine has operated and the **total** amount
of spice extracted.

### Input 

You will receive a number, representing the **starting yield** of the
source.

### Output 

Print on the console on two separate lines how many **days** the mine
has operated and the **total amount** of spice extracted.

###  Constraints 

  - The starting yield will be a **number** within range \[0…228\].

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>111</td>
<td><p>2</p>
<p>134</p></td>
<td><p><strong>Day 1</strong> we extract 111 spices and at the end of the shift, the workers consume 26, leaving 85. The yield drops by 10 to 101.</p>
<p><strong>On day 2</strong> we extract 101 spices, the workers consume 26, leaving 75. The total is 160 and the yield has dropped to 91.</p>
<p><strong>Since</strong> the expected yield is less than 100, we abandon the source. The workers take another 26, leaving 134. The mine has operated for 2 days.</p></td>
</tr>
<tr class="even">
<td>450</td>
<td><p>36</p>
<p>8938</p></td>
<td></td>
</tr>
</tbody>
</table>

## **21. Digits with Words**

Write a **function** that receives a **digit** in the form of a **word**
(as a **string)** and prints the **digit** (as a **number)**.

**Examples**

| **Input**  | **Output** |
| ---------- | ---------- |
| **'nine'** | **9**      |
| **'two'**  | **2**      |
| **'zero'** | **0**      |


## **22. Prime Number Checker**

Write a **function** to check if a number is **prime** (only divisible
by itself and one).

The **input** comes as a single number argument.

The **output** should be the return value of your function. Return
**true** for prime number and **false** otherwise.

**Examples**

| **Input** | **Output** |
| --------- | ---------- |
| 7         | **true**   |
| 8         | **false**  |
| **81**    | **false**  |


## **23. Cone**

Write a **function** to calculate a cone’s **volume** and **total**
**surface area** by given height and radius of the base.

The **input** comes as two number arguments. The first element is the
cone’s **radius** and the second is its **height**.

The **output** should be printed to the console on a **new line** for
every result. The result should be formatted to the **fourth decimal
point.**

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>3,</p>
<p>5</p></td>
<td><p><strong>volume = 47.1239</strong></p>
<p><strong>area = 83.2298</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>3.3,</strong></p>
<p><strong>7.8</strong></p></td>
<td><p><strong>volume = 88.9511</strong></p>
<p><strong>area = 122.0159</strong></p></td>
</tr>
</tbody>
</table>


## **24. Biggest of 3 Numbers**

Write a **function** that finds the **biggest number**.

The **input** comes as 3 parameters.

The **output** is the **biggest** of the input numbers.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>-2,</p>
<p>7,</p>
<p>3</p></td>
<td><strong>7</strong></td>
</tr>
<tr class="even">
<td><p><strong>130,</strong></p>
<p><strong>5,</strong></p>
<p><strong>99</strong></p></td>
<td><strong>130</strong></td>
</tr>
<tr class="odd">
<td><p><strong>43,</strong></p>
<p><strong>43.2,</strong></p>
<p><strong>43.1</strong></p></td>
<td><strong>43.2</strong></td>
</tr>
<tr class="even">
<td><p><strong>2,</strong></p>
<p><strong>2,</strong></p>
<p><strong>2</strong></p></td>
<td><strong>2</strong></td>
</tr>
</tbody>
</table>

## **25. Binary to Decimal**

Write a **function** that reads an 8-bit binary number and converts it
to a decimal.

The **input** comes as one string element, representing a binary number.

The **output** should be printed to the console.

**Examples**

| **Input**    | **Output** |
| ------------ | ---------- |
| 00001001     | **9**      |
| **11110000** | **240**    |

## **26. Chess Board**

Write a **function** to print a chessboard of size **n X n**. See the
example for more information.

The **input** comes as a single number argument **n**.

The **output** should be returned as a result of your function in the
form of a string.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>3</td>
<td><p><strong>&lt;div class="chessboard"&gt;</strong></p>
<p><strong>&lt;div&gt;</strong></p>
<p><strong>&lt;span class="black"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="white"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="black"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;/div&gt;</strong></p>
<p><strong>&lt;div&gt;</strong></p>
<p><strong>&lt;span class="white"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="black"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="white"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;/div&gt;</strong></p>
<p><strong>&lt;div&gt;</strong></p>
<p><strong>&lt;span class="black"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="white"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;span class="black"&gt;&lt;/span&gt;</strong></p>
<p><strong>&lt;/div&gt;</strong></p>
<p><strong>&lt;/div&gt;</strong></p></td>
</tr>
</tbody>
</table>

## **27. Triangle Area**

Write a **function** that calculates a **triangle’s area** by its 3
sides.

The **input** comes as three number arguments, representing one **side**
of a triangle.

The **output** should be printed to the console.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>2,</p>
<p>3.5,</p>
<p>4</p></td>
<td><strong>3.</strong> <strong>4994419197923547</strong></td>
</tr>
<tr class="even">
<td><p>3</p>
<p>5.5</p>
<p>4</p></td>
<td><strong>5.854685623498498</strong></td>
</tr>
</tbody>
</table>
