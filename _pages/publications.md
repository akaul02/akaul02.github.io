---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 1
description: Preprints, posters, and talks.
---

<div class="publications">

<h2 class="bibliography-section">Preprints</h2>
{% bibliography --query @*[category=preprint]* --group_by none %}

<h2 class="bibliography-section">Posters</h2>
{% bibliography --query @*[category=poster]* --group_by none %}

<h2 class="bibliography-section">Talks</h2>
{% bibliography --query @*[category=talk]* --group_by none %}

</div>
