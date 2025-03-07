# Graph Representations
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I used information from the slides to help understand the matrix representation a little better to help visualize it along with the knowing the terms to make sure I had it right.

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

To me it seems like the complexity would be $O(i^2)$  (i in this case would be the
verticies, I realized that although yes you are technically checking all of the edges
you are still iterating over the verticies to check the edges, this means that regardless
of if there are any edges between the verticies you will always run $i^2$  number of times) in 
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

I couldn't quite get the code for the reverse to work. However, I think I have a good
basis of how to do it. I would have to initialize an array of size # of verticies * #
of verticies. Then I can do a double for loop through the list to find where there are 
edges between verticies and then put a 1 where there are in the corresponding spot in
the matrix. I kinda just ran out of time though and don't have a way to save my work.
The runtime complexity seems like it would end up being $O(V * E)$ because we would have
a loop that runs over all of the verticies and then all of the edges in each vertex.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
