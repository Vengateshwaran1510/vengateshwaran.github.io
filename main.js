/**
 * Renders every section from SITE_DATA (see js/data.js), and
 * handles the "Add record" modal for previewing new projects.
 */
(function () {
  const LOCAL_KEY = "portfolio_extra_projects";

  const $ = (sel, scope) => (scope || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  function getExtraProjects() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveExtraProjects(list) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(list));
  }

  /* ---------------- HERO ---------------- */
  function renderHero() {
    $("#hero-name").textContent = SITE_DATA.profile.name;
    $("#hero-role").textContent = SITE_DATA.profile.role;
    $("#hero-summary").textContent = SITE_DATA.profile.summary;
    $("#hero-status-text").textContent = SITE_DATA.profile.status;

    const statsWrap = $("#hero-stats");
    statsWrap.innerHTML = "";
    SITE_DATA.stats.forEach((s) => {
      const div = el("div");
      div.appendChild(el("dd", null, s.value));
      div.appendChild(el("dt", null, s.label));
      statsWrap.appendChild(div);
    });
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    $("#about-role").textContent = SITE_DATA.profile.role;
    $("#about-location").textContent = SITE_DATA.profile.location;
    $("#about-status").textContent = SITE_DATA.profile.status;
  }

  /* ---------------- EXPERIENCE ---------------- */
  function renderExperience() {
    const list = $("#experience-list");
    list.innerHTML = "";
    SITE_DATA.experience.forEach((job) => {
      const li = el("li", "commit-entry");

      const meta = el("div", "commit-meta");
      meta.appendChild(el("span", "commit-id", job.id));
      meta.appendChild(el("span", null, `${job.start} → ${job.end}`));
      meta.appendChild(el("span", null, job.location));
      li.appendChild(meta);

      li.appendChild(el("h3", null, job.role));
      li.appendChild(el("p", "commit-company", job.company));

      const points = el("ul", "commit-points");
      job.points.forEach((p) => points.appendChild(el("li", null, p)));
      li.appendChild(points);

      const tags = el("div", "tag-row");
      job.stack.forEach((t) => tags.appendChild(el("span", "tag", t)));
      li.appendChild(tags);

      list.appendChild(li);
    });
  }

  /* ---------------- PROJECTS ---------------- */
  function projectCard(p) {
    const card = el("article", "record-card");

    const head = el("div", "record-card-head");
    head.appendChild(el("span", "record-id", p.id || ""));
    card.appendChild(head);

    card.appendChild(el("h3", null, p.name));
    card.appendChild(el("p", null, p.description));

    const tags = el("div", "tag-row");
    (p.stack || []).forEach((t) => tags.appendChild(el("span", "tag", t)));
    card.appendChild(tags);

    if (p.link) {
      const a = el("a", "record-link", "View project →");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.appendChild(a);
    }
    return card;
  }

  function renderProjects() {
    const list = $("#projects-list");
    list.innerHTML = "";
    const extra = getExtraProjects();
    // newest additions first, then the base resume projects
    [...extra, ...SITE_DATA.projects].forEach((p) => list.appendChild(projectCard(p)));
  }

  /* ---------------- SKILLS ---------------- */
  function renderSkills() {
    const grid = $("#skills-grid");
    grid.innerHTML = "";
    Object.entries(SITE_DATA.skills).forEach(([group, items]) => {
      const wrap = el("div", "skill-group");
      wrap.appendChild(el("h3", null, group));
      const ul = el("ul");
      items.forEach((i) => ul.appendChild(el("li", null, i)));
      wrap.appendChild(ul);
      grid.appendChild(wrap);
    });
    $("#soft-skills-list").textContent = SITE_DATA.softSkills.join(" · ");
  }

  /* ---------------- EDUCATION + ACHIEVEMENTS ---------------- */
  function renderEducation() {
    const list = $("#education-list");
    list.innerHTML = "";
    SITE_DATA.education.forEach((e) => {
      const li = el("li");
      li.appendChild(el("div", "edu-school", e.school));
      li.appendChild(el("div", "edu-credential", e.credential));
      li.appendChild(el("div", "edu-year", e.year));
      list.appendChild(li);
    });

    const ach = $("#achievements-list");
    ach.innerHTML = "";
    SITE_DATA.achievements.forEach((a) => ach.appendChild(el("li", null, a)));
  }

  /* ---------------- CONTACT ---------------- */
  function renderContact() {
    const wrap = $("#contact-list");
    wrap.innerHTML = "";
    const rows = [
      ["Email", SITE_DATA.profile.email, `mailto:${SITE_DATA.profile.email}`],
      ["Phone", SITE_DATA.profile.phone, `tel:${SITE_DATA.profile.phone.replace(/\s+/g, "")}`],
      ["LinkedIn", "vengateshwaran-a", SITE_DATA.profile.linkedin],
      ["GitHub", "Vengateshwaran1510", SITE_DATA.profile.github],
    ];
    rows.forEach(([label, text, href]) => {
      const row = el("div");
      row.appendChild(el("dt", null, label));
      const dd = el("dd");
      const a = el("a", null, text);
      a.href = href;
      if (href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      dd.appendChild(a);
      row.appendChild(dd);
      wrap.appendChild(row);
    });
  }

  /* ---------------- MODAL ---------------- */
  function initModal() {
    const modal = $("#project-modal");
    const openBtn = $("#open-project-modal");
    const closeBtn = $("#close-project-modal");
    const form = $("#project-form");
    const copyBtn = $("#copy-project-code");

    function open() {
      modal.hidden = false;
      form.querySelector("input[name=name]").focus();
    }
    function close() {
      modal.hidden = true;
    }

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) close();
    });

    function readForm() {
      const data = new FormData(form);
      const stack = (data.get("stack") || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const extra = getExtraProjects();
      const nextNum = SITE_DATA.projects.length + extra.length + 1;
      return {
        id: "PRJ-" + String(nextNum).padStart(3, "0"),
        name: data.get("name").trim(),
        description: data.get("description").trim(),
        stack,
        link: data.get("link").trim(),
      };
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const project = readForm();
      if (!project.name || !project.description) return;
      const extra = getExtraProjects();
      extra.unshift(project);
      saveExtraProjects(extra);
      renderProjects();
      form.reset();
      close();
    });

    copyBtn.addEventListener("click", async () => {
      const project = readForm();
      const code =
        "{\n" +
        `      id: "${project.id}",\n` +
        `      name: "${project.name.replace(/"/g, '\\"')}",\n` +
        `      description:\n        "${project.description.replace(/"/g, '\\"')}",\n` +
        `      stack: [${project.stack.map((s) => `"${s}"`).join(", ")}],\n` +
        `      link: "${project.link}",\n` +
        "    },";
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = "Copied ✓";
        setTimeout(() => (copyBtn.textContent = "Copy code for data.js"), 1800);
      } catch (e) {
        // Fallback: select text via a temporary textarea if clipboard API is unavailable
        const ta = document.createElement("textarea");
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        copyBtn.textContent = "Copied ✓";
        setTimeout(() => (copyBtn.textContent = "Copy code for data.js"), 1800);
      }
    });
  }

  /* ---------------- INIT ---------------- */
  function init() {
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    initModal();
    $("#year").textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
