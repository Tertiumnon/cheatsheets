# CSharp

## Methods

### Aggregate (Reduce)

#### Import Aggregate

```charp
using System.Linq;
```

#### Example 1. Summing numbers

```c#
var nums = new[]{1,2,3,4};
var sum = nums.Aggregate( (a,b) => a + b);
Console.WriteLine(sum); // output: 10 (1+2+3+4)
```

#### Example 2. create a csv from an array of strings

```charp
var chars = new []{"a","b","c", "d"};
var csv = chars.Aggregate( (a,b) => a + ',' + b);
Console.WriteLine(csv); // Output a,b,c,d
```

#### Example 3. Multiplying numbers using a seed

```charp
var multipliers = new []{10,20,30,40};
var multiplied = multipliers.Aggregate(5, (a,b) => a * b);
Console.WriteLine(multiplied); //Output 1200000 ((((5*10)*20)*30)*40)
```

#### References

- [linq-aggregate-algorithm-explained](https://stackoverflow.com/questions/7105505/linq-aggregate-algorithm-explained)
