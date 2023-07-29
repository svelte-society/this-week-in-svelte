import { c as y, S as z, i as A, f as j, s as D, a as F, b as G, B as H, e as g, t as k, d as b, g as I, h, j as E, k as c, m as J, l as q, u as K, n as L, o as M, p as B, q as C, r as O, v as N, w as P } from "./Button-d256b521.js";
function Q(s) {
  F(s, "svelte-1pwxk4p", "section.svelte-1pwxk4p{--padding:2rem;box-shadow:0 0 1rem 0 rgba(0 0 0 / 0.3);padding:var(--padding);font-family:sans-serif;border-radius:0.5rem}hr.svelte-1pwxk4p{margin-inline:calc(-1 * var(--padding));margin-block:var(--padding)}h1.svelte-1pwxk4p{margin:0}div.svelte-1pwxk4p{margin-block-start:var(--padding)}");
}
function R(s) {
  let e;
  return {
    c() {
      e = k("Select");
    },
    m(l, u) {
      E(l, e, u);
    },
    d(l) {
      l && O(e);
    }
  };
}
function T(s) {
  var $;
  let e, l, u, p = (
    /*complex*/
    (($ = s[1]) == null ? void 0 : $.number) + ""
  ), f, m, d, a, w, _, i, o;
  const v = (
    /*#slots*/
    s[2].default
  ), n = G(
    v,
    s,
    /*$$scope*/
    s[4],
    null
  );
  return i = new H({
    props: {
      $$slots: { default: [R] },
      $$scope: { ctx: s }
    }
  }), i.$on(
    "click",
    /*click_handler*/
    s[3]
  ), {
    c() {
      e = g("section"), l = g("h1"), u = k(
        /*title*/
        s[0]
      ), f = k(p), m = b(), d = g("hr"), a = b(), n && n.c(), w = b(), _ = g("div"), I(i.$$.fragment), h(l, "class", "svelte-1pwxk4p"), h(d, "class", "svelte-1pwxk4p"), h(_, "class", "svelte-1pwxk4p"), h(e, "class", "svelte-1pwxk4p");
    },
    m(t, r) {
      E(t, e, r), c(e, l), c(l, u), c(l, f), c(e, m), c(e, d), c(e, a), n && n.m(e, null), c(e, w), c(e, _), J(i, _, null), o = !0;
    },
    p(t, [r]) {
      var S;
      (!o || r & /*title*/
      1) && q(
        u,
        /*title*/
        t[0]
      ), (!o || r & /*complex*/
      2) && p !== (p = /*complex*/
      ((S = t[1]) == null ? void 0 : S.number) + "") && q(f, p), n && n.p && (!o || r & /*$$scope*/
      16) && K(
        n,
        v,
        t,
        /*$$scope*/
        t[4],
        o ? M(
          v,
          /*$$scope*/
          t[4],
          r,
          null
        ) : L(
          /*$$scope*/
          t[4]
        ),
        null
      );
      const x = {};
      r & /*$$scope*/
      16 && (x.$$scope = { dirty: r, ctx: t }), i.$set(x);
    },
    i(t) {
      o || (B(n, t), B(i.$$.fragment, t), o = !0);
    },
    o(t) {
      C(n, t), C(i.$$.fragment, t), o = !1;
    },
    d(t) {
      t && O(e), n && n.d(t), N(i);
    }
  };
}
function U(s, e, l) {
  let { $$slots: u = {}, $$scope: p } = e, { title: f = "" } = e, { complex: m } = e;
  function d(a) {
    P.call(this, s, a);
  }
  return s.$$set = (a) => {
    "title" in a && l(0, f = a.title), "complex" in a && l(1, m = a.complex), "$$scope" in a && l(4, p = a.$$scope);
  }, [f, m, u, d, p];
}
class V extends z {
  constructor(e) {
    super(), A(this, e, U, T, D, { title: 0, complex: 1 }, Q);
  }
  get title() {
    return this.$$.ctx[0];
  }
  set title(e) {
    this.$$set({ title: e }), j();
  }
  get complex() {
    return this.$$.ctx[1];
  }
  set complex(e) {
    this.$$set({ complex: e }), j();
  }
}
customElements.define("twis-card", y(V, { title: {}, complex: { type: "Object", reflect: !0 } }, ["default"], [], !0));
export {
  V as default
};
