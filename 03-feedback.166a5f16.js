const e=document.querySelector("form"),{email:t,message:a}=e.elements;let r=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t.value=r.email||"",a.value=r.message||"";e.addEventListener("input",(e=>{r[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))})),e.addEventListener("submit",(t=>{t.preventDefault(),e.reset(),localStorage.removeItem("feedback-form-state"),console.log(r),r={}}));
//# sourceMappingURL=03-feedback.166a5f16.js.map