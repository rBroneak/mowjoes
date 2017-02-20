<div class="cp-services-block">
	<section>
		<div class="block-holder">
			{% for service in services %}
				<div class="service">{{ service.Title }}</div>
			{% endfor %}
		</div>
	</section>
</div>
