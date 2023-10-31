import{W as f,g as n,a as p,c as l,s as F,d as i,b as d,u as m,e as Q,f as b,o as h,q as y,h as w,i as C,w as D,j as g,k as N,l as A,m as S,n as M,p as L,r as k}from"./index-54bd6c42.js";class P extends f{constructor(){super(...arguments),this.unsubscribesMap=new Map}async addDocument(e){const t=n(),{reference:r,data:s}=e,a=await p(l(t,r),s);return{reference:{id:a.id,path:a.path}}}async setDocument(e){const t=n(),{reference:r,data:s,merge:a}=e;await F(i(t,r),s,{merge:a})}async getDocument(e){const t=n(),{reference:r}=e,s=await d(i(t,r)),a=s.data();return{snapshot:{id:s.id,path:s.ref.path,data:a===void 0?null:a}}}async updateDocument(e){const t=n(),{reference:r,data:s}=e;await m(i(t,r),s)}async deleteDocument(e){const t=n(),{reference:r}=e;await Q(i(t,r))}async getCollection(e){const t=await this.buildCollectionQuery(e);return{snapshots:(await b(t)).docs.map(s=>({id:s.id,path:s.ref.path,data:s.data()}))}}async getCollectionGroup(e){const t=await this.buildCollectionQuery(e);return{snapshots:(await b(t)).docs.map(s=>({id:s.id,path:s.ref.path,data:s.data()}))}}async enableNetwork(){throw this.unimplemented("Not implemented on web.")}async disableNetwork(){throw this.unimplemented("Not implemented on web.")}async addDocumentSnapshotListener(e,t){const r=n(),s=h(i(r,e.reference),o=>{const u=o.data(),c={snapshot:{id:o.id,path:o.ref.path,data:u===void 0?null:u}};t(c)}),a=Date.now().toString();return this.unsubscribesMap.set(a,s),a}async addCollectionSnapshotListener(e,t){const r=await this.buildCollectionQuery(e),s=h(r,o=>{const u={snapshots:o.docs.map(c=>({id:c.id,path:c.ref.path,data:c.data()}))};t(u)}),a=Date.now().toString();return this.unsubscribesMap.set(a,s),a}async removeSnapshotListener(e){const t=this.unsubscribesMap.get(e.callbackId);t&&(t(),this.unsubscribesMap.delete(e.callbackId))}async removeAllListeners(){this.unsubscribesMap.forEach(e=>e()),this.unsubscribesMap.clear()}async buildCollectionQuery(e){const t=n();let r;if(e.compositeFilter){const s=await this.buildFirebaseQueryCompositeFilterConstraint(e.compositeFilter),a=await this.buildFirebaseQueryNonFilterConstraints(e.queryConstraints||[]);r=y(l(t,e.reference),s,...a)}else{const s=await this.buildFirebaseQueryConstraints(e.queryConstraints||[]);r=y(l(t,e.reference),...s)}return r}buildFirebaseQueryCompositeFilterConstraint(e){const t=this.buildFirebaseQueryFilterConstraints(e.queryConstraints);return e.type==="and"?w(...t):C(...t)}buildFirebaseQueryFilterConstraints(e){const t=[];for(const r of e){const s=this.buildFirebaseQueryFilterConstraint(r);t.push(s)}return t}buildFirebaseQueryFilterConstraint(e){return e.type==="where"?this.buildFirebaseQueryFieldFilterConstraint(e):this.buildFirebaseQueryCompositeFilterConstraint(e)}buildFirebaseQueryFieldFilterConstraint(e){return D(e.fieldPath,e.opStr,e.value)}async buildFirebaseQueryNonFilterConstraints(e){const t=[];for(const r of e){const s=await this.buildFirebaseQueryNonFilterConstraint(r);t.push(s)}return t}async buildFirebaseQueryNonFilterConstraint(e){switch(e.type){case"orderBy":return k(e.fieldPath,e.directionStr);case"limit":return L(e.limit);case"limitToLast":return M(e.limit);case"startAt":case"startAfter":case"endAt":case"endBefore":{const t=n(),r=await d(i(t,e.reference));switch(e.type){case"startAt":return S(r);case"startAfter":return A(r);case"endAt":return N(r);case"endBefore":return g(r)}}}}async buildFirebaseQueryConstraints(e){const t=[];for(const r of e){const s=await this.buildFirebaseQueryConstraint(r);t.push(s)}return t}async buildFirebaseQueryConstraint(e){return e.type==="where"?this.buildFirebaseQueryFieldFilterConstraint(e):await this.buildFirebaseQueryNonFilterConstraint(e)}}export{P as FirebaseFirestoreWeb};