<script>
  import { Link } from "svelte-routing";
  import { Card, CardBody, CardTitle, Table } from "sveltestrap";
  export let functions;
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4">Functions</CardTitle>

    <div class="table-responsive">
      <Table class="table align-middle table-nowrap">
        <tbody>
          {#each functions as fn}
            <tr>
              <td style="width: 50px">
                <div class="avatar-xs">
                  <span
                    class="avatar-title rounded-circle bg-primary text-white font-size-16"
                  >
                      <img
                      src='/assets/images/chatbots/function.png'
                      class="rounded-circle avatar-xs"
                      alt=""
                    />
                  </span>
                </div>
              </td>
              <td>
                <h5 class="font-size-14 m-0">
                  <Link to="" class="text-dark">
                    {fn.name}
                  </Link>
                </h5>
              </td>
              <td>
                <div>
                  {fn.description}
                  <!--{#each fn.parameters as param}
                    <Link
                      to="#"
                      class="badge bg-primary bg-soft text-primary font-size-11 me-1"
                    >
                      {param.type}{" "}
                    </Link>
                  {/each}-->
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </div>
  </CardBody>
</Card>
