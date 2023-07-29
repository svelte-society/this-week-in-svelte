var z = Object.defineProperty;
var F = (e, t, n) => t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var l = (e, t, n) => (F(e, typeof t != "symbol" ? t + "" : t, n), n);
function x() {
}
function b(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function T(e) {
  return e();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function y(e) {
  e.forEach(T);
}
function D(e) {
  return typeof e == "function";
}
function G(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function K(e) {
  return Object.keys(e).length === 0;
}
function Q(e, t, n, s) {
  if (e) {
    const r = I(e, t, n, s);
    return e[0](r);
  }
}
function I(e, t, n, s) {
  return e[1] && s ? b(n.ctx.slice(), e[1](s(t))) : n.ctx;
}
function W(e, t, n, s) {
  if (e[2] && s) {
    const r = e[2](s(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const i = [], o = Math.max(t.dirty.length, r.length);
      for (let u = 0; u < o; u += 1)
        i[u] = t.dirty[u] | r[u];
      return i;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function X(e, t, n, s, r, i) {
  if (r) {
    const o = I(t, n, s, i);
    e.p(o, r);
  }
}
function Y(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let s = 0; s < n; s++)
      t[s] = -1;
    return t;
  }
  return -1;
}
function Z(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function v(e, t) {
  const n = {};
  t = new Set(t);
  for (const s in e)
    !t.has(s) && s[0] !== "$" && (n[s] = e[s]);
  return n;
}
function tt(e, t) {
  e.appendChild(t);
}
function et(e, t, n) {
  const s = nt(e);
  if (!s.getElementById(t)) {
    const r = j("style");
    r.id = t, r.textContent = n, st(s, r);
  }
}
function nt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function st(e, t) {
  return tt(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function H(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function j(e) {
  return document.createElement(e);
}
function rt(e) {
  return document.createTextNode(e);
}
function Nt() {
  return rt(" ");
}
function ot(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function J(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const it = ["width", "height"];
function P(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const s in t)
    t[s] == null ? e.removeAttribute(s) : s === "style" ? e.style.cssText = t[s] : s === "__value" ? e.value = e[s] = t[s] : n[s] && n[s].set && it.indexOf(s) === -1 ? e[s] = t[s] : J(e, s, t[s]);
}
function ct(e) {
  return Array.from(e.childNodes);
}
function Ct(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function B(e, t, n) {
  e.classList.toggle(t, !!n);
}
function ut(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let A;
function g(e) {
  A = e;
}
function ft(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((s) => s.call(this, t));
}
const h = [], M = [];
let _ = [];
const R = [], lt = /* @__PURE__ */ Promise.resolve();
let E = !1;
function at() {
  E || (E = !0, lt.then(V));
}
function k(e) {
  _.push(e);
}
const w = /* @__PURE__ */ new Set();
let d = 0;
function V() {
  if (d !== 0)
    return;
  const e = A;
  do {
    try {
      for (; d < h.length; ) {
        const t = h[d];
        d++, g(t), $t(t.$$);
      }
    } catch (t) {
      throw h.length = 0, d = 0, t;
    }
    for (g(null), h.length = 0, d = 0; M.length; )
      M.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      w.has(n) || (w.add(n), n());
    }
    _.length = 0;
  } while (h.length);
  for (; R.length; )
    R.pop()();
  E = !1, w.clear(), g(e);
}
function $t(e) {
  if (e.fragment !== null) {
    e.update(), y(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(k);
  }
}
function dt(e) {
  const t = [], n = [];
  _.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), _ = t;
}
const m = /* @__PURE__ */ new Set();
let ht;
function q(e, t) {
  e && e.i && (m.delete(e), e.i(t));
}
function _t(e, t, n, s) {
  if (e && e.o) {
    if (m.has(e))
      return;
    m.add(e), ht.c.push(() => {
      m.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function gt(e, t) {
  const n = {}, s = {}, r = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const o = e[i], u = t[i];
    if (u) {
      for (const f in o)
        f in u || (s[f] = 1);
      for (const f in u)
        r[f] || (n[f] = u[f], r[f] = 1);
      e[i] = u;
    } else
      for (const f in o)
        r[f] = 1;
  }
  for (const o in s)
    o in n || (n[o] = void 0);
  return n;
}
function St(e) {
  e && e.c();
}
function mt(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), k(() => {
    const i = e.$$.on_mount.map(T).filter(D);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : y(i), e.$$.on_mount = [];
  }), r.forEach(k);
}
function pt(e, t) {
  const n = e.$$;
  n.fragment !== null && (dt(n.after_update), y(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bt(e, t) {
  e.$$.dirty[0] === -1 && (h.push(e), at(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function yt(e, t, n, s, r, i, o, u = [-1]) {
  const f = A;
  g(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: x,
    not_equal: r,
    bound: S(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: S(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(c.root);
  let a = !1;
  if (c.ctx = n ? n(e, t.props || {}, ($, L, ...N) => {
    const C = N.length ? N[0] : L;
    return c.ctx && r(c.ctx[$], c.ctx[$] = C) && (!c.skip_bound && c.bound[$] && c.bound[$](C), a && bt(e, $)), L;
  }) : [], c.update(), a = !0, y(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const $ = ct(t.target);
      c.fragment && c.fragment.l($), $.forEach(O);
    } else
      c.fragment && c.fragment.c();
    t.intro && q(e.$$.fragment), mt(e, t.target, t.anchor), V();
  }
  g(f);
}
let U;
typeof HTMLElement == "function" && (U = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    l(this, "$$ctor");
    /** Slots */
    l(this, "$$s");
    /** The Svelte component instance */
    l(this, "$$c");
    /** Whether or not the custom element is connected */
    l(this, "$$cn", !1);
    /** Component props data */
    l(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    l(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    l(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    l(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    l(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return () => {
          let o;
          return {
            c: function() {
              o = j("slot"), i !== "default" && J(o, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, a) {
              H(c, o, a);
            },
            d: function(c) {
              c && O(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = ut(this);
      for (const i of this.$$s)
        i in s && (n[i] = [t(i)]);
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = p(o, i.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const o = p(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const u = this.$$c.$on(i, o);
          this.$$l_u.set(o, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = p(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function p(e, t, n, s) {
  var i;
  const r = (i = n[e]) == null ? void 0 : i.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function wt(e, t, n, s, r, i) {
  let o = class extends U {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var c;
        f = p(u, f, t), this.$$d[u] = f, (c = this.$$c) == null || c.$set({ [u]: f });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), i && (o = i(o)), e.element = /** @type {any} */
  o, o;
}
class xt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    l(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    l(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    pt(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!D(n))
      return x;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !K(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Et = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Et);
function kt(e) {
  et(e, "svelte-1i5hxsb", "button.svelte-1i5hxsb{background-color:lightgreen;padding:0.5rem 1rem;border-radius:0.5rem;font-weight:bold;border:0}");
}
function Ot(e) {
  let t, n, s, r;
  const i = (
    /*#slots*/
    e[2].default
  ), o = Q(
    i,
    e,
    /*$$scope*/
    e[1],
    null
  );
  let u = [
    /*$$restProps*/
    e[0]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = b(f, u[c]);
  return {
    c() {
      t = j("button"), o && o.c(), P(t, f), B(t, "svelte-1i5hxsb", !0);
    },
    m(c, a) {
      H(c, t, a), o && o.m(t, null), t.autofocus && t.focus(), n = !0, s || (r = ot(
        t,
        "click",
        /*click_handler*/
        e[3]
      ), s = !0);
    },
    p(c, [a]) {
      o && o.p && (!n || a & /*$$scope*/
      2) && X(
        o,
        i,
        c,
        /*$$scope*/
        c[1],
        n ? W(
          i,
          /*$$scope*/
          c[1],
          a,
          null
        ) : Y(
          /*$$scope*/
          c[1]
        ),
        null
      ), P(t, f = gt(u, [a & /*$$restProps*/
      1 && /*$$restProps*/
      c[0]])), B(t, "svelte-1i5hxsb", !0);
    },
    i(c) {
      n || (q(o, c), n = !0);
    },
    o(c) {
      _t(o, c), n = !1;
    },
    d(c) {
      c && O(t), o && o.d(c), s = !1, r();
    }
  };
}
function jt(e, t, n) {
  const s = [];
  let r = v(t, s), { $$slots: i = {}, $$scope: o } = t;
  function u(f) {
    ft.call(this, e, f);
  }
  return e.$$set = (f) => {
    t = b(b({}, t), Z(f)), n(0, r = v(t, s)), "$$scope" in f && n(1, o = f.$$scope);
  }, [r, o, i, u];
}
class At extends xt {
  constructor(t) {
    super(), yt(this, t, jt, Ot, G, {}, kt);
  }
}
wt(At, {}, ["default"], [], !0);
export {
  At as B,
  xt as S,
  et as a,
  Q as b,
  wt as c,
  Nt as d,
  j as e,
  V as f,
  St as g,
  J as h,
  yt as i,
  H as j,
  tt as k,
  Ct as l,
  mt as m,
  Y as n,
  W as o,
  q as p,
  _t as q,
  O as r,
  G as s,
  rt as t,
  X as u,
  pt as v,
  ft as w
};
