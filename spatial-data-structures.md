# Spatial Data Structures

## B-tree
- self-balancing tree data structure
- generalization of a binary search tree in that a node can have more than two children
- internal (non-leaf) nodes can have a variable number of child nodes
- each internal node of a B-tree contains a number of keys that act as separation values which divide its subtrees
- allows searches, sequential access, insertions, and deletions
- well suited for storage systems that read and write relatively large blocks of data

## B+ tree
- an N-ary tree with a variable but often large number of children per node
- consists of a root, internal nodes and leaves
- the root may be either a leaf or a node with two or more children
- can be viewed as a B-tree in which each node contains only keys (not key–value pairs), and to which an additional level is added at the bottom with linked leaves
- the primary value of a B+ tree is in storing data for efficient retrieval in a block-oriented storage context — in particular, filesystems

## B* tree
- balances more neighboring internal nodes to keep the internal nodes more densely packed
- ensures non-root nodes are at least 2/3 full instead of 1/2

## k-d tree
- a space-partitioning data structure for organizing points in a k-dimensional space
- a special case of binary space partitioning trees
- a binary tree in which every leaf node is a k-dimensional point
- every non-leaf node can be thought of as implicitly generating a splitting hyperplane that divides the space into two parts, known as half-spaces
- useful for range search and nearest neighbor search

## Quadtree
- a tree data structure in which each internal node has exactly four children
- most often used to partition a two-dimensional space by recursively subdividing it into four quadrants or regions
- The subdivided regions may be square or rectangular, or may have arbitrary shapes

## Q-tree

## R-tree
- groups nearby objects and represents them with their minimum bounding rectangle in the next higher level of the tree
- it can store both point and spatial data
- at the leaf level, each rectangle describes a single object
- higher levels aggregate an increasing number of objects
- a balanced search tree
- organizes the data in pages
- range query
- accelerates nearest neighbor search
- designed for storage on disk
- search: O(logM(n)), where M is the maximum number of entries on a page and n is the number of elements

## R*-tree
- variant of R-tree
- have slightly higher construction cost than standard R-trees, but the resulting tree will usually have a better query performance
- it can store both point and spatial data
- R*-tree attempts to reduce the coverage and overlap using a combination of a revised node split algorithm and the concept of forced reinsertion at node overflow

## R+ tree
- a variant of the R tree
- a compromise between R-trees and kd-trees: they avoid overlapping of internal nodes by inserting an object into multiple leaves if necessary
- R+ trees differ from R trees in that: ]
    - nodes are not guaranteed to be at least half filled, 
    - the entries of any internal node do not overlap, 
    - an object ID may be stored in more than one leaf node
- because nodes are not overlapped with each other, point query performance benefits since all spatial regions are covered by at most one node
- since rectangles are duplicated, an R+ tree can be larger than an R tree built on same data set
- construction and maintenance of R+ trees is more complex

## Hilbert R-tree
- an R-tree variant
- an extension to B+-tree for multidimensional objects
- uses space-filling curves, and specifically the Hilbert curve, to impose a linear ordering on the data rectangles

## Resources
- [Wikipedia: B-tree](https://en.wikipedia.org/wiki/B-tree)
- [Wikipedia: B+ tree](https://en.wikipedia.org/wiki/B%2B_tree)
- [Wikipedia: Hilbert R-tree](https://en.wikipedia.org/wiki/Hilbert_R-tree)
- [Wikipedia: k-d tree](https://en.wikipedia.org/wiki/K-d_tree)
- [Wikipedia: Quadtree](https://en.wikipedia.org/wiki/Quadtree)
- [Wikipedia: R-tree](https://en.wikipedia.org/wiki/R-tree)
- [Wikipedia: R* tree](https://en.wikipedia.org/wiki/R*_tree)
- [Wikipedia: R+ tree](https://en.wikipedia.org/wiki/R%2B_tree)
