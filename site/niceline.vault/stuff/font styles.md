`niceline` supports Unicode-based *font styles*, such as 𝐛𝐨𝐥𝐝, 𝗯𝗼𝗹𝗱 𝘀𝗮𝗻𝘀-𝘀𝗲𝗿𝗶𝗳, and 𝒸𝓊𝓇𝓈𝒾𝓋𝑒.

This works by replacing characters in the input with variant Unicode characters that have a given style or formatting applied. No formatting is actually taking place and after the *font style* transformation you’ll just have an entirely different string.

This kind trick uses variants such as [subscript and superscript](https://www.unicode.org/charts/nameslist/n_2070.html) characters, [mathematical font characters](https://codepoints.net/search?q=bold), and so on. This isn’t actually the purpose of these characters, but it works all the same. While some uses of this feature result in non-uniform text, `niceline` won’t provide such options.

Unicode font styles can be compared to ANSI formatting, though they have a different and at times complementary feature set. Specific Unicode characters will render in many places where ANSI formatting isn’t available, such as graphical user interfaces.

For `niceline` to successfully render a given bit of text using a font style, the styled variant characters must exist in the first place, and they must have a track record of rendering uniformly in many different configurations. This limits largely limits font styles to numbers and alphabetic character.

In addition, while some font style combinations exist, such as `bold+italic` or `!b!i`, others don’t, such as `bold+double-struck` or `!bd`. `bold+fraktur`, or `!b!f`, does exist though.

```ts
import {nice, style}

nice("sdfdfdsfdsfsdf").style("bold+italic")
```

| Markup | Style name        | Example                 | Limitation        |
| ------ | ----------------- | ----------------------- | ----------------- |
| `!b`   | `"bold"`          | `𝐡𝐞𝐥𝐥𝐨 𝐰𝐨𝐫𝐥𝐝` | Letters, Digits   |
| `!i`   | `"italic"`        | `𝘩𝘦𝘭𝘭𝘰 𝘸𝘰𝘳𝘭𝘥` | Letters, Digits   |
| `!s`   | `"sans"`          | `𝗁𝖾𝗅𝗅𝗈 𝗐𝗈𝗋𝗅𝖽` | Letters, Digits   |
| `!f`   | `"fraktur"`       | `𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡` | Letters, Digits   |
| `!c`   | `"cursive"`       | `𝒽𝑒𝓁𝓁𝑜 𝓌𝑜𝓇𝓁𝒹` | Letters, Digits   |
| `!d`   | `"double"`        | `𝕙𝕖𝕝𝕝𝕠 𝕨𝕠𝕣𝕝𝕕` | Letters, Digits   |
| `!bi`  | `"bold+italic"`   | `𝒉𝒆𝒍𝒍𝒐 𝒘𝒐𝒓𝒍𝒅` | Letters, Digits   |
| `!t`   | `"typewriter"`    | `𝚑𝚎𝚕𝚕𝚘 𝚠𝚘𝚛𝚕𝚍` | Letters, Digits   |
| ⋯      | `"⋯+⋯"`           | ⋯                       | ⋯                 |
| `![[`  | `"keycap"`        | `1️⃣2️⃣3️⃣4️⃣`          | Digits, `*+`      |
| `!_`   | `"subscript"`     | `₁₂₃₄`                  | Digits, `-+()=`   |
| `!^`   | `"superscript"`   | `¹²³⁴`                  | Digits, `-=()=`   |
| `!(`   | `"circled"`       | `ⓗⓔⓛⓛⓞ ⓦⓞⓡⓛⓓ`           | Letters, Digits   |
| `!((`  | `"circled2"`      | `⓵⓶⓷⓸`                  | Digits            |
| `![`   | `"squared"`       | `🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳` | Uppercase Letters |
| `!!(`  | `"black circled"` | 🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓   | Uppercase Letters |

In addition, the following font styles insert spacing or similar marks between each character. They all begin with `#`, which must follow the regular formatting options.

|        |                 |                     |                            |                  |
| ------ | --------------- | ------------------- | -------------------------- | ---------------- |
| `!#-`  | `"nobreak"`     | h⁠e⁠l⁠l⁠o w⁠o⁠r⁠l⁠d | Prevents line breaks       | U+2060<br>U+00A0 |
| `!#/6` | `"em/6"`        | h e l l o w o r l d | Separates with ⅙ em spaces | U+2006           |
| `!#/4` | `"em/4"`        | h e l l o w o r l d | Separates with ¼ em spaces | U+2005           |
| `!#/3` | `"em/3"`        | h e l l o w o r l d | Separates with ⅓ em spaces | U+2004           |
| `!#/2` | `"em/2"` `"en"` | h e l l o w o r l d | Separates with ½ em spaces | U+2000           |
| `!#/1` | `"em"`          | h e l l o           | Separates with em spaces   | U+2001           |

| Style              |         |                           |                         | Character |
| ------------------ | ------- | ------------------------- | ----------------------- | --------- |
| `"below.dash"`     | `!_--`  | Dash below                | `ẖe̱ḻḻo̱ w̱o̱ṟḻḏ` |           |
| `"below.dot`       | `!_.`   | Dot below                 | `ḥẹḷḷọ ẉọṛḷḍ` | U+0323    |
| `"below.minus"`    | `!_-`   | Minus below               | `h̠e̠l̠l̠o̠ w̠o̠r̠l̠d̠` | U+0320    |
| `"below.ddot"`     | `!_..`  | Double dot below          | `h̤e̤l̤l̤o̤ w̤o̤r̤l̤d̤` | U+0324    |
| `"below.lline"`    | `!_=`   | Double line below         | `h̳e̳l̳l̳o̳ w̳o̳r̳l̳d̳` | U+0333    |
| `"below.caret`     | `!_^`   | Caret below               | `h̯e̯l̯l̯o̯ w̯o̯r̯l̯d̯` | U+032F    |
| `"below.line"`     | `!__`   | Line below                | `h̲e̲l̲l̲o̲ w̲o̲r̲l̲d̲` | U+0331    |
| `"below.cross"`    | `!_x`   | X below                   | `h͓e͓l͓l͓o͓ w͓o͓r͓l͓d͓` | U+0353    |
| `"below.angler"`   | `!_>`   | Right angle bracket below | `h͕e͕l͕l͕o͕ w͕o͕r͕l͕d͕` | U+0355    |
| `"below.anglel"`   | `!_<`   | Left angle bracket below  | `h͔e͔l͔l͔o͔ w͔o͔r͔l͔d͔` | U+0354    |
| `"below.asterisk"` | `!_*`   | Asterisk below            | `h͙e͙l͙l͙o͙ w͙o͙r͙l͙d͙` | U+0359    |
| `"below.plus`      | `!_+`   | Plus below                | `h̟e̟l̟l̟o̟ w̟o̟r̟l̟d̟` | U+031F    |
| `"below.circle"`   | `!_0`   | Ring below                | `h̥e̥l̥l̥o̥ w̥o̥r̥l̥d̥` | U+0325    |
| `"below.tilde"`    | `!_~`   | Tilde below               | `h̰ḛl̰l̰o̰ w̰o̰r̰l̰d̰` | U+0330    |
| `"below.tee"`      | `!_T`   | Tack below                | `h̞e̞l̞l̞o̞ w̞o̞r̞l̞d̞` | U+031E    |
| `"below.infty"`    | `!_oo`  | Infinity below            | `h͚e͚l͚l͚o͚ w͚o͚r͚l͚d͚` | U+035A    |
| `"below.arrowlr"`  | `!_<->` | Left-right arrow below    | `h͍e͍l͍l͍o͍ w͍o͍r͍l͍d͍` | U+034D    |
| `"below.bridgeup"` |         | Inverted bridge below     | `h̺e̺l̺l̺o̺ w̺o̺r̺l̺d̺` | U+033A    |
| `"below.bridgedn"` |         | Bridge below              | `h̪e̪l̪l̪o̪ w̪o̪r̪l̪d̪` | U+032A    |

he following use overlay characters:

|                   |                  |               |                        |        |
| ----------------- | ---------------- | ------------- | ---------------------- | ------ |
| `"overlay.slash"` | ``!+/``          | Slash overlay | h̸e̸l̸l̸o̸ ̸w̸o̸r̸l̸d̸ | U+0338 |
| `"overlay.dash"`  | <code>!+-</code> | Dash overlay  | h̶e̶l̶l̶o̶ ̶w̶o̶r̶l̶d̶ | U+20D2 |



