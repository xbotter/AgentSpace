<script>
  import { Link } from "svelte-routing";
  import { Badge, Card, CardBody, Col } from "sveltestrap";
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
              <Link to={`/projects-overview/${agent.id}`} class="text-dark">
                {agent.name}
              </Link>
            </h5>
            <p class="text-muted mb-4">{agent.description}</p>

            <!--<div class="avatar-group">
              {#each project.team as team}
                {#if !team.img || team.img !== "Null"}
                  <div class="avatar-group-item">
                    <Link to="#" class="d-inline-block" id={"member" + team.id}>
                      <img
                        src={team.img}
                        class="rounded-circle avatar-xs"
                        alt=""
                      />
                    </Link>
                  </div>
                {:else}
                  <div class="avatar-group-item">
                    <Link to="#" class="d-inline-block" id={"member" + team.id}>
                      <div class="avatar-xs">
                        <span
                          class={"avatar-title rounded-circle bg-" +
                            team.color +
                            " text-white font-size-16"}
                        >
                          {team.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                {/if}
              {/each}
            </div>-->
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
            {agent.updatedDateTime}
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