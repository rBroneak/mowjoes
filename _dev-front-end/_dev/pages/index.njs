{% extends "layout.njs" %}
{% block nav %}
	{% import '../templates/macros/nav.njs' as nav %}
	{{nav.active('')}}
{% endblock %}

{% block content %}
	<div class="cp-lead-in">
		<section>
			<header>
				<h1>Mow Joe Outdoor Solutions is a small family business servicing properties in White Bear Lake, Maplewood, Oakdale, Woodbury and Mahtomedi.</h1>
			</header>
		</section>
	</div>
	{% set content = {
	headline: 'Headline',
	subhead: 'Sub Head',
	copy: '<p>We are an established business relying on our reputation in the communities
	we service and provide individual attention to achieve your complete satisfaction.
	From the beginning, you will see a difference with Mow Joe Outdoor Solutions.
	We will provide you with better service built on relationships. At Mow Joe, we care about you.</p>
	<p>When you take on our business we make your satisfaction our number one priority. Give
	us a call or send us an email, we’d love to hear from you!</p>'
	}
	%}
	{#{% include "../templates/partials/cp-general-content.njs" %}#}
	{% include "../templates/partials/cp-services-block.njs" %}
	{% include "../templates/partials/cp-callout.njs" %}
	{% include "../templates/partials/cp-testimonials.njs" %}
{% endblock %}
{% block footer %}
	{% include "../templates/partials/global-footer.njs" %}
{% endblock %}
