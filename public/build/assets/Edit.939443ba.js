import{u as p,j as s,a as r,H as u,d as l}from"./app.05f5ea55.js";import{C as c,A as h}from"./App.68efa155.js";import{H as i}from"./Header.a5dc6bdd.js";import{B as f}from"./Button.df2fef76.js";import{A as g}from"./ArticleForm.d1c654cb.js";import"./clsx.m.256e9345.js";import"./Input.61b64340.js";import"./browser.b853d08f.js";import"./Label.a02752fd.js";function y({article:t,statuses:o}){const{data:e,setData:d}=p({title:t.title,teaser:t.teaser,category_id:t.category,body:t.body,picture:"",tags:t.tags,status:o.find(a=>a.id==t.status)}),n=a=>{a.preventDefault(),l.Inertia.post(route("articles.update",t.slug),{...e,_method:"PUT",category_id:e.category_id.id,status:e.status.id,tags:e.tags.map(m=>m.id)})};return s("div",{children:[r(u,{title:"Create new article"}),s(i,{children:[r(i.Title,{children:e.title||"The title..."}),r(i.Subtitle,{children:e.teaser||"The teaser..."})]}),r(c,{children:s("form",{onSubmit:n,children:[r(g,{data:e,setData:d}),r(f,{children:"Update"})]})})]})}y.layout=t=>r(h,{children:t});export{y as default};