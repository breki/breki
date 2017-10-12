# Code Documentation Phrases

## Introduction
This page is a collection of interesting phrases used in MSDN .NET documentation that can be used to help write your own source code documentation in a more user-friendly and consistent manner. The phrases are organized into the types of code elements they describe. Interesting parts of phrases have been emphasized in bold.

Perhaps in future this could serve as a basis for some kind of online/offline tool to assist in writing code documentation by suggesting common phrases.

## Interfaces
- **Defines methods** to manipulate generic collections. - [`ICollection<T>`](https://msdn.microsoft.com/en-us/library/92t2ye13(v=vs.110).aspx)
- **Defines a method** that a type implements to compare two objects. - [`IComparer<T>`](https://msdn.microsoft.com/en-us/library/system.collections.generic(v=vs.110).aspx)
- **Exposes** the enumerator, which supports a simple iteration over a collection of a specified type. - [`IEnumerable<T>`](https://msdn.microsoft.com/en-us/library/9eekhta0(v=vs.110).aspx)
- **Provides the base interface for the abstraction of** sets. - [`ISet<T>`](https://msdn.microsoft.com/en-us/library/system.collections.generic(v=vs.110).aspx)
- **Represents** a generic collection of key/value pairs. - [`IDictionary<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/s4ys34ea(v=vs.110).aspx)
- **Supports** a simple iteration over a generic collection. - [`IEnumerator<T>`](https://msdn.microsoft.com/en-us/library/78dfe2yb(v=vs.110).aspx)

## Base Classes
- **Provides a base class for implementations** of the `IComparer<T>` generic interface. - [`Comparer<T>`](https://msdn.microsoft.com/en-us/library/cfttsh47(v=vs.110).aspx)

## Classes (General)
- **Provides a collection** whose items are types that serve as keys. - [`KeyedByTypeCollection<TItem>`](https://msdn.microsoft.com/en-us/library/ms404549(v=vs.110).aspx)
- Provides a thread-safe collection that contains objects of a **type specified by the generic parameter** as elements. - [`SynchronizedCollection<T>`](https://msdn.microsoft.com/en-us/library/ms668265(v=vs.110).aspx)
- **Represents a collection** of keys and values. - [`Dictionary<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/xfhwa508(v=vs.110).aspx)
- **Represents a set** of values. - [`HashSet<T>`](https://msdn.microsoft.com/en-us/library/bb359438(v=vs.110).aspx)
- Represents a **strongly typed list** of objects that can be accessed by index. **Provides methods to search, sort, and manipulate** lists. - [`List<T>`](https://msdn.microsoft.com/en-us/library/6sh2ey19(v=vs.110).aspx)
- Represents a collection of key/value pairs that are sorted by key **based on the associated `IComparer<T>` implementation**. - [`SortedList<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/ms132319(v=vs.110).aspx)
- Represents a **variable size** last-in-first-out (LIFO) collection of **instances of the same specified type**. - [`Stack<T>`](https://msdn.microsoft.com/en-us/library/3278tedw(v=vs.110).aspx)

## Exceptions
- **The exception that is thrown when** the key specified for accessing an element in a collection does not match any key in the collection. - [`KeyNotFoundException`](https://msdn.microsoft.com/en-us/library/system.collections.generic.keynotfoundexception(v=vs.110).aspx)

## Structures (General)
- **Defines** a key/value pair that can be set or retrieved. - [`KeyValuePair<TKey, TValue>`](https://msdn.microsoft.com/en-us/library/5tbh8a42(v=vs.110).aspx)

## Enumerators (Structures)
- **Enumerates the elements of** a `Dictionary<TKey, TValue>`. - [`Dictionary<TKey, TValue>.Enumerator`](https://msdn.microsoft.com/en-us/library/k3z2hhax(v=vs.110).aspx)

## Constructors
- **Initializes a new instance of the** `List<T>` class **that is empty** and has the default initial capacity. -['List<T>.List<T>()'](https://msdn.microsoft.com/en-us/library/4kf43ys3(v=vs.110).aspx)
- **Initializes a new instance of the** `List<T>` class **that is empty** and has **the specified** initial capacity.. -['List<T>.List<T>(Int32)'](https://msdn.microsoft.com/en-us/library/dw8e0z9z(v=vs.110).aspx)

## Methods
- Adds an item to the `ICollection<T>` - [`IList<T>.Add(T)`](https://msdn.microsoft.com/en-us/library/63ywd54z(v=vs.110).aspx)
- **Determines the** index of **a specific item** in the `IList<T>`. - [`IList<T>.IndexOf(T)`](https://msdn.microsoft.com/en-us/library/3w0148af(v=vs.110).aspx)
- **Determines whether** the `ICollection<T>` contains **a specific value**. - [`IList<T>.Contains(T)`](https://msdn.microsoft.com/en-us/library/k5cf1d56(v=vs.110).aspx)
- Copies the elements of the `ICollection<T>` to an `Array`, starting at **a particular** `Array` index. - [`IList<T>.CopyTo(T[], Int32)`](https://msdn.microsoft.com/en-us/library/0efx51xw(v=vs.110).aspx)

## Properties
### Read-Only Properties
- Gets the number of elements contained in the `ICollection<T>` - [`IList<T>.Count`](https://msdn.microsoft.com/en-us/library/5s3kzhec(v=vs.110).aspx)

### Read-Write Properties
- Gets or sets the element at the specified index. - [`IList<T>.Item[Int32]`](https://msdn.microsoft.com/en-us/library/ewthkb10(v=vs.110).aspx)

### Boolean Properties
- Gets a value indicating whether the `ICollection<T> is read-only.` - [`IList<T>.IsReadOnly`](https://msdn.microsoft.com/en-us/library/0cfatk9t(v=vs.110).aspx)

## Resources 
- [System.Collections.Generic namespace](https://msdn.microsoft.com/en-us/library/system.collections.generic(v=vs.110).aspx) 
