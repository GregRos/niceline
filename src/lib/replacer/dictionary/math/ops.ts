import { ascii, namespace } from "../../registered"

export const ops = namespace("op", [
    ascii("+-", "±", ["plusminus", "plusminus"]),
    ascii("-+", "∓", ["minusplus", "minusplus"]),
    ascii("x", "⨉", ["times", "x", "times", "x"]),
    ascii("cdot", "∙", ["cdot"]),
    ascii("|/", "√", ["root", "sqrt"]),
    ascii("|3/", "∛", ["root:3", "cbrpt"]),
    ascii("|4/", "∜", ["root:4", "qrrt"]),

    ascii("-:-", "÷", ["division", "div"]),
    ascii("sum", "∑", ["sum", "sum", "sigma"]),
    ascii("prod", "∏", ["prod[uct]", "pi"]),
    ascii("int", "∫", ["int"]),
    ascii("oint", "∮", ["oint", "int:closed", "int:contour"]),
    ascii("int:2", "∬", ["int:2", "double:int"]),
    ascii("int:3", "∭", ["int:3", "triple:int"]),
    ascii("int:4", "⨌", ["int:4", "quadruple:int"]),

    ascii("pd", "∂", ["partial", "pd"]),
    ascii("del", "∇", ["nabla", "nabla", "del"]),
    ascii("diff", "∆", ["laplacian", "diff"]),
    ascii("circ", "∘", ["ring", "circle", "circ", "compose"]),

    ascii("set:minus", "∖", ["set:minus"]),
    ascii("cap", "∩", ["set:and", "set:cap", "cap"]),
    ascii("cup", "∪", ["set:or", "union", "cup", "set:cup"]),
    ascii("cap:big", "⋂", ["set:and:big", "set:cap:big", "cap:big"]),
    ascii("cup:big", "⋃", ["set:or:big", "union:big", "cup:big"]),
    ascii("land", "∧", ["logic:and", "land"]),
    ascii("lor", "∨", ["logic:or", "lor"]),
    ascii("lnot", "¬", ["logic:not", "lnot"]),
    ascii("forall", "∀", ["logic:forall", "forall"]),
    ascii("exists", "∃", ["logic:exists", "exists"]),
    ascii("infty", "∞", ["infinity", "infty"]),
    ascii("0", "∅", ["set:empty", "empty"]),
    ascii("(+)", "⊕", ["circ:plus", "oplus"]),
    ascii("(-)", "⊖", ["circ:minus", "ominus"]),
    ascii("(x)", "⊗", ["circ:times", "otimes"]),
    ascii("(.)", "⊙", ["circ:dot", "odot"]),
    ascii("(/)", "⊘", ["circ:slash", "oslash"])
])
