<div class="cp-services-block">
	<section>
		<div class="block-holder">
			{% for service in services %}
				<div class="service">
					<div>
						<h2>
							{{ service.Title }}
						</h2>
					</div>
					<div>
						<p>{{ service.desc | safe }}</p>
					</div>
				</div>
			{% endfor %}
		</div>
	</section>
</div>
