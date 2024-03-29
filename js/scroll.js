(function() {
    function a(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    this.smooths = function() {
        arguments[0] && "object" == typeof arguments[0] && (this.options = a({
            section: "section",
            anchor: "anchor",
            speed: 200,
            easing: 10
        }, arguments[0]));
        const b = document.getElementsByClassName(this.options.section),
            c = document.getElementsByClassName(this.options.anchor),
            d = [];
        for (let a of b) d.push(a.offsetTop);
        window.addEventListener("scroll", function() {
            const b = Math.round(window.scrollY);
            let f = 0;
            for (let a of d) b >= a && (e(), c[f].classList.add("link--active"), f++), b < d[0] && e()
        }, !1);
        let e = () => {
            for (let a = 0; a < c.length; a++) c[a].classList.remove("link--active")
        };
        const f = this.options.speed,
            g = this.options.easing;
        let h;
        for (let a = 0; a < c.length; a++) h = void 0 === c[a].attributes.href ? null : c[a].attributes.href.nodeValue.toString(), null !== h && 1 < h.length && "#" == h.substr(0, 1) && (c[a].onclick = function() {
            let a, b = this.attributes.href.nodeValue.toString();
            if (a = document.getElementById(b.substr(1))) {
                let b = f / g,
                    c = j(),
                    d = (i(a) - c) / b;
                for (let a = 1; a <= b; a++)(function() {
                    let b = d * a;
                    setTimeout(function() {
                        window.scrollTo(0, b + c)
                    }, g * a)
                })()
            }
            return !1
        });
        let i = function(a) {
                let b = 0;
                for (; a.offsetParent != null && null != a.offsetParent;) b += a.offsetTop + (null == a.clientTop ? 0 : a.clientTop), a = a.offsetParent;
                return b
            },
            j = function() {
                return document.documentElement.scrollTop + document.body.scrollTop
            }
    }
})();