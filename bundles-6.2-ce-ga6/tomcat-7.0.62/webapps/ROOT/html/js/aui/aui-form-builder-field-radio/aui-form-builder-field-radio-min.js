YUI.add("aui-form-builder-field-radio",function(e,t){var n=e.Lang,r=e.Escape,i="builder",s="checked",o="choice",u="container",a="disabled",f="",l="field",c="form-builder-field",h="form-builder-radio-field",p="id",d="input",t="name",v="node",m="options",g="predefinedValue",y="radio",b=" ",w="templateNode",E=e.getClassName,S=E(l),x=E(l,o),T=E(l,y),N=E(c),C=E(c,v),k=E(c,m,u),L='<div class="'+k+'"></div>',A='<div><input id="{id}" class="'+[S,x,T,C].join(b)+'" name="{name}" type="radio" value="{value}" {checked} {disabled} /><label class="field-label" for="{id}">{label}</label></div>',O=e.Component.create({NAME:h,ATTRS:{template:{valueFn:function(){return A}}},CSS_PREFIX:N,EXTENDS:e.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){return L},_uiSetDisabled:function(e){var t=this,n=t.get(w);n.all(d).each(function(t){e?t.setAttribute(a,e):t.removeAttribute(a)})},_uiSetOptions:function(i){var s=this,o=[],u=0,l=s.get(g),c=s.get(w);e.each(i,function(i,c,h){var d=e.Array.indexOf(l,i.value)>-1;o.push(n.sub(A,{checked:d?'checked="checked"':f,disabled:s.get(a)?'disabled="disabled"':f,id:r.html(s.get(p)+u++),label:r.html(i.label),name:r.html(s.get(t)),value:r.html(i.value)}))}),s.optionNodes=e.NodeList.create(o.join(f)),c.setContent(s.optionNodes)},_uiSetPredefinedValue:function(e){var t=this,n=t.optionNodes;if(!n)return;n.set(s,!1),n.all('input[value="'+r.html(e)+'"]').set(s,!0)}}});e.FormBuilderRadioField=O,e.FormBuilder.types.radio=e.FormBuilderRadioField},"2.0.0",{requires:["aui-form-builder-field-base"]});