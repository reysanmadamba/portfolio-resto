/* ============================================================
   Yours Handyworks Ltd. — js/main.js
   ============================================================ */

/* ================================================================
   HOW TO ADD / EDIT PROJECTS
   ================================================================

   1. ADD A NEW CATEGORY (new tab):
      Add an entry to CATEGORIES with a unique id and label.
      Example: { id: 'landscaping', label: 'Landscaping' }

   2. ADD A PROJECT to an existing category:
      Copy any project object below and paste inside PROJECTS[].
      Set category to match the CATEGORIES id you want.

   3. BEFORE / AFTER IMAGES:
      - before: array of image file paths (left side of split slider)
      - after:  array of objects — either image or video

      If before[] is empty [], it shows a normal after slideshow.
      If before[] has images, it shows the drag split slider.

   4. IMAGE PATH FORMAT (local files):
      'img/projects/housereno/p1-before1.jpg'

   5. VIDEO FORMAT:
      { type: 'video', src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' }
      Get the embed URL from YouTube → Share → Embed → copy the src value.

   ================================================================ */

const CATEGORIES = [
    { id: 'basement', label: 'Basement Dev' },
    { id: 'deck', label: 'Deck Build' },
    { id: 'commercial', label: 'Office & Commercial' },
    { id: 'housereno', label: 'House Renovation' },
    { id: 'fence', label: 'Fence Build' },
    { id: 'painting', label: 'Painting' },
    { id: 'demolition', label: 'Demolition' },
    { id: 'special', label: 'Special Projects' },
];

const PROJECTS = [

    /* ── BASEMENT ── */
    {
        category: 'basement',
        title: 'Full Basement Development',
        location: 'Edmonton, AB', year: '2023', type: 'Residential',
        description: 'Unfinished basement transformed into a family room, home office, and full bathroom.',
        before: [
            'img/projects/basement/p1-basement-before1.jpg',
            'img/projects/basement/p1-basement-before2.jpg',
            'img/projects/basement/p1-basement-before3.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/basement/p1-basement-after1.jpg' },
            { type: 'image', src: 'img/projects/basement/p1-basement-after2.jpg' },
            { type: 'image', src: 'img/projects/basement/p1-basement-after3.jpg' },
        ]
    },

    /* ── DECK ── */
    {
        category: 'deck',
        title: 'Backyard Deck Build',
        location: 'Fort Saskatchewan, AB', year: '2026', type: 'Residential',
        description: 'Clean Custom deck. Before shows the bare backyard — after shows the finished build.',
        before: [
            'img/projects/deck/p1-deck-before1.jpg',
            'img/projects/deck/p1-deck-before2.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/deck/p1-deck-after1.jpg' },
            // { type: 'image', src: 'img/projects/deck/p1-deck-after2.jpg' },
            { type: 'video', src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' },
        ]
    },
    {
        category: 'deck',
        title: 'Front Entry Deck',
        location: 'St. Albert, AB', year: '2023', type: 'Residential',
        description: 'Front-of-home entry deck with pressure-treated lumber, railing system, and stair landing.',
        before: [],
        after: [
            { type: 'image', src: 'img/projects/deck/p2-deck-after1.jpg' }
            // { type: 'image', src: 'img/projects/deck/p2-deck-after2.jpg' },
        ]
    },

    /* ── COMMERCIAL ── */
    {
        category: 'commercial',
        title: 'Office Interior Renovation',
        location: 'Edmonton, AB', year: '2024', type: 'Commercial',
        description: 'Full interior renovation — new feature wall, flooring, ceiling treatment, fresh paint, and custom millwork. Completed on a tight timeline.',
        before: [
            'img/projects/commercial/p1-commercial-before1.jpg',
            'img/projects/commercial/p1-commercial-before2.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/commercial/p1-commercial-after1.jpg' },
            // { type: 'image', src: 'img/projects/commercial/p1-commercial-after2.jpg' },
            { type: 'video', src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' },
        ]
    },

    /* ── HOUSE RENOVATION ── */
    /* Covers kitchen, living room, bedroom, washroom — any room reno  */
    /* Folder: img/projects/housereno/                                 */
    {
        category: 'housereno',
        title: 'Kitchen Renovation',
        location: 'St. Albert, AB', year: '2024', type: 'Residential',
        description: 'Complete kitchen renovation — new cabinetry, quartz countertops, tile backsplash, updated lighting, and modern fixtures.',
        before: [
            'img/projects/house-reno/p1-house-before1.jpg',
            'img/projects/house-reno/p1-house-before2.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/house-reno/p1-house-after1.jpg' },
            { type: 'image', src: 'img/projects/house-reno/p1-house-after2.jpg' },
            { type: 'image', src: 'img/projects/house-reno/p1-house-after3.jpg' },
        ]
    },
    {
        category: 'housereno',
        title: 'Island Bar Installation',
        location: 'Edmonton, AB', year: '2023', type: 'Residential',
        description: 'Upgrade the kitchen with a custom island bar — quartz countertop, shaker-style cabinets, under-cabinet lighting. Perfect for entertaining and family gatherings.',
        before: [
            'img/projects/house-reno/p2-house-before1.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/house-reno/p2-house-after1.jpg' },

        ]
    },

    /* ── FENCE ── */
    {
        category: 'fence',
        title: 'Cedar Privacy Fence',
        location: 'St. Albert, AB', year: '2023', type: 'Residential',
        description: '180 linear feet of cedar privacy fence — dog-eared boards, post caps, stained finish.',
        before: [
            'img/projects/fence/p1-fence-before1.jpg',
            'img/projects/fence/p1-fence-before2.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/fence/p1-fence-after1.jpg' },
            { type: 'image', src: 'img/projects/fence/p1-fence-after2.jpg' },
        ]
    },

    /* ── PAINTING ── */
    {
        category: 'painting',
        title: 'Full Home Interior Paint',
        location: 'St. Albert, AB', year: '2024', type: 'Residential',
        description: 'Complete interior repaint of a 2,400 sq ft home — walls, ceilings, trim, and doors.',
        before: [
            'img/projects/painting/p1-before1.jpg',
            'img/projects/painting/p1-before2.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/painting/p1-after1.jpg' },
            { type: 'image', src: 'img/projects/painting/p1-after2.jpg' },
        ]
    },

    /* ── DEMOLITION ── */
    /* Folder: img/projects/demolition/                                */
    {
        category: 'demolition',
        title: 'Residential Demolition',
        location: 'St. Albert, AB', year: '2024', type: 'Residential',
        description: 'Selective interior demolition — walls, flooring, and fixtures removed cleanly and safely. Site left clear and ready for the next build phase.',
        before: [],
        after: [
            { type: 'image', src: 'img/projects/demolition/p1-after1.jpg' },
            { type: 'image', src: 'img/projects/demolition/p1-after2.jpg' },
        ]
    },
    {
        category: 'demolition',
        title: 'Commercial Space Teardown',
        location: 'Edmonton, AB', year: '2024', type: 'Commercial',
        description: 'Full interior commercial demolition prior to a fit-out. All debris removed and site prepped for the renovation crew.',
        before: [
            'img/projects/demolition/p2-before1.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/demolition/p2-after1.jpg' },
        ]
    },

    /* ── SPECIAL — always last ── */
    {
        category: 'special',
        title: 'Feature Wall Build',
        location: 'Edmonton, AB', year: '2024', type: 'Residential',
        description: 'Custom shiplap feature wall with integrated floating shelves and concealed lighting.',
        before: [
            'img/projects/special/p1-special-before1.jpg',
            'img/projects/special/p1-special-before2.jpg',
            'img/projects/special/p1-special-before3.jpg',
        ],
        after: [
            { type: 'image', src: 'img/projects/special/p1-special-after1.jpg' },
            { type: 'image', src: 'img/projects/special/p1-special-after2.jpg' },
            { type: 'image', src: 'img/projects/special/p1-special-after3.jpg' },
        ]
    },

];

/* ================================================================
   ENGINE — no need to edit below this line
   ================================================================ */

const catState = {};

function getState(catId) {
    if (!catState[catId]) catState[catId] = { projIdx: 0, beforeIdx: 0, afterIdx: 0 };
    return catState[catId];
}

function buildMediaEl(item) {
    if (item.type === 'video') {
        return `<div class="single-video"><iframe src="${item.src}" allowfullscreen></iframe></div>`;
    }
    return `<img class="single-media" src="${item.src}" alt="Project photo" loading="lazy">`;
}

function navBtnHTML(catId, side, dir) {
    const label = dir === -1
        ? `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`
        : `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`;
    return `<button class="ba-nav-btn" onclick="shiftSide('${catId}','${side}',${dir})">${label}</button>`;
}

function buildShowcase(proj, catId, projIdx, total, state) {
    const hasBefore = proj.before && proj.before.length > 0;
    const afterItems = proj.after || [];
    const beforeItems = proj.before || [];
    const bi = state.beforeIdx;
    const ai = state.afterIdx;

    let mediaHTML = '';

    if (hasBefore && afterItems[ai] && afterItems[ai].type === 'image') {
        const beforeNav = beforeItems.length > 1
            ? `<div class="ba-before-nav">
           ${navBtnHTML(catId, 'before', -1)}
           <span class="ba-nav-count" id="bn-count-${catId}">${bi + 1} / ${beforeItems.length}</span>
           ${navBtnHTML(catId, 'before', 1)}
         </div>` : '';

        const afterNav = afterItems.filter(x => x.type === 'image').length > 1
            ? `<div class="ba-after-nav">
           ${navBtnHTML(catId, 'after', -1)}
           <span class="ba-nav-count" id="an-count-${catId}">${ai + 1} / ${afterItems.filter(x => x.type === 'image').length}</span>
           ${navBtnHTML(catId, 'after', 1)}
         </div>` : '';

        mediaHTML = `
      <div class="ba-wrap" id="ba-${catId}">
        <div class="ba-after">
          <img id="ba-after-img-${catId}" src="${afterItems[ai].src}" alt="After" loading="lazy">
        </div>
        <div class="ba-before" id="ba-before-${catId}" style="width:50%;">
          <img id="ba-before-img-${catId}" src="${beforeItems[bi]}" alt="Before" loading="lazy">
        </div>
        <div class="ba-handle" id="ba-handle-${catId}" style="left:50%;"></div>
        <span class="ba-label before">Before</span>
        <span class="ba-label after">After</span>
        ${beforeNav}
        ${afterNav}
        <span class="mode-badge split">◀ Drag to compare</span>
      </div>`;
    } else {
        const slides = afterItems.map((item, i) =>
            `<div style="position:absolute;inset:0;display:${i === ai ? 'block' : 'none'};" id="slide-${catId}-${projIdx}-${i}">${buildMediaEl(item)}</div>`
        ).join('');

        const hasVid = afterItems.some(x => x.type === 'video');
        const arrows = afterItems.length > 1 ? `
      <button class="media-arrow prev" onclick="shiftSide('${catId}','after',-1)">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="media-arrow next" onclick="shiftSide('${catId}','after',1)">
        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="media-counter" id="an-count-${catId}">${ai + 1} / ${afterItems.length}</div>
    ` : '';

        mediaHTML = `
      <div style="position:relative;width:100%;height:100%;">
        ${slides}
        ${arrows}
        <span class="mode-badge ${hasVid ? 'video' : 'after-only'}">${hasVid ? '▶ Video included' : '📷 Photos'}</span>
      </div>`;
    }

    return `
    <div class="showcase">
      <div class="showcase-media">${mediaHTML}</div>
      <div class="showcase-info">
        <div>
          <div class="proj-category">${proj.type} · ${CATEGORIES.find(c => c.id === catId)?.label || catId}</div>
          <h3 class="proj-title">${proj.title}</h3>
          <p class="proj-desc">${proj.description}</p>
          <div class="proj-meta">
            <div class="meta-item"><div class="meta-label">Location</div><div class="meta-val">${proj.location}</div></div>
            <div class="meta-item"><div class="meta-label">Year</div><div class="meta-val">${proj.year}</div></div>
            <div class="meta-item"><div class="meta-label">After Photos</div><div class="meta-val">${afterItems.length} item${afterItems.length !== 1 ? 's' : ''}</div></div>
            ${hasBefore ? `<div class="meta-item"><div class="meta-label">Before Photos</div><div class="meta-val">${beforeItems.length} shot${beforeItems.length !== 1 ? 's' : ''}</div></div>` : ''}
          </div>
        </div>
        <div class="proj-nav">
          <button class="proj-btn" onclick="switchProj('${catId}',${projIdx - 1})" ${projIdx === 0 ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg> Prev
          </button>
          <button class="proj-btn" onclick="switchProj('${catId}',${projIdx + 1})" ${projIdx === total - 1 ? 'disabled' : ''}>
            Next <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <span class="proj-count">Project ${projIdx + 1} of ${total}</span>
        </div>
      </div>
    </div>`;
}

function renderCat(catId) {
    const projs = PROJECTS.filter(p => p.category === catId);
    const panel = document.getElementById('cp-' + catId);
    if (!panel || !projs.length) return;
    const state = getState(catId);
    panel.innerHTML = buildShowcase(projs[state.projIdx], catId, state.projIdx, projs.length, state);
    initBA(catId);
}

function switchProj(catId, idx) {
    const projs = PROJECTS.filter(p => p.category === catId);
    if (idx < 0 || idx >= projs.length) return;
    const state = getState(catId);
    state.projIdx = idx;
    state.beforeIdx = 0;
    state.afterIdx = 0;
    renderCat(catId);
}

function shiftSide(catId, side, dir) {
    const state = getState(catId);
    const projs = PROJECTS.filter(p => p.category === catId);
    const proj = projs[state.projIdx];

    if (side === 'before') {
        const items = proj.before || [];
        state.beforeIdx = (state.beforeIdx + dir + items.length) % items.length;
        const img = document.getElementById('ba-before-img-' + catId);
        if (img) img.src = items[state.beforeIdx];
        const cnt = document.getElementById('bn-count-' + catId);
        if (cnt) cnt.textContent = `${state.beforeIdx + 1} / ${items.length}`;
    } else {
        const items = proj.after || [];
        const imgItems = items.filter(x => x.type === 'image');
        const hasBefore = proj.before && proj.before.length > 0;

        if (hasBefore) {
            state.afterIdx = (state.afterIdx + dir + imgItems.length) % imgItems.length;
            const img = document.getElementById('ba-after-img-' + catId);
            if (img) img.src = imgItems[state.afterIdx].src;
            const cnt = document.getElementById('an-count-' + catId);
            if (cnt) cnt.textContent = `${state.afterIdx + 1} / ${imgItems.length}`;
        } else {
            state.afterIdx = (state.afterIdx + dir + items.length) % items.length;
            items.forEach((_, i) => {
                const el = document.getElementById(`slide-${catId}-${state.projIdx}-${i}`);
                if (el) el.style.display = i === state.afterIdx ? 'block' : 'none';
            });
            const cnt = document.getElementById('an-count-' + catId);
            if (cnt) cnt.textContent = `${state.afterIdx + 1} / ${items.length}`;
        }
    }
}

function initBA(catId) {
    const wrap = document.getElementById('ba-' + catId);
    if (!wrap) return;
    const handle = document.getElementById('ba-handle-' + catId);
    const beforeEl = document.getElementById('ba-before-' + catId);
    if (!handle || !beforeEl) return;

    let dragging = false;

    function setPos(x) {
        const rect = wrap.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(5, Math.min(95, pct));
        handle.style.left = pct + '%';
        beforeEl.style.width = pct + '%';
    }

    handle.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
    window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
    window.addEventListener('mouseup', () => { dragging = false; });
    handle.addEventListener('touchstart', e => { dragging = true; e.preventDefault(); }, { passive: false });
    window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => { dragging = false; });
}

function activateCat(catId) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === catId));
    document.querySelectorAll('.cat-panel').forEach(p => p.classList.toggle('active', p.id === 'cp-' + catId));
    const panel = document.getElementById('cp-' + catId);
    if (panel && !panel.innerHTML) renderCat(catId);
}

function goToCategory(catId) {
    activateCat(catId);
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function init() {
    const tabsEl = document.getElementById('catTabs');
    const panelsEl = document.getElementById('catPanels');
    let first = true;

    CATEGORIES.forEach(cat => {
        const catProjs = PROJECTS.filter(p => p.category === cat.id);
        if (!catProjs.length) return;

        const btn = document.createElement('button');
        btn.className = 'cat-tab' + (first ? ' active' : '');
        btn.textContent = cat.label;
        btn.dataset.cat = cat.id;
        btn.onclick = () => activateCat(cat.id);
        tabsEl.appendChild(btn);

        const panel = document.createElement('div');
        panel.className = 'cat-panel' + (first ? ' active' : '');
        panel.id = 'cp-' + cat.id;
        panelsEl.appendChild(panel);

        if (first) { renderCat(cat.id); first = false; }
    });
}

/* ── HAMBURGER ── */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    }));
    init();
});

/* ── CONTACT FORM ── */
async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        if (res.ok) {
            btn.textContent = 'Request Sent! ✓';
            btn.style.background = '#2a7a2a';
            btn.style.opacity = '1';
            form.reset();
            setTimeout(() => { btn.textContent = 'Send My Request →'; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else throw new Error();
    } catch {
        btn.textContent = 'Something went wrong — call us directly';
        btn.style.background = '#a00';
        btn.style.opacity = '1';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = 'Send My Request →'; btn.style.background = ''; }, 4000);
    }
}