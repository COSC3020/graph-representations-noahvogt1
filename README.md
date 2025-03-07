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

To me it seems like the complexity would be $O(i * j)$  (i in this case would
be the verticies and j would be the possible edges between said verticies) in 
my case because theouter loop runs over all of the rows in the adjacency matrix 
and initializesan empty list for said row. Then the inner loop runs over the 
columns of thematrix and determines whether there is a connection between the 
two nodes.Therefore i being the height and j being the width of the matrix it 
should be $O(i * j)$. 

Also it definetly depends on both the verticies and the edges, because the outer
loop is running over all of the edges providing us with the i complexity. Then, 
the inner loop is iterating over all of the edges between any of the given 
verticies which gives us the j complexity. Therefore I believe that the complexity
relies on both in this case.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
