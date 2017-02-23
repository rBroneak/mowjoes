{% extends "layout.njs" %}
{% set url = 'services' %}

{% block nav %}
	{% import '../templates/macros/nav.njs' as nav %}
	{{nav.active('services')}}
{% endblock %}

{% block content %}

	<div class="cp-lead-in" style="background-image: url(../images/service-area.jpg)">
		<section>
			<header>
				<h1>Services</h1>
			</header>
			<div class="copy-block">
				<h2>We strive to make sure that your demands, questions, and requests are met every time. You can have confidence in approaching anyone at Mow Joe Outdoor Solutions.</h2>
			</div>
		</section>
	</div>
	{% include "../templates/partials/cp-services-block.njs" %}
{% endblock %}
{% block footer %}
	{% include "../templates/partials/global-footer.njs" %}
{% endblock %}
