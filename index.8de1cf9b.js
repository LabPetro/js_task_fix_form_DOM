document.querySelectorAll("input[name]").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.replace(/([A-Z])/g," $1"),e.parentNode.insertBefore(t,e);var a=e.name.charAt(0).toUpperCase()+e.name.slice(1);e.setAttribute("placeholder",a.replace(/([A-Z])/g," $1"))});
//# sourceMappingURL=index.8de1cf9b.js.map
