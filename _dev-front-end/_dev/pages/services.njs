{% extends "layout.njs" %}
{% set url = 'services' %}

{% block nav %}
	{% import '../templates/macros/nav.njs' as nav %}
	{{nav.active('services')}}
{% endblock %}

{% block content %}


	{% set content = {
	headline: 'Headline',
	subhead: 'Sub Head',
	copy: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Mauris vestibulum vitae libero vitae interdum. Vivamus iaculis
		sagittis odio, quis vehicula sapien. Duis vel porttitor turpis,
		congue feugiat diam. Suspendisse nec dapibus turpis.</p>
		<p> Duis lobortis viverra diam. Sed in erat sed tortor venenatis aliquet.
		Duis dapibus ex eu porta rutrum. Duis eu sollicitudin tortor.
		In ut lobortis risus, quis ultricies tellus. Etiam dignissim
		tincidunt turpis, nec tempor purus suscipit nec. Suspendisse
		neque leo, posuere vitae massa ac, iaculis tempor tellus.
		Nunc tincidunt enim at lorem sollicitudin rhoncus. Proin
		sodales, diam vel viverra consequat, sem est tincidunt
		quam, in porttitor nulla augue quis tellus. Maecenas
		tortor felis, mollis at porta non, interdum a turpis.
		Nullam vestibulum placerat fermentum.<p> '
	}
	%}
	{% include "../templates/partials/cp-general-content.njs" %}
	{% include "../templates/partials/cp-services-block.njs" %}
{% endblock %}
{% block footer %}
	{% include "../templates/partials/global-footer.njs" %}
{% endblock %}
