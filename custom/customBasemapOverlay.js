define(["dojo/_base/declare", "dijit/form/ValidationTextBox", "dijit/form/NumberTextBox", "dijit/form/CheckBox", "dojo/_base/lang", "dojo/on", "dojo/dom-construct", "js/portal",
    "dijit/_WidgetBase","dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dojo/text!./templates/customBasemapOverlay.html"], 
    function(declare, ValidationTextBox, NumberTextBox, CheckBox, lang, on, domConstruct, portal, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
        templateString:template,
        postCreate:function(){
            portal.addOverlay(this);
            if(this.params.closeable)
            {
                var clsBtn=domConstruct.create("span", {innerHTML:"[ - ]", style:"color:#006BB2; cursor:pointer;"});
                on(domConstruct.place(clsBtn, this.closeButton, "last"), "click", lang.hitch(this, function(){
                    portal.removeOverlay(this);
                    this.destroy();
                }));
            }
                
        }
    });
});