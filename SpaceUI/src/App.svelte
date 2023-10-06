<script>
  import { Router, Route } from "svelte-routing";
  import data from "./routes";
  import { navigate } from 'svelte-routing';

  import Layout from "./routes/Layout.svelte";

  export let url = "";

  import { addMessages, init } from "svelte-i18n";

  import en from "../public/lang/en.json";

  addMessages("en", en);

  init({
    initialLocale: "en",
  });

  if (!localStorage.getItem("authUser")) {
    navigate('/login');
  }

</script>

<Router {url}>
  {#each data.publicRoutes as route}
    <Route path={route.path}>
      <svelte:component this={route.component} />
    </Route>
  {/each}

  {#each data.authProtectedRoutes as route}
    <Route path={route.path} let:params>
      <Layout>
        <svelte:component this={route.component} />
      </Layout>
    </Route>
  {/each}
</Router>
