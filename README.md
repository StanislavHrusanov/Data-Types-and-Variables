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


