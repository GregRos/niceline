import {
    aliasName,
    aliasNamespace,
    ascii,
    named,
    namespace
} from "../../registered"

export const op = namespace("op", [
    ascii("⊕", "{(+)}", ["circ:plus", "oplus"]),
    ascii("⊖", "{(-)}", ["circ:minus", "ominus"]),
    ascii("⊗", "{(x)}", ["circ:times", "otimes"]),
    ascii("⊙", "{(.)}", ["circ:dot", "odot"]),
    ascii("⨸", "{(:)}", ["circ:colon", "ocolon"]),
    ascii("⊘", "{(/)}", ["circ:slash", "oslash"]),
    ascii("⊛", "{(*)}", ["circ:ast", "oast"]),
    ascii("⊚", "{(o)}", ["circ:circ", "ocirc"]),
    ascii("⊜", "{(=)}", ["circ:equal", "oeq"]),
    ascii("⨀", "{((.))}}", ["circ:dot:big", "odot:big"]),
    ascii("⨁", "{((+))}", ["circ:plus:big", "oplus:big"]),
    ascii("⨂", "{((x))}", ["circ:times:big", "otimes:big"]),
    ascii("±", "{+-}", ["plusminus", "plusminus"]),
    ascii("∓", "{-+}", ["minusplus", "minusplus"]),
    namespace("times|multiply", [
        ascii("×", "{x}", ["", "s1"]),
        ascii("⨉", "{X}", ["s2"]),
        ascii("✕", "{xx}", ["s3"]),
        ascii("✖", "{XX}", ["s4"])
    ]),
    named("∙", ["cdot", "*"]),
    ascii("√", "{|/}", ["root", "sqrt"]),
    ascii("∛", "{|3/}", ["root:3", "cbrpt"]),
    ascii("∜", "{|4/}", ["root:4", "qrrt"]),

    ascii("÷", "{-:-}", ["division", "div"]),
    namespace("sum|sigma", [
        ascii("∑", "{Z|}", ["", "1"]),
        ascii("⨊", "{Zo|}", ["modulo"])
    ]),
    named("∑", ["sum", "sigma"]),
    named("⨊", ["sum"]),
    namespace("plus", [
        namespace("above", [
            ascii("⨣", "{+^^^}", ["breve"]),
            ascii("⨢", "{+^^o}", ["circ"]),
            ascii("⨤", "{+^^~}", ["tilde"])
        ]),
        namespace("below", [
            ascii("⨥", "{+__.}", ["dot"]),
            ascii("⨦", "{+__~}", ["circ"])
        ])
    ]),
    named("∏", ["product", "prod", "pi"]),
    namespace("int|integral", [
        ascii("∫", "{S|}", ["", "1"]),
        ascii("∬", "{SS|}", ["2"]),
        ascii("∭", "{SSS|}", ["3"]),
        ascii("⨌", "{SSSS|}", ["4"]),
        named("∱", ["cw"]),
        named("⨘", ["product", "prod"]),
        namespace("closed|contour|o", [
            named("∮", [""]),
            named("∯", ["2", "2d"]),
            named("∰", ["3", "3d"]),
            named("∲", ["cw"]),
            named("∳", ["ccw"])
        ]),
        aliasName("closed:2", ["surface"]),
        aliasName("closed:3", ["volume"])
    ]),
    aliasNamespace("integral:closed", ["oint"]),
    named("∂", ["partial", "pd"]),
    named("∇", ["nabla", "nabla", "del"]),
    named("∆", ["laplacian", "diff"]),
    ascii("∘", "{o}", ["ring", "circle", "circ", "compose"])
])
