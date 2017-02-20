{% macro active(activePage='') %}
	<!-- global-nav.njs -->
	<div class="cp-global-nav">
		<section>
			<div class="flex-item">
				<h1><a href="/">Logo Here</a></h1>
			</div>
			<div class="flex-item">
				<nav>
					<ul>
						<li{% if activePage == 'services' %} class="active"{% endif %}><a href="/services.html">Services</a></li>
						<li{% if activePage == 'jobs' %} class="active"{% endif %}><a href="/jobs.html">Jobs</a></li>
						<li{% if activePage == 'testimonials' %} class="active"{% endif %}><a href="/testimonials.html">Testimonials</a></li>
						<li{% if activePage == 'contact' %} class="active"{% endif %}><a href="/contact.html" class="btn">Contact</a></li>
					</ul>
				</nav>
			</div>
		</section>
	</div>
{% endmacro %}