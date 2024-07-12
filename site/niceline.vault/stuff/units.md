Niceline has feature for humanizing values in different units and converting between them. 

The library recognizes the following units. The highlighted units are valid *input units*, while the other ones will be used as output units either automatically or when specified. Each unit is part of a **scale** that proceeds horizontally. 
![[kilobyte (kB).svg]]
# Humanize
For this function, you need to specify the input unit by name as a property.

```ts title:humanize.ts
import {nice} from "niceline"
const value = 1_234_567

nice(x).byte // 1.23 MB ; decimal scale
nice(x).ibyte // 1.18 MiB ; binary scale
nice(x).bit // 1.23 Mb
nice(x).meter // 1234.5 km
nice(x).kilogram // 1.23 tonnes
nice(x).gram // 1.23 kilograms
nice(x).pound // 607.2 tons
nice(x).foot // 233.8 miles
```

Time units are taken to be duration and humanized differently, since humans don’t really use increments like `2.4 days`. 

```ts
x.duration // 2w 6h
```

## Derived units
Each input unit has a similar function that ends with `s_`. For example, `bytes_`. This function accepts a postfix to the unit as a string. This postfix can reference other units or apply exponentiation.

This will scale the unit appropriately if exponentiation is applied.

```ts title:humanize.derived.ts
import {nice} from "niceline"
const value = 1_234_567

// Dividing by another unit:
nice(x).bytes_("/s") // 1.23 MB/s

// Exponentiation to get an area unit:
ncie(x).meters_("^2") // 1.23 km²

// Dividing by s^2 to get an acceleration unit:
nice(x).meters_("/s^2") // 1234.5 meters/s²
```
When division is involved, the library will never try to humanize the denominator unit. 

# Unit literals
You can specify the input unit as an explicit string, which lets you specify any supported unit on any scale.

After doing this, you have several options.

## Humanize
This will do the same thing to the input as invoking the unit shorthands, changing the unit and the quantity so it displays nicely.
```ts title:humanize.string.ts
import {nice} from "niceline"
const value = 1_234_567

// Humanize a value in GB/s
nice(value).from_("GB/s").humanize // 1.23 "PB/s"
```
## Convert
You can specify the target unit explicitly. The unit can be from a different scale, so long as it’s convertible to the input scale.

```ts title:humanize.convert.ts
import {nice} from "niceline"
const value = 1_234_567

// Convert from MB/s to Gb/s:
nice(value).from_("MB/s").to("Gb/s") // 9645.1 Gb/s
```

Converting lets you force expressions such as `2.4 days` to appear when otherwise these wouldn’t occur automatically.

```ts title:humanize.2.4.days
import {nice} from "niceline"
const value = 1_234_567

// Convert seconds to days:
nice(value).from_("s").to("d") // 14.28 days 
```

