(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    19324: () => {}
    ,
    61730: (e, t, s) => {
        "use strict";
        s.d(t, {
            ThemeProvider: () => a
        });
        var l = s(95155)
          , r = s(12115);
        let n = (0,
        r.createContext)({});
        function a(e) {
            let {children: t, defaultTheme: s="system", storageKey: a="theme", ...o} = e
              , [c,i] = (0,
            r.useState)(s);
            return (0,
            r.useEffect)( () => {
                let e = window.document.documentElement;
                e.classList.remove("light", "dark"),
                e.classList.add(c)
            }
            , [c]),
            (0,
            l.jsx)(n.Provider, {
                ...o,
                value: {
                    theme: c,
                    setTheme: e => {
                        i(e),
                        localStorage.setItem(a, e)
                    }
                },
                children: t
            })
        }
    }
    ,
    63444: (e, t, s) => {
        Promise.resolve().then(s.t.bind(s, 19324, 23)),
        Promise.resolve().then(s.bind(s, 61730)),
        Promise.resolve().then(s.t.bind(s, 65299, 23))
    }
    ,
    65299: e => {
        e.exports = {
            style: {
                fontFamily: "'Inter', 'Inter Fallback'",
                fontStyle: "normal"
            },
            className: "__className_e8ce0c"
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [618, 441, 684, 358], () => t(63444)),
    _N_E = e.O()
}
]);
