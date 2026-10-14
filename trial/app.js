
document.querySelectorAll('.heart').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();x.textContent=x.textContent==='♡'?'♥':'♡'}));

const PURCHASE_COMMON_NOTICES = [
'제품 수령 후 안내된 기한 내 콘텐츠 제작·업로드·제출을 완료하지 않은 경우',
'신청한 참여 유형과 다른 형태의 콘텐츠를 제출한 경우',
'필수 미션, 키워드, 협찬 고지 등 안내된 콘텐츠 제작 기준을 충족하지 않은 경우',
'브랜드 및 상품 노출 비중, 언급 위치, 영상 길이, 업로드 방식 등 지정된 제작 조건을 준수하지 않은 경우',
'상품 파손·변질 등 이상이 있음에도 안내된 기한 내 접수 및 문의 없이 콘텐츠를 게시한 경우',
'수정 요청 사항을 안내된 기한 내 반영하지 않은 경우',
'필수 유지기간 내 게시물을 삭제하거나 비공개로 전환한 경우',
'콘텐츠에 타 브랜드 제품 또는 로고를 노출한 경우',
'상세페이지 이미지, 타인의 사진·영상 또는 AI 생성 이미지·영상을 사용한 경우',
'원산지, 성분, 규격, 기능, 효과 등 공식 안내에서 확인되지 않은 내용을 임의로 작성한 경우',
'배송 준비 이후 또는 제품 수령 후 단순 변심으로 참여를 취소하거나 콘텐츠 제작을 중단한 경우'
];
const VISIT_COMMON_NOTICES = [
'제품 수령 후 안내된 기한 내 콘텐츠 제작·업로드·제출을 완료하지 않은 경우',
'신청한 참여 유형과 다른 형태의 콘텐츠를 제출한 경우',
'필수 미션, 키워드, 협찬 고지 등 안내된 콘텐츠 제작 기준을 충족하지 않은 경우',
'브랜드 및 상품 노출 비중, 언급 위치, 영상 길이, 업로드 방식 등 지정된 제작 조건을 준수하지 않은 경우',
'수정 요청 사항을 안내된 기한 내 반영하지 않은 경우',
'필수 유지기간 내 게시물을 삭제하거나 비공개로 전환한 경우',
'콘텐츠에 타 브랜드 제품 또는 로고를 노출한 경우',
'상세페이지 이미지, 타인의 사진·영상 또는 AI 생성 이미지·영상을 사용한 경우',
'원산지, 성분, 규격, 기능, 효과 등 공식 안내에서 확인되지 않은 내용을 임의로 작성한 경우'
];

const EODIGAGE_CAMPAIGNS = {
  'visit-naver': {
    type:'VISIT', channels:['NAVER_BLOG'], clipRequired:false, reelsRequired:false,
    title:'[신림] 소담한우 2인 식사 체험단', category:'맛집·카페', area:'서울 관악구 신림동', reward:'70,000원 상당 2인 식사권',
    images:[],
    intro:'신림역 인근 소담한우를 방문해 체험한 뒤 네이버 블로그 리뷰를 작성하는 캠페인입니다.',
    provided:'70,000원 상당 2인 식사권 (성인 2인 기준)',
    mission:['매장 외관과 내부 분위기가 보이도록 직접 촬영해 주세요.','대표 메뉴와 메뉴판, 실제 식사 장면을 포함해 주세요.','매장 위치·접근 정보와 실제 체험 후기를 자연스럽게 작성해 주세요.','경제적 이해관계 표시 문구를 가이드에 맞게 기재해 주세요.'],
    blogKeywords:['소담한우','신림맛집','신림고기집'],
    blogKeywordGuide:'제목: 브랜드/매장명 키워드 필수 + 키워드 1개 선택 · 본문: 선택 키워드 3회 이상 · #해시태그: 제시 키워드 모두 기재',
    instagramHashtags:[],
    additionalNotices:VISIT_COMMON_NOTICES,
    dates:{applyStart:'2026-09-10',applyEnd:'2026-09-13',announce:'2026-09-14',experienceStart:'2026-09-15',experienceEnd:'2026-09-22',contentStart:'2026-09-15',contentEnd:'2026-09-25'},
    recruitCount:10, applicantCount:23,
    reviewTarget:'네이버 블로그 포스팅'
  },
  'visit-instagram': {
    type:'VISIT', channels:['INSTAGRAM'], clipRequired:false, reelsRequired:true,
    title:'[성수] 브런치 신메뉴 인스타 체험단', category:'맛집·카페', area:'서울 성동구 성수동', reward:'55,000원 상당 2인 브런치 세트',
    images:[],
    intro:'성수 브런치 매장을 방문해 Instagram 콘텐츠를 작성하는 캠페인입니다.',
    provided:'55,000원 상당 2인 브런치 세트',
    mission:['대표 메뉴와 매장 분위기가 드러나는 직접 촬영 이미지/영상을 포함해 주세요.','매장 계정 태그 및 지정 해시태그를 포함해 주세요.','위치 정보와 실제 체험 후기를 포함해 주세요.','경제적 이해관계 표시를 가이드에 맞게 기재해 주세요.'],
    instagramHashtags:['#협찬','#성수브런치','#성수맛집','#브런치'],
    instagramGuide:'표시광고법에 따라 #협찬 해시태그를 맨 앞에 표기해 주세요.',
    reelsGuide:'인스타그램 릴스 전체 공개 게시물 1건 · 영상 길이 30~50초 · 세로형 9:16 · 직접 촬영 영상 · 자막 또는 나레이션 포함',
    additionalNotices:VISIT_COMMON_NOTICES,
    dates:{applyStart:'2026-09-10',applyEnd:'2026-09-14',announce:'2026-09-15',experienceStart:'2026-09-16',experienceEnd:'2026-09-24',contentStart:'2026-09-16',contentEnd:'2026-09-27'},
    recruitCount:8, applicantCount:19,
    reviewTarget:'Instagram 게시물 + Reels'
  },
  'purchase-freshpick': {
    type:'PURCHASE_REVIEW', channels:['NAVER_BLOG','INSTAGRAM'], clipRequired:true, reelsRequired:true,
    title:'프레쉬픽 애플망고', category:'식품', area:'배송형 구매평', reward:'프리미엄 애플망고 2kg 1박스',
    images:['assets/freshpick-mango-1.png','assets/freshpick-mango-2.png'],
    intro:'프레쉬픽 애플망고를 배송받아 체험한 뒤 네이버 블로그와 Instagram 콘텐츠를 모두 작성하는 샘플 캠페인입니다.',
    provided:'프레쉬픽 프리미엄 애플망고 2kg (4~6과) 1박스',
    productUrl:'https://example.com/freshpick/apple-mango',
    mission:[
      '제목과 첫 문단에서 브랜드를 먼저 소개해 주세요.',
      '전체 글의 80% 이상을 프레쉬픽 장점, 제품 특징, 구매 혜택과 구매 방법으로 작성해 주세요.',
      '마지막에는 구매 또는 회원가입을 권하는 문구를 넣어 주세요.',
      '프레쉬픽 신규 회원가입 시 3,000포인트 지급 혜택을 안내해 주세요.'
    ],
    blogKeywords:['프레쉬픽','애플망고','제철과일'],
    blogKeywordGuide:'제목: 상품명 키워드(필수) + 이외 키워드 택 1개 · 본문: 제목에서 선택한 키워드 택 1개를 본문에 3회 이상 지속적으로 언급 · #해시태그: 제시된 키워드를 모두 기재',
    clipGuide:'10초 이상 직접 촬영 영상과 자막을 네이버 블로그 클립(Clip)으로 필수 업로드 · 일반 영상 업로드 시 인정 안됨',
    instagramHashtags:['#협찬','#프레쉬픽','#애플망고','#제철과일'],
    instagramGuide:'표시광고법에 따라 #협찬 해시태그를 맨 앞에 표기해 주세요. 제목: 상품명 키워드(필수)+이외 키워드 택 1개 · 본문: 제목에서 선택한 키워드 택 1개를 본문에 3회 이상 언급 · #해시태그: 제시된 키워드 모두 기재',
    reelsGuide:'인스타그램 릴스 전체 공개 게시물 1건 · 영상 길이 30~50초 · 세로형 9:16 비율 · 직접 촬영 영상만 사용 · 자막 또는 나레이션 포함',
    additionalNotices:PURCHASE_COMMON_NOTICES,
    dates:{applyStart:'2026-09-11',applyEnd:'2026-09-15',announce:'2026-09-16',shippingStart:'2026-09-17',shippingEnd:'2026-09-21',contentStart:'2026-09-22',contentEnd:'2026-09-30'},
    recruitCount:12, applicantCount:47,
    reviewTarget:'네이버 블로그 + 네이버 Clip + Instagram + Reels',
    shippingStatus:'DELIVERED'
  },
  'purchase-naver-only': {
    type:'PURCHASE_REVIEW', channels:[], clipRequired:false, reelsRequired:false, marketReview:true,
    purchasePlatform:'NAVER_SMARTSTORE', storeLabel:'네이버 스마트스토어', storeIdentityLabel:'네이버 구매평 닉네임',
    title:'프리미엄 견과 선물세트 네이버스토어 구매평', category:'식품', area:'온라인 구매', reward:'구매금액 지원 39,900원', images:[],
    provided:'프리미엄 견과 선물세트 1박스', productUrl:'https://smartstore.naver.com/example/products/123456',
    mission:['지정 상품/옵션으로 구매','상품 수령 후 실제 사용 경험 기반 구매평 작성','광고주 필수 사진/내용 포함'],
    additionalNotices:PURCHASE_COMMON_NOTICES,
    dates:{applyStart:'2026-09-10',applyEnd:'2026-09-14',announce:'2026-09-15',shippingStart:'2026-09-16',shippingEnd:'2026-09-20',contentStart:'2026-09-21',contentEnd:'2026-09-28'},
    recruitCount:10, applicantCount:32, reviewTarget:'네이버스토어 구매평'
  },
  'purchase-coupang-blog': {
    type:'PURCHASE_REVIEW', channels:['NAVER_BLOG'], clipRequired:false, reelsRequired:false, marketReview:true,
    purchasePlatform:'COUPANG', storeLabel:'쿠팡', storeIdentityLabel:'쿠팡 닉네임',
    title:'생활용품 쿠팡 구매평 + 블로그', category:'생활', area:'온라인 구매', reward:'구매금액 지원 28,000원 + 블로그 리뷰', images:[],
    provided:'생활용품 1세트', productUrl:'https://www.coupang.com/vp/products/987654321',
    mission:['지정 상품으로 구매','쿠팡 상품평 작성','네이버 블로그 상세 리뷰 작성'],
    blogKeywords:['생활용품','사용후기'], blogKeywordGuide:'제목과 본문에 지정 키워드를 자연스럽게 포함해 주세요.',
    additionalNotices:PURCHASE_COMMON_NOTICES,
    dates:{applyStart:'2026-09-10',applyEnd:'2026-09-15',announce:'2026-09-16',shippingStart:'2026-09-17',shippingEnd:'2026-09-21',contentStart:'2026-09-22',contentEnd:'2026-09-30'},
    recruitCount:6, applicantCount:26, reviewTarget:'쿠팡 상품평 + 네이버 블로그'
  }
};

function getCampaign(){ const q=new URLSearchParams(location.search).get('campaign'); const k=q||document.body.dataset.campaign||'visit-naver'; return {key:k,...(EODIGAGE_CAMPAIGNS[k]||EODIGAGE_CAMPAIGNS['visit-naver'])}; }
function text(id,v=''){const e=document.getElementById(id);if(e)e.textContent=v}
function html(id,v=''){const e=document.getElementById(id);if(e)e.innerHTML=v}
function show(id,on=true){const e=document.getElementById(id);if(e)e.classList.toggle('hidden',!on)}
function fmt(d){if(!d)return '-'; const [y,m,day]=d.split('-'); return `${m}.${day}`}
function fmtRange(a,b){return a&&b?`${fmt(a)} ~ ${fmt(b)}`:'-'}
function channelLabel(ch){return ch==='NAVER_BLOG'?'네이버 블로그':'Instagram'}

function renderGallery(c){
  const main=document.getElementById('detailMainImage'), thumbs=document.getElementById('detailThumbs'); if(!main||!thumbs)return;
  const imgs=(c.images||[]).length?c.images:[];
  if(!imgs.length){main.innerHTML='<div class="image-placeholder">CAMPAIGN IMAGE</div>';thumbs.innerHTML='';return;}
  main.innerHTML=`<img src="${imgs[0]}" alt="${c.title}">`;
  thumbs.innerHTML=imgs.map((src,i)=>`<button type="button" class="detail-thumb ${i===0?'active':''}" data-src="${src}"><img src="${src}" alt="${c.title} 이미지 ${i+1}"></button>`).join('');
  thumbs.querySelectorAll('.detail-thumb').forEach(btn=>btn.addEventListener('click',()=>{main.innerHTML=`<img src="${btn.dataset.src}" alt="${c.title}">`;thumbs.querySelectorAll('.detail-thumb').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}));
}

function renderCalendar(c){
  const el=document.getElementById('campaignCalendar'); if(!el)return;
  const d=c.dates||{}; const year=2026, month=9; const first=new Date(year,month-1,1); const startDay=first.getDay(); const days=new Date(year,month,0).getDate();
  const ranges=[
    {start:d.applyStart,end:d.applyEnd,cls:'cal-apply',label:'신청'},
    {start:d.announce,end:d.announce,cls:'cal-announce',label:'발표'},
    {start:d.shippingStart||d.experienceStart,end:d.shippingEnd||d.experienceEnd,cls:c.type==='VISIT'?'cal-experience':'cal-shipping',label:c.type==='VISIT'?'체험':'배송'},
    {start:d.contentStart,end:d.contentEnd,cls:'cal-content',label:'콘텐츠'}
  ].filter(x=>x.start&&x.end);
  const iso=(day)=>`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const cells=[]; for(let i=0;i<startDay;i++)cells.push('<td></td>');
  for(let day=1;day<=days;day++){
    const date=iso(day); const r=ranges.find(x=>date>=x.start&&date<=x.end); cells.push(`<td class="${r?r.cls:''}" title="${r?r.label:''}"><span>${day}</span></td>`);
  }
  while(cells.length%7)cells.push('<td></td>');
  const rows=[];for(let i=0;i<cells.length;i+=7)rows.push(`<tr>${cells.slice(i,i+7).join('')}</tr>`);
  el.innerHTML=`<div class="calendar-head"><b>2026.09</b></div><table><thead><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
  const leg=document.getElementById('calendarLegend'); if(leg)leg.innerHTML=ranges.map(x=>`<span><i class="${x.cls}"></i>${x.label}</span>`).join('');
}

function setSectionList(id,items){const el=document.getElementById(id);if(el)el.innerHTML=(items||[]).map(x=>`<li>${x}</li>`).join('')}
function setTags(id,items,kind){const el=document.getElementById(id);if(el)el.innerHTML=(items||[]).map(x=>`<span class="keyword-chip ${kind||''}">${x}</span>`).join('')}

function renderDetail(){
  if(!document.body.classList.contains('campaign-detail-page')) return;
  const c=getCampaign(), d=c.dates||{};
  text('detailTitle',c.title); text('detailReward',c.reward); text('detailArea',c.area); text('detailIntro',c.intro); text('providedText',c.provided||c.reward);
  text('dateApply',fmtRange(d.applyStart,d.applyEnd)); text('dateAnnounce',fmt(d.announce)); text('dateContent',fmtRange(d.contentStart,d.contentEnd)); text('recruitCount',`${c.applicantCount||0} / ${c.recruitCount||0}명`);
  show('shippingDateRow',c.type==='PURCHASE_REVIEW'); if(c.type==='PURCHASE_REVIEW')text('dateShipping',fmtRange(d.shippingStart,d.shippingEnd));
  show('experienceDateRow',c.type==='VISIT'); if(c.type==='VISIT')text('dateExperience',fmtRange(d.experienceStart,d.experienceEnd));
  const channelNames=(c.channels||[]).map(channelLabel); text('channelSummary',channelNames.length?channelNames.join(' + '):'구매처 구매평');
  const instaSelected=(c.channels||[]).includes('INSTAGRAM');
  html('detailChannelBadges',(c.channels||[]).map(ch=>`<span class="media-badge ${ch==='NAVER_BLOG'?'naver':'insta'}">${channelLabel(ch)}</span>`).join('') + (c.clipRequired?'<span class="media-badge clip">Naver Clip</span>':'') + (instaSelected?'<span class="media-badge reels">Instagram Reels</span>':''));
  setSectionList('missionList',c.mission||[]);
  show('linkSection',!!c.productUrl); if(c.productUrl){const a=document.getElementById('productLink');a.href=c.productUrl;a.textContent=c.productUrl}
  const blog=(c.channels||[]).includes('NAVER_BLOG'); const insta=(c.channels||[]).includes('INSTAGRAM');
  show('blogSection',blog); if(blog){setTags('blogKeywordTags',c.blogKeywords||[],'naver');text('blogKeywordGuide',c.blogKeywordGuide||'광고주가 등록한 블로그 키워드 가이드를 따릅니다.');show('clipBlock',!!c.clipRequired);if(c.clipRequired)text('clipGuide',c.clipGuide||'광고주가 지정한 네이버 Clip 가이드를 따릅니다.')}
  show('instagramSection',insta); if(insta){setTags('instagramTags',c.instagramHashtags||[],'insta');text('instagramGuide',c.instagramGuide||'광고주가 등록한 Instagram 해시태그 가이드를 따릅니다.');show('reelsBlock',true);text('reelsGuide',c.reelsGuide||'Instagram을 선택한 캠페인은 Reels 업로드가 필수입니다.')}

  setSectionList('additionalNoticeList',c.additionalNotices||[]);
  text('noticeFoot','※ 상품별 세부 미션 및 제작 조건은 각 상품의 콘텐츠 가이드를 기준으로 적용됩니다.');
  const apply=document.getElementById('detailApply'); if(apply)apply.href='campaign-apply.html?campaign='+encodeURIComponent(c.key);
  renderGallery(c); renderCalendar(c);
}

function renderMediaConnectCards(c){
  const root=document.getElementById('applyMediaConnections'); if(!root)return;
  const channels=c.channels||[]; show('applyChannelSection',channels.length>0);
  root.innerHTML=channels.map(ch=>`<div class="media-connect connected" data-ch="${ch}"><div class="mc-head"><span>${channelLabel(ch)}</span><span class="mc-state">연동 완료</span></div><div class="mc-desc">캠페인 콘텐츠를 작성할 ${channelLabel(ch)} 계정을 연결합니다. 선정 후 제출 채널을 임의로 변경할 수 없습니다.</div><div class="mc-desc">연결 계정: <b>${ch==='NAVER_BLOG'?'blog.naver.com/eodigage_demo':'instagram.com/eodigage_demo'}</b></div><button class="connect-btn connected" type="button">연결 계정 변경</button></div>`).join('');
  root.querySelectorAll('.media-connect').forEach(card=>{const btn=card.querySelector('button'), state=card.querySelector('.mc-state');btn.addEventListener('click',()=>{const on=card.classList.toggle('connected');state.textContent=on?'연동 완료':'연동 필요';btn.textContent=on?'연결 계정 변경':'연결하기';btn.classList.toggle('connected',on)})});
}

function renderApply(){
  if(document.body.dataset.page!=='campaign-apply') return;
  const c=getCampaign(), d=c.dates||{};
  text('applyTitle',c.title); text('applyReward',c.reward); const applyChannelText=(c.channels||[]).map(channelLabel).join(' + ')||'구매처 구매평'; text('applyChannels',applyChannelText); text('applyChannels2',applyChannelText);
  show('visitApply',c.type==='VISIT'); show('purchaseApply',c.type==='PURCHASE_REVIEW');
  if(c.type==='VISIT') { const date=document.getElementById('visitDate'); if(date){date.min=d.experienceStart||'';date.max=d.experienceEnd||'';date.value=d.experienceStart||''} }
  if(c.type==='PURCHASE_REVIEW'){text('shippingPeriod',fmtRange(d.shippingStart,d.shippingEnd)); const a=document.getElementById('applyProductUrl'); if(a&&c.productUrl){a.href=c.productUrl;a.textContent=c.productUrl}; show('marketReviewBox',!!c.marketReview); if(c.marketReview){text('marketPlatform',c.storeLabel||'구매처');text('marketIdentityLabel',c.storeIdentityLabel||'구매평 닉네임')}}
  renderMediaConnectCards(c);
}

function renderReviewSubmit(){
  if(document.body.dataset.page!=='review-submit') return; const c=getCampaign();
  text('submitTitle',c.title); text('submitTarget',c.reviewTarget||'캠페인 콘텐츠');
  const root=document.getElementById('dynamicSubmitFields'); if(!root)return; let out='';
  if(c.marketReview)out+=`<div class="result-box"><h3>${c.storeLabel||'구매처'} 구매평</h3><div class="form-row"><label>구매평 URL</label><input placeholder="구매평 URL"></div><div class="form-row"><label>구매평 완료 캡처</label><input type="file" accept="image/*"></div></div>`;
  if((c.channels||[]).includes('NAVER_BLOG'))out+=`<div class="result-box"><h3>네이버 블로그</h3><div class="form-row"><label>블로그 게시물 URL</label><input placeholder="https://blog.naver.com/..."></div>${c.clipRequired?'<div class="form-row"><label>네이버 Clip URL</label><input placeholder="네이버 Clip 공개 URL"></div>':''}</div>`;
  if((c.channels||[]).includes('INSTAGRAM'))out+=`<div class="result-box"><h3>Instagram</h3><div class="form-row"><label>Instagram Reels URL</label><input placeholder="https://instagram.com/reel/..."></div><div class="form-help">Instagram 참여 캠페인은 Reels 등록이 필수입니다.</div></div>`;
  root.innerHTML=out||'<div class="info-note">제출 필드가 설정되지 않았습니다.</div>';
}

function initCampaignCreate(){
  const type=document.getElementById('createType'); if(!type)return;
  const blog=document.getElementById('channelBlog'), insta=document.getElementById('channelInsta');
  const sync=()=>{
    const isV=type.value==='VISIT', isP=type.value==='PURCHASE_REVIEW';
    show('createVisitFields',isV); show('createPurchaseFields',isP); show('createDeliveryFields',type.value==='DELIVERY');
    show('blogConfig',blog.checked); show('instagramConfig',insta.checked);
  };
  [type,blog,insta].forEach(x=>x&&x.addEventListener('change',sync)); sync();
}

function initMypage(){
  const wrap=document.getElementById('campaignTypeTabs'); if(!wrap)return;
  wrap.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{wrap.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const t=btn.dataset.type;document.querySelectorAll('.my-campaign').forEach(row=>row.classList.toggle('hidden',row.dataset.type!==t));document.querySelectorAll('.campaign-section').forEach(sec=>sec.classList.toggle('hidden',!sec.querySelector(`.my-campaign[data-type="${t}"]:not(.hidden)`)))}));
}

document.addEventListener('DOMContentLoaded',()=>{renderDetail();renderApply();renderReviewSubmit();initCampaignCreate();initMypage();});
