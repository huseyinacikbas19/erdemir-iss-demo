export const icons={
 home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 tiffin:'<rect x="5" y="6" width="14" height="15" rx="3"/><path d="M5 11h14M5 16h14M9 6V3h6v3"/>',
 bowl:'<path d="M3 12h18a9 9 0 0 1-18 0ZM7 6V3m5 5V3m5 3V3M8 21h8"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18M8 15h2m4 0h2m-8 3h2"/>',
 truck:'<path d="M3 5h12v12H3zM15 10h4l3 4v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
 pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/>',
 bell:'<path d="M5 17h14l-2-3V9A5 5 0 0 0 7 9v5Zm5 4h4"/>',
 leaf:'<path d="M20 3C8 2 2 9 5 16s17 5 15-13ZM5 20l10-11"/>',
 recycle:'<path d="m9 4 3-2 5 8h-5m5-5v5m4 4 1 4H12l3-4m-1 7-2-3M6 19H2l5-9 2 4M3 11l4-1"/>',
 star:'<path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
 bag:'<path d="M4 7h16l1 14H3ZM8 8V6a4 4 0 0 1 8 0v2"/>',
 coffee:'<path d="M3 8h14v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM17 9h2a3 3 0 0 1 0 6h-2M6 3v2m5-2v2"/>',
 shield:'<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6ZM8 12l3 3 5-6"/>',
 chart:'<path d="M3 3v18h18M7 16v-5m5 5V7m5 9V4"/>',
 settings:'<path d="m9 3-1 3-3 1-2 4 2 3v3l4 3 3-1 3 1 4-3v-3l2-3-2-4-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/>',
 search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 logout:'<path d="M9 3H3v18h6m6-15 6 6-6 6m-8-6h14"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
 filter:'<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
 phone:'<path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c-1 6-21-10-16-16Z"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v7m0-11v1"/>',
 scan:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 7h3v3H7Zm7 0h3v3h-3ZM7 14h3v3H7Zm7 0h3v3h-3Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
 edit:'<path d="m15 4 5 5-11 11-6 1 1-6ZM12 7l5 5"/>',
 heart:'<path d="M12 21 3 12C-3 5 7-2 12 6c5-8 15-1 9 6Z"/>'
};
export const icon=(name,cls='')=>`<svg class="icon ${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.grid}</svg>`;
export const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const link=(id,label,cls='btn',ico='arrow')=>`<a class="${cls}" href="#/${id}">${label}${ico?icon(ico):''}</a>`;
export const button=(label,action,cls='btn',ico='')=>`<button type="button" class="${cls}" data-action="${action}">${ico?icon(ico):''}${label}</button>`;
export const badge=(text,type)=>`<span class="badge ${type||(/Teslim|Aktif|Onay|Tamam|Hazır/.test(text)?'green':/Yolda|Dağıtım/.test(text)?'blue':/İptal|Gecik/.test(text)?'red':'amber')}"><span class="dot"></span>${text}</span>`;
export const heading=(eyebrow,title,desc,actions='')=>`<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div><div class="heading-actions">${actions}</div></div>`;
export const section=(title,sub='',action='')=>`<div class="section-heading"><div><h2>${title}</h2>${sub?`<p>${sub}</p>`:''}</div>${action}</div>`;
export const field=(label,content,wide=false)=>`<label class="field ${wide?'wide':''}"><span>${label}</span>${content}</label>`;
export const input=(name,value='',type='text',attrs='')=>`<input name="${name}" type="${type}" value="${esc(value)}" ${attrs}>`;
export const select=(name,values)=>`<select name="${name}">${values.map(v=>`<option>${v}</option>`).join('')}</select>`;
export const stats=(items)=>`<div class="stats">${items.map(([title,value,note,ico])=>`<div class="stat"><div class="stat-top"><span>${title}</span>${icon(ico||'chart')}</div><strong>${value}</strong><small>${note}</small></div>`).join('')}</div>`;
export const empty=(title,desc)=>`<div class="empty">${icon('search')}<h3>${title}</h3><p>${desc}</p></div>`;
export function routeMap(large=false){return `<div class="route-map ${large?'large':''}"><div class="map-grid"></div><div class="map-river"></div><div class="block block-a">MERKEZ OFİS</div><div class="block block-b">BAKIM ATÖLYESİ</div><div class="block block-c">LOJİSTİK</div><div class="map-road r1"></div><div class="map-road r2"></div><div class="map-road r3"></div><svg class="map-line" viewBox="0 0 600 300" preserveAspectRatio="none"><path d="M95 235H220V160H425V72" fill="none" stroke="var(--brand)" stroke-width="5" stroke-linecap="round" stroke-dasharray="9 8"/></svg><span class="map-marker origin">${icon('tiffin')}</span><span class="map-marker courier">${icon('truck')}</span><span class="map-marker destination">${icon('pin')}</span><span class="map-label">KAMPÜS TESLİMAT ROTASI · TEMSİLİ</span><span class="map-live"><i></i> Örnek rota</span></div>`;}
export function table(headers,rows,opts={}){return `<div class="table-card"><div class="table-tools"><div class="search-field">${icon('search')}<input aria-label="Tabloda ara" placeholder="${opts.search||'Kayıt ara...'}" data-search></div><div class="table-tool-actions">${opts.filter?`<select aria-label="Durum filtresi" data-status-filter><option value="">Tüm durumlar</option>${opts.filter.map(x=>`<option>${x}</option>`).join('')}</select>`:''}${button('Dışa aktar','export','btn small secondary','download')}</div></div><div class="table-scroll"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}<th><span class="sr-only">İşlem</span></th></tr></thead><tbody>${rows.map((row,i)=>`<tr data-row data-record="${i}">${row.map((c,j)=>`<td ${j===0?'class="primary-cell"':''}>${c}</td>`).join('')}<td>${button('Detay','record:'+i,'row-action','chevron')}</td></tr>`).join('')}</tbody></table></div><div class="table-empty" hidden>Aramanızla eşleşen kayıt yok.</div><div class="table-footer"><span data-row-count>${rows.length} kayıt gösteriliyor</span><span>Sayfa 1 / 1</span></div></div>`;}
export function mealCard(meal,compact=false){return `<article class="meal-card ${compact?'compact':''}" data-category="${meal.category}"><a href="#/package-detail?meal=${meal.id}" class="meal-photo"><img src="assets/${meal.img}" alt="${meal.name}" loading="lazy"><span class="photo-tag">${meal.tag}</span><span class="meal-heart">${icon('heart')}</span></a><div class="meal-content"><div class="meal-meta"><span>${meal.kcal} kcal</span><span>4 çeşit</span><span>${meal.allergens}</span></div><h3>${meal.name}</h3><p>${meal.desc}</p><div class="meal-bottom"><span>${meal.price}</span>${link('reserve?meal='+meal.id,'Seç','text-link','plus')}</div></div></article>`;}
