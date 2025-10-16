(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/apps/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/apps/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/apps/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_update
]);
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_update(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "update");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = (options === null || options === void 0 ? void 0 : options.queryKeyHashFn) || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
        const aItems = array ? a : Object.keys(a);
        const aSize = aItems.length;
        const bItems = array ? b : Object.keys(b);
        const bSize = bItems.length;
        const copy = array ? [] : {};
        const aItemsSet = new Set(aItems);
        let equalItems = 0;
        for(let i = 0; i < bSize; i++){
            const key = array ? i : bItems[i];
            if ((!array && aItemsSet.has(key) || array) && a[key] === void 0 && b[key] === void 0) {
                copy[key] = void 0;
                equalItems++;
            } else {
                copy[key] = replaceEqualDeep(a[key], b[key]);
                if (copy[key] === a[key] && a[key] !== void 0) {
                    equalItems++;
                }
            }
        }
        return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error("Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [".concat(options.queryHash, "]: ").concat(error));
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item) {
    let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item) {
    let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error("Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '".concat(options.queryHash, "'"));
        }
    }
    if (!options.queryFn && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise)) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error("Missing queryFn: '".concat(options.queryHash, "'")));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_get
]);
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
;
}),
"[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_method_init(obj, privateSet) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateSet);
    privateSet.add(obj);
}
;
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var defaultScheduler = (cb)=>setTimeout(cb, 0);
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _focused, _cleanup, _setup;
;
;
var FocusManager = (_focused = /*#__PURE__*/ new WeakMap(), _cleanup = /*#__PURE__*/ new WeakMap(), _setup = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    onSubscribe() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup)) {
            this.setEventListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup));
        }
    }
    onUnsubscribe() {
        var _this, _this1, _ref;
        if (!this.hasListeners()) {
            (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _this, _this1, _ref;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, setup);
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        }));
    }
    setFocused(focused) {
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused) !== focused;
        if (changed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused, focused);
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        var _globalThis_document;
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused) === "boolean") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused);
        }
        return ((_globalThis_document = globalThis.document) === null || _globalThis_document === void 0 ? void 0 : _globalThis_document.visibilityState) !== "hidden";
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        });
    }
});
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _online, _cleanup, _setup;
;
;
var OnlineManager = (_online = /*#__PURE__*/ new WeakMap(), _cleanup = /*#__PURE__*/ new WeakMap(), _setup = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    onSubscribe() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup)) {
            this.setEventListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup));
        }
    }
    onUnsubscribe() {
        var _this, _this1, _ref;
        if (!this.hasListeners()) {
            (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _this, _this1, _ref;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, setup);
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, setup(this.setOnline.bind(this)));
    }
    setOnline(online) {
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online) !== online;
        if (changed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online, online);
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online);
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online, {
            writable: true,
            value: true
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        });
    }
});
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    var _promise_then;
    let data;
    (_promise_then = promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"])) === null || _promise_then === void 0 ? void 0 : _promise_then.catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode !== null && networkMode !== void 0 ? networkMode : "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options === null || options === void 0 ? void 0 : options.revert;
        this.silent = options === null || options === void 0 ? void 0 : options.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            var _config_abort;
            reject(new CancelledError(cancelOptions));
            (_config_abort = config.abort) === null || _config_abort === void 0 ? void 0 : _config_abort.call(config);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            var _config_onPause;
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            (_config_onPause = config.onPause) === null || _config_onPause === void 0 ? void 0 : _config_onPause.call(config);
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                var _config_onContinue;
                (_config_onContinue = config.onContinue) === null || _config_onContinue === void 0 ? void 0 : _config_onContinue.call(config);
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise !== null && initialPromise !== void 0 ? initialPromise : config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            var _config_onFail;
            if (isResolved()) {
                return;
            }
            var _config_retry;
            const retry = (_config_retry = config.retry) !== null && _config_retry !== void 0 ? _config_retry : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3;
            var _config_retryDelay;
            const retryDelay = (_config_retryDelay = config.retryDelay) !== null && _config_retryDelay !== void 0 ? _config_retryDelay : defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            (_config_onFail = config.onFail) === null || _config_onFail === void 0 ? void 0 : _config_onFail.call(config, failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _gcTimeout;
;
var Removable = (_gcTimeout = /*#__PURE__*/ new WeakMap(), class {
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime));
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime !== null && newGcTime !== void 0 ? newGcTime : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3);
    }
    clearGcTimeout() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout)) {
            clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, void 0);
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, {
            writable: true,
            value: void 0
        });
    }
});
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
;
;
;
;
;
var _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, _dispatch, _class;
;
;
;
;
var Query = (_initialState = /*#__PURE__*/ new WeakMap(), _revertState = /*#__PURE__*/ new WeakMap(), _cache = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _retryer = /*#__PURE__*/ new WeakMap(), _defaultOptions = /*#__PURE__*/ new WeakMap(), _abortSignalConsumed = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    get meta() {
        return this.options.meta;
    }
    get promise() {
        var _class_private_field_get;
        return (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.promise;
    }
    setOptions(options) {
        this.options = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions),
            ...options
        };
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
            data,
            type: "success",
            dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt,
            manual: options === null || options === void 0 ? void 0 : options.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        var _class_private_field_get, _class_private_field_get1;
        const promise = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.promise;
        (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get1 === void 0 ? void 0 : _class_private_field_get1.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState));
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime() {
        let staleTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        var _class_private_field_get;
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer === null || observer === void 0 ? void 0 : observer.refetch({
            cancelRefetch: false
        });
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue();
    }
    onOnline() {
        var _class_private_field_get;
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer === null || observer === void 0 ? void 0 : observer.refetch({
            cancelRefetch: false
        });
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).cancel({
                            revert: true
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        var _class_private_field_get, _this_options_behavior, _context_fetchOptions;
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.status()) !== "rejected") {
            if (this.state.data !== void 0 && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)) {
                this.cancel({
                    silent: true
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).continueRetry();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, true);
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, false);
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client),
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        (_this_options_behavior = this.options.behavior) === null || _this_options_behavior === void 0 ? void 0 : _this_options_behavior.onFetch(context, this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, this.state);
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context_fetchOptions = context.fetchOptions) === null || _context_fetchOptions === void 0 ? void 0 : _context_fetchOptions.meta)) {
            var _context_fetchOptions1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "fetch",
                meta: (_context_fetchOptions1 = context.fetchOptions) === null || _context_fetchOptions1 === void 0 ? void 0 : _context_fetchOptions1.meta
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise,
            fn: context.fetchFn,
            abort: abortController.abort.bind(abortController),
            onFail: (failureCount, error)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                });
            },
            onContinue: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        }));
        try {
            var _class_private_field_get_config_onSuccess, _class_private_field_get_config, _class_private_field_get_config_onSettled, _class_private_field_get_config1;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ".concat(this.queryHash));
                }
                throw new Error("".concat(this.queryHash, " data is undefined"));
            }
            this.setData(data);
            (_class_private_field_get_config_onSuccess = (_class_private_field_get_config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSuccess) === null || _class_private_field_get_config_onSuccess === void 0 ? void 0 : _class_private_field_get_config_onSuccess.call(_class_private_field_get_config, data, this);
            (_class_private_field_get_config_onSettled = (_class_private_field_get_config1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSettled) === null || _class_private_field_get_config_onSettled === void 0 ? void 0 : _class_private_field_get_config_onSettled.call(_class_private_field_get_config1, data, this.state.error, this);
            return data;
        } catch (error) {
            var _class_private_field_get_config_onError, _class_private_field_get_config2, _class_private_field_get_config_onSettled1, _class_private_field_get_config3;
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).promise;
                } else if (error.revert) {
                    this.setState({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState),
                        fetchStatus: "idle"
                    });
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "error",
                error
            });
            (_class_private_field_get_config_onError = (_class_private_field_get_config2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onError) === null || _class_private_field_get_config_onError === void 0 ? void 0 : _class_private_field_get_config_onError.call(_class_private_field_get_config2, error, this);
            (_class_private_field_get_config_onSettled1 = (_class_private_field_get_config3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSettled) === null || _class_private_field_get_config_onSettled1 === void 0 ? void 0 : _class_private_field_get_config_onSettled1.call(_class_private_field_get_config3, this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    constructor(config){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, config.defaultOptions);
        this.setOptions(config.options);
        this.observers = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, config.client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache());
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState, getDefaultState(this.options));
        var _config_state;
        this.state = (_config_state = config.state) !== null && _config_state !== void 0 ? _config_state : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState);
        this.scheduleGc();
    }
}, _class);
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0 ? initialDataUpdatedAt : Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
function dispatch(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    fetchFailureCount: action.failureCount,
                    fetchFailureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...state,
                    fetchStatus: "fetching"
                };
            case "fetch":
                var _action_meta;
                return {
                    ...state,
                    ...fetchState(state.data, this.options),
                    fetchMeta: (_action_meta = action.meta) !== null && _action_meta !== void 0 ? _action_meta : null
                };
            case "success":
                var _action_dataUpdatedAt;
                const newState = {
                    ...state,
                    data: action.data,
                    dataUpdateCount: state.dataUpdateCount + 1,
                    dataUpdatedAt: (_action_dataUpdatedAt = action.dataUpdatedAt) !== null && _action_dataUpdatedAt !== void 0 ? _action_dataUpdatedAt : Date.now(),
                    error: null,
                    isInvalidated: false,
                    status: "success",
                    ...!action.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, action.manual ? newState : void 0);
                return newState;
            case "error":
                const error = action.error;
                return {
                    ...state,
                    error,
                    errorUpdateCount: state.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: state.fetchFailureCount + 1,
                    fetchFailureReason: error,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...state,
                    isInvalidated: true
                };
            case "setState":
                return {
                    ...state,
                    ...action.state
                };
        }
    };
    this.state = reducer(this.state);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        this.observers.forEach((observer)=>{
            observer.onQueryUpdate();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
            query: this,
            type: "updated",
            action
        });
    });
}
 //# sourceMappingURL=query.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
;
var _queries;
;
;
;
;
var QueryCache = (_queries = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    build(client, options, state) {
        const queryKey = options.queryKey;
        var _options_queryHash;
        const queryHash = (_options_queryHash = options.queryHash) !== null && _options_queryHash !== void 0 ? _options_queryHash : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).has(query.queryHash)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).get(queryHash);
    }
    getAll() {
        return [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll() {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
    constructor(config = {}){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries, {
            writable: true,
            value: void 0
        });
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries, /* @__PURE__ */ new Map());
    }
});
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
;
;
;
;
;
var _observers, _mutationCache, _retryer, _dispatch, _class;
;
;
;
var Mutation = (_observers = /*#__PURE__*/ new WeakMap(), _mutationCache = /*#__PURE__*/ new WeakMap(), _retryer = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).includes(observer)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).push(observer);
            this.clearGcTimeout();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).filter((x)=>x !== observer));
        this.scheduleGc();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).remove(this);
            }
        }
    }
    continue() {
        var _class_private_field_get;
        var _class_private_field_get_continue;
        return (_class_private_field_get_continue = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue()) !== null && _class_private_field_get_continue !== void 0 ? _class_private_field_get_continue : // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "continue"
            });
        };
        var _this_options_retry;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables);
            },
            onFail: (failureCount, error)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                });
            },
            onContinue,
            retry: (_this_options_retry = this.options.retry) !== null && _this_options_retry !== void 0 ? _this_options_retry : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).canRun(this)
        }));
        const restored = this.state.status === "pending";
        const isPaused = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).canStart();
        try {
            var _class_private_field_get_config_onSuccess, _class_private_field_get_config, _this_options_onSuccess, _this_options, _class_private_field_get_config_onSettled, _class_private_field_get_config1, _this_options_onSettled, _this_options1;
            if (restored) {
                onContinue();
            } else {
                var _class_private_field_get_config_onMutate, _class_private_field_get_config2, _this_options_onMutate, _this_options2;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pending",
                    variables,
                    isPaused
                });
                await ((_class_private_field_get_config_onMutate = (_class_private_field_get_config2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onMutate) === null || _class_private_field_get_config_onMutate === void 0 ? void 0 : _class_private_field_get_config_onMutate.call(_class_private_field_get_config2, variables, this));
                const context = await ((_this_options_onMutate = (_this_options2 = this.options).onMutate) === null || _this_options_onMutate === void 0 ? void 0 : _this_options_onMutate.call(_this_options2, variables));
                if (context !== this.state.context) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).start();
            await ((_class_private_field_get_config_onSuccess = (_class_private_field_get_config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSuccess) === null || _class_private_field_get_config_onSuccess === void 0 ? void 0 : _class_private_field_get_config_onSuccess.call(_class_private_field_get_config, data, variables, this.state.context, this));
            await ((_this_options_onSuccess = (_this_options = this.options).onSuccess) === null || _this_options_onSuccess === void 0 ? void 0 : _this_options_onSuccess.call(_this_options, data, variables, this.state.context));
            await ((_class_private_field_get_config_onSettled = (_class_private_field_get_config1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSettled) === null || _class_private_field_get_config_onSettled === void 0 ? void 0 : _class_private_field_get_config_onSettled.call(_class_private_field_get_config1, data, null, this.state.variables, this.state.context, this));
            await ((_this_options_onSettled = (_this_options1 = this.options).onSettled) === null || _this_options_onSettled === void 0 ? void 0 : _this_options_onSettled.call(_this_options1, data, null, variables, this.state.context));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                var _class_private_field_get_config_onError, _class_private_field_get_config3, _this_options_onError, _this_options3, _class_private_field_get_config_onSettled1, _class_private_field_get_config4, _this_options_onSettled1, _this_options4;
                await ((_class_private_field_get_config_onError = (_class_private_field_get_config3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onError) === null || _class_private_field_get_config_onError === void 0 ? void 0 : _class_private_field_get_config_onError.call(_class_private_field_get_config3, error, variables, this.state.context, this));
                await ((_this_options_onError = (_this_options3 = this.options).onError) === null || _this_options_onError === void 0 ? void 0 : _this_options_onError.call(_this_options3, error, variables, this.state.context));
                await ((_class_private_field_get_config_onSettled1 = (_class_private_field_get_config4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSettled) === null || _class_private_field_get_config_onSettled1 === void 0 ? void 0 : _class_private_field_get_config_onSettled1.call(_class_private_field_get_config4, void 0, error, this.state.variables, this.state.context, this));
                await ((_this_options_onSettled1 = (_this_options4 = this.options).onSettled) === null || _this_options_onSettled1 === void 0 ? void 0 : _this_options_onSettled1.call(_this_options4, void 0, error, variables, this.state.context));
                throw error;
            } finally{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "error",
                    error
                });
            }
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).runNext(this);
        }
    }
    constructor(config){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, {
            writable: true,
            value: void 0
        });
        this.mutationId = config.mutationId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, config.mutationCache);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, []);
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
}, _class);
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
function dispatch(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    failureCount: action.failureCount,
                    failureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    isPaused: true
                };
            case "continue":
                return {
                    ...state,
                    isPaused: false
                };
            case "pending":
                return {
                    ...state,
                    context: action.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: action.isPaused,
                    status: "pending",
                    variables: action.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...state,
                    data: action.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: false
                };
            case "error":
                return {
                    ...state,
                    data: void 0,
                    error: action.error,
                    failureCount: state.failureCount + 1,
                    failureReason: action.error,
                    isPaused: false,
                    status: "error"
                };
        }
    };
    this.state = reducer(this.state);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).forEach((observer)=>{
            observer.onMutationUpdate(action);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
            mutation: this,
            type: "updated",
            action
        });
    });
}
 //# sourceMappingURL=mutation.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
;
;
var _mutations, _scopes, _mutationId;
;
;
;
;
var MutationCache = (_mutations = /*#__PURE__*/ new WeakMap(), _scopes = /*#__PURE__*/ new WeakMap(), _mutationId = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mutation"]({
            mutationCache: this,
            mutationId: ++(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId).value,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
            const firstPendingMutation = mutationsWithSameScope === null || mutationsWithSameScope === void 0 ? void 0 : mutationsWithSameScope.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            var _class_private_field_get_get;
            const foundMutation = (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.find((m)=>m !== mutation && m.state.isPaused);
            var _foundMutation_continue;
            return (_foundMutation_continue = foundMutation === null || foundMutation === void 0 ? void 0 : foundMutation.continue()) !== null && _foundMutation_continue !== void 0 ? _foundMutation_continue : Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).clear();
        });
    }
    getAll() {
        return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations));
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll() {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]))));
    }
    constructor(config = {}){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId, {
            writable: true,
            value: void 0
        });
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations, /* @__PURE__ */ new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId, 0);
    }
});
function scopeFor(mutation) {
    var _mutation_options_scope;
    return (_mutation_options_scope = mutation.options.scope) === null || _mutation_options_scope === void 0 ? void 0 : _mutation_options_scope.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            var _context_fetchOptions_meta_fetchMore, _context_fetchOptions_meta, _context_fetchOptions, _context_state_data, _context_state_data1;
            const options = context.options;
            const direction = (_context_fetchOptions = context.fetchOptions) === null || _context_fetchOptions === void 0 ? void 0 : (_context_fetchOptions_meta = _context_fetchOptions.meta) === null || _context_fetchOptions_meta === void 0 ? void 0 : (_context_fetchOptions_meta_fetchMore = _context_fetchOptions_meta.fetchMore) === null || _context_fetchOptions_meta_fetchMore === void 0 ? void 0 : _context_fetchOptions_meta_fetchMore.direction;
            const oldPages = ((_context_state_data = context.state.data) === null || _context_state_data === void 0 ? void 0 : _context_state_data.pages) || [];
            const oldPageParams = ((_context_state_data1 = context.state.data) === null || _context_state_data1 === void 0 ? void 0 : _context_state_data1.pageParams) || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages !== null && pages !== void 0 ? pages : oldPages.length;
                    do {
                        var _oldPageParams_;
                        const param = currentPage === 0 ? (_oldPageParams_ = oldPageParams[0]) !== null && _oldPageParams_ !== void 0 ? _oldPageParams_ : options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    var _context_options_persister, _context_options;
                    return (_context_options_persister = (_context_options = context.options).persister) === null || _context_options_persister === void 0 ? void 0 : _context_options_persister.call(_context_options, fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, param) {
    let { pages, pageParams } = param;
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, param) {
    let { pages, pageParams } = param;
    var _options_getPreviousPageParam;
    return pages.length > 0 ? (_options_getPreviousPageParam = options.getPreviousPageParam) === null || _options_getPreviousPageParam === void 0 ? void 0 : _options_getPreviousPageParam.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)");
;
;
;
;
var _queryCache, _mutationCache, _defaultOptions, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline;
;
;
;
;
;
;
;
var QueryClient = (_queryCache = /*#__PURE__*/ new WeakMap(), _mutationCache = /*#__PURE__*/ new WeakMap(), _defaultOptions = /*#__PURE__*/ new WeakMap(), _queryDefaults = /*#__PURE__*/ new WeakMap(), _mutationDefaults = /*#__PURE__*/ new WeakMap(), _mountCount = /*#__PURE__*/ new WeakMap(), _unsubscribeFocus = /*#__PURE__*/ new WeakMap(), _unsubscribeOnline = /*#__PURE__*/ new WeakMap(), class {
    mount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount).value++;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount) !== 1) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).onFocus();
            }
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).onOnline();
            }
        }));
    }
    unmount() {
        var _this, _this1, _ref, _this2, _this3, _ref1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount).value--;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount) !== 0) return;
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _unsubscribeFocus)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, void 0);
        (_this2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref1 = _this3 = this, _unsubscribeOnline)) === null || _this2 === void 0 ? void 0 : _this2.call(_this3);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, void 0);
    }
    isFetching(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        var _class_private_field_get_get;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(options.queryHash)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((param)=>{
            let { queryKey, state } = param;
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(defaultedOptions.queryHash);
        const prevData = query === null || query === void 0 ? void 0 : query.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((param)=>{
                let { queryKey } = param;
                return [
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ];
            }));
    }
    getQueryState(queryKey) {
        var _class_private_field_get_get;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(options.queryHash)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.state;
    }
    removeQueries(filters) {
        const queryCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters) {
        let cancelOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if ((filters === null || filters === void 0 ? void 0 : filters.refetchType) === "none") {
                return Promise.resolve();
            }
            var _filters_refetchType, _ref;
            return this.refetchQueries({
                ...filters,
                type: (_ref = (_filters_refetchType = filters === null || filters === void 0 ? void 0 : filters.refetchType) !== null && _filters_refetchType !== void 0 ? _filters_refetchType : filters === null || filters === void 0 ? void 0 : filters.type) !== null && _ref !== void 0 ? _ref : "active"
            }, options);
        });
    }
    refetchQueries(filters) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _options_cancelRefetch;
        const fetchOptions = {
            ...options,
            cancelRefetch: (_options_cancelRefetch = options.cancelRefetch) !== null && _options_cancelRefetch !== void 0 ? _options_cancelRefetch : true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
    }
    getMutationCache() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache);
    }
    getDefaultOptions() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions);
    }
    setDefaultOptions(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, options);
    }
    setQueryDefaults(queryKey, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults).set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults).set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions).queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options === null || options === void 0 ? void 0 : options._defaulted) {
            return options;
        }
        return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions).mutations,
            ...(options === null || options === void 0 ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).clear();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).clear();
    }
    constructor(config = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache, config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryCache"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationCache"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, config.defaultOptions || {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount, 0);
    }
});
;
 //# sourceMappingURL=queryClient.js.map
}),
"[project]/apps/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = (param)=>{
    let { client, children } = param;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "QueryClientProvider.useEffect": ()=>{
            client.mount();
            return ({
                "QueryClientProvider.useEffect": ()=>{
                    client.unmount();
                }
            })["QueryClientProvider.useEffect"];
        }
    }["QueryClientProvider.useEffect"], [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/apps/client/node_modules/@tanstack/query-devtools/build/chunk/CXOMC62J.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ../../node_modules/.pnpm/solid-js@1.9.7/node_modules/solid-js/dist/solid.js
__turbopack_context__.s([
    "$TRACK",
    ()=>$TRACK,
    "DEV",
    ()=>DEV,
    "Dynamic",
    ()=>Dynamic,
    "For",
    ()=>For,
    "Index",
    ()=>Index,
    "Match",
    ()=>Match,
    "Portal",
    ()=>Portal,
    "Show",
    ()=>Show,
    "Switch",
    ()=>Switch,
    "addEventListener",
    ()=>addEventListener,
    "batch",
    ()=>batch,
    "className",
    ()=>className,
    "clearDelegatedEvents",
    ()=>clearDelegatedEvents,
    "convertRemToPixels",
    ()=>convertRemToPixels,
    "createComponent",
    ()=>createComponent,
    "createComputed",
    ()=>createComputed,
    "createContext",
    ()=>createContext,
    "createEffect",
    ()=>createEffect,
    "createMemo",
    ()=>createMemo,
    "createRenderEffect",
    ()=>createRenderEffect,
    "createRoot",
    ()=>createRoot,
    "createSignal",
    ()=>createSignal,
    "createUniqueId",
    ()=>createUniqueId,
    "delegateEvents",
    ()=>delegateEvents,
    "deleteNestedDataByPath",
    ()=>deleteNestedDataByPath,
    "displayValue",
    ()=>displayValue,
    "getMutationStatusColor",
    ()=>getMutationStatusColor,
    "getOwner",
    ()=>getOwner,
    "getPreferredColorScheme",
    ()=>getPreferredColorScheme,
    "getQueryStatusColor",
    ()=>getQueryStatusColor,
    "getQueryStatusColorByLabel",
    ()=>getQueryStatusColorByLabel,
    "getQueryStatusLabel",
    ()=>getQueryStatusLabel,
    "getSidedProp",
    ()=>getSidedProp,
    "insert",
    ()=>insert,
    "isServer",
    ()=>isServer,
    "lazy",
    ()=>lazy,
    "memo",
    ()=>memo,
    "mergeProps",
    ()=>mergeProps,
    "mutationSortFns",
    ()=>mutationSortFns,
    "on",
    ()=>on,
    "onCleanup",
    ()=>onCleanup,
    "onMount",
    ()=>onMount,
    "render",
    ()=>render,
    "serialize",
    ()=>serialize,
    "setAttribute",
    ()=>setAttribute,
    "setupStyleSheet",
    ()=>setupStyleSheet,
    "sortFns",
    ()=>sortFns,
    "splitProps",
    ()=>splitProps,
    "spread",
    ()=>spread,
    "stringify",
    ()=>stringify,
    "template",
    ()=>template,
    "untrack",
    ()=>untrack,
    "updateNestedDataByPath",
    ()=>updateNestedDataByPath,
    "use",
    ()=>use,
    "useContext",
    ()=>useContext,
    "useTransition",
    ()=>useTransition
]);
var sharedConfig = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: false,
    getContextId () {
        return getContextId(this.context.count);
    },
    getNextContextId () {
        return getContextId(this.context.count++);
    }
};
function getContextId(count) {
    const num = String(count), len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
    sharedConfig.context = context;
}
function nextHydrateContext() {
    return {
        ...sharedConfig.context,
        id: sharedConfig.getNextContextId(),
        count: 0
    };
}
var IS_DEV = false;
var equalFn = (a, b)=>a === b;
var $PROXY = Symbol("solid-proxy");
var SUPPORTS_PROXY = typeof Proxy === "function";
var $TRACK = Symbol("solid-track");
var signalOptions = {
    equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};
var NO_INIT = {};
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceConfig = null;
var Listener = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
    }, updateFn = unowned ? fn : ()=>fn(()=>untrack(()=>cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
        return runUpdates(updateFn, true);
    } finally{
        Listener = listener;
        Owner = owner;
    }
}
function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
        value,
        observers: null,
        observerSlots: null,
        comparator: options.equals || void 0
    };
    const setter = (value2)=>{
        if (typeof value2 === "function") {
            if (Transition && Transition.running && Transition.sources.has(s)) value2 = value2(s.tValue);
            else value2 = value2(s.value);
        }
        return writeSignal(s, value2);
    };
    return [
        readSignal.bind(s),
        setter
    ];
}
function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else updateComputation(c);
}
function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else updateComputation(c);
}
function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
    if (s) c.suspense = s;
    if (!options || !options.render) c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || void 0;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else updateComputation(c);
    return readSignal.bind(c);
}
function isPromise(v) {
    return v && typeof v === "object" && "then" in v;
}
function createResource(pSource, pFetcher, pOptions) {
    let source;
    let fetcher;
    let options;
    {
        source = true;
        fetcher = pSource;
        options = {};
    }
    let pr = null, initP = NO_INIT, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
        equals: false
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    if (sharedConfig.context) {
        id = sharedConfig.getNextContextId();
        if (options.ssrLoadFrom === "initial") initP = options.initialValue;
        else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
    }
    function loadEnd(p, v, error2, key) {
        if (pr === p) {
            pr = null;
            key !== void 0 && (resolved = true);
            if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(()=>options.onHydrated(key, {
                    value: v
                }));
            initP = NO_INIT;
            if (Transition && p && loadedUnderTransition) {
                Transition.promises.delete(p);
                loadedUnderTransition = false;
                runUpdates(()=>{
                    Transition.running = true;
                    completeLoad(v, error2);
                }, false);
            } else completeLoad(v, error2);
        }
        return v;
    }
    function completeLoad(v, err) {
        runUpdates(()=>{
            if (err === void 0) setValue(()=>v);
            setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
            setError(err);
            for (const c of contexts.keys())c.decrement();
            contexts.clear();
        }, false);
    }
    function read() {
        const c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
        if (err !== void 0 && !pr) throw err;
        if (Listener && !Listener.user && c) {
            createComputed(()=>{
                track();
                if (pr) {
                    if (c.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr);
                    else if (!contexts.has(c)) {
                        c.increment();
                        contexts.add(c);
                    }
                }
            });
        }
        return v;
    }
    function load() {
        let refetching = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (refetching !== false && scheduled) return;
        scheduled = false;
        const lookup = dynamic ? dynamic() : source;
        loadedUnderTransition = Transition && Transition.running;
        if (lookup == null || lookup === false) {
            loadEnd(pr, untrack(value));
            return;
        }
        if (Transition && pr) Transition.promises.delete(pr);
        let error2;
        const p = initP !== NO_INIT ? initP : untrack(()=>{
            try {
                return fetcher(lookup, {
                    value: value(),
                    refetching
                });
            } catch (fetcherError) {
                error2 = fetcherError;
            }
        });
        if (error2 !== void 0) {
            loadEnd(pr, void 0, castError(error2), lookup);
            return;
        } else if (!isPromise(p)) {
            loadEnd(pr, p, void 0, lookup);
            return p;
        }
        pr = p;
        if ("v" in p) {
            if (p.s === 1) loadEnd(pr, p.v, void 0, lookup);
            else loadEnd(pr, void 0, castError(p.v), lookup);
            return p;
        }
        scheduled = true;
        queueMicrotask(()=>scheduled = false);
        runUpdates(()=>{
            setState(resolved ? "refreshing" : "pending");
            trigger();
        }, false);
        return p.then((v)=>loadEnd(p, v, void 0, lookup), (e)=>loadEnd(p, void 0, castError(e), lookup));
    }
    Object.defineProperties(read, {
        state: {
            get: ()=>state()
        },
        error: {
            get: ()=>error()
        },
        loading: {
            get () {
                const s = state();
                return s === "pending" || s === "refreshing";
            }
        },
        latest: {
            get () {
                if (!resolved) return read();
                const err = error();
                if (err && !pr) throw err;
                return value();
            }
        }
    });
    let owner = Owner;
    if (dynamic) createComputed(()=>(owner = Owner, load(false)));
    else load(false);
    return [
        read,
        {
            refetch: (info)=>runWithOwner(owner, ()=>load(info)),
            mutate: setValue
        }
    ];
}
function batch(fn) {
    return runUpdates(fn, false);
}
function untrack(fn) {
    if (!ExternalSourceConfig && Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return fn();
    } finally{
        Listener = listener;
    }
}
function on(deps, fn, options) {
    const isArray3 = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return (prevValue)=>{
        let input;
        if (isArray3) {
            input = Array(deps.length);
            for(let i = 0; i < deps.length; i++)input[i] = deps[i]();
        } else input = deps();
        if (defer) {
            defer = false;
            return prevValue;
        }
        const result = untrack(()=>fn(input, prevInput, prevValue));
        prevInput = input;
        return result;
    };
}
function onMount(fn) {
    createEffect(()=>untrack(fn));
}
function onCleanup(fn) {
    if (Owner === null) ;
    else if (Owner.cleanups === null) Owner.cleanups = [
        fn
    ];
    else Owner.cleanups.push(fn);
    return fn;
}
function getOwner() {
    return Owner;
}
function runWithOwner(o, fn) {
    const prev = Owner;
    const prevListener = Listener;
    Owner = o;
    Listener = null;
    try {
        return runUpdates(fn, true);
    } catch (err) {
        handleError(err);
    } finally{
        Owner = prev;
        Listener = prevListener;
    }
}
function startTransition(fn) {
    if (Transition && Transition.running) {
        fn();
        return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(()=>{
        Listener = l;
        Owner = o;
        let t;
        if (Scheduler || SuspenseContext) {
            t = Transition || (Transition = {
                sources: /* @__PURE__ */ new Set(),
                effects: [],
                promises: /* @__PURE__ */ new Set(),
                disposed: /* @__PURE__ */ new Set(),
                queue: /* @__PURE__ */ new Set(),
                running: true
            });
            t.done || (t.done = new Promise((res)=>t.resolve = res));
            t.running = true;
        }
        runUpdates(fn, false);
        Listener = Owner = null;
        return t ? t.done : void 0;
    });
}
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
function useTransition() {
    return [
        transPending,
        startTransition
    ];
}
function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
        id,
        Provider: createProvider(id),
        defaultValue
    };
}
function useContext(context) {
    let value;
    return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}
function children(fn) {
    const children2 = createMemo(fn);
    const memo2 = createMemo(()=>resolveChildren(children2()));
    memo2.toArray = ()=>{
        const c = memo2();
        return Array.isArray(c) ? c : c != null ? [
            c
        ] : [];
    };
    return memo2;
}
var SuspenseContext;
function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) {
        if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
        else {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(this), false);
            Updates = updates;
        }
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        if (!Listener.sources) {
            Listener.sources = [
                this
            ];
            Listener.sourceSlots = [
                sSlot
            ];
        } else {
            Listener.sources.push(this);
            Listener.sourceSlots.push(sSlot);
        }
        if (!this.observers) {
            this.observers = [
                Listener
            ];
            this.observerSlots = [
                Listener.sources.length - 1
            ];
        } else {
            this.observers.push(Listener);
            this.observerSlots.push(Listener.sources.length - 1);
        }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
}
function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
        if (Transition) {
            const TransitionRunning = Transition.running;
            if (TransitionRunning || !isComp && Transition.sources.has(node)) {
                Transition.sources.add(node);
                node.tValue = value;
            }
            if (!TransitionRunning) node.value = value;
        } else node.value = value;
        if (node.observers && node.observers.length) {
            runUpdates(()=>{
                for(let i = 0; i < node.observers.length; i += 1){
                    const o = node.observers[i];
                    const TransitionRunning = Transition && Transition.running;
                    if (TransitionRunning && Transition.disposed.has(o)) continue;
                    if (TransitionRunning ? !o.tState : !o.state) {
                        if (o.pure) Updates.push(o);
                        else Effects.push(o);
                        if (o.observers) markDownstream(o);
                    }
                    if (!TransitionRunning) o.state = STALE;
                    else o.tState = STALE;
                }
                if (Updates.length > 1e6) {
                    Updates = [];
                    if (IS_DEV) ;
                    throw new Error();
                }
            }, false);
        }
    }
    return value;
}
function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
    if (Transition && !Transition.running && Transition.sources.has(node)) {
        queueMicrotask(()=>{
            runUpdates(()=>{
                Transition && (Transition.running = true);
                Listener = Owner = node;
                runComputation(node, node.tValue, time);
                Listener = Owner = null;
            }, false);
        });
    }
}
function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        if (node.pure) {
            if (Transition && Transition.running) {
                node.tState = STALE;
                node.tOwned && node.tOwned.forEach(cleanNode);
                node.tOwned = void 0;
            } else {
                node.state = STALE;
                node.owned && node.owned.forEach(cleanNode);
                node.owned = null;
            }
        }
        node.updatedAt = time + 1;
        return handleError(err);
    } finally{
        Listener = listener;
        Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
        if (node.updatedAt != null && "observers" in node) {
            writeSignal(node, nextValue, true);
        } else if (Transition && Transition.running && node.pure) {
            Transition.sources.add(node);
            node.tValue = nextValue;
        } else node.value = nextValue;
        node.updatedAt = time;
    }
}
function createComputation(fn, init, pure) {
    let state = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : STALE, options = arguments.length > 4 ? arguments[4] : void 0;
    const c = {
        fn,
        state,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: init,
        owner: Owner,
        context: Owner ? Owner.context : null,
        pure
    };
    if (Transition && Transition.running) {
        c.state = 0;
        c.tState = state;
    }
    if (Owner === null) ;
    else if (Owner !== UNOWNED) {
        if (Transition && Transition.running && Owner.pure) {
            if (!Owner.tOwned) Owner.tOwned = [
                c
            ];
            else Owner.tOwned.push(c);
        } else {
            if (!Owner.owned) Owner.owned = [
                c
            ];
            else Owner.owned.push(c);
        }
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return c;
}
function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0) return;
    if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [
        node
    ];
    while((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)){
        if (runningTransition && Transition.disposed.has(node)) return;
        if (runningTransition ? node.tState : node.state) ancestors.push(node);
    }
    for(let i = ancestors.length - 1; i >= 0; i--){
        node = ancestors[i];
        if (runningTransition) {
            let top = node, prev = ancestors[i + 1];
            while((top = top.owner) && top !== prev){
                if (Transition.disposed.has(top)) return;
            }
        }
        if ((runningTransition ? node.tState : node.state) === STALE) {
            updateComputation(node);
        } else if ((runningTransition ? node.tState : node.state) === PENDING) {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(node, ancestors[0]), false);
            Updates = updates;
        }
    }
}
function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
        const res = fn();
        completeUpdates(wait);
        return res;
    } catch (err) {
        if (!wait) Effects = null;
        Updates = null;
        handleError(err);
    }
}
function completeUpdates(wait) {
    if (Updates) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else runQueue(Updates);
        Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition) {
        if (!Transition.promises.size && !Transition.queue.size) {
            const sources = Transition.sources;
            const disposed = Transition.disposed;
            Effects.push.apply(Effects, Transition.effects);
            res = Transition.resolve;
            for (const e2 of Effects){
                "tState" in e2 && (e2.state = e2.tState);
                delete e2.tState;
            }
            Transition = null;
            runUpdates(()=>{
                for (const d of disposed)cleanNode(d);
                for (const v of sources){
                    v.value = v.tValue;
                    if (v.owned) {
                        for(let i = 0, len = v.owned.length; i < len; i++)cleanNode(v.owned[i]);
                    }
                    if (v.tOwned) v.owned = v.tOwned;
                    delete v.tValue;
                    delete v.tOwned;
                    v.tState = 0;
                }
                setTransPending(false);
            }, false);
        } else if (Transition.running) {
            Transition.running = false;
            Transition.effects.push.apply(Transition.effects, Effects);
            Effects = null;
            setTransPending(true);
            return;
        }
    }
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(()=>runEffects(e), false);
    if (res) res();
}
function runQueue(queue) {
    for(let i = 0; i < queue.length; i++)runTop(queue[i]);
}
function scheduleQueue(queue) {
    for(let i = 0; i < queue.length; i++){
        const item = queue[i];
        const tasks = Transition.queue;
        if (!tasks.has(item)) {
            tasks.add(item);
            Scheduler(()=>{
                tasks.delete(item);
                runUpdates(()=>{
                    Transition.running = true;
                    runTop(item);
                }, false);
                Transition && (Transition.running = false);
            });
        }
    }
}
function runUserEffects(queue) {
    let i, userLength = 0;
    for(i = 0; i < queue.length; i++){
        const e = queue[i];
        if (!e.user) runTop(e);
        else queue[userLength++] = e;
    }
    if (sharedConfig.context) {
        if (sharedConfig.count) {
            sharedConfig.effects || (sharedConfig.effects = []);
            sharedConfig.effects.push(...queue.slice(0, userLength));
            return;
        }
        setHydrateContext();
    }
    if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
        queue = [
            ...sharedConfig.effects,
            ...queue
        ];
        userLength += sharedConfig.effects.length;
        delete sharedConfig.effects;
    }
    for(i = 0; i < userLength; i++)runTop(queue[i]);
}
function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0;
    else node.state = 0;
    for(let i = 0; i < node.sources.length; i += 1){
        const source = node.sources[i];
        if (source.sources) {
            const state = runningTransition ? source.tState : source.state;
            if (state === STALE) {
                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
            } else if (state === PENDING) lookUpstream(source, ignore);
        }
    }
}
function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for(let i = 0; i < node.observers.length; i += 1){
        const o = node.observers[i];
        if (runningTransition ? !o.tState : !o.state) {
            if (runningTransition) o.tState = PENDING;
            else o.state = PENDING;
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            o.observers && markDownstream(o);
        }
    }
}
function cleanNode(node) {
    let i;
    if (node.sources) {
        while(node.sources.length){
            const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
            if (obs && obs.length) {
                const n = obs.pop(), s = source.observerSlots.pop();
                if (index < obs.length) {
                    n.sourceSlots[s] = index;
                    obs[index] = n;
                    source.observerSlots[index] = s;
                }
            }
        }
    }
    if (node.tOwned) {
        for(i = node.tOwned.length - 1; i >= 0; i--)cleanNode(node.tOwned[i]);
        delete node.tOwned;
    }
    if (Transition && Transition.running && node.pure) {
        reset(node, true);
    } else if (node.owned) {
        for(i = node.owned.length - 1; i >= 0; i--)cleanNode(node.owned[i]);
        node.owned = null;
    }
    if (node.cleanups) {
        for(i = node.cleanups.length - 1; i >= 0; i--)node.cleanups[i]();
        node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0;
    else node.state = 0;
}
function reset(node, top) {
    if (!top) {
        node.tState = 0;
        Transition.disposed.add(node);
    }
    if (node.owned) {
        for(let i = 0; i < node.owned.length; i++)reset(node.owned[i]);
    }
}
function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
        cause: err
    });
}
function runErrors(err, fns, owner) {
    try {
        for (const f of fns)f(err);
    } catch (e) {
        handleError(e, owner && owner.owner || null);
    }
}
function handleError(err) {
    let owner = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Owner;
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns) throw error;
    if (Effects) Effects.push({
        fn () {
            runErrors(error, fns, owner);
        },
        state: STALE
    });
    else runErrors(error, fns, owner);
}
function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
    if (Array.isArray(children2)) {
        const results = [];
        for(let i = 0; i < children2.length; i++){
            const result = resolveChildren(children2[i]);
            Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
        }
        return results;
    }
    return children2;
}
function createProvider(id, options) {
    return function provider(props) {
        let res;
        createRenderEffect(()=>res = untrack(()=>{
                Owner.context = {
                    ...Owner.context,
                    [id]: props.value
                };
                return children(()=>props.children);
            }), void 0);
        return res;
    };
}
var FALLBACK = Symbol("fallback");
function dispose(d) {
    for(let i = 0; i < d.length; i++)d[i]();
}
function mapArray(list, mapFn) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        let newItems = list() || [], newLen = newItems.length, i, j;
        newItems[$TRACK];
        return untrack(()=>{
            let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    indexes && (indexes = []);
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for(j = 0; j < newLen; j++){
                    items[j] = newItems[j];
                    mapped[j] = createRoot(mapper);
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for(start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for(end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--){
                    temp[newEnd] = mapped[end];
                    tempdisposers[newEnd] = disposers[end];
                    indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = /* @__PURE__ */ new Map();
                newIndicesNext = new Array(newEnd + 1);
                for(j = newEnd; j >= start; j--){
                    item = newItems[j];
                    i = newIndices.get(item);
                    newIndicesNext[j] = i === void 0 ? -1 : i;
                    newIndices.set(item, j);
                }
                for(i = start; i <= end; i++){
                    item = items[i];
                    j = newIndices.get(item);
                    if (j !== void 0 && j !== -1) {
                        temp[j] = mapped[i];
                        tempdisposers[j] = disposers[i];
                        indexes && (tempIndexes[j] = indexes[i]);
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else disposers[i]();
                }
                for(j = start; j < newLen; j++){
                    if (j in temp) {
                        mapped[j] = temp[j];
                        disposers[j] = tempdisposers[j];
                        if (indexes) {
                            indexes[j] = tempIndexes[j];
                            indexes[j](j);
                        }
                    } else mapped[j] = createRoot(mapper);
                }
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
            }
            return mapped;
        });
        //TURBOPACK unreachable
        ;
        function mapper(disposer) {
            disposers[j] = disposer;
            if (indexes) {
                const [s, set] = createSignal(j);
                indexes[j] = set;
                return mapFn(newItems[j], s);
            }
            return mapFn(newItems[j]);
        }
    };
}
function indexArray(list, mapFn) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let items = [], mapped = [], disposers = [], signals = [], len = 0, i;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        const newItems = list() || [], newLen = newItems.length;
        newItems[$TRACK];
        return untrack(()=>{
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    signals = [];
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
                return mapped;
            }
            if (items[0] === FALLBACK) {
                disposers[0]();
                disposers = [];
                items = [];
                mapped = [];
                len = 0;
            }
            for(i = 0; i < newLen; i++){
                if (i < items.length && items[i] !== newItems[i]) {
                    signals[i](()=>newItems[i]);
                } else if (i >= items.length) {
                    mapped[i] = createRoot(mapper);
                }
            }
            for(; i < items.length; i++){
                disposers[i]();
            }
            len = signals.length = disposers.length = newLen;
            items = newItems.slice(0);
            return mapped = mapped.slice(0, len);
        });
        //TURBOPACK unreachable
        ;
        function mapper(disposer) {
            disposers[i] = disposer;
            const [s, set] = createSignal(newItems[i]);
            signals[i] = set;
            return mapFn(s, i);
        }
    };
}
var hydrationEnabled = false;
function createComponent(Comp, props) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return untrack(()=>Comp(props || {}));
}
function trueFn() {
    return true;
}
var propTraps = {
    get (_, property, receiver) {
        if (property === $PROXY) return receiver;
        return _.get(property);
    },
    has (_, property) {
        if (property === $PROXY) return true;
        return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor (_, property) {
        return {
            configurable: true,
            enumerable: true,
            get () {
                return _.get(property);
            },
            set: trueFn,
            deleteProperty: trueFn
        };
    },
    ownKeys (_) {
        return _.keys();
    }
};
function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
    for(let i = 0, length = this.length; i < length; ++i){
        const v = this[i]();
        if (v !== void 0) return v;
    }
}
function mergeProps() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
        sources[_key] = arguments[_key];
    }
    let proxy = false;
    for(let i = 0; i < sources.length; i++){
        const s = sources[i];
        proxy = proxy || !!s && $PROXY in s;
        sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
    }
    if (SUPPORTS_PROXY && proxy) {
        return new Proxy({
            get (property) {
                for(let i = sources.length - 1; i >= 0; i--){
                    const v = resolveSource(sources[i])[property];
                    if (v !== void 0) return v;
                }
            },
            has (property) {
                for(let i = sources.length - 1; i >= 0; i--){
                    if (property in resolveSource(sources[i])) return true;
                }
                return false;
            },
            keys () {
                const keys = [];
                for(let i = 0; i < sources.length; i++)keys.push(...Object.keys(resolveSource(sources[i])));
                return [
                    ...new Set(keys)
                ];
            }
        }, propTraps);
    }
    const sourcesMap = {};
    const defined = /* @__PURE__ */ Object.create(null);
    for(let i = sources.length - 1; i >= 0; i--){
        const source = sources[i];
        if (!source) continue;
        const sourceKeys = Object.getOwnPropertyNames(source);
        for(let i2 = sourceKeys.length - 1; i2 >= 0; i2--){
            const key = sourceKeys[i2];
            if (key === "__proto__" || key === "constructor") continue;
            const desc = Object.getOwnPropertyDescriptor(source, key);
            if (!defined[key]) {
                defined[key] = desc.get ? {
                    enumerable: true,
                    configurable: true,
                    get: resolveSources.bind(sourcesMap[key] = [
                        desc.get.bind(source)
                    ])
                } : desc.value !== void 0 ? desc : void 0;
            } else {
                const sources2 = sourcesMap[key];
                if (sources2) {
                    if (desc.get) sources2.push(desc.get.bind(source));
                    else if (desc.value !== void 0) sources2.push(()=>desc.value);
                }
            }
        }
    }
    const target = {};
    const definedKeys = Object.keys(defined);
    for(let i = definedKeys.length - 1; i >= 0; i--){
        const key = definedKeys[i], desc = defined[key];
        if (desc && desc.get) Object.defineProperty(target, key, desc);
        else target[key] = desc ? desc.value : void 0;
    }
    return target;
}
function splitProps(props) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    if (SUPPORTS_PROXY && $PROXY in props) {
        const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
        const res = keys.map((k)=>{
            return new Proxy({
                get (property) {
                    return k.includes(property) ? props[property] : void 0;
                },
                has (property) {
                    return k.includes(property) && property in props;
                },
                keys () {
                    return k.filter((property)=>property in props);
                }
            }, propTraps);
        });
        res.push(new Proxy({
            get (property) {
                return blocked.has(property) ? void 0 : props[property];
            },
            has (property) {
                return blocked.has(property) ? false : property in props;
            },
            keys () {
                return Object.keys(props).filter((k)=>!blocked.has(k));
            }
        }, propTraps));
        return res;
    }
    const otherObject = {};
    const objects = keys.map(()=>({}));
    for (const propName of Object.getOwnPropertyNames(props)){
        const desc = Object.getOwnPropertyDescriptor(props, propName);
        const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
        let blocked = false;
        let objectIndex = 0;
        for (const k of keys){
            if (k.includes(propName)) {
                blocked = true;
                isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
            }
            ++objectIndex;
        }
        if (!blocked) {
            isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
        }
    }
    return [
        ...objects,
        otherObject
    ];
}
function lazy(fn) {
    let comp;
    let p;
    const wrap = (props)=>{
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            sharedConfig.count || (sharedConfig.count = 0);
            sharedConfig.count++;
            (p || (p = fn())).then((mod)=>{
                !sharedConfig.done && setHydrateContext(ctx);
                sharedConfig.count--;
                set(()=>mod.default);
                setHydrateContext();
            });
            comp = s;
        } else if (!comp) {
            const [s] = createResource(()=>(p || (p = fn())).then((mod)=>mod.default));
            comp = s;
        }
        let Comp;
        return createMemo(()=>(Comp = comp()) ? untrack(()=>{
                if (IS_DEV) ;
                if (!ctx || sharedConfig.done) return Comp(props);
                const c = sharedConfig.context;
                setHydrateContext(ctx);
                const r = Comp(props);
                setHydrateContext(c);
                return r;
            }) : "");
    };
    wrap.preload = ()=>p || ((p = fn()).then((mod)=>comp = ()=>mod.default), p);
    return wrap;
}
var counter = 0;
function createUniqueId() {
    const ctx = sharedConfig.context;
    return ctx ? sharedConfig.getNextContextId() : "cl-".concat(counter++);
}
var narrowedError = (name)=>"Stale read from <".concat(name, ">.");
function For(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(mapArray(()=>props.each, props.children, fallback || void 0));
}
function Index(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(indexArray(()=>props.each, props.children, fallback || void 0));
}
function Show(props) {
    const keyed = props.keyed;
    const conditionValue = createMemo(()=>props.when, void 0, void 0);
    const condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
        equals: (a, b)=>!a === !b
    });
    return createMemo(()=>{
        const c = condition();
        if (c) {
            const child = props.children;
            const fn = typeof child === "function" && child.length > 0;
            return fn ? untrack(()=>child(keyed ? c : ()=>{
                    if (!untrack(condition)) throw narrowedError("Show");
                    return conditionValue();
                })) : child;
        }
        return props.fallback;
    }, void 0, void 0);
}
function Switch(props) {
    const chs = children(()=>props.children);
    const switchFunc = createMemo(()=>{
        const ch = chs();
        const mps = Array.isArray(ch) ? ch : [
            ch
        ];
        let func = ()=>void 0;
        for(let i = 0; i < mps.length; i++){
            const index = i;
            const mp = mps[i];
            const prevFunc = func;
            const conditionValue = createMemo(()=>prevFunc() ? void 0 : mp.when, void 0, void 0);
            const condition = mp.keyed ? conditionValue : createMemo(conditionValue, void 0, {
                equals: (a, b)=>!a === !b
            });
            func = ()=>prevFunc() || (condition() ? [
                    index,
                    conditionValue,
                    mp
                ] : void 0);
        }
        return func;
    });
    return createMemo(()=>{
        const sel = switchFunc()();
        if (!sel) return props.fallback;
        const [index, conditionValue, mp] = sel;
        const child = mp.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(()=>child(mp.keyed ? conditionValue() : ()=>{
                var _untrack;
                if (((_untrack = untrack(switchFunc)()) === null || _untrack === void 0 ? void 0 : _untrack[0]) !== index) throw narrowedError("Match");
                return conditionValue();
            })) : child;
    }, void 0, void 0);
}
function Match(props) {
    return props;
}
var DEV = void 0;
// ../../node_modules/.pnpm/solid-js@1.9.7/node_modules/solid-js/web/dist/web.js
var booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
];
var Properties = /* @__PURE__ */ new Set([
    "className",
    "value",
    "readOnly",
    "noValidate",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
]);
var ChildProperties = /* @__PURE__ */ new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]);
var Aliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
    className: "class",
    htmlFor: "for"
});
var PropAliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
    class: "className",
    novalidate: {
        $: "noValidate",
        FORM: 1
    },
    formnovalidate: {
        $: "formNoValidate",
        BUTTON: 1,
        INPUT: 1
    },
    ismap: {
        $: "isMap",
        IMG: 1
    },
    nomodule: {
        $: "noModule",
        SCRIPT: 1
    },
    playsinline: {
        $: "playsInline",
        VIDEO: 1
    },
    readonly: {
        $: "readOnly",
        INPUT: 1,
        TEXTAREA: 1
    }
});
function getPropAlias(prop, tagName) {
    const a = PropAliases[prop];
    return typeof a === "object" ? a[tagName] ? a["$"] : void 0 : a;
}
var DelegatedEvents = /* @__PURE__ */ new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
]);
var SVGElements = /* @__PURE__ */ new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern"
]);
var SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
};
var memo = (fn)=>createMemo(()=>fn());
function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
    while(aStart < aEnd || bStart < bEnd){
        if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
            continue;
        }
        while(a[aEnd - 1] === b[bEnd - 1]){
            aEnd--;
            bEnd--;
        }
        if (aEnd === aStart) {
            const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
            while(bStart < bEnd)parentNode.insertBefore(b[bStart++], node);
        } else if (bEnd === bStart) {
            while(aStart < aEnd){
                if (!map || !map.has(a[aStart])) a[aStart].remove();
                aStart++;
            }
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            const node = a[--aEnd].nextSibling;
            parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
            parentNode.insertBefore(b[--bEnd], node);
            a[aEnd] = b[bEnd];
        } else {
            if (!map) {
                map = /* @__PURE__ */ new Map();
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            const index = map.get(a[aStart]);
            if (index != null) {
                if (bStart < index && index < bEnd) {
                    let i = aStart, sequence = 1, t;
                    while(++i < aEnd && i < bEnd){
                        if ((t = map.get(a[i])) == null || t !== index + sequence) break;
                        sequence++;
                    }
                    if (sequence > index - bStart) {
                        const node = a[aStart];
                        while(bStart < index)parentNode.insertBefore(b[bStart++], node);
                    } else parentNode.replaceChild(b[bStart++], a[aStart++]);
                } else aStart++;
            } else a[aStart++].remove();
        }
    }
}
var $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    let disposer;
    createRoot((dispose2)=>{
        disposer = dispose2;
        element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
    }, options.owner);
    return ()=>{
        disposer();
        element.textContent = "";
    };
}
function template(html, isImportNode, isSVG, isMathML) {
    let node;
    const create = ()=>{
        const t = isMathML ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
        t.innerHTML = html;
        return isSVG ? t.content.firstChild.firstChild : isMathML ? t.firstChild : t.content.firstChild;
    };
    const fn = isImportNode ? ()=>untrack(()=>document.importNode(node || (node = create()), true)) : ()=>(node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
}
function delegateEvents(eventNames) {
    let document2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.document;
    const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
    for(let i = 0, l = eventNames.length; i < l; i++){
        const name = eventNames[i];
        if (!e.has(name)) {
            e.add(name);
            document2.addEventListener(name, eventHandler);
        }
    }
}
function clearDelegatedEvents() {
    let document2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.document;
    if (document2[$$EVENTS]) {
        for (let name of document2[$$EVENTS].keys())document2.removeEventListener(name, eventHandler);
        delete document2[$$EVENTS];
    }
}
function setAttribute(node, name, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttributeNS(namespace, name);
    else node.setAttributeNS(namespace, name, value);
}
function setBoolAttribute(node, name, value) {
    if (isHydrating(node)) return;
    value ? node.setAttribute(name, "") : node.removeAttribute(name);
}
function className(node, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute("class");
    else node.className = value;
}
function addEventListener(node, name, handler, delegate) {
    if (delegate) {
        if (Array.isArray(handler)) {
            node["$$".concat(name)] = handler[0];
            node["$$".concat(name, "Data")] = handler[1];
        } else node["$$".concat(name)] = handler;
    } else if (Array.isArray(handler)) {
        const handlerFn = handler[0];
        node.addEventListener(name, handler[0] = (e)=>handlerFn.call(node, handler[1], e));
    } else node.addEventListener(name, handler, typeof handler !== "function" && handler);
}
function classList(node, value) {
    let prev = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
    let i, len;
    for(i = 0, len = prevKeys.length; i < len; i++){
        const key = prevKeys[i];
        if (!key || key === "undefined" || value[key]) continue;
        toggleClassKey(node, key, false);
        delete prev[key];
    }
    for(i = 0, len = classKeys.length; i < len; i++){
        const key = classKeys[i], classValue = !!value[key];
        if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
        toggleClassKey(node, key, true);
        prev[key] = classValue;
    }
    return prev;
}
function style(node, value, prev) {
    if (!value) return prev ? setAttribute(node, "style") : value;
    const nodeStyle = node.style;
    if (typeof value === "string") return nodeStyle.cssText = value;
    typeof prev === "string" && (nodeStyle.cssText = prev = void 0);
    prev || (prev = {});
    value || (value = {});
    let v, s;
    for(s in prev){
        value[s] == null && nodeStyle.removeProperty(s);
        delete prev[s];
    }
    for(s in value){
        v = value[s];
        if (v !== prev[s]) {
            nodeStyle.setProperty(s, v);
            prev[s] = v;
        }
    }
    return prev;
}
function spread(node) {
    let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, isSVG = arguments.length > 2 ? arguments[2] : void 0, skipChildren = arguments.length > 3 ? arguments[3] : void 0;
    const prevProps = {};
    if (!skipChildren) {
        createRenderEffect(()=>prevProps.children = insertExpression(node, props.children, prevProps.children));
    }
    createRenderEffect(()=>typeof props.ref === "function" && use(props.ref, node));
    createRenderEffect(()=>assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
}
function use(fn, element, arg) {
    return untrack(()=>fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current)=>insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren) {
    let prevProps = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, skipRef = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    props || (props = {});
    for(const prop in prevProps){
        if (!(prop in props)) {
            if (prop === "children") continue;
            prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef, props);
        }
    }
    for(const prop in props){
        if (prop === "children") {
            continue;
        }
        const value = props[prop];
        prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef, props);
    }
}
function getNextElement(template2) {
    let node, key, hydrating = isHydrating();
    if (!hydrating || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
        return template2();
    }
    if (sharedConfig.completed) sharedConfig.completed.add(node);
    sharedConfig.registry.delete(key);
    return node;
}
function isHydrating(node) {
    return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
}
function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w)=>w.toUpperCase());
}
function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for(let i = 0, nameLen = classNames.length; i < nameLen; i++)node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef, props) {
    let isCE, isProp, isChildProp, propAlias, forceProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
        if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
        const e = prop.slice(3);
        prev && node.removeEventListener(e, prev, typeof prev !== "function" && prev);
        value && node.addEventListener(e, value, typeof value !== "function" && value);
    } else if (prop.slice(0, 10) === "oncapture:") {
        const e = prop.slice(10);
        prev && node.removeEventListener(e, prev, true);
        value && node.addEventListener(e, value, true);
    } else if (prop.slice(0, 2) === "on") {
        const name = prop.slice(2).toLowerCase();
        const delegate = DelegatedEvents.has(name);
        if (!delegate && prev) {
            const h = Array.isArray(prev) ? prev[0] : prev;
            node.removeEventListener(name, h);
        }
        if (delegate || value) {
            addEventListener(node, name, value, delegate);
            delegate && delegateEvents([
                name
            ]);
        }
    } else if (prop.slice(0, 5) === "attr:") {
        setAttribute(node, prop.slice(5), value);
    } else if (prop.slice(0, 5) === "bool:") {
        setBoolAttribute(node, prop.slice(5), value);
    } else if ((forceProp = prop.slice(0, 5) === "prop:") || (isChildProp = ChildProperties.has(prop)) || !isSVG && ((propAlias = getPropAlias(prop, node.tagName)) || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-") || "is" in props)) {
        if (forceProp) {
            prop = prop.slice(5);
            isProp = true;
        } else if (isHydrating(node)) return value;
        if (prop === "class" || prop === "className") className(node, value);
        else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;
        else node[propAlias || prop] = value;
    } else {
        const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
        if (ns) setAttributeNS(node, ns, prop, value);
        else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
}
function eventHandler(e) {
    if (sharedConfig.registry && sharedConfig.events) {
        if (sharedConfig.events.find((param)=>{
            let [el, ev] = param;
            return ev === e;
        })) return;
    }
    let node = e.target;
    const key = "$$".concat(e.type);
    const oriTarget = e.target;
    const oriCurrentTarget = e.currentTarget;
    const retarget = (value)=>Object.defineProperty(e, "target", {
            configurable: true,
            value
        });
    const handleNode = ()=>{
        const handler = node[key];
        if (handler && !node.disabled) {
            const data = node["".concat(key, "Data")];
            data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
            if (e.cancelBubble) return;
        }
        node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e.target) && retarget(node.host);
        return true;
    };
    const walkUpTree = ()=>{
        while(handleNode() && (node = node._$host || node.parentNode || node.host));
    };
    Object.defineProperty(e, "currentTarget", {
        configurable: true,
        get () {
            return node || document;
        }
    });
    if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
    if (e.composedPath) {
        const path = e.composedPath();
        retarget(path[0]);
        for(let i = 0; i < path.length - 2; i++){
            node = path[i];
            if (!handleNode()) break;
            if (node._$host) {
                node = node._$host;
                walkUpTree();
                break;
            }
            if (node.parentNode === oriCurrentTarget) {
                break;
            }
        }
    } else walkUpTree();
    retarget(oriTarget);
}
function insertExpression(parent, value, current, marker, unwrapArray) {
    const hydrating = isHydrating(parent);
    if (hydrating) {
        !current && (current = [
            ...parent.childNodes
        ]);
        let cleaned = [];
        for(let i = 0; i < current.length; i++){
            const node = current[i];
            if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
            else cleaned.push(node);
        }
        current = cleaned;
    }
    while(typeof current === "function")current = current();
    if (value === current) return current;
    const t = typeof value, multi = marker !== void 0;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
        if (hydrating) return current;
        if (t === "number") {
            value = value.toString();
            if (value === current) return current;
        }
        if (multi) {
            let node = current[0];
            if (node && node.nodeType === 3) {
                node.data !== value && (node.data = value);
            } else node = document.createTextNode(value);
            current = cleanChildren(parent, current, marker, node);
        } else {
            if (current !== "" && typeof current === "string") {
                current = parent.firstChild.data = value;
            } else current = parent.textContent = value;
        }
    } else if (value == null || t === "boolean") {
        if (hydrating) return current;
        current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
        createRenderEffect(()=>{
            let v = value();
            while(typeof v === "function")v = v();
            current = insertExpression(parent, v, current, marker);
        });
        return ()=>current;
    } else if (Array.isArray(value)) {
        const array = [];
        const currentArray = current && Array.isArray(current);
        if (normalizeIncomingArray(array, value, current, unwrapArray)) {
            createRenderEffect(()=>current = insertExpression(parent, array, current, marker, true));
            return ()=>current;
        }
        if (hydrating) {
            if (!array.length) return current;
            if (marker === void 0) return current = [
                ...parent.childNodes
            ];
            let node = array[0];
            if (node.parentNode !== parent) return current;
            const nodes = [
                node
            ];
            while((node = node.nextSibling) !== marker)nodes.push(node);
            return current = nodes;
        }
        if (array.length === 0) {
            current = cleanChildren(parent, current, marker);
            if (multi) return current;
        } else if (currentArray) {
            if (current.length === 0) {
                appendNodes(parent, array, marker);
            } else reconcileArrays(parent, current, array);
        } else {
            current && cleanChildren(parent);
            appendNodes(parent, array);
        }
        current = array;
    } else if (value.nodeType) {
        if (hydrating && value.parentNode) return current = multi ? [
            value
        ] : value;
        if (Array.isArray(current)) {
            if (multi) return current = cleanChildren(parent, current, marker, value);
            cleanChildren(parent, current, null, value);
        } else if (current == null || current === "" || !parent.firstChild) {
            parent.appendChild(value);
        } else parent.replaceChild(value, parent.firstChild);
        current = value;
    } else ;
    return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for(let i = 0, len = array.length; i < len; i++){
        let item = array[i], prev = current && current[normalized.length], t;
        if (item == null || item === true || item === false) ;
        else if ((t = typeof item) === "object" && item.nodeType) {
            normalized.push(item);
        } else if (Array.isArray(item)) {
            dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
        } else if (t === "function") {
            if (unwrap) {
                while(typeof item === "function")item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [
                    item
                ], Array.isArray(prev) ? prev : [
                    prev
                ]) || dynamic;
            } else {
                normalized.push(item);
                dynamic = true;
            }
        } else {
            const value = String(item);
            if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
            else normalized.push(document.createTextNode(value));
        }
    }
    return dynamic;
}
function appendNodes(parent, array) {
    let marker = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    for(let i = 0, len = array.length; i < len; i++)parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
        let inserted = false;
        for(let i = current.length - 1; i >= 0; i--){
            const el = current[i];
            if (node !== el) {
                const isParent = el.parentNode === parent;
                if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
                else isParent && el.remove();
            } else inserted = true;
        }
    } else parent.insertBefore(node, marker);
    return [
        node
    ];
}
function getHydrationKey() {
    return sharedConfig.getNextContextId();
}
var isServer = false;
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName) {
    let isSVG = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
function Portal(props) {
    const { useShadow } = props, marker = document.createTextNode(""), mount = ()=>props.mount || document.body, owner = getOwner();
    let content;
    let hydrating = !!sharedConfig.context;
    createEffect(()=>{
        if (hydrating) getOwner().user = hydrating = false;
        content || (content = runWithOwner(owner, ()=>createMemo(()=>props.children)));
        const el = mount();
        if (el instanceof HTMLHeadElement) {
            const [clean, setClean] = createSignal(false);
            const cleanup = ()=>setClean(true);
            createRoot((dispose2)=>insert(el, ()=>!clean() ? content() : dispose2(), null));
            onCleanup(cleanup);
        } else {
            const container = createElement(props.isSVG ? "g" : "div", props.isSVG), renderRoot = useShadow && container.attachShadow ? container.attachShadow({
                mode: "open"
            }) : container;
            Object.defineProperty(container, "_$host", {
                get () {
                    return marker.parentNode;
                },
                configurable: true
            });
            insert(renderRoot, content);
            el.appendChild(container);
            props.ref && props.ref(container);
            onCleanup(()=>el.removeChild(container));
        }
    }, void 0, {
        render: !hydrating
    });
    return marker;
}
function createDynamic(component, props) {
    const cached = createMemo(component);
    return createMemo(()=>{
        const component2 = cached();
        switch(typeof component2){
            case "function":
                return untrack(()=>component2(props));
            case "string":
                const isSvg = SVGElements.has(component2);
                const el = sharedConfig.context ? getNextElement() : createElement(component2, isSvg);
                spread(el, props, isSvg);
                return el;
        }
    });
}
function Dynamic(props) {
    const [, others] = splitProps(props, [
        "component"
    ]);
    return createDynamic(()=>props.component, others);
}
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/double-indexed-kv.js
var DoubleIndexedKV = class {
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
    constructor(){
        this.keyToValue = /* @__PURE__ */ new Map();
        this.valueToKey = /* @__PURE__ */ new Map();
    }
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/registry.js
var Registry = class {
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new DoubleIndexedKV();
    }
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/class-registry.js
var ClassRegistry = class extends Registry {
    register(value, options) {
        if (typeof options === "object") {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        } else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = /* @__PURE__ */ new Map();
    }
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/util.js
function valuesOfObj(record) {
    if ("values" in Object) {
        return Object.values(record);
    }
    const values = [];
    for(const key in record){
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ("find" in values) {
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for(let i = 0; i < valuesNotNever.length; i++){
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return void 0;
}
function forEach(record, run) {
    Object.entries(record).forEach((param)=>{
        let [key, value] = param;
        return run(value, key);
    });
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for(let i = 0; i < record.length; i++){
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return void 0;
}
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/custom-transformer-registry.js
var CustomTransformerRegistry = class {
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return find(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
    constructor(){
        this.transfomers = {};
    }
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/is.js
var getType = (payload)=>Object.prototype.toString.call(payload).slice(8, -1);
var isUndefined = (payload)=>typeof payload === "undefined";
var isNull = (payload)=>payload === null;
var isPlainObject = (payload)=>{
    if (typeof payload !== "object" || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
var isEmptyObject = (payload)=>isPlainObject(payload) && Object.keys(payload).length === 0;
var isArray = (payload)=>Array.isArray(payload);
var isString = (payload)=>typeof payload === "string";
var isNumber = (payload)=>typeof payload === "number" && !isNaN(payload);
var isBoolean = (payload)=>typeof payload === "boolean";
var isRegExp = (payload)=>payload instanceof RegExp;
var isMap = (payload)=>payload instanceof Map;
var isSet = (payload)=>payload instanceof Set;
var isSymbol = (payload)=>getType(payload) === "Symbol";
var isDate = (payload)=>payload instanceof Date && !isNaN(payload.valueOf());
var isError = (payload)=>payload instanceof Error;
var isNaNValue = (payload)=>typeof payload === "number" && isNaN(payload);
var isPrimitive = (payload)=>isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
var isBigint = (payload)=>typeof payload === "bigint";
var isInfinite = (payload)=>payload === Infinity || payload === -Infinity;
var isTypedArray = (payload)=>ArrayBuffer.isView(payload) && !(payload instanceof DataView);
var isURL = (payload)=>payload instanceof URL;
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/pathstringifier.js
var escapeKey = (key)=>key.replace(/\./g, "\\.");
var stringifyPath = (path)=>path.map(String).map(escapeKey).join(".");
var parsePath = (string)=>{
    const result = [];
    let segment = "";
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
        const isEscapedDot = char === "\\" && string.charAt(i + 1) === ".";
        if (isEscapedDot) {
            segment += ".";
            i++;
            continue;
        }
        const isEndOfSegment = char === ".";
        if (isEndOfSegment) {
            result.push(segment);
            segment = "";
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/transformer.js
function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
var simpleRules = [
    simpleTransformation(isUndefined, "undefined", ()=>null, ()=>void 0),
    simpleTransformation(isBigint, "bigint", (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== "undefined") {
            return BigInt(v);
        }
        console.error("Please add a BigInt polyfill.");
        return v;
    }),
    simpleTransformation(isDate, "Date", (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(isError, "Error", (v, superJson)=>{
        const baseError = {
            name: v.name,
            message: v.message
        };
        superJson.allowedErrorProps.forEach((prop)=>{
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson)=>{
        const e = new Error(v.message);
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach((prop)=>{
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(isRegExp, "regexp", (v)=>"" + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf("/"));
        const flags = regex.slice(regex.lastIndexOf("/") + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(isSet, "set", // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(isMap, "map", (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>isNaNValue(v) || isInfinite(v), "number", (v)=>{
        if (isNaNValue(v)) {
            return "NaN";
        }
        if (v > 0) {
            return "Infinity";
        } else {
            return "-Infinity";
        }
    }, Number),
    simpleTransformation((v)=>v === 0 && 1 / v === -Infinity, "number", ()=>{
        return "-0";
    }, Number),
    simpleTransformation(isURL, "URL", (v)=>v.toString(), (v)=>new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
var symbolRule = compositeTransformation((s, superJson)=>{
    if (isSymbol(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson)=>{
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return [
        "symbol",
        identifier
    ];
}, (v)=>v.description, (_, a, superJson)=>{
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error("Trying to deserialize unknown symbol");
    }
    return value;
});
var constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
].reduce((obj, ctor)=>{
    obj[ctor.name] = ctor;
    return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, (v)=>[
        "typed-array",
        v.constructor.name
    ], (v)=>[
        ...v
    ], (v, a)=>{
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error("Trying to deserialize unknown typed array");
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson)=>{
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return [
        "class",
        identifier
    ];
}, (clazz, superJson)=>{
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return {
            ...clazz
        };
    }
    const result = {};
    allowedProps.forEach((prop)=>{
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson)=>{
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error("Trying to deserialize unknown class '".concat(a[1], "' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"));
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation((value, superJson)=>{
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return [
        "custom",
        transformer.name
    ];
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error("Trying to deserialize unknown custom value");
    }
    return transformer.deserialize(v);
});
var compositeRules = [
    classRule,
    symbolRule,
    customRule,
    typedArrayRule
];
var transformValue = (value, superJson)=>{
    const applicableCompositeRule = findArr(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = findArr(simpleRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation
        };
    }
    return void 0;
};
var simpleRulesByAnnotation = {};
simpleRules.forEach((rule)=>{
    simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = (json, type, superJson)=>{
    if (isArray(type)) {
        switch(type[0]){
            case "symbol":
                return symbolRule.untransform(json, type, superJson);
            case "class":
                return classRule.untransform(json, type, superJson);
            case "custom":
                return customRule.untransform(json, type, superJson);
            case "typed-array":
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error("Unknown transformation: " + type);
        }
    } else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error("Unknown transformation: " + type);
        }
        return transformation.untransform(json, superJson);
    }
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/accessDeep.js
var getNthKey = (value, n)=>{
    if (n > value.size) throw new Error("index out of bounds");
    const keys = value.keys();
    while(n > 0){
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if (includes(path, "__proto__")) {
        throw new Error("__proto__ is not allowed as a property");
    }
    if (includes(path, "prototype")) {
        throw new Error("prototype is not allowed as a property");
    }
    if (includes(path, "constructor")) {
        throw new Error("constructor is not allowed as a property");
    }
}
var getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if (isSet(object)) {
            object = getNthKey(object, +key);
        } else if (isMap(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? "key" : "value";
            const keyOfRow = getNthKey(object, row);
            switch(type){
                case "key":
                    object = keyOfRow;
                    break;
                case "value":
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
};
var setDeep = (object, path, mapper)=>{
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for(let i = 0; i < path.length - 1; i++){
        const key = path[i];
        if (isArray(parent)) {
            const index = +key;
            parent = parent[index];
        } else if (isPlainObject(parent)) {
            parent = parent[key];
        } else if (isSet(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if (isMap(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? "key" : "value";
            const keyOfRow = getNthKey(parent, row);
            switch(type){
                case "key":
                    parent = keyOfRow;
                    break;
                case "value":
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if (isArray(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if (isPlainObject(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if (isSet(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if (isMap(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? "key" : "value";
        switch(type){
            case "key":
                {
                    const newKey = mapper(keyToRow);
                    parent.set(newKey, parent.get(keyToRow));
                    if (newKey !== keyToRow) {
                        parent.delete(keyToRow);
                    }
                    break;
                }
            case "value":
                {
                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                    break;
                }
        }
    }
    return object;
};
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/plainer.js
function traverse(tree, walker2) {
    let origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (!tree) {
        return;
    }
    if (!isArray(tree)) {
        forEach(tree, (subtree, key)=>traverse(subtree, walker2, [
                ...origin,
                ...parsePath(key)
            ]));
        return;
    }
    const [nodeValue, children2] = tree;
    if (children2) {
        forEach(children2, (child, key)=>{
            traverse(child, walker2, [
                ...origin,
                ...parsePath(key)
            ]);
        });
    }
    walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path)=>{
        plain = setDeep(plain, path, (v)=>untransformValue(v, type, superJson));
    });
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
        const object = getDeep(plain, parsePath(path));
        identicalPaths.map(parsePath).forEach((identicalObjectPath)=>{
            plain = setDeep(plain, identicalObjectPath, ()=>object);
        });
    }
    if (isArray(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = setDeep(plain, parsePath(identicalPath), ()=>plain);
        });
        if (other) {
            forEach(other, apply);
        }
    } else {
        forEach(annotations, apply);
    }
    return plain;
}
var isDeep = (object, superJson)=>isPlainObject(object) || isArray(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [
            path
        ]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = void 0;
    identitites.forEach((paths)=>{
        if (paths.length <= 1) {
            return;
        }
        if (!dedupe) {
            paths = paths.map((path)=>path.map(String)).sort((a, b)=>a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(stringifyPath);
        } else {
            result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
        }
    });
    if (rootEqualityPaths) {
        if (isEmptyObject(result)) {
            return [
                rootEqualityPaths
            ];
        } else {
            return [
                rootEqualityPaths,
                result
            ];
        }
    } else {
        return isEmptyObject(result) ? void 0 : result;
    }
}
var walker = function(object, identities, superJson, dedupe) {
    let path = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], objectsInThisPath = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], seenObjects = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : /* @__PURE__ */ new Map();
    const primitive = isPrimitive(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            return dedupe ? {
                transformedValue: null
            } : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed2 = transformValue(object, superJson);
        const result2 = transformed2 ? {
            transformedValue: transformed2.value,
            annotations: [
                transformed2.type
            ]
        } : {
            transformedValue: object
        };
        if (!primitive) {
            seenObjects.set(object, result2);
        }
        return result2;
    }
    if (includes(objectsInThisPath, object)) {
        return {
            transformedValue: null
        };
    }
    const transformationResult = transformValue(object, superJson);
    var _transformationResult_value;
    const transformed = (_transformationResult_value = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _transformationResult_value !== void 0 ? _transformationResult_value : object;
    const transformedValue = isArray(transformed) ? [] : {};
    const innerAnnotations = {};
    forEach(transformed, (value, index)=>{
        if (index === "__proto__" || index === "constructor" || index === "prototype") {
            throw new Error("Detected property ".concat(index, ". This is a prototype pollution risk, please remove it from your object."));
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if (isArray(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        } else if (isPlainObject(recursiveResult.annotations)) {
            forEach(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[escapeKey(index) + "." + key] = tree;
            });
        }
    });
    const result = isEmptyObject(innerAnnotations) ? {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type
        ] : void 0
    } : {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type,
            innerAnnotations
        ] : innerAnnotations
    };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
};
// ../../node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js
function getType2(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray2(payload) {
    return getType2(payload) === "Array";
}
function isPlainObject2(payload) {
    if (getType2(payload) !== "Object") return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
// ../../node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js
function assignProp2(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = ({}).propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable") carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function copy(target) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (isArray2(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!isPlainObject2(target)) {
        return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [
        ...props,
        ...symbols
    ].reduce((carry, key)=>{
        if (isArray2(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp2(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}
// ../../node_modules/.pnpm/superjson@2.2.2/node_modules/superjson/dist/index.js
var SuperJSON = class {
    serialize(object) {
        const identities = /* @__PURE__ */ new Map();
        const output = walker(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations
            };
        }
        return res;
    }
    deserialize(payload) {
        const { json, meta } = payload;
        let result = copy(json);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
            result = applyValueAnnotations(result, meta.values, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
            result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string));
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer
        });
    }
    allowErrorProps() {
        for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
            props[_key] = arguments[_key];
        }
        this.allowedErrorProps.push(...props);
    }
    /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */ constructor({ dedupe = false } = {}){
        this.classRegistry = new ClassRegistry();
        this.symbolRegistry = new Registry((s)=>{
            var _s_description;
            return (_s_description = s.description) !== null && _s_description !== void 0 ? _s_description : "";
        });
        this.customTransformerRegistry = new CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
};
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
var serialize = SuperJSON.serialize;
SuperJSON.deserialize;
var stringify = SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;
// src/utils.tsx
function getQueryStatusLabel(query) {
    return query.state.fetchStatus === "fetching" ? "fetching" : !query.getObserversCount() ? "inactive" : query.state.fetchStatus === "paused" ? "paused" : query.isStale() ? "stale" : "fresh";
}
function getSidedProp(prop, side) {
    return "".concat(prop).concat(side.charAt(0).toUpperCase() + side.slice(1));
}
function getQueryStatusColor(param) {
    let { queryState, observerCount, isStale } = param;
    return queryState.fetchStatus === "fetching" ? "blue" : !observerCount ? "gray" : queryState.fetchStatus === "paused" ? "purple" : isStale ? "yellow" : "green";
}
function getMutationStatusColor(param) {
    let { status, isPaused } = param;
    return isPaused ? "purple" : status === "error" ? "red" : status === "pending" ? "yellow" : status === "success" ? "green" : "gray";
}
function getQueryStatusColorByLabel(label) {
    return label === "fresh" ? "green" : label === "stale" ? "yellow" : label === "paused" ? "purple" : label === "inactive" ? "gray" : "blue";
}
var displayValue = function(value) {
    let beautify = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const { json } = serialize(value);
    return JSON.stringify(json, null, beautify ? 2 : void 0);
};
var getStatusRank = (q)=>q.state.fetchStatus !== "idle" ? 0 : !q.getObserversCount() ? 3 : q.isStale() ? 2 : 1;
var queryHashSort = (a, b)=>a.queryHash.localeCompare(b.queryHash);
var dateSort = (a, b)=>a.state.dataUpdatedAt < b.state.dataUpdatedAt ? 1 : -1;
var statusAndDateSort = (a, b)=>{
    if (getStatusRank(a) === getStatusRank(b)) {
        return dateSort(a, b);
    }
    return getStatusRank(a) > getStatusRank(b) ? 1 : -1;
};
var sortFns = {
    status: statusAndDateSort,
    "query hash": queryHashSort,
    "last updated": dateSort
};
var getMutationStatusRank = (m)=>m.state.isPaused ? 0 : m.state.status === "error" ? 2 : m.state.status === "pending" ? 1 : 3;
var mutationDateSort = (a, b)=>a.state.submittedAt < b.state.submittedAt ? 1 : -1;
var mutationStatusSort = (a, b)=>{
    if (getMutationStatusRank(a) === getMutationStatusRank(b)) {
        return mutationDateSort(a, b);
    }
    return getMutationStatusRank(a) > getMutationStatusRank(b) ? 1 : -1;
};
var mutationSortFns = {
    status: mutationStatusSort,
    "last updated": mutationDateSort
};
var convertRemToPixels = (rem)=>{
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var getPreferredColorScheme = ()=>{
    const [colorScheme, setColorScheme] = createSignal("dark");
    onMount(()=>{
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        setColorScheme(query.matches ? "dark" : "light");
        const listener = (e)=>{
            setColorScheme(e.matches ? "dark" : "light");
        };
        query.addEventListener("change", listener);
        onCleanup(()=>query.removeEventListener("change", listener));
    });
    return colorScheme;
};
var updateNestedDataByPath = (oldData, updatePath, value)=>{
    if (updatePath.length === 0) {
        return value;
    }
    if (oldData instanceof Map) {
        const newData = new Map(oldData);
        if (updatePath.length === 1) {
            newData.set(updatePath[0], value);
            return newData;
        }
        const [head, ...tail] = updatePath;
        newData.set(head, updateNestedDataByPath(newData.get(head), tail, value));
        return newData;
    }
    if (oldData instanceof Set) {
        const setAsArray = updateNestedDataByPath(Array.from(oldData), updatePath, value);
        return new Set(setAsArray);
    }
    if (Array.isArray(oldData)) {
        const newData = [
            ...oldData
        ];
        if (updatePath.length === 1) {
            newData[updatePath[0]] = value;
            return newData;
        }
        const [head, ...tail] = updatePath;
        newData[head] = updateNestedDataByPath(newData[head], tail, value);
        return newData;
    }
    if (oldData instanceof Object) {
        const newData = {
            ...oldData
        };
        if (updatePath.length === 1) {
            newData[updatePath[0]] = value;
            return newData;
        }
        const [head, ...tail] = updatePath;
        newData[head] = updateNestedDataByPath(newData[head], tail, value);
        return newData;
    }
    return oldData;
};
var deleteNestedDataByPath = (oldData, deletePath)=>{
    if (oldData instanceof Map) {
        const newData = new Map(oldData);
        if (deletePath.length === 1) {
            newData.delete(deletePath[0]);
            return newData;
        }
        const [head, ...tail] = deletePath;
        newData.set(head, deleteNestedDataByPath(newData.get(head), tail));
        return newData;
    }
    if (oldData instanceof Set) {
        const setAsArray = deleteNestedDataByPath(Array.from(oldData), deletePath);
        return new Set(setAsArray);
    }
    if (Array.isArray(oldData)) {
        const newData = [
            ...oldData
        ];
        if (deletePath.length === 1) {
            return newData.filter((_, idx)=>idx.toString() !== deletePath[0]);
        }
        const [head, ...tail] = deletePath;
        newData[head] = deleteNestedDataByPath(newData[head], tail);
        return newData;
    }
    if (oldData instanceof Object) {
        const newData = {
            ...oldData
        };
        if (deletePath.length === 1) {
            delete newData[deletePath[0]];
            return newData;
        }
        const [head, ...tail] = deletePath;
        newData[head] = deleteNestedDataByPath(newData[head], tail);
        return newData;
    }
    return oldData;
};
var setupStyleSheet = (nonce, target)=>{
    if (!nonce) return;
    const styleExists = document.querySelector("#_goober") || (target === null || target === void 0 ? void 0 : target.querySelector("#_goober"));
    if (styleExists) return;
    const styleTag = document.createElement("style");
    const textNode = document.createTextNode("");
    styleTag.appendChild(textNode);
    styleTag.id = "_goober";
    styleTag.setAttribute("nonce", nonce);
    if (target) {
        target.appendChild(styleTag);
    } else {
        document.head.appendChild(styleTag);
    }
};
;
}),
"[project]/apps/client/node_modules/@tanstack/query-devtools/build/dev.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TanstackQueryDevtools",
    ()=>TanstackQueryDevtools,
    "TanstackQueryDevtoolsPanel",
    ()=>TanstackQueryDevtoolsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-devtools/build/chunk/CXOMC62J.js [app-client] (ecmascript)");
;
;
;
var _client, _onlineManager, _queryFlavor, _version, _isMounted, _styleNonce, _shadowDOMTarget, _buttonPosition, _position, _initialIsOpen, _errorTypes, _hideDisabledQueries, _Component, _dispose, _client1, _onlineManager1, _queryFlavor1, _version1, _isMounted1, _styleNonce1, _shadowDOMTarget1, _buttonPosition1, _position1, _initialIsOpen1, _errorTypes1, _hideDisabledQueries1, _onClose, _Component1, _dispose1;
;
// src/TanstackQueryDevtools.tsx
var TanstackQueryDevtools = (_client = /*#__PURE__*/ new WeakMap(), _onlineManager = /*#__PURE__*/ new WeakMap(), _queryFlavor = /*#__PURE__*/ new WeakMap(), _version = /*#__PURE__*/ new WeakMap(), _isMounted = /*#__PURE__*/ new WeakMap(), _styleNonce = /*#__PURE__*/ new WeakMap(), _shadowDOMTarget = /*#__PURE__*/ new WeakMap(), _buttonPosition = /*#__PURE__*/ new WeakMap(), _position = /*#__PURE__*/ new WeakMap(), _initialIsOpen = /*#__PURE__*/ new WeakMap(), _errorTypes = /*#__PURE__*/ new WeakMap(), _hideDisabledQueries = /*#__PURE__*/ new WeakMap(), _Component = /*#__PURE__*/ new WeakMap(), _dispose = /*#__PURE__*/ new WeakMap(), class {
    setButtonPosition(position) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition)[1](position);
    }
    setPosition(position) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position)[1](position);
    }
    setInitialIsOpen(isOpen) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen)[1](isOpen);
    }
    setErrorTypes(errorTypes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes)[1](errorTypes);
    }
    setClient(client) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client)[1](client);
    }
    mount(el) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted)) {
            throw new Error("Devtools is already mounted");
        }
        const dispose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(()=>{
            const _self$ = this;
            const [btnPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition);
            const [pos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position);
            const [isOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen);
            const [errors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes);
            const [hideDisabledQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries);
            const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client);
            let Devtools;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component)) {
                Devtools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component);
            } else {
                Devtools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/apps/client/node_modules/@tanstack/query-devtools/build/DevtoolsComponent/EDEL3XIZ.js [app-client] (ecmascript, async loader)"));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component, Devtools);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupStyleSheet"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createComponent"])(Devtools, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                get queryFlavor () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _queryFlavor);
                },
                get version () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _version);
                },
                get onlineManager () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _onlineManager);
                },
                get shadowDOMTarget () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _shadowDOMTarget);
                }
            }, {
                get client () {
                    return queryClient();
                },
                get buttonPosition () {
                    return btnPosition();
                },
                get position () {
                    return pos();
                },
                get initialIsOpen () {
                    return isOpen();
                },
                get errorTypes () {
                    return errors();
                },
                get hideDisabledQueries () {
                    return hideDisabledQueries();
                }
            }));
        }, el);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispose, dispose);
    }
    unmount() {
        var _this, _this1, _ref;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted)) {
            throw new Error("Devtools is not mounted");
        }
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _dispose)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted, false);
    }
    constructor(config){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onlineManager, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryFlavor, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _version, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispose, {
            writable: true,
            value: void 0
        });
        const { client, queryFlavor, version, onlineManager, buttonPosition, position, initialIsOpen, errorTypes, styleNonce, shadowDOMTarget, hideDisabledQueries } = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(client));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryFlavor, queryFlavor);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _version, version);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onlineManager, onlineManager);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce, styleNonce);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget, shadowDOMTarget);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(buttonPosition));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(position));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(initialIsOpen));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(errorTypes));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(hideDisabledQueries));
    }
});
// src/TanstackQueryDevtoolsPanel.tsx
var TanstackQueryDevtoolsPanel = (_client1 = /*#__PURE__*/ new WeakMap(), _onlineManager1 = /*#__PURE__*/ new WeakMap(), _queryFlavor1 = /*#__PURE__*/ new WeakMap(), _version1 = /*#__PURE__*/ new WeakMap(), _isMounted1 = /*#__PURE__*/ new WeakMap(), _styleNonce1 = /*#__PURE__*/ new WeakMap(), _shadowDOMTarget1 = /*#__PURE__*/ new WeakMap(), _buttonPosition1 = /*#__PURE__*/ new WeakMap(), _position1 = /*#__PURE__*/ new WeakMap(), _initialIsOpen1 = /*#__PURE__*/ new WeakMap(), _errorTypes1 = /*#__PURE__*/ new WeakMap(), _hideDisabledQueries1 = /*#__PURE__*/ new WeakMap(), _onClose = /*#__PURE__*/ new WeakMap(), _Component1 = /*#__PURE__*/ new WeakMap(), _dispose1 = /*#__PURE__*/ new WeakMap(), class {
    setButtonPosition(position) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition1)[1](position);
    }
    setPosition(position) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position1)[1](position);
    }
    setInitialIsOpen(isOpen) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen1)[1](isOpen);
    }
    setErrorTypes(errorTypes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes1)[1](errorTypes);
    }
    setClient(client) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1)[1](client);
    }
    setOnClose(onClose) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onClose)[1](()=>onClose);
    }
    mount(el) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted1)) {
            throw new Error("Devtools is already mounted");
        }
        const dispose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(()=>{
            const _self$ = this;
            const [btnPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition1);
            const [pos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position1);
            const [isOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen1);
            const [errors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes1);
            const [hideDisabledQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries1);
            const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1);
            const [onClose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onClose);
            let Devtools;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component1)) {
                Devtools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component1);
            } else {
                Devtools = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/apps/client/node_modules/@tanstack/query-devtools/build/DevtoolsPanelComponent/RN252AT2.js [app-client] (ecmascript, async loader)"));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component1, Devtools);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupStyleSheet"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget1));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createComponent"])(Devtools, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                get queryFlavor () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _queryFlavor1);
                },
                get version () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _version1);
                },
                get onlineManager () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _onlineManager1);
                },
                get shadowDOMTarget () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_self$, _shadowDOMTarget1);
                }
            }, {
                get client () {
                    return queryClient();
                },
                get buttonPosition () {
                    return btnPosition();
                },
                get position () {
                    return pos();
                },
                get initialIsOpen () {
                    return isOpen();
                },
                get errorTypes () {
                    return errors();
                },
                get hideDisabledQueries () {
                    return hideDisabledQueries();
                },
                get onClose () {
                    return onClose();
                }
            }));
        }, el);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted1, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispose1, dispose);
    }
    unmount() {
        var _this, _this1, _ref;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted1)) {
            throw new Error("Devtools is not mounted");
        }
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _dispose1)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted1, false);
    }
    constructor(config){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onlineManager1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryFlavor1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _version1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _isMounted1, {
            writable: true,
            value: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onClose, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _Component1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispose1, {
            writable: true,
            value: void 0
        });
        const { client, queryFlavor, version, onlineManager, buttonPosition, position, initialIsOpen, errorTypes, styleNonce, shadowDOMTarget, onClose, hideDisabledQueries } = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(client));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryFlavor1, queryFlavor);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _version1, version);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onlineManager1, onlineManager);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _styleNonce1, styleNonce);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shadowDOMTarget1, shadowDOMTarget);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buttonPosition1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(buttonPosition));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _position1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(position));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialIsOpen1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(initialIsOpen));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _errorTypes1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(errorTypes));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hideDisabledQueries1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(hideDisabledQueries));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _onClose, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$chunk$2f$CXOMC62J$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignal"])(onClose));
    }
});
;
}),
"[project]/apps/client/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactQueryDevtools",
    ()=>ReactQueryDevtools
]);
// src/ReactQueryDevtools.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$dev$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-devtools/build/dev.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function ReactQueryDevtools(props) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(props.client);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { buttonPosition, position, initialIsOpen, errorTypes, styleNonce, shadowDOMTarget, hideDisabledQueries } = props;
    const [devtools] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$dev$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TanstackQueryDevtools"]({
        client: queryClient,
        queryFlavor: "React Query",
        version: "5",
        onlineManager: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"],
        buttonPosition,
        position,
        initialIsOpen,
        errorTypes,
        styleNonce,
        shadowDOMTarget,
        hideDisabledQueries
    }));
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            devtools.setClient(queryClient);
        }
    }["ReactQueryDevtools.useEffect"], [
        queryClient,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            if (buttonPosition) {
                devtools.setButtonPosition(buttonPosition);
            }
        }
    }["ReactQueryDevtools.useEffect"], [
        buttonPosition,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            if (position) {
                devtools.setPosition(position);
            }
        }
    }["ReactQueryDevtools.useEffect"], [
        position,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            devtools.setInitialIsOpen(initialIsOpen || false);
        }
    }["ReactQueryDevtools.useEffect"], [
        initialIsOpen,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            devtools.setErrorTypes(errorTypes || []);
        }
    }["ReactQueryDevtools.useEffect"], [
        errorTypes,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtools.useEffect": ()=>{
            if (ref.current) {
                devtools.mount(ref.current);
            }
            return ({
                "ReactQueryDevtools.useEffect": ()=>{
                    devtools.unmount();
                }
            })["ReactQueryDevtools.useEffect"];
        }
    }["ReactQueryDevtools.useEffect"], [
        devtools
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        dir: "ltr",
        className: "tsqd-parent-container",
        ref
    });
}
;
 //# sourceMappingURL=ReactQueryDevtools.js.map
}),
"[project]/apps/client/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtoolsPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactQueryDevtoolsPanel",
    ()=>ReactQueryDevtoolsPanel
]);
// src/ReactQueryDevtoolsPanel.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$dev$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/query-devtools/build/dev.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function ReactQueryDevtoolsPanel(props) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(props.client);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { errorTypes, styleNonce, shadowDOMTarget, hideDisabledQueries } = props;
    const [devtools] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$devtools$2f$build$2f$dev$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TanstackQueryDevtoolsPanel"]({
        client: queryClient,
        queryFlavor: "React Query",
        version: "5",
        onlineManager: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"],
        buttonPosition: "bottom-left",
        position: "bottom",
        initialIsOpen: true,
        errorTypes,
        styleNonce,
        shadowDOMTarget,
        onClose: props.onClose,
        hideDisabledQueries
    }));
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtoolsPanel.useEffect": ()=>{
            devtools.setClient(queryClient);
        }
    }["ReactQueryDevtoolsPanel.useEffect"], [
        queryClient,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtoolsPanel.useEffect": ()=>{
            var _props_onClose;
            devtools.setOnClose((_props_onClose = props.onClose) !== null && _props_onClose !== void 0 ? _props_onClose : ({
                "ReactQueryDevtoolsPanel.useEffect": ()=>{}
            })["ReactQueryDevtoolsPanel.useEffect"]);
        }
    }["ReactQueryDevtoolsPanel.useEffect"], [
        props.onClose,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtoolsPanel.useEffect": ()=>{
            devtools.setErrorTypes(errorTypes || []);
        }
    }["ReactQueryDevtoolsPanel.useEffect"], [
        errorTypes,
        devtools
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ReactQueryDevtoolsPanel.useEffect": ()=>{
            if (ref.current) {
                devtools.mount(ref.current);
            }
            return ({
                "ReactQueryDevtoolsPanel.useEffect": ()=>{
                    devtools.unmount();
                }
            })["ReactQueryDevtoolsPanel.useEffect"];
        }
    }["ReactQueryDevtoolsPanel.useEffect"], [
        devtools
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            height: "500px",
            ...props.style
        },
        className: "tsqd-parent-container",
        ref
    });
}
;
 //# sourceMappingURL=ReactQueryDevtoolsPanel.js.map
}),
"[project]/apps/client/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactQueryDevtools",
    ()=>ReactQueryDevtools2,
    "ReactQueryDevtoolsPanel",
    ()=>ReactQueryDevtoolsPanel2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$ReactQueryDevtools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$ReactQueryDevtoolsPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtoolsPanel.js [app-client] (ecmascript)");
"use client";
;
;
var ReactQueryDevtools2 = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$ReactQueryDevtools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactQueryDevtools"];
var ReactQueryDevtoolsPanel2 = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$ReactQueryDevtoolsPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactQueryDevtoolsPanel"];
;
 //# sourceMappingURL=index.js.map
}),
"[project]/apps/client/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = (param)=>{
    let { forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R } = param;
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>H(m, l)
    }["V.useState"]), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>c === "system" ? E() : c
    }["V.useState"]), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[S]": (o)=>{
            let r = o;
            if (!r) return;
            o === "system" && s && (r = E());
            let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = {
                "V.useCallback[S].L": (g)=>{
                    g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
                }
            }["V.useCallback[S].L"];
            if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
                let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
                P.style.colorScheme = D;
            }
            C == null || C();
        }
    }["V.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[f]": (o)=>{
            let r = typeof o == "function" ? o(c) : o;
            n(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["V.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[A]": (o)=>{
            let r = E(o);
            y(r), c === "system" && s && !e && S("system");
        }
    }["V.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = window.matchMedia(I);
            return o.addListener(A), A(o), ({
                "V.useEffect": ()=>o.removeListener(A)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = {
                "V.useEffect.o": (r)=>{
                    r.key === m && (r.newValue ? n(r.newValue) : f(l));
                }
            }["V.useEffect.o"];
            return window.addEventListener("storage", o), ({
                "V.useEffect": ()=>window.removeEventListener("storage", o)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["V.useEffect"], [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "V.useMemo[Q]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? T : c,
                themes: s ? [
                    ...a,
                    "system"
                ] : a,
                systemTheme: s ? T : void 0
            })
    }["V.useMemo[Q]"], [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w } = param;
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? d : "",
        dangerouslySetInnerHTML: {
            __html: "(".concat(M.toString(), ")(").concat(p, ")")
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
]);

//# sourceMappingURL=90005_61eece1e._.js.map