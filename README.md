# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

To me it seems like the complexity would be $O(i * j)$  in my case because the
outer loop runs over all of the rows in the adjacency matrix and initializes
an empty list for said row. Then the inner loop runs over the columns of the
matrix and determines whether there is a connection between the two nodes.
Therefore i being the height and j being the width of the matrix it should be
$O(i * j)$. 

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
