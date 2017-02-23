<div class="cp-services-block">
	<section>
		<div class="block-holder">
			{% for service in services %}
				<div class="service">
					<h4>
						{{ service.Title }}
					</h4>
				</div>
			{% endfor %}
		</div>
	</section>
</div>
