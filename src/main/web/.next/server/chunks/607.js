exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lr": function() { return /* reexport */ Carousel_Carousel; },
  "wp": function() { return /* reexport */ components_Navbar; }
});

// UNUSED EXPORTS: Button, Image, Modal

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/core/components/Modal.jsx

 // import { Container } from './styles';

const Modal = () => {
  return /*#__PURE__*/_jsx("div", {});
};

/* harmony default export */ var components_Modal = ((/* unused pure expression or super */ null && (Modal)));
;// CONCATENATED MODULE: ./src/core/components/Button.jsx



const Button = () => {
  return /*#__PURE__*/_jsx("div", {});
};

/* harmony default export */ var components_Button = ((/* unused pure expression or super */ null && (Button)));
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "@chakra-ui/image"
var image_ = __webpack_require__(8851);
;// CONCATENATED MODULE: ./src/core/components/Image.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Image = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(image_.Image, _objectSpread({}, props));
};

/* harmony default export */ var components_Image = (Image);
;// CONCATENATED MODULE: ./src/core/theme/colors.js
/* eslint-disable import/no-anonymous-default-export */
/* harmony default export */ var colors = ({
  black: '#1D1D1D',
  white: '#fff',
  whiteLight: '#FCFCFC',
  backGround: '#303030',
  red: '#EC0025'
});
;// CONCATENATED MODULE: ./src/core/theme/theme.js
function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Theme = {
  colors: theme_objectSpread({}, colors)
};
/* harmony default export */ var theme = (Theme);
;// CONCATENATED MODULE: ./src/core/theme/index.js

;// CONCATENATED MODULE: ./src/core/hooks/useTheme.jsx



function useHooks() {
  return (0,external_react_.useMemo)(() => theme, []);
}

/* harmony default export */ var useTheme = (useHooks);
;// CONCATENATED MODULE: ./src/core/hooks/index.jsx

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(7985);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/core/components/Navbar.jsx







const PAGES = [{
  link: '/',
  linkName: 'Inicio',
  icon: icons_.Home
}, {
  link: '/home/projects',
  linkName: 'Projeto',
  icon: icons_.ShowChart
}, {
  link: '/home/about',
  linkName: 'Sobre',
  icon: icons_.Info
}];

const NavLink = ({
  icon,
  linkName,
  colors,
  link
}) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
  href: link,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
    px: 2,
    py: 1,
    color: colors.red,
    rounded: 'md',
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
      as: icon,
      mx: 2
    }), linkName]
  })
});

const Navbar = () => {
  const {
    colors
  } = useTheme();

  const renderItem = ({
    linkName,
    icon,
    link
  }) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
    icon: icon,
    linkName: linkName,
    colors: colors,
    link: link
  }, linkName);

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    bg: colors.black,
    px: 4,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      alignItems: 'center',
      justifyContent: 'space-between',
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        alignItems: 'center',
        justifyContent: 'flex-start',
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          color: colors.red,
          m: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Image, {
            src: __webpack_require__(1283),
            alt: "logo",
            width: 200,
            height: 50
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        h: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
          spacing: 8,
          alignItems: 'center',
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
            as: 'nav',
            spacing: 4,
            children: PAGES.map(renderItem)
          })
        })
      })]
    })
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "pure-react-carousel"
var external_pure_react_carousel_ = __webpack_require__(3173);
;// CONCATENATED MODULE: ./src/core/components/Carousel/Videos.jsx


function Videos_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Videos_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Videos_ownKeys(Object(source), true).forEach(function (key) { Videos_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Videos_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Videos_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-key */





const VideosCarousel = props => {
  const slides = Array.from({
    length: 5
  }, (_, index) => /*#__PURE__*/jsx_runtime_.jsx(components_Image, {
    alt: "test-image",
    src: __webpack_require__(3413),
    width: "100%",
    height: "100%"
  }, index));
  return /*#__PURE__*/jsx_runtime_.jsx(Carousel_Carousel, Videos_objectSpread(Videos_objectSpread({
    slides: slides
  }, props), {}, {
    backButtonIcon: ({
      tintColor
    }) => /*#__PURE__*/jsx_runtime_.jsx(icons_.ArrowBackIos, {
      style: {
        color: tintColor
      },
      fontSize: "large"
    }),
    forwardButtonIcon: ({
      tintColor
    }) => /*#__PURE__*/jsx_runtime_.jsx(icons_.ArrowForwardIos, {
      style: {
        color: tintColor
      },
      fontSize: "large"
    })
  }));
};

/* harmony default export */ var Videos = (VideosCarousel);
;// CONCATENATED MODULE: ./src/core/components/Carousel/Carousel.jsx



function Carousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Carousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Carousel_ownKeys(Object(source), true).forEach(function (key) { Carousel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Carousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Carousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Carousel = (_ref) => {
  let {
    width = 333,
    height = 200,
    slides = [],
    dragEnabled = false,
    backButtonIcon = props => /*#__PURE__*/jsx_runtime_.jsx(icons_.ArrowBackIos, Carousel_objectSpread({}, props)),
    forwardButtonIcon = props => /*#__PURE__*/jsx_runtime_.jsx(icons_.ArrowForwardIos, Carousel_objectSpread({}, props))
  } = _ref,
      props = _objectWithoutProperties(_ref, ["width", "height", "slides", "dragEnabled", "backButtonIcon", "forwardButtonIcon"]);

  const {
    colors
  } = useTheme();

  const renderSlide = (children, index) => /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
    index: index,
    children: children
  }, index);

  if (!slides.length) {
    throw new Error('Is necessary pass a array of slides to use this component');
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_.CarouselProvider, Carousel_objectSpread(Carousel_objectSpread({
    naturalSlideWidth: width,
    naturalSlideHeight: height,
    totalSlides: slides.length,
    dragEnabled: dragEnabled
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        px: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_.ButtonBack, {
          children: backButtonIcon({
            tintColor: colors.red
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        flex: 1,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_.Slider, {
          children: slides.map(renderSlide)
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        px: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_pure_react_carousel_.ButtonNext, {
          children: forwardButtonIcon({
            tintColor: colors.red
          })
        })
      })]
    })
  }));
};

Carousel.Videos = Videos;
/* harmony default export */ var Carousel_Carousel = (Carousel);
;// CONCATENATED MODULE: ./src/core/components/Carousel/index.jsx

;// CONCATENATED MODULE: ./src/core/components/index.jsx






/***/ }),

/***/ 1283:
/***/ (function(module) {

module.exports = "/_next/static/images/logo-432f132fbc1874aa71cb839f24575145.svg";

/***/ }),

/***/ 3413:
/***/ (function(module) {

module.exports = "/_next/static/images/thumb-one-d0a1b14c851ea975f9d5cc7b6c4fce12.svg";

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;