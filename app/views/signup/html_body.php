<div class="default-container">
	<div class="default-container-left-side">
		<div class="default-container-left-table-cell">
			<h1>
				Flippy Coins
			</h1>
			<div class="title-sub-text">
				<h3>
					Sign up and start flipping!
				</h3>
			</div>
		</div>
	</div>
	<div class="default-container-right-side">
		<div class="section-default-container">
			<div class="section-default-container-inner">
				<form id="signup_form">
					<div class="form-row-container">
						<input class="input-default" type="text" name="email" placeholder="email" />
						<div class="input-error-message">
							Invalid email.
						</div>
					</div>
					<div class="form-row-container">
						<input class="input-default" type="text" name="username" placeholder="username" />
						<div class="input-error-message">
							Invalid username (Min legth 4. Characters and numbers allowed).
						</div>
					</div>
					<div class="form-row-container">
						<input class="input-default" type="text" name="first_name" placeholder="first name" />
						<div class="input-error-message">
							Invalid first name.
						</div>
					</div>
					<div class="form-row-container">
						<input class="input-default" type="text" name="last_name" placeholder="last name" />
						<div class="input-error-message">
							Invalid last name.
						</div>
					</div>
					<div class="form-row-container">
						<input class="input-default" type="password" name="password" placeholder="password" />
						<div class="input-error-message">
							Password must be at least 8 characters long.
						</div>
					</div>
					<div class="form-row-container">
						<input class="input-default" type="password" name="confirm_password" placeholder="confirm password" />
						<div class="input-error-message">
							Passwords don't match and or are not 8 characters long.
						</div>
					</div>
				</form>
				<div class="form-row-container">
					<div class="default-button button-color-blue">
						Sign Up
					</div>
				</div>
				<div class="or-divider">
					- OR -
				</div>
				<div class="form-row-container">
					<a href="<?php echo HREF_BASE_URL; ?>login">
						<div class="default-button button-color-green">
							Log In
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>