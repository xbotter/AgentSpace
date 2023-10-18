<script>
  import { Link } from "svelte-routing";
  import { Badge, Card, CardBody, Col } from "sveltestrap";
  import { format } from "../../helpers/datetime"
  export let agents;
</script>

{#each agents as agent}
  <Col xl="4" sm="6">
    <Card>
      <CardBody>
        <div class="d-flex">
          <div class="avatar-md me-4">
            <span
              class="avatar-title rounded-circle bg-light text-danger font-size-16"
            >
              <img src="../../assets/images/chatbots/online-chat-business.png" alt="" height="45" />
            </span>
          </div>

          <div class="flex-grow-1 overflow-hidden">
            <h5 class="text-truncate font-size-15">
              <Link to={`/agent-overview/${agent.id}`} class="text-dark">
                {agent.name}
              </Link>
            </h5>
            <p class="text-muted mb-4">{agent.description}</p>

            <div class="avatar-group">
              {#if agent.functions && agent.functions.length > 0}
                {#each agent.functions as fn}
                  <div class="avatar-group-item">
                    <Link to="#" class="d-inline-block" id={"member" + fn.name}>
                      <img
                        src='../../assets/images/chatbots/function.png'
                        class="rounded-circle avatar-xs"
                        alt=""
                      />
                    </Link>
                  </div>
                {/each}
              {:else}
                <div class="avatar-group-item">
                  <Link to="#" class="d-inline-block">
                    <div class="avatar-xs">
                      <span
                        class={"avatar-title rounded-circle bg-" +
                          'warning' +
                          " text-white font-size-16"}
                      >
                      </span>
                    </div>
                  </Link>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </CardBody>
      <div class="px-4 py-3 border-top">
        <ul class="list-inline mb-0">
          <li class="list-inline-item me-3">
            <Badge color='success' class={"bg-" + 'success'}
              >Online</Badge>
          </li>
          {" "}
          <li class="list-inline-item me-3" id="dueDate">
            <i class="bx bx-calendar me-1" />
            {format(agent.updatedDateTime)}
          </li>
          {" "}
          <li class="list-inline-item me-3" id="comments">
            <i class="bx bx-comment-dots me-1" />{" "}
            2
          </li>
        </ul>
      </div>
    </Card>
  </Col>
{/each}