define(["dojo/_base/declare", "dijit/form/ValidationTextBox", "dijit/form/NumberTextBox", "dijit/form/CheckBox", "dojo/_base/lang", "dojo/on",
    "dijit/_WidgetBase","dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dojo/text!./templates/customBasemapOverlay.html"], 
    function(declare, ValidationTextBox, NumberTextBox, CheckBox, lang, on, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
        templateString:template,
        constructor:function(){
            
        }
    });
});