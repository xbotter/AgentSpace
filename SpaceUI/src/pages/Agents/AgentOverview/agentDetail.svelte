<script>
  import { Card, CardBody, Col, Row } from "sveltestrap";
  export let agent;
</script>

<Card>
  <CardBody>
    <div class="d-flex">
      <img
        src="/assets/images/chatbots/online-chat-business.png"
        alt=""
        class="avatar-sm me-4"
      />

      <div class="flex-grow-1 overflow-hidden">
        <h5 class="text-truncate font-size-15">{agent.name}</h5>
        <p class="text-muted">{agent.description}</p>
      </div>
    </div>

    <h5 class="font-size-15 mt-4">Agent Details :</h5>

    <p class="text-muted">
      {agent.instruction}
    </p>

    <div class="text-muted mt-4">
      {#if agent.profiles}
        {#each agent.profiles as profile}
          <p>
            <i class="mdi mdi-chevron-right text-primary me-1" />
            {profile}
          </p>
        {/each}
      {/if}
    </div>

    <Row class="task-dates">
      <Col sm="4" xs="6">
        <div class="mt-4">
          <h5 class="font-size-14">
            <i class="bx bx-calendar me-1 text-primary" /> Created Date
          </h5>
          <p class="text-muted mb-0">{agent.createdDateTime}</p>
        </div>
      </Col>

      <Col sm="4" xs="6">
        <div class="mt-4">
          <h5 class="font-size-14">
            <i class="bx bx-calendar-check me-1 text-primary" /> Updated Date
          </h5>
          <p class="text-muted mb-0">{agent.updatedDateTime}</p>
        </div>
      </Col>
    </Row>
  </CardBody>
</Card>