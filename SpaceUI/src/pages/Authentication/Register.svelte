<script>
	import { navigate } from 'svelte-routing';
    import { Container, Row, Col, Card, CardBody,Button} from 'sveltestrap';
    import { Link } from 'svelte-routing';
	import { register } from '../../services/auth-service.js'

	let email = 'botsharp@gmail.com';
	let password = '123456';
	let firstName = 'Haiping';
	let lastName = 'Chen';

	const handleRegisterForm = async () => {
		register(firstName,lastName,email,password, _ => navigate('/login') );
	};

</script>

<div class="account-pages my-5 pt-sm-5">
	<Container>
	  <Row class="justify-content-center">
		<Col md={8} lg={8} xl={5}>
		  <Card class="overflow-hidden">
			<div class="bg-primary bg-soft">
			  <Row>
				<Col class="col-7">
				  <div class="text-primary p-4">
					<h5 class="text-primary">Free Register</h5>
					<p>Get your free Skote account now.</p>
				  </div>
				</Col>
				<Col class="col-5 align-self-end">
				  <img
					src="assets/images/profile-img.png"
					alt=""
					class="img-fluid"
				  />
				</Col>
			  </Row>
			</div>
			<CardBody class="pt-0">
			  <div>
				<Link to="/">
				  <div class="avatar-md profile-user-wid mb-4">
					<span class="avatar-title rounded-circle bg-light">
					  <img
						src="assets/images/logo.png"
						alt=""
						class="rounded-circle"
						height="65"
					  />
					</span>
				  </div>
				</Link>
			  </div>
			  <div class="p-2">
				<form on:submit|preventDefault={handleRegisterForm}>
				  <div class="mb-3">
					<label for="useremail" class="form-label">Email</label>
					<input
						type="email"
						name="email"
						class="form-control"
						id="email"
						placeholder="Enter email"
						bind:value={email}
					/>
					<div class="invalid-feedback">Please Enter Email</div>
				  </div>
  
				  <div class="mb-3">
					<label for="firstName" class="form-label">FirstName</label>
					<input
						type="text"
						name="firstName"
						class="form-control"
						id="firstName"
						placeholder="Enter firstName"
						bind:value={firstName}
					/>
					<div class="invalid-feedback">Please Enter firstName</div>
				  </div>

				  <div class="mb-3">
					<label for="lastName" class="form-label">LastName</label>
					<input
						type="text"
						name="lastName"
						class="form-control"
						id="lastName"
						placeholder="Enter lastName"
						bind:value={lastName}
					/>
					<div class="invalid-feedback">Please Enter lastName</div>
				  </div>
  
				  <div class="mb-3">
					<label for="userpassword" class="form-label">Password</label>
					<input
						type="password"
						name="password"
						class="form-control"
						id="password"
						placeholder="Enter password"
						bind:value={password}
					/>
					<div class="invalid-feedback">Please Enter Password</div>
				  </div>
  
				  <div class="mt-4 d-grid">
					<button class="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
				  </div>
  
				  <div class="mt-4 text-center">
					<h5 class="font-size-14 mb-3">Sign up using</h5>
  
					<ul class="list-inline">
					  <li class="list-inline-item">
						<Link
						  to={"#"}
						  class="social-list-item bg-primary text-white border-primary"
						>
						  <i class="mdi mdi-facebook" />
						</Link>
					  </li>
					  <li class="list-inline-item">
						<Link
						  to={"#"}
						  class="social-list-item bg-info text-white border-info"
						>
						  <i class="mdi mdi-twitter" />
						</Link>
					  </li>
					  <li class="list-inline-item">
						<Link
						  to={"#"}
						  class="social-list-item bg-danger text-white border-danger"
						>
						  <i class="mdi mdi-google" />
						</Link>
					  </li>
					</ul>
				  </div>
  
				  <div class="mt-4 text-center">
					<p class="mb-0">
					  By registering you agree to the Skote <Link
						to={"#"}
						class="text-primary">Terms of Use</Link
					  >
					</p>
				  </div>
				</form>
			  </div>
			</CardBody>
		  </Card>
		  <div class="mt-5 text-center">
			<p>
			  Already have an account ?
			  <Link to="/login" class="fw-medium text-primary">Login</Link>
			</p>
			<p>
			  © {new Date().getFullYear()} Agent Space. Crafted with
			  <i class="mdi mdi-heart text-danger" /> by SciSharp STACK
			</p>
		  </div>
		</Col>
	  </Row>
	</Container>
  </div>
