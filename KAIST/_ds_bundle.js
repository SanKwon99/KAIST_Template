/* @ds-bundle: {"format":4,"namespace":"KAISTDesignSystem_045fa4","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Tag","sourcePath":"components/actions/Tag.jsx"},{"name":"Corners","sourcePath":"components/content/Blueprint.jsx"},{"name":"Blueprint","sourcePath":"components/content/Blueprint.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Duotone","sourcePath":"components/content/Duotone.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"9ce78aef82dd","components/actions/Tag.jsx":"618a338231cb","components/content/Blueprint.jsx":"dd63f8ea8e45","components/content/Card.jsx":"0da643bd8f8d","components/content/Duotone.jsx":"2b8b778a8bf4","components/data/Table.jsx":"9c24a983ed32","components/forms/Field.jsx":"28c065b46f2d","components/forms/Input.jsx":"3b0564c615fe","components/forms/Radio.jsx":"464798ee113d","components/forms/SegmentedControl.jsx":"3f46cba3653c","components/navigation/Nav.jsx":"78be08964b76","components/overlay/Dialog.jsx":"8df17bded9b7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KAISTDesignSystem_045fa4 = window.KAISTDesignSystem_045fa4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  variant = 'accent',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tag', 'tag-' + variant, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Blueprint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Corners() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "corner tl"
  }), /*#__PURE__*/React.createElement("i", {
    className: "corner tr"
  }), /*#__PURE__*/React.createElement("i", {
    className: "corner bl"
  }), /*#__PURE__*/React.createElement("i", {
    className: "corner br"
  }));
}
function Blueprint({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['blueprint', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(Corners, null), children);
}
Object.assign(__ds_scope, { Corners, Blueprint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Blueprint.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  iconOnly = false,
  block = false,
  framed,
  children,
  className = '',
  ...rest
}) {
  const frame = framed ?? variant !== 'ghost';
  const cls = ['btn', 'btn-' + variant, iconOnly && 'btn-icon', block && 'btn-block', frame && 'blueprint', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), frame && /*#__PURE__*/React.createElement(__ds_scope.Corners, null), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  kicker,
  title,
  children,
  meta,
  metaIcon,
  elevation,
  className = '',
  ...rest
}) {
  const cls = ['card', 'blueprint', elevation && 'elev-' + elevation, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Corners, null), kicker && /*#__PURE__*/React.createElement("div", {
    className: "card-kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "card-body"
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    className: "card-meta"
  }, metaIcon, /*#__PURE__*/React.createElement("span", null, meta)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Duotone.jsx
try { (() => {
function Duotone({
  src,
  alt = '',
  caption,
  framed = true,
  className = '',
  style,
  imgStyle
}) {
  const cls = ['duotone', framed && 'blueprint', className].filter(Boolean).join(' ');
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      borderRadius: 0,
      ...imgStyle
    }
  });
  const box = /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, framed && /*#__PURE__*/React.createElement(__ds_scope.Corners, null), img);
  if (!caption) return box;
  return /*#__PURE__*/React.createElement("figure", null, box, /*#__PURE__*/React.createElement("figcaption", null, caption));
}
Object.assign(__ds_scope, { Duotone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Duotone.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    className: ['table', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: c.align ? {
      textAlign: c.align
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: c.muted ? 'text-muted' : undefined,
    style: c.align ? {
      textAlign: c.align
    } : undefined
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  labelId,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['field', className].filter(Boolean).join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    id: labelId
  }, label), children);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  multiline = false,
  className = '',
  ...rest
}) {
  const cls = ['input', className].filter(Boolean).join(' ');
  return multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: 3
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "radio",
    style: disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : undefined
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  labelledBy
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const current = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "radiogroup",
    "aria-labelledby": labelledBy
  }, options.map(o => /*#__PURE__*/React.createElement("label", {
    className: "seg-opt",
    key: o.value
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: o.value,
    checked: current === o.value,
    onChange: () => {
      setInner(o.value);
      onChange && onChange(o.value);
    }
  }), o.icon, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function Nav({
  brand,
  links = [],
  current,
  onNavigate,
  actions
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-brand"
  }, brand), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || '#',
    "aria-current": current === l.id ? 'page' : undefined,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id);
      }
    }
  }, l.label)), actions);
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  contained = false
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dialog-backdrop",
    style: contained ? {
      position: 'absolute'
    } : undefined,
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog blueprint",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Corners, null), title && /*#__PURE__*/React.createElement("div", {
    className: "dialog-title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "dialog-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "dialog-actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Corners = __ds_scope.Corners;

__ds_ns.Blueprint = __ds_scope.Blueprint;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Duotone = __ds_scope.Duotone;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
