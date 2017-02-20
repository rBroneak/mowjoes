{% extends "layout.njs" %}

{% block nav %}
	{% import '../templates/macros/nav.njs' as nav %}
	{{nav.active('contact')}}
{% endblock %}

{% block content %}



	<div>Contact</div>
	{% include "../templates/partials/global-footer.njs" %}
{% endblock %}

