window.onload = function() {
    ace.require("ace/ext/language_tools");
    var modelist = ace.require("ace/ext/modelist");
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    
    var filePath = "imaginaryFile.js";
    var mode = modelist.getModeForPath(filePath).mode;
    editor.session.setMode(mode);
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    });
};