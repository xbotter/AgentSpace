<script>
  import { onMount } from "svelte";

  import { Link } from "svelte-routing";

  import { _ } from "svelte-i18n";

  let current = "dashboard";
  let current_child = "dashboard";

  function changeClassAttribute(attribute, child = null) {
    if (child && child === current_child) {
      current_child = null;
    } else if (attribute === current && child === null) {
      current = null;
      current_child = null;
    } else {
      current = attribute;
      current_child = child;
    }

    return false;
  }

  onMount(() => {
    menuActivation();
  });

  function menuActivation() {
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    const paths = [];

    for (var i = 0; i < links.length; i++) {
      paths.push(links[i]["pathname"]);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf("/");
      const item = window.location.pathname.substr(0, strIndex).toString();

      matchingMenuItem = links[paths.indexOf(item)];
    } else {
      matchingMenuItem = links[itemIndex];
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4 && parent4.id !== "side-menu") {
              parent4.classList.add("mm-show");
              const parent5 = parent4.parentElement;
              if (parent5 && parent5.id !== "side-menu") {
                parent5.classList.add("mm-active");
                const childanchor = parent5.querySelector(".is-parent");
                if (childanchor && parent5.id !== "side-menu") {
                  childanchor.classList.add("mm-active");
                }
              }
            }
          }
        }
      }
    }
    return false;
  }
  
</script>

<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">
  <div data-simplebar class="h-100">
    <!--- Sidemenu -->
    <div id="sidebar-menu">
      <!-- Left Menu Start -->
      <ul class="metismenu list-unstyled" id="side-menu">
        <li class="menu-title" key="t-menu">{$_("menuitems.menu.text")}</li>

        <li>
            <Link class="side-nav-link-ref" to="dashboard" key="t-saas">
              <i class="bx bx-home-circle" />
              <span>{$_("menuitems.dashboards.text")}</span>
            </Link>
        </li>

        <li class={current == "agents" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("agents")}>
            <i class="bx bx-briefcase-alt-2" />
            <span key="t-projects">{$_("menuitems.agents.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'agents'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="agents-grid" key="t-p-grid">{$_("menuitems.agents.list.grid")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="agent-create"
                key="t-create-new">{$_("menuitems.agents.list.create")}</Link>
            </li>
          </ul>
        </li>

        <li class="menu-title" key="t-apps">{$_("menuitems.apps.text")}</li>

        <li>
          <Link class="side-nav-link-ref" to="calendar">
            <i class="bx bx-calendar" />
            <span key="t-calendar">{$_("menuitems.calendar.text")}</span>
          </Link>
        </li>

        <li>
          <Link class="side-nav-link-ref" to="chat">
            <i class="bx bx-chat" />
            <span key="t-chat">{$_("menuitems.chat.text")}</span>
          </Link>
        </li>

        <li>
          <Link class="side-nav-link-ref" to="apps-filemanager">
            <i class="bx bx-file" />
            <span key="t-file-manager">{$_("menuitems.filemanager.text")}</span>
          </Link>
        </li>                  

        <li class={current == "tasks" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("tasks")}>
            <i class="bx bx-task" />
            <span key="t-tasks">{$_("menuitems.tasks.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'tasks' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="tasks-list" key="t-task-list">{$_("menuitems.tasks.list.tasklist")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="tasks-create"
                key="t-create-task">{$_("menuitems.tasks.list.createtask")}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Sidebar -->
  </div>
</div>
<!-- Left Sidebar End -->