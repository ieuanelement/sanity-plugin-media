import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useClient, useColorSchemeValue, useSchema, Preview, useDocumentStore, WithReferringDocuments, useFormValue, definePlugin } from "sanity";
import { ThLargeIcon, ThListIcon, SortIcon, CloseIcon, SelectIcon, AddIcon, SearchIcon, PlugIcon, ClipboardIcon, DownloadIcon, ChevronDownIcon, ErrorOutlineIcon, WarningOutlineIcon, EditIcon, ArrowUpIcon, ArrowDownIcon, TrashIcon, ComposeIcon, Icon, UploadIcon, WarningFilledIcon, CheckmarkCircleIcon, ChevronUpIcon, ImageIcon } from "@sanity/icons";
import { Inline, Button, usePortal, MenuButton, Menu as Menu$2, MenuItem, MenuDivider, Box, studioTheme, rem, Flex, Label, Text, TextInput, Card, MenuGroup, useMediaIndex, Tooltip, Switch, Popover, Stack, Dialog as Dialog$1, TextArea, TabList, Tab, TabPanel, Container as Container$2, Spinner, Checkbox, Grid, useToast, PortalProvider, useLayer, Portal } from "@sanity/ui";
import { useRef, useCallback, useEffect, createContext, useContext, useMemo, useState, forwardRef, memo, Component } from "react";
import groq from "groq";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createAction, createSlice, isAnyOf, createSelector, combineReducers, configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { ofType, combineEpics, createEpicMiddleware } from "redux-observable";
import { iif, throwError, of, from, EMPTY, Subject, Observable, merge, empty } from "rxjs";
import { delay, mergeMap, filter, withLatestFrom, catchError, switchMap, bufferTime, debounceTime, first, map, takeUntil } from "rxjs/operators";
import { uuid } from "@sanity/uuid";
import { css, createGlobalStyle, styled } from "styled-components";
import pluralize from "pluralize";
import { useNProgress } from "@tanem/react-nprogress";
import { hues, white } from "@sanity/color";
import Select, { components } from "react-select";
import { Virtuoso, VirtuosoGrid, GroupedVirtuoso } from "react-virtuoso";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import format from "date-fns/format";
import filesize from "filesize";
import copy from "copy-to-clipboard";
import { useIntentLink } from "sanity/router";
import { FileIcon as FileIcon$1, defaultStyles } from "react-file-icon";
import CreatableSelect from "react-select/creatable";
import formatRelative from "date-fns/formatRelative";
import { useDropzone } from "react-dropzone";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var lib = {}, hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1, Object.defineProperty(lib, "__esModule", {
    value: !0
  });
  for (var IS_MAC = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), MODIFIERS = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, ALIASES = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: IS_MAC ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  }, CODES = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, f = 1; f < 20; f++)
    CODES["f" + f] = 111 + f;
  function isHotkey2(hotkey, options, event) {
    options && !("byKey" in options) && (event = options, options = null), Array.isArray(hotkey) || (hotkey = [hotkey]);
    var array = hotkey.map(function(string) {
      return parseHotkey(string, options);
    }), check = function(e) {
      return array.some(function(object) {
        return compareHotkey(object, e);
      });
    }, ret = event == null ? check : check(event);
    return ret;
  }
  function isCodeHotkey(hotkey, event) {
    return isHotkey2(hotkey, event);
  }
  function isKeyHotkey(hotkey, event) {
    return isHotkey2(hotkey, { byKey: !0 }, event);
  }
  function parseHotkey(hotkey, options) {
    var byKey = options && options.byKey, ret = {};
    hotkey = hotkey.replace("++", "+add");
    var values = hotkey.split("+"), length = values.length;
    for (var k in MODIFIERS)
      ret[MODIFIERS[k]] = !1;
    var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
    try {
      for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var value = _step.value, optional = value.endsWith("?") && value.length > 1;
        optional && (value = value.slice(0, -1));
        var name = toKeyName(value), modifier = MODIFIERS[name];
        if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name])
          throw new TypeError('Unknown modifier: "' + value + '"');
        (length === 1 || !modifier) && (byKey ? ret.key = name : ret.which = toKeyCode(value)), modifier && (ret[modifier] = optional ? null : !0);
      }
    } catch (err) {
      _didIteratorError = !0, _iteratorError = err;
    } finally {
      try {
        !_iteratorNormalCompletion && _iterator.return && _iterator.return();
      } finally {
        if (_didIteratorError)
          throw _iteratorError;
      }
    }
    return ret;
  }
  function compareHotkey(object, event) {
    for (var key in object) {
      var expected = object[key], actual = void 0;
      if (expected != null && (key === "key" && event.key != null ? actual = event.key.toLowerCase() : key === "which" ? actual = expected === 91 && event.which === 93 ? 91 : event.which : actual = event[key], !(actual == null && expected === !1) && actual !== expected))
        return !1;
    }
    return !0;
  }
  function toKeyCode(name) {
    name = toKeyName(name);
    var code = CODES[name] || name.toUpperCase().charCodeAt(0);
    return code;
  }
  function toKeyName(name) {
    return name = name.toLowerCase(), name = ALIASES[name] || name, name;
  }
  return lib.default = isHotkey2, lib.isHotkey = isHotkey2, lib.isCodeHotkey = isCodeHotkey, lib.isKeyHotkey = isKeyHotkey, lib.parseHotkey = parseHotkey, lib.compareHotkey = compareHotkey, lib.toKeyCode = toKeyCode, lib.toKeyName = toKeyName, lib;
}
var libExports = requireLib(), isHotkey = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
const useKeyPress = (hotkey, onPress) => {
  const keyPressed = useRef(!1), downHandler = useCallback(
    (e) => {
      isHotkey(hotkey, e) && (keyPressed.current = !0, onPress && onPress());
    },
    [hotkey, onPress]
  ), upHandler = useCallback(() => {
    keyPressed.current = !1;
  }, []);
  return useEffect(() => (window.addEventListener("keydown", downHandler), window.addEventListener("keyup", upHandler), () => {
    window.removeEventListener("keydown", downHandler), window.removeEventListener("keyup", upHandler);
  }), [downHandler, upHandler]), keyPressed;
}, divider = { type: "divider" }, inputs = {
  altText: {
    assetTypes: ["file", "image"],
    field: "altText",
    name: "altText",
    operatorType: "empty",
    operatorTypes: ["empty", "notEmpty", null, "includes", "doesNotInclude"],
    title: "Alt text",
    type: "string",
    value: ""
  },
  creditLine: {
    assetTypes: ["file", "image"],
    field: "creditLine",
    name: "creditLine",
    operatorType: "empty",
    operatorTypes: ["empty", "notEmpty", null, "includes", "doesNotInclude"],
    title: "Credit",
    type: "string",
    value: ""
  },
  description: {
    assetTypes: ["file", "image"],
    field: "description",
    name: "description",
    operatorType: "empty",
    operatorTypes: ["empty", "notEmpty", null, "includes", "doesNotInclude"],
    title: "Description",
    type: "string",
    value: ""
  },
  fileName: {
    assetTypes: ["file", "image"],
    field: "originalFilename",
    name: "filename",
    operatorType: "includes",
    operatorTypes: ["includes", "doesNotInclude"],
    title: "File name",
    type: "string",
    value: ""
  },
  height: {
    assetTypes: ["image"],
    field: "metadata.dimensions.height",
    name: "height",
    operatorType: "greaterThan",
    operatorTypes: [
      "greaterThan",
      "greaterThanOrEqualTo",
      "lessThan",
      "lessThanOrEqualTo",
      null,
      "equalTo"
    ],
    title: "Height",
    type: "number",
    value: 400
  },
  inCurrentDocument: {
    assetTypes: ["file", "image"],
    name: "inCurrentDocument",
    operatorType: "is",
    options: [
      {
        name: "true",
        title: "True",
        value: groq`_id in $documentAssetIds`
      },
      {
        name: "false",
        title: "False",
        value: groq`!(_id in $documentAssetIds)`
      }
    ],
    selectOnly: !0,
    title: "In use in current document",
    type: "select",
    value: "true"
  },
  inUse: {
    assetTypes: ["file", "image"],
    name: "inUse",
    operatorType: "is",
    options: [
      {
        name: "true",
        title: "True",
        value: groq`count(*[references(^._id)]) > 0`
      },
      {
        name: "false",
        title: "False",
        value: groq`count(*[references(^._id)]) == 0`
      }
    ],
    title: "In use",
    type: "select",
    value: "true"
  },
  isOpaque: {
    assetTypes: ["image"],
    field: "metadata.isOpaque",
    name: "isOpaque",
    operatorType: "equalTo",
    options: [
      {
        name: "true",
        title: "True",
        value: "false"
      },
      {
        name: "false",
        title: "False",
        value: "true"
      }
    ],
    title: "Has transparency",
    type: "select",
    value: "true"
  },
  orientation: {
    assetTypes: ["image"],
    name: "orientation",
    operatorType: "is",
    operatorTypes: ["is", "isNot"],
    options: [
      {
        name: "portrait",
        title: "Portrait",
        value: "metadata.dimensions.aspectRatio < 1"
      },
      {
        name: "landscape",
        title: "Landscape",
        value: "metadata.dimensions.aspectRatio > 1"
      },
      {
        name: "square",
        title: "Square",
        value: "metadata.dimensions.aspectRatio == 1"
      }
    ],
    title: "Orientation",
    type: "select",
    value: "portrait"
  },
  size: {
    assetTypes: ["file", "image"],
    field: "size",
    modifier: "kb",
    modifiers: [
      {
        name: "kb",
        title: "KB",
        fieldModifier: (fieldName) => `round(${fieldName} / 1000)`
      },
      {
        name: "mb",
        title: "MB",
        fieldModifier: (fieldName) => `round(${fieldName} / 1000000)`
      }
    ],
    name: "size",
    operatorType: "greaterThan",
    operatorTypes: [
      "greaterThan",
      "greaterThanOrEqualTo",
      "lessThan",
      "lessThanOrEqualTo",
      null,
      "equalTo"
    ],
    title: "File size",
    type: "number",
    value: 0
  },
  tag: {
    assetTypes: ["file", "image"],
    field: "opt.media.tags",
    name: "tag",
    operatorType: "references",
    operatorTypes: ["references", "doesNotReference", null, "empty", "notEmpty"],
    title: "Tags",
    type: "searchable"
  },
  title: {
    assetTypes: ["file", "image"],
    field: "title",
    name: "title",
    operatorType: "empty",
    operatorTypes: ["empty", "notEmpty", null, "includes", "doesNotInclude"],
    title: "Title",
    type: "string",
    value: ""
  },
  type: {
    assetTypes: ["file", "image"],
    name: "type",
    operatorType: "is",
    operatorTypes: ["is", "isNot"],
    options: [
      {
        name: "image",
        title: "Image",
        value: 'mimeType match "image*"'
      },
      {
        name: "video",
        title: "Video",
        value: 'mimeType match "video*"'
      },
      {
        name: "audio",
        title: "Audio",
        value: 'mimeType match "audio*"'
      },
      {
        name: "pdf",
        title: "PDF",
        value: 'mimeType == "application/pdf"'
      }
    ],
    title: "File type",
    type: "select",
    value: "image"
  },
  width: {
    assetTypes: ["image"],
    field: "metadata.dimensions.width",
    name: "width",
    operatorType: "greaterThan",
    operatorTypes: [
      "greaterThan",
      "greaterThanOrEqualTo",
      "lessThan",
      "lessThanOrEqualTo",
      null,
      "equalTo"
    ],
    title: "Width",
    type: "number",
    value: 400
  }
}, operators = {
  doesNotInclude: {
    fn: (value, field) => value ? `!(${field} match '*${value}*')` : void 0,
    label: "does not include"
  },
  doesNotReference: {
    fn: (value, _field) => value ? `!references('${value}')` : void 0,
    label: "does not include"
  },
  empty: {
    fn: (_value, field) => `!defined(${field})`,
    hideInput: !0,
    label: "is empty"
  },
  equalTo: {
    fn: (value, field) => value ? `${field} == ${value}` : void 0,
    label: "is equal to"
  },
  greaterThan: {
    fn: (value, field) => value ? `${field} > ${value}` : void 0,
    label: "is greater than"
  },
  greaterThanOrEqualTo: {
    fn: (value, field) => value ? `${field} >= ${value}` : void 0,
    label: "is greater than or equal to"
  },
  includes: {
    fn: (value, field) => value ? `${field} match '*${value}*'` : void 0,
    label: "includes"
  },
  is: {
    fn: (value, _field) => `${value}`,
    label: "is"
  },
  isNot: {
    fn: (value, _field) => `!(${value})`,
    label: "is not"
  },
  lessThan: {
    fn: (value, field) => value ? `${field} < ${value}` : void 0,
    label: "is less than"
  },
  lessThanOrEqualTo: {
    fn: (value, field) => value ? `${field} <= ${value}` : void 0,
    label: "is less than or equal to"
  },
  notEmpty: {
    fn: (_value, field) => `defined(${field})`,
    hideInput: !0,
    label: "is not empty"
  },
  references: {
    fn: (value, _field) => value ? `references('${value}')` : void 0,
    label: "includes"
  }
}, ORDER_OPTIONS = [
  {
    direction: "desc",
    field: "_createdAt"
  },
  {
    direction: "asc",
    field: "_createdAt"
  },
  // Divider
  null,
  {
    direction: "desc",
    field: "_updatedAt"
  },
  {
    direction: "asc",
    field: "_updatedAt"
  },
  // Divider
  null,
  {
    direction: "asc",
    field: "originalFilename"
  },
  {
    direction: "desc",
    field: "originalFilename"
  },
  // Divider
  null,
  {
    direction: "desc",
    field: "size"
  },
  {
    direction: "asc",
    field: "size"
  }
], FACETS = [
  inputs.tag,
  divider,
  inputs.inUse,
  inputs.inCurrentDocument,
  divider,
  inputs.title,
  inputs.altText,
  inputs.creditLine,
  inputs.description,
  divider,
  inputs.isOpaque,
  divider,
  inputs.fileName,
  inputs.size,
  inputs.type,
  divider,
  inputs.orientation,
  inputs.width,
  inputs.height
], GRID_TEMPLATE_COLUMNS = {
  SMALL: "3rem 100px auto 1.5rem",
  LARGE: "3rem 100px auto 5.5rem 5.5rem 3.5rem 8.5rem 4.75rem 2rem"
}, PANEL_HEIGHT = 32, TAG_DOCUMENT_NAME = "media.tag", TAGS_PANEL_WIDTH = 250, AssetSourceDispatchContext = createContext(void 0), AssetBrowserDispatchProvider = (props) => {
  const { children, onSelect } = props, contextValue = {
    onSelect
  };
  return /* @__PURE__ */ jsx(AssetSourceDispatchContext.Provider, { value: contextValue, children });
}, useAssetSourceActions = () => {
  const context = useContext(AssetSourceDispatchContext);
  if (context === void 0)
    throw new Error("useAssetSourceActions must be used within an AssetSourceDispatchProvider");
  return context;
}, useVersionedClient = () => useClient({ apiVersion: "2022-10-01" }), ORDER_DICTIONARY = {
  _createdAt: {
    asc: "Last created: Oldest first",
    desc: "Last created: Newest first"
  },
  _updatedAt: {
    asc: "Last updated: Oldest first",
    desc: "Last updated: Newest first"
  },
  mimeType: {
    asc: "MIME type: A to Z",
    desc: "MIME type: Z to A"
  },
  originalFilename: {
    asc: "File name: A to Z",
    desc: "File name: Z to A"
  },
  size: {
    asc: "File size: Smallest first",
    desc: "File size: Largest first"
  }
}, getOrderTitle = (field, direction) => ORDER_DICTIONARY[field][direction], debugThrottle = (throttled) => function(source) {
  return iif(
    () => !!throttled,
    source.pipe(
      delay(3e3),
      mergeMap((v) => Math.random() > 0.5 ? throwError({
        message: "Test error",
        statusCode: 500
      }) : of(v))
    ),
    source
  );
}, constructFilter = ({
  assetTypes,
  searchFacets,
  searchQuery
}) => {
  const documentAssetTypes = assetTypes.map((type) => `sanity.${type}Asset`), baseFilter = groq`
    _type in ${JSON.stringify(documentAssetTypes)} && !(_id in path("drafts.**"))
  `, searchFacetFragments = searchFacets.reduce((acc, facet) => {
    if (facet.type === "number") {
      const { field, modifier, modifiers, operatorType, value } = facet, operator = operators[operatorType], currentModifier = modifiers?.find((m) => m.name === modifier), facetField = currentModifier?.fieldModifier ? currentModifier.fieldModifier(field) : field, fragment = operator.fn(value, facetField);
      fragment && acc.push(fragment);
    }
    if (facet.type === "searchable") {
      const { field, operatorType, value } = facet, fragment = operators[operatorType].fn(value?.value, field);
      fragment && acc.push(fragment);
    }
    if (facet.type === "select") {
      const { field, operatorType, options, value } = facet, operator = operators[operatorType], currentOptionValue = options?.find((l) => l.name === value)?.value, fragment = operator.fn(currentOptionValue, field);
      fragment && acc.push(fragment);
    }
    if (facet.type === "string") {
      const { field, operatorType, value } = facet, fragment = operators[operatorType].fn(value, field);
      fragment && acc.push(fragment);
    }
    return acc;
  }, []);
  return [
    // Base filter
    baseFilter,
    // Search query (if present)
    // NOTE: Currently this only searches direct fields on sanity.fileAsset/sanity.imageAsset and NOT referenced tags
    // It's possible to add this by adding the following line to the searchQuery, but it's quite slow
    // references(*[_type == "media.tag" && name.current == "${searchQuery.trim()}"]._id)
    ...searchQuery ? [
      groq`[_id, altText, assetId, creditLine, description, originalFilename, title, url] match '*${searchQuery.trim()}*'`
    ] : [],
    // Search facets
    ...searchFacetFragments
  ].join(" && ");
}, checkTagName = (client, name) => function(source) {
  return source.pipe(
    mergeMap(() => from(
      client.fetch(groq`count(*[_type == "${TAG_DOCUMENT_NAME}" && name.current == $name])`, {
        name
      })
    )),
    mergeMap((existingTagCount) => existingTagCount > 0 ? throwError({
      message: "Tag already exists",
      statusCode: 409
    }) : of(!0))
  );
}, getTagSelectOptions = (tags) => tags.reduce((acc, val) => {
  const tag = val?.tag;
  return tag && acc.push({
    label: tag?.name?.current,
    value: tag?._id
  }), acc;
}, []), ASSETS_ACTIONS = {
  tagsAddComplete: createAction(
    "actions/tagsAddComplete",
    function({ assets, tag }) {
      return { payload: { assets, tag } };
    }
  ),
  tagsAddError: createAction(
    "actions/tagsAddError",
    function({ assets, error, tag }) {
      return { payload: { assets, error, tag } };
    }
  ),
  tagsAddRequest: createAction(
    "actions/tagsAddRequest",
    function({ assets, tag }) {
      return { payload: { assets, tag } };
    }
  ),
  tagsRemoveComplete: createAction(
    "actions/tagsRemoveComplete",
    function({ assets, tag }) {
      return { payload: { assets, tag } };
    }
  ),
  tagsRemoveError: createAction(
    "actions/tagsRemoveError",
    function({ assets, error, tag }) {
      return { payload: { assets, error, tag } };
    }
  ),
  tagsRemoveRequest: createAction(
    "actions/tagsRemoveRequest",
    function({ assets, tag }) {
      return { payload: { assets, tag } };
    }
  )
}, DIALOG_ACTIONS = {
  showTagCreate: createAction("dialog/showTagCreate"),
  showTagEdit: createAction("dialog/showTagEdit", function({ tagId }) {
    return {
      payload: { tagId }
    };
  })
}, initialState$7 = {
  allIds: [],
  byIds: {},
  creating: !1,
  creatingError: void 0,
  fetchCount: -1,
  fetching: !1,
  fetchingError: void 0,
  panelVisible: !0
}, tagsSlice = createSlice({
  name: "tags",
  initialState: initialState$7,
  extraReducers: (builder) => {
    builder.addCase(DIALOG_ACTIONS.showTagCreate, (state) => {
      delete state.creatingError;
    }).addCase(DIALOG_ACTIONS.showTagEdit, (state, action) => {
      const { tagId } = action.payload;
      delete state.byIds[tagId].error;
    }).addMatcher(
      isAnyOf(
        ASSETS_ACTIONS.tagsAddComplete,
        ASSETS_ACTIONS.tagsAddError,
        ASSETS_ACTIONS.tagsRemoveComplete,
        ASSETS_ACTIONS.tagsRemoveError
      ),
      (state, action) => {
        const { tag } = action.payload;
        state.byIds[tag._id].updating = !1;
      }
    ).addMatcher(
      isAnyOf(ASSETS_ACTIONS.tagsAddRequest, ASSETS_ACTIONS.tagsRemoveRequest),
      (state, action) => {
        const { tag } = action.payload;
        state.byIds[tag._id].updating = !0;
      }
    );
  },
  reducers: {
    createComplete(state, action) {
      const { tag } = action.payload;
      state.creating = !1, state.allIds.includes(tag._id) || state.allIds.push(tag._id), state.byIds[tag._id] = {
        _type: "tag",
        picked: !1,
        tag,
        updating: !1
      };
    },
    createError(state, action) {
      state.creating = !1, state.creatingError = action.payload.error;
    },
    createRequest(state, _action) {
      state.creating = !0, delete state.creatingError;
    },
    deleteComplete(state, action) {
      const { tagId } = action.payload, deleteIndex = state.allIds.indexOf(tagId);
      deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), delete state.byIds[tagId];
    },
    deleteError(state, action) {
      const { error, tag } = action.payload, tagId = tag?._id;
      state.byIds[tagId].error = error, state.byIds[tagId].updating = !1;
    },
    deleteRequest(state, action) {
      const tagId = action.payload?.tag?._id;
      state.byIds[tagId].picked = !1, state.byIds[tagId].updating = !0, Object.keys(state.byIds).forEach((key) => {
        delete state.byIds[key].error;
      });
    },
    fetchComplete(state, action) {
      const { tags } = action.payload;
      tags?.forEach((tag) => {
        state.allIds.push(tag._id), state.byIds[tag._id] = {
          _type: "tag",
          picked: !1,
          tag,
          updating: !1
        };
      }), state.fetching = !1, state.fetchCount = tags.length || 0, delete state.fetchingError;
    },
    fetchError(state, action) {
      const { error } = action.payload;
      state.fetching = !1, state.fetchingError = error;
    },
    fetchRequest: {
      reducer: (state, _action) => {
        state.fetching = !0, delete state.fetchingError;
      },
      prepare: () => ({ payload: { query: groq`
          {
            "items": *[
              _type == "${TAG_DOCUMENT_NAME}"
              && !(_id in path("drafts.**"))
            ] {
              _createdAt,
              _updatedAt,
              _id,
              _rev,
              _type,
              name
            } | order(name.current asc),
          }
        ` } })
    },
    // Queue batch tag creation
    listenerCreateQueue(_state, _action) {
    },
    // Apply created tags (via sanity real-time events)
    listenerCreateQueueComplete(state, action) {
      const { tags } = action.payload;
      tags?.forEach((tag) => {
        state.byIds[tag._id] = {
          _type: "tag",
          picked: !1,
          tag,
          updating: !1
        }, state.allIds.includes(tag._id) || state.allIds.push(tag._id);
      });
    },
    // Queue batch tag deletion
    listenerDeleteQueue(_state, _action) {
    },
    // Apply deleted tags (via sanity real-time events)
    listenerDeleteQueueComplete(state, action) {
      const { tagIds } = action.payload;
      tagIds?.forEach((tagId) => {
        const deleteIndex = state.allIds.indexOf(tagId);
        deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), delete state.byIds[tagId];
      });
    },
    // Queue batch tag updates
    listenerUpdateQueue(_state, _action) {
    },
    // Apply updated tags (via sanity real-time events)
    listenerUpdateQueueComplete(state, action) {
      const { tags } = action.payload;
      tags?.forEach((tag) => {
        state.byIds[tag._id] && (state.byIds[tag._id].tag = tag);
      });
    },
    // Set tag panel visibility
    panelVisibleSet(state, action) {
      const { panelVisible } = action.payload;
      state.panelVisible = panelVisible;
    },
    // Sort all tags by name
    sort(state) {
      state.allIds.sort((a, b) => {
        const tagA = state.byIds[a].tag.name.current, tagB = state.byIds[b].tag.name.current;
        return tagA < tagB ? -1 : tagA > tagB ? 1 : 0;
      });
    },
    updateComplete(state, action) {
      const { tag } = action.payload;
      state.byIds[tag._id].tag = tag, state.byIds[tag._id].updating = !1;
    },
    updateError(state, action) {
      const { error, tag } = action.payload, tagId = tag?._id;
      state.byIds[tagId].error = error, state.byIds[tagId].updating = !1;
    },
    updateRequest(state, action) {
      const { tag } = action.payload;
      state.byIds[tag?._id].updating = !0;
    }
  }
}), tagsCreateEpic = (action$, state$, { client }) => action$.pipe(
  filter(tagsSlice.actions.createRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { assetId, name } = action.payload;
    return of(action).pipe(
      debugThrottle(state.debug.badConnection),
      checkTagName(client, name),
      mergeMap(
        () => client.observable.create({
          _type: TAG_DOCUMENT_NAME,
          name: {
            _type: "slug",
            current: name
          }
        })
      ),
      mergeMap((result) => of(tagsSlice.actions.createComplete({ assetId, tag: result }))),
      catchError(
        (error) => of(
          tagsSlice.actions.createError({
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            },
            name
          })
        )
      )
    );
  })
), tagsDeleteEpic = (action$, state$, { client }) => action$.pipe(
  filter(tagsSlice.actions.deleteRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { tag } = action.payload;
    return of(action).pipe(
      // Optionally throttle
      debugThrottle(state.debug.badConnection),
      // Fetch assets which reference this tag
      mergeMap(
        () => client.observable.fetch(
          groq`*[
              _type in ["sanity.fileAsset", "sanity.imageAsset"]
              && references(*[_type == "media.tag" && name.current == $tagName]._id)
            ] {
              _id,
              _rev,
              opt
            }`,
          { tagName: tag.name.current }
        )
      ),
      // Create transaction which remove tag references from all matched assets and delete tag
      mergeMap((assets) => {
        const transaction = assets.map((asset) => ({
          id: asset._id,
          patch: {
            // this will cause the transaction to fail if the document has been modified since it was fetched.
            ifRevisionID: asset._rev,
            unset: [`opt.media.tags[_ref == "${tag._id}"]`]
          }
        })).reduce(
          (tx, patch) => tx.patch(patch.id, patch.patch),
          client.transaction()
        );
        return transaction.delete(tag._id), from(transaction.commit());
      }),
      // Dispatch complete action
      mergeMap(() => of(tagsSlice.actions.deleteComplete({ tagId: tag._id }))),
      catchError(
        (error) => of(
          tagsSlice.actions.deleteError({
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            },
            tag
          })
        )
      )
    );
  })
), tagsFetchEpic = (action$, state$, { client }) => action$.pipe(
  filter(tagsSlice.actions.fetchRequest.match),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const { query } = action.payload;
    return of(action).pipe(
      // Optionally throttle
      debugThrottle(state.debug.badConnection),
      // Fetch tags
      mergeMap(
        () => client.observable.fetch(query)
      ),
      // Dispatch complete action
      mergeMap((result) => {
        const { items } = result;
        return of(tagsSlice.actions.fetchComplete({ tags: items }));
      }),
      catchError(
        (error) => of(
          tagsSlice.actions.fetchError({
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            }
          })
        )
      )
    );
  })
), tagsListenerCreateQueueEpic = (action$) => action$.pipe(
  filter(tagsSlice.actions.listenerCreateQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const tags = actions?.map((action) => action.payload.tag);
    return of(tagsSlice.actions.listenerCreateQueueComplete({ tags }));
  })
), tagsListenerDeleteQueueEpic = (action$) => action$.pipe(
  filter(tagsSlice.actions.listenerDeleteQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const tagIds = actions?.map((action) => action.payload.tagId);
    return of(tagsSlice.actions.listenerDeleteQueueComplete({ tagIds }));
  })
), tagsListenerUpdateQueueEpic = (action$) => action$.pipe(
  filter(tagsSlice.actions.listenerUpdateQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const tags = actions?.map((action) => action.payload.tag);
    return of(tagsSlice.actions.listenerUpdateQueueComplete({ tags }));
  })
), tagsSortEpic = (action$) => action$.pipe(
  ofType(
    tagsSlice.actions.listenerCreateQueueComplete.type,
    tagsSlice.actions.listenerUpdateQueueComplete.type
  ),
  bufferTime(1e3),
  filter((actions) => actions.length > 0),
  mergeMap(() => of(tagsSlice.actions.sort()))
), tagsUpdateEpic = (action$, state$, { client }) => action$.pipe(
  filter(tagsSlice.actions.updateRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { closeDialogId, formData, tag } = action.payload;
    return of(action).pipe(
      // Optionally throttle
      debugThrottle(state.debug.badConnection),
      // Check if tag name is available, throw early if not
      checkTagName(client, formData?.name?.current),
      // Patch document (Update tag)
      mergeMap(
        () => from(
          client.patch(tag._id).set({ name: { _type: "slug", current: formData?.name.current } }).commit()
        )
      ),
      // Dispatch complete action
      mergeMap((updatedTag) => of(
        tagsSlice.actions.updateComplete({
          closeDialogId,
          tag: updatedTag
        })
      )),
      catchError(
        (error) => of(
          tagsSlice.actions.updateError({
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            },
            tag
          })
        )
      )
    );
  })
), selectTagsByIds = (state) => state.tags.byIds, selectTagsAllIds = (state) => state.tags.allIds, selectTags = createSelector(
  [selectTagsByIds, selectTagsAllIds],
  (byIds, allIds) => allIds.map((id) => byIds[id])
), selectTagById = createSelector(
  [selectTagsByIds, (_state, tagId) => tagId],
  (byIds, tagId) => byIds[tagId]
), selectTagSelectOptions = (asset) => (state) => {
  const tags = asset?.opt?.media?.tags?.reduce((acc, v) => {
    const tagItem = state.tags.byIds[v._ref];
    return tagItem?.tag && acc.push(tagItem), acc;
  }, []);
  return tags && tags?.length > 0 ? getTagSelectOptions(tags) : null;
}, tagsActions = { ...tagsSlice.actions };
var tagsReducer = tagsSlice.reducer;
const initialState$6 = {
  facets: [],
  query: ""
}, searchSlice = createSlice({
  name: "search",
  initialState: initialState$6,
  reducers: {
    // Add search facet
    facetsAdd(state, action) {
      state.facets.push({ ...action.payload.facet, id: uuid() });
    },
    // Clear all search facets
    facetsClear(state) {
      state.facets = [];
    },
    // Remove search facet by name
    facetsRemoveByName(state, action) {
      state.facets = state.facets.filter((facet) => facet.name !== action.payload.facetName);
    },
    // Remove search facet by name
    facetsRemoveByTag(state, action) {
      state.facets = state.facets.filter(
        (facet) => !(facet.name === "tag" && facet.type === "searchable" && (facet.operatorType === "references" || facet.operatorType === "doesNotReference") && facet.value?.value === action.payload.tagId)
      );
    },
    // Remove search facet by name
    facetsRemoveById(state, action) {
      state.facets = state.facets.filter((facet) => facet.id !== action.payload.facetId);
    },
    // Update an existing search facet
    facetsUpdate(state, action) {
      const { modifier, name, operatorType, value } = action.payload, facet = state.facets.find((f) => f.name === name);
      facet && (facet.type === "number" && modifier && (facet.modifier = modifier), operatorType && (facet.operatorType = operatorType), typeof value < "u" && (facet.value = value), state.facets = state.facets.filter((f) => f.name !== facet.name || f.id === facet.id));
    },
    // Update an existing search facet
    facetsUpdateById(state, action) {
      const { modifier, id, operatorType, value } = action.payload;
      state.facets.forEach((facet, index) => {
        facet.id === id && (facet.type === "number" && modifier && (facet.modifier = modifier), operatorType && (facet.operatorType = operatorType), typeof value < "u" && (state.facets[index].value = value));
      });
    },
    // Update existing search query
    querySet(state, action) {
      state.query = action.payload?.searchQuery;
    }
  }
}), searchFacetTagUpdateEpic = (action$, state$) => action$.pipe(
  filter(tagsActions.updateComplete.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { tag } = action.payload, currentSearchFacetTag = state.search.facets?.find((facet) => facet.name === "tag"), tagItem = state.tags.byIds[tag._id];
    return currentSearchFacetTag?.type === "searchable" && currentSearchFacetTag.value?.value === tag._id ? of(
      searchSlice.actions.facetsUpdate({
        name: "tag",
        value: {
          label: tagItem?.tag?.name?.current,
          value: tagItem?.tag?._id
        }
      })
    ) : EMPTY;
  })
), selectIsSearchFacetTag = createSelector(
  [
    (state) => state.search.facets,
    (_state, tagId) => tagId
  ],
  (searchFacets, tagId) => searchFacets.some(
    (facet) => facet.name === "tag" && facet.type === "searchable" && (facet.operatorType === "references" || facet.operatorType === "doesNotReference") && facet.value?.value === tagId
  )
), searchActions = { ...searchSlice.actions };
var searchReducer = searchSlice.reducer;
const UPLOADS_ACTIONS = {
  uploadComplete: createAction(
    "uploads/uploadComplete",
    function({ asset }) {
      return {
        payload: { asset }
      };
    }
  )
}, defaultOrder = ORDER_OPTIONS[0], initialState$5 = {
  allIds: [],
  assetTypes: [],
  byIds: {},
  fetchCount: -1,
  fetching: !1,
  fetchingError: void 0,
  lastPicked: void 0,
  order: {
    direction: defaultOrder.direction,
    field: defaultOrder.field,
    title: getOrderTitle(defaultOrder.field, defaultOrder.direction)
  },
  pageIndex: 0,
  pageSize: 100,
  // totalCount: -1,
  view: "grid"
}, assetsSlice = createSlice({
  name: "assets",
  initialState: initialState$5,
  extraReducers: (builder) => {
    builder.addCase(UPLOADS_ACTIONS.uploadComplete, (state, action) => {
      const { asset } = action.payload;
      state.byIds[asset._id] = {
        _type: "asset",
        asset,
        picked: !1,
        updating: !1
      };
    }).addCase(ASSETS_ACTIONS.tagsAddComplete, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !1;
      });
    }).addCase(ASSETS_ACTIONS.tagsAddError, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !1;
      });
    }).addCase(ASSETS_ACTIONS.tagsAddRequest, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !0;
      });
    }).addCase(ASSETS_ACTIONS.tagsRemoveComplete, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !1;
      });
    }).addCase(ASSETS_ACTIONS.tagsRemoveError, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !1;
      });
    }).addCase(ASSETS_ACTIONS.tagsRemoveRequest, (state, action) => {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset.asset._id].updating = !0;
      });
    });
  },
  reducers: {
    // Clear asset order
    clear(state) {
      state.allIds = [];
    },
    // Remove assets and update page index
    deleteComplete(state, action) {
      const { assetIds } = action.payload;
      assetIds?.forEach((id) => {
        const deleteIndex = state.allIds.indexOf(id);
        deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), delete state.byIds[id];
      }), state.pageIndex = Math.floor(state.allIds.length / state.pageSize) - 1;
    },
    deleteError(state, action) {
      const { assetIds, error } = action.payload, itemErrors = error?.response?.body?.error?.items?.map(
        (item) => item.error
      );
      assetIds?.forEach((id) => {
        state.byIds[id].updating = !1;
      }), itemErrors?.forEach((item) => {
        state.byIds[item.id].error = item.description;
      });
    },
    deleteRequest(state, action) {
      const { assets } = action.payload;
      assets.forEach((asset) => {
        state.byIds[asset?._id].updating = !0;
      }), Object.keys(state.byIds).forEach((key) => {
        delete state.byIds[key].error;
      });
    },
    fetchComplete(state, action) {
      const assets = action.payload?.assets || [];
      assets && assets.forEach((asset) => {
        state.allIds.includes(asset._id) || state.allIds.push(asset._id), state.byIds[asset._id] = {
          _type: "asset",
          asset,
          picked: !1,
          updating: !1
        };
      }), state.fetching = !1, state.fetchCount = assets.length || 0, delete state.fetchingError;
    },
    fetchError(state, action) {
      const error = action.payload;
      state.fetching = !1, state.fetchingError = error;
    },
    fetchRequest: {
      reducer: (state, _action) => {
        state.fetching = !0, delete state.fetchingError;
      },
      prepare: ({
        params = {},
        queryFilter,
        selector = "",
        sort = groq`order(_updatedAt desc)`
      }) => {
        const query = groq`
          {
            "items": *[${queryFilter}] {
              _id,
              _type,
              _createdAt,
              _updatedAt,
              altText,
              creditLine,
              description,
              extension,
              metadata {
                dimensions,
                exif,
                isOpaque,
              },
              mimeType,
              opt {
                media
              },
              originalFilename,
              size,
              source {
                name
              },
              title,
              url
            } ${sort || selector ? "|" : ""} ${sort} ${selector},
          }
        `;
        return { payload: { params, query } };
      }
    },
    insertUploads(state, action) {
      const { results } = action.payload;
      Object.entries(results).forEach(([hash, assetId]) => {
        assetId && !state.allIds.includes(hash) && state.allIds.push(assetId);
      });
    },
    listenerCreateQueue(_state, _action) {
    },
    listenerCreateQueueComplete(state, action) {
      const { assets } = action.payload;
      assets?.forEach((asset) => {
        state.byIds[asset?._id]?.asset && (state.byIds[asset._id].asset = asset);
      });
    },
    listenerDeleteQueue(_state, _action) {
    },
    listenerDeleteQueueComplete(state, action) {
      const { assetIds } = action.payload;
      assetIds?.forEach((assetId) => {
        const deleteIndex = state.allIds.indexOf(assetId);
        deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), delete state.byIds[assetId];
      });
    },
    listenerUpdateQueue(_state, _action) {
    },
    listenerUpdateQueueComplete(state, action) {
      const { assets } = action.payload;
      assets?.forEach((asset) => {
        state.byIds[asset?._id]?.asset && (state.byIds[asset._id].asset = asset);
      });
    },
    loadNextPage() {
    },
    loadPageIndex(state, action) {
      state.pageIndex = action.payload.pageIndex;
    },
    orderSet(state, action) {
      state.order = action.payload?.order, state.pageIndex = 0;
    },
    pick(state, action) {
      const { assetId, picked } = action.payload;
      state.byIds[assetId].picked = picked, state.lastPicked = picked ? assetId : void 0;
    },
    pickAll(state) {
      state.allIds.forEach((id) => {
        state.byIds[id].picked = !0;
      });
    },
    pickClear(state) {
      state.lastPicked = void 0, Object.values(state.byIds).forEach((asset) => {
        state.byIds[asset.asset._id].picked = !1;
      });
    },
    pickRange(state, action) {
      const startIndex = state.allIds.findIndex((id) => id === action.payload.startId), endIndex = state.allIds.findIndex((id) => id === action.payload.endId), indices = [startIndex, endIndex].sort((a, b) => a - b);
      state.allIds.slice(indices[0], indices[1] + 1).forEach((key) => {
        state.byIds[key].picked = !0;
      }), state.lastPicked = state.allIds[endIndex];
    },
    sort(state) {
      state.allIds.sort((a, b) => {
        const tagA = state.byIds[a].asset[state.order.field], tagB = state.byIds[b].asset[state.order.field];
        return tagA < tagB ? state.order.direction === "asc" ? -1 : 1 : tagA > tagB ? state.order.direction === "asc" ? 1 : -1 : 0;
      });
    },
    updateComplete(state, action) {
      const { asset } = action.payload;
      state.byIds[asset._id].updating = !1, state.byIds[asset._id].asset = asset;
    },
    updateError(state, action) {
      const { asset, error } = action.payload, assetId = asset?._id;
      state.byIds[assetId].error = error.message, state.byIds[assetId].updating = !1;
    },
    updateRequest(state, action) {
      const assetId = action.payload?.asset?._id;
      state.byIds[assetId].updating = !0;
    },
    viewSet(state, action) {
      state.view = action.payload?.view;
    }
  }
}), assetsDeleteEpic = (action$, _state$, { client }) => action$.pipe(
  filter(assetsActions.deleteRequest.match),
  mergeMap((action) => {
    const { assets } = action.payload, assetIds = assets.map((asset) => asset._id);
    return of(assets).pipe(
      mergeMap(
        () => client.observable.delete({
          query: groq`*[_id in ${JSON.stringify(assetIds)}]`
        })
      ),
      mergeMap(() => of(assetsActions.deleteComplete({ assetIds }))),
      catchError((error) => of(assetsActions.deleteError({ assetIds, error })))
    );
  })
), assetsFetchEpic = (action$, state$, { client }) => action$.pipe(
  filter(assetsActions.fetchRequest.match),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const params = action.payload?.params, query = action.payload?.query;
    return of(action).pipe(
      debugThrottle(state.debug.badConnection),
      mergeMap(
        () => client.observable.fetch(query, params)
      ),
      mergeMap((result) => {
        const {
          items
          // totalCount
        } = result;
        return of(assetsActions.fetchComplete({ assets: items }));
      }),
      catchError(
        (error) => of(
          assetsActions.fetchError({
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          })
        )
      )
    );
  })
), assetsFetchPageIndexEpic = (action$, state$) => action$.pipe(
  filter(assetsActions.loadPageIndex.match),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const pageSize = state.assets.pageSize, start = action.payload.pageIndex * pageSize, end = start + pageSize, documentId = state?.selected.document?._id, documentAssetIds = state?.selected?.documentAssetIds, constructedFilter = constructFilter({
      assetTypes: state.assets.assetTypes,
      searchFacets: state.search.facets,
      searchQuery: state.search.query
    }), params = {
      ...documentId ? { documentId } : {},
      documentAssetIds
    };
    return of(
      assetsActions.fetchRequest({
        params,
        queryFilter: constructedFilter,
        selector: groq`[${start}...${end}]`,
        sort: groq`order(${state.assets?.order?.field} ${state.assets?.order?.direction})`
      })
    );
  })
), assetsFetchNextPageEpic = (action$, state$) => action$.pipe(
  filter(assetsActions.loadNextPage.match),
  withLatestFrom(state$),
  switchMap(
    ([_action, state]) => of(assetsActions.loadPageIndex({ pageIndex: state.assets.pageIndex + 1 }))
  )
), assetsFetchAfterDeleteAllEpic = (action$, state$) => action$.pipe(
  filter(assetsActions.deleteComplete.match),
  withLatestFrom(state$),
  switchMap(([_action, state]) => {
    if (state.assets.allIds.length === 0) {
      const nextPageIndex = Math.floor(state.assets.allIds.length / state.assets.pageSize);
      return of(assetsActions.loadPageIndex({ pageIndex: nextPageIndex }));
    }
    return EMPTY;
  })
), filterAssetWithoutTag = (tag) => (asset) => (asset?.asset?.opt?.media?.tags?.findIndex((t) => t._ref === tag?._id) ?? -1) < 0, patchOperationTagAppend = ({ tag }) => (patch) => patch.setIfMissing({ opt: {} }).setIfMissing({ "opt.media": {} }).setIfMissing({ "opt.media.tags": [] }).append("opt.media.tags", [{ _key: nanoid(), _ref: tag?._id, _type: "reference", _weak: !0 }]), patchOperationTagUnset = ({ asset, tag }) => (patch) => patch.ifRevisionId(asset?.asset?._rev).unset([`opt.media.tags[_ref == "${tag._id}"]`]), assetsOrderSetEpic = (action$) => action$.pipe(
  filter(assetsActions.orderSet.match),
  mergeMap(() => of(
    assetsActions.clear(),
    //
    assetsActions.loadPageIndex({ pageIndex: 0 })
  ))
), assetsSearchEpic = (action$) => action$.pipe(
  ofType(
    searchActions.facetsAdd.type,
    searchActions.facetsClear.type,
    searchActions.facetsRemoveById.type,
    searchActions.facetsRemoveByName.type,
    searchActions.facetsRemoveByTag.type,
    searchActions.facetsUpdate.type,
    searchActions.facetsUpdateById.type,
    searchActions.querySet.type
  ),
  debounceTime(400),
  mergeMap(() => of(
    assetsActions.clear(),
    //
    assetsActions.loadPageIndex({ pageIndex: 0 })
  ))
), assetsListenerCreateQueueEpic = (action$) => action$.pipe(
  filter(assetsActions.listenerCreateQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const assets = actions?.map((action) => action.payload.asset);
    return of(assetsActions.listenerCreateQueueComplete({ assets }));
  })
), assetsListenerDeleteQueueEpic = (action$) => action$.pipe(
  filter(assetsActions.listenerDeleteQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const assetIds = actions?.map((action) => action.payload.assetId);
    return of(assetsActions.listenerDeleteQueueComplete({ assetIds }));
  })
), assetsListenerUpdateQueueEpic = (action$) => action$.pipe(
  filter(assetsActions.listenerUpdateQueue.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const assets = actions?.map((action) => action.payload.asset);
    return of(assetsActions.listenerUpdateQueueComplete({ assets }));
  })
), assetsSortEpic = (action$) => action$.pipe(
  ofType(
    assetsActions.insertUploads.type,
    assetsActions.listenerUpdateQueueComplete.type,
    assetsActions.updateComplete.type
  ),
  mergeMap(() => of(assetsActions.sort()))
), assetsTagsAddEpic = (action$, state$, { client }) => action$.pipe(
  filter(ASSETS_ACTIONS.tagsAddRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { assets, tag } = action.payload;
    return of(action).pipe(
      // Optionally throttle
      debugThrottle(state.debug.badConnection),
      // Add tag references to all picked assets
      mergeMap(() => {
        const transaction = (selectAssetsPicked(state)?.filter(filterAssetWithoutTag(tag))).reduce(
          (tx, pickedAsset) => tx.patch(pickedAsset?.asset?._id, patchOperationTagAppend({ tag })),
          client.transaction()
        );
        return from(transaction.commit());
      }),
      // Dispatch complete action
      mergeMap(() => of(ASSETS_ACTIONS.tagsAddComplete({ assets, tag }))),
      catchError(
        (error) => of(
          ASSETS_ACTIONS.tagsAddError({
            assets,
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            },
            tag
          })
        )
      )
    );
  })
), assetsTagsRemoveEpic = (action$, state$, { client }) => action$.pipe(
  filter(ASSETS_ACTIONS.tagsRemoveRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { assets, tag } = action.payload;
    return of(action).pipe(
      // Optionally throttle
      debugThrottle(state.debug.badConnection),
      // Remove tag references from all picked assets
      mergeMap(() => {
        const transaction = selectAssetsPicked(state).reduce(
          (tx, pickedAsset) => tx.patch(pickedAsset?.asset?._id, patchOperationTagUnset({ asset: pickedAsset, tag })),
          client.transaction()
        );
        return from(transaction.commit());
      }),
      // Dispatch complete action
      mergeMap(() => of(ASSETS_ACTIONS.tagsRemoveComplete({ assets, tag }))),
      catchError(
        (error) => of(
          ASSETS_ACTIONS.tagsRemoveError({
            assets,
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            },
            tag
          })
        )
      )
    );
  })
), assetsUnpickEpic = (action$) => action$.pipe(
  ofType(
    assetsActions.orderSet.type,
    assetsActions.viewSet.type,
    searchActions.facetsAdd.type,
    searchActions.facetsClear.type,
    searchActions.facetsRemoveById.type,
    searchActions.facetsRemoveByName.type,
    searchActions.facetsRemoveByTag.type,
    searchActions.facetsUpdate.type,
    searchActions.facetsUpdateById.type,
    searchActions.querySet.type
  ),
  mergeMap(() => of(assetsActions.pickClear()))
), assetsUpdateEpic = (action$, state$, { client }) => action$.pipe(
  filter(assetsActions.updateRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { asset, closeDialogId, formData } = action.payload;
    return of(action).pipe(
      debugThrottle(state.debug.badConnection),
      mergeMap(
        () => from(
          client.patch(asset._id).setIfMissing({ opt: {} }).setIfMissing({ "opt.media": {} }).set(formData).commit()
        )
      ),
      mergeMap(
        (updatedAsset) => of(
          assetsActions.updateComplete({
            asset: updatedAsset,
            closeDialogId
          })
        )
      ),
      catchError(
        (error) => of(
          assetsActions.updateError({
            asset,
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            }
          })
        )
      )
    );
  })
), selectAssetsByIds = (state) => state.assets.byIds, selectAssetsAllIds = (state) => state.assets.allIds, selectAssetById = createSelector(
  [
    (state) => state.assets.byIds,
    (_state, assetId) => assetId
  ],
  (byIds, assetId) => byIds[assetId] || void 0
), selectAssets = createSelector(
  [selectAssetsByIds, selectAssetsAllIds],
  (byIds, allIds) => allIds.map((id) => byIds[id])
), selectAssetsLength = createSelector([selectAssets], (assets) => assets.length), selectAssetsPicked = createSelector(
  [selectAssets],
  (assets) => assets.filter((item) => item?.picked)
), selectAssetsPickedLength = createSelector(
  [selectAssetsPicked],
  (assetsPicked) => assetsPicked.length
), assetsActions = { ...assetsSlice.actions };
var assetsReducer = assetsSlice.reducer;
const customScrollbar = css`
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: var(--card-border-color);
    background-clip: padding-box;

    &:hover {
      background: var(--card-muted-fg-color);
      background-clip: padding-box;
    }
  }
`, GlobalStyle = createGlobalStyle`
  .media__custom-scrollbar {
    ${customScrollbar}
  }

  // @sanity/ui overrides

  // Custom scrollbar on Box (used in Dialogs)
  div[data-ui="Box"] {
    ${customScrollbar}
  }

  // Dialog background color
  div[data-ui="Dialog"] {
    background-color: rgba(15, 17, 18, 0.9);
  }

`, useTypedSelector = useSelector, initialState$4 = {
  items: []
}, dialogSlice = createSlice({
  name: "dialog",
  initialState: initialState$4,
  extraReducers: (builder) => {
    builder.addCase(DIALOG_ACTIONS.showTagCreate, (state) => {
      state.items.push({
        id: "tagCreate",
        type: "tagCreate"
      });
    }), builder.addCase(DIALOG_ACTIONS.showTagEdit, (state, action) => {
      const { tagId } = action.payload;
      state.items.push({
        id: tagId,
        tagId,
        type: "tagEdit"
      });
    });
  },
  reducers: {
    // Clear all dialogs
    clear(state) {
      state.items = [];
    },
    // Add newly created inline tag to assetEdit dialog
    inlineTagCreate(state, action) {
      const { assetId, tag } = action.payload;
      state.items.forEach((item) => {
        item.type === "assetEdit" && item.assetId === assetId && (item.lastCreatedTag = {
          label: tag.name.current,
          value: tag._id
        });
      });
    },
    // Remove inline tags from assetEdit dialog
    inlineTagRemove(state, action) {
      const { tagIds } = action.payload;
      state.items.forEach((item) => {
        item.type === "assetEdit" && (item.lastRemovedTagIds = tagIds);
      });
    },
    // Remove dialog by id
    remove(state, action) {
      const id = action.payload?.id;
      state.items = state.items.filter((item) => item.id !== id);
    },
    showConfirmAssetsTagAdd(state, action) {
      const { assetsPicked, closeDialogId, tag } = action.payload, suffix = `${assetsPicked.length} ${pluralize("asset", assetsPicked.length)}`;
      state.items.push({
        closeDialogId,
        confirmCallbackAction: ASSETS_ACTIONS.tagsAddRequest({
          assets: assetsPicked,
          tag
        }),
        confirmText: `Yes, add tag to ${suffix}`,
        title: `Add tag ${tag.name.current} to ${suffix}?`,
        id: "confirm",
        headerTitle: "Confirm tag addition",
        tone: "primary",
        type: "confirm"
      });
    },
    showConfirmAssetsTagRemove(state, action) {
      const { assetsPicked, closeDialogId, tag } = action.payload, suffix = `${assetsPicked.length} ${pluralize("asset", assetsPicked.length)}`;
      state.items.push({
        closeDialogId,
        confirmCallbackAction: ASSETS_ACTIONS.tagsRemoveRequest({ assets: assetsPicked, tag }),
        confirmText: `Yes, remove tag from ${suffix}`,
        headerTitle: "Confirm tag removal",
        id: "confirm",
        title: `Remove tag ${tag.name.current} from ${suffix}?`,
        tone: "critical",
        type: "confirm"
      });
    },
    showConfirmDeleteAssets(state, action) {
      const { assets, closeDialogId } = action.payload, suffix = `${assets.length} ${pluralize("asset", assets.length)}`;
      state.items.push({
        closeDialogId,
        confirmCallbackAction: assetsActions.deleteRequest({
          assets: assets.map((assetItem) => assetItem.asset)
        }),
        confirmText: `Yes, delete ${suffix}`,
        description: "This operation cannot be reversed. Are you sure you want to continue?",
        title: `Permanently delete ${suffix}?`,
        id: "confirm",
        headerTitle: "Confirm deletion",
        tone: "critical",
        type: "confirm"
      });
    },
    showConfirmDeleteTag(state, action) {
      const { closeDialogId, tag } = action.payload, suffix = "tag";
      state.items.push({
        closeDialogId,
        confirmCallbackAction: tagsActions.deleteRequest({ tag }),
        confirmText: `Yes, delete ${suffix}`,
        description: "This operation cannot be reversed. Are you sure you want to continue?",
        title: `Permanently delete ${suffix}?`,
        id: "confirm",
        headerTitle: "Confirm deletion",
        tone: "critical",
        type: "confirm"
      });
    },
    showAssetEdit(state, action) {
      const { assetId } = action.payload;
      state.items.push({
        assetId,
        id: assetId,
        type: "assetEdit"
      });
    },
    showSearchFacets(state) {
      state.items.push({
        id: "searchFacets",
        type: "searchFacets"
      });
    },
    showTags(state) {
      state.items.push({
        id: "tags",
        type: "tags"
      });
    }
  }
}), dialogClearOnAssetUpdateEpic = (action$) => action$.pipe(
  ofType(
    assetsActions.deleteComplete.type,
    assetsActions.updateComplete.type,
    tagsActions.deleteComplete.type,
    tagsActions.updateComplete.type
  ),
  filter(
    (action) => !!action?.payload?.closeDialogId
  ),
  mergeMap((action) => {
    const dialogId = action?.payload?.closeDialogId;
    return dialogId ? of(dialogSlice.actions.remove({ id: dialogId })) : EMPTY;
  })
), dialogTagCreateEpic = (action$) => action$.pipe(
  filter(tagsActions.createComplete.match),
  mergeMap((action) => {
    const { assetId, tag } = action?.payload;
    return assetId ? of(dialogSlice.actions.inlineTagCreate({ tag, assetId })) : tag._id ? of(dialogSlice.actions.remove({ id: "tagCreate" })) : EMPTY;
  })
), dialogTagDeleteEpic = (action$) => action$.pipe(
  filter(tagsActions.listenerDeleteQueueComplete.match),
  mergeMap((action) => {
    const { tagIds } = action?.payload;
    return of(dialogSlice.actions.inlineTagRemove({ tagIds }));
  })
), dialogActions = { ...dialogSlice.actions };
var dialogReducer = dialogSlice.reducer;
const ButtonViewGroup = () => {
  const dispatch = useDispatch(), view = useTypedSelector((state) => state.assets.view);
  return /* @__PURE__ */ jsxs(Inline, { space: 0, style: { whiteSpace: "nowrap" }, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        fontSize: 1,
        icon: ThLargeIcon,
        mode: view === "grid" ? "default" : "ghost",
        onClick: () => dispatch(assetsActions.viewSet({ view: "grid" })),
        style: {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        fontSize: 1,
        icon: ThListIcon,
        mode: view === "table" ? "default" : "ghost",
        onClick: () => dispatch(assetsActions.viewSet({ view: "table" })),
        style: {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0
        }
      }
    )
  ] });
};
function usePortalPopoverProps() {
  const portal = usePortal();
  return {
    animate: !0,
    constrainSize: !0,
    floatingBoundary: portal.element,
    portal: !0,
    referenceBoundary: portal.element
  };
}
const OrderSelect = () => {
  const dispatch = useDispatch(), order = useTypedSelector((state) => state.assets.order), popoverProps = usePortalPopoverProps();
  return /* @__PURE__ */ jsx(
    MenuButton,
    {
      button: /* @__PURE__ */ jsx(
        Button,
        {
          fontSize: 1,
          icon: SortIcon,
          mode: "bleed",
          padding: 3,
          text: getOrderTitle(order.field, order.direction)
        }
      ),
      id: "order",
      menu: /* @__PURE__ */ jsx(Menu$2, { children: ORDER_OPTIONS?.map((item, index) => {
        if (item) {
          const selected = order.field === item.field && order.direction === item.direction;
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              disabled: selected,
              fontSize: 1,
              iconRight: selected,
              onClick: () => dispatch(
                assetsActions.orderSet({
                  order: { direction: item.direction, field: item.field }
                })
              ),
              padding: 2,
              selected,
              space: 4,
              style: { minWidth: "200px" },
              text: getOrderTitle(item.field, item.direction)
            },
            index
          );
        }
        return /* @__PURE__ */ jsx(MenuDivider, {}, index);
      }) }),
      popover: popoverProps
    }
  );
}, Progress = (props) => {
  const { loading } = props, { animationDuration, isFinished, progress } = useNProgress({
    animationDuration: 300,
    isAnimating: loading
  });
  return /* @__PURE__ */ jsx(
    Box,
    {
      style: {
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`
      },
      children: /* @__PURE__ */ jsx(
        Box,
        {
          style: {
            height: "1px",
            background: "rgba(255, 255, 255, 0.5)",
            position: "absolute",
            left: 0,
            top: 0,
            transition: `width ${animationDuration}ms linear`,
            width: `${progress * 100}%`
          }
        }
      )
    }
  );
}, SCHEME_COLORS = {
  bg: {
    dark: hues.gray[950].hex,
    light: hues.gray[50].hex
  },
  bg2: {
    dark: hues.gray[900].hex,
    light: hues.gray[100].hex
  },
  inputEnabledBorder: {
    dark: studioTheme.color.dark.default.input.default.enabled.border,
    light: studioTheme.color.light.default.input.default.enabled.border
  },
  inputHoveredBorder: {
    dark: studioTheme.color.dark.default.input.default.hovered.border,
    light: studioTheme.color.light.default.input.default.hovered.border
  },
  mutedHoveredBg: {
    dark: studioTheme.color.dark.primary.muted.primary.hovered.bg,
    light: studioTheme.color.light.primary.muted.primary.hovered.bg
  },
  mutedHoveredFg: {
    dark: studioTheme.color.dark.primary.muted.primary.hovered.fg,
    light: studioTheme.color.light.primary.muted.primary.hovered.fg
  },
  mutedSelectedBg: {
    dark: studioTheme.color.dark.primary.muted.primary.selected.bg,
    light: studioTheme.color.light.primary.muted.primary.selected.bg
  },
  spotBlue: {
    dark: studioTheme.color.dark.primary.spot.blue,
    light: studioTheme.color.light.primary.spot.blue
  }
};
function getSchemeColor(scheme, colorKey) {
  return SCHEME_COLORS[colorKey]?.[scheme];
}
const Container$1 = styled(Box)(({ $scheme, theme }) => css`
    background: ${getSchemeColor($scheme, "bg")};
    border-radius: ${rem(theme.sanity.radius[2])};
  `), SearchFacet = (props) => {
  const { children, facet } = props, scheme = useColorSchemeValue(), dispatch = useDispatch(), handleClose = () => {
    dispatch(searchActions.facetsRemoveById({ facetId: facet.id }));
  };
  return /* @__PURE__ */ jsx(Container$1, { padding: [2, 2, 1], $scheme: scheme, children: /* @__PURE__ */ jsxs(Flex, { align: ["flex-start", "flex-start", "center"], direction: ["column", "column", "row"], children: [
    /* @__PURE__ */ jsx(Box, { paddingBottom: [3, 3, 0], paddingLeft: 1, paddingRight: 2, paddingTop: [1, 1, 0], children: /* @__PURE__ */ jsx(
      Label,
      {
        size: 0,
        style: {
          whiteSpace: "nowrap"
        },
        children: facet.title
      }
    ) }),
    /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
      children,
      /* @__PURE__ */ jsx(Box, { marginLeft: 1, paddingX: 2, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 0, children: /* @__PURE__ */ jsx(CloseIcon, { onClick: handleClose }) }) })
    ] })
  ] }) });
}, TextInputNumber = (props) => {
  const { onValueChange, value, ...remainingProps } = props;
  return /* @__PURE__ */ jsx(
    TextInput,
    {
      ...remainingProps,
      onChange: (e) => {
        const val = e.target.value;
        (val === "" || /^[0-9\b]+$/.test(val)) && onValueChange(parseInt(val, 10) || "");
      },
      value: value ?? ""
    }
  );
}, SearchFacetNumber = ({ facet }) => {
  const dispatch = useDispatch(), popoverProps = usePortalPopoverProps(), modifiers = facet?.modifiers, selectedModifier = facet?.modifier ? modifiers?.find((modifier) => modifier.name === facet?.modifier) : modifiers?.[0], handleOperatorItemClick = (operatorType) => {
    dispatch(searchActions.facetsUpdateById({ id: facet.id, operatorType }));
  }, handleModifierClick = (modifier) => {
    dispatch(searchActions.facetsUpdateById({ id: facet.id, modifier: modifier.name }));
  }, handleValueChange = (value) => {
    dispatch(searchActions.facetsUpdateById({ id: facet.id, value }));
  }, selectedOperatorType = facet.operatorType ?? "greaterThan";
  return /* @__PURE__ */ jsxs(SearchFacet, { facet, children: [
    facet?.operatorTypes && /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            iconRight: SelectIcon,
            padding: 2,
            text: operators[selectedOperatorType].label
          }
        ),
        id: "operators",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: facet.operatorTypes.map((operatorType, index) => operatorType ? /* @__PURE__ */ jsx(
          MenuItem,
          {
            disabled: operatorType === selectedOperatorType,
            fontSize: 1,
            onClick: () => handleOperatorItemClick(operatorType),
            padding: 2,
            text: operators[operatorType].label
          },
          operatorType
        ) : /* @__PURE__ */ jsx(MenuDivider, {}, index)) }),
        popover: popoverProps
      }
    ),
    /* @__PURE__ */ jsx(Box, { marginX: 1, style: { maxWidth: "50px" }, children: /* @__PURE__ */ jsx(
      TextInputNumber,
      {
        fontSize: 1,
        onValueChange: handleValueChange,
        padding: 2,
        radius: 2,
        width: 2,
        value: facet?.value
      }
    ) }),
    modifiers && /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            iconRight: SelectIcon,
            padding: 2,
            text: selectedModifier?.title
          }
        ),
        id: "modifier",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: modifiers.map((modifier) => {
          const selected = modifier.name === facet.modifier;
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              disabled: selected,
              fontSize: 1,
              onClick: () => handleModifierClick(modifier),
              padding: 2,
              text: modifier.title
            },
            modifier.name
          );
        }) }),
        popover: popoverProps
      }
    )
  ] });
}, SearchFacetSelect = ({ facet }) => {
  const dispatch = useDispatch(), popoverProps = usePortalPopoverProps(), options = facet?.options, selectedItem = options?.find((v) => v.name === facet?.value), handleListItemClick = (option) => {
    dispatch(searchActions.facetsUpdate({ name: facet.name, value: option.name }));
  }, handleOperatorItemClick = (operatorType) => {
    dispatch(searchActions.facetsUpdate({ name: facet.name, operatorType }));
  }, selectedOperatorType = facet?.operatorType ?? "is";
  return /* @__PURE__ */ jsxs(SearchFacet, { facet, children: [
    facet?.operatorTypes && /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(Box, { marginRight: 1, children: /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            iconRight: SelectIcon,
            padding: 2,
            text: operators[selectedOperatorType].label
          }
        ) }),
        id: "operators",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: facet.operatorTypes.map((operatorType, index) => operatorType ? /* @__PURE__ */ jsx(
          MenuItem,
          {
            disabled: operatorType === selectedOperatorType,
            fontSize: 1,
            onClick: () => handleOperatorItemClick(operatorType),
            padding: 2,
            text: operators[operatorType].label
          },
          operatorType
        ) : /* @__PURE__ */ jsx(MenuDivider, {}, index)) }),
        popover: popoverProps
      }
    ),
    /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(Button, { fontSize: 1, iconRight: SelectIcon, padding: 2, text: selectedItem?.title }),
        id: "list",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: options?.map((item, index) => {
          const selected = item.name === selectedItem?.name;
          return /* @__PURE__ */ jsx(
            MenuItem,
            {
              disabled: selected,
              fontSize: 1,
              onClick: () => handleListItemClick(options[index]),
              padding: 2,
              text: item.title
            },
            item.name
          );
        }) }),
        popover: popoverProps
      }
    )
  ] });
}, SearchFacetString = ({ facet }) => {
  const dispatch = useDispatch(), popoverProps = usePortalPopoverProps(), handleOperatorItemClick = (operatorType) => {
    dispatch(searchActions.facetsUpdateById({ id: facet.id, operatorType }));
  }, handleChange = (e) => {
    dispatch(searchActions.facetsUpdateById({ id: facet.id, value: e.target.value }));
  }, selectedOperatorType = facet.operatorType;
  return /* @__PURE__ */ jsxs(SearchFacet, { facet, children: [
    facet?.operatorTypes && /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            iconRight: SelectIcon,
            padding: 2,
            text: operators[selectedOperatorType].label
          }
        ),
        id: "operators",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: facet.operatorTypes.map((operatorType, index) => operatorType ? /* @__PURE__ */ jsx(
          MenuItem,
          {
            disabled: operatorType === selectedOperatorType,
            fontSize: 1,
            onClick: () => handleOperatorItemClick(operatorType),
            padding: 2,
            text: operators[operatorType].label
          },
          operatorType
        ) : /* @__PURE__ */ jsx(MenuDivider, {}, index)) }),
        popover: popoverProps
      }
    ),
    !operators[selectedOperatorType].hideInput && /* @__PURE__ */ jsx(Box, { marginLeft: 1, style: { maxWidth: "125px" }, children: /* @__PURE__ */ jsx(
      TextInput,
      {
        fontSize: 1,
        onChange: handleChange,
        padding: 2,
        radius: 2,
        width: 2,
        value: facet?.value
      }
    ) })
  ] });
}, {
  fonts: {
    text: { sizes: themeTextSizes }
  },
  radius: themeRadius$1,
  space: themeSpace$1
} = studioTheme, reactSelectStyles$1 = (scheme) => ({
  control: (styles, { isDisabled, isFocused }) => {
    let boxShadow = "inset 0 0 0 1px var(--card-border-color)";
    return isFocused && (boxShadow = `inset 0 0 0 1px ${getSchemeColor(scheme, "inputEnabledBorder")},
        0 0 0 1px ${getSchemeColor(scheme, "bg2")},
        0 0 0 3px var(--card-focus-ring-color) !important`), {
      ...styles,
      backgroundColor: "var(--card-bg-color)",
      color: "inherit",
      border: "none",
      borderRadius: themeRadius$1[2],
      boxShadow,
      fontSize: themeTextSizes[1].fontSize,
      minHeight: "25px",
      opacity: isDisabled ? 0.5 : "inherit",
      outline: "none",
      transition: "none",
      "&:hover": {
        boxShadow: `inset 0 0 0 1px ${getSchemeColor(scheme, "inputHoveredBorder")}`
      }
    };
  },
  input: (styles) => ({
    ...styles,
    color: "var(--card-fg-color)",
    fontFamily: studioTheme.fonts.text.family,
    fontSize: themeTextSizes[1].fontSize,
    marginLeft: rem(themeSpace$1[2])
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    fontFamily: studioTheme.fonts.text.family,
    fontSize: themeTextSizes[1].fontSize,
    lineHeight: "1em"
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? getSchemeColor(scheme, "spotBlue") : "transparent",
    borderRadius: themeRadius$1[2],
    color: isFocused ? getSchemeColor(scheme, "bg") : "inherit",
    fontSize: themeTextSizes[1].fontSize,
    lineHeight: "1em",
    margin: 0,
    padding: rem(themeSpace$1[1]),
    "&:hover": {
      backgroundColor: getSchemeColor(scheme, "spotBlue"),
      color: getSchemeColor(scheme, "bg")
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: themeTextSizes[1].fontSize,
    marginLeft: rem(themeSpace$1[2]),
    paddingLeft: 0
  }),
  singleValue: (styles) => ({
    ...styles,
    alignItems: "center",
    display: "inline-flex",
    height: "100%",
    marginLeft: rem(themeSpace$1[2])
  }),
  valueContainer: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  })
}), ClearIndicator = (props) => /* @__PURE__ */ jsx(components.ClearIndicator, { ...props, children: /* @__PURE__ */ jsx(
  Box,
  {
    paddingRight: 1,
    style: {
      transform: "scale(0.85)"
    },
    children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 0, children: /* @__PURE__ */ jsx(CloseIcon, {}) })
  }
) }), Menu$1 = (props) => /* @__PURE__ */ jsx(components.Menu, { ...props, children: /* @__PURE__ */ jsx(Card, { radius: 1, shadow: 2, children: props.children }) }), MenuList$1 = (props) => {
  const { children } = props, MAX_ROWS = 5, OPTION_HEIGHT = 33;
  if (Array.isArray(children)) {
    const height = children.length > MAX_ROWS ? OPTION_HEIGHT * MAX_ROWS : children.length * OPTION_HEIGHT;
    return /* @__PURE__ */ jsx(
      Virtuoso,
      {
        className: "media__custom-scrollbar",
        itemContent: (index) => {
          const item = children[index];
          return /* @__PURE__ */ jsx(Option$1, { ...item.props });
        },
        style: { height },
        totalCount: children.length
      }
    );
  }
  return /* @__PURE__ */ jsx(components.MenuList, { ...props, children });
}, NoOptionsMessage = (props) => /* @__PURE__ */ jsx(components.NoOptionsMessage, { ...props, children: props.children }), Option$1 = (props) => /* @__PURE__ */ jsx(Box, { padding: 1, children: /* @__PURE__ */ jsx(components.Option, { ...props, children: /* @__PURE__ */ jsx(Box, { paddingY: 1, children: /* @__PURE__ */ jsx(Text, { size: 1, style: { color: "inherit" }, textOverflow: "ellipsis", children: props.children }) }) }) }), SingleValue = (props) => /* @__PURE__ */ jsx(components.SingleValue, { ...props, children: /* @__PURE__ */ jsx(Text, { size: 1, textOverflow: "ellipsis", children: props.children }) }), reactSelectComponents$1 = {
  ClearIndicator,
  DropdownIndicator: null,
  IndicatorSeparator: null,
  Menu: Menu$1,
  MenuList: MenuList$1,
  NoOptionsMessage,
  Option: Option$1,
  SingleValue
}, SearchFacetTags = ({ facet }) => {
  const scheme = useColorSchemeValue(), dispatch = useDispatch(), tags = useTypedSelector((state) => selectTags(state)), tagsFetching = useTypedSelector((state) => state.tags.fetching), allTagOptions = getTagSelectOptions(tags), popoverProps = usePortalPopoverProps(), handleChange = (option) => {
    dispatch(
      searchActions.facetsUpdateById({
        id: facet.id,
        value: option
      })
    );
  }, handleOperatorItemClick = (operatorType) => {
    dispatch(
      searchActions.facetsUpdateById({
        id: facet.id,
        operatorType
      })
    );
  }, selectedOperatorType = facet.operatorType;
  return /* @__PURE__ */ jsxs(SearchFacet, { facet, children: [
    facet?.operatorTypes && /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            iconRight: SelectIcon,
            padding: 2,
            text: operators[selectedOperatorType].label
          }
        ),
        id: "operators",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: facet.operatorTypes.map((operatorType, index) => operatorType ? /* @__PURE__ */ jsx(
          MenuItem,
          {
            disabled: operatorType === selectedOperatorType,
            fontSize: 1,
            onClick: () => handleOperatorItemClick(operatorType),
            padding: 2,
            space: 4,
            style: { minWidth: "150px" },
            text: operators[operatorType].label
          },
          operatorType
        ) : /* @__PURE__ */ jsx(MenuDivider, {}, index)) }),
        popover: popoverProps
      }
    ),
    !operators[selectedOperatorType].hideInput && /* @__PURE__ */ jsx(Box, { marginX: 1, style: { width: "160px" }, children: /* @__PURE__ */ jsx(
      Select,
      {
        components: reactSelectComponents$1,
        instanceId: "facet-searchable",
        isClearable: !0,
        isDisabled: tagsFetching,
        isSearchable: !0,
        name: "tags",
        noOptionsMessage: () => "No tags",
        onChange: (value) => handleChange(value),
        options: allTagOptions,
        placeholder: tagsFetching ? "Loading..." : "Select...",
        styles: reactSelectStyles$1(scheme),
        value: facet?.value
      }
    ) })
  ] });
}, StackContainer = styled(Flex)(({ theme }) => css`
    > * {
      margin-bottom: ${rem(theme.sanity.space[2])};
    }
  `), SearchFacets = (props) => {
  const { layout = "inline" } = props, searchFacets = useTypedSelector((state) => state.search.facets), Items2 = searchFacets.map((facet) => {
    const key = facet.id;
    return facet.type === "number" ? /* @__PURE__ */ jsx(SearchFacetNumber, { facet }, key) : facet.type === "searchable" ? /* @__PURE__ */ jsx(SearchFacetTags, { facet }, key) : facet.type === "select" ? /* @__PURE__ */ jsx(SearchFacetSelect, { facet }, key) : facet.type === "string" ? /* @__PURE__ */ jsx(SearchFacetString, { facet }, key) : null;
  });
  if (layout === "inline")
    return searchFacets.length === 0 ? null : /* @__PURE__ */ jsx(Box, { marginBottom: 2, children: /* @__PURE__ */ jsx(Inline, { space: 2, children: Items2 }) });
  if (layout === "stack")
    return /* @__PURE__ */ jsx(StackContainer, { align: "flex-start", direction: "column", children: Items2 });
  throw Error("Invalid layout");
}, ToolOptionsContext = createContext(null), ToolOptionsProvider = ({ options, children }) => {
  const value = useMemo(() => {
    let creditLineExcludeSources;
    return options?.creditLine?.excludeSources && (creditLineExcludeSources = Array.isArray(options?.creditLine?.excludeSources) ? options.creditLine.excludeSources : [options?.creditLine?.excludeSources]), {
      dropzone: { maxSize: options?.maximumUploadSize },
      creditLine: {
        enabled: options?.creditLine?.enabled || !1,
        excludeSources: creditLineExcludeSources
      }
    };
  }, [
    options?.creditLine?.enabled,
    options?.creditLine?.excludeSources,
    options?.maximumUploadSize
  ]);
  return /* @__PURE__ */ jsx(ToolOptionsContext.Provider, { value, children });
}, useToolOptions = () => {
  const context = useContext(ToolOptionsContext);
  if (!context)
    throw new Error("useToolOptions must be used within an ToolOptionsProvider");
  return context;
}, SearchFacetsControl = () => {
  const dispatch = useDispatch(), assetTypes = useTypedSelector((state) => state.assets.assetTypes), searchFacets = useTypedSelector((state) => state.search.facets), selectedDocument = useTypedSelector((state) => state.selected.document), popoverProps = usePortalPopoverProps(), { creditLine } = useToolOptions(), isTool = !selectedDocument, filteredFacets = FACETS.filter((facet) => !creditLine?.enabled && facet?.type === "string" && facet?.name === "creditLine" ? !1 : facet.type === "group" || facet.type === "divider" ? !0 : isTool ? !facet?.selectOnly : facet.assetTypes.filter(
    (assetType) => assetTypes.includes(assetType)
  ).length > 0).filter((facet, index, facets) => {
    const previousFacet = facets[index - 1];
    return !(facet.type === "divider" && (index === 0 || index === facets.length - 1) || facet.type === "divider" && previousFacet?.type === "divider");
  }), hasSearchFacets = filteredFacets.length > 0, renderMenuFacets = (facets, level = 0) => /* @__PURE__ */ jsx(Fragment, { children: facets?.map((facet, index) => {
    if (facet.type === "divider")
      return /* @__PURE__ */ jsx(MenuDivider, {}, index);
    if (facet.type === "group")
      return /* @__PURE__ */ jsx(MenuGroup, { text: facet.title, title: facet.title, children: renderMenuFacets(facet.facets, level + 1) }, `group-${level}-${index}`);
    if (facet) {
      const disabled = !facet.operatorTypes && !!searchFacets.find((v) => v.name === facet.name);
      return /* @__PURE__ */ jsx(
        MenuItem,
        {
          disabled,
          fontSize: 1,
          onClick: () => dispatch(searchActions.facetsAdd({ facet })),
          padding: 2,
          text: facet.title
        },
        facet.name
      );
    }
    return null;
  }) });
  return /* @__PURE__ */ jsxs(Flex, { children: [
    /* @__PURE__ */ jsx(
      MenuButton,
      {
        button: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: !hasSearchFacets,
            fontSize: 1,
            icon: AddIcon,
            mode: "bleed",
            space: 2,
            text: "Add filter",
            tone: "primary"
          }
        ),
        id: "facets",
        menu: /* @__PURE__ */ jsx(Menu$2, { children: renderMenuFacets(filteredFacets) }),
        popover: {
          ...popoverProps,
          placement: "right-start"
        }
      }
    ),
    searchFacets.length > 0 && /* @__PURE__ */ jsx(
      Button,
      {
        fontSize: 1,
        mode: "bleed",
        onClick: () => dispatch(searchActions.facetsClear()),
        text: "Clear"
      }
    )
  ] });
}, TagIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    "data-sanity-icon": "media__tag",
    fill: "currentColor",
    height: "1em",
    stroke: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    width: "1em",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M384 160a32 32 0 1132-32 32 32 0 01-32 32z" })
    ]
  }
), TextInputSearch = () => {
  const searchQuery = useTypedSelector((state) => state.search.query), dispatch = useDispatch(), handleChange = (e) => {
    dispatch(searchActions.querySet({ searchQuery: e.currentTarget.value }));
  }, handleClear = () => {
    dispatch(searchActions.querySet({ searchQuery: "" }));
  };
  return /* @__PURE__ */ jsxs(Box, { style: { position: "relative" }, children: [
    /* @__PURE__ */ jsx(
      TextInput,
      {
        fontSize: 1,
        icon: SearchIcon,
        onChange: handleChange,
        placeholder: "Search",
        radius: 2,
        value: searchQuery
      }
    ),
    searchQuery.length > 0 && /* @__PURE__ */ jsx(
      Flex,
      {
        align: "center",
        justify: "center",
        onClick: handleClear,
        style: {
          cursor: "pointer",
          height: "100%",
          opacity: 0.75,
          position: "absolute",
          right: 0,
          top: 0,
          width: "2em",
          zIndex: 1
          // force stacking context
        },
        children: /* @__PURE__ */ jsx(CloseIcon, {})
      }
    )
  ] });
}, Controls = () => {
  const dispatch = useDispatch(), fetching = useTypedSelector((state) => state.assets.fetching), pageIndex = useTypedSelector((state) => state.assets.pageIndex), searchFacets = useTypedSelector((state) => state.search.facets), tagsPanelVisible = useTypedSelector((state) => state.tags.panelVisible), mediaIndex = useMediaIndex(), handleShowSearchFacetDialog = () => {
    dispatch(dialogActions.showSearchFacets());
  }, handleShowTagsDialog = () => {
    dispatch(dialogActions.showTags());
  }, toggleTagsPanelToggle = () => {
    dispatch(tagsActions.panelVisibleSet({ panelVisible: !tagsPanelVisible }));
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      paddingY: 2,
      style: {
        borderBottom: "1px solid var(--card-border-color)",
        zIndex: 2
      },
      children: [
        /* @__PURE__ */ jsx(Box, { marginBottom: 2, children: /* @__PURE__ */ jsx(
          Flex,
          {
            align: "flex-start",
            direction: ["column", "column", "column", "column", "row"],
            justify: "space-between",
            children: /* @__PURE__ */ jsxs(
              Flex,
              {
                flex: 1,
                style: {
                  alignItems: "flex-start",
                  flex: 1,
                  height: "100%",
                  justifyContent: mediaIndex < 2 ? "space-between" : "flex-start",
                  position: "relative",
                  width: "100%"
                },
                children: [
                  /* @__PURE__ */ jsx(Box, { marginX: 2, style: { minWidth: "200px" }, children: /* @__PURE__ */ jsx(TextInputSearch, {}) }),
                  /* @__PURE__ */ jsxs(Box, { display: ["none", "none", "block"], children: [
                    /* @__PURE__ */ jsx(SearchFacets, {}),
                    /* @__PURE__ */ jsx(SearchFacetsControl, {})
                  ] }),
                  /* @__PURE__ */ jsx(Box, { display: ["block", "block", "none"], marginX: 2, children: /* @__PURE__ */ jsxs(Inline, { space: 2, style: { whiteSpace: "nowrap" }, children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        fontSize: 1,
                        mode: "ghost",
                        onClick: handleShowSearchFacetDialog,
                        text: `Filters${searchFacets.length > 0 ? ` (${searchFacets.length})` : ""}`,
                        tone: "primary"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        fontSize: 1,
                        mode: "ghost",
                        onClick: handleShowTagsDialog,
                        text: "Tags",
                        tone: "primary"
                      }
                    )
                  ] }) })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Flex, { align: "center", justify: ["space-between"], children: [
          /* @__PURE__ */ jsx(Box, { marginX: 2, children: /* @__PURE__ */ jsx(ButtonViewGroup, {}) }),
          /* @__PURE__ */ jsxs(Flex, { marginX: 2, children: [
            /* @__PURE__ */ jsx(OrderSelect, {}),
            /* @__PURE__ */ jsx(Box, { display: ["none", "none", "block"], marginLeft: 2, children: /* @__PURE__ */ jsx(
              Button,
              {
                fontSize: 1,
                icon: /* @__PURE__ */ jsx(Box, { style: { transform: "scale(0.75)" }, children: /* @__PURE__ */ jsx(TagIcon, {}) }),
                onClick: toggleTagsPanelToggle,
                mode: tagsPanelVisible ? "default" : "ghost",
                text: tagsPanelVisible ? "Tags" : ""
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Progress, { loading: fetching }, pageIndex)
      ]
    }
  );
}, initialState$3 = {
  badConnection: !1,
  enabled: !1
}, debugSlice = createSlice({
  name: "debug",
  initialState: initialState$3,
  reducers: {
    setBadConnection(state, action) {
      state.badConnection = action.payload;
    },
    toggleEnabled(state) {
      state.enabled = !state.enabled;
    }
  }
}), debugActions = { ...debugSlice.actions };
var debugReducer = debugSlice.reducer;
const DebugControls = () => {
  const dispatch = useDispatch(), badConnection = useTypedSelector((state) => state.debug.badConnection), debugEnabled = useTypedSelector((state) => state.debug.enabled), handleChange = (e) => {
    const checked = e.target.checked;
    dispatch(debugActions.setBadConnection(checked));
  };
  return useKeyPress("alt+ctrl+shift+/", () => {
    dispatch(debugActions.toggleEnabled());
  }), debugEnabled ? /* @__PURE__ */ jsx(
    Box,
    {
      padding: 4,
      style: {
        bottom: 0,
        left: 0,
        pointerEvents: "none",
        position: "fixed",
        width: "100%"
      },
      children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
        /* @__PURE__ */ jsx(Box, { marginRight: 3, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: /* @__PURE__ */ jsx(PlugIcon, {}) }) }),
        /* @__PURE__ */ jsx(
          Tooltip,
          {
            animate: !0,
            content: /* @__PURE__ */ jsx(Box, { padding: 2, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: badConnection ? "Bad connection: +3000ms & 50% chance to fail" : "No connection throttling" }) }),
            fallbackPlacements: ["right", "left"],
            placement: "bottom",
            portal: !0,
            children: /* @__PURE__ */ jsx(
              Switch,
              {
                checked: badConnection,
                onChange: handleChange,
                style: {
                  pointerEvents: "auto"
                }
              }
            )
          }
        )
      ] })
    }
  ) : null;
}, tagOptionSchema = z.object({
  label: z.string().trim().min(1, { message: "Label cannot be empty" }),
  value: z.string().trim().min(1, { message: "Value cannot be empty" })
}), assetFormSchema = z.object({
  altText: z.string().trim().optional(),
  creditLine: z.string().trim().optional(),
  description: z.string().trim().optional(),
  opt: z.object({
    media: z.object({
      tags: z.array(tagOptionSchema).nullable()
    })
  }),
  originalFilename: z.string().trim().min(1, { message: "Filename cannot be empty" }),
  title: z.string().trim().optional()
}), tagFormSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" })
});
function getUniqueDocuments(documents) {
  const draftIds = documents.reduce(
    (acc, doc) => doc._id.startsWith("drafts.") ? acc.concat(doc._id.slice(7)) : acc,
    []
  );
  return documents.filter(
    (doc) => !draftIds.includes(doc._id)
  );
}
const imageDprUrl = (asset, options) => {
  const dpi = typeof window > "u" || !window.devicePixelRatio ? 1 : Math.round(window.devicePixelRatio), imgH = options?.height ? options?.height * Math.max(1, dpi) : void 0, imgW = options.width * Math.max(1, dpi), urlParams = new URLSearchParams();
  return urlParams.append("fit", "max"), urlParams.append("w", imgW.toString()), imgH && urlParams.append("h", imgH.toString()), `${asset.url}?${urlParams.toString()}`;
}, sanitizeFormData = (formData) => Object.keys(formData).reduce((acc, key) => {
  const val = formData[key];
  return typeof val == "object" && val !== null && val.constructor !== Array ? acc[key] = sanitizeFormData(val) : val === "" || typeof val > "u" || val?.length === 0 ? acc[key] = null : typeof val == "string" && val ? acc[key] = formData[key].trim() : acc[key] = formData[key], acc;
}, {}), isFileAsset = (asset) => asset._type === "sanity.fileAsset", isImageAsset = (asset) => asset._type === "sanity.imageAsset", getAssetResolution = (asset) => `${asset.metadata.dimensions.width}x${asset.metadata.dimensions.height}px`, ButtonAssetCopy = ({ disabled, url }) => {
  const popoverProps = usePortalPopoverProps(), refPopoverTimeout = useRef(null), [popoverVisible, setPopoverVisible] = useState(!1), handleClick = () => {
    refPopoverTimeout.current && clearTimeout(refPopoverTimeout.current);
    const urlToCopy = url.replace("cdn.sanity.io", window.location.origin);
    setPopoverVisible(!0), copy(urlToCopy), refPopoverTimeout.current = setTimeout(() => {
      setPopoverVisible(!1);
    }, 1250);
  };
  return useEffect(() => () => {
    refPopoverTimeout.current && clearTimeout(refPopoverTimeout.current);
  }, []), /* @__PURE__ */ jsx(
    Popover,
    {
      content: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: "Copied!" }),
      open: popoverVisible,
      padding: 2,
      placement: "top",
      radius: 1,
      ...popoverProps,
      children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled,
          fontSize: 1,
          icon: ClipboardIcon,
          mode: "ghost",
          onClick: handleClick,
          text: "Copy URL"
        }
      )
    }
  );
}, Row = ({ label, value }) => /* @__PURE__ */ jsxs(Flex, { justify: "space-between", children: [
  /* @__PURE__ */ jsx(
    Text,
    {
      size: 1,
      style: {
        opacity: 0.8,
        width: "40%"
      },
      textOverflow: "ellipsis",
      children: label
    }
  ),
  /* @__PURE__ */ jsx(
    Text,
    {
      size: 1,
      style: {
        opacity: 0.4,
        textAlign: "right",
        width: "60%"
      },
      textOverflow: "ellipsis",
      children: value
    }
  )
] }), AssetMetadata = (props) => {
  const { asset, item } = props, exif = asset?.metadata?.exif, handleDownload = () => {
    window.location.href = `${asset.url}?dl=${asset.originalFilename}`;
  };
  return /* @__PURE__ */ jsxs(Box, { marginTop: 3, children: [
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
      /* @__PURE__ */ jsx(Row, { label: "Size", value: filesize(asset?.size, { base: 10, round: 0 }) }),
      /* @__PURE__ */ jsx(Row, { label: "MIME type", value: asset?.mimeType }),
      /* @__PURE__ */ jsx(Row, { label: "Extension", value: (asset?.extension).toUpperCase() }),
      isImageAsset(asset) && /* @__PURE__ */ jsx(Row, { label: "Dimensions", value: getAssetResolution(asset) })
    ] }) }),
    exif && (exif.DateTimeOriginal || exif.FNumber || exif.FocalLength || exif.ExposureTime || exif.ISO) && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          marginY: 4,
          style: {
            background: "var(--card-border-color)",
            height: "1px",
            width: "100%"
          }
        }
      ),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
        exif.ISO && /* @__PURE__ */ jsx(Row, { label: "ISO", value: exif.ISO }),
        exif.FNumber && /* @__PURE__ */ jsx(Row, { label: "Aperture", value: `\u0192/${exif.FNumber}` }),
        exif.FocalLength && /* @__PURE__ */ jsx(Row, { label: "Focal length", value: `${exif.FocalLength}mm` }),
        exif.ExposureTime && /* @__PURE__ */ jsx(Row, { label: "Exposure time", value: `1/${1 / exif.ExposureTime}` }),
        exif.DateTimeOriginal && /* @__PURE__ */ jsx(
          Row,
          {
            label: "Original date",
            value: format(new Date(exif.DateTimeOriginal), "PPp")
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Box, { marginTop: 5, children: /* @__PURE__ */ jsxs(Inline, { space: 2, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          disabled: !item || item?.updating,
          fontSize: 1,
          icon: DownloadIcon,
          mode: "ghost",
          onClick: handleDownload,
          text: "Download"
        }
      ),
      /* @__PURE__ */ jsx(ButtonAssetCopy, { disabled: !item || item?.updating, url: asset.url })
    ] }) })
  ] });
}, Dialog = (props) => /* @__PURE__ */ jsx(Dialog$1, { ...props, style: { position: "fixed" } }), DocumentList = ({ documents, isLoading }) => {
  const schema = useSchema();
  return isLoading ? /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: "Loading..." }) : documents.length === 0 ? /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: "No documents are referencing this asset" }) : /* @__PURE__ */ jsx(Card, { flex: 1, marginBottom: 2, padding: 2, radius: 2, shadow: 1, children: /* @__PURE__ */ jsx(Stack, { space: 2, children: documents?.map((doc) => /* @__PURE__ */ jsx(ReferringDocument, { doc, schemaType: schema.get(doc._type) }, doc._id)) }) });
}, ReferringDocument = (props) => {
  const { doc, schemaType } = props, { onClick } = useIntentLink({
    intent: "edit",
    params: { id: doc._id }
  });
  return schemaType ? /* @__PURE__ */ jsx(Button, { mode: "bleed", onClick, padding: 2, style: { width: "100%" }, children: /* @__PURE__ */ jsx(Preview, { layout: "default", schemaType, value: doc }) }, doc._id) : /* @__PURE__ */ jsx(Box, { padding: 2, children: /* @__PURE__ */ jsxs(Text, { size: 1, children: [
    "A document of the unknown type ",
    /* @__PURE__ */ jsx("em", { children: doc._type })
  ] }) });
}, Container = styled(Box)(({ theme }) => css`
    text {
      font-family: ${theme.sanity.fonts.text.family} !important;
      font-size: 8px !important;
      font-weight: 500 !important;
    }
  `), FileIcon = (props) => {
  const { extension, onClick, width } = props;
  return /* @__PURE__ */ jsx(Flex, { align: "center", justify: "center", onClick, style: { height: "100%" }, children: /* @__PURE__ */ jsx(Container, { style: { width }, children: extension ? /* @__PURE__ */ jsx(
    FileIcon$1,
    {
      extension,
      ...defaultStyles[extension]
    }
  ) : /* @__PURE__ */ jsx(FileIcon$1, {}) }) });
}, FileAssetPreview = (props) => {
  const { asset } = props;
  return asset.mimeType.search("audio") === 0 ? /* @__PURE__ */ jsx(Flex, { align: "center", justify: "center", style: { height: "100%" }, children: /* @__PURE__ */ jsx("audio", { controls: !0, src: asset.url, style: { width: "100%" } }) }) : asset.mimeType.search("video") === 0 ? /* @__PURE__ */ jsx(
    "video",
    {
      controls: !0,
      src: asset.url,
      style: {
        height: "100%",
        width: "100%"
      }
    }
  ) : /* @__PURE__ */ jsx(FileIcon, { extension: asset.extension, width: "50%" });
}, { radius: themeRadius, space: themeSpace } = studioTheme, reactSelectStyles = (scheme) => ({
  control: (styles, { isFocused }) => {
    let boxShadow = "inset 0 0 0 1px var(--card-border-color)";
    return isFocused && (boxShadow = `inset 0 0 0 1px ${getSchemeColor(scheme, "inputEnabledBorder")},
        0 0 0 1px var(--card-bg-color),
        0 0 0 3px var(--card-focus-ring-color) !important`), {
      ...styles,
      backgroundColor: "var(--card-bg-color)",
      color: "inherit",
      border: "none",
      borderRadius: themeRadius[1],
      boxShadow,
      margin: 0,
      minHeight: "35px",
      outline: "none",
      padding: rem(themeSpace[1]),
      transition: "none",
      "&:hover": {
        boxShadow: `inset 0 0 0 1px ${getSchemeColor(scheme, "inputHoveredBorder")}`
      }
    };
  },
  indicatorsContainer: (styles, { isDisabled }) => ({
    ...styles,
    opacity: isDisabled ? 0.25 : 1
  }),
  input: (styles) => ({
    ...styles,
    color: "var(--card-fg-color)",
    fontFamily: studioTheme.fonts.text.family,
    marginLeft: rem(themeSpace[2])
  }),
  menuList: (styles) => ({
    ...styles
  }),
  multiValue: (styles, { isDisabled }) => ({
    ...styles,
    backgroundColor: getSchemeColor(scheme, "mutedHoveredBg"),
    borderRadius: themeRadius[2],
    opacity: isDisabled ? 0.5 : 1
  }),
  multiValueLabel: () => ({
    color: getSchemeColor(scheme, "mutedHoveredFg"),
    fontSize: "inherit",
    padding: 0
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    svg: { color: getSchemeColor(scheme, "mutedHoveredFg") },
    "&:hover": {
      backgroundColor: getSchemeColor(scheme, "mutedSelectedBg")
    }
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    fontFamily: studioTheme.fonts.text.family,
    lineHeight: "1em"
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? getSchemeColor(scheme, "spotBlue") : "transparent",
    borderRadius: themeRadius[2],
    color: isFocused ? getSchemeColor(scheme, "bg") : "inherit",
    padding: `${rem(themeSpace[1])} ${rem(themeSpace[2])}`,
    "&:hover": {
      backgroundColor: getSchemeColor(scheme, "spotBlue"),
      color: getSchemeColor(scheme, "bg")
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    marginLeft: rem(themeSpace[2])
  }),
  valueContainer: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0
  })
}), DropdownIndicator = (props) => /* @__PURE__ */ jsx(components.DropdownIndicator, { ...props, children: /* @__PURE__ */ jsx(Box, { paddingX: 2, children: /* @__PURE__ */ jsx(Text, { size: 1, children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) }) }) }), Menu = (props) => /* @__PURE__ */ jsx(components.Menu, { ...props, children: /* @__PURE__ */ jsx(Card, { radius: 1, shadow: 2, children: props.children }) }), MenuList = (props) => {
  const { children } = props, MAX_ROWS = 5, OPTION_HEIGHT = 37;
  if (Array.isArray(children)) {
    const height = children.length > MAX_ROWS ? OPTION_HEIGHT * MAX_ROWS : children.length * OPTION_HEIGHT;
    return /* @__PURE__ */ jsx(
      Virtuoso,
      {
        className: "media__custom-scrollbar",
        itemContent: (index) => {
          const item = children[index];
          return /* @__PURE__ */ jsx(Option, { ...item.props });
        },
        style: { height },
        totalCount: children.length
      }
    );
  }
  return /* @__PURE__ */ jsx(components.MenuList, { ...props, children });
}, MultiValueLabel = (props) => /* @__PURE__ */ jsx(Box, { padding: 2, paddingRight: 1, children: /* @__PURE__ */ jsx(Text, { size: 1, weight: "medium", children: /* @__PURE__ */ jsx(components.MultiValueLabel, { ...props }) }) }), MultiValueRemove = (props) => /* @__PURE__ */ jsx(components.MultiValueRemove, { ...props, children: /* @__PURE__ */ jsx(CloseIcon, { color: "#1f2123" }) }), Option = (props) => /* @__PURE__ */ jsx(Box, { paddingX: 1, paddingY: 1, children: /* @__PURE__ */ jsx(components.Option, { ...props, children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
  props.data.__isNew__ && /* @__PURE__ */ jsx(AddIcon, { style: { marginRight: "3px" } }),
  props.children
] }) }) }), reactSelectComponents = {
  DropdownIndicator,
  IndicatorSeparator: null,
  Menu,
  MenuList,
  MultiValueLabel,
  MultiValueRemove,
  Option
}, StyledErrorOutlineIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.sanity.color.spot.red
})), FormFieldInputLabel = (props) => {
  const { description, error, label, name } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Box, { marginY: 3, children: /* @__PURE__ */ jsxs(Inline, { space: 2, children: [
      /* @__PURE__ */ jsx(Text, { as: "label", htmlFor: name, size: 1, weight: "semibold", children: label }),
      error && /* @__PURE__ */ jsx(Text, { size: 1, children: /* @__PURE__ */ jsx(
        Tooltip,
        {
          animate: !0,
          content: /* @__PURE__ */ jsx(Box, { padding: 2, children: /* @__PURE__ */ jsxs(Text, { muted: !0, size: 1, children: [
            /* @__PURE__ */ jsx(StyledErrorOutlineIcon, { style: { marginRight: "0.1em" } }),
            error
          ] }) }),
          fallbackPlacements: ["top", "left"],
          placement: "right",
          portal: !0,
          children: /* @__PURE__ */ jsx(StyledErrorOutlineIcon, {})
        }
      ) })
    ] }) }),
    description && /* @__PURE__ */ jsx(Box, { marginY: 3, children: /* @__PURE__ */ jsx(Text, { htmlFor: name, muted: !0, size: 1, children: description }) })
  ] });
}, FormFieldInputTags = (props) => {
  const {
    control,
    description,
    disabled,
    error,
    label,
    name,
    onCreateTag,
    options,
    placeholder,
    value
  } = props, scheme = useColorSchemeValue(), creating = useTypedSelector((state) => state.tags.creating), tagsFetching = useTypedSelector((state) => state.tags.fetching);
  return /* @__PURE__ */ jsxs(
    Box,
    {
      style: { zIndex: 2 },
      children: [
        /* @__PURE__ */ jsx(FormFieldInputLabel, { description, error, label, name }),
        /* @__PURE__ */ jsx(
          Controller,
          {
            control,
            defaultValue: value,
            name,
            render: ({ field }) => {
              const { onBlur, onChange, value: controllerValue } = field;
              return /* @__PURE__ */ jsx(
                CreatableSelect,
                {
                  components: reactSelectComponents,
                  instanceId: "tags",
                  isClearable: !1,
                  isDisabled: creating || disabled || tagsFetching,
                  isLoading: creating,
                  isMulti: !0,
                  name,
                  noOptionsMessage: () => "No tags",
                  onBlur,
                  onChange,
                  onCreateOption: onCreateTag,
                  options,
                  placeholder: tagsFetching ? "Loading..." : placeholder,
                  styles: reactSelectStyles(scheme),
                  value: controllerValue
                }
              );
            }
          }
        )
      ]
    }
  );
}, FormFieldInputText = forwardRef((props, ref) => {
  const { description, disabled, error, label, name, placeholder, value, ...rest } = props;
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormFieldInputLabel, { description, error, label, name }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        ...rest,
        autoComplete: "off",
        autoFocus: !0,
        defaultValue: value,
        disabled,
        id: name,
        name,
        placeholder,
        ref
      }
    )
  ] });
}), FormFieldInputTextarea = forwardRef((props, ref) => {
  const { description, disabled, error, label, name, placeholder, rows, value, ...rest } = props;
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormFieldInputLabel, { description, error, label, name }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        ...rest,
        autoComplete: "off",
        defaultValue: value,
        disabled,
        id: name,
        name,
        placeholder,
        ref,
        rows
      }
    )
  ] });
}), FormSubmitButton = (props) => {
  const { disabled, isValid, lastUpdated, onClick } = props;
  let content;
  return isValid ? lastUpdated ? content = /* @__PURE__ */ jsxs(Fragment, { children: [
    "Last updated",
    /* @__PURE__ */ jsx("br", {}),
    " ",
    format(new Date(lastUpdated), "PPp")
  ] }) : content = "No unpublished changes" : content = "There are validation errors that need to be fixed before this document can be published", /* @__PURE__ */ jsx(
    Tooltip,
    {
      animate: !0,
      content: /* @__PURE__ */ jsx(Box, { padding: 3, style: { maxWidth: "185px" }, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: content }) }),
      disabled: "ontouchstart" in window,
      placement: "top",
      portal: !0,
      children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled,
          fontSize: 1,
          onClick,
          text: "Save and close",
          tone: "primary"
        }
      ) })
    }
  );
}, Image$1 = styled.img`
  --checkerboard-color: ${(props) => props.$scheme ? getSchemeColor(props.$scheme, "bg2") : "inherit"};

  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${(props) => props.$showCheckerboard && css`
      background-image: linear-gradient(45deg, var(--checkerboard-color) 25%, transparent 25%),
        linear-gradient(-45deg, var(--checkerboard-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--checkerboard-color) 75%),
        linear-gradient(-45deg, transparent 75%, var(--checkerboard-color) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0;
    `}
`, DialogAssetEdit = (props) => {
  const {
    children,
    dialog: { assetId, id, lastCreatedTag, lastRemovedTagIds }
  } = props, client = useVersionedClient(), scheme = useColorSchemeValue(), documentStore = useDocumentStore(), dispatch = useDispatch(), assetItem = useTypedSelector((state) => selectAssetById(state, String(assetId))), tags = useTypedSelector(selectTags), assetUpdatedPrev = useRef(void 0), [assetSnapshot, setAssetSnapshot] = useState(assetItem?.asset), [tabSection, setTabSection] = useState("details"), currentAsset = assetItem ? assetItem?.asset : assetSnapshot, allTagOptions = getTagSelectOptions(tags), assetTagOptions = useTypedSelector(selectTagSelectOptions(currentAsset)), { creditLine } = useToolOptions(), generateDefaultValues = useCallback(
    (asset) => ({
      altText: asset?.altText || "",
      creditLine: asset?.creditLine || "",
      description: asset?.description || "",
      originalFilename: asset?.originalFilename || "",
      opt: { media: { tags: assetTagOptions } },
      title: asset?.title || ""
    }),
    [assetTagOptions]
  ), {
    control,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isValid },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue
  } = useForm({
    defaultValues: generateDefaultValues(assetItem?.asset),
    mode: "onChange",
    resolver: zodResolver(assetFormSchema)
  }), formUpdating = !assetItem || assetItem?.updating, handleClose = useCallback(() => {
    dispatch(dialogActions.remove({ id }));
  }, [dispatch, id]), handleDelete = useCallback(() => {
    assetItem?.asset && dispatch(
      dialogActions.showConfirmDeleteAssets({
        assets: [assetItem],
        closeDialogId: assetItem?.asset._id
      })
    );
  }, [assetItem, dispatch]), handleAssetUpdate = useCallback((update) => {
    const { result, transition } = update;
    result && transition === "update" && setAssetSnapshot(result);
  }, []), handleCreateTag = useCallback(
    (tagName) => {
      dispatch(
        tagsActions.createRequest({
          assetId: currentAsset?._id,
          name: tagName
        })
      );
    },
    [currentAsset?._id, dispatch]
  ), onSubmit = useCallback(
    (formData) => {
      if (!assetItem?.asset)
        return;
      const sanitizedFormData = sanitizeFormData(formData);
      dispatch(
        assetsActions.updateRequest({
          asset: assetItem?.asset,
          closeDialogId: assetItem?.asset._id,
          formData: {
            ...sanitizedFormData,
            // Map tags to sanity references
            opt: {
              media: {
                ...sanitizedFormData.opt.media,
                tags: sanitizedFormData.opt.media.tags?.map((tag) => ({
                  _ref: tag.value,
                  _type: "reference",
                  _weak: !0
                })) || null
              }
            }
          }
        })
      );
    },
    [assetItem?.asset, dispatch]
  );
  return useEffect(() => {
    if (!assetItem?.asset)
      return;
    const subscriptionAsset = client.listen(groq`*[_id == $id]`, { id: assetItem?.asset._id }).subscribe(handleAssetUpdate);
    return () => {
      subscriptionAsset?.unsubscribe();
    };
  }, [assetItem?.asset, client, handleAssetUpdate]), useEffect(() => {
    if (lastCreatedTag) {
      const updatedTags = (getValues("opt.media.tags") || []).concat([lastCreatedTag]);
      setValue("opt.media.tags", updatedTags, { shouldDirty: !0 });
    }
  }, [getValues, lastCreatedTag, setValue]), useEffect(() => {
    if (lastRemovedTagIds) {
      const updatedTags = (getValues("opt.media.tags") || []).filter((tag) => !lastRemovedTagIds.includes(tag.value));
      setValue("opt.media.tags", updatedTags, { shouldDirty: !0 });
    }
  }, [getValues, lastRemovedTagIds, setValue]), useEffect(() => {
    assetUpdatedPrev.current !== assetItem?.asset._updatedAt && reset(generateDefaultValues(assetItem?.asset)), assetUpdatedPrev.current = assetItem?.asset._updatedAt;
  }, [assetItem?.asset, generateDefaultValues, reset]), currentAsset ? /* @__PURE__ */ jsxs(
    Dialog,
    {
      animate: !0,
      footer: /* @__PURE__ */ jsx(() => /* @__PURE__ */ jsx(Box, { padding: 3, children: /* @__PURE__ */ jsxs(Flex, { justify: "space-between", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: formUpdating,
            fontSize: 1,
            mode: "bleed",
            onClick: handleDelete,
            text: "Delete",
            tone: "critical"
          }
        ),
        /* @__PURE__ */ jsx(
          FormSubmitButton,
          {
            disabled: formUpdating || !isDirty || !isValid,
            isValid,
            lastUpdated: currentAsset?._updatedAt,
            onClick: handleSubmit(onSubmit)
          }
        )
      ] }) }), {}),
      header: "Asset details",
      id,
      onClose: handleClose,
      width: 3,
      children: [
        /* @__PURE__ */ jsxs(Flex, { direction: ["column-reverse", "column-reverse", "row-reverse"], children: [
          /* @__PURE__ */ jsx(Box, { flex: 1, marginTop: [5, 5, 0], padding: 4, children: /* @__PURE__ */ jsx(WithReferringDocuments, { documentStore, id: currentAsset._id, children: ({ isLoading, referringDocuments }) => {
            const uniqueReferringDocuments = getUniqueDocuments(referringDocuments);
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs(TabList, { space: 2, children: [
                /* @__PURE__ */ jsx(
                  Tab,
                  {
                    "aria-controls": "details-panel",
                    disabled: formUpdating,
                    id: "details-tab",
                    label: "Details",
                    onClick: () => setTabSection("details"),
                    selected: tabSection === "details",
                    size: 2
                  }
                ),
                /* @__PURE__ */ jsx(
                  Tab,
                  {
                    "aria-controls": "references-panel",
                    disabled: formUpdating,
                    id: "references-tab",
                    label: `References${!isLoading && Array.isArray(uniqueReferringDocuments) ? ` (${uniqueReferringDocuments.length})` : ""}`,
                    onClick: () => setTabSection("references"),
                    selected: tabSection === "references",
                    size: 2
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(Box, { as: "form", marginTop: 4, onSubmit: handleSubmit(onSubmit), children: [
                !assetItem && /* @__PURE__ */ jsx(Card, { marginBottom: 3, padding: 3, radius: 2, shadow: 1, tone: "critical", children: /* @__PURE__ */ jsx(Text, { size: 1, children: "This file cannot be found \u2013 it may have been deleted." }) }),
                /* @__PURE__ */ jsx("button", { style: { display: "none" }, tabIndex: -1, type: "submit" }),
                /* @__PURE__ */ jsx(
                  TabPanel,
                  {
                    "aria-labelledby": "details",
                    hidden: tabSection !== "details",
                    id: "details-panel",
                    children: /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
                      /* @__PURE__ */ jsx(
                        FormFieldInputTags,
                        {
                          control,
                          disabled: formUpdating,
                          error: errors?.opt?.media?.tags?.message,
                          label: "Tags",
                          name: "opt.media.tags",
                          onCreateTag: handleCreateTag,
                          options: allTagOptions,
                          placeholder: "Select or create...",
                          value: assetTagOptions
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        FormFieldInputText,
                        {
                          ...register("originalFilename"),
                          disabled: formUpdating,
                          error: errors?.originalFilename?.message,
                          label: "Filename",
                          name: "originalFilename",
                          value: currentAsset?.originalFilename
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        FormFieldInputText,
                        {
                          ...register("title"),
                          disabled: formUpdating,
                          error: errors?.title?.message,
                          label: "Title",
                          name: "title",
                          value: currentAsset?.title
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        FormFieldInputText,
                        {
                          ...register("altText"),
                          disabled: formUpdating,
                          error: errors?.altText?.message,
                          label: "Alt Text",
                          name: "altText",
                          value: currentAsset?.altText
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        FormFieldInputTextarea,
                        {
                          ...register("description"),
                          disabled: formUpdating,
                          error: errors?.description?.message,
                          label: "Description",
                          name: "description",
                          rows: 5,
                          value: currentAsset?.description
                        }
                      ),
                      creditLine?.enabled && /* @__PURE__ */ jsx(
                        FormFieldInputText,
                        {
                          ...register("creditLine"),
                          error: errors?.creditLine?.message,
                          label: "Credit",
                          name: "creditLine",
                          value: currentAsset?.creditLine,
                          disabled: formUpdating || creditLine?.excludeSources?.includes(currentAsset?.source?.name)
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  TabPanel,
                  {
                    "aria-labelledby": "references",
                    hidden: tabSection !== "references",
                    id: "references-panel",
                    children: /* @__PURE__ */ jsx(Box, { marginTop: 5, children: assetItem?.asset && /* @__PURE__ */ jsx(
                      DocumentList,
                      {
                        documents: uniqueReferringDocuments,
                        isLoading
                      }
                    ) })
                  }
                )
              ] })
            ] });
          } }) }),
          /* @__PURE__ */ jsxs(Box, { flex: 1, padding: 4, children: [
            /* @__PURE__ */ jsxs(Box, { style: { aspectRatio: "1" }, children: [
              isFileAsset(currentAsset) && /* @__PURE__ */ jsx(FileAssetPreview, { asset: currentAsset }),
              isImageAsset(currentAsset) && /* @__PURE__ */ jsx(
                Image$1,
                {
                  draggable: !1,
                  $scheme: scheme,
                  $showCheckerboard: !currentAsset?.metadata?.isOpaque,
                  src: imageDprUrl(currentAsset, { height: 600, width: 600 })
                }
              )
            ] }),
            currentAsset && /* @__PURE__ */ jsx(Box, { marginTop: 4, children: /* @__PURE__ */ jsx(AssetMetadata, { asset: currentAsset, item: assetItem }) })
          ] })
        ] }),
        children
      ]
    }
  ) : null;
}, DialogConfirm = (props) => {
  const { children, dialog } = props, dispatch = useDispatch(), handleClose = () => {
    dispatch(dialogActions.remove({ id: dialog?.id }));
  }, handleConfirm = () => {
    dialog?.closeDialogId && dispatch(dialogActions.remove({ id: dialog?.closeDialogId })), dialog?.confirmCallbackAction && dispatch(dialog.confirmCallbackAction), handleClose();
  };
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      animate: !0,
      footer: /* @__PURE__ */ jsx(() => /* @__PURE__ */ jsx(Box, { padding: 3, children: /* @__PURE__ */ jsxs(Flex, { justify: "space-between", children: [
        /* @__PURE__ */ jsx(Button, { fontSize: 1, mode: "bleed", onClick: handleClose, text: "Cancel" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            fontSize: 1,
            onClick: handleConfirm,
            text: dialog?.confirmText,
            tone: dialog?.tone
          }
        )
      ] }) }), {}),
      header: /* @__PURE__ */ jsx(() => /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
        /* @__PURE__ */ jsx(Box, { paddingX: 1, children: /* @__PURE__ */ jsx(WarningOutlineIcon, {}) }),
        /* @__PURE__ */ jsx(Box, { marginLeft: 2, children: dialog?.headerTitle })
      ] }), {}),
      id: "confirm",
      onClose: handleClose,
      width: 1,
      children: [
        /* @__PURE__ */ jsx(Box, { paddingX: 4, paddingY: 4, children: /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
          dialog?.title && /* @__PURE__ */ jsx(Text, { size: 1, children: dialog.title }),
          dialog?.description && /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: /* @__PURE__ */ jsx("em", { children: dialog.description }) })
        ] }) }),
        children
      ]
    }
  );
}, DialogSearchFacets = (props) => {
  const {
    children,
    dialog: { id }
  } = props, dispatch = useDispatch(), handleClose = useCallback(() => {
    dispatch(dialogActions.clear());
  }, []);
  return /* @__PURE__ */ jsxs(Dialog, { animate: !0, header: "Filters", id, onClose: handleClose, width: 1, children: [
    /* @__PURE__ */ jsxs(Box, { padding: 3, children: [
      /* @__PURE__ */ jsx(SearchFacets, { layout: "stack" }),
      /* @__PURE__ */ jsx(SearchFacetsControl, {})
    ] }),
    children
  ] });
}, DialogTagCreate = (props) => {
  const {
    children,
    dialog: { id }
  } = props, dispatch = useDispatch(), creating = useTypedSelector((state) => state.tags.creating), creatingError = useTypedSelector((state) => state.tags.creatingError), {
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    setError
  } = useForm({
    defaultValues: {
      name: ""
    },
    mode: "onChange",
    resolver: zodResolver(tagFormSchema)
  }), formUpdating = creating, handleClose = () => {
    dispatch(dialogActions.clear());
  }, onSubmit = (formData) => {
    const sanitizedFormData = sanitizeFormData(formData);
    dispatch(tagsActions.createRequest({ name: sanitizedFormData.name }));
  };
  return useEffect(() => {
    creatingError && setError("name", {
      message: creatingError?.message
    });
  }, [creatingError, setError]), /* @__PURE__ */ jsxs(Dialog, { animate: !0, footer: /* @__PURE__ */ jsx(() => /* @__PURE__ */ jsx(Box, { padding: 3, children: /* @__PURE__ */ jsx(Flex, { justify: "flex-end", children: /* @__PURE__ */ jsx(
    FormSubmitButton,
    {
      disabled: formUpdating || !isDirty || !isValid,
      isValid,
      onClick: handleSubmit(onSubmit)
    }
  ) }) }), {}), header: "Create Tag", id, onClose: handleClose, width: 1, children: [
    /* @__PURE__ */ jsxs(Box, { as: "form", padding: 4, onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsx("button", { style: { display: "none" }, tabIndex: -1, type: "submit" }),
      /* @__PURE__ */ jsx(
        FormFieldInputText,
        {
          ...register("name"),
          disabled: formUpdating,
          error: errors?.name?.message,
          label: "Name",
          name: "name"
        }
      )
    ] }),
    children
  ] });
}, DialogTagEdit = (props) => {
  const {
    children,
    dialog: { id, tagId }
  } = props, client = useVersionedClient(), dispatch = useDispatch(), tagItem = useTypedSelector((state) => selectTagById(state, String(tagId))), [tagSnapshot, setTagSnapshot] = useState(tagItem?.tag), currentTag = tagItem ? tagItem?.tag : tagSnapshot, generateDefaultValues = (tag) => ({
    name: tag?.name?.current || ""
  }), {
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
    setError
  } = useForm({
    defaultValues: generateDefaultValues(tagItem?.tag),
    mode: "onChange",
    resolver: zodResolver(tagFormSchema)
  }), formUpdating = !tagItem || tagItem?.updating, handleClose = () => {
    dispatch(dialogActions.remove({ id }));
  }, onSubmit = (formData) => {
    if (!tagItem?.tag)
      return;
    const sanitizedFormData = sanitizeFormData(formData);
    dispatch(
      tagsActions.updateRequest({
        closeDialogId: tagItem?.tag?._id,
        formData: {
          name: {
            _type: "slug",
            current: sanitizedFormData.name
          }
        },
        tag: tagItem?.tag
      })
    );
  }, handleDelete = () => {
    tagItem?.tag && dispatch(
      dialogActions.showConfirmDeleteTag({
        closeDialogId: tagItem?.tag?._id,
        tag: tagItem?.tag
      })
    );
  }, handleTagUpdate = useCallback(
    (update) => {
      const { result, transition } = update;
      result && transition === "update" && (setTagSnapshot(result), reset(generateDefaultValues(result)));
    },
    [reset]
  );
  return useEffect(() => {
    tagItem?.error && setError("name", {
      message: tagItem.error?.message
    });
  }, [setError, tagItem.error]), useEffect(() => {
    if (!tagItem?.tag)
      return;
    const subscriptionAsset = client.listen(groq`*[_id == $id]`, { id: tagItem?.tag._id }).subscribe(handleTagUpdate);
    return () => {
      subscriptionAsset?.unsubscribe();
    };
  }, [client, handleTagUpdate, tagItem?.tag]), currentTag ? /* @__PURE__ */ jsxs(Dialog, { animate: !0, footer: /* @__PURE__ */ jsx(() => /* @__PURE__ */ jsx(Box, { padding: 3, children: /* @__PURE__ */ jsxs(Flex, { justify: "space-between", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        disabled: formUpdating,
        fontSize: 1,
        mode: "bleed",
        onClick: handleDelete,
        text: "Delete",
        tone: "critical"
      }
    ),
    /* @__PURE__ */ jsx(
      FormSubmitButton,
      {
        disabled: formUpdating || !isDirty || !isValid,
        isValid,
        lastUpdated: tagItem?.tag?._updatedAt,
        onClick: handleSubmit(onSubmit)
      }
    )
  ] }) }), {}), header: "Edit Tag", id, onClose: handleClose, width: 1, children: [
    /* @__PURE__ */ jsxs(Box, { as: "form", padding: 4, onSubmit: handleSubmit(onSubmit), children: [
      !tagItem && /* @__PURE__ */ jsx(Card, { marginBottom: 3, padding: 3, radius: 2, shadow: 1, tone: "critical", children: /* @__PURE__ */ jsx(Text, { size: 1, children: "This tag cannot be found \u2013 it may have been deleted." }) }),
      /* @__PURE__ */ jsx("button", { style: { display: "none" }, tabIndex: -1, type: "submit" }),
      /* @__PURE__ */ jsx(
        FormFieldInputText,
        {
          ...register("name"),
          disabled: formUpdating,
          error: errors?.name?.message,
          label: "Name",
          name: "name"
        }
      )
    ] }),
    children
  ] }) : null;
}, TagContainer = styled(Flex)`
  height: ${PANEL_HEIGHT}px;
`, ButtonContainer = styled(Flex)`
  @media (pointer: fine) {
    visibility: hidden;
  }

  @media (hover: hover) and (pointer: fine) {
    ${TagContainer}:hover & {
      visibility: visible;
    }
  }
`, TagButton = (props) => {
  const { disabled, icon, onClick, tone, tooltip } = props;
  return /* @__PURE__ */ jsx(
    Tooltip,
    {
      animate: !0,
      content: /* @__PURE__ */ jsx(Container$2, { padding: 2, width: 0, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: tooltip }) }),
      disabled: "ontouchstart" in window,
      placement: "top",
      portal: !0,
      children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled,
          fontSize: 1,
          icon,
          mode: "bleed",
          onClick,
          padding: 2,
          tone
        }
      )
    }
  );
}, Tag = (props) => {
  const { actions, tag } = props, dispatch = useDispatch(), assetsPicked = useTypedSelector(selectAssetsPicked), isSearchFacetTag = useTypedSelector((state) => selectIsSearchFacetTag(state, tag?.tag?._id)), handleSearchFacetTagRemove = () => {
    dispatch(searchActions.facetsRemoveByTag({ tagId: tag.tag._id }));
  }, handleShowAddTagToAssetsDialog = () => {
    dispatch(dialogActions.showConfirmAssetsTagAdd({ assetsPicked, tag: tag.tag }));
  }, handleShowRemoveTagFromAssetsDialog = () => {
    dispatch(dialogActions.showConfirmAssetsTagRemove({ assetsPicked, tag: tag.tag }));
  }, handleShowTagDeleteDialog = () => {
    dispatch(dialogActions.showConfirmDeleteTag({ tag: tag.tag }));
  }, handleShowTagEditDialog = () => {
    dispatch(DIALOG_ACTIONS.showTagEdit({ tagId: tag?.tag?._id }));
  }, handleSearchFacetTagAddOrUpdate = () => {
    const searchFacet = {
      ...inputs.tag,
      value: {
        label: tag?.tag?.name?.current,
        value: tag?.tag?._id
      }
    };
    dispatch(
      isSearchFacetTag ? searchActions.facetsUpdate({
        name: "tag",
        operatorType: "references",
        value: searchFacet.value
      }) : searchActions.facetsAdd({ facet: searchFacet })
    );
  };
  return /* @__PURE__ */ jsxs(TagContainer, { align: "center", flex: 1, justify: "space-between", paddingLeft: 3, children: [
    /* @__PURE__ */ jsx(Box, { flex: 1, children: /* @__PURE__ */ jsx(
      Text,
      {
        muted: !0,
        size: 1,
        style: {
          opacity: tag?.updating ? 0.5 : 1,
          userSelect: "none"
        },
        textOverflow: "ellipsis",
        children: tag?.tag?.name?.current
      }
    ) }),
    /* @__PURE__ */ jsxs(ButtonContainer, { align: "center", style: { flexShrink: 0 }, children: [
      actions?.includes("search") && /* @__PURE__ */ jsx(
        TagButton,
        {
          disabled: tag?.updating,
          icon: isSearchFacetTag ? /* @__PURE__ */ jsx(CloseIcon, {}) : /* @__PURE__ */ jsx(SearchIcon, {}),
          onClick: isSearchFacetTag ? handleSearchFacetTagRemove : handleSearchFacetTagAddOrUpdate,
          tooltip: isSearchFacetTag ? "Remove filter" : "Filter by tag"
        }
      ),
      actions?.includes("edit") && /* @__PURE__ */ jsx(
        TagButton,
        {
          disabled: tag?.updating,
          icon: /* @__PURE__ */ jsx(EditIcon, {}),
          onClick: handleShowTagEditDialog,
          tone: "primary",
          tooltip: "Edit tag"
        }
      ),
      actions?.includes("applyAll") && /* @__PURE__ */ jsx(
        TagButton,
        {
          disabled: tag?.updating,
          icon: /* @__PURE__ */ jsx(ArrowUpIcon, {}),
          onClick: handleShowAddTagToAssetsDialog,
          tone: "primary",
          tooltip: "Add tag to selected assets"
        }
      ),
      actions?.includes("removeAll") && /* @__PURE__ */ jsx(
        TagButton,
        {
          disabled: tag?.updating,
          icon: /* @__PURE__ */ jsx(ArrowDownIcon, {}),
          onClick: handleShowRemoveTagFromAssetsDialog,
          tone: "critical",
          tooltip: "Remove tag from selected assets"
        }
      ),
      actions?.includes("delete") && /* @__PURE__ */ jsx(
        TagButton,
        {
          disabled: tag?.updating,
          icon: /* @__PURE__ */ jsx(TrashIcon, {}),
          onClick: handleShowTagDeleteDialog,
          tone: "critical",
          tooltip: "Delete tag"
        }
      )
    ] })
  ] });
}, VirtualRow$1 = memo(
  ({
    isScrolling,
    item
  }) => typeof item == "string" ? /* @__PURE__ */ jsx(
    Flex,
    {
      align: "center",
      justify: "space-between",
      paddingX: 3,
      style: { height: `${PANEL_HEIGHT}px` },
      children: /* @__PURE__ */ jsx(Label, { size: 0, children: item })
    },
    item
  ) : /* @__PURE__ */ jsx(Tag, { actions: isScrolling ? void 0 : item.actions, tag: item }, item.tag?._id)
), TagsVirtualized = () => {
  const assetsPicked = useTypedSelector(selectAssetsPicked), tags = useTypedSelector(selectTags), [isScrolling, setIsScrolling] = useState(!1), pickedTagIds = assetsPicked?.reduce((acc, val) => {
    const assetTagIds = val?.asset?.opt?.media?.tags?.map((tag) => tag._ref) || [];
    return acc = acc.concat(assetTagIds), acc;
  }, []), pickedTagIdsUnique = [...new Set(pickedTagIds)], tagIdsSegmented = pickedTagIdsUnique.reduce(
    (acc, tagId) => (assetsPicked.every((assetItem) => (assetItem.asset.opt?.media?.tags?.findIndex((tag) => tag._ref === tagId) ?? -1) >= 0) ? acc.appliedToAll.push(tagId) : acc.appliedToSome.push(tagId), acc),
    {
      appliedToAll: [],
      appliedToSome: []
    }
  ), tagsAppliedToAll = tags.filter((tag) => tagIdsSegmented.appliedToAll.includes(tag.tag._id)).map((tagItem) => ({
    ...tagItem,
    actions: ["delete", "edit", "removeAll", "search"]
  })), tagsAppliedToSome = tags.filter((tag) => tagIdsSegmented.appliedToSome.includes(tag.tag._id)).map((tagItem) => ({
    ...tagItem,
    actions: ["applyAll", "delete", "edit", "removeAll", "search"]
  })), tagsUnused = tags.filter((tag) => !pickedTagIdsUnique.includes(tag.tag._id)).map((tagItem) => ({
    ...tagItem,
    actions: ["applyAll", "delete", "edit", "search"]
  }));
  let items = [];
  return assetsPicked.length === 0 ? items = tags.map((tagItem) => ({
    ...tagItem,
    actions: ["delete", "edit", "search"]
  })) : (tagsAppliedToAll?.length > 0 && (items = [
    ...items,
    //
    assetsPicked.length === 1 ? "Used" : "Used by all",
    ...tagsAppliedToAll
  ]), tagsAppliedToSome?.length > 0 && (items = [
    ...items,
    //
    "Used by some",
    ...tagsAppliedToSome
  ]), tagsUnused?.length > 0 && (items = [
    ...items,
    //
    "Unused",
    ...tagsUnused
  ])), /* @__PURE__ */ jsx(
    Virtuoso,
    {
      className: "media__custom-scrollbar",
      computeItemKey: (index) => {
        const item = items[index];
        return typeof item == "string" ? item : item.tag._id;
      },
      isScrolling: setIsScrolling,
      itemContent: (index) => /* @__PURE__ */ jsx(VirtualRow$1, { isScrolling, item: items[index] }),
      style: { flex: 1, overflowX: "hidden" },
      totalCount: items.length
    }
  );
}, TagViewHeader = ({ allowCreate, light, title }) => {
  const scheme = useColorSchemeValue(), dispatch = useDispatch(), tagsCreating = useTypedSelector((state) => state.tags.creating), tagsFetching = useTypedSelector((state) => state.tags.fetching), handleTagCreate = () => {
    dispatch(DIALOG_ACTIONS.showTagCreate());
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    Flex,
    {
      align: "center",
      justify: "space-between",
      paddingLeft: 3,
      style: {
        background: light ? getSchemeColor(scheme, "bg") : "inherit",
        borderBottom: "1px solid var(--card-border-color)",
        flexShrink: 0,
        height: `${PANEL_HEIGHT}px`
      },
      children: [
        /* @__PURE__ */ jsxs(Inline, { space: 2, children: [
          /* @__PURE__ */ jsx(Label, { size: 0, children: title }),
          tagsFetching && /* @__PURE__ */ jsx(Label, { size: 0, style: { opacity: 0.3 }, children: "Loading..." })
        ] }),
        allowCreate && /* @__PURE__ */ jsx(Box, { marginRight: 1, children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: tagsCreating,
            fontSize: 1,
            icon: ComposeIcon,
            mode: "bleed",
            onClick: handleTagCreate,
            style: {
              background: "transparent",
              boxShadow: "none"
            }
          }
        ) })
      ]
    }
  ) });
}, TagView = () => {
  const numPickedAssets = useTypedSelector(selectAssetsPickedLength), tags = useTypedSelector(selectTags), fetching = useTypedSelector((state) => state.tags.fetching), fetchComplete = useTypedSelector((state) => state.tags.fetchCount) !== -1, hasTags = !fetching && tags?.length > 0, hasPicked = numPickedAssets > 0;
  return /* @__PURE__ */ jsxs(Flex, { direction: "column", flex: 1, height: "fill", children: [
    /* @__PURE__ */ jsx(
      TagViewHeader,
      {
        allowCreate: !0,
        light: hasPicked,
        title: hasPicked ? "Tags (in selection)" : "Tags"
      }
    ),
    fetchComplete && !hasTags && /* @__PURE__ */ jsx(Box, { padding: 3, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, children: /* @__PURE__ */ jsx("em", { children: "No tags" }) }) }),
    hasTags && /* @__PURE__ */ jsx(TagsVirtualized, {})
  ] });
}, DialogTags = (props) => {
  const {
    children,
    dialog: { id }
  } = props, dispatch = useDispatch(), handleClose = useCallback(() => {
    dispatch(dialogActions.clear());
  }, []);
  return /* @__PURE__ */ jsxs(Dialog, { animate: !0, header: "All Tags", id, onClose: handleClose, width: 1, children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        style: {
          height: "100%",
          minHeight: "420px"
          // explicit height required as <TagView> is virtualized
        },
        children: /* @__PURE__ */ jsx(TagView, {})
      }
    ),
    children
  ] });
}, Dialogs = () => {
  const currentDialogs = useTypedSelector((state) => state.dialog.items), renderDialogs = (dialogs, index) => {
    if (dialogs.length === 0 || index >= dialogs.length)
      return null;
    const dialog = dialogs[index], childDialogs = renderDialogs(dialogs, index + 1);
    return dialog.type === "assetEdit" ? /* @__PURE__ */ jsx(DialogAssetEdit, { dialog, children: childDialogs }, index) : dialog.type === "confirm" ? /* @__PURE__ */ jsx(DialogConfirm, { dialog, children: childDialogs }, index) : dialog.type === "searchFacets" ? /* @__PURE__ */ jsx(DialogSearchFacets, { dialog, children: childDialogs }, index) : dialog.type === "tagCreate" ? /* @__PURE__ */ jsx(DialogTagCreate, { dialog, children: childDialogs }, index) : dialog.type === "tagEdit" ? /* @__PURE__ */ jsx(DialogTagEdit, { dialog, children: childDialogs }, index) : dialog.type === "tags" ? /* @__PURE__ */ jsx(DialogTags, { dialog, children: childDialogs }, index) : null;
  };
  return renderDialogs(currentDialogs, 0);
}, DropzoneDispatchContext = createContext(void 0), DropzoneDispatchProvider = (props) => {
  const { children, open } = props, contextValue = { open };
  return /* @__PURE__ */ jsx(DropzoneDispatchContext.Provider, { value: contextValue, children });
}, useDropzoneActions = () => {
  const context = useContext(DropzoneDispatchContext);
  if (context === void 0)
    throw new Error("useDropzoneActions must be used within an DropzoneDispatchProvider");
  return context;
}, Header = (props) => {
  const { onClose } = props, { open } = useDropzoneActions(), { onSelect } = useAssetSourceActions(), assetTypes = useTypedSelector((state) => state.assets.assetTypes), selectedDocument = useTypedSelector((state) => state.selected.document);
  return /* @__PURE__ */ jsx(Box, { paddingY: 2, children: /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "space-between", children: [
    /* @__PURE__ */ jsx(Box, { flex: 1, marginX: 3, children: /* @__PURE__ */ jsxs(Inline, { style: { whiteSpace: "nowrap" }, children: [
      /* @__PURE__ */ jsx(Text, { textOverflow: "ellipsis", weight: "semibold", children: /* @__PURE__ */ jsx("span", { children: onSelect ? `Insert ${assetTypes.join(" or ")}` : "Browse Assets" }) }),
      selectedDocument && /* @__PURE__ */ jsx(Box, { display: ["none", "none", "block"], children: /* @__PURE__ */ jsxs(Text, { children: [
        /* @__PURE__ */ jsx("span", { style: { margin: "0 0.5em" }, children: /* @__PURE__ */ jsx(Icon, { symbol: "arrow-right" }) }),
        /* @__PURE__ */ jsx("span", { style: { textTransform: "capitalize" }, children: selectedDocument._type })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Flex, { marginX: 2, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          fontSize: 1,
          icon: UploadIcon,
          mode: "bleed",
          onClick: open,
          text: `Upload ${assetTypes.length === 1 ? pluralize(assetTypes[0]) : "assets"}`,
          tone: "primary"
        }
      ),
      onClose && /* @__PURE__ */ jsx(Box, { style: { flexShrink: 0 }, children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: !onClose,
          icon: CloseIcon,
          mode: "bleed",
          onClick: onClose,
          radius: 2
        }
      ) })
    ] })
  ] }) });
}, useBreakpointIndex = () => {
  const mediaQueryLists = studioTheme?.container?.map(
    (width) => window.matchMedia(`(max-width: ${width}px)`)
  ), getBreakpointIndex = () => mediaQueryLists.findIndex((mql) => mql.matches), [value, setValue] = useState(getBreakpointIndex());
  return useEffect(() => {
    const handleBreakpoint = () => {
      setValue(getBreakpointIndex);
    };
    return mediaQueryLists.forEach((mql) => {
      try {
        mql.addEventListener("change", handleBreakpoint);
      } catch {
        try {
          mql.addListener(handleBreakpoint);
        } catch {
        }
      }
    }), () => {
      try {
        mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handleBreakpoint));
      } catch {
        try {
          mediaQueryLists.forEach((mql) => mql.removeListener(handleBreakpoint));
        } catch {
        }
      }
    };
  }, []), value;
}, selectCombinedItems = createSelector(
  [
    (state) => state.assets.allIds,
    (state) => state.uploads.allIds
  ],
  (assetIds, uploadIds) => {
    const assetItems = assetIds.map((id) => ({ id, type: "asset" }));
    return [...uploadIds.map((id) => ({ id, type: "upload" })), ...assetItems];
  }
), CardWrapper$1 = styled(Flex)`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`, CardContainer = styled(Flex)(
  ({ $picked, theme, $updating }) => css`
      border: 1px solid transparent;
      height: 100%;
      pointer-events: ${$updating ? "none" : "auto"};
      position: relative;
      transition: all 300ms;
      user-select: none;
      width: 100%;

      border: ${$picked ? `1px solid ${theme.sanity.color.spot.orange} !important` : "1px solid inherit"};

      ${!$updating && css`
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            border: 1px solid var(--card-border-color);
          }
        }
      `}
    `
), ContextActionContainer$2 = styled(Flex)(
  ({ $scheme }) => css`
      cursor: pointer;
      height: ${PANEL_HEIGHT}px;
      transition: all 300ms;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${getSchemeColor($scheme, "bg")};
        }
      }
    `
), StyledWarningOutlineIcon = styled(WarningFilledIcon)(({ theme }) => ({
  color: theme.sanity.color.spot.red
})), CardAsset = (props) => {
  const { id, selected } = props, scheme = useColorSchemeValue(), shiftPressed = useKeyPress("shift"), dispatch = useDispatch(), lastPicked = useTypedSelector((state) => state.assets.lastPicked), item = useTypedSelector((state) => selectAssetById(state, id)), asset = item?.asset, error = item?.error, isOpaque = item?.asset?.metadata?.isOpaque, picked = item?.picked, updating = item?.updating, { onSelect } = useAssetSourceActions();
  if (!asset)
    return null;
  const handleAssetClick = (e) => {
    e.stopPropagation(), onSelect ? onSelect([
      {
        kind: "assetDocumentId",
        value: asset._id
      }
    ]) : shiftPressed.current ? dispatch(picked ? assetsActions.pick({ assetId: asset._id, picked: !picked }) : assetsActions.pickRange({ startId: lastPicked || asset._id, endId: asset._id })) : dispatch(dialogActions.showAssetEdit({ assetId: asset._id }));
  }, handleContextActionClick = (e) => {
    e.stopPropagation(), onSelect ? dispatch(dialogActions.showAssetEdit({ assetId: asset._id })) : shiftPressed.current && !picked ? dispatch(assetsActions.pickRange({ startId: lastPicked || asset._id, endId: asset._id })) : dispatch(assetsActions.pick({ assetId: asset._id, picked: !picked }));
  }, opacityContainer = updating ? 0.5 : 1, opacityPreview = selected || updating ? 0.25 : 1;
  return /* @__PURE__ */ jsx(CardWrapper$1, { padding: 1, children: /* @__PURE__ */ jsxs(CardContainer, { direction: "column", $picked: picked, $updating: item.updating, children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        flex: 1,
        style: {
          cursor: selected ? "default" : "pointer",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { onClick: handleAssetClick, style: { height: "100%", opacity: opacityPreview }, children: [
            isFileAsset(asset) && /* @__PURE__ */ jsx(FileIcon, { extension: asset.extension, width: "80px" }),
            isImageAsset(asset) && /* @__PURE__ */ jsx(
              Image$1,
              {
                draggable: !1,
                $scheme: scheme,
                $showCheckerboard: !isOpaque,
                src: imageDprUrl(asset, { height: 250, width: 250 }),
                style: {
                  draggable: !1,
                  transition: "opacity 1000ms"
                }
              }
            )
          ] }),
          selected && !updating && /* @__PURE__ */ jsx(
            Flex,
            {
              align: "center",
              justify: "center",
              style: {
                height: "100%",
                left: 0,
                opacity: opacityContainer,
                position: "absolute",
                top: 0,
                width: "100%"
              },
              children: /* @__PURE__ */ jsx(Text, { size: 2, children: /* @__PURE__ */ jsx(CheckmarkCircleIcon, {}) })
            }
          ),
          updating && /* @__PURE__ */ jsx(
            Flex,
            {
              align: "center",
              justify: "center",
              style: {
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%"
              },
              children: /* @__PURE__ */ jsx(Spinner, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      ContextActionContainer$2,
      {
        align: "center",
        onClick: handleContextActionClick,
        paddingX: 1,
        $scheme: scheme,
        style: { opacity: opacityContainer },
        children: [
          onSelect ? /* @__PURE__ */ jsx(
            EditIcon,
            {
              style: {
                flexShrink: 0,
                opacity: 0.5
              }
            }
          ) : /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: picked,
              readOnly: !0,
              style: {
                flexShrink: 0,
                pointerEvents: "none",
                transform: "scale(0.8)"
              }
            }
          ),
          /* @__PURE__ */ jsx(Box, { marginLeft: 2, children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 0, textOverflow: "ellipsis", children: asset.originalFilename }) })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx(
      Box,
      {
        padding: 3,
        style: {
          position: "absolute",
          right: 0,
          top: 0
        },
        children: /* @__PURE__ */ jsx(
          Tooltip,
          {
            animate: !0,
            content: /* @__PURE__ */ jsx(Container$2, { padding: 2, width: 0, children: /* @__PURE__ */ jsx(Text, { size: 1, children: error }) }),
            placement: "left",
            portal: !0,
            children: /* @__PURE__ */ jsx(Text, { size: 1, children: /* @__PURE__ */ jsx(StyledWarningOutlineIcon, { color: "critical" }) })
          }
        )
      }
    )
  ] }) });
};
var CardAsset$1 = memo(CardAsset);
const PREVIEW_WIDTH = 180, createBlob = (img) => new Promise((resolve) => {
  const imageAspect = img.width / img.height, canvas = document.createElement("canvas");
  canvas.width = PREVIEW_WIDTH, canvas.height = Math.max(PREVIEW_WIDTH / imageAspect, 1);
  try {
    canvas.getContext("2d")?.drawImage(img, 0, 0, PREVIEW_WIDTH, PREVIEW_WIDTH / imageAspect), canvas.toBlob(resolve, "image/jpeg");
  } catch (err) {
    console.warn("Unable to generate preview image:", err);
  }
}), createImageEl = (file) => new Promise((resolve) => {
  const blobUrlLarge = window.URL.createObjectURL(file), img = new Image();
  img.onload = () => {
    window.URL.revokeObjectURL(blobUrlLarge), resolve(img);
  }, img.src = blobUrlLarge;
}), generatePreviewBlobUrl = async (file) => {
  const imageEl = await createImageEl(file), blob = await createBlob(imageEl);
  if (!blob)
    throw Error("Unable to generate file Blob");
  return window.URL.createObjectURL(blob);
}, generatePreviewBlobUrl$ = (file) => of(null).pipe(mergeMap(() => from(generatePreviewBlobUrl(file)))), DEFAULT_CONCURRENCY = 4;
function remove(array, item) {
  const index = array.indexOf(item);
  return index > -1 && array.splice(index, 1), array;
}
const createThrottler = (concurrency = DEFAULT_CONCURRENCY) => {
  const currentSubscriptions = [], pendingObservables = [], ready$ = new Subject();
  function request(observable) {
    return new Observable((observer) => {
      if (currentSubscriptions.length >= concurrency)
        return scheduleAndWait$(observable).pipe(mergeMap(request)).subscribe(observer);
      const subscription = observable.subscribe(observer);
      return currentSubscriptions.push(subscription), () => {
        for (remove(currentSubscriptions, subscription), remove(pendingObservables, observable), subscription.unsubscribe(); pendingObservables.length > 0 && currentSubscriptions.length < concurrency; )
          ready$.next(pendingObservables.shift());
      };
    });
  }
  function scheduleAndWait$(observable) {
    return pendingObservables.push(observable), ready$.asObservable().pipe(first((obs) => obs === observable));
  }
  return request;
}, withMaxConcurrency = (func, concurrency = DEFAULT_CONCURRENCY) => {
  const throttler = createThrottler(concurrency);
  return (...args) => from(throttler(func(...args)));
}, fetchExisting$ = (client, type, hash) => client.observable.fetch("*[_type == $documentType && sha1hash == $hash][0]", {
  documentType: type,
  hash
}), readFile$ = (file) => new Observable((subscriber) => {
  const reader = new FileReader();
  return reader.onload = () => {
    subscriber.next(reader.result), subscriber.complete();
  }, reader.onerror = (err) => {
    subscriber.error(err);
  }, reader.readAsArrayBuffer(file), () => {
    reader.abort();
  };
}), hexFromBuffer = (buffer) => Array.prototype.map.call(new Uint8Array(buffer), (x) => `00${x.toString(16)}`.slice(-2)).join(""), hashFile$ = (file) => !window.crypto || !window.crypto.subtle || !window.FileReader ? throwError({
  message: "Unable to generate hash: uploads are only allowed in secure contexts",
  statusCode: 500
}) : readFile$(file).pipe(
  mergeMap((arrayBuffer) => window.crypto.subtle.digest("SHA-1", arrayBuffer)),
  map(hexFromBuffer)
), uploadSanityAsset$ = (client, assetType, file, hash) => of(null).pipe(
  // NOTE: the sanity api will still dedupe unique files, but this saves us from uploading the asset file entirely
  mergeMap(() => fetchExisting$(client, `sanity.${assetType}Asset`, hash)),
  // Cancel if the asset already exists
  mergeMap((existingAsset) => existingAsset ? throwError({
    message: "Asset already exists",
    statusCode: 409
  }) : of(null)),
  mergeMap(() => client.observable.assets.upload(assetType, file, {
    extract: ["blurhash", "exif", "location", "lqip", "palette"],
    preserveFilename: !0
  }).pipe(
    map(
      (event) => event.type === "response" ? {
        // rewrite to a 'complete' event
        asset: event.body.document,
        id: event.body.document._id,
        type: "complete"
      } : event
    )
  ))
), uploadAsset$ = withMaxConcurrency(uploadSanityAsset$), initialState$2 = {
  allIds: [],
  byIds: {}
}, uploadsSlice = createSlice({
  name: "uploads",
  initialState: initialState$2,
  extraReducers: (builder) => {
    builder.addCase(UPLOADS_ACTIONS.uploadComplete, (state, action) => {
      const { asset } = action.payload;
      state.byIds[asset.sha1hash] && (state.byIds[asset.sha1hash].status = "complete");
    });
  },
  reducers: {
    checkRequest(_state, _action) {
    },
    checkComplete(state, action) {
      const { results } = action.payload;
      Object.keys(results).forEach((hash) => {
        const deleteIndex = state.allIds.indexOf(hash);
        if (deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), state.byIds[hash]) {
          const blobUrl = state.byIds[hash].objectUrl;
          blobUrl && window.URL.revokeObjectURL(blobUrl), delete state.byIds[hash];
        }
      });
    },
    previewReady(state, action) {
      const { blobUrl, hash } = action.payload;
      state.byIds[hash] && (state.byIds[hash].objectUrl = blobUrl);
    },
    uploadCancel(state, action) {
      const { hash } = action.payload, deleteIndex = state.allIds.indexOf(hash);
      deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), state.byIds[hash] && delete state.byIds[hash];
    },
    uploadError(state, action) {
      const { hash } = action.payload, deleteIndex = state.allIds.indexOf(hash);
      deleteIndex >= 0 && state.allIds.splice(deleteIndex, 1), delete state.byIds[hash];
    },
    uploadRequest(_state, _action) {
    },
    uploadProgress(state, action) {
      const { event, uploadHash } = action.payload;
      state.byIds[uploadHash].percent = event.percent, state.byIds[uploadHash].status = "uploading";
    },
    uploadStart(state, action) {
      const { uploadItem } = action.payload;
      state.allIds.includes(uploadItem.hash) || state.allIds.push(uploadItem.hash), state.byIds[uploadItem.hash] = uploadItem;
    }
  }
}), uploadsAssetStartEpic = (action$, _state$, { client }) => action$.pipe(
  filter(uploadsActions.uploadStart.match),
  mergeMap((action) => {
    const { file, uploadItem } = action.payload;
    return merge(
      // Generate low res preview
      of(null).pipe(
        mergeMap(() => generatePreviewBlobUrl$(file)),
        mergeMap((url) => of(
          uploadsActions.previewReady({
            blobUrl: url,
            hash: uploadItem.hash
          })
        ))
      ),
      // Upload asset and receive progress / complete events
      of(null).pipe(
        // delay(500000), // debug uploads
        mergeMap(() => uploadAsset$(client, uploadItem.assetType, file, uploadItem.hash)),
        takeUntil(
          action$.pipe(
            filter(uploadsActions.uploadCancel.match),
            filter((v) => v.payload.hash === uploadItem.hash)
          )
        ),
        mergeMap((event) => event?.type === "complete" ? of(
          UPLOADS_ACTIONS.uploadComplete({
            asset: event.asset
          })
        ) : event?.type === "progress" && event?.stage === "upload" ? of(
          uploadsActions.uploadProgress({
            event,
            uploadHash: uploadItem.hash
          })
        ) : empty()),
        catchError(
          (error) => of(
            uploadsActions.uploadError({
              error: {
                message: error?.message || "Internal error",
                statusCode: error?.statusCode || 500
              },
              hash: uploadItem.hash
            })
          )
        )
      )
    );
  })
), uploadsAssetUploadEpic = (action$, state$) => action$.pipe(
  filter(uploadsActions.uploadRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { file, forceAsAssetType } = action.payload;
    return of(action).pipe(
      // Generate SHA1 hash from local file
      // This will throw in insecure contexts (non-localhost / https)
      mergeMap(() => hashFile$(file)),
      // Ignore if the file exists and is currently being uploaded
      filter((hash) => !state.uploads.byIds[hash]),
      // Dispatch start action and begin upload process
      mergeMap((hash) => {
        const uploadItem = {
          _type: "upload",
          assetType: forceAsAssetType || (file.type.indexOf("image") >= 0 ? "image" : "file"),
          hash,
          name: file.name,
          size: file.size,
          status: "queued"
        };
        return of(uploadsActions.uploadStart({ file, uploadItem }));
      })
    );
  })
), uploadsCompleteQueueEpic = (action$) => action$.pipe(
  filter(UPLOADS_ACTIONS.uploadComplete.match),
  mergeMap((action) => of(
    uploadsActions.checkRequest({
      assets: [action.payload.asset]
    })
  ))
), uploadsCheckRequestEpic = (action$, state$, { client }) => action$.pipe(
  filter(uploadsActions.checkRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { assets } = action.payload, documentIds = assets.map((asset) => asset._id), constructedFilter = constructFilter({
      assetTypes: state.assets.assetTypes,
      searchFacets: state.search.facets,
      searchQuery: state.search.query
    }), query = groq`
        *[${constructedFilter} && _id in $documentIds].sha1hash
      `;
    return of(action).pipe(
      delay(1e3),
      // give Sanity some time to register the recently uploaded asset
      mergeMap(() => client.observable.fetch(query, { documentIds })),
      mergeMap((resultHashes) => {
        const checkedResults = assets.reduce((acc, asset) => (acc[asset.sha1hash] = resultHashes.includes(asset.sha1hash) ? asset._id : null, acc), {});
        return of(
          uploadsActions.checkComplete({ results: checkedResults }),
          //
          assetsActions.insertUploads({ results: checkedResults })
        );
      })
    );
  })
), selectUploadsByIds = (state) => state.uploads.byIds, selectUploadsAllIds = (state) => state.uploads.allIds, selectUploadById = createSelector(
  [
    (state) => state.uploads.byIds,
    (_state, uploadId) => uploadId
  ],
  (byIds, uploadId) => byIds[uploadId]
);
createSelector(
  [selectUploadsByIds, selectUploadsAllIds],
  (byIds, allIds) => allIds.map((id) => byIds[id])
);
const uploadsActions = { ...uploadsSlice.actions };
var uploadsReducer = uploadsSlice.reducer;
const CardWrapper = styled(Flex)`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`, CardUpload = (props) => {
  const { id } = props, scheme = useColorSchemeValue(), dispatch = useDispatch(), item = useTypedSelector((state) => selectUploadById(state, id));
  if (!item)
    return null;
  const fileSize = filesize(item.size, { base: 10, round: 0 }), percentLoaded = Math.round(item.percent || 0), isComplete = item.status === "complete", isUploading = item.status === "uploading", isQueued = item.status === "queued";
  let status;
  isComplete && (status = "Verifying"), isUploading && (status = `${percentLoaded}%`), isQueued && (status = "Queued");
  const handleCancelUpload = () => {
    dispatch(uploadsActions.uploadCancel({ hash: item.hash }));
  };
  return /* @__PURE__ */ jsx(CardWrapper, { padding: 1, children: /* @__PURE__ */ jsxs(
    Flex,
    {
      direction: "column",
      flex: 1,
      style: {
        background: getSchemeColor(scheme, "bg"),
        border: "1px solid transparent",
        height: "100%",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              background: "var(--card-fg-color)",
              bottom: 0,
              height: "1px",
              left: 0,
              position: "absolute",
              width: "100%",
              transform: `scaleX(${percentLoaded * 0.01})`,
              transformOrigin: "bottom left",
              transition: "all 1000ms ease-out"
            }
          }
        ),
        /* @__PURE__ */ jsxs(Box, { flex: 1, style: { position: "relative" }, children: [
          item.assetType === "image" && item?.objectUrl && /* @__PURE__ */ jsx(
            Image$1,
            {
              draggable: !1,
              $scheme: scheme,
              src: item.objectUrl,
              style: {
                opacity: 0.4
              }
            }
          ),
          item.assetType === "file" && /* @__PURE__ */ jsx("div", { style: { height: "100%", opacity: 0.1 }, children: /* @__PURE__ */ jsx(FileIcon, { width: "80px" }) }),
          !isComplete && percentLoaded !== 100 && /* @__PURE__ */ jsx(
            Flex,
            {
              align: "center",
              direction: "column",
              justify: "center",
              style: {
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%"
              },
              children: /* @__PURE__ */ jsx(
                Button,
                {
                  fontSize: 4,
                  icon: CloseIcon,
                  mode: "bleed",
                  onClick: handleCancelUpload,
                  padding: 2,
                  style: { background: "none", boxShadow: "none" },
                  tone: "critical"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          Flex,
          {
            align: "center",
            justify: "space-between",
            paddingX: 2,
            style: { height: `${PANEL_HEIGHT}px` },
            children: [
              /* @__PURE__ */ jsx(Box, { flex: 1, marginRight: 1, children: /* @__PURE__ */ jsxs(Text, { size: 0, textOverflow: "ellipsis", children: [
                item.name,
                " (",
                fileSize,
                ")"
              ] }) }),
              /* @__PURE__ */ jsx(Text, { size: 0, style: { flexShrink: 0 }, weight: "semibold", children: status })
            ]
          }
        )
      ]
    }
  ) });
}, CARD_HEIGHT = 220, CARD_WIDTH = 240, VirtualCell = memo(
  ({ item, selected }) => item?.type === "asset" ? /* @__PURE__ */ jsx(CardAsset$1, { id: item.id, selected }) : item?.type === "upload" ? /* @__PURE__ */ jsx(CardUpload, { id: item.id }) : null
), StyledItemContainer = styled.div`
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
`;
function ItemContainer(props) {
  const { context, ...rest } = props;
  return /* @__PURE__ */ jsx(StyledItemContainer, { ...rest });
}
const StyledListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${CARD_WIDTH}px);
  grid-template-rows: repeat(auto-fill, ${CARD_HEIGHT}px);
  justify-content: center;
  margin: 0 auto;
`;
function ListContainer(props) {
  const { context, ...rest } = props;
  return /* @__PURE__ */ jsx(StyledListContainer, { ...rest });
}
const AssetGridVirtualized = (props) => {
  const { items, onLoadMore } = props, selectedAssets = useTypedSelector((state) => state.selected.assets), selectedIds = selectedAssets && selectedAssets.map((asset) => asset._id) || [], totalCount = items?.length;
  return totalCount === 0 ? null : /* @__PURE__ */ jsx(
    VirtuosoGrid,
    {
      className: "media__custom-scrollbar",
      computeItemKey: (index) => items[index]?.id,
      components: {
        Item: ItemContainer,
        List: ListContainer
      },
      endReached: onLoadMore,
      itemContent: (index) => {
        const item = items[index], selected = selectedIds.includes(item?.id);
        return /* @__PURE__ */ jsx(VirtualCell, { item, selected });
      },
      overscan: 48,
      style: { overflowX: "hidden", overflowY: "scroll" },
      totalCount
    }
  );
}, TableHeaderItem = (props) => {
  const { field, title } = props, dispatch = useDispatch(), order = useTypedSelector((state) => state.assets.order), isActive = order.field === field;
  return /* @__PURE__ */ jsx(Label, { muted: !field, size: 0, children: /* @__PURE__ */ jsxs(
    Box,
    {
      onClick: field ? () => {
        if (!(!field || !title))
          if (isActive) {
            const direction = order.direction === "asc" ? "desc" : "asc";
            dispatch(assetsActions.orderSet({ order: { field, direction } }));
          } else
            dispatch(assetsActions.orderSet({ order: { field, direction: "asc" } }));
      } : void 0,
      style: {
        cursor: field ? "pointer" : "default",
        display: "inline",
        whiteSpace: "nowrap"
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              marginRight: "0.4em"
            },
            children: title
          }
        ),
        isActive && order?.direction === "asc" && /* @__PURE__ */ jsx(ChevronUpIcon, {}),
        isActive && order?.direction === "desc" && /* @__PURE__ */ jsx(ChevronDownIcon, {})
      ]
    }
  ) });
}, ContextActionContainer$1 = styled(Flex)(
  ({ $scheme }) => css`
      cursor: pointer;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${getSchemeColor($scheme, "bg")};
        }
      }
    `
), TableHeader = () => {
  const scheme = useColorSchemeValue(), dispatch = useDispatch(), fetching = useTypedSelector((state) => state.assets.fetching), itemsLength = useTypedSelector(selectAssetsLength), numPickedAssets = useTypedSelector(selectAssetsPickedLength), mediaIndex = useMediaIndex(), { onSelect } = useAssetSourceActions(), allSelected = numPickedAssets === itemsLength, handleContextActionClick = (e) => {
    e.stopPropagation(), dispatch(allSelected ? assetsActions.pickClear() : assetsActions.pickAll());
  };
  return /* @__PURE__ */ jsxs(
    Grid,
    {
      style: {
        alignItems: "center",
        background: "var(--card-bg-color)",
        borderBottom: "1px solid var(--card-border-color)",
        gridColumnGap: mediaIndex < 3 ? 0 : "16px",
        gridTemplateColumns: GRID_TEMPLATE_COLUMNS.LARGE,
        height: mediaIndex < 3 ? 0 : `${PANEL_HEIGHT}px`,
        letterSpacing: "0.025em",
        position: "sticky",
        textTransform: "uppercase",
        top: 0,
        visibility: mediaIndex < 3 ? "hidden" : "visible",
        width: "100%",
        zIndex: 1
        // force stacking context
      },
      children: [
        onSelect ? /* @__PURE__ */ jsx(TableHeaderItem, {}) : /* @__PURE__ */ jsx(
          ContextActionContainer$1,
          {
            align: "center",
            justify: "center",
            onClick: handleContextActionClick,
            $scheme: scheme,
            style: {
              height: "100%",
              position: "relative"
            },
            children: /* @__PURE__ */ jsx(
              Checkbox,
              {
                checked: !fetching && allSelected,
                readOnly: !0,
                style: {
                  pointerEvents: "none",
                  // TODO: consider alternative for usability
                  transform: "scale(0.8)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(TableHeaderItem, {}),
        /* @__PURE__ */ jsx(TableHeaderItem, { field: "originalFilename", title: "Filename" }),
        /* @__PURE__ */ jsx(TableHeaderItem, { title: "Resolution" }),
        /* @__PURE__ */ jsx(TableHeaderItem, { field: "mimeType", title: "MIME type" }),
        /* @__PURE__ */ jsx(TableHeaderItem, { field: "size", title: "Size" }),
        /* @__PURE__ */ jsx(TableHeaderItem, { field: "_updatedAt", title: "Last updated" }),
        /* @__PURE__ */ jsx(TableHeaderItem, { title: "References" }),
        /* @__PURE__ */ jsx(TableHeaderItem, {})
      ]
    }
  );
}, REFERENCE_COUNT_VISIBILITY_DELAY = 750, ContainerGrid = styled(Grid)(({ $scheme, $selected, $updating }) => css`
    align-items: center;
    cursor: ${$selected ? "default" : "pointer"};
    height: 100%;
    pointer-events: ${$updating ? "none" : "auto"};
    user-select: none;
    white-space: nowrap;

    ${!$updating && css`
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${getSchemeColor($scheme, "bg")};
        }
      }
    `}
  `), ContextActionContainer = styled(Flex)(
  ({ $scheme }) => css`
      cursor: pointer;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${getSchemeColor($scheme, "bg2")};
        }
      }
    `
), StyledWarningIcon = styled(WarningFilledIcon)(({ theme }) => ({
  color: theme.sanity.color.spot.red
})), TableRowAsset = (props) => {
  const { id, selected } = props, scheme = useColorSchemeValue(), shiftPressed = useKeyPress("shift"), [referenceCountVisible, setReferenceCountVisible] = useState(!1), refCountVisibleTimeout = useRef(null), dispatch = useDispatch(), lastPicked = useTypedSelector((state) => state.assets.lastPicked), item = useTypedSelector((state) => selectAssetById(state, id)), mediaIndex = useMediaIndex(), asset = item?.asset, error = item?.error, isOpaque = item?.asset?.metadata?.isOpaque, picked = item?.picked, updating = item?.updating, { onSelect } = useAssetSourceActions(), handleContextActionClick = useCallback(
    (e) => {
      e.stopPropagation(), asset && (onSelect ? dispatch(dialogActions.showAssetEdit({ assetId: asset._id })) : shiftPressed.current && !picked ? dispatch(assetsActions.pickRange({ startId: lastPicked || asset._id, endId: asset._id })) : dispatch(assetsActions.pick({ assetId: asset._id, picked: !picked })));
    },
    [asset, dispatch, lastPicked, onSelect, picked, shiftPressed]
  ), handleClick = useCallback(
    (e) => {
      e.stopPropagation(), asset && (onSelect ? onSelect([{ kind: "assetDocumentId", value: asset._id }]) : shiftPressed.current ? dispatch(picked ? assetsActions.pick({ assetId: asset._id, picked: !picked }) : assetsActions.pickRange({ startId: lastPicked || asset._id, endId: asset._id })) : dispatch(dialogActions.showAssetEdit({ assetId: asset._id })));
    },
    [asset, dispatch, lastPicked, onSelect, picked, shiftPressed]
  ), opacityCell = updating ? 0.5 : 1, opacityPreview = selected || updating ? 0.1 : 1;
  return useEffect(() => (refCountVisibleTimeout.current = setTimeout(
    () => setReferenceCountVisible(!0),
    REFERENCE_COUNT_VISIBILITY_DELAY
  ), () => {
    refCountVisibleTimeout.current && clearTimeout(refCountVisibleTimeout.current);
  }), []), asset ? /* @__PURE__ */ jsxs(
    ContainerGrid,
    {
      onClick: selected ? void 0 : handleClick,
      $scheme: scheme,
      $selected: selected,
      style: {
        gridColumnGap: mediaIndex < 3 ? 0 : "16px",
        gridRowGap: 0,
        gridTemplateColumns: mediaIndex < 3 ? GRID_TEMPLATE_COLUMNS.SMALL : GRID_TEMPLATE_COLUMNS.LARGE,
        gridTemplateRows: mediaIndex < 3 ? "auto" : "1fr"
      },
      $updating: item.updating,
      children: [
        /* @__PURE__ */ jsx(
          ContextActionContainer,
          {
            onClick: handleContextActionClick,
            $scheme: scheme,
            style: {
              alignItems: "center",
              gridColumn: 1,
              gridRowStart: 1,
              gridRowEnd: "span 5",
              height: "100%",
              justifyContent: "center",
              opacity: opacityCell,
              position: "relative"
            },
            children: onSelect ? /* @__PURE__ */ jsx(
              EditIcon,
              {
                style: {
                  flexShrink: 0,
                  opacity: 0.5
                }
              }
            ) : /* @__PURE__ */ jsx(
              Checkbox,
              {
                checked: picked,
                readOnly: !0,
                style: {
                  pointerEvents: "none",
                  // TODO: consider alternative for usability
                  transform: "scale(0.8)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              gridColumn: 2,
              gridRowStart: 1,
              gridRowEnd: "span 5",
              height: "90px",
              width: "100px"
            },
            children: /* @__PURE__ */ jsxs(Flex, { align: "center", justify: "center", style: { height: "100%", position: "relative" }, children: [
              /* @__PURE__ */ jsxs(Box, { style: { height: "100%", opacity: opacityPreview, position: "relative" }, children: [
                isFileAsset(asset) && /* @__PURE__ */ jsx(FileIcon, { extension: asset.extension, width: "40px" }),
                isImageAsset(asset) && /* @__PURE__ */ jsx(
                  Image$1,
                  {
                    draggable: !1,
                    $scheme: scheme,
                    $showCheckerboard: !isOpaque,
                    src: imageDprUrl(asset, { height: 100, width: 100 })
                  }
                )
              ] }),
              updating && /* @__PURE__ */ jsx(
                Flex,
                {
                  align: "center",
                  justify: "center",
                  style: {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                  },
                  children: /* @__PURE__ */ jsx(Spinner, {})
                }
              ),
              selected && !updating && /* @__PURE__ */ jsx(
                Flex,
                {
                  align: "center",
                  justify: "center",
                  style: {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                  },
                  children: /* @__PURE__ */ jsx(Text, { size: 2, children: /* @__PURE__ */ jsx(CheckmarkCircleIcon, {}) })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            marginLeft: mediaIndex < 3 ? 3 : 0,
            style: {
              gridColumn: 3,
              gridRow: mediaIndex < 3 ? 2 : "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: asset.originalFilename })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            marginLeft: mediaIndex < 3 ? 3 : 0,
            style: {
              gridColumn: mediaIndex < 3 ? 3 : 4,
              gridRow: mediaIndex < 3 ? 3 : "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: isImageAsset(asset) && getAssetResolution(asset) })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              display: mediaIndex < 3 ? "none" : "block",
              gridColumn: 5,
              gridRow: "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: asset.mimeType })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              display: mediaIndex < 3 ? "none" : "block",
              gridColumn: 6,
              gridRow: "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: filesize(asset.size, { base: 10, round: 0 }) })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            marginLeft: mediaIndex < 3 ? 3 : 0,
            style: {
              gridColumn: mediaIndex < 3 ? 3 : 7,
              gridRow: mediaIndex < 3 ? 4 : "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: formatRelative(new Date(asset._updatedAt), /* @__PURE__ */ new Date()) })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              display: mediaIndex < 3 ? "none" : "block",
              gridColumn: 8,
              gridRow: "auto",
              opacity: opacityCell
            },
            children: /* @__PURE__ */ jsx(Text, { muted: !0, size: 1, style: { lineHeight: "2em" }, textOverflow: "ellipsis", children: referenceCountVisible ? /* @__PURE__ */ jsx(WithReferringDocuments, { id, children: ({ isLoading, referringDocuments }) => {
              const uniqueDocuments = getUniqueDocuments(referringDocuments);
              return isLoading ? /* @__PURE__ */ jsx(Fragment, { children: "-" }) : /* @__PURE__ */ jsx(Fragment, { children: Array.isArray(uniqueDocuments) ? uniqueDocuments.length : 0 });
            } }) : /* @__PURE__ */ jsx(Fragment, { children: "-" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          Flex,
          {
            align: "center",
            justify: "center",
            style: {
              gridColumn: mediaIndex < 3 ? 4 : 9,
              gridRowStart: "1",
              gridRowEnd: mediaIndex < 3 ? "span 5" : "auto",
              opacity: opacityCell
            },
            children: error && /* @__PURE__ */ jsx(Box, { padding: 2, children: /* @__PURE__ */ jsx(
              Tooltip,
              {
                animate: !0,
                content: /* @__PURE__ */ jsx(Container$2, { padding: 2, width: 0, children: /* @__PURE__ */ jsx(Text, { size: 1, children: error }) }),
                placement: "left",
                portal: !0,
                children: /* @__PURE__ */ jsx(Text, { size: 1, children: /* @__PURE__ */ jsx(StyledWarningIcon, { color: "critical" }) })
              }
            ) })
          }
        )
      ]
    }
  ) : null;
};
var TableRowAsset$1 = memo(TableRowAsset);
const TableRowUpload = (props) => {
  const { id } = props, scheme = useColorSchemeValue(), dispatch = useDispatch(), item = useTypedSelector((state) => selectUploadById(state, id)), mediaIndex = useMediaIndex();
  if (!item)
    return null;
  const fileSize = filesize(item.size, { base: 10, round: 0 }), percentLoaded = Math.round(item.percent || 0), isComplete = item.status === "complete", isUploading = item.status === "uploading", isQueued = item.status === "queued";
  let status;
  isComplete && (status = "Verifying"), isUploading && (status = `${percentLoaded}%`), isQueued && (status = "Queued");
  const handleCancelUpload = () => {
    dispatch(uploadsActions.uploadCancel({ hash: item.hash }));
  };
  return /* @__PURE__ */ jsxs(
    Grid,
    {
      style: {
        alignItems: "center",
        background: getSchemeColor(scheme, "bg"),
        gridColumnGap: mediaIndex < 3 ? 0 : "16px",
        gridRowGap: 0,
        gridTemplateColumns: mediaIndex < 3 ? GRID_TEMPLATE_COLUMNS.SMALL : GRID_TEMPLATE_COLUMNS.LARGE,
        gridTemplateRows: mediaIndex < 3 ? "auto" : "1fr",
        height: "100%",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              background: "var(--card-fg-color)",
              bottom: 0,
              height: "1px",
              left: 0,
              position: "absolute",
              width: "100%",
              transform: `scaleX(${percentLoaded * 0.01})`,
              transformOrigin: "bottom left",
              transition: "all 1000ms ease-out"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              gridColumn: 2,
              gridRowStart: mediaIndex < 3 ? 1 : "auto",
              gridRowEnd: mediaIndex < 3 ? "span 4" : "auto",
              height: "90px",
              width: "100px"
            },
            children: /* @__PURE__ */ jsxs(Box, { style: { height: "100%", position: "relative" }, children: [
              item.assetType === "image" && item?.objectUrl && /* @__PURE__ */ jsx(
                Image$1,
                {
                  draggable: !1,
                  $scheme: scheme,
                  src: item.objectUrl,
                  style: { opacity: 0.25 }
                }
              ),
              item.assetType === "file" && /* @__PURE__ */ jsx("div", { style: { height: "100%", opacity: 0.1 }, children: /* @__PURE__ */ jsx(FileIcon, { width: "40px" }) }),
              !isComplete && percentLoaded !== 100 && /* @__PURE__ */ jsx(
                Flex,
                {
                  align: "center",
                  justify: "center",
                  style: {
                    position: "absolute",
                    height: "100%",
                    left: 0,
                    top: 0,
                    width: "100%"
                  },
                  children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      fontSize: 3,
                      icon: CloseIcon,
                      mode: "bleed",
                      onClick: handleCancelUpload,
                      padding: 2,
                      style: { background: "none", boxShadow: "none" },
                      tone: "critical"
                    }
                  )
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            style: {
              gridColumn: mediaIndex < 3 ? 3 : "3/8",
              gridRow: mediaIndex < 3 ? "2/4" : "auto",
              marginLeft: mediaIndex < 3 ? 3 : 0
            },
            children: /* @__PURE__ */ jsxs(Stack, { space: 3, children: [
              /* @__PURE__ */ jsxs(Text, { muted: !0, size: 1, textOverflow: "ellipsis", children: [
                item.name,
                " (",
                fileSize,
                ")"
              ] }),
              /* @__PURE__ */ jsx(Text, { size: 1, textOverflow: "ellipsis", weight: "semibold", children: status })
            ] })
          }
        )
      ]
    }
  );
}, VirtualRow = memo(
  ({ item, selected }) => item?.type === "asset" ? /* @__PURE__ */ jsx(Box, { style: { height: "100px" }, children: /* @__PURE__ */ jsx(TableRowAsset$1, { id: item.id, selected }) }) : item?.type === "upload" ? /* @__PURE__ */ jsx(Box, { style: { height: "100px" }, children: /* @__PURE__ */ jsx(TableRowUpload, { id: item.id }) }) : null
), AssetTableVirtualized = (props) => {
  const { items, onLoadMore } = props, selectedAssets = useTypedSelector((state) => state.selected.assets), selectedIds = selectedAssets && selectedAssets.map((asset) => asset._id) || [], totalCount = items?.length;
  return totalCount === 0 ? null : /* @__PURE__ */ jsx(
    GroupedVirtuoso,
    {
      className: "media__custom-scrollbar",
      computeItemKey: (index) => items[index]?.id || index,
      endReached: onLoadMore,
      groupCounts: Array(1).fill(totalCount),
      groupContent: () => /* @__PURE__ */ jsx(TableHeader, {}),
      itemContent: (index) => {
        const item = items[index], selected = selectedIds.includes(item?.id);
        return /* @__PURE__ */ jsx(VirtualRow, { item, selected });
      },
      style: { overflowX: "hidden" }
    }
  );
}, Items = () => {
  const dispatch = useDispatch(), fetchCount = useTypedSelector((state) => state.assets.fetchCount), fetching = useTypedSelector((state) => state.assets.fetching), tagsPanelVisible = useTypedSelector((state) => state.tags.panelVisible), view = useTypedSelector((state) => state.assets.view), combinedItems = useTypedSelector(selectCombinedItems), breakpointIndex = useBreakpointIndex(), hasFetchedOnce = fetchCount >= 0, hasItems = combinedItems.length > 0, handleLoadMoreItems = () => {
    fetching || dispatch(assetsActions.loadNextPage());
  };
  return useEffect(() => {
    breakpointIndex <= 1 && tagsPanelVisible && dispatch(tagsActions.panelVisibleSet({ panelVisible: !1 }));
  }, [breakpointIndex]), /* @__PURE__ */ jsx(Box, { flex: 1, style: { width: "100%" }, children: !hasItems && hasFetchedOnce && !fetching ? /* @__PURE__ */ jsx(Box, { padding: 4, children: /* @__PURE__ */ jsx(Text, { size: 1, weight: "semibold", children: "No results for the current query" }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    view === "grid" && /* @__PURE__ */ jsx(AssetGridVirtualized, { items: combinedItems, onLoadMore: handleLoadMoreItems }),
    view === "table" && /* @__PURE__ */ jsx(AssetTableVirtualized, { items: combinedItems, onLoadMore: handleLoadMoreItems })
  ] }) });
}, Notifications = () => {
  const items = useTypedSelector((state) => state.notifications.items), toast = useToast();
  return useEffect(() => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      toast.push({
        closable: !0,
        status: lastItem.status,
        title: lastItem.title
      });
    }
  }, [items.length]), null;
}, PickedBar = () => {
  const scheme = useColorSchemeValue(), dispatch = useDispatch(), assetsPicked = useTypedSelector(selectAssetsPicked), handlePickClear = () => {
    dispatch(assetsActions.pickClear());
  }, handleDeletePicked = () => {
    dispatch(dialogActions.showConfirmDeleteAssets({ assets: assetsPicked }));
  };
  return assetsPicked.length === 0 ? null : /* @__PURE__ */ jsx(
    Flex,
    {
      align: "center",
      justify: "flex-start",
      style: {
        background: getSchemeColor(scheme, "bg"),
        borderBottom: "1px solid var(--card-border-color)",
        height: `${PANEL_HEIGHT}px`,
        position: "relative",
        width: "100%"
      },
      children: /* @__PURE__ */ jsxs(Flex, { align: "center", paddingX: 3, children: [
        /* @__PURE__ */ jsx(Box, { paddingRight: 2, children: /* @__PURE__ */ jsxs(Label, { size: 0, style: { color: "inherit" }, children: [
          assetsPicked.length,
          " ",
          pluralize("asset", assetsPicked.length),
          " selected"
        ] }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            mode: "bleed",
            onClick: handlePickClear,
            padding: 2,
            style: { background: "none", boxShadow: "none" },
            tone: "default",
            children: /* @__PURE__ */ jsx(Label, { size: 0, children: "Deselect" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            mode: "bleed",
            onClick: handleDeletePicked,
            padding: 2,
            style: { background: "none", boxShadow: "none" },
            tone: "critical",
            children: /* @__PURE__ */ jsx(Label, { size: 0, children: "Delete" })
          }
        )
      ] })
    }
  );
}, initialState$1 = {
  assets: [],
  document: void 0,
  documentAssetIds: []
}, selectedSlice = createSlice({
  name: "selected",
  initialState: initialState$1,
  reducers: {}
});
var selectedReducer = selectedSlice.reducer;
const initialState = {
  items: []
}, notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    add(state, action) {
      const { asset, status, title } = action.payload;
      state.items.push({
        asset,
        status,
        title
      });
    }
  }
}), notificationsAssetsDeleteCompleteEpic = (action$) => action$.pipe(
  filter(assetsActions.deleteComplete.match),
  mergeMap((action) => {
    const { assetIds } = action.payload, deletedCount = assetIds.length;
    return of(
      notificationsSlice.actions.add({
        status: "info",
        title: `${deletedCount} ${pluralize("asset", deletedCount)} deleted`
      })
    );
  })
), notificationsAssetsDeleteErrorEpic = (action$) => action$.pipe(
  filter(assetsActions.deleteError.match),
  mergeMap((action) => {
    const { assetIds } = action.payload, count = assetIds.length;
    return of(
      notificationsSlice.actions.add({
        status: "error",
        title: `Unable to delete ${count} ${pluralize(
          "asset",
          count
        )}. Please review any asset errors and try again.`
      })
    );
  })
), notificationsAssetsTagsAddCompleteEpic = (action$) => action$.pipe(
  filter(ASSETS_ACTIONS.tagsAddComplete.match),
  mergeMap((action) => {
    const count = action?.payload?.assets?.length;
    return of(
      notificationsSlice.actions.add({
        status: "info",
        title: `Tag added to ${count} ${pluralize("asset", count)}`
      })
    );
  })
), notificationsAssetsTagsRemoveCompleteEpic = (action$) => action$.pipe(
  filter(ASSETS_ACTIONS.tagsRemoveComplete.match),
  mergeMap((action) => {
    const count = action?.payload?.assets?.length;
    return of(
      notificationsSlice.actions.add({
        status: "info",
        title: `Tag removed from ${count} ${pluralize("asset", count)}`
      })
    );
  })
), notificationsAssetsUpdateCompleteEpic = (action$) => action$.pipe(
  filter(assetsActions.updateComplete.match),
  bufferTime(2e3),
  filter((actions) => actions.length > 0),
  mergeMap((actions) => {
    const updatedCount = actions.length;
    return of(
      notificationsSlice.actions.add({
        status: "info",
        title: `${updatedCount} ${pluralize("asset", updatedCount)} updated`
      })
    );
  })
), notificationsGenericErrorEpic = (action$) => action$.pipe(
  ofType(
    assetsActions.fetchError.type,
    assetsActions.updateError.type,
    tagsActions.createError.type,
    tagsActions.deleteError.type,
    tagsActions.fetchError.type,
    tagsActions.updateError.type,
    uploadsActions.uploadError.type
  ),
  mergeMap((action) => {
    const error = action.payload?.error;
    return of(
      notificationsSlice.actions.add({
        status: "error",
        title: `An error occured: ${error.message}`
      })
    );
  })
), notificationsTagCreateCompleteEpic = (action$) => action$.pipe(
  filter(tagsActions.createComplete.match),
  mergeMap(() => of(notificationsSlice.actions.add({ status: "info", title: "Tag created" })))
), notificationsTagDeleteCompleteEpic = (action$) => action$.pipe(
  filter(tagsActions.deleteComplete.match),
  mergeMap(() => of(notificationsSlice.actions.add({ status: "info", title: "Tag deleted" })))
), notificationsTagUpdateCompleteEpic = (action$) => action$.pipe(
  filter(tagsActions.updateComplete.match),
  mergeMap(() => of(notificationsSlice.actions.add({ status: "info", title: "Tag updated" })))
), notificationsActions = { ...notificationsSlice.actions };
var notificationsReducer = notificationsSlice.reducer;
const rootEpic = combineEpics(
  assetsDeleteEpic,
  assetsFetchEpic,
  assetsFetchAfterDeleteAllEpic,
  assetsFetchNextPageEpic,
  assetsFetchPageIndexEpic,
  assetsListenerCreateQueueEpic,
  assetsListenerDeleteQueueEpic,
  assetsListenerUpdateQueueEpic,
  assetsOrderSetEpic,
  assetsSearchEpic,
  assetsSortEpic,
  assetsTagsAddEpic,
  assetsTagsRemoveEpic,
  assetsUnpickEpic,
  assetsUpdateEpic,
  dialogClearOnAssetUpdateEpic,
  dialogTagCreateEpic,
  dialogTagDeleteEpic,
  notificationsAssetsDeleteErrorEpic,
  notificationsAssetsDeleteCompleteEpic,
  notificationsAssetsTagsAddCompleteEpic,
  notificationsAssetsTagsRemoveCompleteEpic,
  notificationsAssetsUpdateCompleteEpic,
  notificationsGenericErrorEpic,
  notificationsTagCreateCompleteEpic,
  notificationsTagDeleteCompleteEpic,
  notificationsTagUpdateCompleteEpic,
  searchFacetTagUpdateEpic,
  tagsCreateEpic,
  tagsDeleteEpic,
  tagsFetchEpic,
  tagsListenerCreateQueueEpic,
  tagsListenerDeleteQueueEpic,
  tagsListenerUpdateQueueEpic,
  tagsSortEpic,
  tagsUpdateEpic,
  uploadsAssetStartEpic,
  uploadsAssetUploadEpic,
  uploadsCheckRequestEpic,
  uploadsCompleteQueueEpic
), reducers = {
  assets: assetsReducer,
  debug: debugReducer,
  dialog: dialogReducer,
  notifications: notificationsReducer,
  search: searchReducer,
  selected: selectedReducer,
  tags: tagsReducer,
  uploads: uploadsReducer
}, rootReducer = combineReducers(reducers), isPlainObject = (value) => value !== null && typeof value == "object" && !Array.isArray(value), getAssetIds = (node, acc = []) => (Array.isArray(node) && node.forEach((v) => {
  getAssetIds(v, acc);
}), isPlainObject(node) && (node?.asset?._type === "reference" && node?.asset?._ref && acc.push(node.asset._ref), Object.values(node).forEach((val) => {
  getAssetIds(val, acc);
})), acc), getDocumentAssetIds = (document2) => {
  const assetIds = getAssetIds(document2);
  return [...new Set(assetIds.sort())];
};
class ReduxProvider extends Component {
  store;
  constructor(props) {
    super(props);
    const epicMiddleware = createEpicMiddleware({
      dependencies: {
        client: props.client
        // inject sanity client as a dependency to all epics
      }
    });
    this.store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        /*
        serializableCheck: {
          ignoredActions: [
            assetsActions.deleteError.type,
            uploadsActions.uploadRequest.type,
            uploadsActions.uploadStart.type,
          ]
        },
        */
        // TODO: remove once we're no longer storing non-serializable data in the store
        serializableCheck: !1,
        thunk: !1
      }).prepend(epicMiddleware),
      devTools: !0,
      preloadedState: {
        assets: {
          ...initialState$5,
          assetTypes: props?.assetType ? [props.assetType] : ["file", "image"]
        },
        debug: {
          badConnection: !1,
          enabled: !1
        },
        dialog: { items: [] },
        notifications: { items: [] },
        search: { facets: [], query: "" },
        selected: {
          assets: props.selectedAssets || [],
          document: props.document,
          documentAssetIds: props.document ? getDocumentAssetIds(props.document) : []
        },
        tags: {
          allIds: [],
          byIds: {},
          creating: !1,
          fetchCount: -1,
          fetching: !1,
          panelVisible: !0
        },
        uploads: {
          allIds: [],
          byIds: {}
        }
      }
    }), epicMiddleware.run(rootEpic);
  }
  render() {
    return /* @__PURE__ */ jsx(Provider, { store: this.store, children: this.props.children });
  }
}
const TagsPanel = () => useTypedSelector((state) => state.tags.panelVisible) ? /* @__PURE__ */ jsx(
  Box,
  {
    style: {
      position: "relative",
      width: TAGS_PANEL_WIDTH
    },
    children: /* @__PURE__ */ jsx(
      Box,
      {
        className: "media__custom-scrollbar",
        style: {
          borderLeft: "1px solid var(--card-border-color)",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%"
        },
        children: /* @__PURE__ */ jsx(TagView, {})
      }
    )
  }
) : null, UploadContainer = styled.div`
  color: white;
  height: 100%;
  min-height: 100%;
  right: 0;
  top: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`, DragActiveContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3;
`;
async function filterFiles(fileList) {
  const files = Array.from(fileList), filteredFiles = [];
  for (const file of files)
    try {
      await file.slice(0, 1).arrayBuffer(), filteredFiles.push(file);
    } catch {
    }
  return filteredFiles;
}
const UploadDropzone = (props) => {
  const { children } = props, {
    dropzone: { maxSize }
  } = useToolOptions(), { onSelect } = useAssetSourceActions(), dispatch = useDispatch(), assetTypes = useTypedSelector((state) => state.assets.assetTypes), isImageAssetType = assetTypes.length === 1 && assetTypes[0] === "image", handleDrop = async (acceptedFiles) => {
    acceptedFiles.forEach(
      (file) => dispatch(
        uploadsActions.uploadRequest({
          file,
          forceAsAssetType: assetTypes.length === 1 ? assetTypes[0] : void 0
        })
      )
    );
  }, handleDropRejected = (rejections) => {
    rejections.flatMap(({ errors }) => errors.map(({ code }) => code)).includes("file-too-large") && dispatch(
      notificationsActions.add({
        status: "error",
        title: "One or more files exceed the maximum upload size."
      })
    );
  }, handleFileGetter = async (event) => {
    let fileList;
    if (event.type === "drop" && "dataTransfer" in event && (fileList = event?.dataTransfer?.files), event.type === "change") {
      const target = event?.target;
      target?.files && (fileList = target.files);
    }
    if (!fileList)
      return [];
    const files = await filterFiles(fileList);
    return fileList?.length !== files.length && dispatch(
      notificationsActions.add({
        status: "error",
        title: "Unable to upload some items (folders and packages aren't supported)"
      })
    ), files;
  }, { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: isImageAssetType ? "image/*" : "",
    getFilesFromEvent: handleFileGetter,
    noClick: !0,
    // HACK: Disable drag and drop functionality when in a selecting context
    // (This is currently due to Sanity's native image input taking precedence with drag and drop)
    noDrag: !!onSelect,
    onDrop: handleDrop,
    maxSize,
    onDropRejected: handleDropRejected
  });
  return /* @__PURE__ */ jsx(DropzoneDispatchProvider, { open, children: /* @__PURE__ */ jsxs(UploadContainer, { ...getRootProps(), children: [
    /* @__PURE__ */ jsx("input", { ...getInputProps() }),
    isDragActive && /* @__PURE__ */ jsx(DragActiveContainer, { children: /* @__PURE__ */ jsx(Flex, { direction: "column", justify: "center", style: { color: white.hex }, children: /* @__PURE__ */ jsx(Text, { size: 3, style: { color: "inherit" }, children: "Drop files to upload" }) }) }),
    children
  ] }) });
}, BrowserContent = ({ onClose }) => {
  const client = useVersionedClient(), [portalElement, setPortalElement] = useState(null), dispatch = useDispatch();
  return useEffect(() => {
    const handleAssetUpdate = (update) => {
      const { documentId, result, transition } = update;
      transition === "appear" && dispatch(assetsActions.listenerCreateQueue({ asset: result })), transition === "disappear" && dispatch(assetsActions.listenerDeleteQueue({ assetId: documentId })), transition === "update" && dispatch(assetsActions.listenerUpdateQueue({ asset: result }));
    }, handleTagUpdate = (update) => {
      const { documentId, result, transition } = update;
      transition === "appear" && dispatch(tagsActions.listenerCreateQueue({ tag: result })), transition === "disappear" && dispatch(tagsActions.listenerDeleteQueue({ tagId: documentId })), transition === "update" && dispatch(tagsActions.listenerUpdateQueue({ tag: result }));
    };
    dispatch(assetsActions.loadPageIndex({ pageIndex: 0 })), dispatch(tagsActions.fetchRequest());
    const subscriptionAsset = client.listen(
      groq`*[_type in ["sanity.fileAsset", "sanity.imageAsset"] && !(_id in path("drafts.**"))]`
    ).subscribe(handleAssetUpdate), subscriptionTag = client.listen(groq`*[_type == "${TAG_DOCUMENT_NAME}" && !(_id in path("drafts.**"))]`).subscribe(handleTagUpdate);
    return () => {
      subscriptionAsset?.unsubscribe(), subscriptionTag?.unsubscribe();
    };
  }, [client, dispatch]), /* @__PURE__ */ jsx(PortalProvider, { element: portalElement, children: /* @__PURE__ */ jsxs(UploadDropzone, { children: [
    /* @__PURE__ */ jsx(Dialogs, {}),
    /* @__PURE__ */ jsx(Notifications, {}),
    /* @__PURE__ */ jsx(Card, { display: "flex", height: "fill", ref: setPortalElement, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", flex: 1, children: [
      /* @__PURE__ */ jsx(Header, { onClose }),
      /* @__PURE__ */ jsx(Controls, {}),
      /* @__PURE__ */ jsxs(Flex, { flex: 1, children: [
        /* @__PURE__ */ jsxs(Flex, { align: "flex-end", direction: "column", flex: 1, style: { position: "relative" }, children: [
          /* @__PURE__ */ jsx(PickedBar, {}),
          /* @__PURE__ */ jsx(Items, {})
        ] }),
        /* @__PURE__ */ jsx(TagsPanel, {})
      ] }),
      /* @__PURE__ */ jsx(DebugControls, {})
    ] }) })
  ] }) });
}, Browser = (props) => {
  const client = useVersionedClient();
  return /* @__PURE__ */ jsx(
    ReduxProvider,
    {
      assetType: props?.assetType,
      client,
      document: props?.document,
      selectedAssets: props?.selectedAssets,
      children: /* @__PURE__ */ jsxs(AssetBrowserDispatchProvider, { onSelect: props?.onSelect, children: [
        /* @__PURE__ */ jsx(GlobalStyle, {}),
        /* @__PURE__ */ jsx(BrowserContent, { onClose: props?.onClose })
      ] })
    }
  );
}, FormBuilderTool = (props) => {
  const { onClose } = props, portalElement = useRootPortalElement(), currentDocument = useFormValue([]);
  useKeyPress("escape", onClose);
  const handleStopPropagation = (event) => {
    event.nativeEvent.stopImmediatePropagation(), event.stopPropagation();
  }, { zIndex } = useLayer();
  return /* @__PURE__ */ jsx(PortalProvider, { element: portalElement, children: /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
    Box,
    {
      onDragEnter: handleStopPropagation,
      onDragLeave: handleStopPropagation,
      onDragOver: handleStopPropagation,
      onDrop: handleStopPropagation,
      onMouseUp: handleStopPropagation,
      style: {
        bottom: 0,
        height: "auto",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex
      },
      children: /* @__PURE__ */ jsx(Browser, { document: currentDocument, ...props })
    }
  ) }) });
}, useRootPortalElement = () => {
  const [container] = useState(() => document.createElement("div"));
  return useEffect(() => (container.classList.add("media-portal"), document.body.appendChild(container), () => {
    document.body.removeChild(container);
  }), [container]), container;
}, Tool = () => /* @__PURE__ */ jsx(Flex, { direction: "column", height: "fill", flex: 1, children: /* @__PURE__ */ jsx(Browser, {}) });
var mediaTag = {
  title: "Media Tag",
  icon: TagIcon,
  name: TAG_DOCUMENT_NAME,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "slug"
    }
  ],
  preview: {
    select: {
      name: "name"
    },
    prepare(selection) {
      const { name } = selection;
      return {
        media: TagIcon,
        title: name?.current
      };
    }
  }
};
const plugin = {
  icon: ImageIcon,
  name: "media",
  title: "Media"
}, mediaAssetSource = {
  ...plugin,
  component: FormBuilderTool
}, tool = {
  ...plugin,
  component: Tool,
  // @ts-expect-error TS doesn't know about this internal field see https://github.com/sanity-io/sanity/pull/7980
  __internalApplicationType: "sanity/media"
}, media = definePlugin((options) => ({
  name: "media",
  studio: {
    components: {
      layout: (props) => /* @__PURE__ */ jsx(ToolOptionsProvider, { options, children: props.renderDefault(props) })
    }
  },
  form: {
    file: {
      assetSources: (prev) => [...prev, mediaAssetSource]
    },
    image: {
      assetSources: (prev) => [...prev, mediaAssetSource]
    }
  },
  schema: {
    types: [mediaTag]
  },
  tools: (prev) => [...prev, tool]
}));
export {
  media,
  mediaAssetSource
};
//# sourceMappingURL=index.mjs.map
