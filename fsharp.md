# F# Cheatsheet

## Resources
### Articles
- [Choosing between collection functions](https://fsharpforfunandprofit.com/posts/list-module-functions/)
### Videos
- [Mark Seemann: Look, No Mocks! Functional TDD with F#](https://www.infoq.com/presentations/mock-fsharp-tdd/)

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

#### 2D arrays as class members
```fsharp
type DemData(width, height) =
    member this.Cells = Array2D.create width height NoHeight
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
#### Size of the set
```fsharp
Set.count usedChars
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

### Type aliases
#### Used for functions
```fsharp
type FetchSrtmTiles = SrtmTileCoords seq -> SrtmTileHgtFile seq
```

### Tuples
- [F# for fun and profit: Tuples](https://fsharpforfunandprofit.com/posts/tuples/)

```fsharp
type SrtmTileHgtFile = SrtmTileCoords * string
```

### Records
- [F# for fun and profit: Records](https://fsharpforfunandprofit.com/posts/records/)

```fsharp
type Bounds = { 
    MinLon: double
    MinLat: double 
    MaxLon: double 
    MaxLat: double
    }
```

#### Creating records
```fsharp
let bounds = { 
    MinLon = 10.1; MinLat = 20.1; 
    MaxLon = 10.2; MaxLat = 20.2
}
```

#### Empty record
```fsharp
type NoHeight = NoHeight of unit
```

### Single-case union types
```fsharp
type SrtmTileHgtFile = SrtmTileHgtFile of SrtmTileCoords * string
```
#### Creating
```fsharp
SrtmTileHgtFile (tileCoords, Path.Combine(localCacheDir, tileHgtFileName))
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

## FSUnit
```fsharp
|> should equal "N10W001"
stream |> should not' (equal None)
demData |> should be ofExactType<DemData>
```
