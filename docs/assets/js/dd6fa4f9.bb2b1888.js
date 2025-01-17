'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [933],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => s, kt: () => v });
      var n = r(7294);
      function o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      var c = n.createContext({}),
        p = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        s = function (e) {
          var t = p(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = p(r),
            m = o,
            v = u[''.concat(c, '.').concat(m)] || u[m] || d[m] || i;
          return r ? n.createElement(v, a(a({ ref: t }, s), {}, { components: r })) : n.createElement(v, a({ ref: t }, s));
        });
      function v(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var i = r.length,
            a = new Array(i);
          a[0] = m;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e), (l[u] = 'string' == typeof e ? e : o), (a[1] = l);
          for (var p = 2; p < i; p++) a[p] = r[p];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    8501: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => p,
        });
      var n = r(7462),
        o = (r(7294), r(3905));
      const i = {
          sidebar_position: 16,
          sidebar_label: 'PreviewText',
          description: 'A React Native <Text> component that displays the preview color text.',
        },
        a = '<PreviewText />',
        l = {
          unversionedId: 'API/PreviewText',
          id: 'API/PreviewText',
          title: '<PreviewText />',
          description: 'A React Native <Text> component that displays the preview color text.',
          source: '@site/docs/API/PreviewText.md',
          sourceDirName: 'API',
          slug: '/API/PreviewText',
          permalink: '/reanimated-color-picker/docs/API/PreviewText',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 16,
          frontMatter: {
            sidebar_position: 16,
            sidebar_label: 'PreviewText',
            description: 'A React Native <Text> component that displays the preview color text.',
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Preview', permalink: '/reanimated-color-picker/docs/API/Preview' },
          next: { title: 'InputWidget', permalink: '/reanimated-color-picker/docs/API/InputWidget' },
        },
        c = {},
        p = [
          { value: 'Props', id: 'props', level: 2 },
          { value: '<code>colorFormat</code>', id: 'colorformat', level: 3 },
          { value: '<code>style</code>', id: 'style', level: 3 },
        ],
        s = { toc: p };
      function u(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          'wrapper',
          (0, n.Z)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, o.kt)('h1', { id: 'previewtext-' }, (0, o.kt)('inlineCode', { parentName: 'h1' }, '<PreviewText />')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              'A React Native ',
              (0, o.kt)('inlineCode', { parentName: 'li' }, '<Text>'),
              ' component that displays the preview color text.'
            )
          ),
          (0, o.kt)('h2', { id: 'props' }, 'Props'),
          (0, o.kt)('h3', { id: 'colorformat' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'colorFormat')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)('li', { parentName: 'ul' }, "Preview color's format."),
            (0, o.kt)('li', { parentName: 'ul' }, (0, o.kt)('inlineCode', { parentName: 'li' }, 'type: string')),
            (0, o.kt)(
              'li',
              { parentName: 'ul' },
              (0, o.kt)('inlineCode', { parentName: 'li' }, 'values:'),
              (0, o.kt)('formats', null)
            )
          ),
          (0, o.kt)('h3', { id: 'style' }, (0, o.kt)('inlineCode', { parentName: 'h3' }, 'style')),
          (0, o.kt)(
            'ul',
            null,
            (0, o.kt)('li', { parentName: 'ul' }, 'Preview text style.'),
            (0, o.kt)('li', { parentName: 'ul' }, (0, o.kt)('inlineCode', { parentName: 'li' }, 'type: TextStyle'))
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
