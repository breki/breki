# Code Documentation Samples/Templates

## Summaries

### Base Classes
- Provides a base class for implementations of the `IComparer<T>` generic interface. - [`Comparer<T>`](https://msdn.microsoft.com/en-us/library/cfttsh47(v=vs.110).aspx)

### Classes
- Provides a collection whose items are types that serve as keys. - [`KeyedByTypeCollection<TItem>`](https://msdn.microsoft.com/en-us/library/ms404549(v=vs.110).aspx)
- Provides a thread-safe collection that contains objects of a type specified by the generic parameter as elements. - [`SynchronizedCollection<T>`](https://msdn.microsoft.com/en-us/library/ms668265(v=vs.110).aspx)
- Represents a collection of keys and values. - [`Dictionary<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/xfhwa508(v=vs.110).aspx)
- Represents a set of values. - [`HashSet<T>`](https://msdn.microsoft.com/en-us/library/bb359438(v=vs.110).aspx)
- Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists. - [`List<T>`](https://msdn.microsoft.com/en-us/library/6sh2ey19(v=vs.110).aspx)
- Represents a collection of key/value pairs that are sorted by key based on the associated `IComparer<T>` implementation. - [`SortedList<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/ms132319(v=vs.110).aspx)
- Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type. - [`Stack<T>`](https://msdn.microsoft.com/en-us/library/3278tedw(v=vs.110).aspx)

### Exceptions
- The exception that is thrown when the key specified for accessing an element in a collection does not match any key in the collection. - [`KeyNotFoundException`](https://msdn.microsoft.com/en-us/library/system.collections.generic.keynotfoundexception(v=vs.110).aspx)

### Structures
- Defines a key/value pair that can be set or retrieved. - [`KeyValuePair<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/5tbh8a42(v=vs.110).aspx)

#### Enumerators
- Enumerates the elements of a `Dictionary<TKey, TValue>`. - [`Dictionary<TKey, TValue>.Enumerator`](https://msdn.microsoft.com/en-us/library/k3z2hhax(v=vs.110).aspx)

## Resources 
- [System.Collections.Generic namespace](https://msdn.microsoft.com/en-us/library/system.collections.generic(v=vs.110).aspx) 
