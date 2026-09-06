'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     DOM
  ============================================================ */
  const sidebar          = document.getElementById('sidebar');
  const toggleBtn        = document.getElementById('toggleSidebar');
  const modeToolbar      = document.getElementById('modeToolbar');
  const wrapper          = document.getElementById('wrapper');
  const modeBtns         = document.querySelectorAll('.mode-btn');
  const commandInput     = document.getElementById('commandInput');
  const commandHint      = document.getElementById('commandHint');
  const documentEl       = document.getElementById('document');
  const formatToolbar    = document.getElementById('formatToolbar');
  const shortcutsOverlay = document.getElementById('shortcutsOverlay');
  const closeShortcuts   = document.getElementById('closeShortcuts');
  const openShortcuts    = document.getElementById('openShortcuts');
  const openPrefsBtn     = document.getElementById('openPrefs');
  const prefsOverlay     = document.getElementById('prefsOverlay');
  const prefsApiKey      = document.getElementById('prefsApiKey');
  const prefsApiSave     = document.getElementById('prefsApiSave');
  const prefsClearData   = document.getElementById('prefsClearData');
  const prefsClose       = document.getElementById('prefsClose');
  const wordCountEl      = document.getElementById('wordCount');
  const saveStatusEl     = document.getElementById('saveStatus');
  const folderList       = document.getElementById('folderList');
  const newFolderBtn     = document.getElementById('newFolderBtn');
  const toastEl          = document.getElementById('toast');
  const darkToggleBtn    = document.getElementById('darkToggle');
  // Agenda
  const agendaTitle     = document.getElementById('agendaTitle');
  // agendaRecap : refs r?solues via d?l?gation, pas au chargement
  // recapEls : r?solus dynamiquement (mode agenda display:none au chargement)
  const agendaGrid      = document.getElementById('agendaGrid');
  const agendaPrevBtn   = document.getElementById('agendaPrev');
  const agendaNextBtn   = document.getElementById('agendaNext');
  const agendaTodayBtn  = document.getElementById('agendaToday');
  const agendaMonth     = document.getElementById('agendaMonth');
  const agendaWeek      = document.getElementById('agendaWeek');
  const agendaWeekHeader= document.getElementById('agendaWeekHeader');
  const agendaWeekBody  = document.getElementById('agendaWeekBody');
  const agendaViewMonth = document.getElementById('agendaViewMonth');
  const agendaViewWeek  = document.getElementById('agendaViewWeek');
  const eventOverlay    = document.getElementById('eventOverlay');
  const eventModalTitle = document.getElementById('eventModalTitle');
  const eventTitleInput = document.getElementById('eventTitle');
  const eventDateInput  = document.getElementById('eventDate');
  const eventTimeInput  = document.getElementById('eventTime');
  const eventDurationSel= document.getElementById('eventDuration');
  const eventNotesInput = document.getElementById('eventNotes');
  const eventSaveBtn    = document.getElementById('eventSave');
  const eventCancelBtn  = document.getElementById('eventCancel');
  const eventDeleteBtn  = document.getElementById('eventDelete');
  const eventModalClose = document.getElementById('eventModalClose');
  const findBar       = document.getElementById('findBar');
  const findInput     = document.getElementById('findInput');
  const findCount     = document.getElementById('findCount');
  const findPrevBtn   = document.getElementById('findPrev');
  const findNextBtn   = document.getElementById('findNext');
  const findCloseBtn  = document.getElementById('findClose');
  // Mode Mail
  const mailPromptEl    = document.getElementById('mailPrompt');
  const mailGenerateBtn = document.getElementById('mailGenerateBtn');
  const mailPreviewEmpty   = document.getElementById('mailPreviewEmpty');
  const mailPreviewContent = document.getElementById('mailPreviewContent');
  const mailToEl        = document.getElementById('mailTo');
  const mailSubjectEl   = document.getElementById('mailSubject');
  const mailBodyEl      = document.getElementById('mailBody');
  const mailSendMailto  = document.getElementById('mailSendMailto');
  const mailSendGmail   = document.getElementById('mailSendGmail');
  const mailSendCopy    = document.getElementById('mailSendCopy');
  const mailClearBtn    = document.getElementById('mailClearBtn');
  const mailHistoryEl   = document.getElementById('mailHistory');
  const aiPanelEl         = document.getElementById('aiPanel');
  const fcPanelEl         = document.getElementById('flashcardPanel');
  const fcCloseEl         = document.getElementById('flashcardClose');
  const fcSetupEl         = document.getElementById('flashcardSetup');
  const fcLoadingEl       = document.getElementById('flashcardLoading');
  const fcViewEl          = document.getElementById('flashcardView');
  const fcDoneEl          = document.getElementById('flashcardDone');
  const fcGenerateEl      = document.getElementById('flashcardGenerate');
  const fcCounterEl       = document.getElementById('flashcardCounter');
  const fcFrontEl         = document.getElementById('flashcardFront');
  const fcBackEl          = document.getElementById('flashcardBack');
  const fcCardEl          = document.getElementById('flashcardCard');
  const fcPrevEl          = document.getElementById('flashcardPrev');
  const fcNextEl          = document.getElementById('flashcardNext');
  const fcRestartEl       = document.getElementById('flashcardRestart');
  const openFlashcardsBtn = document.getElementById('openFlashcards');
  const aiPanelClose      = document.getElementById('aiPanelClose');
  const aiModesEl         = document.getElementById('aiModes');
  const aiStepModesEl     = document.getElementById('aiStepModes');
  const aiStepResultEl    = document.getElementById('aiStepResult');
  const aiOriginalDisplay = document.getElementById('aiOriginalDisplay');
  const aiStreamEl        = document.getElementById('aiStream');
  const aiResultLabel     = document.getElementById('aiResultLabel');
  const aiActionsEl       = document.getElementById('aiActions');
  const aiAcceptBtn       = document.getElementById('aiAccept');
  const aiRefuseBtn       = document.getElementById('aiRefuse');
  const aiMarginBtn       = document.getElementById('aiMarginBtn');
  const fsDownBtn        = document.getElementById('fsDown');
  const fsUpBtn          = document.getElementById('fsUp');
  const fsValueEl        = document.getElementById('fsValue');
  const darkIcon         = document.getElementById('darkIcon');
  const focusToggleBtn   = document.getElementById('focusToggle');
  const focusBarEl       = document.getElementById('focusBar');
  const focusWordCountEl = document.getElementById('focusWordCount');
  const tocListEl        = document.getElementById('tocList');
  const tocSectionEl     = document.getElementById('tocSection');
  const rootFileListEl   = document.getElementById('rootFileList');
  const workspaceNameEl  = document.getElementById('workspaceName');
  const workspaceCtxBtn  = document.getElementById('workspaceCtxBtn');
  const ctxMenuEl        = document.getElementById('ctxMenu');
  const confirmOverlay   = document.getElementById('confirmOverlay');
  const confirmTitle     = document.getElementById('confirmTitle');
  const confirmBody      = document.getElementById('confirmBody');
  const confirmIcon      = document.getElementById('confirmIcon');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const confirmCancelBtn = document.getElementById('confirmCancel');

  /* ============================================================
     \u00C9TAT
  ============================================================ */
  let currentMode      = 'page';
  let commandHistory   = [];
  let historyIndex     = -1;
  let savedSelection   = null;      // pour format toolbar
  // Pagination visuelle - plus de tableau pages[]
  let pageBreakTimer   = null;
  const PAGE_H         = 1056;      // hauteur A4 en px (rep\u00E8re visuel uniquement)
  const PAGE_PAD_V     = 80;        // padding vertical page-sheet
  const PAGE_PAD_H_VAL = 72;        // padding horizontal (var --page-pad-h)
  let activeDocId      = null;      // id du document actif

  const PAGE_HEIGHT    = 1056;      // px - hauteur fixe page A4
  const DOC_PREFIX     = 'zaap_doc_';
  const SIDEBAR_KEY    = 'zaap_sidebar_v1';

  /* ============================================================
     STORAGE
  ============================================================ */
  const STORAGE_KEY     = 'zaap_v1';
  const AUTOSAVE_DELAY  = 1500;     // ms apr\u00E8s la derni\u00E8re frappe
  let   autosaveTimer   = null;
  let   saveStatusTimer = null;

  let lastSavedAt   = null;   // timestamp de la derni\u00E8re sauvegarde r\u00E9ussie
  let agoTimer      = null;   // rafra\u00EEchit "il y a Xs"

  function setSaveStatus(state, text) {
    clearTimeout(saveStatusTimer);
    clearTimeout(agoTimer);

    saveStatusEl.className = 'save-status ' + state;
    // Dot anim? + texte
    saveStatusEl.innerHTML = `<span class="save-dot"></span><span>${text}</span>`;

    if (state === 'saved') {
      lastSavedAt = Date.now();
      // D?marrer le rafra?chissement "il y a Xs"
      startAgoRefresh();
      saveStatusTimer = setTimeout(() => saveStatusEl.classList.add('fade'), 4000);
    } else if (state === 'restored') {
      saveStatusTimer = setTimeout(() => saveStatusEl.classList.add('fade'), 3500);
    }
  }

  function startAgoRefresh() {
    clearTimeout(agoTimer);
    agoTimer = setTimeout(() => {
      if (!lastSavedAt) return;
      const ago = formatAgo(lastSavedAt);
      const span = saveStatusEl.querySelector('span:last-child');
      if (span) span.textContent = `OK ${ago}`;
      if (Date.now() - lastSavedAt < 120000) startAgoRefresh(); // rafra\u00EEchir 2min
    }, 15000); // toutes les 15s
  }

  // ?? G?n?rer un id de document unique ?????????????????????
  function genDocId() {
    return 'doc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  }

  // ?? S?rialiser le document actif ??????????????????????????
  function serializeDoc() {
    const titleEl = document.querySelector('.page-title');
    return JSON.stringify({
      v: 2,
      savedAt: Date.now(),
      title:   titleEl ? titleEl.innerHTML : '',
      docContent: serializeDoc(),
    });
  }

  // ?? S?rialiser la structure sidebar ???????????????????????
  function serializeSidebar() {
    const label = el => el.querySelector('.file-label')?.textContent.trim() || el.textContent.trim();
    const rootFiles = Array.from(rootFileListEl.querySelectorAll('.file')).map(f => ({
      id: f.dataset.docId || '', name: label(f), active: f.classList.contains('active'),
    }));
    const folders = [];
    document.querySelectorAll('#folderList .folder').forEach(folder => {
      const nameEl = folder.querySelector('.folder-name');
      folders.push({
        name: nameEl ? nameEl.textContent.trim() : 'Dossier',
        open: folder.classList.contains('open'),
        files: Array.from(folder.querySelectorAll('.file')).map(f => ({
          id: f.dataset.docId || '', name: label(f), active: f.classList.contains('active'),
        })),
      });
    });
    return { workspaceName: workspaceNameEl.textContent.trim() || 'Mon espace', rootFiles, folders };
  }

  // ?? Sauvegarder document actif + sidebar ?????????????????
  function save() {
    try {
      setSaveStatus('saving', 'Sauvegarde...');
      if (activeDocId) {
        localStorage.setItem(DOC_PREFIX + activeDocId, serializeDoc());
      }
      const sd = serializeSidebar();
      localStorage.setItem(SIDEBAR_KEY, JSON.stringify({
        v: 2, savedAt: Date.now(), activeDoc: activeDocId,
        workspaceName: sd.workspaceName, rootFiles: sd.rootFiles, folders: sd.folders,
      }));
      setSaveStatus('saved', 'Sauvegarde');
    } catch (err) {
      setSaveStatus('error', '! Impossible');
      console.warn('Zaap save error:', err);
    }
  }

  function scheduleAutosave() {
    clearTimeout(autosaveTimer);
    setSaveStatus('pending', 'Non sauvegarde');
    autosaveTimer = setTimeout(save, AUTOSAVE_DELAY);
  }

  // ?? Charger un document dans le DOM ??????????????????????
  function loadDoc(docId) {
    // Sauvegarder l'actuel avant de switcher
    if (activeDocId && activeDocId !== docId) {
      clearTimeout(autosaveTimer);
      localStorage.setItem(DOC_PREFIX + activeDocId, serializeDoc());
    }

    // Transition visuelle : fondu rapide
    documentEl.style.opacity = '0';
    documentEl.style.transform = 'translateY(4px)';
    documentEl.style.transition = 'opacity 0.12s ease, transform 0.12s ease';

    // Vider le DOM document
    documentEl.innerHTML = '';
    activeDocId = docId;
    initDocument();

    // Charger les donn?es
    let raw;
    try { raw = localStorage.getItem(DOC_PREFIX + docId); } catch(_) {}

    if (raw) loadDocContent(raw);
    else     focusTitle();

    updateWordCount();
    buildToc();
    wrapper.scrollTo(0, 0);

    // Reveal : faire appara?tre le document charg?
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        documentEl.style.opacity = '1';
        documentEl.style.transform = 'translateY(0)';
        setTimeout(() => {
          documentEl.style.transition = '';
          documentEl.style.opacity    = '';
          documentEl.style.transform  = '';
        }, 150);
      });
    });
  }

  function focusTitle() {
    setTimeout(() => {
      const title = document.querySelector('.page-title');
      if (title) title.focus();
    }, 60);
  }

  // ?? Restaurer l'?tat complet au d?marrage ?????????????????
  function restore() {
    let sidebarRaw;
    try { sidebarRaw = localStorage.getItem(SIDEBAR_KEY); } catch(_) {}

    // Migration : lire l'ancien format zaap_v1 une seule fois
    if (!sidebarRaw) {
      try {
        const oldRaw = localStorage.getItem(STORAGE_KEY);
        if (oldRaw) {
          const legacyData = JSON.parse(oldRaw);
          if (legacyData && legacyData.v === 1) {
            // Creer un premier doc avec l'ancien contenu
            const migId = genDocId();
            localStorage.setItem(DOC_PREFIX + migId, JSON.stringify({
              v: 2, savedAt: legacyData.savedAt,
              title: legacyData.title || '',
              pages: legacyData.pages || [],
            }));
            // Reconstruire la sidebar depuis l'ancien format
            const folders = (legacyData.sidebar || []).map((folder, fi) => ({
              name: folder.name,
              open: folder.open,
              files: (folder.files || []).map((f, idx) => ({
                id:     fi === 0 && idx === 0 ? migId : genDocId(),
                name:   f.name,
                active: f.active,
              })),
            }));
            if (!folders.length || !folders[0].files.length) {
              folders.splice(0, folders.length, {
                name: 'Mon espace', open: true,
                files: [{ id: migId, name: old.title || 'Page sans titre', active: true }],
              });
            }
            const sidebarData = { v: 1, savedAt: old.savedAt, activeDoc: migId, folders };
            localStorage.setItem(SIDEBAR_KEY, JSON.stringify(sidebarData));
            sidebarRaw = JSON.stringify(sidebarData);
          }
        }
      } catch(_) {}
    }

    if (!sidebarRaw) return false;

    let sidebarData;
    try { sidebarData = JSON.parse(sidebarRaw); } catch(_) { return false; }
    if (!sidebarData || !sidebarData.folders) return false;

    // Restaurer workspace name + sidebar compl?te
    if (sidebarData.workspaceName) workspaceNameEl.textContent = sidebarData.workspaceName;
    rebuildSidebar(sidebarData.rootFiles || [], sidebarData.folders || []);

    // Charger le document actif
    const docToLoad = sidebarData.activeDoc || findFirstDocId(sidebarData.rootFiles || [], sidebarData.folders || []);
    if (docToLoad) {
      loadDoc(docToLoad);
      // Marquer le bon fichier actif visuellement
      document.querySelectorAll('.file').forEach(f => {
        f.classList.toggle('active', f.dataset.docId === docToLoad);
      });
    }

    return true;
  }

  function findFirstDocId(rootFiles, folders) {
    for (const f of (rootFiles || [])) { if (f.id) return f.id; }
    for (const folder of (folders || [])) {
      for (const f of (folder.files || [])) { if (f.id) return f.id; }
    }
    return null;
  }

  // ?? Cr?er un ?l?ment folder complet ??????????????????????
  function createFolderEl(name, open) {
    const li = document.createElement('li');
    li.className = 'folder' + (open ? ' open' : '');
    li.innerHTML = `
      <div class="folder-row">
        <span class="folder-arrow">\u25B8</span>
        <span class="folder-name" contenteditable="false" spellcheck="false">${escapeHtml(name)}</span>
        <button class="ctx-trigger folder-ctx" title="Options" tabindex="-1">\u2026</button>
      </div>
      <ul class="file-list"></ul>
      <button class="new-file-button">+ Nouvelle feuille</button>`;

    const folderCtxBtn = li.querySelector('.folder-ctx');
    folderCtxBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (ctxMenuEl.classList.contains('open') && ctxTarget === li) { closeCtxMenu(); return; }
      openCtxMenu(folderCtxBtn, 'folder', li);
    });

    return li;
  }

  // ?? Supprimer un dossier et tous ses fichiers ?????????????
  function deleteFolder(folderLi) {
    const wasActiveInside = !!folderLi.querySelector('.file.active');

    // Supprimer tous les docs du dossier de localStorage
    folderLi.querySelectorAll('.file[data-doc-id]').forEach(f => {
      try { localStorage.removeItem(DOC_PREFIX + f.dataset.docId); } catch(_) {}
    });

    folderLi.remove();
    saveSidebarOnly();

    if (wasActiveInside) {
      const anyFile = folderList.querySelector('.file[data-doc-id]');
      if (anyFile) {
        document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
        anyFile.classList.add('active');
        loadDoc(anyFile.dataset.docId);
      } else {
        createFirstDoc();
      }
    }
    showToast('Dossier supprime');
  }

  function rebuildSidebar(rootFiles, folders) {
    rootFileListEl.innerHTML = '';
    (rootFiles || []).forEach(f => rootFileListEl.appendChild(createFileItem(f.name, f.active, f.id)));
    folderList.innerHTML = '';
    (folders || []).forEach(folder => {
      const li = createFolderEl(folder.name, folder.open);
      const fl = li.querySelector('.file-list');
      (folder.files || []).forEach(f => fl.appendChild(createFileItem(f.name, f.active, f.id)));
      folderList.appendChild(li);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function formatAgo(ts) {
    if (!ts) return '?';
    const diff = Math.round((Date.now() - ts) / 1000);
    if (diff < 60)   return `il y a ${diff}s`;
    if (diff < 3600) return `il y a ${Math.round(diff/60)}min`;
    return `il y a ${Math.round(diff/3600)}h`;
  }

  // ?? Ctrl+S manuel ?????????????????????????????????????????
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      clearTimeout(autosaveTimer);
      setSaveStatus('saving', 'Sauvegarde...');
      save();
    }
  }, true); // capture phase pour passer avant les autres listeners

  /* ============================================================
     UNDO / REDO
     Strat\u00E9gie : un historique par zone \u00E9ditable (title + textBoxes).
     Chaque entr\u00E9e = { html, cursorPath, cursorOffset }.
     Snapshot pris :
       - 400 ms apr\u00E8s la derni\u00E8re frappe (debounce)
       - avant chaque op\u00E9ration de formatage
       - avant chaque commande qui modifie le DOM
     Ctrl+Z / Ctrl+Y intercept\u00E9s en phase capture pour court-circuiter
     le comportement natif du navigateur (tr\u00E8s incoh\u00E9rent sur contenteditable).
  ============================================================ */
  const UNDO_LIMIT = 200;   // max snapshots par zone
  const SNAP_DELAY = 400;   // ms debounce

  // Map<HTMLElement, { stack: snapshot[], pointer: number, snapTimer: id }>
  const undoMap = new WeakMap();

  function getUndoState(el) {
    if (!undoMap.has(el)) {
      undoMap.set(el, { stack: [], pointer: -1, snapTimer: null });
    }
    return undoMap.get(el);
  }

  // ?? S?rialiser la position du curseur ?????????????????????
  // On encode le chemin depuis la zone racine : [childIndex, childIndex, ?]
  // + offset dans le n?ud texte final.
  function getCursorPath(root) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    const range = sel.getRangeAt(0);
    if (!root.contains(range.startContainer)) return null;
    return {
      anchorPath:  nodePath(root, range.startContainer),
      anchorOff:   range.startOffset,
      focusPath:   nodePath(root, range.endContainer),
      focusOff:    range.endOffset,
    };
  }

  function nodePath(root, node) {
    const path = [];
    let cur = node;
    while (cur && cur !== root) {
      const parent = cur.parentNode;
      if (!parent) return null;
      path.unshift(Array.from(parent.childNodes).indexOf(cur));
      cur = parent;
    }
    return cur === root ? path : null;
  }

  function nodeFromPath(root, path) {
    if (!path) return null;
    let cur = root;
    for (const idx of path) {
      if (!cur.childNodes[idx]) return null;
      cur = cur.childNodes[idx];
    }
    return cur;
  }

  // ?? Prendre un snapshot ????????????????????????????????????
  function snapshot(el) {
    if (!el || !el.isConnected) return;
    const state = getUndoState(el);
    const html  = el.innerHTML;

    // D?dupliquer : si identique au sommet, ne rien faire
    if (state.pointer >= 0 && state.stack[state.pointer].html === html) return;

    // Tronquer le futur si on est au milieu de l'historique
    state.stack.splice(state.pointer + 1);

    state.stack.push({ html, cursor: getCursorPath(el) });

    // Limiter la taille
    if (state.stack.length > UNDO_LIMIT) state.stack.shift();

    state.pointer = state.stack.length - 1;
  }

  // ?? Snapshot debounced (apr?s frappe) ?????????????????????
  function scheduleSnapshot(el) {
    const state = getUndoState(el);
    clearTimeout(state.snapTimer);
    state.snapTimer = setTimeout(() => snapshot(el), SNAP_DELAY);
  }

  // ?? Snapshot imm?diat (avant formatage) ???????????????????
  function snapshotNow(el) {
    if (!el) return;
    const state = getUndoState(el);
    clearTimeout(state.snapTimer);
    snapshot(el);
  }

  // ?? Appliquer un snapshot ?????????????????????????????????
  function applySnapshot(el, entry) {
    el.innerHTML = entry.html;
    if (entry.cursor) restoreCursorPath(el, entry.cursor);
    // D?clencher les side-effects habituels
    updateWordCount();
    scheduleAutosave();
    // Ne pas re-d?clencher handleOverflow ici (innerHTML d?j? correct)
  }

  function restoreCursorPath(root, cursor) {
    try {
      const anchorNode = nodeFromPath(root, cursor.anchorPath);
      const focusNode  = nodeFromPath(root, cursor.focusPath);
      if (!anchorNode || !focusNode) return;
      const range = document.createRange();
      range.setStart(anchorNode, Math.min(cursor.anchorOff, anchorNode.length ?? 0));
      range.setEnd(focusNode,   Math.min(cursor.focusOff,   focusNode.length  ?? 0));
      const sel = window.getSelection();
      if (sel) { sel.removeAllRanges(); sel.addRange(range); }
    } catch (_) { /* cursor restore best-effort */ }
  }

  // ?? Undo ??????????????????????????????????????????????????
  function undo(el) {
    const state = getUndoState(el);
    // Snapshot l'?tat courant si on est tout en haut (premi?re annulation)
    if (state.pointer === state.stack.length - 1) {
      snapshot(el);
    }
    if (state.pointer <= 0) return false;
    state.pointer--;
    applySnapshot(el, state.stack[state.pointer]);
    flashUndoIndicator('<-');
    return true;
  }

  // ?? Redo ??????????????????????????????????????????????????
  function redo(el) {
    const state = getUndoState(el);
    if (state.pointer >= state.stack.length - 1) return false;
    state.pointer++;
    applySnapshot(el, state.stack[state.pointer]);
    flashUndoIndicator('->');
    return true;
  }

  // ?? Trouver la zone active (title ou textBox) ??????????????
  function activeEditableZone() {
    const active = document.activeElement;
    if (!active) return null;
    if (active.classList.contains('page-title') || active.classList.contains('textBox')) {
      return active;
    }
    // Chercher un anc?tre ?ditable zaap
    return active.closest('.page-title, .textBox');
  }

  // ?? Feedback visuel flash ??????????????????????????????????
  let undoFlashTimer;
  function flashUndoIndicator(symbol) {
    clearTimeout(undoFlashTimer);
    // Flash discret sans passer par setSaveStatus (?vite de reset lastSavedAt)
    const dot  = saveStatusEl.querySelector('.save-dot');
    const span = saveStatusEl.querySelector('span:last-child');
    const prevClass = saveStatusEl.className;
    const prevText  = span ? span.textContent : '';
    saveStatusEl.className = 'save-status saving';
    if (span) span.textContent = symbol;
    undoFlashTimer = setTimeout(() => {
      saveStatusEl.className = prevClass;
      if (span) span.textContent = prevText;
    }, 600);
  }

  // selectionchange global : couvre les s?lections au clavier et Ctrl+A
  document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const anchor = sel.anchorNode;
    if (!anchor) return;
    const node = anchor.nodeType === 3 ? anchor.parentElement : anchor;
    if (node.closest('.textBox') || node.closest('.page-title')) {
      setTimeout(checkSelection, 20);
    }
  });

  // ?? Intercepter Ctrl+Z / Ctrl+Y en capture ????????????????
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;

    const z = e.key.toLowerCase() === 'z';
    const y = e.key.toLowerCase() === 'y';
    if (!z && !y) return;

    // Ne pas interf?rer avec commandInput (texte simple)
    if (document.activeElement === commandInput) return;

    const zone = activeEditableZone();
    if (!zone) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    if (z && !e.shiftKey) undo(zone);
    if ((z && e.shiftKey) || y) redo(zone);

  }, true); // capture \u2192 avant tous les autres listeners

  /* ============================================================
     TAILLE DE POLICE
  ============================================================ */
  const FS_KEY     = 'zaap_fontsize';
  const FS_MIN     = 12;
  const FS_MAX     = 22;
  const FS_STEP    = 1;
  const FS_DEFAULT = 15.5;

  let currentFontSize = FS_DEFAULT;

  function setFontSize(size, save = true) {
    currentFontSize = Math.min(FS_MAX, Math.max(FS_MIN, size));

    // Appliquer via la variable CSS sur :root
    document.documentElement.style.setProperty(
      '--font-size-body', currentFontSize + 'px'
    );

    // Mettre ? jour l'affichage (entier si .0)
    const display = Number.isInteger(currentFontSize)
      ? String(currentFontSize)
      : currentFontSize.toFixed(1);
    fsValueEl.textContent = display;

    // Indiquer visuellement si diff?rent du d?faut
    fsValueEl.classList.toggle('changed', currentFontSize !== FS_DEFAULT);

    // D?sactiver les boutons aux limites
    fsDownBtn.disabled = currentFontSize <= FS_MIN;
    fsUpBtn.disabled   = currentFontSize >= FS_MAX;

    if (save) {
      try { localStorage.setItem(FS_KEY, String(currentFontSize)); } catch(_) {}
    }
  }

  function restoreFontSize() {
    try {
      const saved = localStorage.getItem(FS_KEY);
      if (saved) {
        const n = parseFloat(saved);
        if (!isNaN(n)) { setFontSize(n, false); return; }
      }
    } catch(_) {}
    setFontSize(FS_DEFAULT, false);
  }

  fsDownBtn.addEventListener('click', () => setFontSize(currentFontSize - FS_STEP));
  fsUpBtn.addEventListener('click',   () => setFontSize(currentFontSize + FS_STEP));

  // Ctrl+Shift+- et Ctrl+Shift+= pour les power users
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl || !e.shiftKey) return;
    if (e.key === '+' || e.key === '=') { e.preventDefault(); setFontSize(currentFontSize + FS_STEP); }
    if (e.key === '-' || e.key === '_') { e.preventDefault(); setFontSize(currentFontSize - FS_STEP); }
    if (e.key === '0')                  { e.preventDefault(); setFontSize(FS_DEFAULT); }
  });

  /* ============================================================
     DARK MODE
  ============================================================ */
  const DARK_KEY = 'zaap_dark';

  const ICON_MOON = `<path d="M7.5 1.5a6 6 0 1 0 6 6 4.5 4.5 0 0 1-6-6z" fill="currentColor"/>`;
  const ICON_SUN  = '<circle cx="7.5" cy="7.5" r="3" fill="currentColor"/>' +
    '<line x1="7.5" y1="1" x2="7.5" y2="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="7.5" y1="12.5" x2="7.5" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="1" y1="7.5" x2="2.5" y2="7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="12.5" y1="7.5" x2="14" y2="7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="3" y1="3" x2="4.1" y2="4.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="10.9" y1="10.9" x2="12" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="12" y1="3" x2="10.9" y2="4.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="4.1" y1="10.9" x2="3" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';

  function setDark(on) {
    document.body.classList.toggle('dark', on);
    darkIcon.innerHTML = on ? ICON_SUN : ICON_MOON;
    darkToggleBtn.title = on ? 'Mode clair (Ctrl+D)' : 'Mode sombre (Ctrl+D)';
    try { localStorage.setItem(DARK_KEY, on ? '1' : '0'); } catch(_) {}
  }

  function toggleDark() {
    setDark(!document.body.classList.contains('dark'));
  }

  darkToggleBtn.addEventListener('click', toggleDark);

  // Restaurer la pr?f?rence sauvegard?e
  try {
    const saved = localStorage.getItem(DARK_KEY);
    if (saved === '1') setDark(true);
    else if (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true);
  } catch(_) {}

  /* ============================================================
     EXPORT PDF
  ============================================================ */
  function exportPdf() {
    // D?finir le titre de la fen?tre = titre du doc (pour le nom du fichier)
    const docTitle = titleEl ? titleEl.textContent.trim() : 'Zaap';
    const prevTitle = document.title;
    document.title = docTitle || 'Zaap';

    // Quitter le mode focus si actif
    if (isFocus) setFocus(false);

    // Laisser le temps au CSS de se recalculer
    setTimeout(() => {
      window.print();
      document.title = prevTitle;
    }, 150);
  }


  // Raccourci Ctrl+Shift+P
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      exportPdf();
    }
  });

  function htmlToMarkdown(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll('.page-spacer, .ai-inline-wrapper, .definition-block').forEach(function(el) { el.remove(); });

    function processNode(node) {
      if (node.nodeType === 3) return node.textContent;
      if (node.nodeType !== 1) return '';
      var tag = node.tagName.toLowerCase();
      var children = Array.from(node.childNodes).map(processNode).join('');
      var text = (node.innerText || node.textContent || '').trim();
      if (tag === 'h1') return '\n# ' + text + '\n\n';
      if (tag === 'h2') return '\n## ' + text + '\n\n';
      if (tag === 'strong' || tag === 'b') return '**' + children + '**';
      if (tag === 'em' || tag === 'i') return '*' + children + '*';
      if (tag === 'blockquote') return '\n> ' + text + '\n\n';
      if (tag === 'ul') {
        return '\n' + Array.from(node.querySelectorAll('li')).map(function(li) {
          return '- ' + (li.innerText || li.textContent || '').trim();
        }).join('\n') + '\n\n';
      }
      if (tag === 'ol') {
        return '\n' + Array.from(node.querySelectorAll('li')).map(function(li, idx) {
          return (idx + 1) + '. ' + (li.innerText || li.textContent || '').trim();
        }).join('\n') + '\n\n';
      }
      if (tag === 'li') return '';
      if (tag === 'br') return '\n';
      if (tag === 'div' || tag === 'p') {
        var inner = children.trim();
        return inner ? inner + '\n\n' : '';
      }
      return children;
    }

    var md = Array.from(tmp.childNodes).map(processNode).join('');
    return md.replace(/\n{3,}/g, '\n\n').trim();
  }

  function exportMarkdown() {
    var docTitle = titleEl ? titleEl.textContent.trim() : 'Document';
    var bodyHtml = textBox ? textBox.innerHTML : '';

    var md = '';
    if (docTitle) md += '# ' + docTitle + '\n\n';
    md += htmlToMarkdown(bodyHtml);

    var blob     = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    var url      = URL.createObjectURL(blob);
    var a        = document.createElement('a');
    a.href       = url;
    a.download   = (docTitle || 'document') + '.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Export Markdown OK');
  }

  /* ============================================================
     FOCUS MODE
  ============================================================ */
  let isFocus = false;

  function setFocus(on) {
    isFocus = on;
    document.body.classList.toggle('focus', on);

    if (on) {
      setTimeout(() => {
        if (textBox) textBox.focus();
      }, 420);
    }
  }

  function toggleFocus() { setFocus(!isFocus); }

  focusToggleBtn.addEventListener('click', toggleFocus);

  /* ============================================================
     SIDEBAR TOGGLE
  ============================================================ */
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    // Le CSS g?re le left via sibling selector
  });

  /* ============================================================
     MODES
  ============================================================ */
  function switchMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;
    modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    document.querySelectorAll('.mode-panel').forEach(p => {
      p.classList.toggle('active', p.id === 'mode-' + mode);
    });
  }

  modeBtns.forEach(btn => btn.addEventListener('click', () => switchMode(btn.dataset.mode)));

  /* ============================================================
     RACCOURCIS GLOBAUX
  ============================================================ */
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;

    // Esc ? toujours actif m?me en r?p?tition
    if (e.key === 'Escape') {
      if (shortcutsOverlay.classList.contains('open')) { closeShortcutsModal(); return; }
      if (prefsOverlay.classList.contains('open'))    { closePrefsModal(); return; }
      if (isFocus) { setFocus(false); return; }
      hideFormatToolbar();
      return;
    }

    // Ignorer les r?p?titions pour tous les raccourcis clavier
    // (?vite de d?clencher Ctrl+B 20 fois si on maintient les touches)
    if (e.repeat) return;

    if (ctrl && e.key === '/')       { e.preventDefault(); openShortcutsModal(); return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'a') { e.preventDefault(); openAiPanel(); return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'd') { e.preventDefault(); triggerDefinitionAtCursor(); return; }
    if (ctrl && e.key.toLowerCase() === 'd') { e.preventDefault(); toggleDark(); return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'f') { e.preventDefault(); toggleFocus(); return; }
    if (ctrl && e.key.toLowerCase() === 'p') { e.preventDefault(); switchMode('page'); return; }
    if (ctrl && e.key.toLowerCase() === 'k') { e.preventDefault(); switchMode('calendar'); return; }
    if (ctrl && e.key.toLowerCase() === 'm') { e.preventDefault(); switchMode('mail'); return; }
    if (ctrl && e.key.toLowerCase() === 'f') {
      e.preventDefault();
      if (currentMode === 'page') openFind();
      else switchMode('search');
      return;
    }

    // Format : Ctrl+B / Ctrl+I / Ctrl+1 / Ctrl+2
    if (ctrl && e.key.toLowerCase() === 'b') {
      const zone = activeEditableZone();
      if (zone) { e.preventDefault(); snapshotNow(zone); applyFormat('bold'); return; }
    }
    if (ctrl && e.key.toLowerCase() === 'i') {
      const zone = activeEditableZone();
      if (zone) { e.preventDefault(); snapshotNow(zone); applyFormat('italic'); return; }
    }
    if (ctrl && e.key === '1') { e.preventDefault(); snapshotNow(activeEditableZone()); applyFormat('h1'); return; }
    if (ctrl && e.key === '2') { e.preventDefault(); snapshotNow(activeEditableZone()); applyFormat('h2'); return; }
    if (ctrl && e.shiftKey && e.key === '8') { e.preventDefault(); snapshotNow(activeEditableZone()); applyFormat('ul'); return; }
    if (ctrl && e.shiftKey && e.key === '7') { e.preventDefault(); snapshotNow(activeEditableZone()); applyFormat('ol'); return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'l') { e.preventDefault(); applyFormat('alignLeft');    return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'e') { e.preventDefault(); applyFormat('alignCenter');  return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'r') { e.preventDefault(); applyFormat('alignRight');   return; }
    if (ctrl && e.shiftKey && e.key.toLowerCase() === 'j') { e.preventDefault(); applyFormat('alignJustify'); return; }

    // Historique commandes dans commandInput
    if (document.activeElement === commandInput) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          commandInput.value = commandHistory[historyIndex];
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        historyIndex = Math.max(-1, historyIndex - 1);
        commandInput.value = historyIndex >= 0 ? commandHistory[historyIndex] : '';
      }
    }
  });

  /* ============================================================
     SHORTCUTS MODAL
  ============================================================ */
  function openShortcutsModal()  { shortcutsOverlay.classList.add('open'); }
  function closeShortcutsModal() { shortcutsOverlay.classList.remove('open'); }

  closeShortcuts.addEventListener('click', closeShortcutsModal);

  // Navigation tabs raccourcis
  var scCurrentTab = 0;
  var scTotalTabs  = 4;

  function scGoTo(n) {
    if (n < 0) n = scTotalTabs - 1;
    if (n >= scTotalTabs) n = 0;
    scCurrentTab = n;
    document.querySelectorAll('.sc-tab').forEach(function(t) {
      t.classList.toggle('active', parseInt(t.dataset.tab) === n);
    });
    document.querySelectorAll('.sc-page').forEach(function(p) {
      p.classList.toggle('active', parseInt(p.dataset.page) === n);
    });
    var ind = document.getElementById('scIndicator');
    if (ind) ind.textContent = (n + 1) + ' / ' + scTotalTabs;
  }

  document.querySelectorAll('.sc-tab').forEach(function(tab) {
    tab.addEventListener('click', function() { scGoTo(parseInt(tab.dataset.tab)); });
  });

  var scPrevBtn = document.getElementById('scPrev');
  var scNextBtn = document.getElementById('scNext');
  if (scPrevBtn) scPrevBtn.addEventListener('click', function() { scGoTo(scCurrentTab - 1); });
  if (scNextBtn) scNextBtn.addEventListener('click', function() { scGoTo(scCurrentTab + 1); });
  openShortcuts.addEventListener('click', openShortcutsModal);
  shortcutsOverlay.addEventListener('click', e => {
    if (e.target === shortcutsOverlay) closeShortcutsModal();
  });

  /* ============================================================
     TOAST
  ============================================================ */
  let toastTimer;
  function showToastWithAction(msg, actionLabel, onAction) {
    clearTimeout(toastTimer);
    toastEl.innerHTML = '';
    const text = document.createElement('span');
    text.textContent = msg;
    toastEl.appendChild(text);
    const btn = document.createElement('button');
    btn.textContent = actionLabel;
    btn.style.cssText = 'margin-left:10px;padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.28);border-radius:5px;font-family:var(--font-ui);font-size:12px;color:#fff;cursor:pointer;flex-shrink:0;';
    btn.addEventListener('click', () => {
      clearTimeout(toastTimer);
      toastEl.classList.remove('show');
      toastEl.innerHTML = '';
      onAction();
    });
    toastEl.appendChild(btn);
    toastEl.style.display = 'flex';
    toastEl.style.alignItems = 'center';
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
      toastEl.innerHTML = '';
      toastEl.style.display = '';
    }, 6000);
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  /* ============================================================
     WORD COUNT
  ============================================================ */
  function updateWordCount() {
    const titleText = titleEl  ? (titleEl.innerText  || '') : '';
    const bodyText  = textBox  ? (textBox.innerText  || '') : '';
    const text      = (titleText + ' ' + bodyText).trim();
    const words     = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const label     = words === 0 ? '0 mot' : words === 1 ? '1 mot' : `${words} mots`;
    wordCountEl.textContent      = label;
    focusWordCountEl.textContent = label;
  }

  /* ============================================================
     DOCUMENT - ZONE UNIQUE + PAGINATION VISUELLE
     Une seule page-sheet, un seul textBox.
     Les page-break sont des <hr contenteditable=false> ins\u00E9r\u00E9s
     apr\u00E8s la frappe (debounce) pour marquer les coupures visuelles.
     JAMAIS de d\u00E9placement de n\u0153uds pendant la frappe.
  ============================================================ */

  let sheetEl  = null;   // la page-sheet unique
  let textBox  = null;   // le textBox unique
  let titleEl  = null;   // le titre de la premi\u00E8re page

  function initDocument() {
    documentEl.innerHTML = '';

    // Feuille unique
    sheetEl = document.createElement('div');
    sheetEl.className = 'page-sheet';

    // Titre
    titleEl = document.createElement('div');
    titleEl.className = 'page-title';
    titleEl.contentEditable = 'true';
    titleEl.dataset.placeholder = 'Sans titre...';
    titleEl.spellcheck = true;

    const sep = document.createElement('div');
    sep.className = 'page-title-sep';

    // TextBox unique
    textBox = document.createElement('div');
    textBox.className = 'textBox';
    textBox.contentEditable = 'true';
    textBox.spellcheck = true;
    textBox.dataset.placeholder = 'Commence a ecrire...';

    sheetEl.appendChild(titleEl);
    sheetEl.appendChild(sep);
    sheetEl.appendChild(textBox);
    documentEl.appendChild(sheetEl);

    // Listeners titre
    titleEl.addEventListener('input', () => {
      const active = document.querySelector(`.file[data-doc-id="\${activeDocId}"]`)
                  || document.querySelector('.file.active');
      if (active) {
        const lbl = active.querySelector('.file-label');
        const val = titleEl.textContent.trim() || 'Page sans titre';
        if (lbl) lbl.textContent = val;
        else     active.textContent = val;
      }
      updateWordCount();
      scheduleAutosave();
      scheduleSnapshot(titleEl);
      scheduleTocBuild();
      schedulePageBreaks(); // hauteur titre peut changer
    });
    setTimeout(() => snapshot(titleEl), 0);
    attachPendingFormatHandler(titleEl);
    attachDeleteAcceleration(titleEl);

    // Listeners textBox
    textBox.addEventListener('input', () => {
      updateWordCount();
      scheduleAutosave();
      scheduleSnapshot(textBox);
      scheduleTocBuild();
      schedulePageBreaks();
    });
    setTimeout(() => snapshot(textBox), 0);

    textBox.addEventListener('mouseup',    () => setTimeout(checkSelection, 20));
    textBox.addEventListener('pointerup',  () => setTimeout(checkSelection, 20));
    textBox.addEventListener('keyup',      () => setTimeout(checkSelection, 20));

    attachQuoteTrigger(textBox);
    attachPendingFormatHandler(textBox);
    attachInlineCommandDetection(textBox);
    attachDeleteAcceleration(textBox);
    attachDefinitionTrigger(textBox);

    // Suppression des blocs d?finition via mousedown (plus fiable que click sur contenteditable=false)
    textBox.addEventListener('mousedown', e => {
      const delBtn = e.target.closest('.definition-delete');
      if (!delBtn) return;
      e.preventDefault();
      e.stopPropagation();
      const defBlock = delBtn.closest('.definition-block');
      if (defBlock) {
        defBlock.remove();
        scheduleAutosave();
      }
    });

    // Init des rep?res CSS - attendre que le DOM soit peint
    requestAnimationFrame(() => requestAnimationFrame(updateRulerVars));
  }

  /* ?? Rep?res de page CSS (z?ro DOM, z?ro JS pendant frappe) ???
     On calcule juste les variables CSS --page-ruler-offset et
     --page-ruler-repeat sur la page-sheet.
     offset = PAGE_PAD_V + hauteur du bloc titre
     repeat = PAGE_H - 2 * PAGE_PAD_V (hauteur utile d'une page)
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  function schedulePageBreaks() {
    clearTimeout(pageBreakTimer);
    pageBreakTimer = setTimeout(updateRulerVars, 100);
  }

  const RULER_GAP  = 24;  // espace de chaque c\u00F4t\u00E9 de la ligne (px)
  const LINE_H     = 1;   // \u00E9paisseur de la ligne (px)
  const SPACER_H   = RULER_GAP * 2 + LINE_H; // hauteur totale du spacer

  // Hauteur utile de la page 1 (depuis le haut du textBox)
  function getPage1Height() {
    if (!titleEl) return PAGE_H - 2 * PAGE_PAD_V;
    let titleH = titleEl.offsetHeight;
    // Fallback robuste : si vide ou pas encore rendu, estimer sur 1 ligne minimum
    if (titleH < 20) titleH = Math.ceil(42 * 1.12); // 1 ligne de titre \u00E0 42px
    // Si le titre fait plusieurs lignes, on prend la vraie hauteur
    const titleBlockH = titleH + 2 + 32; // titre + sep(2px) + margin-bottom(32px)
    return PAGE_H - 2 * PAGE_PAD_V - titleBlockH;
  }

  // Hauteur utile des pages suivantes
  function getPageNHeight() {
    return PAGE_H - 2 * PAGE_PAD_V - SPACER_H;
  }

  function updateRulerVars() {
    if (!sheetEl || !textBox || !titleEl) return;

    const p1H = getPage1Height();
    const pNH = getPageNHeight();

    // 1. Mettre ? jour les variables CSS pour la ligne visuelle
    //    offset = PAD_V + titleBlock + p1H + GAP (juste avant la ligne)
    let titleH = titleEl.offsetHeight;
    if (titleH < 20) titleH = Math.ceil(42 * 1.12);
    const titleBlockH = titleH + 2 + 32;
    const offsetFromTop = PAGE_PAD_V + titleBlockH + p1H + RULER_GAP;
    sheetEl.style.setProperty('--page-ruler-offset', offsetFromTop + 'px');
    sheetEl.style.setProperty('--page-ruler-repeat', (pNH + SPACER_H) + 'px');
    sheetEl.style.setProperty('--page-ruler-gap', RULER_GAP + 'px');

    // 2. Injecter les spacers dans le textBox
    injectSpacers(p1H, pNH);

    // 3. Mettre ? jour les num?ros de page
    updatePageNumbers(offsetFromTop + LINE_H / 2, pNH + SPACER_H);
  }

  // ?? Spacers non-?ditables qui poussent le texte ?????????????
  // Principe : on parcourt les blocs du textBox et on ins?re des
  // spacers l? o? le texte d?passerait la hauteur de page.
  // Les spacers sont retir?s et recalcul?s ? chaque appel.
  function injectSpacers(p1H, pNH) {
    if (!textBox) return;

    // Sauvegarder la s?lection
    const sel    = window.getSelection();
    const savedR = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).cloneRange() : null;

    // Retirer les anciens spacers
    textBox.querySelectorAll('.page-spacer').forEach(s => s.remove());

    // Parcourir les blocs enfants du textBox
    const children = Array.from(textBox.children);
    let cumH     = 0;
    let pageLimit = p1H;
    let pageNum  = 1;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains('page-spacer')) continue;
      const childH = child.offsetHeight || 0;

      // Ce bloc d?borde la page courante ?
      if (cumH + childH > pageLimit && cumH > 0) {
        // Calculer le padding n?cessaire pour aligner la coupure
        const remaining = pageLimit - cumH; // espace restant avant la ligne
        const spacer = createSpacer(remaining);
        spacer.dataset.pageNum = pageNum + 1;
        textBox.insertBefore(spacer, child);
        pageNum++;
        pageLimit = pNH;
        cumH = 0;
      }
      cumH += childH;
    }

    // Restaurer la s?lection
    if (savedR) {
      try {
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(savedR);
      } catch(_) {}
    }
  }

  function createSpacer(paddingTop) {
    const s = document.createElement('div');
    s.className = 'page-spacer';
    s.contentEditable = 'false';
    s.setAttribute('aria-hidden', 'true');
    // paddingTop = espace blanc avant la ligne
    // SPACER_H   = paddingTop + ligne(1px) + GAP_AFTER
    s.style.height = (paddingTop + SPACER_H) + 'px';
    return s;
  }

  function updatePageNumbers(offset, repeat) {
    // Retirer les anciens labels absolus (remplac?s par ::before sur les spacers)
    sheetEl.querySelectorAll('.page-num-label').forEach(l => l.remove());
    // Mettre ? jour les data-page-num sur les spacers existants
    let pageNum = 2;
    textBox.querySelectorAll('.page-spacer').forEach(s => {
      s.dataset.pageNum = pageNum++;
    });
  }


  /* ?? S?rialiser / restaurer le document ????????????????????
     Plus de tableau pages[] - juste titleEl + textBox          */
  function serializeDoc() {
    return JSON.stringify({
      v: 1,
      title:   titleEl   ? titleEl.innerHTML   : '',
      content: textBox   ? textBox.innerHTML   : '',
    });
  }

  function loadDocContent(raw) {
    if (!raw) return;
    let data;
    try { data = JSON.parse(raw); } catch(_) { return; }
    if (!data || data.v !== 1) return;
    if (titleEl  && data.title   != null) {
      titleEl.innerHTML = data.title;
      // S'assurer que la classe est bien l? (robustesse)
      titleEl.className = 'page-title';
    }
    if (textBox  && data.content != null) textBox.innerHTML   = data.content;
    // Sync sidebar title
    const active = document.querySelector(`.file[data-doc-id="\${activeDocId}"]`)
                || document.querySelector('.file.active');
    if (active && titleEl) {
      const lbl = active.querySelector('.file-label');
      const val = titleEl.textContent.trim() || 'Page sans titre';
      if (lbl) lbl.textContent = val; else active.textContent = val;
    }
    updateWordCount();
    // Attendre le rendu avant de calculer les rep?res
    requestAnimationFrame(() => requestAnimationFrame(updateRulerVars));
  }

  function focusTitle() {
    setTimeout(() => { if (titleEl) titleEl.focus(); }, 80);
  }

  function appendToPage(text) {
    if (!textBox) return;
    const div = document.createElement('div');
    div.textContent = text.trim();
    textBox.appendChild(div);
    placeCursorAtEnd(textBox);
    schedulePageBreaks();
    updateWordCount();
  }

  /* ?? Compat : updateWordCount utilise textBox directement ? */

  function placeCursorAtEnd(el) {
    el.focus();
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    if (sel) { sel.removeAllRanges(); sel.addRange(range); }
  }

  /* ============================================================
     FORMAT TOOLBAR FLOTTANTE
  ============================================================ */
  function checkSelection() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.toString().trim() === '') {
      hideFormatToolbar();
      return;
    }
    const anchor = sel.anchorNode;
    if (!anchor) return;
    let node = anchor.nodeType === 3 ? anchor.parentNode : anchor;
    // Autoriser la s?lection dans textBox ET dans les li (listes)
    const inEditable = node.closest('.textBox') || node.closest('.page-title');
    if (!inEditable) {
      hideFormatToolbar();
      return;
    }
    savedSelection = saveSelection();
    positionFormatToolbar(sel);
  }

  function positionFormatToolbar(sel) {
    const range = sel.getRangeAt(0);
    const rect  = range.getBoundingClientRect();
    const tbW   = formatToolbar.offsetWidth || 200;

    let left = rect.left + rect.width / 2 - tbW / 2;
    let top  = rect.top - 46; // au-dessus de la s\u00E9lection

    // Clamper horizontalement
    left = Math.max(8, Math.min(left, window.innerWidth - tbW - 8));
    if (top < 8) top = rect.bottom + 8;

    formatToolbar.style.left = left + 'px';
    formatToolbar.style.top  = top  + 'px';
    formatToolbar.classList.add('visible');
    updateFmtActiveStates();
  }

  function hideFormatToolbar() {
    formatToolbar.classList.remove('visible');
  }

  // stopPropagation sur la toolbar : emp?che le listener document de la masquer
  formatToolbar.addEventListener('mousedown', e => {
    e.stopPropagation();
    const btn = e.target.closest('.fmt-btn');
    if (!btn) return;
    e.preventDefault();           // garde la s\u00E9lection intacte
    restoreSelection(savedSelection);
    snapshotNow(activeEditableZone());
    applyFormat(btn.dataset.cmd);
    setTimeout(checkSelection, 10);
  });

  // mousedown : masquer la toolbar seulement si on clique hors zone ?ditable ET hors toolbar
  document.addEventListener('mousedown', e => {
    const inEditable = e.target.closest('.textBox') || e.target.closest('.page-title');
    const inToolbar  = e.target.closest('.format-toolbar');
    const inAiPanel  = e.target.closest('.ai-panel');
    if (!inEditable && !inToolbar && !inAiPanel) {
      hideFormatToolbar();
      clearPendingFormats();
    }
  });

  function updateFmtActiveStates() {
    const sel    = window.getSelection();
    const anchor = sel && sel.anchorNode;
    const el     = anchor ? (anchor.nodeType === 3 ? anchor.parentElement : anchor) : null;
    const inBq   = !!(el && el.closest('blockquote'));

    document.querySelectorAll('.fmt-btn').forEach(btn => {
      const cmd = btn.dataset.cmd;
      let active = false;
      try {
        if (cmd === 'bold')       active = document.queryCommandState('bold')   || pendingFormats.has('bold');
        if (cmd === 'italic')     active = document.queryCommandState('italic') || pendingFormats.has('italic');
      } catch(_) {
        if (cmd === 'bold')   active = pendingFormats.has('bold');
        if (cmd === 'italic') active = pendingFormats.has('italic');
      }
      if (cmd === 'blockquote')   active = inBq;
      btn.classList.toggle('active', active);
    });
  }

  /* ============================================================
     FORMAT INLINE - bold / italic sans s\u00E9lection
     Si du texte est s\u00E9lectionn\u00E9 : execCommand standard.
     Si curseur seul (collapsed) : on bascule un \u00E9tat "pending"
     qui enveloppe la prochaine frappe dans <b> ou <i>.
  ============================================================ */
  const pendingFormats = new Set(); // 'bold' | 'italic'

  function applyFormat(cmd) {
    if (cmd === 'bold' || cmd === 'italic') {
      const sel = window.getSelection();
      const hasSelection = sel && !sel.isCollapsed && sel.toString().trim() !== '';

      if (hasSelection) {
        // Comportement standard : toggle sur la s?lection
        document.execCommand(cmd);
        updateFmtActiveStates();
      } else {
        // Pas de s?lection : basculer l'?tat pending
        togglePendingFormat(cmd);
      }
      return;
    }
    if (cmd === 'removeFormat') { document.execCommand('removeFormat'); clearPendingFormats(); return; }

    if (cmd === 'blockquote') {
      toggleBlockquote();
      return;
    }
    if (cmd === 'ul') {
      snapshotNow(activeEditableZone());
      document.execCommand('insertUnorderedList');
      scheduleSnapshot(activeEditableZone());
      return;
    }
    if (cmd === 'ol') {
      snapshotNow(activeEditableZone());
      document.execCommand('insertOrderedList');
      scheduleSnapshot(activeEditableZone());
      return;
    }
    // Alignements
    if (cmd === 'alignLeft')    { snapshotNow(activeEditableZone()); document.execCommand('justifyLeft');    scheduleSnapshot(activeEditableZone()); return; }
    if (cmd === 'alignCenter')  { snapshotNow(activeEditableZone()); document.execCommand('justifyCenter');  scheduleSnapshot(activeEditableZone()); return; }
    if (cmd === 'alignRight')   { snapshotNow(activeEditableZone()); document.execCommand('justifyRight');   scheduleSnapshot(activeEditableZone()); return; }
    if (cmd === 'alignJustify') { snapshotNow(activeEditableZone()); document.execCommand('justifyFull');    scheduleSnapshot(activeEditableZone()); return; }

    if (cmd === 'h1' || cmd === 'h2') {
      const tag = cmd.toUpperCase();
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const node = sel.anchorNode;
      const parent = node.nodeType === 3 ? node.parentElement : node;
      const existing = parent.closest('h1, h2');
      if (existing && existing.tagName === tag) {
        document.execCommand('formatBlock', false, 'div');
      } else {
        document.execCommand('formatBlock', false, tag);
      }
    }
  }

  /* ============================================================
     PENDING FORMATS - gras/italique sans s\u00E9lection
  ============================================================ */

  function togglePendingFormat(cmd) {
    if (pendingFormats.has(cmd)) {
      pendingFormats.delete(cmd);
    } else {
      pendingFormats.add(cmd);
    }
    updatePendingIndicator();
    // Redonner le focus ? la zone active pour que la prochaine frappe atterrisse bien
    const zone = activeEditableZone();
    if (zone) zone.focus();
  }

  function clearPendingFormats() {
    pendingFormats.clear();
    updatePendingIndicator();
  }

  // Indicateur visuel sur les boutons de la toolbar m?me sans s?lection
  function updatePendingIndicator() {
    document.querySelectorAll('.fmt-btn').forEach(btn => {
      const cmd = btn.dataset.cmd;
      if (cmd === 'bold' || cmd === 'italic') {
        // Allum? si pending OU si queryCommandState le dit
        let fromCmd = false;
        try { fromCmd = document.queryCommandState(cmd); } catch(_) {}
        btn.classList.toggle('active', pendingFormats.has(cmd) || fromCmd);
      }
    });
  }

  // Intercepter chaque frappe dans les zones ?ditables pour appliquer
  // les formats pending sur le caract?re nouvellement tap?.
  function attachPendingFormatHandler(el) {
    el.addEventListener('keydown', e => {
      // Ne traiter que les frappes qui produisent un caract?re
      if (pendingFormats.size === 0) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key.length !== 1) return; // Ignorer Enter, Backspace, fl\u00E8ches\u2026

      e.preventDefault();
      const char = e.key;

      // Construire la cha?ne de balises selon les formats actifs
      // Ordre : b > i (pour correspondre au comportement des ?diteurs)
      let html = escapeHtmlChar(char);
      if (pendingFormats.has('italic')) html = `<em>${html}</em>`;
      if (pendingFormats.has('bold'))   html = `<strong>${html}</strong>`;

      // Ins?rer via execCommand pour rester dans l'historique undo natif
      document.execCommand('insertHTML', false, html);

      // Vider les formats pending apr?s la premi?re frappe
      clearPendingFormats();
      scheduleSnapshot(el);
    });
  }

  function escapeHtmlChar(c) {
    return c === '&' ? '&amp;'
         : c === '<' ? '&lt;'
         : c === '>' ? '&gt;'
         : c;
  }

  /* ============================================================
     BLOC CITATION
  ============================================================ */

  function toggleBlockquote() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const node   = sel.anchorNode;
    const parent = node.nodeType === 3 ? node.parentElement : node;
    const inBq   = parent.closest('blockquote');
    // Toggle : si d?j? dans un blockquote ? revenir en div, sinon ? blockquote
    document.execCommand('formatBlock', false, inBq ? 'div' : 'blockquote');
  }

  // ?? D?clencheur "> espace" ????????????????????????????????
  // Branch? sur chaque textBox dans createPage via attachQuoteTrigger()
  function attachQuoteTrigger(textBox) {
    textBox.addEventListener('keydown', e => {
      if (e.key !== ' ') return;
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;

      // Pas de d?clenchement si d?j? dans un blockquote
      const anchor = sel.anchorNode;
      const el     = anchor.nodeType === 3 ? anchor.parentElement : anchor;
      if (el.closest('blockquote')) return;

      // Lire le texte du bloc courant avant le curseur
      const range = sel.getRangeAt(0);
      let textBefore = '';
      try {
        const r = document.createRange();
        // Chercher le n?ud texte le plus proche en d?but de bloc
        let cur = anchor;
        while (cur && cur.parentElement !== textBox) cur = cur.parentElement;
        if (!cur) return;
        // R?cup?rer tout le texte depuis le d?but du bloc parent jusqu'au curseur
        const tmp = document.createRange();
        tmp.setStartBefore(cur.parentElement === textBox ? cur : textBox.firstChild || cur);
        tmp.setEnd(range.startContainer, range.startOffset);
        textBefore = tmp.toString();
      } catch(_) {
        textBefore = (anchor.textContent || '').slice(0, range.startOffset);
      }

      if (textBefore.trim() !== '>') return;

      e.preventDefault();
      snapshotNow(textBox);

      // Effacer le ">" via execCommand puis appliquer blockquote
      document.execCommand('selectAll', false);
      // S?lectionner uniquement le bloc courant : plus simple via formatBlock direct
      // D'abord supprimer le ">" : s?lectionner depuis le d?but du n?ud texte
      try {
        const delRange = document.createRange();
        delRange.setStart(range.startContainer, range.startOffset - 1);
        delRange.setEnd(range.startContainer, range.startOffset);
        sel.removeAllRanges();
        sel.addRange(delRange);
        document.execCommand('delete');
      } catch(_) {}

      document.execCommand('formatBlock', false, 'blockquote');
      scheduleSnapshot(textBox);
    });

    // ?? Entr?e dans un blockquote vide ? sortir ???????????
    textBox.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const anchor = sel.anchorNode;
      const el     = anchor.nodeType === 3 ? anchor.parentElement : anchor;
      const bq     = el.closest('blockquote');
      if (!bq) return;

      // Seulement si le blockquote est vide (une seule ligne vide)
      const text = bq.innerText.trim();
      if (text !== '') return;

      e.preventDefault();
      snapshotNow(textBox);
      document.execCommand('formatBlock', false, 'div');
      scheduleSnapshot(textBox);
    });
  }


  /* Save/restore selection (pour ne pas perdre apr?s mousedown sur toolbar) */
  function saveSelection() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    return sel.getRangeAt(0).cloneRange();
  }

  function restoreSelection(range) {
    if (!range) return;
    const sel = window.getSelection();
    if (!sel) return;
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /* ============================================================
     D\u00C9TECTION COMMANDE ! DANS LE TEXTE
     Quand une ligne commence par !, elle re\u00E7oit la classe
     cmd-preview (style citation orange). Sur Entr\u00E9e, la ligne
     est ex\u00E9cut\u00E9e comme commande puis supprim\u00E9e avec un fondu.
  ============================================================ */
  function attachInlineCommandDetection(textBox) {
    textBox.addEventListener('input', () => {
      highlightCmdLines(textBox);
    });

    textBox.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const node  = sel.anchorNode;
      const block = node.nodeType === 3 ? node.parentElement : node;
      const line  = block.closest('div, p') || block;
      if (!line || !line.classList.contains('cmd-preview')) return;

      const raw = line.textContent.trim();
      if (!raw.startsWith('!')) return;

      e.preventDefault();
      snapshotNow(textBox);

      // Effet de disparition puis ex?cution
      line.classList.add('executed');
      setTimeout(() => {
        line.remove();
        processCommand(raw);
        scheduleSnapshot(textBox);
        scheduleAutosave();
        updateWordCount();
      }, 200);
    });
  }

  function highlightCmdLines(textBox) {
    Array.from(textBox.querySelectorAll('div, p')).forEach(line => {
      const text = line.textContent.trim();
      if (text.startsWith('!')) {
        line.classList.add('cmd-preview');
      } else {
        line.classList.remove('cmd-preview');
      }
    });
    // Cas d'un n?ud texte direct (premi?re frappe)
    // Pas de div encore - on ignore, sera g?r? ? la prochaine normalisation
  }

  /* ============================================================
     COMMANDE RAPIDE
  ============================================================ */
  commandInput.addEventListener('input', () => {
    const val = commandInput.value;
    if (!val.startsWith('!')) { hideHint(); return; }
    const lower = val.slice(1).toLowerCase();

    if (/mail|envoie/.test(lower))           showHint('> Mode Mail');
    if (/cherche|search|trouve|find/.test(lower)) showHint('> Rechercher dans les documents');
    else if (/cherche|search/.test(lower))   showHint('> Recherche');
    else if (/demain|lundi|mardi|mercredi|jeudi|vendredi|\d+h/.test(lower)) showHint('> Agenda');
    else                                     showHint('Entree pour valider');
  });

  commandInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const raw = commandInput.value.trim();
      if (!raw) return;
      commandHistory.unshift(raw);
      historyIndex = -1;
      commandInput.value = '';
      hideHint();
      processCommand(raw);
    }
  });

  function showHint(t) { commandHint.textContent = t; commandHint.classList.add('show'); }
  function hideHint()  { commandHint.classList.remove('show'); }

  function processCommand(raw) {
    const lower = raw.replace(/^!/, '').toLowerCase().trim();

    if (/agenda|rdv|reunion|rappel|meeting|evenement/.test(lower)) {
      const desc = raw.replace(/^!/, '').trim();
      generateAgendaEvent(desc);
      return;
    }
    if (/mail|envoie/.test(lower)) {
      switchMode('mail');
      // Pr?-remplir le prompt avec la commande
      if (mailPromptEl) {
        mailPromptEl.value = raw.replace(/^!/, '').trim();
        setTimeout(() => triggerMailGeneration(), 100);
      }
      return;
    }
    if (/cherche|search|trouve|find/.test(lower)) {
      switchMode('search');
      // Extraire le terme apres le mot-cle
      const query = lower
        .replace(/^(cherche|search|trouve|find)\s*/i, '')
        .trim();
      if (query && searchInput) {
        setTimeout(function() {
          searchInput.value = query;
          searchInput.focus();
          runSearch(query);
        }, 80);
      } else if (searchInput) {
        setTimeout(function() { searchInput.focus(); }, 80);
      }
      return;
    }

    const ev = parseEvent(lower);
    if (ev) {
      showToast(`Agenda : ${ev.time ? ev.time + ' - ' : ''}${ev.label}`);
      return;
    }

    // Ins?rer dans la page comme note
    appendToPage(raw.replace(/^!/, '').trim());
    showToast('Note ajoutee a la page');
  }

  function parseEvent(text) {
    const days = { demain:1, lundi:1, mardi:2, mercredi:3, jeudi:4, vendredi:5 };
    let found = null;
    for (const k of Object.keys(days)) {
      if (text.includes(k)) { found = k; break; }
    }
    if (!found) return null;

    const timeMatch = text.match(/(\d{1,2})h(\d{0,2})?/);
    const time = timeMatch ? timeMatch[1].padStart(2,'0') + 'h' + (timeMatch[2] || '00') : '';
    let label = text.replace(found,'').replace(timeMatch?.[0]||'','').replace(/^\s*[--]\s*/,'').trim();
    if (!label) label = 'Evenement';
    return { time, label };
  }

  /* ============================================================
     MODALE DE CONFIRMATION
  ============================================================ */
  let confirmCallback = null;

  function showConfirm({ icon = '?', title, body, onConfirm }) {
    confirmIcon.textContent  = icon;
    confirmTitle.textContent = title;
    confirmBody.innerHTML    = body;
    confirmCallback          = onConfirm;
    confirmOverlay.classList.add('open');
    // Focus sur "Annuler" par d?faut - plus s?r
    setTimeout(() => confirmCancelBtn.focus(), 50);
  }

  function hideConfirm() {
    confirmOverlay.classList.remove('open');
    confirmCallback = null;
  }

  confirmDeleteBtn.addEventListener('click', () => {
    if (confirmCallback) confirmCallback();
    hideConfirm();
  });
  confirmCancelBtn.addEventListener('click', hideConfirm);
  confirmOverlay.addEventListener('click', e => {
    if (e.target === confirmOverlay) hideConfirm();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && confirmOverlay.classList.contains('open')) {
      e.stopImmediatePropagation();
      hideConfirm();
    }
  });

  /* ============================================================
     SIDEBAR - DOSSIERS & FICHIERS
  ============================================================ */

  // ?? Renommage d'un ?l?ment (fichier ou dossier) ???????????
  // Passe en mode ?dition, valide sur Enter/blur, annule sur Esc.
  function startRename(el, onCommit) {
    if (el.dataset.renaming) return;
    el.dataset.renaming = '1';
    el.contentEditable = 'true';
    el.spellcheck = false;
    el.classList.add('renaming');

    const original = el.textContent.trim();

    // Focus + s?lection dans le prochain tick pour laisser le DOM se stabiliser
    setTimeout(() => {
      el.focus();
      try {
        const r = document.createRange();
        r.selectNodeContents(el);
        const s = window.getSelection();
        if (s) { s.removeAllRanges(); s.addRange(r); }
      } catch(_) {}
    }, 20);

    function commit() {
      if (!el.dataset.renaming) return; // d\u00E9j\u00E0 commit\u00E9
      const val = el.textContent.trim();
      el.contentEditable = 'false';
      el.classList.remove('renaming');
      delete el.dataset.renaming;
      el.textContent = val || original;
      if (val && val !== original && onCommit) onCommit(val);
      scheduleAutosave();
    }

    function cancel() {
      if (!el.dataset.renaming) return;
      el.textContent = original;
      el.contentEditable = 'false';
      el.classList.remove('renaming');
      delete el.dataset.renaming;
    }

    el.addEventListener('keydown', function handler(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        el.removeEventListener('keydown', handler);
        el.removeEventListener('blur',    blurHandler);
        commit();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        el.removeEventListener('keydown', handler);
        el.removeEventListener('blur',    blurHandler);
        cancel();
      }
    });

    // D?lai sur le blur handler pour ?viter un commit imm?diat
    // si le focus n'a pas encore atterri sur l'?l?ment
    function blurHandler() {
      el.removeEventListener('blur', blurHandler);
      if (el.dataset.renaming) commit();
    }
    setTimeout(() => el.addEventListener('blur', blurHandler), 80);
  }

  // ?? Cr?er un fichier li? ? un docId ?????????????????????
  function createFileItem(name, active, docId) {
    const id = docId || genDocId();
    const li = document.createElement('li');
    li.className = 'file' + (active ? ' active' : '');
    li.contentEditable = 'false';
    li.dataset.docId = id;

    // Label (le texte renommable)
    const label = document.createElement('span');
    label.className   = 'file-label';
    label.textContent = name;
    li.appendChild(label);

    // Bouton ... menu contextuel
    const ctxBtn = document.createElement('button');
    ctxBtn.className   = 'ctx-trigger file-ctx';
    ctxBtn.textContent = '\u2026';
    ctxBtn.title       = 'Options';
    ctxBtn.tabIndex    = -1;
    li.appendChild(ctxBtn);

    ctxBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (ctxMenuEl.classList.contains('open') && ctxTarget === li) { closeCtxMenu(); return; }
      openCtxMenu(ctxBtn, 'file', li);
    });

    // Clic sur le li (hors ?) ? activer
    li.addEventListener('click', e => {
      if (e.target === delBtn) return;
      if (li.dataset.renaming) return;
      if (li.dataset.docId === activeDocId) return;
      document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
      li.classList.add('active');
      loadDoc(li.dataset.docId);
      saveSidebarOnly();
    });

    // Double-clic sur le label ? renommer directement
    label.addEventListener('dblclick', e => {
      e.stopPropagation();
      startRenameLabel(li, label, newName => {
        showToast(`Renomm\u00E9 : ${newName}`);
        saveSidebarOnly();
      });
    });

    // (suppression via menu contextuel)
    // Clic ? ? confirmer suppression
    // delBtn legacy - kept for compatibility
    const delBtn = document.createElement('button');
    delBtn.style.display = 'none';
    li.appendChild(delBtn);
    delBtn.addEventListener('click', e => {
      e.stopPropagation();
      const name = label.textContent.trim();
      showConfirm({ icon:'?', title:'Supprimer la feuille ?',
        body:`La feuille <strong>${escapeHtml(name)}</strong> sera d\u00E9finitivement supprim\u00E9e.`,
        onConfirm: () => deleteFile(li) });
    });

    return li;
  }

  // Renommage via le span label (et non le li entier)
  function startRenameLabel(li, label, onCommit) {
    if (li.dataset.renaming) return;
    li.dataset.renaming = '1';
    label.contentEditable = 'true';
    label.spellcheck = false;
    li.classList.add('renaming');

    const original = label.textContent.trim();
    label.focus();
    const r = document.createRange(); r.selectNodeContents(label);
    const s = window.getSelection(); if (s) { s.removeAllRanges(); s.addRange(r); }

    function commit() {
      const val = label.textContent.trim();
      label.contentEditable = 'false';
      li.classList.remove('renaming');
      delete li.dataset.renaming;
      label.textContent = val || original;
      if (val && val !== original && onCommit) onCommit(val);
      scheduleAutosave();
    }
    function cancel() {
      label.textContent = original;
      label.contentEditable = 'false';
      li.classList.remove('renaming');
      delete li.dataset.renaming;
    }
    label.addEventListener('keydown', function h(e) {
      if (e.key === 'Enter')  { e.preventDefault(); label.removeEventListener('keydown',h); label.removeEventListener('blur',b); commit(); }
      if (e.key === 'Escape') { e.preventDefault(); label.removeEventListener('keydown',h); label.removeEventListener('blur',b); cancel(); }
    });
    function b() { label.removeEventListener('blur',b); if (li.dataset.renaming) commit(); }
    label.addEventListener('blur', b);
  }

  // ?? Supprimer un fichier ??????????????????????????????????
  function deleteFile(li) {
    const docId   = li.dataset.docId;
    const wasActive = li.classList.contains('active');

    // Supprimer le doc de localStorage
    try { localStorage.removeItem(DOC_PREFIX + docId); } catch(_) {}

    // Trouver le fichier adjacent (uniquement des .file, pas des boutons)
    const siblings = Array.from(li.parentElement?.querySelectorAll('.file[data-doc-id]') || [])
      .filter(f => f !== li);
    let nextLi = li.previousElementSibling?.closest?.('.file[data-doc-id]')
              || li.nextElementSibling?.closest?.('.file[data-doc-id]')
              || siblings[0]
              || null;

    li.remove();
    saveSidebarOnly();

    if (wasActive) {
      if (nextLi && nextLi.classList.contains('file') && nextLi.dataset.docId) {
        // Activer le fichier adjacent
        document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
        nextLi.classList.add('active');
        loadDoc(nextLi.dataset.docId);
      } else {
        // Plus aucun fichier dans ce dossier - chercher dans toute la sidebar
        const anyFile = rootFileListEl.querySelector('.file[data-doc-id]')
                     || folderList.querySelector('.file[data-doc-id]');
        if (anyFile) {
          document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
          anyFile.classList.add('active');
          loadDoc(anyFile.dataset.docId);
        } else {
          // Sidebar vide ? cr?er un nouveau doc vierge
          createFirstDoc();
        }
      }
    }
    showToast('Feuille supprim\u00E9e');
  }

  function createFirstDoc() {
    const newId = genDocId();
    activeDocId = newId;
    initDocument();
    const newLi = createFileItem('Page sans titre', true, newId);
    rootFileListEl.appendChild(newLi);
    saveSidebarOnly();
    focusTitle();
  }

  // Sauvegarder uniquement la structure sidebar (sans le contenu)
  function saveSidebarOnly() {
    try {
      const sd = serializeSidebar();
      localStorage.setItem(SIDEBAR_KEY, JSON.stringify({
        v: 2, savedAt: Date.now(), activeDoc: activeDocId,
        workspaceName: sd.workspaceName, rootFiles: sd.rootFiles, folders: sd.folders,
      }));
    } catch(_) {}
  }

  // Nettoyer les fichiers statiques du HTML (recr??s par restore/INIT)
  rootFileListEl.querySelectorAll('.file').forEach(f => f.remove());
  folderList.querySelectorAll('.file').forEach(f => f.remove());

  // Toggle dossier + Nouvelle feuille
  folderList.addEventListener('click', e => {
    // Nouvelle feuille dans un dossier
    if (e.target.classList.contains('new-file-button')) {
      const folder = e.target.closest('.folder');
      const fl = folder?.querySelector('.file-list');
      if (!fl) return;
      folder.classList.add('open');
      const newId = genDocId();
      const li = createFileItem('Nouvelle feuille', false, newId);
      fl.appendChild(li);
      document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
      li.classList.add('active');
      loadDoc(newId);
      saveSidebarOnly();
      const lbl = li.querySelector('.file-label');
      if (lbl) startRenameLabel(li, lbl, () => saveSidebarOnly());
      return;
    }
    // Toggle dossier (clic sur la row, hors bouton ?)
    const row = e.target.closest('.folder-row');
    if (row && !e.target.closest('.folder-name[data-renaming]') && !e.target.closest('.ctx-trigger')) {
      row.closest('.folder').classList.toggle('open');
    }
  });

  // Double-clic folder-name ? renommer
  folderList.addEventListener('dblclick', e => {
    const fn = e.target.closest('.folder-name');
    if (!fn) return;
    e.preventDefault(); e.stopImmediatePropagation();
    startRename(fn, name => { showToast(`Dossier : ${name}`); saveSidebarOnly(); });
  }, true);

  // ?? MENU CONTEXTUEL ???????????????????????????????????????
  let ctxTarget  = null;
  let ctxKind    = null;
  let ctxTrigger = null;

  function openCtxMenu(triggerEl, kind, target) {
    ctxTarget = target; ctxKind = kind; ctxTrigger = triggerEl;
    triggerEl.classList.add('active');
    ctxMenuEl.innerHTML = '';

    if (kind === 'workspace') {
      addCtxItem('\u270E', 'Renommer', () => startRename(workspaceNameEl, name => { showToast(`Espace : ${name}`); saveSidebarOnly(); }));
      addCtxSep();
      addCtxItem('+', 'Nouvelle feuille', createRootFile);
      addCtxItem('+', 'Nouveau dossier', createNewFolder);
      addCtxSep();
      addCtxItem('\u2193', 'Exporter en Markdown', exportMarkdown);
      addCtxItem('\u2B07', 'Exporter en PDF',  exportPdf);
    }
    if (kind === 'file') {
      addCtxItem('\u270E', 'Renommer', () => {
        const lbl = target.querySelector('.file-label');
        if (lbl) startRenameLabel(target, lbl, name => { showToast(`Renomm\u00E9 : ${name}`); saveSidebarOnly(); });
      });
      addCtxItem('\u2398', 'Dupliquer', () => duplicateFile(target));
      addCtxSep();
      addCtxItem('\u2193', 'Exporter en Markdown', () => {
        const docId = target.dataset.docId;
        if (docId && docId !== activeDocId) {
          document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
          target.classList.add('active');
          loadDoc(docId);
          saveSidebarOnly();
          setTimeout(exportMarkdown, 350);
        } else {
          exportMarkdown();
        }
      });
      addCtxItem('\u2B07', 'Exporter en PDF', () => {
        const docId = target.dataset.docId;
        if (docId && docId !== activeDocId) {
          document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
          target.classList.add('active');
          loadDoc(docId);
          saveSidebarOnly();
          setTimeout(exportPdf, 350);
        } else {
          exportPdf();
        }
      });
      addCtxSep();
      addCtxItem('\u2715', 'Supprimer', () => {
        const lbl  = target.querySelector('.file-label');
        const name = lbl ? lbl.textContent.trim() : 'cette feuille';
        showConfirm({ icon: '?', title: 'Supprimer la feuille ?',
          body: 'La feuille <strong>' + escapeHtml(name) + '</strong> sera d\u00E9finitivement supprim\u00E9e.',
          onConfirm: () => {
            const docId = target.dataset.docId;
            if (docId) {
              try { localStorage.removeItem(DOC_PREFIX + docId); } catch(_) {}
            }
            target.remove();
            if (target.classList.contains('active') || docId === activeDocId) {
              activeDocId = null;
              const first = rootFileListEl.querySelector('.file') ||
                            document.querySelector('.file-list .file');
              if (first) { first.classList.add('active'); loadDoc(first.dataset.docId); }
              else createRootFile();
            }
            saveSidebarOnly();
            showToast('Feuille supprim\u00E9e');
          }
        });
      }, true);
    }
    if (kind === 'folder') {
      addCtxItem('\u270E', 'Renommer', () => {
        const fn = target.querySelector('.folder-name');
        if (fn) startRename(fn, name => { showToast(`Dossier : ${name}`); saveSidebarOnly(); });
      });
      addCtxItem('+', 'Nouvelle feuille', () => {
        const fl = target.querySelector('.file-list');
        if (!fl) return;
        target.classList.add('open');
        const newId = genDocId();
        const li = createFileItem('Nouvelle feuille', false, newId);
        fl.appendChild(li);
        document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
        li.classList.add('active');
        loadDoc(newId); saveSidebarOnly();
        const lbl = li.querySelector('.file-label');
        if (lbl) startRenameLabel(li, lbl, () => saveSidebarOnly());
      });
      addCtxSep();
      addCtxItem('\u2715', 'Supprimer', () => {
        const name  = target.querySelector('.folder-name')?.textContent.trim() || 'ce dossier';
        const count = target.querySelectorAll('.file').length;
        showConfirm({ icon:'?', title:'Supprimer le dossier ?',
          body: count > 0
            ? `Le dossier <strong>${escapeHtml(name)}</strong> et ses <strong>${count} feuille${count>1?'s':''}</strong> seront supprim\u00E9s.`
            : `Le dossier <strong>${escapeHtml(name)}</strong> sera supprim\u00E9.`,
          onConfirm: () => deleteFolder(target) });
      }, true);
    }

    // Positionner le menu
    const rect = triggerEl.getBoundingClientRect();
    const mW = 180, mH = ctxMenuEl.children.length * 34 + 16;
    let left = rect.right + 4, top = rect.top;
    if (left + mW > window.innerWidth - 8)  left = rect.left - mW - 4;
    if (top  + mH > window.innerHeight - 8) top  = window.innerHeight - mH - 8;
    ctxMenuEl.style.left = left + 'px';
    ctxMenuEl.style.top  = top  + 'px';
    ctxMenuEl.classList.add('open');
  }

  function closeCtxMenu() {
    ctxMenuEl.classList.remove('open');
    if (ctxTrigger) { ctxTrigger.classList.remove('active'); ctxTrigger = null; }
    ctxTarget = null; ctxKind = null;
  }

  function addCtxItem(icon, label, action, danger = false) {
    const li = document.createElement('li');
    li.className = 'ctx-item' + (danger ? ' danger' : '');
    li.innerHTML = `<span class="ctx-icon">${icon}</span>${escapeHtml(label)}`;
    li.addEventListener('click', () => { closeCtxMenu(); action(); });
    ctxMenuEl.appendChild(li);
  }

  function addCtxSep() {
    const d = document.createElement('div'); d.className = 'ctx-sep';
    ctxMenuEl.appendChild(d);
  }

  // Fermer sur clic ext?rieur / Esc
  document.addEventListener('mousedown', e => {
    if (ctxMenuEl.classList.contains('open') && !ctxMenuEl.contains(e.target) && e.target !== ctxTrigger)
      closeCtxMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && ctxMenuEl.classList.contains('open')) { e.stopImmediatePropagation(); closeCtxMenu(); }
  });

  // ?? Actions ???????????????????????????????????????????????
  function createRootFile() {
    const newId = genDocId();
    const li = createFileItem('Nouvelle feuille', false, newId);
    rootFileListEl.appendChild(li);
    document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
    li.classList.add('active');
    loadDoc(newId); saveSidebarOnly();
    const lbl = li.querySelector('.file-label');
    if (lbl) startRenameLabel(li, lbl, () => saveSidebarOnly());
  }

  function createNewFolder() {
    const li = createFolderEl('Nouveau dossier', true);
    folderList.appendChild(li);
    const fn = li.querySelector('.folder-name');
    startRename(fn, name => { showToast(`Dossier cr\u00E9\u00E9 : ${name}`); saveSidebarOnly(); });
  }

  function duplicateFile(li) {
    const srcId = li.dataset.docId;
    const name  = li.querySelector('.file-label')?.textContent.trim() || 'Copie';
    const newId = genDocId();
    try {
      const raw = localStorage.getItem(DOC_PREFIX + srcId);
      if (raw) localStorage.setItem(DOC_PREFIX + newId, raw);
    } catch(_) {}
    const newLi = createFileItem(`${name} (copie)`, false, newId);
    li.after(newLi);
    saveSidebarOnly();
    showToast('Feuille dupliqu\u00E9e');
  }

  // ?? Workspace ? ???????????????????????????????????????????
  workspaceCtxBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (ctxMenuEl.classList.contains('open') && ctxKind === 'workspace') { closeCtxMenu(); return; }
    openCtxMenu(workspaceCtxBtn, 'workspace', null);
  });
  workspaceNameEl.addEventListener('dblclick', e => {
    e.stopImmediatePropagation();
    startRename(workspaceNameEl, name => { showToast(`Espace : ${name}`); saveSidebarOnly(); });
  });

  // ?? Boutons apparents ??????????????????????????????????????
  newFolderBtn.addEventListener('click', createNewFolder);

  /* ============================================================
     TABLE DES MATI\u00C8RES
  ============================================================ */
  const TOC_DELAY = 600;   // ms debounce apr\u00E8s frappe
  let   tocTimer  = null;
  let   tocActive = null;  // bouton TDM actif (scroll spy)

  function buildToc() {
    const headings = documentEl.querySelectorAll('h1, h2, .page-title');
    tocListEl.innerHTML = '';

    // Filtrer les titres non vides
    const items = Array.from(headings).filter(h => h.innerText.trim() !== '');

    if (items.length === 0) {
      tocListEl.innerHTML = '<p class="toc-empty">Ajoutez des titres H1 / H2\u2026</p>';
      return;
    }

    items.forEach((heading, i) => {
      // Ajouter un id unique si absent
      if (!heading.id) heading.id = 'zaap-h-' + i;

      const tag  = heading.classList.contains('page-title') ? 'h1' : heading.tagName.toLowerCase();
      const text = heading.innerText.trim();

      const btn = document.createElement('button');
      btn.className = 'toc-item toc-' + tag;
      btn.textContent = text;
      btn.title = text;
      btn.dataset.target = heading.id;

      btn.addEventListener('click', () => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTocActive(btn);
      });

      tocListEl.appendChild(btn);
    });
  }

  function scheduleTocBuild() {
    clearTimeout(tocTimer);
    tocTimer = setTimeout(buildToc, TOC_DELAY);
  }

  function setTocActive(btn) {
    tocListEl.querySelectorAll('.toc-item').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    tocActive = btn;
  }

  // Scroll spy : mettre en ?vidence le titre le plus proche du haut visible
  function updateTocSpy() {
    const headings = documentEl.querySelectorAll('h1, h2, .page-title');
    if (!headings.length) return;

    const wrapperTop = wrapper.getBoundingClientRect().top;
    let closest = null;
    let closestDist = Infinity;

    headings.forEach(h => {
      if (!h.id) return;
      const rect = h.getBoundingClientRect();
      const dist = Math.abs(rect.top - wrapperTop - 60);
      if (dist < closestDist) {
        closestDist = dist;
        closest = h;
      }
    });

    if (closest) {
      const btn = tocListEl.querySelector(`[data-target="${closest.id}"]`);
      if (btn && btn !== tocActive) setTocActive(btn);
    }
  }

  wrapper.addEventListener('scroll', updateTocSpy);

  /* ============================================================
     SUPPRESSION ACC\u00C9L\u00C9R\u00C9E (style iMessage)
     Sur maintien de Backspace ou Delete : supprime d'abord
     caract\u00E8re par caract\u00E8re, puis acc\u00E9l\u00E8re progressivement
     en passant \u00E0 la suppression mot par mot.
     Le navigateur g\u00E8re d\u00E9j\u00E0 la r\u00E9p\u00E9tition clavier (keydown r\u00E9p\u00E9t\u00E9),
     on compte les r\u00E9p\u00E9titions et on change de granularit\u00E9.
  ============================================================ */
  /* Suppression acc?l?r?e sur maintien de Backspace/Delete.
     Toutes les autres touches : r\u00E9p\u00E9tition 100% native (on n'intercepte rien).
     On utilise e.repeat (true quand le navigateur r\u00E9p\u00E8te automatiquement)
     pour ne jamais bloquer les premi\u00E8res pressions ni les autres touches. */

  const delRepeat = { count: 0, key: null };
  const DEL_WORD_AFTER = 10; // r\u00E9p\u00E9titions avant passage mot entier (~1s)

  function attachDeleteAcceleration(el) {
    el.addEventListener('keydown', e => {
      // On ne touche qu'? Backspace et Delete, et seulement en r?p?tition
      if (e.key !== 'Backspace' && e.key !== 'Delete') {
        delRepeat.count = 0; delRepeat.key = null;
        return; // toutes les autres touches : comportement 100% natif
      }

      if (!e.repeat) {
        // Premi?re pression : natif, on remet juste le compteur
        delRepeat.count = 0;
        delRepeat.key   = e.key;
        return;
      }

      // R?p?tition native (e.repeat === true)
      delRepeat.count++;

      // Sous le seuil : laisser le navigateur g?rer normalement
      if (delRepeat.count < DEL_WORD_AFTER) return;

      // Au-dessus du seuil : passer ? la suppression par mot
      e.preventDefault();
      if (e.key === 'Backspace') {
        document.execCommand('deleteWordBackward');
      } else {
        document.execCommand('deleteWordForward');
      }
      scheduleSnapshot(el);
      scheduleAutosave();
      updateWordCount();
    });

    el.addEventListener('keyup', e => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        delRepeat.count = 0;
        delRepeat.key   = null;
      }
    });
  }

  /* ============================================================
     AUTO-CORRECTEUR IA
     Appel \u00E0 l'API Anthropic /v1/messages.
     Les 3 modes traitent le paragraphe courant (ou la s\u00E9lection).
     R\u00E9sultat affich\u00E9 en track changes : <del> rouge + <ins> vert.
  ============================================================ */

  let aiOriginalText  = '';  // texte original avant correction
  let aiOriginalBlock = null; // n\u0153ud DOM du bloc corrige
  let aiCorrectedText = '';  // texte corrige par l'IA

  const AI_PROMPTS = {
    correct: "Tu es un correcteur orthographique et stylistique expert en francais. Corrige les fautes d'orthographe, de grammaire, de ponctuation et ameliore legerement le style. Conserve le sens et le ton de l'auteur. Reponds UNIQUEMENT avec le texte corrige, sans commentaire ni explication.",
    rephrase: "Tu es un expert en redaction francaise. Reformule ce texte pour le rendre plus fluide, plus precis et plus engageant. Conserve le sens exact mais am\u00E9liore la formulation. Reponds UNIQUEMENT avec le texte reformule, sans commentaire ni explication.",
    formal: "Tu es un expert en redaction formelle et soutenue en francais. Reecris ce texte dans un registre soutenu et professionnel. Utilise un vocabulaire riche et une syntaxe soignee. Reponds UNIQUEMENT avec le texte reecrit, sans commentaire ni explication.",
  };

  // ?? Ouverture / fermeture ????????????????????????????????
  function openAiPanel(targetOverride) {
    if (targetOverride) {
      aiOriginalText  = targetOverride.text;
      aiOriginalBlock = targetOverride.block;
    }
    // Reset ? l'?tape 1
    aiStepModesEl.style.display  = 'block';
    aiStepResultEl.style.display = 'none';
    aiActionsEl.style.display    = 'none';
    document.querySelectorAll('.ai-mode-btn').forEach(b => b.classList.remove('active'));
    aiPanelEl.classList.add('open');
  }

  function closeAiPanel() {
    aiPanelEl.classList.remove('open');
  }

  aiPanelClose.addEventListener('click', closeAiPanel);

  document.addEventListener('mousedown', e => {
    if (aiPanelEl.classList.contains('open') &&
        !aiPanelEl.contains(e.target) &&
        e.target !== aiMarginBtn) {
      closeAiPanel();
    }
  });

  // ?? Bouton marge gauche ???????????????????????????????????
  // Appara?t quand le curseur est dans un bloc de texte
  let marginBtnBlock = null;

  function updateMarginBtn() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) { hideMarginBtn(); return; }
    const node  = sel.anchorNode;
    const el    = node.nodeType === 3 ? node.parentElement : node;
    const block = getDirectTextBlock(el);
    if (!block || !block.innerText?.trim()) { hideMarginBtn(); return; }

    // Positionner le bouton en face du bloc
    const rect = block.getBoundingClientRect();
    aiMarginBtn.style.top = (rect.top + rect.height / 2 - 14) + 'px';
    aiMarginBtn.classList.add('visible');
    marginBtnBlock = block;
  }

  function hideMarginBtn() {
    aiMarginBtn.classList.remove('visible');
    marginBtnBlock = null;
  }

  // ?couter les mouvements de curseur
  document.addEventListener('selectionchange', updateMarginBtn);
  document.addEventListener('keyup', updateMarginBtn);

  aiMarginBtn.addEventListener('click', () => {
    const target = marginBtnBlock
      ? { text: marginBtnBlock.innerText.trim(), block: marginBtnBlock }
      : getAiTarget();
    if (!target || !target.text) { showToast('Pas de texte dans ce paragraphe'); return; }
    aiOriginalText  = target.text;
    aiOriginalBlock = target.block;
    openAiPanel();
  });

  // ?? Clic droit sur le texte ???????????????????????????????
  (textBox ? [textBox] : []).forEach(() => {}); // init guard
  document.addEventListener('contextmenu', e => {
    const tb = textBox || document.querySelector('.textBox');
    if (!tb || !tb.contains(e.target)) return;
    const node  = e.target.nodeType === 3 ? e.target.parentElement : e.target;
    const block = getDirectTextBlock(node);
    if (!block || !block.innerText?.trim()) return;

    e.preventDefault();
    aiOriginalText  = block.innerText.trim();
    aiOriginalBlock = block;

    // Ouvrir directement le panneau positionn? pr?s du clic
    openAiPanel();
    // Repositionner le panneau pr?s du clic
    const panelH = 380;
    let top = e.clientY - panelH / 2;
    top = Math.max(60, Math.min(top, window.innerHeight - panelH - 20));
    aiPanelEl.style.top       = top + 'px';
    aiPanelEl.style.transform = 'translateX(0)';
  });

  // ?? Clic sur un mode ? fermer panneau + stream inline ????
  aiModesEl.addEventListener('click', async e => {
    const btn = e.target.closest('.ai-mode-btn');
    if (!btn) return;
    const mode = btn.dataset.mode;

    if (!aiOriginalText) {
        const target = getAiTarget();
        if (!target || !target.text.trim()) {
        showToast('Place ton curseur dans un paragraphe');
        return;
      }
      aiOriginalText  = target.text;
      aiOriginalBlock = target.block;
    }


    // Capturer localement avant toute fermeture
    const capturedText  = aiOriginalText;
    const capturedBlock = aiOriginalBlock;

    closeAiPanel();

    // Passer directement en param?tre - pas de variable globale
    await startInlineStream(mode, capturedText, capturedBlock);
  });

  // ?? Streaming inline dans la page ????????????????????????
  let aiInlineWrapper  = null; // le wrapper inject\u00E9 dans le DOM
  let aiInlineCorrEl   = null; // le bloc de correction en cours d'\u00E9criture
  let aiInlineFloating = null; // les boutons flottants

  async function startInlineStream(mode, originalText, originalBlock) {
    if (!originalBlock || !originalText) return;
    cancelInline(); // nettoyer un pr\u00E9c\u00E9dent

    // Stocker dans les globales pour accepter/annuler
    aiOriginalText  = originalText;
    aiOriginalBlock = originalBlock;
    aiCorrectedText = '';

    // 1. Griser le bloc original
    originalBlock.classList.add('ai-original-struck');

    // 2. Wrapper de correction ? toujours ins?r? dans le textBox,
    //    juste apr?s l'enfant direct qui contient le bloc original.
    //    Cela ?vite d'ins?rer ? l'int?rieur d'un <li>, <blockquote>, etc.
    aiInlineWrapper = document.createElement('div');
    aiInlineWrapper.className = 'ai-inline-wrapper';

    aiInlineCorrEl = document.createElement('div');
    aiInlineCorrEl.className = 'ai-inline-corr';
    const cursor = document.createElement('span');
    cursor.className = 'ai-cursor';
    cursor.textContent = '|';
    aiInlineCorrEl.appendChild(cursor);

    aiInlineWrapper.appendChild(aiInlineCorrEl);

    // Trouver l'enfant direct du textBox qui contient originalBlock
    const tb = textBox || document.querySelector('.textBox');
    let insertAfter = originalBlock;
    if (tb && !tb.contains(originalBlock)) {
      // Bloc hors textBox (titre) ? ins?rer apr?s le textBox
      insertAfter = tb;
    } else if (tb && originalBlock.parentElement !== tb) {
      // Bloc imbriqu? ? remonter ? l'enfant direct du textBox
      let cur = originalBlock;
      while (cur && cur.parentElement !== tb) cur = cur.parentElement;
      if (cur) insertAfter = cur;
    }
    insertAfter.after(aiInlineWrapper);

    try {
      // N?ud texte d?di? + curseur fixe en dernier enfant
      const inlineTextNode   = document.createTextNode('');
      const inlineStreamCursor = document.createElement('span');
      inlineStreamCursor.className = 'ai-cursor';
      inlineStreamCursor.textContent = '|';
      aiInlineCorrEl.innerHTML = '';
      aiInlineCorrEl.appendChild(inlineTextNode);
      aiInlineCorrEl.appendChild(inlineStreamCursor);

      await streamAI(mode, originalText, token => {
        aiCorrectedText += token;
        inlineTextNode.textContent = aiCorrectedText;
      });
      inlineStreamCursor.remove();

      aiInlineCorrEl.innerHTML = buildDiff(originalText, aiCorrectedText);
      showInlineActions();

    } catch (err) {
      cancelInline();
      showToast('Erreur IA : ' + (err.message || 'connexion impossible'));
      console.error('Erreur IA:', err);
    }
  }

  function showInlineActions() {
    if (!aiInlineWrapper) return;

    aiInlineFloating = document.createElement('div');
    aiInlineFloating.className = 'ai-inline-actions';
    aiInlineFloating.innerHTML =
      '<button class="ai-inline-accept">\u2713 Appliquer</button>' +
      '<button class="ai-inline-cancel">\u2715 Annuler</button>';

    aiInlineWrapper.appendChild(aiInlineFloating);

    aiInlineFloating.querySelector('.ai-inline-accept').addEventListener('click', () => {
      if (!aiOriginalBlock || !aiCorrectedText) return;
      snapshotNow(textBox);
      aiOriginalBlock.textContent = aiCorrectedText;
      aiOriginalBlock.classList.remove('ai-original-struck');
      aiInlineWrapper.remove();
      aiInlineWrapper = null; aiInlineCorrEl = null; aiInlineFloating = null;
      aiOriginalText = ''; aiOriginalBlock = null; aiCorrectedText = '';
      scheduleSnapshot(textBox);
      scheduleAutosave();
      updateWordCount();
      scheduleTocBuild();
      showToast('Correction appliquee');
    });

    aiInlineFloating.querySelector('.ai-inline-cancel').addEventListener('click', cancelInline);
  }

  function cancelInline() {
    if (aiOriginalBlock) aiOriginalBlock.classList.remove('ai-original-struck');
    if (aiInlineWrapper) { aiInlineWrapper.remove(); aiInlineWrapper = null; }
    aiInlineCorrEl = null; aiInlineFloating = null;
    aiOriginalText = ''; aiOriginalBlock = null; aiCorrectedText = '';
  }

  // ?? Accepter / Refuser (boutons du panneau - fallback) ????
  aiAcceptBtn.addEventListener('click', () => {
    if (!aiOriginalBlock || !aiCorrectedText) return;
    snapshotNow(textBox);
    aiOriginalBlock.textContent = aiCorrectedText;
    aiOriginalBlock.classList.remove('ai-original-struck');
    if (aiInlineWrapper) aiInlineWrapper.remove();
    scheduleSnapshot(textBox); scheduleAutosave(); updateWordCount(); scheduleTocBuild();
    aiOriginalText = ''; aiOriginalBlock = null; aiCorrectedText = '';
    closeAiPanel();
    showToast('Correction appliquee');
  });

  aiRefuseBtn.addEventListener('click', () => {
    cancelInline();
    aiStepModesEl.style.display  = 'block';
    aiStepResultEl.style.display = 'none';
    aiActionsEl.style.display    = 'none';
  });

  // ?? Trouver le texte cible (s?lection ou paragraphe courant) ?
  function getAiTarget() {
    const sel = window.getSelection();

    // Si s?lection non vide dans le textBox ? utiliser le texte s?lectionn?
    // On prend le bloc du FOCUS (point de fin) pour l'emplacement du wrapper
    if (sel && !sel.isCollapsed && sel.toString().trim()) {
      const focusNode = sel.focusNode;
      const el = focusNode.nodeType === 3 ? focusNode.parentElement : focusNode;
      if (el.closest('.textBox') || el.closest('.page-title')) {
        // Le bloc = enfant direct du textBox contenant la fin de la s?lection
        const block = getDirectTextBlock(el);
        const selectedText = sel.toString().trim();
        if (block && selectedText) {
          return { text: selectedText, block };
        }
      }
    }

    // Curseur simple ? bloc courant
    if (!sel || sel.rangeCount === 0) return null;
    const node  = sel.anchorNode;
    const el    = node.nodeType === 3 ? node.parentElement : node;
    const block = getDirectTextBlock(el);
    if (!block) return null;
    const text  = block.innerText.trim();
    if (!text) return null;
    return { text, block };
  }

  // Remonter jusqu'au bloc enfant direct du textBox (ou page-title)
  function getDirectTextBlock(el) {
    if (!el) return null;
    const tb = textBox || document.querySelector('.textBox');
    const pt = document.querySelector('.page-title');
    // Si on est dans le titre
    if (pt && pt.contains(el)) return pt;
    if (!tb) return null;
    // Remonter jusqu'au premier enfant direct de tb
    let cur = el;
    while (cur && cur.parentElement !== tb) {
      cur = cur.parentElement;
      if (!cur) return null;
    }
    // V?rifier que c'est un bloc avec du texte
    if (cur && cur.parentElement === tb && cur.innerText?.trim()) return cur;
    return null;
  }

  // ?? Appel API Anthropic ???????????????????????????????????
  // ??  CL? DE TEST - ne jamais partager ce fichier avec la cl? dedans
  //     Remplacer par un proxy backend avant mise en production
  const ANTHROPIC_API_KEY = ''; // Renseigner via \u2699 Pr\u00E9f\u00E9rences



  // ?? Appel API avec retry sur surcharge (529) ?????????????
  async function callAI(mode, text) {
    const storedKey = (() => { try { return localStorage.getItem('zaap_api_key') || ''; } catch(_) { return ''; } })();
    const activeKey = storedKey || ANTHROPIC_API_KEY;
    if (!activeKey || activeKey === 'COLLE_TA_CLE_ICI' || activeKey === '') {
      throw new Error('Cle API manquante - configure-la dans Preferences');
    }
    const cleanKey = activeKey.replace(/[^\x20-\x7E]/g, '').trim();

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 2500;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': cleanKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1000,
          messages: [{ role: 'user', content: AI_PROMPTS[mode] + '\n\nTexte: ' + text }],
        }),
      });

      if (response.status === 529) {
        if (attempt < MAX_RETRIES) {
          showToast('Serveurs IA charges... tentative ' + attempt + '/' + MAX_RETRIES);
          await new Promise(r => setTimeout(r, RETRY_DELAY * attempt));
          continue;
        }
        throw new Error('Serveurs IA surcharg\u00E9s. Reessaie dans quelques secondes.');
      }

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || 'Erreur HTTP ' + response.status);
      }

      const data = await response.json();
      return (data.content?.[0]?.text || '').trim();
    }
    throw new Error('Echec apres ' + MAX_RETRIES + ' tentatives.');
  }


  // ?? Simulation d'?criture progressive (pas de serveur requis) ??
  function simulateStream(text, onToken, onDone) {
    const words = text.split(' ');
    let i = 0;
    function next() {
      if (i >= words.length) { onDone(); return; }
      onToken(words[i] + (i < words.length - 1 ? ' ' : ''));
      i++;
      setTimeout(next, Math.max(18, 55 - i * 3));
    }
    next();
  }

  // streamAI : appel r?el + affichage simul? mot par mot
  async function streamAI(mode, text, onToken) {
    const result = await callAI(mode, text);
    return new Promise(resolve => simulateStream(result, onToken, resolve));
  }


  // ?? Diff simple : mot ? mot ???????????????????????????????
  // Algorithme LCS basique pour mettre en ?vidence les changements.
  function buildDiff(original, corrected) {
    const oldWords = original.split(/(\s+)/);
    const newWords = corrected.split(/(\s+)/);

    // LCS dynamique
    const m = oldWords.length, n = newWords.length;
    const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (oldWords[i-1] === newWords[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
        else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }

    // Reconstruire le diff
    let i = m, j = n;
    const ops = [];
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && oldWords[i-1] === newWords[j-1]) {
        ops.unshift({ type: 'eq', val: newWords[j-1] });
        i--; j--;
      } else if (j > 0 && (i === 0 || dp[i][j-1] >= dp[i-1][j])) {
        ops.unshift({ type: 'ins', val: newWords[j-1] });
        j--;
      } else {
        ops.unshift({ type: 'del', val: oldWords[i-1] });
        i--;
      }
    }

    // Construire le HTML
    return ops.map(op => {
      const safe = escapeHtmlStr(op.val);
      if (op.type === 'eq')  return safe;
      if (op.type === 'del') return `<span class="ai-del">${safe}</span>`;
      if (op.type === 'ins') return `<span class="ai-ins">${safe}</span>`;
    }).join('');
  }

  function escapeHtmlStr(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* ============================================================
     PR\u00C9F\u00C9RENCES
  ============================================================ */
  function openPrefsModal() {
    // Pr?-remplir la cl? si d?j? sauvegard?e
    try {
      const saved = localStorage.getItem('zaap_api_key');
      if (saved) prefsApiKey.value = saved;
    } catch(_) {}
    prefsOverlay.classList.add('open');
    setTimeout(() => prefsApiKey.focus(), 80);
  }
  function closePrefsModal() { prefsOverlay.classList.remove('open'); }

  openPrefsBtn?.addEventListener('click', openPrefsModal);
  prefsClose.addEventListener('click', closePrefsModal);
  prefsOverlay.addEventListener('click', e => { if (e.target === prefsOverlay) closePrefsModal(); });

  prefsApiSave.addEventListener('click', () => {
    const key = prefsApiKey.value.replace(/[^ -~]/g, '').trim();
    if (!key) { showToast('Cl\u00E9 vide - rien enregistr\u00E9'); return; }
    try {
      localStorage.setItem('zaap_api_key', key);
      showToast('Cle API enregistree');
      closePrefsModal();
    } catch(_) { showToast("Erreur enregistrement"); }
  });

  prefsApiKey.addEventListener('keydown', e => {
    if (e.key === 'Enter') prefsApiSave.click();
  });

  prefsClearData.addEventListener('click', () => {
    showConfirm({
      icon: '?',
      title: 'Effacer toutes les donn\u00E9es ?',
      body: 'Tous tes documents, dossiers et pr\u00E9f\u00E9rences seront <strong>d\u00E9finitivement supprim\u00E9s</strong>.',
      onConfirm: () => {
        try { localStorage.clear(); } catch(_) {}
        location.reload();
      }
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && prefsOverlay.classList.contains('open')) {
      closePrefsModal();
    }
  });

  /* ============================================================
     MODE MAIL
  ============================================================ */
  let mailHistory = [];

  const MAIL_PROMPT = 'Tu es un assistant de redaction de mails professionnel en francais. Analyse la demande et genere un mail complet. Reponds UNIQUEMENT en JSON valide avec exactement ces 3 champs : {"to": "destinataire", "subject": "objet", "body": "corps"}. Pas de markdown, pas d explication, juste le JSON.';

  async function generateMail(prompt) {
    const activeKey = (() => { try { return localStorage.getItem('zaap_api_key') || ''; } catch(_) { return ''; } })();
    const cleanKey  = (activeKey || ANTHROPIC_API_KEY).replace(/[^ -~]/g, '').trim();
    if (!cleanKey) throw new Error('Cle API manquante - configure-la dans les Preferences');

    const MAX_RETRIES = 3;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': cleanKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1200,
          messages: [{ role: 'user', content: MAIL_PROMPT + '\n\nDemande: ' + prompt }],
        }),
      });

      if (response.status === 529) {
        if (attempt < MAX_RETRIES) {
          showToast('Serveurs charges, tentative ' + attempt + '/' + MAX_RETRIES + '...');
          await new Promise(r => setTimeout(r, 3500 * attempt));
          continue;
        }
        throw new Error('Serveurs IA surcharges. Reessaie dans quelques secondes.');
      }
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || 'HTTP ' + response.status);
      }
      const data = await response.json();
      const text = (data.content?.[0]?.text || '').trim();
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('Reponse IA invalide');
      return JSON.parse(jsonMatch[0]);
    }
  }

  function showMailPreview(mailData) {
    mailPreviewEmpty.style.display    = 'none';
    mailPreviewContent.style.display  = 'flex';

    mailToEl.textContent      = mailData.to      || '';
    mailSubjectEl.textContent = mailData.subject || '';
    mailBodyEl.textContent    = '';

    // Simuler l'?criture du corps progressivement
    // N?ud texte d?di? + curseur s?par? pour ?viter les conflits DOM
    const mailTextNode = document.createTextNode('');
    const mailStreamCursor = document.createElement('span');
    mailStreamCursor.className = 'mail-cursor';
    mailStreamCursor.textContent = '|';
    mailBodyEl.appendChild(mailTextNode);
    mailBodyEl.appendChild(mailStreamCursor);

    simulateStream(mailData.body || '', token => {
      mailTextNode.textContent += token;
    }, () => {
      mailStreamCursor.remove();
    });
  }

  function clearMailPreview() {
    mailPreviewContent.style.display = 'none';
    mailPreviewEmpty.style.display   = 'flex';
    mailToEl.textContent = '';
    mailSubjectEl.textContent = '';
    mailBodyEl.textContent = '';
    mailPromptEl.value = '';
    mailPromptEl.focus();
  }

  function addMailHistory(prompt) {
    mailHistory.unshift(prompt);
    if (mailHistory.length > 5) mailHistory.pop();
    renderMailHistory();
  }

  function renderMailHistory() {
    mailHistoryEl.innerHTML = '';
    if (mailHistory.length === 0) return;
    const label = document.createElement('p');
    label.style.cssText = 'font-size:10.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-hint);margin:0 0 6px;font-family:var(--font-ui)';
    label.textContent = 'R\u00E9cents';
    mailHistoryEl.appendChild(label);
    mailHistory.forEach(h => {
      const item = document.createElement('div');
      item.className = 'mail-history-item';
      item.textContent = h;
      item.addEventListener('click', () => {
        mailPromptEl.value = h;
        mailPromptEl.focus();
      });
      mailHistoryEl.appendChild(item);
    });
  }

  // ?? G?n?rer le mail ??????????????????????????????????????
  async function triggerMailGeneration() {
    const prompt = mailPromptEl.value.trim();
    if (!prompt) { showToast("Decris ton mail d'abord"); return; }

    mailGenerateBtn.textContent = '\u2026 G\u00E9n\u00E9ration en cours';
    mailGenerateBtn.classList.add('loading');

    try {
      const mailData = await generateMail(prompt);
      showMailPreview(mailData);
      addMailHistory(prompt);
    } catch(err) {
      showToast('Erreur : ' + (err.message || 'connexion impossible'));
      console.error('Mail generation error:', err);
    } finally {
      mailGenerateBtn.textContent = '\u2726 G\u00E9n\u00E9rer le mail';
      mailGenerateBtn.classList.remove('loading');
    }
  }

  mailGenerateBtn?.addEventListener('click', triggerMailGeneration);

  mailPromptEl?.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      triggerMailGeneration();
    }
  });

  // ?? Boutons d'envoi ?????????????????????????????????????
  mailSendMailto?.addEventListener('click', () => {
    const mailTo  = encodeURIComponent(mailToEl.textContent.trim());
    const subject = encodeURIComponent(mailSubjectEl.textContent.trim());
    const body    = encodeURIComponent(mailBodyEl.textContent.trim());
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  });

  mailSendGmail?.addEventListener('click', () => {
    const mailTo  = encodeURIComponent(mailToEl.textContent.trim());
    const subject = encodeURIComponent(mailSubjectEl.textContent.trim());
    const body    = encodeURIComponent(mailBodyEl.textContent.trim());
    window.open(`https://mail.google.com/mail/?view=cm&to=${mailTo}&su=${subject}&body=${body}`, '_blank');
  });

  mailSendCopy?.addEventListener('click', async () => {
    const mailTo  = mailToEl.textContent.trim();
    const subject = mailSubjectEl.textContent.trim();
    const body    = mailBodyEl.textContent.trim();
    const text    = 'A : ' + mailTo + '\nObjet : ' + subject + '\n\n' + body;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Mail copie dans le presse-papiers');
    } catch(_) {
      showToast('Impossible de copier - utilise Mail.app ou Gmail');
    }
  });

  mailClearBtn?.addEventListener('click', clearMailPreview);

  // ?? Commande !mail ? basculer en mode mail ??????????????
  // (branch? dans processCommand - voir ci-dessous)

  /* ============================================================
     RECHERCHE DANS LA PAGE (Ctrl+F)
  ============================================================ */
  let findMatches  = [];   // liste des <mark> inject\u00E9s
  let findCurrent  = -1;   // index de l'occurrence active
  let findLastQ    = '';   // derni\u00E8re requ\u00EAte

  function openFind() {
    // Centrer par rapport ? la zone de contenu (hors sidebar)
    const sidebarClosed = sidebar.classList.contains('closed');
    const sw = sidebarClosed ? 0 : parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w')) || 232;
    findBar.style.left = (sw + (window.innerWidth - sw) / 2) + 'px';

    findBar.classList.add('open');
    findInput.focus();
    findInput.select();
    // Si du texte est s?lectionn? dans le doc, le pr?-remplir
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) {
      const t = sel.toString().trim();
      if (t && t.length < 60) {
        findInput.value = t;
        runFind(t);
        return;
      }
    }
    if (findInput.value) runFind(findInput.value);
  }

  function closeFind() {
    findBar.classList.remove('open');
    clearHighlights();
    findInput.value = '';
    findCount.textContent = '';
    findCount.classList.remove('no-results');
    findMatches = []; findCurrent = -1; findLastQ = '';
    // Rendre le focus au textBox
    if (textBox) textBox.focus();
  }

  function runFind(query) {
    clearHighlights();
    findMatches = []; findCurrent = -1; findLastQ = query;

    if (!query.trim()) {
      findCount.textContent = '';
      updateFindNav();
      return;
    }

    // Chercher dans le titre + textBox
    const zones = [titleEl, textBox].filter(Boolean);
    zones.forEach(zone => highlightInZone(zone, query));

    // Mettre ? jour le compteur
    if (findMatches.length === 0) {
      findCount.textContent = 'Aucun';
      findCount.classList.add('no-results');
    } else {
      findCount.classList.remove('no-results');
      goToMatch(0);
    }
    updateFindNav();
  }

  function highlightInZone(zone, query) {
    // Parcourir les n?uds texte r?cursivement
    const walker = document.createTreeWalker(zone, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        // Ignorer les spacers et les ?l?ments non-?ditables
        if (n.parentElement.closest('.page-spacer, .ai-inline-wrapper, .find-highlight')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    const lowerQ = query.toLowerCase();
    nodes.forEach(textNode => {
      const text  = textNode.textContent;
      const lower = text.toLowerCase();
      let idx = 0, pos;
      const parts = [];
      while ((pos = lower.indexOf(lowerQ, idx)) !== -1) {
        if (pos > idx) parts.push(document.createTextNode(text.slice(idx, pos)));
        const mark = document.createElement('mark');
        mark.className = 'find-highlight';
        mark.textContent = text.slice(pos, pos + query.length);
        parts.push(mark);
        findMatches.push(mark);
        idx = pos + query.length;
      }
      if (parts.length === 0) return;
      if (idx < text.length) parts.push(document.createTextNode(text.slice(idx)));
      const frag = document.createDocumentFragment();
      parts.forEach(p => frag.appendChild(p));
      textNode.replaceWith(frag);
    });
  }

  function clearHighlights() {
    // Remplacer chaque <mark> par son contenu texte
    document.querySelectorAll('.find-highlight').forEach(mark => {
      mark.replaceWith(document.createTextNode(mark.textContent));
    });
    // Normaliser les n?uds texte fusionn?s
    [titleEl, textBox].filter(Boolean).forEach(z => z.normalize());
  }

  function goToMatch(idx) {
    if (findMatches.length === 0) return;
    // D?sactiver l'ancienne occurrence
    if (findCurrent >= 0 && findMatches[findCurrent]) {
      findMatches[findCurrent].classList.remove('find-active');
    }
    findCurrent = (idx + findMatches.length) % findMatches.length;
    const mark = findMatches[findCurrent];
    mark.classList.add('find-active');
    // Scroller pour rendre visible
    mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Mettre ? jour le compteur
    findCount.textContent = (findCurrent + 1) + '/' + findMatches.length;
    findCount.classList.remove('no-results');
    updateFindNav();
  }

  function updateFindNav() {
    const hasMatches = findMatches.length > 0;
    findPrevBtn.disabled = !hasMatches;
    findNextBtn.disabled = !hasMatches;
  }

  // ?? Listeners ?????????????????????????????????????????????
  findInput.addEventListener('input', () => runFind(findInput.value));

  findInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) goToMatch(findCurrent - 1);
      else            goToMatch(findCurrent + 1);
    }
    if (e.key === 'Escape') { e.preventDefault(); closeFind(); }
  });

  findPrevBtn.addEventListener('click', () => goToMatch(findCurrent - 1));
  findNextBtn.addEventListener('click', () => goToMatch(findCurrent + 1));
  findCloseBtn.addEventListener('click', closeFind);

  /* ============================================================
     D\u00C9FINITIONS AUTO " "
     D\u00E9tecte les termes entre guillemets ("terme") et ins\u00E8re
     une d\u00E9finition courte g\u00E9n\u00E9r\u00E9e par Claude juste en dessous.
     D\u00E9clencheurs :
       1. Automatique : "terme" + Entr\u00E9e dans le textBox
       2. Manuel      : Ctrl+Shift+D sur un bloc contenant "terme"
  ============================================================ */
  const DEF_PROMPT = 'Tu es un dictionnaire concis. Donne une definition courte (1-2 phrases maximum) du terme suivant. Reponds UNIQUEMENT avec la definition, sans reformuler le terme, sans introduction, sans guillemets autour de la definition.';

  // Regex : guillemets fran?ais ou anglais autour d'un terme
  // Guillemets vrais uniquement ? exclut l'apostrophe droit ' (trop ambigu en fran?ais)
  // D?tecte : ? terme ? | "terme" | "terme" | 'terme' (guillemets typographiques)
  const QUOTED_RE = /(?:[\u00AB\u201C\u2018])([^\u00AB\u00BB\u201C\u201D\u2018\u2019"]{2,60})(?:[\u00BB\u201D\u2019])|"([^"]{2,60})"/g;

  async function fetchDefinition(term) {
    const storedKey = (() => { try { return localStorage.getItem('zaap_api_key') || ''; } catch(_) { return ''; } })();
    const activeKey = storedKey || ANTHROPIC_API_KEY;
    if (!activeKey) throw new Error('Cle API manquante');
    const cleanKey = activeKey.replace(/[^\x20-\x7E]/g, '').trim();

    const MAX_RETRIES = 3;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': cleanKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 200,
          messages: [{ role: 'user', content: DEF_PROMPT + '\n\nTerme : ' + term }],
        }),
      });

      if (response.status === 529) {
        if (attempt < MAX_RETRIES) {
          showToast('Serveurs charges, tentative ' + attempt + '/' + MAX_RETRIES + '...');
          await new Promise(r => setTimeout(r, 3000 * attempt));
          continue;
        }
        throw new Error('Serveurs IA surcharges. Reessaie dans quelques secondes.');
      }
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const data = await response.json();
      return (data.content?.[0]?.text || '').trim();
    }
  }

  function insertDefinitionBlock(afterEl, term, definition) {
    // Guards : afterEl doit exister et ?tre dans le DOM
    if (!afterEl || !afterEl.isConnected) return;

    // Ne pas ins?rer si une d?finition pour ce terme existe d?j? juste apr?s
    const next = afterEl.nextElementSibling;
    if (next && next.classList?.contains('definition-block') &&
        next.querySelector?.('.definition-term')?.textContent === term) return;

    const block = document.createElement('div');
    block.className = 'definition-block';
    block.contentEditable = 'false';

    const termSpan = document.createElement('span');
    termSpan.className = 'definition-term';
    termSpan.textContent = term;


    const defSpan = document.createElement('span');
    defSpan.className = 'definition-text ai-inline-corr';
    defSpan.style.cssText = 'display:block; margin-top:4px; font-family:var(--font-display); font-size:13px; line-height:1.7; min-height:1.5em;';

    const delBtn = document.createElement('button');
    delBtn.className = 'definition-delete';
    delBtn.textContent = '\u2715';
    delBtn.title = 'Supprimer la definition';

    block.appendChild(termSpan);
    block.appendChild(defSpan);
    block.appendChild(delBtn);

    afterEl.after(block);

    // N?ud texte d?di? + curseur s?par?
    const defTextNode = document.createTextNode('');
    const defStreamCursor = document.createElement('span');
    defStreamCursor.className = 'ai-cursor';
    defStreamCursor.textContent = '|';
    defSpan.appendChild(defTextNode);
    defSpan.appendChild(defStreamCursor);

    simulateStream(definition, token => {
      defTextNode.textContent += token;
    }, () => {
      defStreamCursor.remove();
      defSpan.classList.remove('ai-inline-corr');
      defSpan.style.cssText = '';
      defSpan.className = 'definition-text';
      scheduleAutosave();
    });
  }


  // ?? Bulle de d?finition au survol ????????????????????????
  let defBubble     = null;
  let defBubbleTimer = null;
  let defBubbleTerm  = null;
  let defBubbleBlock = null;

  function createDefBubble() {
    if (defBubble) return;
    defBubble = document.createElement('div');
    defBubble.className = 'def-bubble';
    defBubble.textContent = '\uD83D\uDCD6 Definir';
    document.body.appendChild(defBubble);

    defBubble.addEventListener('click', async () => {
      if (!defBubbleTerm || !defBubbleBlock) return;
      // Capturer localement avant hideDefBubble() qui remet ? null
      const term  = defBubbleTerm;
      const block = defBubbleBlock;
      hideDefBubble();
      showToast('Definition en cours...');
      try {
        const def = await fetchDefinition(term);
        if (def) {
          insertDefinitionBlock(block, term, def);
          showToast('Definition inseree');
        }
      } catch(err) {
        showToast('Erreur : ' + (err.message || 'connexion impossible'));
      }
    });
  }

  function showDefBubble(term, block, rect) {
    createDefBubble();
    defBubbleTerm  = term;
    defBubbleBlock = block;
    defBubble.style.left = (rect.left + rect.width / 2) + 'px';
    defBubble.style.top  = (rect.top - 36) + 'px';
    defBubble.style.transform = 'translateX(-50%) translateY(4px)';
    requestAnimationFrame(() => {
      defBubble.classList.add('visible');
      defBubble.style.transform = 'translateX(-50%) translateY(0)';
    });
  }

  function hideDefBubble() {
    if (!defBubble) return;
    defBubble.classList.remove('visible');
    defBubbleTerm  = null;
    defBubbleBlock = null;
  }

  function attachDefinitionHover(el) {
    el.addEventListener('mousemove', e => {
      clearTimeout(defBubbleTimer);
      defBubbleTimer = setTimeout(() => {
        // V?rifier qu'on n'est pas en train de s?lectionner
        const sel = window.getSelection();
        if (sel && !sel.isCollapsed) return;
        // V?rifier qu'on n'est pas en train d'?diter activement
        if (document.activeElement === el) {
          // OK si on survole sans taper
        }

        // Trouver le n?ud texte sous le curseur
        let node = null;
        if (document.caretRangeFromPoint) {
          const r = document.caretRangeFromPoint(e.clientX, e.clientY);
          if (r) node = r.startContainer;
        } else if (document.caretPositionFromPoint) {
          const p = document.caretPositionFromPoint(e.clientX, e.clientY);
          if (p) node = p.offsetNode;
        }
        if (!node || node.nodeType !== Node.TEXT_NODE) { hideDefBubble(); return; }

        // Ignorer si on survole un bloc d?finition d?j? ins?r?
        const nodeEl = node.parentElement;
        if (nodeEl.closest('.definition-block')) { hideDefBubble(); return; }

        const block  = getDirectTextBlock(nodeEl);
        if (!block) { hideDefBubble(); return; }
        // Ignorer aussi si le bloc direct est un definition-block
        if (block.classList.contains('definition-block')) { hideDefBubble(); return; }

        // Chercher un terme entre guillemets dans tout le bloc
        const fullText = block.innerText;
        QUOTED_RE.lastIndex = 0;
        let match, found = null;
        while ((match = QUOTED_RE.exec(fullText)) !== null) {
          found = (match[1] || match[2] || '').trim();
          break;
        }

        if (!found) { hideDefBubble(); return; }

        // Calculer la position de la bulle sur le texte entre guillemets
        const range = document.createRange();
        range.selectNodeContents(block);
        const rect = block.getBoundingClientRect();
        showDefBubble(found, block, rect);
      }, 400); // d\u00E9lai 400ms avant d'afficher
    });

    el.addEventListener('mouseleave', e => {
      clearTimeout(defBubbleTimer);
      // Laisser le temps de cliquer sur la bulle
      setTimeout(() => {
        if (!defBubble?.matches(':hover')) hideDefBubble();
      }, 200);
    });
  }

  // ?? Ctrl+Shift+D (conserv?) ???????????????????????????????
  async function triggerDefinitionAtCursor() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) { showToast('Place le curseur dans un bloc avec un terme entre guillemets'); return; }
    const node  = sel.anchorNode;
    const elem  = node?.nodeType === 3 ? node.parentElement : node;
    const block = getDirectTextBlock(elem);
    if (!block) { showToast('Aucun bloc trouve'); return; }

    const text = block.innerText;
    QUOTED_RE.lastIndex = 0;
    const match = QUOTED_RE.exec(text);
    if (!match) { showToast('Aucun terme entre guillemets'); return; }

    const term = (match[1] || match[2] || '').trim();
    showToast('Definition de "' + term + '"...');
    try {
      const def = await fetchDefinition(term);
      if (def) { insertDefinitionBlock(block, term, def); showToast('Definition inseree'); }
    } catch(err) { showToast('Erreur : ' + (err.message || 'connexion impossible')); }
  }

  function attachDefinitionTrigger(el) {
    attachDefinitionHover(el);
  }

  /* ============================================================
     MODE AGENDA
  ============================================================ */
  const AGENDA_KEY  = 'zaap_agenda';
  let agendaEvents  = [];   // [{id, title, date, time, duration, notes}]
  let agendaCurrent = new Date(); // mois/semaine affich\u00E9
  let agendaView    = 'month';
  let editingEventId = null;

  // ?? Persistance ??????????????????????????????????????????
  function loadAgendaEvents() {
    try {
      const raw = localStorage.getItem(AGENDA_KEY);
      agendaEvents = raw ? JSON.parse(raw) : [];
    } catch(_) { agendaEvents = []; }
  }

  function saveAgendaEvents() {
    try { localStorage.setItem(AGENDA_KEY, JSON.stringify(agendaEvents)); } catch(_) {}
  }

  function genEventId() {
    return 'ev_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  }

  // ?? Rendu vue mensuelle ??????????????????????????????????
  function renderMonth() {
    const y = agendaCurrent.getFullYear();
    const m = agendaCurrent.getMonth();

    agendaTitle.textContent = new Date(y, m, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

    const firstDay = new Date(y, m, 1);
    const lastDay  = new Date(y, m + 1, 0);
    // Lundi = 0
    let startDow = (firstDay.getDay() + 6) % 7;

    agendaGrid.innerHTML = '';

    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);

    // Jours du mois pr?c?dent
    for (let i = 0; i < startDow; i++) {
      const d = new Date(y, m, -(startDow - i - 1));
      agendaGrid.appendChild(makeDayCell(d, true, todayStr));
    }
    // Jours du mois
    for (let d = 1; d <= lastDay.getDate(); d++) {
      agendaGrid.appendChild(makeDayCell(new Date(y, m, d), false, todayStr));
    }
    // Compl?ter la grille
    const total = agendaGrid.children.length;
    const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
    for (let i = 1; i <= remaining; i++) {
      agendaGrid.appendChild(makeDayCell(new Date(y, m + 1, i), true, todayStr));
    }
  }

  // ?? Drag & Drop ?tat ?????????????????????????????????????
  let dragEventId   = null;  // id de l'\u00E9v\u00E9nement en cours de drag
  let dragSourceDate = null; // date source

  function makeDayCell(date, otherMonth, todayStr) {
    const dateStr = date.toISOString().slice(0, 10);
    const cell = document.createElement('div');
    cell.className = 'agenda-day' + (otherMonth ? ' other-month' : '') + (dateStr === todayStr ? ' today' : '');
    cell.dataset.date = dateStr;

    const num = document.createElement('div');
    num.className = 'day-num';
    num.textContent = date.getDate();
    cell.appendChild(num);

    const evtsDiv = document.createElement('div');
    evtsDiv.className = 'day-events';

    const dayEvents = agendaEvents.filter(e => e.date === dateStr);
    dayEvents.slice(0, 3).forEach(ev => {
      const chip = document.createElement('div');
      chip.className = 'day-event-chip';
      chip.draggable = true;
      chip.dataset.eventId = ev.id;
      chip.textContent = (ev.time ? ev.time.slice(0, 5) + ' ' : '') + ev.title;

      // Clic ? modale
      chip.addEventListener('click', e => { e.stopPropagation(); openEventModal(dateStr, ev.id); });

      // Drag start
      chip.addEventListener('dragstart', e => {
        dragEventId    = ev.id;
        dragSourceDate = dateStr;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', ev.id);
        setTimeout(() => chip.classList.add('dragging'), 0);
      });
      chip.addEventListener('dragend', () => {
        chip.classList.remove('dragging');
        dragEventId = null; dragSourceDate = null;
        document.querySelectorAll('.agenda-day.drag-over').forEach(c => c.classList.remove('drag-over'));
      });

      evtsDiv.appendChild(chip);
    });
    if (dayEvents.length > 3) {
      const more = document.createElement('div');
      more.className = 'day-event-chip';
      more.style.opacity = '0.6';
      more.textContent = '+' + (dayEvents.length - 3) + ' autres';
      evtsDiv.appendChild(more);
    }
    cell.appendChild(evtsDiv);

    // Drop target
    cell.addEventListener('dragover', e => {
      if (!dragEventId) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      cell.classList.add('drag-over');
    });
    cell.addEventListener('dragleave', e => {
      if (!cell.contains(e.relatedTarget)) cell.classList.remove('drag-over');
    });
    cell.addEventListener('drop', e => {
      e.preventDefault();
      cell.classList.remove('drag-over');
      if (!dragEventId || dateStr === dragSourceDate) return;
      // D?placer l'?v?nement vers la nouvelle date
      const idx = agendaEvents.findIndex(ev => ev.id === dragEventId);
      if (idx !== -1) {
        agendaEvents[idx].date = dateStr;
        saveAgendaEvents();
        renderAgenda();
        showToast('Evenement deplace');
      }
    });

    cell.addEventListener('click', () => openEventModal(dateStr));
    return cell;
  }

  // ?? Rendu vue hebdomadaire ????????????????????????????????
  function renderWeek() {
    const d = new Date(agendaCurrent);
    // Aller au lundi de la semaine
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - dow);

    const weekStart = new Date(d);
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }

    const y  = weekStart.getFullYear();
    const m1 = weekStart.toLocaleDateString('fr-FR', { month: 'short' });
    const m2 = days[6].toLocaleDateString('fr-FR', { month: 'short' });
    agendaTitle.textContent = (m1 === m2 ? m1 : m1 + ' - ' + m2) + ' ' + y;

    const todayStr = new Date().toISOString().slice(0, 10);

    // Header
    agendaWeekHeader.innerHTML = '<div class="week-hour-label"></div>';
    days.forEach(day => {
      const dateStr = day.toISOString().slice(0, 10);
      const hdr = document.createElement('div');
      hdr.className = 'week-day-header' + (dateStr === todayStr ? ' today' : '');
      hdr.innerHTML = '<span style="font-size:11px;text-transform:uppercase;letter-spacing:.05em">' +
        day.toLocaleDateString('fr-FR', { weekday: 'short' }) + '</span>' +
        '<span class="wdh-num">' + day.getDate() + '</span>';
      agendaWeekHeader.appendChild(hdr);
    });

    // Body ? 8h ? 20h
    agendaWeekBody.innerHTML = '';
    for (let h = 8; h <= 20; h++) {
      const label = document.createElement('div');
      label.className = 'week-hour-label';
      label.textContent = h + 'h';
      agendaWeekBody.appendChild(label);

      days.forEach(day => {
        const dateStr = day.toISOString().slice(0, 10);
        const cell = document.createElement('div');
        cell.className = 'week-cell';
        cell.dataset.date = dateStr;
        cell.dataset.hour = h;

        // ?v?nements de cette heure
        const evts = agendaEvents.filter(ev => {
          if (ev.date !== dateStr) return false;
          const evH = ev.time ? parseInt(ev.time.slice(0, 2)) : 9;
          return evH === h;
        });

        evts.forEach(ev => {
          const block = document.createElement('div');
          block.className = 'week-event-block';
          block.draggable = true;
          block.dataset.eventId = ev.id;
          const durH = (ev.duration || 60) / 60;
          block.style.height = (durH * 48 - 4) + 'px';
          block.textContent = ev.title;

          block.addEventListener('click', e => { e.stopPropagation(); openEventModal(dateStr, ev.id); });

          block.addEventListener('dragstart', e => {
            dragEventId    = ev.id;
            dragSourceDate = dateStr;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', ev.id);
            setTimeout(() => block.classList.add('dragging'), 0);
          });
          block.addEventListener('dragend', () => {
            block.classList.remove('dragging');
            dragEventId = null; dragSourceDate = null;
            document.querySelectorAll('.week-cell.drag-over').forEach(c => c.classList.remove('drag-over'));
          });
          cell.appendChild(block);
        });

        // Drop sur une cellule heure
        cell.addEventListener('dragover', e => {
          if (!dragEventId) return;
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          cell.classList.add('drag-over');
        });
        cell.addEventListener('dragleave', e => {
          if (!cell.contains(e.relatedTarget)) cell.classList.remove('drag-over');
        });
        cell.addEventListener('drop', e => {
          e.preventDefault();
          cell.classList.remove('drag-over');
          if (!dragEventId) return;
          const idx = agendaEvents.findIndex(ev => ev.id === dragEventId);
          if (idx !== -1) {
            agendaEvents[idx].date = dateStr;
            agendaEvents[idx].time = String(h).padStart(2,'0') + ':00';
            saveAgendaEvents();
            renderAgenda();
            showToast('Evenement deplace');
          }
        });

        cell.addEventListener('click', () => openEventModal(dateStr, null, h));
        agendaWeekBody.appendChild(cell);
      });
    }
  }

  function renderAgenda() {
    loadAgendaEvents();
    if (agendaView === 'month') renderMonth();
    else                        renderWeek();
    // Mettre ? jour le r?cap si ouvert
    if (document.querySelector('.agenda-layout.recap-open')) renderRecapEvents();
  }

  // ?? Navigation ????????????????????????????????????????????
  agendaPrevBtn.addEventListener('click', () => {
    if (agendaView === 'month') agendaCurrent.setMonth(agendaCurrent.getMonth() - 1);
    else                        agendaCurrent.setDate(agendaCurrent.getDate() - 7);
    renderAgenda();
  });
  agendaNextBtn.addEventListener('click', () => {
    if (agendaView === 'month') agendaCurrent.setMonth(agendaCurrent.getMonth() + 1);
    else                        agendaCurrent.setDate(agendaCurrent.getDate() + 7);
    renderAgenda();
  });
  agendaTodayBtn.addEventListener('click', () => {
    agendaCurrent = new Date();
    renderAgenda();
  });

  // Bascule vue
  [agendaViewMonth, agendaViewWeek].forEach(btn => {
    btn.addEventListener('click', () => {
      agendaView = btn.dataset.view;
      agendaViewMonth.classList.toggle('active', agendaView === 'month');
      agendaViewWeek.classList.toggle('active',  agendaView === 'week');
      agendaMonth.style.display = agendaView === 'month' ? '' : 'none';
      agendaWeek.style.display  = agendaView === 'week'  ? '' : 'none';
      renderAgenda();
    });
  });

  // ?? Modal ?v?nement ???????????????????????????????????????
  function openEventModal(dateStr, eventId, prefHour) {
    editingEventId = eventId || null;
    eventModalTitle.textContent = eventId ? '\u00C9v\u00E9nement' : 'Nouvel \u00E9v\u00E9nement';
    eventDeleteBtn.style.display = eventId ? 'block' : 'none';

    if (eventId) {
      const ev = agendaEvents.find(e => e.id === eventId);
      if (!ev) return;
      eventTitleInput.value    = ev.title    || '';
      eventDateInput.value     = ev.date     || dateStr;
      eventTimeInput.value     = ev.time     || '09:00';
      eventDurationSel.value   = ev.duration || 60;
      eventNotesInput.value    = ev.notes    || '';
    } else {
      eventTitleInput.value    = '';
      eventDateInput.value     = dateStr;
      eventTimeInput.value     = prefHour ? String(prefHour).padStart(2,'0') + ':00' : '09:00';
      eventDurationSel.value   = 60;
      eventNotesInput.value    = '';
    }

    eventOverlay.classList.add('open');
    setTimeout(() => eventTitleInput.focus(), 80);
  }

  function closeEventModal() {
    eventOverlay.classList.remove('open');
    editingEventId = null;
  }

  function saveEvent() {
    const title = eventTitleInput.value.trim();
    if (!title) { eventTitleInput.focus(); return; }

    if (editingEventId) {
      const idx = agendaEvents.findIndex(e => e.id === editingEventId);
      if (idx !== -1) {
        agendaEvents[idx] = {
          ...agendaEvents[idx],
          title,
          date:     eventDateInput.value,
          time:     eventTimeInput.value,
          duration: parseInt(eventDurationSel.value),
          notes:    eventNotesInput.value.trim(),
        };
      }
    } else {
      agendaEvents.push({
        id:       genEventId(),
        title,
        date:     eventDateInput.value,
        time:     eventTimeInput.value,
        duration: parseInt(eventDurationSel.value),
        notes:    eventNotesInput.value.trim(),
      });
    }

    saveAgendaEvents();
    closeEventModal();
    renderAgenda();
  }

  function deleteEvent() {
    if (!editingEventId) return;
    agendaEvents = agendaEvents.filter(e => e.id !== editingEventId);
    saveAgendaEvents();
    closeEventModal();
    renderAgenda();
  }

  eventSaveBtn.addEventListener('click', saveEvent);
  eventCancelBtn.addEventListener('click', closeEventModal);
  eventModalClose.addEventListener('click', closeEventModal);
  eventDeleteBtn.addEventListener('click', deleteEvent);
  eventOverlay.addEventListener('click', e => { if (e.target === eventOverlay) closeEventModal(); });

  eventTitleInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); saveEvent(); }
    if (e.key === 'Escape') closeEventModal();
  });

  // ?? Commande !agenda ? g?n?ration IA ????????????????????
  async function generateAgendaEvent(description) {
    const prompt = 'Analyse cette description et extrais les informations pour un evenement de calendrier. ' +
      'Reponds UNIQUEMENT en JSON avec : {"title":"...","date":"YYYY-MM-DD","time":"HH:MM","duration":60,"notes":"..."}. ' +
      'Pour la date, base-toi sur aujourd\'hui : ' + new Date().toISOString().slice(0,10) + '. ' +
      'Si l\'heure n\'est pas precise, mets 09:00. Si la duree n\'est pas precise, mets 60. Notes peut etre vide.';

    const activeKey = (() => { try { return localStorage.getItem('zaap_api_key') || ''; } catch(_) { return ''; } })();
    const cleanKey  = (activeKey || ANTHROPIC_API_KEY).replace(/[^\x20-\x7E]/g, '').trim();
    if (!cleanKey) { showToast('Cle API manquante'); return; }

    showToast('Analyse de votre evenement...');
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': cleanKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 300,
          messages: [{ role: 'user', content: prompt + '\n\nDescription : ' + description }],
        }),
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const text = (data.content?.[0]?.text || '').trim();
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw new Error('Reponse invalide');
      const ev = JSON.parse(match[0]);
      agendaEvents.push({ id: genEventId(), ...ev });
      saveAgendaEvents();
      // Stocker la date pour naviguer si l'utilisateur accepte
      if (ev.date) agendaCurrent = new Date(ev.date + 'T00:00:00');
      // Toast avec bouton ? ne pas basculer automatiquement
      showToastWithAction(
        ev.title + ' ajout\u00E9',
        "Voir l'agenda",
        () => { renderAgenda(); switchMode('calendar'); }
      );
    } catch(err) {
      showToast('Erreur : ' + (err.message || 'connexion impossible'));
    }
  }

  // Initialiser l'agenda quand on bascule sur ce mode
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === 'calendar') {
        setTimeout(() => {
          renderAgenda();
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 50);
      }
    });
  });

  /* ============================================================
     R\u00C9CAP HEBDO
  ============================================================ */
  const TASKS_KEY = 'zaap_tasks';
  let weekTasks   = [];

  function loadTasks() {
    try { weekTasks = JSON.parse(localStorage.getItem(TASKS_KEY) || '[]'); }
    catch(_) { weekTasks = []; }
  }
  function saveTasks() {
    try { localStorage.setItem(TASKS_KEY, JSON.stringify(weekTasks)); } catch(_) {}
  }

  // ?? Toggle panneau ????????????????????????????????????????
  function toggleRecap() {
    const layout = document.querySelector('.agenda-layout');
    if (!layout) return;
    const isOpen = layout.classList.toggle('recap-open');
    if (isOpen) renderRecap();
  }



  // ?? Rendu du r?cap ????????????????????????????????????????
  function renderRecap() {
    renderRecapEvents();
    renderRecapTasks();
  }

  function renderRecapEvents() {
    const el = document.getElementById('recapEvents');
    if (!el) return;
    loadAgendaEvents();

    const now    = new Date();
    const dow    = (now.getDay() + 6) % 7;
    const monday = new Date(now); monday.setDate(now.getDate() - dow);
    const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      days.push(d);
    }

    const monStr = monday.toISOString().slice(0,10);
    const sunStr = sunday.toISOString().slice(0,10);
    const weekEvents = agendaEvents.filter(ev => ev.date >= monStr && ev.date <= sunStr);

    el.innerHTML = '';

    if (weekEvents.length === 0) {
      el.innerHTML = '<p class="recap-empty">Aucun \u00E9v\u00E9nement cette semaine</p>';
      return;
    }

    days.forEach(day => {
      const dateStr = day.toISOString().slice(0,10);
      const dayEvts = weekEvents
        .filter(ev => ev.date === dateStr)
        .sort((a,b) => (a.time||'').localeCompare(b.time||''));
      if (dayEvts.length === 0) return;

      const dayEl = document.createElement('div');
      dayEl.className = 'recap-event-day';

      const label = document.createElement('div');
      label.className = 'recap-event-day-label';
      label.textContent = day.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' });
      dayEl.appendChild(label);

      dayEvts.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'recap-event-item';

        const time = document.createElement('span');
        time.className = 'recap-event-time';
        time.textContent = ev.time ? ev.time.slice(0,5) : '';

        const title = document.createElement('span');
        title.textContent = ev.title;

        item.appendChild(time);
        item.appendChild(title);
        item.addEventListener('click', () => openEventModal(dateStr, ev.id));
        dayEl.appendChild(item);
      });

      el.appendChild(dayEl);
    });
  }

  function renderRecapTasks() {
    const el = document.getElementById('recapTasks');
    if (!el) return;
    loadTasks();
    el.innerHTML = '';

    weekTasks.forEach((task, idx) => {
      const item = document.createElement('div');
      item.className = 'recap-task-item' + (task.done ? ' done' : '');

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'recap-task-cb';
      cb.checked = task.done;
      cb.addEventListener('change', () => {
        weekTasks[idx].done = cb.checked;
        saveTasks();
        item.classList.toggle('done', cb.checked);
      });

      const lbl = document.createElement('span');
      lbl.className = 'recap-task-label';
      lbl.textContent = task.text;
      lbl.addEventListener('click', () => { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')); });

      const del = document.createElement('button');
      del.className = 'recap-task-del';
      del.textContent = '\u2715';
      del.addEventListener('click', () => {
        weekTasks.splice(idx, 1);
        saveTasks();
        renderRecapTasks();
      });

      item.appendChild(cb);
      item.appendChild(lbl);
      item.appendChild(del);
      recapTasksEl.appendChild(item);
    });
  }

  function addTask() {
    const input = document.getElementById('recapTaskInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    weekTasks.push({ text, done: false });
    saveTasks();
    input.value = '';
    renderRecapTasks();
    input.focus();
  }

  // Le r?cap est mis ? jour via renderRecap() appel? depuis renderMonth/renderWeek

  // ?? D?l?gation r?cap agenda ??????????????????????????????
  // Fonctionne m?me quand le mode agenda est display:none au chargement
  document.addEventListener('click', e => {
    // Bouton toggle R?sum?
    if (e.target.closest('#agendaRecapToggle')) { toggleRecap(); return; }
    // Bouton fermer r?cap
    if (e.target.closest('#agendaRecapClose')) {
      const layout = document.querySelector('.agenda-layout');
      if (layout) layout.classList.remove('recap-open');
      return;
    }
    // Bouton + ajouter t?che
    if (e.target.closest('#recapTaskAddBtn')) { addTask(); return; }
  });

  // D?l?gation keydown pour le champ t?che
  document.addEventListener('keydown', e => {
    if (e.target.id === 'recapTaskInput' && e.key === 'Enter') {
      e.preventDefault(); addTask();
    }
  });

  /* ============================================================
     SPLASH SCREEN + ONBOARDING
  ============================================================ */
  const splashEl        = document.getElementById('splashScreen');
  const onboardingEl    = document.getElementById('onboardingOverlay');
  const onboardingNext  = document.getElementById('onboardingNext');
  const onboardingPrev  = document.getElementById('onboardingPrev');
  const onboardingSkip  = document.getElementById('onboardingSkip');

  const ONBOARDING_KEY  = 'zaap_onboarded';
  let   currentStep     = 1;
  const totalSteps      = 3;

  function showStep(n) {
    currentStep = n;
    document.querySelectorAll('.onboarding-step').forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.step) === n);
    });
    document.querySelectorAll('.onboarding-dot').forEach(d => {
      d.classList.toggle('active', parseInt(d.dataset.dot) === n);
    });
    // Bouton retour
    onboardingPrev.style.visibility = n === 1 ? 'hidden' : 'visible';
    // Bouton suivant / terminer
    onboardingNext.textContent = n === totalSteps ? 'Commencer \u2192' : 'Suivant \u2192';
  }

  function closeOnboarding() {
    onboardingEl.classList.remove('open');
    try { localStorage.setItem(ONBOARDING_KEY, '1'); } catch(_) {}
  }

  onboardingNext.addEventListener('click', () => {
    if (currentStep < totalSteps) showStep(currentStep + 1);
    else closeOnboarding();
  });
  onboardingPrev.addEventListener('click', () => {
    if (currentStep > 1) showStep(currentStep - 1);
  });
  onboardingSkip.addEventListener('click', closeOnboarding);

  // Clic sur les dots
  document.querySelectorAll('.onboarding-dot').forEach(dot => {
    dot.addEventListener('click', () => showStep(parseInt(dot.dataset.dot)));
  });

  // Splash : afficher 1.8s puis disparaitre
  function startSplash() {
    const alreadyOnboarded = (() => {
      try { return localStorage.getItem(ONBOARDING_KEY); } catch(_) { return null; }
    })();

    setTimeout(() => {
      splashEl.classList.add('fade-out');
      setTimeout(() => {
        splashEl.classList.add('hidden');
        // Afficher onboarding seulement a la premiere visite
        if (!alreadyOnboarded) {
          showStep(1);
          onboardingEl.classList.add('open');
        }
      }, 600);
    }, 1600);
  }

  startSplash();

  /* ============================================================
  /* ============================================================
     FICHES DE REVISION
  ============================================================ */
  var fcCards  = [];
  var fcIdx    = 0;
  var fcFormat = 'qa';

  function openFcPanel() {
    fcCards = []; fcIdx = 0;
    fcSetupEl.style.display   = 'block';
    fcLoadingEl.style.display = 'none';
    fcViewEl.style.display    = 'none';
    fcDoneEl.style.display    = 'none';
    document.querySelectorAll('.flashcard-format-btn').forEach(function(b) {
      b.classList.toggle('active', b.dataset.format === 'qa');
    });
    fcFormat = 'qa';
    fcPanelEl.classList.add('open');
  }

  function closeFcPanel() {
    fcPanelEl.classList.remove('open');
  }

  function fcShowCard() {
    if (!fcCards.length) return;
    fcCardEl.classList.remove('flipped');
    fcFrontEl.textContent = fcCards[fcIdx].q || '';
    fcBackEl.textContent  = fcCards[fcIdx].r || '';
    fcCounterEl.textContent = (fcIdx + 1) + ' / ' + fcCards.length;
    fcPrevEl.disabled = fcIdx === 0;
    fcNextEl.textContent = fcIdx === fcCards.length - 1 ? '\u2713' : '\u2192';
  }

  function fcNav(dir) {
    var idx = fcIdx + dir;
    if (idx < 0) return;
    if (idx >= fcCards.length) {
      fcViewEl.style.display = 'none';
      fcDoneEl.style.display = 'flex';
      return;
    }
    fcIdx = idx;
    fcShowCard();
  }

  async function fcGenerate() {
    var storedKey = '';
    try { storedKey = localStorage.getItem('zaap_api_key') || ''; } catch(_) {}
    var key = (storedKey || ANTHROPIC_API_KEY).replace(/[^ -~]/g, '').trim();
    if (!key) { showToast('Configure ta cle API dans les Preferences'); return; }

    var title   = titleEl   ? (titleEl.innerText || '')   : '';
    var body    = textBox   ? (textBox.innerText || '')    : '';
    var content = (title + '\n\n' + body).trim().slice(0, 4000);
    if (content.length < 30) { showToast('Document trop court'); return; }

    var prompt = fcFormat === 'qa'
      ? 'Genere des flashcards en JSON. Reponds UNIQUEMENT avec un tableau JSON : [{"q":"question","r":"reponse"}]. 5 a 15 fiches courtes.'
      : 'Genere des fiches resume en JSON. Reponds UNIQUEMENT avec un tableau JSON : [{"q":"Titre","r":"Resume"}]. 4 a 10 fiches.';

    fcSetupEl.style.display   = 'none';
    fcLoadingEl.style.display = 'flex';

    try {
      var resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 2000,
          messages: [{ role: 'user', content: prompt + '\n\nTexte:\n' + content }],
        }),
      });

      if (resp.status === 529) throw new Error('Serveurs IA surcharges, reessaie');
      if (!resp.ok) throw new Error('HTTP ' + resp.status);

      var data  = await resp.json();
      var text  = ((data.content || [])[0] || {}).text || '';
      var match = text.match(/\[[\s\S]*\]/);
      if (!match) throw new Error('Reponse invalide');

      fcCards = JSON.parse(match[0]);
      if (!fcCards.length) throw new Error('Aucune fiche generee');

      fcIdx = 0;
      fcLoadingEl.style.display = 'none';
      fcViewEl.style.display    = 'flex';
      fcShowCard();

    } catch(err) {
      fcLoadingEl.style.display = 'none';
      fcSetupEl.style.display   = 'block';
      showToast('Erreur : ' + (err.message || 'connexion impossible'));
    }
  }

  // Drag & drop du panneau
  (function() {
    var dragging = false;
    var offX = 0, offY = 0;
    var header = document.getElementById('flashcardPanelHeader');
    if (!header) return;
    header.addEventListener('mousedown', function(e) {
      if (e.target.closest('.flashcard-close')) return;
      dragging = true;
      var rect = fcPanelEl.getBoundingClientRect();
      offX = e.clientX - rect.left;
      offY = e.clientY - rect.top;
      fcPanelEl.style.transform = 'none';
      fcPanelEl.style.left = rect.left + 'px';
      fcPanelEl.style.top  = rect.top  + 'px';
      e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
      if (!dragging) return;
      fcPanelEl.style.left = (e.clientX - offX) + 'px';
      fcPanelEl.style.top  = (e.clientY - offY) + 'px';
    });
    document.addEventListener('mouseup', function() { dragging = false; });
  })();

  // Listeners - meme pattern que le panneau IA
  openFlashcardsBtn.addEventListener('click', openFcPanel);
  fcCloseEl.addEventListener('click', closeFcPanel);

  document.addEventListener('mousedown', function(e) {
    if (fcPanelEl.classList.contains('open') &&
        !fcPanelEl.contains(e.target) &&
        e.target !== openFlashcardsBtn) {
      closeFcPanel();
    }
  });

  document.querySelectorAll('.flashcard-format-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.flashcard-format-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      fcFormat = btn.dataset.format || 'qa';
    });
  });

  fcGenerateEl.addEventListener('click', fcGenerate);
  fcCardEl.addEventListener('click', function() { fcCardEl.classList.toggle('flipped'); });
  fcPrevEl.addEventListener('click', function() { fcNav(-1); });
  fcNextEl.addEventListener('click', function() { fcNav(1); });
  fcRestartEl.addEventListener('click', function() {
    fcIdx = 0;
    fcDoneEl.style.display = 'none';
    fcViewEl.style.display = 'flex';
    fcShowCard();
  });

  document.addEventListener('keydown', function(e) {
    if (!fcPanelEl.classList.contains('open')) return;
    if (e.key === 'ArrowRight') fcNav(1);
    if (e.key === 'ArrowLeft')  fcNav(-1);
    if (e.key === ' ')          { e.preventDefault(); fcCardEl.classList.toggle('flipped'); }
    if (e.key === 'Escape')     closeFcPanel();
  });

  /* ============================================================
     MODE RECHERCHE
  ============================================================ */
  var searchInput   = document.getElementById('searchInput');
  var searchClear   = document.getElementById('searchClear');
  var searchResults = document.getElementById('searchResults');
  var searchStats   = document.getElementById('searchStats');
  var searchEmpty   = document.getElementById('searchEmpty');
  var searchTimer   = null;

  // Normaliser le texte pour la recherche (insensible casse + accents)
  function normalizeText(str) {
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // Extraire le texte brut depuis le HTML
  function htmlToText(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll('.page-spacer, .ai-inline-wrapper').forEach(function(el) { el.remove(); });
    return tmp.innerText || tmp.textContent || '';
  }

  // Trouver le dossier parent d'un doc
  function findDocFolder(docId) {
    try {
      var raw = localStorage.getItem(SIDEBAR_KEY);
      if (!raw) return '';
      var data = JSON.parse(raw);
      var folders = data.folders || [];
      for (var i = 0; i < folders.length; i++) {
        var f = folders[i];
        var files = f.files || [];
        for (var j = 0; j < files.length; j++) {
          if (files[j].id === docId) return f.name || '';
        }
      }
    } catch(_) {}
    return '';
  }

  // Recuperer tous les documents
  function getAllDocs() {
    var docs = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key || !key.startsWith(DOC_PREFIX)) continue;
        var raw = localStorage.getItem(key);
        if (!raw) continue;
        var data = JSON.parse(raw);
        var docId = key.replace(DOC_PREFIX, '');
        var title = data.title || 'Sans titre';
        var bodyHtml = '';
        if (data.pages && data.pages.length) {
          bodyHtml = data.pages.map(function(p) { return p.html || ''; }).join(' ');
        }
        var bodyText = htmlToText(bodyHtml);
        docs.push({ id: docId, title: title, text: bodyText, html: bodyHtml });
      }
    } catch(_) {}
    return docs;
  }

  // Surligner les occurrences dans un extrait
  function highlightExcerpt(text, query, maxLen) {
    maxLen = maxLen || 200;
    var norm    = normalizeText(text);
    var normQ   = normalizeText(query);
    var idx     = norm.indexOf(normQ);
    if (idx === -1) return escapeHtml(text.slice(0, maxLen));

    // Centrer l'extrait autour du match
    var start = Math.max(0, idx - 60);
    var end   = Math.min(text.length, idx - 60 + maxLen);
    var excerpt = (start > 0 ? '\u2026' : '') + text.slice(start, end) + (end < text.length ? '\u2026' : '');

    // Surligner toutes les occurrences dans l'extrait
    var normEx  = normalizeText(excerpt);
    var result  = '';
    var pos     = 0;
    var nIdx;
    while ((nIdx = normEx.indexOf(normQ, pos)) !== -1) {
      result += escapeHtml(excerpt.slice(pos, nIdx));
      result += '<mark>' + escapeHtml(excerpt.slice(nIdx, nIdx + query.length)) + '</mark>';
      pos = nIdx + query.length;
    }
    result += escapeHtml(excerpt.slice(pos));
    return result;
  }

  // Compter les occurrences
  function countOccurrences(text, query) {
    var norm  = normalizeText(text);
    var normQ = normalizeText(query);
    var count = 0;
    var pos   = 0;
    while ((pos = norm.indexOf(normQ, pos)) !== -1) { count++; pos += normQ.length; }
    return count;
  }

  // Lancer la recherche
  function runSearch(query) {
    query = (query || '').trim();

    // Vider
    searchResults.innerHTML = '';
    searchResults.appendChild(searchEmpty);

    if (!query || query.length < 1) {
      searchEmpty.style.display = 'flex';
      searchStats.textContent   = '';
      searchClear.style.display = 'none';
      return;
    }

    searchClear.style.display = 'block';
    searchEmpty.style.display = 'none';

    var docs    = getAllDocs();
    var matches = [];

    docs.forEach(function(doc) {
      var fullText  = doc.title + ' ' + doc.text;
      var count     = countOccurrences(fullText, query);
      if (count === 0) return;

  // Compter separement titre et corps
      var titleCount = countOccurrences(doc.title, query);
      var bodyCount  = countOccurrences(doc.text,  query);

      matches.push({
        id: doc.id, title: doc.title,
        text: doc.text, count: count,
        titleCount: titleCount, bodyCount: bodyCount
      });
    });

    // Trier par nombre d'occurrences
    matches.sort(function(a, b) { return b.count - a.count; });

    if (matches.length === 0) {
      var noRes = document.createElement('div');
      noRes.className = 'search-no-results';
      noRes.textContent = 'Aucun r\u00E9sultat pour "' + query + '"';
      searchResults.appendChild(noRes);
      searchStats.textContent = 'Aucun r\u00E9sultat';
      return;
    }

    // Afficher les resultats
    var totalOccurrences = matches.reduce(function(s, m) { return s + m.count; }, 0);
    searchStats.textContent = matches.length + ' document' + (matches.length > 1 ? 's' : '') +
      ' \u2014 ' + totalOccurrences + ' occurrence' + (totalOccurrences > 1 ? 's' : '');

    matches.forEach(function(m) {
      var folder = findDocFolder(m.id);
      var card = document.createElement('div');
      card.className = 'search-result-card';

      var header = document.createElement('div');
      header.className = 'search-result-header';

      var titleWrap = document.createElement('div');
      titleWrap.style.display = 'flex';
      titleWrap.style.alignItems = 'center';
      titleWrap.style.gap = '6px';
      titleWrap.style.overflow = 'hidden';

      var titleEl2 = document.createElement('span');
      titleEl2.className = 'search-result-title';
      titleEl2.textContent = m.title || 'Sans titre';
      titleWrap.appendChild(titleEl2);

      if (folder) {
        var folderEl = document.createElement('span');
        folderEl.className = 'search-result-folder';
        folderEl.textContent = '\u25B8 ' + folder;
        titleWrap.appendChild(folderEl);
      }

      var countEl = document.createElement('span');
      countEl.className = 'search-result-count';
      countEl.textContent = m.count + ' occurrence' + (m.count > 1 ? 's' : '');

      header.appendChild(titleWrap);
      header.appendChild(countEl);

      var excerpt = document.createElement('div');
      excerpt.className = 'search-result-excerpt';
      excerpt.innerHTML = highlightExcerpt(m.text || m.title, query);

      card.appendChild(header);
      card.appendChild(excerpt);

      // Clic -> ouvrir le document
      card.addEventListener('click', function() {
        switchMode('page');
        // Trouver et activer le fichier dans la sidebar
        var fileEl = document.querySelector('.file[data-doc-id="' + m.id + '"]');
        if (fileEl) {
          document.querySelectorAll('.file').forEach(function(f) { f.classList.remove('active'); });
          fileEl.classList.add('active');
          loadDoc(m.id);
          saveSidebarOnly();
        } else {
          // Charger directement si pas trouve dans la sidebar
          loadDoc(m.id);
        }
        // Lancer la recherche Ctrl+F sur le terme
        setTimeout(function() {
          var findInput = document.getElementById('findInput');
          var findBar   = document.getElementById('findBar');
          if (findInput && findBar) {
            findBar.classList.add('open');
            findInput.value = query;
            findInput.dispatchEvent(new Event('input'));
            findInput.focus();
          }
        }, 400);
      });

      searchResults.appendChild(card);
    });
  }

  // Listeners recherche
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function() { runSearch(searchInput.value); }, 120);
    });
  }
  if (searchClear) {
    searchClear.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.focus();
      runSearch('');
    });
  }

  // Rafraichir la recherche quand on bascule sur le mode
  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.dataset.mode === 'search') {
        setTimeout(function() {
          if (searchInput) searchInput.focus();
          if (searchInput && searchInput.value) runSearch(searchInput.value);
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 50);
      }
    });
  });

  /* ============================================================
     INIT
  ============================================================ */
  // Tenter de restaurer depuis localStorage
  restoreFontSize();
  const wasRestored = restore();

  if (!wasRestored) {
    const initId = genDocId();
    activeDocId  = initId;
    initDocument();
    const initLi = createFileItem('Page sans titre', true, initId);
    rootFileListEl.appendChild(initLi);
    saveSidebarOnly();
    focusTitle();
  }

  updateWordCount();
  buildToc();
});
