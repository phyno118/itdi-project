"use strict";

const categories = [
  ["로고·브랜딩", "M4 18 12 4l8 14H4Zm4 0 4-7 4 7"],
  ["편집·인쇄", "M5 4h12v15H5zM8 8h6m-6 4h6m-6 3h4"],
  ["상세페이지·이커머스", "M4 7h16l-2 12H6zM9 9V7a3 3 0 0 1 6 0v2"],
  ["웹·UI/UX", "M3 5h18v14H3zM3 9h18m-13 5h3m3 0h3"],
  ["SNS·디지털 광고", "M4 10h5l8-4v12l-8-4H4zM8 14l2 5m9-8 2-1m-2 4 2 1"],
  ["패키지·라벨", "M4 8l8-4 8 4v9l-8 4-8-4zm0 0 8 4 8-4m-8 4v9"],
  ["일러스트·캐릭터·굿즈", "M12 4l2.5 5 5.5 1-4 4 .8 5-4.8-2.5L7 19l1-5-4-4 5.5-1z"],
  ["3D 디자인", "M12 3l8 5v8l-8 5-8-5V8zm0 0v9m-8 4 8-4 8 4"],
  ["제품·산업디자인", "M6 20V9l6-5 6 5v11zm0-10h12m-6 0v10"],
  ["공간·인테리어", "M3 11 12 4l9 7m-15-1v10h12V10m-8 10v-6h4v6"],
  ["간판·옥외광고", "M4 5h16v10H4zm8 10v5m-3 0h6M8 9h8"],
  ["패션·텍스타일", "M8 5l-5 3 3 4 2-1v8h8v-8l2 1 3-4-5-3a4 4 0 0 1-8 0z"],
  ["영상·모션", "M4 5h16v14H4zm6 4 5 3-5 3z"],
  ["프레젠테이션·비즈니스 문서", "M4 5h16v11H4zm8 11v4m-4 0 4-4 4 4M8 9h8m-8 3h5"],
  ["기타 전문디자인", "M7 12h.01m5 0h.01m5 0h.01M4 5h16v14H4z"]
];

const creatives = [
  {id:"morning", name:"모닝폴드 스튜디오", role:"스튜디오", category:0, extra:[5,10], art:"coffee",
    title:"모닝폴드 카페 브랜딩", service:"소규모 매장 로고·브랜드 아이덴티티",
    intro:"작은 매장의 분위기를 로고부터 패키지까지 일관되게 설계해요.",
    scope:"로고 · 메뉴 카드 · 테이크아웃 패키지", price:"60만 원부터", duration:"약 2주"},
  {id:"paper", name:"페이퍼데이 디자인", role:"개인 디자이너", category:1, extra:[4,10,13], art:"poster",
    title:"선데이 마켓 그래픽", service:"행사 포스터·인쇄물 디자인",
    intro:"행사와 브랜드의 메시지를 읽기 쉬운 인쇄물로 정리해요.",
    scope:"메인 포스터 · 인쇄물 · SNS 그래픽", price:"35만 원부터", duration:"약 1주"},
  {id:"field", name:"필드 인터페이스", role:"스튜디오", category:3, extra:[2], art:"interface",
    title:"필드 숍 모바일 UI", service:"브랜드 쇼핑몰 UI 디자인",
    intro:"상품을 발견하고 구매하기까지 자연스럽게 이어지는 화면을 설계해요.",
    scope:"상품 탐색 · 모바일 UI · 디자인 가이드", price:"90만 원부터", duration:"약 3주"}
];

const exampleProjects = [
  {id:"cafe", title:"동네 카페 로고와 메뉴판 제작", category:0, min:500000, max:900000, date:"", description:"오픈을 준비하는 작은 동네 카페예요. 따뜻하고 편안한 분위기의 로고와 인쇄용 메뉴판이 필요해요."},
  {id:"market", title:"주말 마켓 포스터와 SNS 이미지", category:1, min:300000, max:500000, date:"", description:"주말 마켓을 알리는 포스터와 SNS 이미지가 필요해요. 행사 정보가 빠르게 읽히는 구성을 원해요."}
];

const posters = {
  poster: '<svg viewBox="0 0 520 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="520" height="300" fill="#e8ad90"/><g transform="rotate(-11 232 160)"><rect x="87" y="33" width="244" height="263" rx="2" fill="#7c4633" opacity=".24" transform="translate(12 12)"/><rect x="87" y="33" width="244" height="263" rx="2" fill="#f8e6ce"/><path d="M121 207c65-54 92 54 171-20v50H121z" fill="#f17651"/><circle cx="256" cy="105" r="33" fill="#f17651"/><text x="117" y="113" fill="#2e3731" font-family="Georgia,serif" font-size="45" font-style="italic">Sunday</text><text x="117" y="157" fill="#2e3731" font-family="Georgia,serif" font-size="45" font-style="italic">Market.</text></g><g transform="rotate(13 380 202)"><rect x="328" y="145" width="108" height="132" fill="#ab573e" opacity=".3" transform="translate(7 8)"/><rect x="328" y="145" width="108" height="132" fill="#ab4c38"/><circle cx="381" cy="192" r="22" fill="#f5bc6e"/><path d="M351 231h59m-59 9h59m-59 9h42" stroke="#f5bc6e" stroke-width="2"/></g></svg>',
  interface: '<svg viewBox="0 0 520 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="520" height="300" fill="#c3c9e0"/><circle cx="320" cy="140" r="112" fill="#a9b3d6"/><g transform="rotate(-9 250 150)"><rect x="148" y="16" width="158" height="272" rx="20" fill="#49557e" opacity=".32" transform="translate(9 10)"/><rect x="148" y="16" width="158" height="272" rx="20" fill="#242b43"/><rect x="154" y="22" width="146" height="260" rx="16" fill="#f4f3eb"/><text x="169" y="62" fill="#313951" font-family="Georgia,serif" font-size="23" font-weight="bold">Field.</text><rect x="168" y="75" width="118" height="87" rx="6" fill="#7b89b5"/><circle cx="226" cy="116" r="28" fill="#dce2c5"/><path d="M215 122q20-28 37-7-12 27-37 7Z" fill="#778869"/><rect x="168" y="178" width="54" height="49" rx="4" fill="#d6dfc2"/><rect x="230" y="178" width="56" height="49" rx="4" fill="#e6cfb2"/><path d="M169 241h47m15 0h48m-110 11h30m32 0h36" stroke="#65718e" stroke-width="3"/></g><g transform="rotate(12 376 191)"><rect x="331" y="139" width="90" height="113" rx="11" fill="#eee8d9"/><circle cx="376" cy="179" r="22" fill="#8394bd"/><path d="M347 217h58m-48 8h38" stroke="#596789" stroke-width="3"/></g></svg>'
};

const home = document.querySelector("#home-view");
const view = document.querySelector("#sub-view");
const header = document.querySelector(".site-header");
const hero = home.querySelector(".hero");
const aiReturn = home.querySelector(".ai-return");
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const matchInput = document.querySelector("#match-input");
const quickChips = [...document.querySelectorAll("[data-example]")];
const number = new Intl.NumberFormat("ko-KR");
const draftKey = "itdi-preview-projects";
let draftProjects = loadDrafts();
let matchBrief = "";
const demoMessages = new Map();
const demoOrders = new Set();

function loadDrafts() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(draftKey) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveDrafts() {
  try {
    sessionStorage.setItem(draftKey, JSON.stringify(draftProjects));
  } catch {
    // The current tab can still use its in-memory drafts.
  }
}

function escapeHtml(value) {
  const characters = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"};
  return String(value ?? "").replace(/[&<>"']/g, character => characters[character]);
}

function categoryName(index) {
  return categories[index]?.[0] ?? "기타 전문디자인";
}

function categoryOptions(current = "", first = "전체 분야") {
  return '<option value="">' + first + '</option>' + categories.map(([name], index) =>
    '<option value="' + index + '"' + (String(index) === current ? " selected" : "") + '>' + name + '</option>').join("");
}

function action(href, label, style = "primary") {
  return '<a class="button ' + style + '" href="' + href + '">' + label + ' <span aria-hidden="true">↗</span></a>';
}

function heading(code, title, description, back = "home", backLabel = "홈으로") {
  return '<header class="page-head"><a class="back" href="#' + back + '">← ' + backLabel + '</a>' +
    '<p class="eyebrow">' + code + '</p><h1 tabindex="-1">' + escapeHtml(title) + '</h1><p>' + description + '</p></header>';
}

function art(person) {
  const image = person.art === "coffee"
    ? '<img src="assets/morning-fold.png" alt="커피 컵, 원두 봉투, 메뉴 카드로 구성한 카페 브랜딩 예시" loading="lazy">'
    : posters[person.art];
  return '<div class="work-art ' + person.art + '">' + image + '<span>예시 작업</span></div>';
}

function creativeCard(person, type) {
  const settings = {
    designers:[person.name, person.intro, "designer", "프로필 보기"],
    portfolio:[person.title, person.scope, "work", "작업사례 보기"],
    services:[person.service, person.price + " · " + person.duration, "service", "서비스 상세 보기"]
  };
  const [title, description, route, label] = settings[type];
  return '<article class="card">' + art(person) + '<div class="card-body"><span class="tag">' + categoryName(person.category) +
    '</span><h3>' + title + '</h3><p>' + description + '</p><a class="text-link" href="#' + route + '/' + person.id +
    '" aria-label="' + title + ' ' + label + '">' + label + ' ↗</a></div></article>';
}

function catalog(type, category = "") {
  const content = {
    services:["SERVICES","서비스 찾기","필요한 작업과 조건을 비교해보세요."],
    designers:["DESIGNERS","디자이너 찾기","전문 분야와 대표 작업을 살펴보세요."],
    portfolio:["PORTFOLIO","포트폴리오","디자이너의 작업을 분야별로 살펴보세요."]
  };
  view.innerHTML = heading(...content[type]) +
    '<p class="notice">디자인 초안에 사용한 예시 데이터예요.</p><div class="filters">' +
    '<label class="field">검색<input type="search" id="catalog-search" placeholder="이름, 분야, 작업명 검색"></label>' +
    '<label class="field">분야<select id="catalog-category">' + categoryOptions(category) + '</select></label></div>' +
    '<div id="catalog-results" aria-live="polite" class="' + (type === "portfolio" ? "portfolio-gallery" : "") + '"></div>';
  const search = view.querySelector("#catalog-search");
  const select = view.querySelector("#catalog-category");
  const results = view.querySelector("#catalog-results");
  function filter() {
    const query = search.value.trim().toLowerCase();
    const matches = creatives.filter(person => {
      const fields = [person.category, ...person.extra];
      const searchable = [person.name, person.title, person.service, ...fields.map(categoryName)].join(" ").toLowerCase();
      return (select.value === "" || fields.includes(Number(select.value))) && searchable.includes(query);
    });
    results.innerHTML = matches.length
      ? '<div class="card-grid">' + matches.map(person => creativeCard(person, type)).join("") + '</div>'
      : '<div class="empty"><h2>아직 예시 결과가 없어요</h2><p>검색어를 바꾸거나 전체 분야를 선택해보세요.</p></div>';
  }
  search.addEventListener("input", filter);
  select.addEventListener("change", filter);
  filter();
}

function creativeDetail(type, id) {
  const person = creatives.find(item => item.id === id);
  if (!person) return missing();
  if (type === "work") {
    view.innerHTML = heading("PORTFOLIO", person.title, person.name + " · " + categoryName(person.category), "portfolio", "포트폴리오") +
      '<div class="work-feature">' + art(person) + '</div><div class="detail-layout work-details">' +
      '<section class="panel"><h2>프로젝트 소개</h2><p>' + person.intro + '</p></section>' +
      '<section class="panel"><h2>작업 범위</h2><p>' + person.scope + '</p><div class="actions">' +
      action("#designer/" + id, "프로필 보기", "outline") + action("#chat/" + id, "디자이너와 채팅") + '</div></section></div>';
    return;
  }
  const settings = {
    designer:["DESIGNER PROFILE",person.name,person.role + " · " + categoryName(person.category),"designers","디자이너 찾기"],
    service:["DESIGN SERVICE",person.service,person.name + " · " + categoryName(person.category),"services","서비스 찾기"]
  };
  view.innerHTML = heading(...settings[type]) + '<div class="detail-layout"><div>' + art(person) +
    '<p class="notice">이 프로필과 작업 이미지는 화면 검토용 예시예요.</p></div><div class="stack">' +
    '<section class="panel"><h2>' + (type === "designer" ? "대표 프로젝트" : "작업 소개") + '</h2><p>' +
    person.intro + '</p><dl class="summary"><div><dt>작업</dt><dd>' + person.title + '</dd></div><div><dt>작업 범위</dt><dd>' + person.scope +
    '</dd></div></dl>' + (type === "designer" ? '<div class="actions">' + action("#work/" + id,"작업사례 보기","outline") + '</div>' : '') + '</section>' +
    '<section class="panel"><h2>' + (type === "service" ? "문의와 견적" : "제공 서비스") + '</h2><p>' + person.service +
    '</p><dl class="summary"><div><dt>예시 가격</dt><dd>' + person.price + '</dd></div><div><dt>예상 기간</dt><dd>' + person.duration +
    '</dd></div></dl><div class="actions">' +
    action("#chat/" + id,"문의하기") +
    (type === "service" ? action("#quote/" + id,"견적 보기","outline") :
      action("#service/" + id,"서비스 보기","outline")) +
    '</div></section></div></div>';
}

function recommend() {
  if (!matchBrief) {
    view.innerHTML = heading("AI MATCH","필요한 디자인을 알려주세요","홈에서 작업 내용을 입력하면 추천 화면을 살펴볼 수 있어요.") + action("#home","입력하러 가기");
    return;
  }
  const signals = [
    {person:creatives[0], words:/카페|로고|브랜딩|메뉴|간판|패키지/, reason:"브랜드와 매장에 필요한 여러 결과물을 함께 다룬 예시예요."},
    {person:creatives[1], words:/포스터|인쇄|행사|마켓|편집|sns/i, reason:"행사 정보와 메시지를 인쇄물과 그래픽으로 표현한 예시예요."},
    {person:creatives[2], words:/쇼핑몰|웹|상세페이지|모바일|ui|ux/i, reason:"상품 탐색과 구매 흐름을 모바일 화면에 담은 예시예요."}
  ];
  const matching = signals.filter(item => item.words.test(matchBrief));
  view.innerHTML = heading("AI MATCH","이렇게 이해했어요","입력한 내용을 확인하고 추천 결과 화면을 살펴보세요.") +
    '<p class="notice">AI 연동 전 미리보기예요. 입력에 포함된 단어에 따라 예시 작업을 보여줘요.</p>' +
    '<section class="panel"><h2>요청 내용</h2><p class="project-description">' + escapeHtml(matchBrief) +
    '</p><div class="actions">' + action("#home","다시 입력","outline") + '</div></section><section class="panel"><h2>추천 디자이너 예시</h2>' +
    (matching.length ? '<div class="card-grid">' + matching.map(item => creativeCard({...item.person, intro:item.reason}, "designers")).join("") + '</div>' :
      '<p>이 요청에 해당하는 예시가 없어요. 분야별 서비스를 둘러보거나 프로젝트를 의뢰할 수 있어요.</p><div class="actions">' +
      action("#services","서비스 찾기","outline") + action("#request","프로젝트 의뢰") + '</div>') + '</section>';
}

function request() {
  view.innerHTML = heading("PROJECT REQUEST","프로젝트 의뢰","필요한 결과물과 예산을 알려주면 디자이너가 의뢰 내용을 이해하기 쉬워요.") +
    '<p class="notice">등록 흐름을 살펴보는 초안이에요. 입력한 내용은 현재 브라우저 탭에만 저장돼요.</p>' +
    '<form class="flow-form" id="request-form"><section class="panel form-fields"><h2>어떤 디자인이 필요한가요?</h2>' +
    '<label class="field">프로젝트 제목<input name="title" required maxlength="80" placeholder="예) 신규 카페 로고와 메뉴판 디자인"></label>' +
    '<label class="field">디자인 분야<select name="category" required>' + categoryOptions("", "분야를 선택해주세요") + '</select></label>' +
    '<label class="field">상세 내용<textarea name="description" required maxlength="1500" rows="4" placeholder="어디에 쓰나요? 어떤 결과물이 필요한가요? 원하는 분위기가 있나요?"></textarea></label></section>' +
    '<section class="panel form-fields"><h2>예산과 일정은 어떻게 되나요?</h2><div class="form-row">' +
    '<label class="field">최소 예산 (원)<input name="minimum" required inputmode="numeric" maxlength="12" placeholder="300,000"></label>' +
    '<label class="field">최대 예산 (원)<input name="maximum" required inputmode="numeric" maxlength="12" placeholder="600,000" aria-describedby="budget-error"></label></div>' +
    '<p class="error" id="budget-error" role="alert" hidden></p><label class="field">희망 납품일<input name="deadline" type="date" required>' +
    '<small>디자인 결과물을 받고 싶은 날을 선택해주세요.</small></label></section>' +
    '<div><p>등록하면 제목, 분야, 예산, 희망 납품일이 프로젝트 목록에 표시돼요.</p><div class="actions">' +
    '<button class="button primary" type="submit">프로젝트 등록하기 ↗</button>' + action("#projects","프로젝트 목록","outline") + '</div></div></form>';
  const form = view.querySelector("#request-form");
  const minimum = form.elements.minimum;
  const maximum = form.elements.maximum;
  const error = view.querySelector("#budget-error");
  const valueOf = input => Number(input.value.replaceAll(",", ""));
  for (const input of [minimum, maximum]) {
    input.addEventListener("input", () => {
      const digits = input.value.replace(/[^0-9]/g, "").slice(0, 9);
      input.value = digits ? number.format(Number(digits)) : "";
      error.hidden = true;
      maximum.removeAttribute("aria-invalid");
    });
  }
  for (const input of [form.elements.title, form.elements.description]) {
    input.addEventListener("input", () => input.setCustomValidity(""));
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    for (const input of [form.elements.title, form.elements.description]) {
      if (!input.value.trim()) {
        input.setCustomValidity("내용을 입력해주세요.");
        input.reportValidity();
        return;
      }
    }
    if (valueOf(minimum) < 1 || valueOf(maximum) < valueOf(minimum)) {
      error.textContent = "최소 예산은 1원 이상, 최대 예산은 최소 예산 이상으로 입력해주세요.";
      error.hidden = false;
      maximum.setAttribute("aria-invalid","true");
      (valueOf(minimum) < 1 ? minimum : maximum).focus();
      return;
    }
    const project = {id:"draft-" + Date.now(), title:form.elements.title.value.trim(), category:Number(form.elements.category.value),
      description:form.elements.description.value.trim(), min:valueOf(minimum), max:valueOf(maximum), date:form.elements.deadline.value, proposals:[]};
    draftProjects = [project, ...draftProjects];
    saveDrafts();
    location.hash = "#registered/" + project.id;
  });
}

function projectBudget(project) {
  return number.format(project.min) + "원 ~ " + number.format(project.max) + "원";
}

function projectList(own) {
  const projects = own ? draftProjects : [...draftProjects, ...exampleProjects];
  view.innerHTML = heading("PROJECTS",own ? "내 프로젝트" : "프로젝트 찾기",
    own ? "이 탭에서 등록한 의뢰와 제안을 확인해요." : "모집 중인 디자인 프로젝트의 조건을 살펴보고 제안을 준비해요.") +
    '<div class="actions">' + action("#request","프로젝트 의뢰") + action(own ? "#projects" : "#my-projects",own ? "프로젝트 찾기" : "내 프로젝트","outline") +
    '</div><div class="filters project-filters"><label class="field">프로젝트 검색<input id="project-search" type="search" placeholder="제목 또는 작업 내용"></label>' +
    '<label class="field">디자인 분야<select id="project-category">' + categoryOptions() + '</select></label></div>' +
    '<div class="project-list" id="project-results" aria-live="polite"></div>';
  const search = view.querySelector("#project-search");
  const category = view.querySelector("#project-category");
  const results = view.querySelector("#project-results");
  function filter() {
    const query = search.value.trim().toLowerCase();
    const matches = projects.filter(project =>
      (category.value === "" || Number(category.value) === project.category) &&
      (project.title + " " + project.description).toLowerCase().includes(query));
    results.innerHTML = matches.length ? matches.map(project =>
      '<article class="panel project-row"><div><span class="tag">' + (project.selected !== undefined ? "디자이너 선정" : "모집 중") +
      ' · ' + categoryName(project.category) + '</span><h2>' + escapeHtml(project.title) + '</h2><p>' +
      projectBudget(project) + (project.date ? ' · 희망 납품일 ' + escapeHtml(project.date) : ' · 예시 의뢰') +
      '</p></div>' + action("#project/" + escapeHtml(project.id),"상세 보기","outline") + '</article>').join("") :
      '<section class="empty"><h2>' + (projects.length ? '조건에 맞는 프로젝트가 없어요' : '등록한 프로젝트가 없어요') +
      '</h2><p>' + (projects.length ? '검색어나 분야를 바꿔보세요.' : '프로젝트 의뢰 양식에서 예시 의뢰를 만들어보세요.') + '</p></section>';
  }
  search.addEventListener("input", filter);
  category.addEventListener("change", filter);
  filter();
}

function projectDetail(id) {
  const project = [...draftProjects, ...exampleProjects].find(item => item.id === id);
  if (!project) return missing();
  const isDraft = id.startsWith("draft-");
  const proposals = project.proposals ?? [];
  const decided = project.selected !== undefined;
  view.innerHTML = heading("PROJECT DETAIL",project.title,categoryName(project.category) + (isDraft ? " · 내 의뢰" : " · 예시 의뢰"),"projects","프로젝트 찾기") +
    '<div class="detail-layout"><section class="panel"><h2>의뢰 내용</h2><p class="project-description">' + escapeHtml(project.description) +
    '</p><dl class="summary"><div><dt>예산</dt><dd>' + projectBudget(project) + '</dd></div><div><dt>희망 납품일</dt><dd>' +
    escapeHtml(project.date || "협의") + '</dd></div></dl></section><div class="stack"><section class="panel"><h2>받은 제안</h2>' +
    (proposals.length ? proposals.map((proposal,index) => '<div class="panel"><h3>예시 제안 ' + (index+1) + '</h3><p>' +
      number.format(proposal.amount) + '원 · ' + escapeHtml(proposal.period) + '</p><p class="project-description">' + escapeHtml(proposal.message) + '</p>' +
      (!decided ? '<div class="actions"><button class="button outline" type="button" data-select-proposal="' + index + '">이 제안 선택</button></div>' :
        project.selected === index ? '<span class="tag">선택한 제안</span>' : '') + '</div>').join("") : '<p>아직 받은 제안이 없어요.</p>') +
    '</section>' + (isDraft && !decided ? '<form class="panel form-fields" id="proposal-form"><h2>예시 제안 추가</h2><p>디자이너 화면을 가정해 제안을 작성해볼 수 있어요.</p>' +
      '<label class="field">제안 금액 (원)<input name="amount" type="number" min="1" max="999999999" required></label>' +
      '<label class="field">예상 기간<input name="period" maxlength="25" required placeholder="예) 2주"></label>' +
      '<label class="field">제안 내용<textarea name="message" rows="3" maxlength="500" required></textarea></label>' +
      '<button class="button primary" type="submit">예시 제안 저장</button></form>' : '') + '</div></div>';
  const form = view.querySelector("#proposal-form");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    project.proposals.push({amount:Number(form.elements.amount.value), period:form.elements.period.value.trim(), message:form.elements.message.value.trim()});
    saveDrafts();
    projectDetail(id);
    view.querySelector("h1").focus({preventScroll:true});
    announce("예시 제안을 저장했어요.");
  });
  view.querySelectorAll("[data-select-proposal]").forEach(button => button.addEventListener("click", () => {
    project.selected = Number(button.dataset.selectProposal);
    saveDrafts();
    projectDetail(id);
    view.querySelector("h1").focus({preventScroll:true});
    announce("제안을 선택했어요.");
  }));
}

function inquiry(id, mode) {
  const person = creatives.find(item => item.id === id);
  if (!person) return missing();
  const quote = mode === "quote";
  view.innerHTML = heading("INQUIRY",quote ? "견적 요청" : "디자이너에게 문의하기",person.name + "에게 보낼 내용을 미리 작성해볼 수 있어요.","designer/" + id,"프로필로") +
    '<p class="notice">이 초안에서는 실제 메시지를 전송하지 않아요.</p><form id="inquiry-form" class="flow-form">' +
    '<section class="panel form-fields"><label class="field">' + (quote ? "견적 요청 내용" : "문의 내용") +
    '<textarea name="message" rows="5" required maxlength="800" placeholder="필요한 디자인과 궁금한 내용을 적어주세요."></textarea></label>' +
    '<div><button class="button primary" type="submit">작성 내용 확인 ↗</button></div></section></form>';
  view.querySelector("#inquiry-form").addEventListener("submit", event => {
    event.preventDefault();
    const message = event.currentTarget.elements.message.value.trim();
    if (!message) return;
    view.innerHTML = heading("INQUIRY",quote ? "견적 요청 미리보기" : "문의 미리보기",person.name + "에게 작성한 내용이에요.","designer/" + id,"프로필로") +
      '<section class="panel"><h2>작성한 내용</h2><p class="project-description">' + escapeHtml(message) + '</p></section>';
    view.querySelector("h1").focus();
  });
}

function conversation(person) {
  if (!demoMessages.has(person.id)) {
    demoMessages.set(person.id, ["안녕하세요. 필요한 작업과 희망 일정을 알려주시면 함께 살펴볼게요."]);
  }
  return demoMessages.get(person.id);
}

function tradePage(type, id) {
  const person = creatives.find(item => item.id === (id || creatives[0].id));
  if (!person) return missing();
  const key = person.id;
  const titles = {chat:"채팅", quote:"견적서", order:"주문 상세"};
  const tabs = Object.entries(titles).map(([route, title]) =>
    '<a href="#' + route + '/' + key + '"' + (route === type ? ' aria-current="page"' : '') + '>' + title + '</a>').join("");
  view.innerHTML = heading("", titles[type], person.name + " · " + person.service, "designer/" + key, "디자이너 프로필") +
    '<p class="notice">검토용 예시 화면입니다. 메시지와 주문은 새로고침 전까지 유지돼요.</p>' +
    '<nav class="trade-tabs" aria-label="거래 화면">' + tabs + '</nav><div class="detail-layout">' +
    '<section class="panel trade-content"></section><aside class="panel"><h2>디자이너</h2><p>' + person.name +
    '</p><p>' + categoryName(person.category) + '</p><div class="actions">' + action("#work/" + key, "작업사례 보기", "outline") + '</div></aside></div>';
  const panel = view.querySelector(".trade-content");
  if (type === "chat") {
    panel.innerHTML = '<label class="field">대화 상대<select id="chat-designer">' + creatives.map(item =>
      '<option value="' + item.id + '"' + (item.id === key ? " selected" : "") + '>' + item.name + '</option>').join("") +
      '</select></label><ol class="messages" aria-label="대화 내역" aria-live="polite"></ol>' +
      '<form id="chat-form" class="form-fields"><label class="field">메시지<textarea name="message" rows="2" maxlength="800" required></textarea></label>' +
      '<div class="actions"><button class="button primary" type="submit">보내기</button>' + action("#quote/" + key, "예시 견적서 보기", "outline") + '</div></form>';
    const log = panel.querySelector(".messages");
    const messages = conversation(person);
    function renderMessages() {
      log.innerHTML = messages.map((message, index) =>
        '<li class="' + (index ? "outgoing" : "") + '"><strong>' + (index ? "나" : person.name) +
        '</strong><p>' + escapeHtml(message) + '</p></li>').join("");
      log.scrollTop = log.scrollHeight;
    }
    panel.querySelector("#chat-designer").addEventListener("change", event => { location.hash = "#chat/" + event.target.value; });
    panel.querySelector("#chat-form").addEventListener("submit", event => {
      event.preventDefault();
      const input = event.currentTarget.elements.message;
      const message = input.value.trim();
      if (!message) return;
      messages.push(message);
      input.value = "";
      renderMessages();
      input.focus();
    });
    renderMessages();
    return;
  }
  const summary = '<dl class="summary"><div><dt>작업 범위</dt><dd>' + person.scope + '</dd></div><div><dt>예시 금액</dt><dd>' +
    person.price + '</dd></div><div><dt>예상 기간</dt><dd>' + person.duration + '</dd></div></dl>';
  if (type === "quote") {
    panel.innerHTML = '<h2>작업 조건</h2>' + summary + '<div class="actions">' +
      '<button class="button primary" type="button" id="quote-accept">' + (demoOrders.has(key) ? "주문 보기" : "예시 견적 수락") + '</button>' +
      action("#chat/" + key, "채팅으로 문의", "outline") +
      action("#inquiry/" + key + "/quote", "맞춤 견적 요청", "outline") + '</div>';
    panel.querySelector("#quote-accept").addEventListener("click", () => {
      demoOrders.add(key);
      location.hash = "#order/" + key;
    });
    return;
  }
  panel.innerHTML = '<h2>' + (demoOrders.has(key) ? "작업 대기" : "예시 주문") + '</h2>' +
    '<ol class="order-progress" aria-label="주문 진행 단계"><li>견적 수락</li><li aria-current="step">작업 대기</li><li>납품</li><li>구매확정</li></ol>' +
    summary + '<div class="actions">' + action("#chat/" + key, "대화 보기") + action("#quote/" + key, "견적서 보기", "outline") + '</div>';
}

function account(type) {
  const signup = type === "signup";
  view.innerHTML = heading("ACCOUNT",signup ? "회원가입" : "로그인","계정 화면을 확인할 수 있는 시안이에요.") +
    '<p class="notice">로그인·회원가입은 베타 사이트에서 제공돼요. 이 초안에서는 계정 정보를 받지 않아요.</p>' +
    '<div class="actions">' + action("#my-projects","내 프로젝트 둘러보기","outline") + action("#request","프로젝트 의뢰해보기") + '</div>';
}

function info(id) {
  const content = {
    terms:["서비스 이용약관","이용약관은 팀에서 확정한 문서를 게시할 영역이에요."],
    privacy:["개인정보처리방침","개인정보처리방침이 게시될 위치예요. 이 초안의 의뢰·제안 입력은 현재 탭에서만 확인할 수 있어요."],
    refunds:["취소·환불정책","거래 취소, 환불, 검수 절차를 안내할 영역이에요."],
    help:["고객센터","베타 운영 연락처와 자주 묻는 질문이 연결될 위치예요."]
  };
  if (!Object.hasOwn(content,id)) return missing();
  view.innerHTML = heading("ITDI",...content[id]);
}

function missing() {
  view.innerHTML = heading("ITDI","화면을 찾지 못했어요","홈이나 프로젝트 목록에서 다시 찾아보세요.") + action("#projects","프로젝트 찾기","outline");
}

function announce(message) {
  document.querySelector("#announcement").textContent = message;
}

function closeMenu() {
  menu.setAttribute("aria-expanded","false");
  navigation.classList.remove("open");
}

function updateAiReturn() {
  aiReturn.hidden = home.hidden || hero.getBoundingClientRect().bottom > header.offsetHeight;
}

function route(initial = false) {
  const [name, id, mode] = location.hash.slice(1).split("/");
  if (name === "main") {
    document.querySelector("#main").focus();
    return;
  }
  const isHome = name === "" || name === "home";
  home.hidden = !isHome;
  view.hidden = isHome;
  closeMenu();
  document.querySelectorAll(".main-nav a").forEach(link => {
    const target = link.hash.slice(1);
    const active = name === target || {designer:"designers",work:"portfolio",service:"services",project:"projects"}[name] === target;
    if (active) link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  });
  if (!isHome) {
    if (["services","designers","portfolio"].includes(name)) catalog(name,id);
    else if (["designer","service","work"].includes(name)) creativeDetail(name,id);
    else if (name === "match") recommend();
    else if (name === "request") request();
    else if (name === "projects" || name === "my-projects") projectList(name === "my-projects");
    else if (name === "project") projectDetail(id);
    else if (name === "inquiry") inquiry(id,mode);
    else if (["chat","quote","order"].includes(name)) tradePage(name,id);
    else if (name === "login" || name === "signup") account(name);
    else if (name === "info") info(id);
    else if (name === "registered" && draftProjects.some(project => project.id === id)) {
      view.innerHTML = heading("PROJECT REQUEST","의뢰가 등록됐어요","이 탭의 내 프로젝트 목록에서 확인할 수 있어요.") +
        '<div class="actions">' + action("#my-projects","내 프로젝트 보기") + action("#project/" + id,"의뢰 상세 보기","outline") + '</div>';
    } else missing();
  }
  const title = (isHome ? home : view).querySelector("h1");
  document.title = isHome ? "잇디 — 디자인과 사람을 잇다" : title.textContent + " | 잇디";
  if (!initial) {
    window.scrollTo(0,0);
    title.setAttribute("tabindex","-1");
    title.focus({preventScroll:true});
  }
  updateAiReturn();
}

document.querySelector("#category-grid").innerHTML = categories.map(([label, path], index) =>
  '<a class="category" href="#services/' + index + '"><span class="cat-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="' +
  path + '"/></svg></span><span>' + label + '</span></a>').join("");
document.querySelector("#featured-grid").innerHTML = creatives.map(person => creativeCard(person,"designers")).join("");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded",String(navigation.classList.toggle("open"))));
navigation.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
document.querySelector(".skip").addEventListener("click", event => {
  event.preventDefault();
  document.querySelector("#main").focus();
});
quickChips.forEach(chip => {
  chip.setAttribute("aria-pressed","false");
  chip.addEventListener("click", () => {
    matchInput.value = chip.dataset.example;
    matchInput.setCustomValidity("");
    quickChips.forEach(other => other.setAttribute("aria-pressed",String(other === chip)));
    matchInput.focus();
  });
});
matchInput.addEventListener("input", () => {
  matchInput.setCustomValidity("");
  quickChips.forEach(chip => chip.setAttribute("aria-pressed","false"));
});
document.querySelector("#match-form").addEventListener("submit", event => {
  event.preventDefault();
  matchBrief = matchInput.value.trim();
  if (matchBrief) location.hash = "#match";
  else {
    matchInput.setCustomValidity("필요한 디자인을 입력해주세요.");
    matchInput.reportValidity();
  }
});
window.addEventListener("hashchange", () => route());
window.addEventListener("scroll", updateAiReturn, {passive:true});
window.addEventListener("resize", updateAiReturn);
aiReturn.addEventListener("click", () => {
  hero.querySelector("h1").focus({preventScroll:true});
  hero.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
});
route(true);
