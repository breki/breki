# F# Cheatsheet

## Types

### Arrays
#### Declare an array
```fsharp
let alpha = [| 'A' .. 'Z' |]
```
```fsharp
let alpha = [| 'A' ; 'Z' |]
```
```fsharp
let results = [| for i in 1 .. 64 -> square i |]
```

#### Access array elements by index
```fsharp
alpha.[index]
```

### Sequences
#### Exists
```fsharp
input |> Seq.exists(fun c -> Char.IsLower c)
```
#### Sum by
```fsharp
results |> Seq.sumBy(fun res -> extractValue res)
```

### Sets
#### Declare an empty set
```fsharp
let usedRobotNames: Set<string> = Set.empty
```
#### Convert a list to set
```fsharp
let allChars = [ 'a' .. 'z' ] |> Set
```

#### Set contains
```fsharp
Set.contains candidateName usedRobotNames
```

#### Is subset
```fsharp
Set.isSubset smallerSet biggerSet
```

#### Add to set
```fsharp
let mutable usedRobotNames: Set<string> = Set.empty

usedRobotNames <- Set.add chosenName usedRobotNames
```

#### Set map
```fsharp
let usedChars = Set.ofSeq input
    |> Set.map (Char.ToLower)
```

### Classes
```fsharp
type Robot (name: string) =
    member this.Name = name
```

## Constructs
### Match
#### With `when`
```fsharp
match radius with
    | r when r > 10.0 -> 0
    | r when r > 5.0 -> 1
    | r when r > 1.0 -> 5
    | _ -> 10
```


```fsharp
```
