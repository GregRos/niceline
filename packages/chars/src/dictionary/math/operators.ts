import { shape } from "../../defs/namespace/shape"

export default shape({
    op: {
        "⊕": ["{(+)}", "circ:plus", "oplus"],
        "⊖": ["{(-)}", "circ:minus", "ominus"],
        "⊗": ["{(x)}", "circ:times", "otimes"],
        "⊙": ["{(.)}", "circ:dot", "odot"],
        "⨸": ["{(:)}", "circ:colon", "ocolon"],
        "⊘": ["{(/)}", "circ:slash", "oslash"],
        "⊛": ["{(*)}", "circ:ast", "oast"],
        "⊚": ["{(o)}", "circ:circ", "ocirc"],
        "⊜": ["{(=)}", "circ:equal", "oeq"],
        "⨀": ["{((.))}}", "circ:dot:big", "odot:big"],
        "⨁": ["{((+))}", "circ:plus:big", "oplus:big"],
        "⨂": ["{((x))}", "circ:times:big", "otimes:big"],
        "±": ["{+-}", "plusminus", "plusminus"],
        "∓": ["{-+}", "minusplus", "minusplus"],
        times: {
            "×": ["{x}", "", "s1"],
            "⨉": ["{X}", "s2"],
            "✕": ["{xx}", "s3"],
            "✖": ["{XX}", "s4"]
        },
        "∙": [null, "cdot", "*"],
        "√": ["{|/}", "root", "sqrt"],
        "∛": ["{|3/}", "root:3", "cbrpt"],
        "∜": ["{|4/}", "root:4", "qrrt"],
        "÷": ["{-:-}", "division", "div"],
        sum: {
            "∑": ["{Z|}", "", "1"],
            "⨊": ["{Zo|}", "modulo"]
        },
        // aliasName for "∑" with ["sum", "sigma"] - handled by namespace prefix
        // aliasName for "⨊" with ["sum"] - handled by namespace prefix
        plus: {
            above: {
                "⨣": ["{+^^^}", "breve"],
                "⨢": ["{+^^o}", "circ"],
                "⨤": ["{+^^~}", "tilde"]
            },
            below: {
                "⨥": ["{+__.}", "dot"],
                "⨦": ["{+__~}", "circ"]
            }
        },
        "∏": [null, "product", "prod", "pi"],
        int: {
            "∫": ["{S|}", "", "1"],
            "∬": ["{SS|}", "2"],
            "∭": ["{SSS|}", "3"],
            "⨌": ["{SSSS|}", "4"],
            "∱": [null, "cw"],
            "⨘": [null, "product", "prod"],
            closed: {
                "∮": [null, ""],
                "∯": [null, "2", "2d"],
                "∰": [null, "3", "3d"],
                "∲": [null, "cw"],
                "∳": [null, "ccw"]
            }
            // aliasName("closed:2", ["surface"]) - removed as per instructions
            // aliasName("closed:3", ["volume"]) - removed as per instructions
        },
        // aliasNamespace("integral:closed", ["oint"]) - removed as per instructions
        "∂": [null, "partial", "pd"],
        "∇": [null, "nabla", "nabla", "del"],
        "∆": [null, "laplacian", "diff"],
        "∘": ["{o}", "ring", "circle", "circ", "compose"]
    }
})
