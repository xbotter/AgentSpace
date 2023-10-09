<script>
  import { Col, Container, Row } from "sveltestrap";
  //Import Breadcrumb
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  //Import Cards
  import CardAgent from "./card-agent.svelte";

  import { onMount } from "svelte";
  import { getAgents } from "../../services/agent-service";
  let data = { agents: [] };
  onMount(async () => {
    data.agents = await getAgents();
  });
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Agents" breadcrumbItem="Agents Grid" />
    <Row>
      <CardAgent agents={data.agents} />
    </Row>

    <Row>
      <Col lg={12}>
        <ul
          class="pagination pagination-rounded justify-content-center mt-2 mb-5"
        >
          <li class="page-item disabled">
            <a href={"#"} class="page-link"
              ><i class="mdi mdi-chevron-left" /></a
            >
          </li>
          <li class="page-item active">
            <a href={"#"} class="page-link">1</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link">2</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link"
              ><i class="mdi mdi-chevron-right" /></a
            >
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
</div>