(function () {
  "use strict";
  var e = {
      7206: function (e, a, t) {
        var o = t(5130),
          n = t(6768);
        const s = { key: 1 };
        function i(e, a, t, o, i, r) {
          const d = (0, n.g2)("loader-comp"),
            c = (0, n.g2)("nav-bar"),
            l = (0, n.g2)("router-view"),
            u = (0, n.g2)("scroll-up-comp");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", null, [
              i.loading
                ? ((0, n.uX)(), (0, n.Wv)(d, { key: 0 }))
                : ((0, n.uX)(),
                  (0, n.CE)("div", s, [
                    (0, n.bF)(c),
                    (0, n.bF)(l, null, {
                      default: (0, n.k6)(({ Component: e }) => [
                        ((0, n.uX)(),
                        (0, n.Wv)(
                          n.PR,
                          null,
                          [((0, n.uX)(), (0, n.Wv)((0, n.$y)(e)))],
                          1024
                        )),
                      ]),
                      _: 1,
                    }),
                    (0, n.bF)(u),
                  ])),
            ])
          );
        }
        var r = t(4232);
        const d = { class: "wrapper" };
        function c(e, a, t, o, s, i) {
          const c = (0, n.g2)("router-link"),
            l = (0, n.g2)("font-awesome-icon");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", d, [
              (0, n.Lk)(
                "div",
                { class: (0, r.C4)(["top-section", { shrink: s.isShrunk }]) },
                [
                  (0, n.Lk)(
                    "div",
                    { class: (0, r.C4)(["logo", { shrink: s.isShrunk }]) },
                    "HFKSUE123",
                    2
                  ),
                  (0, n.Lk)(
                    "nav",
                    { class: (0, r.C4)(["navbar", { shrink: s.isShrunk }]) },
                    [
                      (0, n.bF)(
                        c,
                        { to: "/", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Home")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/giga", onClick: i.closeDropdown },
                        {
                          default: (0, n.k6)(() => [(0, n.eW)("About Me")]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/ktx", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Info")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/profile", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Test")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/test", onClick: i.closeDropdown },
                        {
                          default: (0, n.k6)(() => [(0, n.eW)("Test2")]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                    ],
                    2
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: (0, r.C4)(["toggle-btn", { shrink: s.isShrunk }]),
                      onClick:
                        a[0] ||
                        (a[0] = (...e) =>
                          i.toggleDropdown && i.toggleDropdown(...e)),
                    },
                    [
                      (0, n.bF)(
                        l,
                        {
                          icon: ["fas", "bars"],
                          class: (0, r.C4)({ shrink: s.isShrunk }),
                        },
                        null,
                        8,
                        ["class"]
                      ),
                    ],
                    2
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: (0, r.C4)([
                        "dropdown",
                        { open: s.isDropdownOpen },
                      ]),
                    },
                    [
                      (0, n.bF)(
                        c,
                        { to: "/", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Home")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/giga", onClick: i.closeDropdown },
                        {
                          default: (0, n.k6)(() => [(0, n.eW)("About Me")]),
                          _: 1,
                        },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/ktx", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Info")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                      (0, n.bF)(
                        c,
                        { to: "/test", onClick: i.closeDropdown },
                        { default: (0, n.k6)(() => [(0, n.eW)("Info")]), _: 1 },
                        8,
                        ["onClick"]
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ])
          );
        }
        var l = {
            data() {
              return { isDropdownOpen: !1, isShrunk: !1 };
            },
            methods: {
              toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
              },
              closeDropdown() {
                this.isDropdownOpen = !1;
              },
              handleScroll() {
                this.isShrunk = window.scrollY > 50;
              },
            },
            mounted() {
              document.addEventListener("click", (e) => {
                !this.$el.contains(e.target) &&
                  this.isDropdownOpen &&
                  this.closeDropdown();
              }),
                window.addEventListener("scroll", this.handleScroll);
            },
            beforeUnmount() {
              window.removeEventListener("scroll", this.handleScroll);
            },
          },
          u = t(1241);
        const h = (0, u.A)(l, [
          ["render", c],
          ["__scopeId", "data-v-1d346873"],
        ]);
        var p = h;
        const m = (0, n.Fv)(
          '<h1 class="intro" data-v-36d079c8>Đợi B tí nha</h1><div class="box" id="box" data-v-36d079c8><div class="cat" data-v-36d079c8><div class="cat__body" data-v-36d079c8></div><div class="cat__body" data-v-36d079c8></div><div class="cat__tail" data-v-36d079c8></div><div class="cat__head" data-v-36d079c8></div></div></div><blockquote class="info" data-v-36d079c8> inspired from <a href="https://dribbble.com/domaso" data-v-36d079c8>domaso</a>&#39;s dribbble: <a href="https://dribbble.com/shots/3197970-Loading-cat" data-v-36d079c8>Cat</a><br data-v-36d079c8> my facebook <a href="https://www.facebook.com/tenyoku8478" data-v-36d079c8>Bao</a></blockquote>',
          3
        );
        function g(e, a, t, o, n, s) {
          return m;
        }
        var v = {};
        const _ = (0, u.A)(v, [
          ["render", g],
          ["__scopeId", "data-v-36d079c8"],
        ]);
        var f = _;
        function y(e, a, t, s, i, r) {
          const d = (0, n.g2)("font-awesome-icon");
          return (0, n.bo)(
            ((0, n.uX)(),
            (0, n.CE)(
              "button",
              {
                onClick:
                  a[0] ||
                  (a[0] = (...e) => r.scrollToTop && r.scrollToTop(...e)),
                class: "scroll-to-top",
              },
              [(0, n.bF)(d, { icon: ["fas", "chevron-up"], class: "icon" })],
              512
            )),
            [[o.aG, i.showScrollToTop]]
          );
        }
        var b = {
          name: "ScrollUpComp",
          data() {
            return { showScrollToTop: !1 };
          },
          methods: {
            scrollToTop() {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            handleScroll() {
              this.showScrollToTop = window.scrollY > 100;
            },
          },
          mounted() {
            window.addEventListener("scroll", this.handleScroll);
          },
          beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          },
        };
        const k = (0, u.A)(b, [
          ["render", y],
          ["__scopeId", "data-v-027cd3ea"],
        ]);
        var j = k,
          w = {
            name: "App",
            components: { NavBar: p, LoaderComp: f, ScrollUpComp: j },
            data() {
              return { loading: !0 };
            },
            created() {
              setTimeout(() => {
                this.loading = !1;
              }, 2e3);
            },
            activated() {
              console.log("Component activated");
            },
            deactivated() {
              console.log("Component deactivated");
            },
          };
        const L = (0, u.A)(w, [["render", i]]);
        var C = L,
          F = t(1387);
        const A = { class: "main-content" },
          I = (0, n.Fv)(
            '<div class="concept concept-one" data-v-17aa1650><div class="hover hover-1" data-v-17aa1650></div><div class="hover hover-2" data-v-17aa1650></div><div class="hover hover-3" data-v-17aa1650></div><div class="hover hover-4" data-v-17aa1650></div><div class="hover hover-5" data-v-17aa1650></div><div class="hover hover-6" data-v-17aa1650></div><div class="hover hover-7" data-v-17aa1650></div><div class="hover hover-8" data-v-17aa1650></div><div class="hover hover-9" data-v-17aa1650></div><h1 data-v-17aa1650>GIGA</h1></div>',
            1
          );
        function E(e, a, t, o, s, i) {
          const r = (0, n.g2)("DownButton1"),
            d = (0, n.g2)("router-view");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [(0, n.Lk)("div", A, [I, (0, n.bF)(r)]), (0, n.bF)(d)],
              64
            )
          );
        }
        const q = (e) => (
            (0, n.Qi)("data-v-1761bd36"), (e = e()), (0, n.jt)(), e
          ),
          x = { id: "scrolldown1", class: "demo" },
          P = q(() =>
            (0, n.Lk)(
              "a",
              { href: "#", class: "scroll-link" },
              [(0, n.Lk)("span"), (0, n.eW)("Scroll")],
              -1
            )
          ),
          M = [P];
        function G(e, a, t, o, s, i) {
          return (0, n.uX)(), (0, n.CE)("section", x, M);
        }
        var S = {
          mounted() {
            document
              .querySelector(".scroll-link")
              .addEventListener("click", this.scroll);
          },
          beforeUnmount() {
            document
              .querySelector(".scroll-link")
              .removeEventListener("click", this.scroll);
          },
          methods: {
            scroll(e) {
              e.preventDefault();
              const a = window.innerHeight;
              window.scrollBy({ top: a, behavior: "smooth" });
            },
          },
        };
        const D = (0, u.A)(S, [
          ["render", G],
          ["__scopeId", "data-v-1761bd36"],
        ]);
        var X = D,
          T = { name: "MainContent", components: { DownButton1: X } };
        const z = (0, u.A)(T, [
          ["render", E],
          ["__scopeId", "data-v-17aa1650"],
        ]);
        var B = z;
        const O = (e) => (
            (0, n.Qi)("data-v-a543e276"), (e = e()), (0, n.jt)(), e
          ),
          $ = O(() => (0, n.Lk)("h1", null, "About", -1)),
          H = O(() =>
            (0, n.Lk)(
              "p",
              null,
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur ",
              -1
            )
          ),
          N = O(() => (0, n.Lk)("h2", null, "Yoooooooooooooooooooo", -1)),
          U = [$, H, N];
        function W(e, a, t, o, s, i) {
          return (0, n.uX)(), (0, n.CE)("div", null, U);
        }
        var K = {};
        const Q = (0, u.A)(K, [
          ["render", W],
          ["__scopeId", "data-v-a543e276"],
        ]);
        var Y = Q;
        const V = (e) => (
            (0, n.Qi)("data-v-35f4c646"), (e = e()), (0, n.jt)(), e
          ),
          R = { class: "container" },
          J = { id: "slide", ref: "slide" },
          Z = { class: "content" },
          ee = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          ae = V(() => (0, n.Lk)("div", { class: "name" }, "HOME", -1)),
          te = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          oe = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          ne = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          se = V(() => (0, n.Lk)("em", null, null, -1)),
          ie = { class: "content" },
          re = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          de = V(() => (0, n.Lk)("div", { class: "name" }, "LÀNG ĐẠI HỌC", -1)),
          ce = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          le = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          ue = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          he = V(() => (0, n.Lk)("em", null, null, -1)),
          pe = { class: "content" },
          me = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          ge = V(() => (0, n.Lk)("div", { class: "name" }, "GIGAMALL", -1)),
          ve = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          _e = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Chỉ là những bức ảnh được chụp tại lần đi chơi ở GIGAMALL. ",
              -1
            )
          ),
          fe = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          ye = V(() => (0, n.Lk)("em", null, null, -1)),
          be = { class: "content" },
          ke = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          je = V(() => (0, n.Lk)("div", { class: "name" }, "LÀNG ĐẠI HỌC", -1)),
          we = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          Le = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          Ce = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          Fe = V(() => (0, n.Lk)("em", null, null, -1)),
          Ae = { class: "content" },
          Ie = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          Ee = V(() => (0, n.Lk)("div", { class: "name" }, "SÀI GÒN", -1)),
          qe = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          xe = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          Pe = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          Me = V(() => (0, n.Lk)("em", null, null, -1)),
          Ge = { class: "content" },
          Se = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          De = V(() => (0, n.Lk)("div", { class: "name" }, "LÀNG ĐẠI HỌC", -1)),
          Xe = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          Te = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          ze = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          Be = V(() => (0, n.Lk)("em", null, null, -1)),
          Oe = { class: "content" },
          $e = V(() => (0, n.Lk)("div", { class: "header" }, "ALBUM", -1)),
          He = V(() => (0, n.Lk)("div", { class: "name" }, "LÀNG ĐẠI HỌC", -1)),
          Ne = V(() => (0, n.Lk)("div", { class: "topic" }, "by ME", -1)),
          Ue = V(() =>
            (0, n.Lk)(
              "div",
              { class: "des" },
              " Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn. ",
              -1
            )
          ),
          We = V(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          Ke = V(() => (0, n.Lk)("em", null, null, -1)),
          Qe = { class: "buttons" };
        function Ye(e, a, o, s, i, d) {
          const c = (0, n.g2)("router-link"),
            l = (0, n.g2)("font-awesome-icon");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", R, [
              (0, n.Lk)(
                "div",
                J,
                [
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(8881)})` }),
                    },
                    [
                      (0, n.Lk)("div", Z, [
                        ee,
                        ae,
                        te,
                        oe,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/home" },
                          { default: (0, n.k6)(() => [ne, se]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(1126)})` }),
                    },
                    [
                      (0, n.Lk)("div", ie, [
                        re,
                        de,
                        ce,
                        le,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/album" },
                          { default: (0, n.k6)(() => [ue, he]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(611)})` }),
                    },
                    [
                      (0, n.Lk)("div", pe, [
                        me,
                        ge,
                        ve,
                        _e,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/giga" },
                          { default: (0, n.k6)(() => [fe, ye]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(7984)})` }),
                    },
                    [
                      (0, n.Lk)("div", be, [
                        ke,
                        je,
                        we,
                        Le,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/ktx" },
                          { default: (0, n.k6)(() => [Ce, Fe]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(6557)})` }),
                    },
                    [
                      (0, n.Lk)("div", Ae, [
                        Ie,
                        Ee,
                        qe,
                        xe,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/album" },
                          { default: (0, n.k6)(() => [Pe, Me]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(4274)})` }),
                    },
                    [
                      (0, n.Lk)("div", Ge, [
                        Se,
                        De,
                        Xe,
                        Te,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/album" },
                          { default: (0, n.k6)(() => [ze, Be]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                  (0, n.Lk)(
                    "div",
                    {
                      class: "item",
                      style: (0, r.Tr)({ backgroundImage: `url(${t(2335)})` }),
                    },
                    [
                      (0, n.Lk)("div", Oe, [
                        $e,
                        He,
                        Ne,
                        Ue,
                        (0, n.bF)(
                          c,
                          { id: "btnSeeAlbum", to: "/album" },
                          { default: (0, n.k6)(() => [We, Ke]), _: 1 }
                        ),
                      ]),
                    ],
                    4
                  ),
                ],
                512
              ),
              (0, n.Lk)("div", Qe, [
                (0, n.Lk)(
                  "button",
                  {
                    id: "prev",
                    onClick: a[0] || (a[0] = (...e) => d.prev && d.prev(...e)),
                  },
                  [(0, n.bF)(l, { icon: ["fas", "chevron-left"] })]
                ),
                (0, n.Lk)(
                  "button",
                  {
                    id: "next",
                    onClick: a[1] || (a[1] = (...e) => d.next && d.next(...e)),
                  },
                  [(0, n.bF)(l, { icon: ["fas", "chevron-right"] })]
                ),
              ]),
            ])
          );
        }
        var Ve = {
          mounted() {
            this.slide = this.$refs.slide;
          },
          data() {
            return { slide: null };
          },
          methods: {
            next() {
              if (this.slide) {
                const e = this.slide.children;
                this.slide.appendChild(e[0]);
              }
            },
            prev() {
              if (this.slide) {
                const e = this.slide.children;
                this.slide.prepend(e[e.length - 1]);
              }
            },
          },
        };
        const Re = (0, u.A)(Ve, [
          ["render", Ye],
          ["__scopeId", "data-v-35f4c646"],
        ]);
        var Je = Re;
        const Ze = (e) => (
            (0, n.Qi)("data-v-7db41adc"), (e = e()), (0, n.jt)(), e
          ),
          ea = { class: "footer-container", id: "footer" },
          aa = (0, n.Fv)(
            '<ul id="link" data-v-7db41adc><li data-v-7db41adc><a href="#" data-v-7db41adc>Home</a></li><li data-v-7db41adc><a href="#" data-v-7db41adc>About Me</a></li><li data-v-7db41adc><a href="#" data-v-7db41adc>See More</a></li></ul><hr id="line" data-v-7db41adc><p id="content" data-v-7db41adc> Website này được tạo ra bằng html, css, js thuần bởi <a href="#" id="author" data-v-7db41adc>Bao Nguyen</a>, mục đích chính của trang web này để mình chia sẻ những bức ảnh của mình chụp lên đây để cho mọi người cùng thưởng thức những bức ảnh mình đã chụp (có vài bộ chưa xuất hiện trên fb cá nhân) và cũng là nơi để mình lưu giữ những kỷ niệm. Cảm ơn mọi người đã dành thời gian ghé thăm ^^ </p>',
            3
          ),
          ta = { id: "social-icon" },
          oa = { href: "#" },
          na = { href: "#" },
          sa = { href: "#" },
          ia = { href: "#" },
          ra = { href: "#" },
          da = Ze(() =>
            (0, n.Lk)(
              "p",
              { id: "copyright" },
              "@hfksue123 © 2024 All Rights Reserved",
              -1
            )
          );
        function ca(e, a, t, o, s, i) {
          const r = (0, n.g2)("font-awesome-icon"),
            d = (0, n.g2)("ScrollUpComp");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [
                (0, n.Lk)("footer", ea, [
                  aa,
                  (0, n.Lk)("ul", ta, [
                    (0, n.Lk)("li", null, [
                      (0, n.Lk)("a", oa, [
                        (0, n.bF)(r, {
                          icon: ["fab", "instagram"],
                          class: "icon",
                        }),
                      ]),
                    ]),
                    (0, n.Lk)("li", null, [
                      (0, n.Lk)("a", na, [
                        (0, n.bF)(r, {
                          icon: ["fab", "facebook"],
                          class: "icon",
                        }),
                      ]),
                    ]),
                    (0, n.Lk)("li", null, [
                      (0, n.Lk)("a", sa, [
                        (0, n.bF)(r, {
                          icon: ["fab", "youtube"],
                          class: "icon",
                        }),
                      ]),
                    ]),
                    (0, n.Lk)("li", null, [
                      (0, n.Lk)("a", ia, [
                        (0, n.bF)(r, { icon: ["fas", "heart"], class: "icon" }),
                      ]),
                    ]),
                    (0, n.Lk)("li", null, [
                      (0, n.Lk)("a", ra, [
                        (0, n.bF)(r, {
                          icon: ["fab", "threads"],
                          class: "icon",
                        }),
                      ]),
                    ]),
                  ]),
                  da,
                ]),
                (0, n.bF)(d),
              ],
              64
            )
          );
        }
        var la = { name: "FooterComponent", components: { ScrollUpComp: j } };
        const ua = (0, u.A)(la, [
          ["render", ca],
          ["__scopeId", "data-v-7db41adc"],
        ]);
        var ha = ua,
          pa = t.p + "img/IMG_1961.639575f0.png";
        const ma = (e) => (
            (0, n.Qi)("data-v-38597f08"), (e = e()), (0, n.jt)(), e
          ),
          ga = { class: "home", id: "home" },
          va = ma(() =>
            (0, n.Lk)(
              "div",
              { class: "home-img" },
              [
                (0, n.Lk)("div", { class: "main_img" }, [
                  (0, n.Lk)("img", { src: pa, alt: "" }),
                  (0, n.Lk)("div", { class: "animation" }),
                ]),
              ],
              -1
            )
          ),
          _a = { class: "home-contain" },
          fa = ma(() =>
            (0, n.Lk)(
              "h1",
              null,
              [(0, n.eW)("Hi, I'm "), (0, n.Lk)("span", { id: "bao" }, "Bảo")],
              -1
            )
          ),
          ya = ma(() =>
            (0, n.Lk)(
              "h3",
              { class: "typing-text" },
              [(0, n.Lk)("div", { id: "element" })],
              -1
            )
          ),
          ba = ma(() =>
            (0, n.Lk)(
              "p",
              null,
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus, commodi asperiores esse dignissimos ab beatae nihil saepe quidem! Aliquam dolor velit itaque dolorem soluta omnis tempore rerum explicabo doloremque. ",
              -1
            )
          ),
          ka = { class: "social-icon-profile" },
          ja = { href: "#", title: "facebook" },
          wa = { href: "#" },
          La = { href: "#" },
          Ca = { href: "#" },
          Fa = ma(() =>
            (0, n.Lk)(
              "a",
              { href: "#", class: "btn-profile" },
              "Contact Me",
              -1
            )
          );
        function Aa(e, a, t, o, s, i) {
          const r = (0, n.g2)("font-awesome-icon");
          return (
            (0, n.uX)(),
            (0, n.CE)("section", ga, [
              va,
              (0, n.Lk)("div", _a, [
                fa,
                ya,
                ba,
                (0, n.Lk)("div", ka, [
                  (0, n.Lk)("a", ja, [
                    (0, n.bF)(r, { icon: ["fab", "facebook-f"] }),
                  ]),
                  (0, n.Lk)("a", wa, [
                    (0, n.bF)(r, { icon: ["fab", "x-twitter"] }),
                  ]),
                  (0, n.Lk)("a", La, [
                    (0, n.bF)(r, { icon: ["fab", "instagram"] }),
                  ]),
                  (0, n.Lk)("a", Ca, [
                    (0, n.bF)(r, { icon: ["far", "heart"] }),
                  ]),
                ]),
                Fa,
              ]),
            ])
          );
        }
        var Ia = t(7891),
          Ea = {
            mounted() {
              const e = {
                strings: [
                  "Hello, I'm a <span class='highlight'>Web Developer !</span>",
                  "I'm a <span class='highlight'>Photographer</span> too!",
                  "I'm a <span class='highlight'>Designer</span> as well!",
                  "And.......",
                  "I'm still <span class='highlight_red'>SINGLE</span> :((",
                ],
                typeSpeed: 10,
                backSpeed: 20,
                startDelay: 1e3,
                backDelay: 500,
                smartBackspace: !0,
                shuffle: !1,
                fadeOut: !1,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                loop: !0,
              };
              new Ia.A("#element", e);
            },
          };
        const qa = (0, u.A)(Ea, [
          ["render", Aa],
          ["__scopeId", "data-v-38597f08"],
        ]);
        var xa = qa;
        const Pa = { class: "container", ref: "container" },
          Ma = ["href", "data-caption"],
          Ga = ["data-src", "alt", "width", "height"];
        function Sa(e, a, t, o, s, i) {
          const r = (0, n.g2)("HeaderComp"),
            d = (0, n.g2)("PaginationComp"),
            c = (0, n.g2)("FooterComp");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [
                (0, n.bF)(r),
                (0, n.Lk)(
                  "div",
                  Pa,
                  [
                    ((0, n.uX)(!0),
                    (0, n.CE)(
                      n.FK,
                      null,
                      (0, n.pI)(
                        s.images,
                        (e, a) => (
                          (0, n.uX)(),
                          (0, n.CE)("div", { class: "grid-item", key: a }, [
                            (0, n.Lk)(
                              "a",
                              {
                                href: e.href,
                                "data-fancybox": "gallery",
                                "data-caption": e.caption,
                              },
                              [
                                (0, n.Lk)(
                                  "img",
                                  {
                                    "data-src": e.src,
                                    alt: e.caption,
                                    class: "lozad blur-up",
                                    width: e.width,
                                    height: e.height,
                                  },
                                  null,
                                  8,
                                  Ga
                                ),
                              ],
                              8,
                              Ma
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                (0, n.bF)(
                  d,
                  {
                    totalPages: s.totalPages,
                    links: s.links,
                    onPageChanged: e.handlePageChange,
                  },
                  null,
                  8,
                  ["totalPages", "links", "onPageChanged"]
                ),
                (0, n.bF)(c),
              ],
              64
            )
          );
        }
        var Da = t(5962),
          Xa = t(4401),
          Ta = t.n(Xa);
        const za = (e) => (
            (0, n.Qi)("data-v-8c87643c"), (e = e()), (0, n.jt)(), e
          ),
          Ba = { id: "pagechange" },
          Oa = { class: "pagination" },
          $a = za(() => (0, n.Lk)("a", { href: "#" }, "Prev", -1)),
          Ha = [$a],
          Na = za(() => (0, n.Lk)("a", { href: "#" }, "Next", -1)),
          Ua = [Na];
        function Wa(e, a, t, s, i, d) {
          const c = (0, n.g2)("router-link");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", Ba, [
              (0, n.Lk)("ul", Oa, [
                (0, n.Lk)(
                  "li",
                  {
                    class: (0, r.C4)({ disabled: 1 === i.currentPage }),
                    onClick:
                      a[0] || (a[0] = (...e) => d.prevPage && d.prevPage(...e)),
                  },
                  Ha,
                  2
                ),
                ((0, n.uX)(!0),
                (0, n.CE)(
                  n.FK,
                  null,
                  (0, n.pI)(
                    t.totalPages,
                    (e, a) => (
                      (0, n.uX)(),
                      (0, n.CE)(
                        "li",
                        {
                          key: a,
                          class: (0, r.C4)({ active: e === i.currentPage }),
                        },
                        [
                          (0, n.bF)(
                            c,
                            {
                              to: t.links[a],
                              onClick: (0, o.D$)((a) => d.setPage(e), ["stop"]),
                            },
                            {
                              default: (0, n.k6)(() => [
                                (0, n.eW)((0, r.v_)(e), 1),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to", "onClick"]
                          ),
                        ],
                        2
                      )
                    )
                  ),
                  128
                )),
                (0, n.Lk)(
                  "li",
                  {
                    class: (0, r.C4)({
                      disabled: i.currentPage === t.totalPages,
                    }),
                    onClick:
                      a[1] || (a[1] = (...e) => d.nextPage && d.nextPage(...e)),
                  },
                  Ua,
                  2
                ),
              ]),
            ])
          );
        }
        t(4114);
        var Ka = {
          props: {
            totalPages: { type: Number, required: !0 },
            links: { type: Array, required: !0 },
          },
          data() {
            return { currentPage: 1 };
          },
          methods: {
            setPage(e) {
              e !== this.currentPage &&
                (window.scrollTo({ top: 0, behavior: "smooth" }),
                (this.currentPage = e),
                this.$router.push(this.links[e - 1]),
                this.$emit("page-changed", e));
            },
            prevPage() {
              this.currentPage > 1 &&
                (this.currentPage--,
                this.$router.push(this.links[this.currentPage - 1]),
                this.$emit("page-changed", this.currentPage));
            },
            nextPage() {
              this.currentPage < this.totalPages &&
                (this.currentPage++,
                this.$router.push(this.links[this.currentPage - 1]),
                this.$emit("page-changed", this.currentPage));
            },
          },
          watch: {
            $route(e) {
              const a = this.links.indexOf(e.path);
              -1 !== a && (this.currentPage = a + 1);
            },
          },
          mounted() {
            const e = this.links.indexOf(this.$route.path);
            -1 !== e && (this.currentPage = e + 1);
          },
        };
        const Qa = (0, u.A)(Ka, [
          ["render", Wa],
          ["__scopeId", "data-v-8c87643c"],
        ]);
        var Ya = Qa,
          Va = {
            name: "GalleryComponent",
            components: { HeaderComp: B, FooterComp: ha, PaginationComp: Ya },
            data() {
              return {
                images: [
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722012141/IMG_1928_w1gciv.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1928_w1gciv.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,h_300,c_fill,q_50/v1722012140/IMG_1929_uygxhr.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012140/IMG_1929_uygxhr.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_jpg/v1722012141/IMG_1930_m059zr.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1930_m059zr.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012144/IMG_1931_mkl4fc.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1931_mkl4fc.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012145/IMG_1932_y0o96l.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1932_y0o96l.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012142/IMG_1933_t9lxns.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/e_sharpen/v1722012142/IMG_1933_t9lxns.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012144/IMG_1938_ghjocu.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1938_ghjocu.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012144/IMG_1939_bpfbqh.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1939_bpfbqh.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012145/IMG_1940_zijefg.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1940_zijefg.png",
                    caption: "By accident",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1942_rucb8h.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1942_rucb8h.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012146/IMG_1943_ajvjj9.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1943_ajvjj9.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012146/IMG_1945_a7kk60.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1945_a7kk60.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1946_b9vhrq.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012149/IMG_1946_b9vhrq.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012147/IMG_1950_rwxhmk.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012147/IMG_1950_rwxhmk.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012150/IMG_1951_fwa8gz.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012150/IMG_1951_fwa8gz.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1952_kgegru.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1952_kgegru.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1500,c_fill,q_auto,f_auto/v1722012140/IMG_1953_i8er5d.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1953_i8er5d.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012140/IMG_1954_wxwvqj.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1954_wxwvqj.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722012156/IMG_1959_aqm7l4.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012156/IMG_1959_aqm7l4.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012142/IMG_1961_yy4ezr.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
                  },
                ],
                totalPages: 1,
                links: ["/giga"],
              };
            },
            methods: {
              fetchImageDimensions(e) {
                return new Promise((a) => {
                  const t = new Image();
                  (t.src = e.src),
                    (t.onload = () => {
                      a({ width: t.width, height: t.height });
                    });
                });
              },
              async updateImageDimensions() {
                const e = await Promise.all(
                  this.images.map(async (e) => {
                    const a = await this.fetchImageDimensions(e);
                    return { ...e, ...a };
                  })
                );
                this.images = e;
              },
            },
            mounted() {
              this.updateImageDimensions().then(() => {
                Da.lX.bind(this.$refs.container, "[data-fancybox]", {
                  Carousel: { infinite: !0 },
                  Thumbs: { type: "classic", transition: "slide" },
                  Toolbar: {
                    display: {
                      left: ["infobar"],
                      right: [
                        "slideshow",
                        "thumbs",
                        "zoomIn",
                        "zoomOut",
                        "fullscreen",
                        "close",
                      ],
                    },
                  },
                  wheel: "zoom",
                  defaultType: "ajax",
                });
                const e = Ta()(".lozad", {
                  load: function (e) {
                    (e.src = e.dataset.src),
                      (e.onload = function () {
                        e.classList.add("fade");
                      });
                  },
                });
                e.observe();
              });
            },
            unmounted() {
              Da.lX.destroy();
            },
            activated() {
              console.log("Component activated");
            },
            deactivated() {
              console.log("Component deactivated");
            },
          };
        const Ra = (0, u.A)(Va, [
          ["render", Sa],
          ["__scopeId", "data-v-187f263a"],
        ]);
        var Ja = Ra;
        const Za = { class: "audio-player" },
          et = { class: "background" },
          at = ["src"],
          tt = { class: "container" },
          ot = { class: "player-img" },
          nt = ["src"],
          st = { id: "music-title" },
          it = { id: "music-artist" },
          rt = { class: "music-duration" },
          dt = { class: "player-controls" };
        function ct(e, a, t, o, s, i) {
          const d = (0, n.g2)("font-awesome-icon");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", Za, [
              (0, n.Lk)("div", et, [
                (0, n.Lk)(
                  "img",
                  { src: i.currentSong.cover, id: "bg-img" },
                  null,
                  8,
                  at
                ),
              ]),
              (0, n.Lk)("div", tt, [
                (0, n.Lk)("div", ot, [
                  (0, n.Lk)(
                    "img",
                    { src: i.currentSong.cover, class: "active", id: "cover" },
                    null,
                    8,
                    nt
                  ),
                ]),
                (0, n.Lk)("h2", st, (0, r.v_)(i.currentSong.displayName), 1),
                (0, n.Lk)("h3", it, (0, r.v_)(i.currentSong.artist), 1),
                (0, n.Lk)(
                  "div",
                  {
                    class: "player-progress",
                    onClick:
                      a[0] ||
                      (a[0] = (...e) =>
                        i.setProgressBar && i.setProgressBar(...e)),
                    ref: "playerProgress",
                  },
                  [
                    (0, n.Lk)(
                      "div",
                      {
                        class: "progress",
                        style: (0, r.Tr)({ width: i.progressPercent + "%" }),
                        ref: "progress",
                      },
                      null,
                      4
                    ),
                    (0, n.Lk)("div", rt, [
                      (0, n.Lk)(
                        "span",
                        null,
                        (0, r.v_)(i.formatTime(s.currentTime)),
                        1
                      ),
                      (0, n.Lk)(
                        "span",
                        null,
                        (0, r.v_)(i.formatTime(s.duration)),
                        1
                      ),
                    ]),
                  ],
                  512
                ),
                (0, n.Lk)("div", dt, [
                  (0, n.bF)(d, {
                    icon: ["fas", "backward"],
                    title: "Previous",
                    onClick: a[1] || (a[1] = (e) => i.changeMusic(-1)),
                  }),
                  (0, n.bF)(
                    d,
                    {
                      icon: ["fas", s.isPlaying ? "pause" : "play"],
                      class: "play-button",
                      title: "Play",
                      onClick: i.togglePlay,
                    },
                    null,
                    8,
                    ["icon", "onClick"]
                  ),
                  (0, n.bF)(d, {
                    icon: ["fas", "forward"],
                    title: "Next",
                    onClick: a[2] || (a[2] = (e) => i.changeMusic(1)),
                  }),
                ]),
              ]),
            ])
          );
        }
        var lt = t(8950),
          ut = t(292),
          ht = t(2353);
        lt.Yv.add(ht.X7I);
        var pt = {
          components: { FontAwesomeIcon: ut.gc },
          data() {
            return {
              music: new Audio(),
              songs: [
                {
                  path: t(1171),
                  displayName: "The Charmer's Call",
                  cover: t(5168),
                  artist: "Hanu Dixit",
                },
                {
                  path: t(6380),
                  displayName: "You Will Never See Me Coming",
                  cover: t(9503),
                  artist: "NEFFEX",
                },
                {
                  path: t(8689),
                  displayName: "Intellect",
                  cover: t(6834),
                  artist: "Yung Logos",
                },
              ],
              musicIndex: 0,
              isPlaying: !1,
              currentTime: 0,
              duration: 0,
            };
          },
          computed: {
            currentSong() {
              return this.songs[this.musicIndex];
            },
            progressPercent() {
              return (this.currentTime / this.duration) * 100;
            },
          },
          mounted() {
            this.loadMusic(this.musicIndex),
              this.music.addEventListener("timeupdate", this.updateProgressBar),
              this.music.addEventListener("ended", () => this.changeMusic(1));
          },
          beforeUnmount() {
            this.music.removeEventListener(
              "timeupdate",
              this.updateProgressBar
            ),
              this.music.removeEventListener("ended", () =>
                this.changeMusic(1)
              );
          },
          methods: {
            togglePlay() {
              this.isPlaying ? this.pauseMusic() : this.playMusic();
            },
            playMusic() {
              (this.isPlaying = !0), this.music.play();
            },
            pauseMusic() {
              (this.isPlaying = !1), this.music.pause();
            },
            loadMusic(e) {
              const a = this.songs[e];
              (this.music.src = a.path),
                (this.musicIndex = e),
                this.music.load(),
                this.updateProgressBar(),
                this.playMusic();
            },
            changeMusic(e) {
              (this.musicIndex =
                (this.musicIndex + e + this.songs.length) % this.songs.length),
                this.loadMusic(this.musicIndex);
            },
            updateProgressBar() {
              (this.currentTime = this.music.currentTime),
                (this.duration = this.music.duration);
            },
            setProgressBar(e) {
              const a = this.$refs.playerProgress.clientWidth,
                t = e.offsetX;
              this.music.currentTime = (t / a) * this.music.duration;
            },
            formatTime(e) {
              const a = Math.floor(e / 60),
                t = Math.floor(e % 60)
                  .toString()
                  .padStart(2, "0");
              return `${a}:${t}`;
            },
          },
        };
        const mt = (0, u.A)(pt, [
          ["render", ct],
          ["__scopeId", "data-v-81029cd2"],
        ]);
        var gt = mt,
          vt = t.p + "img/cat_modal.fe4d6e59.gif";
        const _t = (e) => (
            (0, n.Qi)("data-v-72bfcc8a"), (e = e()), (0, n.jt)(), e
          ),
          ft = { key: 0, class: "modal" },
          yt = _t(() =>
            (0, n.Lk)(
              "img",
              { src: vt, alt: "Center Image", class: "center-image" },
              null,
              -1
            )
          );
        function bt(e, a, t, o, s, i) {
          const d = (0, n.g2)("font-awesome-icon");
          return s.isVisible
            ? ((0, n.uX)(),
              (0, n.CE)("div", ft, [
                (0, n.Lk)(
                  "div",
                  {
                    class: (0, r.C4)([
                      "modal-content",
                      {
                        "modal-enter": s.isVisible,
                        "modal-leave": !s.isVisible,
                      },
                    ]),
                  },
                  [
                    (0, n.Lk)(
                      "button",
                      {
                        class: "close-btn",
                        onClick:
                          a[0] || (a[0] = (...e) => i.hide && i.hide(...e)),
                      },
                      [(0, n.bF)(d, { icon: ["fas", "xmark"] })]
                    ),
                    yt,
                    (0, n.Lk)("h1", null, (0, r.v_)(t.title), 1),
                    (0, n.Lk)("p", null, (0, r.v_)(t.message), 1),
                    (0, n.Lk)(
                      "button",
                      {
                        onClick:
                          a[1] ||
                          (a[1] = (...e) =>
                            i.handleImHereClick && i.handleImHereClick(...e)),
                        class: "im-here-btn",
                      },
                      "I'm here"
                    ),
                  ],
                  2
                ),
              ]))
            : (0, n.Q3)("", !0);
        }
        var kt = {
          name: "InactivityModal",
          props: {
            title: { type: String, default: "Bạn còn ở đó không ?" },
            message: {
              type: String,
              default:
                "Mình thấy bạn đã không hoạt động trong một khoảng thời gian.",
            },
          },
          data() {
            return { isVisible: !0 };
          },
          methods: {
            show() {
              this.isVisible = !0;
            },
            hide() {
              this.isVisible = !1;
            },
            handleImHereClick() {
              this.hide(), this.$emit("active");
            },
          },
        };
        const jt = (0, u.A)(kt, [
          ["render", bt],
          ["__scopeId", "data-v-72bfcc8a"],
        ]);
        var wt = jt;
        const Lt = (0, n.Fv)(
          '<div class="concept concept-two" data-v-ec2af924><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>L</h1></div><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>A</h1></div><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>N</h1></div><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>G</h1></div><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>Đ</h1></div><div class="hover" data-v-ec2af924><h1 data-v-ec2af924>H</h1></div></div>',
          1
        );
        function Ct(e, a, t, o, s, i) {
          const r = (0, n.g2)("DownButton2");
          return (0, n.uX)(), (0, n.CE)(n.FK, null, [Lt, (0, n.bF)(r)], 64);
        }
        const Ft = (e) => (
            (0, n.Qi)("data-v-dd36b4d0"), (e = e()), (0, n.jt)(), e
          ),
          At = { id: "scrolldown2", class: "demo" },
          It = Ft(() =>
            (0, n.Lk)(
              "a",
              { href: "#", class: "scroll-link" },
              [(0, n.Lk)("span"), (0, n.eW)("Scroll")],
              -1
            )
          ),
          Et = [It];
        function qt(e, a, t, o, s, i) {
          return (0, n.uX)(), (0, n.CE)("section", At, Et);
        }
        var xt = {
          mounted() {
            document
              .querySelector(".scroll-link")
              .addEventListener("click", this.scroll);
          },
          beforeUnmount() {
            document
              .querySelector(".scroll-link")
              .removeEventListener("click", this.scroll);
          },
          methods: {
            scroll(e) {
              e.preventDefault();
              const a = window.innerHeight;
              window.scrollBy({ top: a, behavior: "smooth" });
            },
          },
        };
        const Pt = (0, u.A)(xt, [
          ["render", qt],
          ["__scopeId", "data-v-dd36b4d0"],
        ]);
        var Mt = Pt,
          Gt = { components: { DownButton2: Mt } };
        const St = (0, u.A)(Gt, [
          ["render", Ct],
          ["__scopeId", "data-v-ec2af924"],
        ]);
        var Dt = St;
        const Xt = ["id"],
          Tt = (0, n.Fv)(
            '<a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200" data-v-0e420089><img src="https://lipsum.app/id/60/200x150" width="200" height="150" data-v-0e420089></a><a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200" data-v-0e420089><img src="https://lipsum.app/id/61/200x150" width="200" height="150" data-v-0e420089></a><a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200" data-v-0e420089><img src="https://lipsum.app/id/62/200x150" width="200" height="150" data-v-0e420089></a><a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200" data-v-0e420089><img src="https://lipsum.app/id/63/200x150" width="200" height="150" data-v-0e420089></a><a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200" data-v-0e420089><img src="https://lipsum.app/id/64/200x150" width="200" height="150" data-v-0e420089></a>',
            5
          ),
          zt = [Tt];
        function Bt(e, a, t, o, s, i) {
          return (
            (0, n.uX)(),
            (0, n.CE)(
              "div",
              { ref: "container", id: t.galleryID, class: "gallery" },
              zt,
              8,
              Xt
            )
          );
        }
        var Ot = {
          name: "SimpleGallery",
          props: {
            galleryID: String,
            options: {
              type: Object,
              default: () => ({ Carousel: { infinite: !1 } }),
            },
          },
          mounted() {
            Da.lX.bind(this.$refs.container, "[data-fancybox]", {
              ...(this.options || {}),
            });
          },
          updated() {
            Da.lX.unbind(this.$refs.container),
              Da.lX.close(),
              Da.lX.bind(this.$refs.container, "[data-fancybox]", {
                ...(this.options || {}),
              });
          },
          unmounted() {
            Da.lX.destroy();
          },
        };
        const $t = (0, u.A)(Ot, [
          ["render", Bt],
          ["__scopeId", "data-v-0e420089"],
        ]);
        var Ht = $t;
        const Nt = (e) => (
            (0, n.Qi)("data-v-0ea10e77"), (e = e()), (0, n.jt)(), e
          ),
          Ut = { class: "container" },
          Wt = { id: "slide", ref: "slide" },
          Kt = { class: "content" },
          Qt = { class: "header" },
          Yt = { class: "name" },
          Vt = { class: "topic" },
          Rt = { class: "des" },
          Jt = Nt(() => (0, n.Lk)("span", null, "Go to Album", -1)),
          Zt = Nt(() => (0, n.Lk)("em", null, null, -1)),
          eo = { class: "slider-buttons" };
        function ao(e, a, t, o, s, i) {
          const d = (0, n.g2)("router-link"),
            c = (0, n.g2)("font-awesome-icon");
          return (
            (0, n.uX)(),
            (0, n.CE)("div", Ut, [
              (0, n.Lk)(
                "div",
                Wt,
                [
                  ((0, n.uX)(!0),
                  (0, n.CE)(
                    n.FK,
                    null,
                    (0, n.pI)(
                      s.items,
                      (e) => (
                        (0, n.uX)(),
                        (0, n.CE)(
                          "div",
                          {
                            key: e.id,
                            class: "item",
                            style: (0, r.Tr)({
                              backgroundImage: `url(${e.cdnUrl})`,
                            }),
                          },
                          [
                            (0, n.Lk)("div", Kt, [
                              (0, n.Lk)("div", Qt, (0, r.v_)(e.header), 1),
                              (0, n.Lk)("div", Yt, (0, r.v_)(e.name), 1),
                              (0, n.Lk)("div", Vt, (0, r.v_)(e.topic), 1),
                              (0, n.Lk)("div", Rt, (0, r.v_)(e.description), 1),
                              (0, n.bF)(
                                d,
                                { id: "btnSeeAlbum", to: e.link },
                                { default: (0, n.k6)(() => [Jt, Zt]), _: 2 },
                                1032,
                                ["to"]
                              ),
                            ]),
                          ],
                          4
                        )
                      )
                    ),
                    128
                  )),
                ],
                512
              ),
              (0, n.Lk)("div", eo, [
                (0, n.Lk)(
                  "button",
                  {
                    onClick:
                      a[0] ||
                      (a[0] = (...a) => e.prevSlide && e.prevSlide(...a)),
                  },
                  [(0, n.bF)(c, { icon: ["fas", "chevron-left"] })]
                ),
                (0, n.Lk)(
                  "button",
                  {
                    onClick:
                      a[1] ||
                      (a[1] = (...a) => e.nextSlide && e.nextSlide(...a)),
                  },
                  [(0, n.bF)(c, { icon: ["fas", "chevron-right"] })]
                ),
              ]),
            ])
          );
        }
        var to = {
          data() {
            return {
              items: [
                {
                  id: 1,
                  cdnUrl:
                    "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
                  header: "ALBUM",
                  name: "GIGA",
                  topic: "by ME",
                  description:
                    "Dạo quanh Gigamall cùng những người bạn chơi lâu cùng nhau lâu nhất.",
                  link: "/album",
                },
                {
                  id: 2,
                  cdnUrl:
                    "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0590_sfjnlj.jpg",
                  header: "ALBUM",
                  name: "LÀNG ĐẠI HỌC",
                  topic: "by ME",
                  description:
                    "Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn.",
                  link: "/album",
                },
              ],
            };
          },
          mounted() {
            this.slide = this.$refs.slide;
          },
          methods: {
            next() {
              if (this.slide) {
                const e = this.slide.children;
                this.slide.appendChild(e[0]);
              }
            },
            prev() {
              if (this.slide) {
                const e = this.slide.children;
                this.slide.prepend(e[e.length - 1]);
              }
            },
          },
        };
        const oo = (0, u.A)(to, [
          ["render", ao],
          ["__scopeId", "data-v-0ea10e77"],
        ]);
        var no = oo;
        const so = { class: "container", ref: "container" },
          io = ["href", "data-caption"],
          ro = ["data-src", "alt", "width", "height"];
        function co(e, a, t, o, s, i) {
          const r = (0, n.g2)("HeaderComp"),
            d = (0, n.g2)("PaginationComp"),
            c = (0, n.g2)("FooterComp");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [
                (0, n.bF)(r),
                (0, n.Lk)(
                  "div",
                  so,
                  [
                    ((0, n.uX)(!0),
                    (0, n.CE)(
                      n.FK,
                      null,
                      (0, n.pI)(
                        s.images,
                        (e, a) => (
                          (0, n.uX)(),
                          (0, n.CE)("div", { class: "grid-item", key: a }, [
                            (0, n.Lk)(
                              "a",
                              {
                                href: e.href,
                                "data-fancybox": "gallery",
                                "data-caption": e.caption,
                              },
                              [
                                (0, n.Lk)(
                                  "img",
                                  {
                                    "data-src": e.src,
                                    alt: e.caption,
                                    class: "lozad blur-up",
                                    width: e.width,
                                    height: e.height,
                                  },
                                  null,
                                  8,
                                  ro
                                ),
                              ],
                              8,
                              io
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                (0, n.bF)(
                  d,
                  {
                    totalPages: s.totalPages,
                    links: s.links,
                    onPageChanged: e.handlePageChange,
                  },
                  null,
                  8,
                  ["totalPages", "links", "onPageChanged"]
                ),
                (0, n.bF)(c),
              ],
              64
            )
          );
        }
        var lo = {
          name: "GalleryComponent",
          components: { HeaderComp: Dt, FooterComp: ha, PaginationComp: Ya },
          data() {
            return {
              images: [
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277959/FE7A027_v24sst.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277959/FE7A027_v24sst.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277960/FE7A028_xqmrin.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277960/FE7A028_xqmrin.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277959/FE7A029_id6cwr.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277959/FE7A029_id6cwr.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277961/FE7A0530_m1rlbu.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277961/FE7A0530_m1rlbu.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277963/FE7A0546_waoghd.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277963/FE7A0546_waoghd.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277960/FE7A0565_nlngci.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277960/FE7A0565_nlngci.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277962/FE7A0575_wlc2qp.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277962/FE7A0575_wlc2qp.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277962/FE7A0580_bcjmpv.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277962/FE7A0580_bcjmpv.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277966/FE7A0582_gh2f9c.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0582_gh2f9c.jpg",
                  caption: "By accident",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277967/FE7A0583_gmlkan.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0583_gmlkan.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277966/FE7A0590_sfjnlj.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0590_sfjnlj.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto/v1722277967/FE7A0630_byjfkl.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0630_byjfkl.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277967/FE7A0645_aowhry.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0645_aowhry.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277967/FE7A0646_dr2epd.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0646_dr2epd.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277968/FE7A0665_nm4lqy.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277968/FE7A0665_nm4lqy.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277971/FE7A0720_cqaqez.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277971/FE7A0720_cqaqez.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277976/FE7A0726_tuijhl.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277976/FE7A0726_tuijhl.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277972/FE7A0728_zdnhus.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277972/FE7A0728_zdnhus.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277974/FE7A0764_xdf4vv.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277974/FE7A0764_xdf4vv.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722277973/FE7A0767_lz05gg.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277973/FE7A0767_lz05gg.jpg",
                },
              ],
              totalPages: 2,
              links: ["/ktx", "/ktx2"],
            };
          },
          methods: {
            fetchImageDimensions(e) {
              return new Promise((a) => {
                const t = new Image();
                (t.src = e.src),
                  (t.onload = () => {
                    a({ width: t.width, height: t.height });
                  });
              });
            },
            async updateImageDimensions() {
              const e = await Promise.all(
                this.images.map(async (e) => {
                  const a = await this.fetchImageDimensions(e);
                  return { ...e, ...a };
                })
              );
              this.images = e;
            },
          },
          mounted() {
            this.updateImageDimensions().then(() => {
              Da.lX.bind(this.$refs.container, "[data-fancybox]", {
                Carousel: { infinite: !0 },
                Thumbs: { type: "classic", transition: "slide" },
                Toolbar: {
                  display: {
                    left: ["infobar"],
                    right: [
                      "slideshow",
                      "thumbs",
                      "zoomIn",
                      "zoomOut",
                      "fullscreen",
                      "close",
                    ],
                  },
                },
                wheel: "zoom",
                defaultType: "ajax",
              });
              const e = Ta()(".lozad", {
                load: function (e) {
                  (e.src = e.dataset.src),
                    (e.onload = function () {
                      e.classList.add("fade");
                    });
                },
              });
              e.observe();
            });
          },
          unmounted() {
            Da.lX.destroy();
          },
          activated() {
            console.log("Component activated");
          },
          deactivated() {
            console.log("Component deactivated");
          },
        };
        const uo = (0, u.A)(lo, [
          ["render", co],
          ["__scopeId", "data-v-dd35c328"],
        ]);
        var ho = uo;
        const po = { class: "container", ref: "container" },
          mo = ["href", "data-caption"],
          go = ["data-src", "alt", "width", "height"];
        function vo(e, a, t, o, s, i) {
          const r = (0, n.g2)("HeaderComp"),
            d = (0, n.g2)("PaginationComp"),
            c = (0, n.g2)("FooterComp");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [
                (0, n.bF)(r),
                (0, n.Lk)(
                  "div",
                  po,
                  [
                    ((0, n.uX)(!0),
                    (0, n.CE)(
                      n.FK,
                      null,
                      (0, n.pI)(
                        s.images,
                        (e, a) => (
                          (0, n.uX)(),
                          (0, n.CE)("div", { class: "grid-item", key: a }, [
                            (0, n.Lk)(
                              "a",
                              {
                                href: e.href,
                                "data-fancybox": "gallery",
                                "data-caption": e.caption,
                              },
                              [
                                (0, n.Lk)(
                                  "img",
                                  {
                                    "data-src": e.src,
                                    alt: e.caption,
                                    class: "lozad blur-up",
                                    width: e.width,
                                    height: e.height,
                                  },
                                  null,
                                  8,
                                  go
                                ),
                              ],
                              8,
                              mo
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                (0, n.bF)(
                  d,
                  {
                    totalPages: s.totalPages,
                    links: s.links,
                    onPageChanged: e.handlePageChange,
                  },
                  null,
                  8,
                  ["totalPages", "links", "onPageChanged"]
                ),
                (0, n.bF)(c),
              ],
              64
            )
          );
        }
        var _o = {
          name: "GalleryComponent",
          components: { HeaderComp: Dt, FooterComp: ha, PaginationComp: Ya },
          data() {
            return {
              images: [
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277972/FE7A0809_lyev5b.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277972/FE7A0809_lyev5b.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277974/FE7A0817_e88rhn.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277974/FE7A0817_e88rhn.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277975/FE7A9881_cibccl.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277975/FE7A9881_cibccl.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277974/FE7A9903_qrceyv.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277974/FE7A9903_qrceyv.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277975/IMG_2217_hjy3xs.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277975/IMG_2217_hjy3xs.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722277976/IMG_2255_bohgzp.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277976/IMG_2255_bohgzp.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742969/FE7A9985_hwypv1.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742969/FE7A9985_hwypv1.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1200,q_auto,f_auto/v1730742969/FE7A0019_cbglsd.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742969/FE7A0019_cbglsd.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742969/FE7A0584_qgkwhi.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742969/FE7A0584_qgkwhi.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742970/FE7A9986_fple7v.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742970/FE7A9986_fple7v.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742972/FE7A9993_dxnuj4.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742972/FE7A9993_dxnuj4.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742973/FE7A0047_lez3ug.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742973/FE7A0047_lez3ug.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742973/FE7A9946_ojffgf.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742973/FE7A9946_ojffgf.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1730742972/FE7A9989_x85qdc.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742972/FE7A9989_x85qdc.jpg",
                },
                {
                  src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1730742972/FE7A9996_owwhxb.jpg",
                  href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1730742972/FE7A9996_owwhxb.jpg",
                },
              ],
              totalPages: 2,
              links: ["/ktx", "/ktx2"],
            };
          },
          methods: {
            fetchImageDimensions(e) {
              return new Promise((a) => {
                const t = new Image();
                (t.src = e.src),
                  (t.onload = () => {
                    a({ width: t.width, height: t.height });
                  });
              });
            },
            async updateImageDimensions() {
              const e = await Promise.all(
                this.images.map(async (e) => {
                  const a = await this.fetchImageDimensions(e);
                  return { ...e, ...a };
                })
              );
              this.images = e;
            },
          },
          mounted() {
            this.updateImageDimensions().then(() => {
              Da.lX.bind(this.$refs.container, "[data-fancybox]", {
                Carousel: { infinite: !0 },
                Thumbs: { type: "classic", transition: "slide" },
                Toolbar: {
                  display: {
                    left: ["infobar"],
                    right: [
                      "slideshow",
                      "thumbs",
                      "zoomIn",
                      "zoomOut",
                      "fullscreen",
                      "close",
                    ],
                  },
                },
                wheel: "zoom",
                defaultType: "ajax",
              });
              const e = Ta()(".lozad", {
                load: function (e) {
                  (e.src = e.dataset.src),
                    (e.onload = function () {
                      e.classList.add("fade");
                    });
                },
              });
              e.observe();
            });
          },
          unmounted() {
            Da.lX.destroy();
          },
          activated() {
            console.log("Component activated");
          },
          deactivated() {
            console.log("Component deactivated");
          },
        };
        const fo = (0, u.A)(_o, [
          ["render", vo],
          ["__scopeId", "data-v-22c92496"],
        ]);
        var yo = fo;
        const bo = { class: "container", ref: "container" },
          ko = ["href", "data-caption"],
          jo = ["data-src", "alt", "width", "height"];
        function wo(e, a, t, o, s, i) {
          const r = (0, n.g2)("HeaderComp"),
            d = (0, n.g2)("Description1Comp"),
            c = (0, n.g2)("PaginationComp"),
            l = (0, n.g2)("FooterComp");
          return (
            (0, n.uX)(),
            (0, n.CE)(
              n.FK,
              null,
              [
                (0, n.bF)(r),
                (0, n.bF)(d, { content: s.popupContent }, null, 8, ["content"]),
                (0, n.Lk)(
                  "div",
                  bo,
                  [
                    ((0, n.uX)(!0),
                    (0, n.CE)(
                      n.FK,
                      null,
                      (0, n.pI)(
                        s.images,
                        (e, a) => (
                          (0, n.uX)(),
                          (0, n.CE)("div", { class: "grid-item", key: a }, [
                            (0, n.Lk)(
                              "a",
                              {
                                href: e.href,
                                "data-fancybox": "gallery",
                                "data-caption": e.caption,
                              },
                              [
                                (0, n.Lk)(
                                  "img",
                                  {
                                    "data-src": e.src,
                                    alt: e.caption,
                                    class: "lozad blur-up",
                                    width: e.width,
                                    height: e.height,
                                  },
                                  null,
                                  8,
                                  jo
                                ),
                              ],
                              8,
                              ko
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                (0, n.bF)(
                  c,
                  {
                    totalPages: s.totalPages,
                    links: s.links,
                    onPageChanged: e.handlePageChange,
                  },
                  null,
                  8,
                  ["totalPages", "links", "onPageChanged"]
                ),
                (0, n.bF)(l),
              ],
              64
            )
          );
        }
        const Lo = (0, n.Fv)(
          '<div class="concept concept-three" data-v-bd0b6ad0><div class="word" data-v-bd0b6ad0><div class="hover" data-v-bd0b6ad0><div data-v-bd0b6ad0></div><div data-v-bd0b6ad0></div><h1 data-v-bd0b6ad0>H</h1></div><div class="hover" data-v-bd0b6ad0><div data-v-bd0b6ad0></div><div data-v-bd0b6ad0></div><h1 data-v-bd0b6ad0>O</h1></div><div class="hover" data-v-bd0b6ad0><div data-v-bd0b6ad0></div><div data-v-bd0b6ad0></div><h1 data-v-bd0b6ad0>M</h1></div><div class="hover" data-v-bd0b6ad0><div data-v-bd0b6ad0></div><div data-v-bd0b6ad0></div><h1 data-v-bd0b6ad0>E</h1></div></div></div>',
          1
        );
        function Co(e, a, t, o, s, i) {
          const r = (0, n.g2)("DownButton2");
          return (0, n.uX)(), (0, n.CE)(n.FK, null, [Lo, (0, n.bF)(r)], 64);
        }
        var Fo = { components: { DownButton2: Mt } };
        const Ao = (0, u.A)(Fo, [
          ["render", Co],
          ["__scopeId", "data-v-bd0b6ad0"],
        ]);
        var Io = Ao;
        const Eo = (e) => (
            (0, n.Qi)("data-v-15090be5"), (e = e()), (0, n.jt)(), e
          ),
          qo = { class: "wrap" },
          xo = { class: "popup-content" },
          Po = { class: "popup-body" },
          Mo = { class: "popup-text" },
          Go = Eo(() =>
            (0, n.Lk)("h2", { class: "popup-title" }, "About this Album", -1)
          ),
          So = ["innerHTML"];
        function Do(e, a, t, s, i, r) {
          return (
            (0, n.uX)(),
            (0, n.CE)("div", qo, [
              (0, n.Lk)(
                "button",
                {
                  onClick: a[0] || (a[0] = (e) => (i.showPopup = !0)),
                  class: "btn btn-primary btn-ghost btn-shine",
                },
                " read me "
              ),
              (0, n.bF)(
                o.eB,
                { name: "fade" },
                {
                  default: (0, n.k6)(() => [
                    i.showPopup
                      ? ((0, n.uX)(),
                        (0, n.CE)(
                          "div",
                          {
                            key: 0,
                            class: "popup-overlay",
                            onClick:
                              a[3] ||
                              (a[3] = (...e) =>
                                r.handleOverlayClick &&
                                r.handleOverlayClick(...e)),
                          },
                          [
                            (0, n.Lk)("div", xo, [
                              (0, n.Lk)(
                                "button",
                                {
                                  class: "close-btn",
                                  onClick:
                                    a[1] ||
                                    (a[1] = (...e) =>
                                      r.closePopup && r.closePopup(...e)),
                                },
                                "×"
                              ),
                              (0, n.Lk)("div", Po, [
                                (0, n.Lk)("div", Mo, [
                                  Go,
                                  (0, n.Lk)(
                                    "div",
                                    {
                                      innerHTML: t.content,
                                      class: "popup-message",
                                    },
                                    null,
                                    8,
                                    So
                                  ),
                                  (0, n.Lk)(
                                    "button",
                                    {
                                      class: "ok-btn",
                                      onClick:
                                        a[2] ||
                                        (a[2] = (...e) =>
                                          r.closePopup && r.closePopup(...e)),
                                    },
                                    "OK"
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ))
                      : (0, n.Q3)("", !0),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var Xo = {
          name: "PopupComponent",
          props: {
            content: {
              type: String,
              default: "Default message! Replace this dynamically.",
            },
          },
          data() {
            return { showPopup: !1 };
          },
          methods: {
            closePopup() {
              this.showPopup = !1;
            },
            handleOverlayClick(e) {
              e.target.classList.contains("popup-overlay") && this.closePopup();
            },
          },
        };
        const To = (0, u.A)(Xo, [
          ["render", Do],
          ["__scopeId", "data-v-15090be5"],
        ]);
        var zo = To,
          Bo = {
            name: "GalleryComponent",
            components: {
              HeaderComp: Io,
              FooterComp: ha,
              PaginationComp: Ya,
              Description1Comp: zo,
            },
            data() {
              return {
                popupContent:
                  "<br><b>&#10149; Name:</b> HOME (Page 1: Tết)<br><b>&#10149; Combo:</b> canon 600d + 50ii<br><b>&#10149; Time:</b> Tết âm lịch 2022<br><br> Đây là bộ ảnh đầu tiên kể từ lúc mình bắt đầu tập chơi ảnh nên chất lượng sẽ hơi bị out nét đôi chút. Enjoy!!! &#10084;",
                images: [
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530837/3_fqrxom.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530837/3_fqrxom.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/10_w3y47m.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/10_w3y47m.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/7_xurrap.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/7_xurrap.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/2_hzp4tt.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/2_hzp4tt.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530834/20_eijlmy.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530834/20_eijlmy.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530830/19_p6xxgm.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530830/19_p6xxgm.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530829/22_kiqdhw.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530829/22_kiqdhw.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530829/1_t7x1wq.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530829/1_t7x1wq.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530827/17_hvacrm.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530827/17_hvacrm.png",
                    caption: "",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530825/4_bcgpbc.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530825/4_bcgpbc.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530824/9_agce9e.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/9_agce9e.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/11_zkwbxk.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/11_zkwbxk.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530822/23_abpqzb.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530822/23_abpqzb.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530821/5_juieev.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530821/5_juieev.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530820/18_pluene.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530820/18_pluene.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/h_800,q_auto,f_auto/v1732530817/21_uuiyc9.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530817/21_uuiyc9.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530816/6_rt3iiu.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530816/6_rt3iiu.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530815/13_jgzopj.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530815/13_jgzopj.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530810/8_mg7y2q.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530810/8_mg7y2q.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530810/16_ddqyu5.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530810/16_ddqyu5.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530809/14_vszvwj.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530809/14_vszvwj.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530808/15_ml55zn.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530808/15_ml55zn.png",
                  },
                  {
                    src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530807/12_ksiqvq.png",
                    href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530807/12_ksiqvq.png",
                  },
                ],
                totalPages: 1,
                links: ["/giga"],
              };
            },
            methods: {
              fetchImageDimensions(e) {
                return new Promise((a) => {
                  const t = new Image();
                  (t.src = e.src),
                    (t.onload = () => {
                      a({ width: t.width, height: t.height });
                    });
                });
              },
              async updateImageDimensions() {
                const e = await Promise.all(
                  this.images.map(async (e) => {
                    const a = await this.fetchImageDimensions(e);
                    return { ...e, ...a };
                  })
                );
                this.images = e;
              },
            },
            mounted() {
              this.updateImageDimensions().then(() => {
                Da.lX.bind(this.$refs.container, "[data-fancybox]", {
                  Carousel: { infinite: !0 },
                  Thumbs: { type: "classic", transition: "slide" },
                  Toolbar: {
                    display: {
                      left: ["infobar"],
                      right: [
                        "slideshow",
                        "thumbs",
                        "zoomIn",
                        "zoomOut",
                        "fullscreen",
                        "close",
                      ],
                    },
                  },
                  wheel: "zoom",
                  defaultType: "ajax",
                });
                const e = Ta()(".lozad", {
                  load: function (e) {
                    (e.src = e.dataset.src),
                      (e.onload = function () {
                        e.classList.add("fade");
                      });
                  },
                });
                e.observe();
              });
            },
            unmounted() {
              Da.lX.destroy();
            },
            activated() {
              console.log("Component activated");
            },
            deactivated() {
              console.log("Component deactivated");
            },
          };
        const Oo = (0, u.A)(Bo, [
          ["render", wo],
          ["__scopeId", "data-v-9e7d7bc6"],
        ]);
        var $o = Oo;
        const Ho = [
            { path: "/", component: Je },
            { path: "/about", component: B },
            { path: "/footer", component: ha },
            { path: "/profile", component: xa },
            { path: "/header1", component: B },
            { path: "/header2", component: Dt },
            { path: "/giga", component: Ja },
            { path: "/home", component: $o },
            { path: "/albumtest", component: Ht },
            { path: "/modal", component: wt },
            { path: "/audio", component: gt },
            { path: "/albumcoppy", component: no },
            { path: "/ktx", component: ho },
            { path: "/ktx2", component: yo },
            { path: "/:pathMatch(.*)*", component: Y },
          ],
          No = (0, F.aE)({ history: (0, F.sC)(), routes: Ho });
        var Uo = No,
          Wo = t(92),
          Ko = t(4996),
          Qo = (t(6587), t(4458));
        (0, Qo.k)("/my-vue/service-worker.js", {
          ready() {
            console.log(
              "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
            );
          },
          registered() {
            console.log("Service worker has been registered.");
          },
          cached() {
            console.log("Content has been cached for offline use.");
          },
          updatefound() {
            console.log("New content is downloading.");
          },
          updated() {
            console.log("New content is available; please refresh.");
          },
          offline() {
            console.log(
              "No internet connection found. App is running in offline mode."
            );
          },
          error(e) {
            console.error("Error during service worker registration:", e);
          },
        }),
          lt.Yv.add(ht.X7I, Wo.C91, Ko.Cvc);
        const Yo = (0, o.Ef)(C);
        Yo.component("font-awesome-icon", ut.gc), Yo.use(Uo), Yo.mount("#app");
      },
      5168: function (e, a, t) {
        e.exports = t.p + "img/1.7cbac74d.jpg";
      },
      1171: function (e, a, t) {
        e.exports = t.p + "media/1.91bd78f9.mp3";
      },
      9503: function (e, a, t) {
        e.exports = t.p + "img/2.7138c549.jpg";
      },
      6380: function (e, a, t) {
        e.exports = t.p + "media/2.7f7bea29.mp3";
      },
      6834: function (e, a, t) {
        e.exports = t.p + "img/3.952ddf1b.jpg";
      },
      8689: function (e, a, t) {
        e.exports = t.p + "media/3.4e28ce56.mp3";
      },
      8881: function (e, a, t) {
        e.exports = t.p + "img/1.a2f2aec9.jpg";
      },
      1126: function (e, a, t) {
        e.exports = t.p + "img/2.50a24aba.jpg";
      },
      611: function (e, a, t) {
        e.exports = t.p + "img/3.b3a938a0.jpg";
      },
      7984: function (e, a, t) {
        e.exports = t.p + "img/4.75fc85c9.jpg";
      },
      6557: function (e, a, t) {
        e.exports = t.p + "img/5.37d462ec.jpg";
      },
      4274: function (e, a, t) {
        e.exports = t.p + "img/6.f5536a3a.jpg";
      },
      2335: function (e, a, t) {
        e.exports = t.p + "img/7.9d5a2dcf.jpg";
      },
    },
    a = {};
  function t(o) {
    var n = a[o];
    if (void 0 !== n) return n.exports;
    var s = (a[o] = { exports: {} });
    return e[o].call(s.exports, s, s.exports, t), s.exports;
  }
  (t.m = e),
    (function () {
      var e = [];
      t.O = function (a, o, n, s) {
        if (!o) {
          var i = 1 / 0;
          for (l = 0; l < e.length; l++) {
            (o = e[l][0]), (n = e[l][1]), (s = e[l][2]);
            for (var r = !0, d = 0; d < o.length; d++)
              (!1 & s || i >= s) &&
              Object.keys(t.O).every(function (e) {
                return t.O[e](o[d]);
              })
                ? o.splice(d--, 1)
                : ((r = !1), s < i && (i = s));
            if (r) {
              e.splice(l--, 1);
              var c = n();
              void 0 !== c && (a = c);
            }
          }
          return a;
        }
        s = s || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > s; l--) e[l] = e[l - 1];
        e[l] = [o, n, s];
      };
    })(),
    (function () {
      t.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return t.d(a, { a: a }), a;
      };
    })(),
    (function () {
      t.d = function (e, a) {
        for (var o in a)
          t.o(a, o) &&
            !t.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: a[o] });
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      };
    })(),
    (function () {
      t.p = "/my-vue/";
    })(),
    (function () {
      var e = { 524: 0 };
      t.O.j = function (a) {
        return 0 === e[a];
      };
      var a = function (a, o) {
          var n,
            s,
            i = o[0],
            r = o[1],
            d = o[2],
            c = 0;
          if (
            i.some(function (a) {
              return 0 !== e[a];
            })
          ) {
            for (n in r) t.o(r, n) && (t.m[n] = r[n]);
            if (d) var l = d(t);
          }
          for (a && a(o); c < i.length; c++)
            (s = i[c]), t.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return t.O(l);
        },
        o = (self["webpackChunkmy_vue_project"] =
          self["webpackChunkmy_vue_project"] || []);
      o.forEach(a.bind(null, 0)), (o.push = a.bind(null, o.push.bind(o)));
    })();
  var o = t.O(void 0, [504], function () {
    return t(7206);
  });
  o = t.O(o);
})();
//# sourceMappingURL=app.ffa5d847.js.map
