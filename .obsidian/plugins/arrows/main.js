/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianArrows
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function _hasArrows(str) {
  return /I->/.test(str) || /<-I/.test(str) || /->I/g.test(str) || /I<-/g.test(str) || /-->/g.test(str) || /o>/g.test(str) || /<o/g.test(str) || /o->/g.test(str) || /~~>/g.test(str) || /<~~/g.test(str) || /L>/g.test(str) || /<L/g.test(str) || /->/g.test(str) || /<-/g.test(str) || /=>/g.test(str) || /<=/g.test(str) || /<>/g.test(str);
}
function _replaceArrows(str) {
  return str.replace(/I->/g, "\u21A6").replace(/<-I/g, "\u21A4").replace(/->I/g, "\u21E5").replace(/I<-/g, "\u21E4").replace(/-->/g, "\u21C9").replace(/o>/g, "\u21BA").replace(/<o/g, "\u21BB").replace(/o->/g, "\u21AC").replace(/~~>/g, "\u219D").replace(/<~~/g, "\u219C").replace(/L>/g, "\u21B3").replace(/<L/g, "\u21B2").replace(/->/g, "\u2192").replace(/<-/g, "\u2190").replace(/=>/g, "\u21D2").replace(/<=/g, "\u21D0").replace(/<>/g, "\u2194");
}
var ObsidianArrows = class extends import_obsidian.Plugin {
  _replaceArrowsInCurrentLine(editor) {
    const currentLineNumber = editor.getCursor().line;
    const origCursorPos = editor.getCursor("anchor");
    const currentLineContent = editor.getLine(currentLineNumber);
    if (_hasArrows(currentLineContent)) {
      editor.setLine(currentLineNumber, _replaceArrows(currentLineContent));
      editor.setCursor(origCursorPos);
    }
  }
  _replaceArrowsInCurrentFile(editor) {
    const content = editor.getValue();
    editor.setValue(_replaceArrows(content));
  }
  onload() {
    console.log("Loading Obsidian Arrows...");
    this.registerEvent(
      this.app.workspace.on("editor-change", this._replaceArrowsInCurrentLine)
    );
    this.addCommand({
      id: "replace-all-arrows",
      name: "Replaces all arrows in the current file.",
      mobileOnly: false,
      editorCallback: this._replaceArrowsInCurrentFile
    });
    console.log("Loaded Obsidian Arrows.");
  }
  onunload() {
    console.log("Unloaded Obsidian Arrows.");
  }
};
